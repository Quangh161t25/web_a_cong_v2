(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,346944,e=>{"use strict";var t=e.i(271645);let i=(e,t)=>{let i=e instanceof Map?e:new Map(e.entries()),a=t instanceof Map?t:new Map(t.entries());if(i.size!==a.size)return!1;for(let[e,t]of i)if(!a.has(e)||!Object.is(t,a.get(e)))return!1;return!0};e.s(["useShallow",0,function(e){let a=t.default.useRef(void 0);return t=>{let n=e(t);return!function(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Symbol.iterator in e&&Symbol.iterator in t){if("entries"in e&&"entries"in t)return i(e,t);let a=e[Symbol.iterator](),n=t[Symbol.iterator](),o=a.next(),r=n.next();for(;!o.done&&!r.done;){if(!Object.is(o.value,r.value))return!1;o=a.next(),r=n.next()}return!!o.done&&!!r.done}return i({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}(a.current,n)?a.current=n:a.current}}],346944)},24139,43511,e=>{"use strict";var t=e.i(271645),i=e.i(619273),a=e.i(933818),n=e.i(954616),o=e.i(266027),r=e.i(912598),d=e.i(346944),c=e.i(328118),s=e.i(54932),l=e.i(644075),h=e.i(204594),p=e.i(347034);e.i(991715);var u=e.i(232539),g=e.i(547061),m=e.i(897398);let x=(0,u.buildTableColumns)(m.DE_XUAT_CHI_PHI_FIELDS),f=(0,g.createGenericStore)({columnSearch:{},status:[]},x,"table-de-xuat-chi-phi");function b(e,t,i,a,n){return{limit:t,offset:(e-1)*t,orderBy:i.column&&i.column.length>0?i.column:h.DE_XUAT_CHI_PHI_LIST_QUERY_PARAMS.orderBy,ascending:"desc"!==i.direction,search:a.trim()||void 0,activeOnly:function(e){if(1===e.length&&"Active"===e[0])return!0}(n.status)}}function _(e){let t=e.limit??20,i=e.offset??0,n=e.orderBy??h.DE_XUAT_CHI_PHI_LIST_QUERY_PARAMS.orderBy,o=e.ascending??h.DE_XUAT_CHI_PHI_LIST_QUERY_PARAMS.ascending;return(0,a.queryOptions)({queryKey:h.DE_XUAT_CHI_PHI_QUERY_KEYS.page({limit:t,offset:i,orderBy:n,ascending:o,search:e.search,activeOnly:e.activeOnly}),queryFn:()=>(0,p.getDeXuatChiPhiPage)({...e,limit:t,offset:i,orderBy:n,ascending:o})})}function y(e){e.invalidateQueries({queryKey:h.DE_XUAT_CHI_PHI_QUERY_KEYS.pagePrefix}),e.invalidateQueries({queryKey:h.DE_XUAT_CHI_PHI_QUERY_KEYS.all})}e.s(["useDeXuatChiPhiStore",0,f],43511),e.s(["useCreateDeXuatChiPhi",0,function(){let e=(0,r.useQueryClient)();return(0,n.useMutation)({mutationFn:e=>(0,p.createDeXuatChiPhi)(e),onSuccess:()=>{y(e),l.toast.success((0,s.txt)("deXuatChiPhi.toast.createSuccess"))}})},"useDeXuatChiPhi",0,e=>(0,o.useQuery)((0,a.queryOptions)({queryKey:h.DE_XUAT_CHI_PHI_QUERY_KEYS.detail(e),queryFn:()=>(0,p.getDeXuatChiPhiById)(e),enabled:!!e})),"useDeXuatChiPhiList",0,()=>(0,o.useQuery)((0,a.queryOptions)({queryKey:h.DE_XUAT_CHI_PHI_QUERY_KEYS.all,queryFn:p.getDeXuatChiPhiList,...c.masterDataQueryOptions})),"useDeXuatChiPhiPageFromStore",0,function(){let{pagination:e,sort:a,searchTerm:n,filters:r,setPage:c}=f((0,d.useShallow)(e=>({pagination:e.pagination,sort:e.sort,searchTerm:e.searchTerm,filters:e.filters,setPage:e.setPage})));return(0,t.useEffect)(()=>{c(1)},[n,r.status,c]),function({pagination:e,sort:t,searchTerm:a,filters:n}){let r=b(e.page,e.pageSize,t,a,n),d=(0,o.useQuery)({..._(r),placeholderData:i.keepPreviousData});return{data:d.data?.items??[],total:d.data?.total??0,isLoading:d.isLoading,isFetching:d.isFetching,mode:"server"}}({pagination:e,sort:a,searchTerm:n,filters:r})},"useDeXuatChiPhiStatusCounts",0,function(e){let t=e.trim()||void 0,i=(0,o.useQuery)(_({limit:1,search:t,activeOnly:!0})),a=(0,o.useQuery)(_({limit:1,search:t})),n=i.data?.total??0;return{Active:n,Inactive:Math.max(0,(a.data?.total??0)-n)}},"useDeleteDeXuatChiPhi",0,function(){let e=(0,r.useQueryClient)();return(0,n.useMutation)({mutationFn:async e=>{for(let t of e)await (0,p.deleteDeXuatChiPhi)(t)},onSuccess:(t,i)=>{y(e),l.toast.success((0,s.txt)("deXuatChiPhi.toast.deleteSuccess",{count:i.length}))}})},"useFetchAllDeXuatChiPhiForExport",0,function(){let{sort:e,searchTerm:i,filters:a}=f((0,d.useShallow)(e=>({sort:e.sort,searchTerm:e.searchTerm,filters:e.filters})));return(0,t.useCallback)(()=>{let t=b(1,100,e,i,a);return(0,p.getAllDeXuatChiPhiForExport)(t)},[e,i,a])},"useUpdateDeXuatChiPhi",0,function(){let e=(0,r.useQueryClient)();return(0,n.useMutation)({mutationFn:({id:e,data:t})=>(0,p.updateDeXuatChiPhi)(e,t),onSuccess:()=>{y(e),l.toast.success((0,s.txt)("deXuatChiPhi.toast.updateSuccess"))}})},"useUpdateStatusDeXuatChiPhiMany",0,function(){let e=(0,r.useQueryClient)();return(0,n.useMutation)({mutationFn:async({ids:e,status:t})=>{for(let i of e)await (0,p.updateDeXuatChiPhi)(i,{trang_thai:t})},onSuccess:()=>{y(e),l.toast.success((0,s.txt)("deXuatChiPhi.toast.updateSuccess"))}})}],24139)},265756,e=>{"use strict";e.s(["downloadBlob",0,function(e,t){let i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.rel="noopener",a.style.display="none",document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e4)}])},921313,e=>{"use strict";let t="#1f2937",i="#4b5563",a="#6b7280",n="#d7dae0",o="#f7f8fa";var r=e.i(805378);e.s(["buildPrintDocumentCSS",0,function(e={}){let d=e.fontStack??"'Times New Roman', Tinos, 'Liberation Serif', serif",c=e.page??r.DEFAULT_PAGE_SPEC,s=(0,r.pageMarginMm)(c),l=Math.max(1,Math.floor(e.copies??1)),h=e.includePage?`@page {
  size: ${(0,r.cssPageSizeDeclaration)(c)};
  margin: ${s.top}mm ${s.right}mm ${s.bottom}mm ${s.left}mm;
}
`:"",p=l>=2?`.epdoc-copy {
  break-inside: avoid;
  page-break-inside: avoid;
  position: relative;
}
.epdoc-copy + .epdoc-copy {
  margin-top: ${r.PRINT_COPY_GAP_MM}mm;
  padding-top: ${r.PRINT_COPY_GAP_MM}mm;
  border-top: 1px dashed ${n};
}
.epdoc-copy-label {
  font-size: 7pt;
  color: ${i};
  text-align: right;
  margin: 0 0 2px 0;
}
`:"";return`${h}${p}.epdoc-root {
  font-family: ${d};
  font-size: 11pt;
  line-height: 1.45;
  color: ${t};
  background: #ffffff;
  /* Kh\xf4ng để một d\xf2ng chữ lẻ đứng cuối/đầu trang khi khối bị ngắt qua trang. */
  orphans: 2;
  widows: 2;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
.epdoc-sheet {
  padding: ${s.top}mm ${s.right}mm ${s.bottom}mm ${s.left}mm;
}
.epdoc-root * {
  box-sizing: border-box;
}

/* ---------- Letterhead (table, kh\xf4ng flex — Word kh\xf4ng hỗ trợ flexbox) ---------- */
.epdoc-letterhead {
  width: 100%;
  border-collapse: collapse;
  margin: 0 0 10px 0;
}
.epdoc-letterhead td {
  padding: 0;
}
/* Logo + th\xf4ng tin c\xf4ng ty canh giữa theo chiều dọc so với \xf4 ảnh 3\xd74 (cao 40mm),
   nếu canh top sẽ hở một khoảng trắng lớn dưới khối c\xf4ng ty. */
.epdoc-letterhead-logo {
  width: 64px;
  vertical-align: middle;
}
.epdoc-header-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
.epdoc-letterhead-info {
  vertical-align: middle;
  padding-left: 10px !important;
}
.epdoc-letterhead-photo {
  width: 30mm;
  vertical-align: top;
}
.epdoc-company-name {
  font-size: 14pt;
  font-weight: 700;
  color: ${t};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin: 0;
}
.epdoc-company-meta {
  font-size: 9pt;
  color: ${i};
  margin: 2px 0 0 0;
}
.epdoc-photo {
  width: 30mm;
  height: 40mm;
  object-fit: cover;
  border: 1px solid ${n};
}
.epdoc-photo-placeholder {
  width: 30mm;
  height: 40mm;
  margin-left: auto;
  border: 1px dashed ${n};
  color: ${a};
  font-size: 7pt;
  text-align: center;
  line-height: 40mm;
}

/* ---------- Ti\xeau đề & khối định danh ---------- */
.epdoc-title {
  font-size: 16pt;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 4px 0 8px 0;
  padding-top: 8px;
  border-top: 2px solid ${t};
}
.epdoc-heading {
  width: 100%;
  border-collapse: collapse;
  margin: 0 0 4px 0;
}
.epdoc-heading td {
  padding: 0;
  vertical-align: bottom;
}
.epdoc-heading-name {
  font-size: 14pt;
  font-weight: 700;
  color: ${t};
}
.epdoc-heading-code {
  text-align: right;
  font-size: 11pt;
  color: ${i};
  white-space: nowrap;
}
.epdoc-heading-role {
  font-size: 11pt;
  color: ${i};
  padding-top: 2px !important;
}

/* ---------- Section: thanh ti\xeau đề + lưới 2 cột ---------- */
.epdoc-section {
  margin-top: 10px;
}
.epdoc-section-bar {
  background: #eff6ff;
  color: #1d4ed8;
  border-left: 3px solid #3b82f6;
  padding: 3px 6px;
  font-size: 9pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  break-after: avoid;
  page-break-after: avoid;
}
.epdoc-fields {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.epdoc-fields tr {
  break-inside: avoid;
  page-break-inside: avoid;
}
/*
 * D\xf2ng wide (địa chỉ, l\xfd do nghỉ, t\xean trường) chiếm cả bề ngang v\xe0 c\xf3 thể d\xe0i hơn một
 * trang. Với break-inside:avoid tr\xean một h\xe0ng CAO HƠN trang giấy, Chrome buộc phải ngắt
 * bất chấp v\xe0 h\xe0nh vi kh\xf4ng x\xe1c định. Cho ph\xe9p ngắt ở ri\xeang những h\xe0ng đ\xf3 th\xec phần thừa
 * chảy sang trang sau b\xecnh thường.
 *
 * (Kh\xf4ng d\xf9ng dấu backtick trong comment ở đ\xe2y: cả khối CSS n\xe0y nằm trong một template
 * literal, backtick sẽ đ\xf3ng chuỗi giữa đường.)
 */
.epdoc-fields tr.epdoc-row-wide {
  break-inside: auto;
  page-break-inside: auto;
}
.epdoc-fields td {
  border: 1px solid ${n};
  padding: 3px 6px;
  vertical-align: top;
  font-size: 11pt;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.epdoc-label {
  width: 22%;
  background: ${o};
  color: ${i};
  /* 700 chứ kh\xf4ng 600: Tinos/Times chỉ c\xf3 400 v\xe0 700 — số ở giữa bị Chromium
     l\xe0m ĐẬM GIẢ, n\xe9t d\xe0y hơn hẳn 700 thật v\xe0 lệch so với preview. */
  font-weight: 700;
}
.epdoc-value {
  width: 28%;
  color: ${t};
}

/* ---------- Đầu chứng từ: đơn vị b\xean tr\xe1i, mẫu số + số chứng từ b\xean phải ---------- */
.epdoc-voucher-head {
  width: 100%;
  border-collapse: collapse;
}
.epdoc-voucher-head td {
  padding: 0;
  vertical-align: top;
}
.epdoc-voucher-head-left {
  width: 65%;
}
.epdoc-voucher-head-right {
  text-align: right;
  white-space: nowrap;
}
.epdoc-voucher-number {
  font-size: 11pt;
  font-weight: 700;
  margin: 2px 0 0 0;
}
.epdoc-voucher-date {
  text-align: center;
  font-style: italic;
  margin: 0 0 6px 0;
}

/* ---------- Bảng d\xf2ng chi tiết của chứng từ ---------- */
.epdoc-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin-top: 8px;
}
/*
  table-header-group l\xe0 c\xe1ch duy nhất để h\xe0ng ti\xeau đề lặp lại ở đầu mỗi trang khi
  bảng d\xe0i hơn một tờ. Thiếu n\xf3 th\xec trang 2 trở đi l\xe0 một khối số kh\xf4ng c\xf3 t\xean cột.
*/
.epdoc-table thead {
  display: table-header-group;
}
.epdoc-table th,
.epdoc-table td {
  border: 1px solid ${n};
  padding: 3px 5px;
  vertical-align: top;
  word-wrap: break-word;
}
.epdoc-table th {
  background: ${o};
  font-weight: 700;
  text-align: center;
  font-size: 9pt;
  text-transform: uppercase;
}
.epdoc-table tr {
  break-inside: avoid;
  page-break-inside: avoid;
}
.epdoc-table-total td {
  font-weight: 700;
  background: ${o};
}
.epdoc-amount-words {
  margin: 6px 0 0 0;
  font-style: italic;
}

/* ---------- Chữ k\xfd & ch\xe2n trang ---------- */
.epdoc-sign-footer {
  width: 100%;
  border-collapse: collapse;
  margin-top: 18pt;
  break-inside: avoid;
  page-break-inside: avoid;
}
/*
  Kh\xf4ng khai width ở đ\xe2y: số \xf4 k\xfd thay đổi theo loại t\xe0i liệu (2–5 \xf4), n\xean bề rộng
  do component t\xednh inline theo 100/n. Khai 25% cứng ở đ\xe2y từng l\xe0 l\xfd do mọi t\xe0i
  liệu buộc phải c\xf3 đ\xfang 4 \xf4 k\xfd.
*/
.epdoc-sign-box {
  vertical-align: top;
  text-align: center;
  font-size: 8.5pt;
  line-height: 1.45;
  padding: 0 4px;
}
.epdoc-sign-box-title {
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  white-space: nowrap;
}
.epdoc-sign-box-hint {
  font-size: 8pt;
  color: ${i};
  margin: 2px 0 0 0;
}
.epdoc-sign-space {
  height: 25mm;
}
/*
  Họ t\xean người đại diện, in sẵn DƯỚI chỗ k\xfd (var_cong_ty.nguoi_dai_dien). Chỉ \xf4
  người đại diện c\xf3 — c\xe1c \xf4 kh\xe1c vẫn để trống cho người k\xfd tự ghi.
*/
.epdoc-sign-box-name {
  font-weight: 700;
  margin: 0;
}
.epdoc-printed-at {
  font-size: 7pt;
  color: ${a};
  margin-top: 12px;
}
.epdoc-divider {
  border: 0;
  border-top: 1px solid ${n};
  margin: 10px 0;
}
@media print {
  .epdoc-sheet {
    padding: 0 !important;
    box-shadow: none !important;
  }
}`}],921313)},714884,67170,e=>{"use strict";let t=(0,e.i(475254).default)("file-type",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5",key:"qbrxap"}]]);e.s(["FileType",0,t],714884),e.s(["safeFileName",0,function(e){return e.replace(/\s+/g,"_").replace(/[<>:"/\\|?*]/g,"")}],67170)},271869,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(618566),n=e.i(178583),o=e.i(714884);e.i(621592);var r=e.i(84611),d=e.i(958598),c=e.i(178560),s=e.i(374),l=e.i(735671),h=e.i(725953),p=e.i(265756),u=e.i(67170),g=e.i(921313),m=e.i(172562),x=e.i(54932),f=e.i(644075),b=e.i(647163),_=e.i(222238),y=e.i(24139),v=e.i(377081);e.s(["default",0,()=>{let e=(0,a.useParams)(),C=e?.id??"",P=(0,a.useRouter)(),w=(0,a.usePathname)(),{data:k,isLoading:S}=(0,s.useCompanyInfo)(),{data:D,isLoading:X,isError:$,error:T,refetch:E}=(0,y.useDeXuatChiPhi)(C),[I]=(0,i.useState)(()=>(0,b.formatDateTime)(new Date)),j=(0,i.useCallback)(()=>{if(window.opener)return void window.close();let e=(0,d.getParentPath)(w??"",x.txt);P.push(e??"/tai-chinh/de-xuat-chi-phi")},[P,w]),A=(0,i.useMemo)(()=>(0,g.buildPrintDocumentCSS)({includePage:!0,page:_.DE_XUAT_CHI_PHI_VOUCHER.page,copies:_.DE_XUAT_CHI_PHI_VOUCHER.copies?.length}),[]),U=(0,i.useMemo)(()=>D&&k?(0,m.buildVoucherModel)(_.DE_XUAT_CHI_PHI_VOUCHER,D,{ten_cong_ty:k.ten_cong_ty,dia_chi:k.dia_chi,email:k.email,so_dien_thoai:k.so_dien_thoai,logo:k.logo,ma_so_thue:k.ma_so_thue,website:k.website,dia_diem_ky:k.dia_diem_ky,nguoi_dai_dien:k.nguoi_dai_dien,chuc_vu_nguoi_dai_dien:k.chuc_vu_nguoi_dai_dien},I):null,[D,k,I]),M=(0,i.useMemo)(()=>{let e=[];return(0,l.isApi)()&&e.push({format:"docx",label:(0,x.txt)("deXuatChiPhi.print.doc"),icon:(0,t.jsx)(o.FileType,{size:14})}),e.push({format:"pdf",label:(0,x.txt)("deXuatChiPhi.print.pdf"),icon:(0,t.jsx)(n.FileText,{size:14})}),e},[]),H=(0,i.useCallback)(async e=>{if(!D)return;let t=`Phieu_de_xuat_${(0,u.safeFileName)(D.so_phieu??String(D.id))}`;if(!(0,l.isApi)()){f.toast.info((0,x.txt)("deXuatChiPhi.print.printFallback")),await (0,h.printWhenReady)();return}let{blob:i,filename:a}="pdf"===e?await (0,v.apiGetDeXuatChiPhiVoucherPdf)(D.id):await (0,v.apiGetDeXuatChiPhiVoucherDocx)(D.id);(0,p.downloadBlob)(i,a??`${t}.${"pdf"===e?"pdf":"docx"}`)},[D]),O=(0,t.jsx)("p",{className:"hidden print:block text-center",children:(0,x.txt)("document.notReady")});return X||S?(0,t.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-muted/30",children:[O,(0,t.jsx)("div",{"data-print":"hide",className:"h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin","aria-label":(0,x.txt)("common.loading")})]}):($||D)&&!$?D&&U?(0,t.jsx)(c.PrintDocumentShell,{title:`${(0,x.txt)("deXuatChiPhi.print.voucher")} - ${D.so_phieu} (${D.id})`,css:A,styleId:"de-xuat-chi-phi-voucher-print-styles",formats:M,onDownload:H,onClose:j,children:(0,t.jsx)(r.ChungTuSheet,{model:U})}):null:(0,t.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4 bg-muted/30 p-4",children:[(0,t.jsx)("p",{className:"text-destructive font-medium text-center",children:$?T?.message??(0,x.txt)("deXuatChiPhi.print.loadError"):(0,x.txt)("deXuatChiPhi.print.notFound")}),O,(0,t.jsxs)("div",{"data-print":"hide",className:"flex flex-wrap items-center justify-center gap-2",children:[$&&(0,t.jsx)("button",{type:"button",onClick:()=>void E(),className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted/50 font-medium",children:(0,x.txt)("common.retry")}),(0,t.jsx)("button",{type:"button",onClick:j,className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90",children:(0,x.txt)("common.close")})]})]})}])}]);