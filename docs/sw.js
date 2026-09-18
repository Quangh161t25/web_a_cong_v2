// Service Worker for ERP GitHub Pages
// Intercepts RSC and API requests, proxies to origin server

const ORIGIN = 'https://template00013.5fedu.com';
const BASE = '/web_a_cong_v2';
const CACHE_NAME = 'erp-chunks-v1';

// On install - cache nothing special, let fetch handle it
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const pathname = url.pathname;
  const search = url.search;

  // 1. RSC payload requests (Next.js navigation) -> proxy to origin
  if (search.includes('_rsc=')) {
    const originUrl = ORIGIN + pathname.replace(BASE, '') + search;
    event.respondWith(
      fetch(originUrl, {
        method: event.request.method,
        headers: {
          'Accept': event.request.headers.get('Accept') || 'text/x-component',
          'User-Agent': 'Mozilla/5.0',
        },
        mode: 'cors',
        credentials: 'omit',
      }).catch(() => new Response('{}', { status: 200 }))
    );
    return;
  }

  // 2. API calls -> proxy to origin
  if (pathname.startsWith('/api/') || pathname.startsWith('/auth/') ||
      pathname.startsWith(BASE + '/api/') || pathname.startsWith(BASE + '/auth/')) {
    const apiPath = pathname.replace(BASE, '');
    const originUrl = ORIGIN + apiPath + search;
    event.respondWith(
      fetch(originUrl, {
        method: event.request.method,
        headers: { ...Object.fromEntries(event.request.headers), host: 'template00013.5fedu.com' },
        mode: 'cors',
        credentials: 'omit',
      })
    );
    return;
  }

  // 3. Next.js chunks -> serve from GitHub Pages (cache first)
  if (pathname.includes('/_next/static/')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((resp) => {
            cache.put(event.request, resp.clone());
            return resp;
          });
        });
      })
    );
    return;
  }

  // 4. Default: normal fetch
  event.respondWith(fetch(event.request));
});
