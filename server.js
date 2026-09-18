const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');
const zlib = require('zlib');

const PORT = 3001;
const CHUNKS_DIR = path.join(__dirname, 'downloaded', 'chunks');
const ORIGIN_HOST = 'template00013.5fedu.com';
const ORIGIN = 'https://' + ORIGIN_HOST;

const MIME_TYPES = {
  '.js':          'application/javascript; charset=utf-8',
  '.css':         'text/css; charset=utf-8',
  '.json':        'application/json',
  '.png':         'image/png',
  '.jpg':         'image/jpeg',
  '.svg':         'image/svg+xml',
  '.ico':         'image/x-icon',
  '.woff':        'font/woff',
  '.woff2':       'font/woff2',
  '.webmanifest': 'application/manifest+json',
  '.txt':         'text/plain',
  '.html':        'text/html; charset=utf-8',
};

// ---- Forward request to origin and stream back to client ----
function proxyToOrigin(req, res) {
  const reqUrl = req.url;
  console.log(`[PROXY ->] ${req.method} ${reqUrl}`);

  const options = {
    hostname: ORIGIN_HOST,
    port: 443,
    path: reqUrl,
    method: req.method,
    headers: {
      ...req.headers,
      host: ORIGIN_HOST,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    },
  };
  // remove problematic headers
  delete options.headers['accept-encoding']; // let origin decide
  options.headers['accept-encoding'] = 'identity'; // no compression, simpler

  const proxyReq = https.request(options, (proxyRes) => {
    // Pass through all response headers except content-encoding issues
    const respHeaders = { ...proxyRes.headers };
    // Ensure CORS
    respHeaders['access-control-allow-origin'] = '*';
    // Remove strict transport security for local use
    delete respHeaders['strict-transport-security'];

    res.writeHead(proxyRes.statusCode, respHeaders);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', (e) => {
    console.error('[PROXY ERROR]', e.message);
    if (!res.headersSent) {
      res.writeHead(502, { 'Content-Type': 'text/plain' });
    }
    res.end('Proxy Error: ' + e.message);
  });

  req.pipe(proxyReq, { end: true });
}

// ---- Serve local chunk files ----
function serveLocalChunk(chunkName, res) {
  const filePath = path.join(CHUNKS_DIR, chunkName);
  if (!fs.existsSync(filePath)) return false;

  const ext = path.extname(chunkName).toLowerCase();
  const mime = MIME_TYPES[ext] || 'application/octet-stream';
  const data = fs.readFileSync(filePath);
  res.writeHead(200, {
    'Content-Type': mime,
    'Cache-Control': 'public, max-age=86400',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(data);
  return true;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = decodeURIComponent(parsedUrl.pathname || '/');

  // ---- Serve local chunks (JS/CSS) from downloaded folder ----
  if (pathname.startsWith('/_next/static/chunks/')) {
    const chunkName = path.basename(pathname);
    if (serveLocalChunk(chunkName, res)) {
      console.log(`[LOCAL]   ${pathname}`);
      return;
    }
  }

  // ---- Everything else: proxy to origin ----
  proxyToOrigin(req, res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`
╔══════════════════════════════════════════════════════╗
║   🚀  ERP Proxy Server                               ║
║   Local:  http://localhost:${PORT}                      ║
║   Origin: ${ORIGIN}  ║
╚══════════════════════════════════════════════════════╝

📦 JS/CSS chunks phục vụ từ local (${CHUNKS_DIR})
🔗 Tất cả request khác proxy về ${ORIGIN}

→ Mở trình duyệt: http://localhost:${PORT}
→ Ctrl+C để dừng
`);
});

server.on('error', (e) => {
  console.error('Server error:', e.message);
  process.exit(1);
});
