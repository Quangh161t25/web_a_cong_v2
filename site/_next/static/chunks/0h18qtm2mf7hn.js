(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,265756,e=>{"use strict";e.s(["downloadBlob",0,function(e,t){let i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,a.rel="noopener",a.style.display="none",document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e4)}])},921313,e=>{"use strict";let t="#1f2937",i="#4b5563",a="#6b7280",o="#d7dae0",d="#f7f8fa";var n=e.i(805378);e.s(["buildPrintDocumentCSS",0,function(e={}){let r=e.fontStack??"'Times New Roman', Tinos, 'Liberation Serif', serif",l=e.page??n.DEFAULT_PAGE_SPEC,c=(0,n.pageMarginMm)(l),h=Math.max(1,Math.floor(e.copies??1)),s=e.includePage?`@page {
  size: ${(0,n.cssPageSizeDeclaration)(l)};
  margin: ${c.top}mm ${c.right}mm ${c.bottom}mm ${c.left}mm;
}
`:"",p=h>=2?`.epdoc-copy {
  break-inside: avoid;
  page-break-inside: avoid;
  position: relative;
}
.epdoc-copy + .epdoc-copy {
  margin-top: ${n.PRINT_COPY_GAP_MM}mm;
  padding-top: ${n.PRINT_COPY_GAP_MM}mm;
  border-top: 1px dashed ${o};
}
.epdoc-copy-label {
  font-size: 7pt;
  color: ${i};
  text-align: right;
  margin: 0 0 2px 0;
}
`:"";return`${s}${p}.epdoc-root {
  font-family: ${r};
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
  padding: ${c.top}mm ${c.right}mm ${c.bottom}mm ${c.left}mm;
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
  border: 1px solid ${o};
}
.epdoc-photo-placeholder {
  width: 30mm;
  height: 40mm;
  margin-left: auto;
  border: 1px dashed ${o};
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
  border: 1px solid ${o};
  padding: 3px 6px;
  vertical-align: top;
  font-size: 11pt;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.epdoc-label {
  width: 22%;
  background: ${d};
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
  border: 1px solid ${o};
  padding: 3px 5px;
  vertical-align: top;
  word-wrap: break-word;
}
.epdoc-table th {
  background: ${d};
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
  background: ${d};
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
  border-top: 1px solid ${o};
  margin: 10px 0;
}
@media print {
  .epdoc-sheet {
    padding: 0 !important;
    box-shadow: none !important;
  }
}`}],921313)},714884,67170,e=>{"use strict";let t=(0,e.i(475254).default)("file-type",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5",key:"qbrxap"}]]);e.s(["FileType",0,t],714884),e.s(["safeFileName",0,function(e){return e.replace(/\s+/g,"_").replace(/[<>:"/\\|?*]/g,"")}],67170)},946631,e=>{"use strict";e.s(["DE_XUAT_CHI_PHI_MODULE_KEY",0,"de_xuat_chi_phi"])},180271,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(178583),o=e.i(303281),d=e.i(842493);e.i(621592);var n=e.i(247792),r=e.i(754693),l=e.i(67828),c=e.i(653201),h=e.i(266599),s=e.i(210195),p=e.i(119513),g=e.i(471152),x=e.i(843927),u=e.i(947113),m=e.i(167572),f=e.i(623527),b=e.i(787535);e.i(991715);var _=e.i(893200),y=e.i(83365),C=e.i(54932),v=e.i(647163),w=e.i(946631),k=e.i(897398),P=e.i(442775),j=e.i(522016),D=e.i(714884),$=e.i(174080),I=e.i(84611),T=e.i(178560),X=e.i(374),E=e.i(735671),A=e.i(725953),S=e.i(265756),z=e.i(67170),H=e.i(921313),M=e.i(172562),N=e.i(644075),U=e.i(222238);let L=[{id:"de-xuat-chi-phi",labelKey:"deXuatChiPhi.print.voucher",descriptionKey:"deXuatChiPhi.print.voucherDesc",path:e=>`/phieu-de-xuat/${encodeURIComponent(e)}`}];var O=e.i(377081);let R=({item:e,onClose:o})=>{let{data:d,isLoading:n}=(0,X.useCompanyInfo)(),[r]=(0,i.useState)(()=>(0,v.formatDateTime)(new Date)),l=(0,i.useMemo)(()=>(0,H.buildPrintDocumentCSS)({includePage:!0,page:U.DE_XUAT_CHI_PHI_VOUCHER.page,copies:U.DE_XUAT_CHI_PHI_VOUCHER.copies?.length}),[]),c=(0,i.useMemo)(()=>d?(0,M.buildVoucherModel)(U.DE_XUAT_CHI_PHI_VOUCHER,e,{ten_cong_ty:d.ten_cong_ty,dia_chi:d.dia_chi,email:d.email,so_dien_thoai:d.so_dien_thoai,logo:d.logo,ma_so_thue:d.ma_so_thue,website:d.website,dia_diem_ky:d.dia_diem_ky,nguoi_dai_dien:d.nguoi_dai_dien,chuc_vu_nguoi_dai_dien:d.chuc_vu_nguoi_dai_dien},r):null,[e,d,r]),h=(0,i.useMemo)(()=>{let e=[];return(0,E.isApi)()&&e.push({format:"docx",label:(0,C.txt)("deXuatChiPhi.print.doc"),icon:(0,t.jsx)(D.FileType,{size:14})}),e.push({format:"pdf",label:(0,C.txt)("deXuatChiPhi.print.pdf"),icon:(0,t.jsx)(a.FileText,{size:14})}),e},[]),s=(0,i.useCallback)(async t=>{let i=`Phieu_de_xuat_${(0,z.safeFileName)(e.so_phieu??String(e.id))}`;if(!(0,E.isApi)()){N.toast.info((0,C.txt)("deXuatChiPhi.print.printFallback")),await (0,A.printWhenReady)();return}let{blob:a,filename:o}="pdf"===t?await (0,O.apiGetDeXuatChiPhiVoucherPdf)(e.id):await (0,O.apiGetDeXuatChiPhiVoucherDocx)(e.id);(0,S.downloadBlob)(a,o??`${i}.${"pdf"===t?"pdf":"docx"}`)},[e]),p=(0,t.jsx)(j.default,{href:L[0].path(e.id),target:"_blank",rel:"noopener","data-print":"hide",className:"inline-flex items-center h-8 px-2.5 rounded-lg text-xs font-medium border border-border bg-card hover:bg-muted/50",children:(0,C.txt)("deXuatChiPhi.print.openSeparatePage")});return"u"<typeof document?null:n||!c?(0,$.createPortal)((0,t.jsx)("div",{className:"fixed inset-0 z-[120] flex items-center justify-center bg-muted/90",children:(0,t.jsx)("div",{className:"h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin","aria-label":(0,C.txt)("common.loading")})}),document.body):(0,$.createPortal)((0,t.jsx)(T.PrintDocumentShell,{title:`${(0,C.txt)("deXuatChiPhi.print.voucher")} - ${e.so_phieu||e.tieu_de} (${e.id})`,css:l,styleId:"de-xuat-chi-phi-voucher-dialog-print-styles",formats:h,onDownload:s,onClose:o,toolbarExtra:p,overlay:!0,children:(0,t.jsx)(I.ChungTuSheet,{model:c})}),document.body)},F=["nhat-ky","duyet","binh-luan","dinh-kem"];e.s(["default",0,({data:e,onClose:j,onEdit:D,onDelete:$,onDuplicate:I,overlayTier:T="default",stackLevel:X=0,headerActions:E})=>{let[A,S]=(0,i.useState)(!1),z={nguoi_tao:e.nguoi_tao},H=(0,b.useCanOnRecord)("edit","deXuatChiPhi",z),M=(0,b.useCanOnRecord)("delete","deXuatChiPhi",z),N=(0,f.useCan)("create","deXuatChiPhi"),U=(0,f.useCan)("approve","deXuatChiPhi"),L=(0,i.useMemo)(()=>(0,P.deXuatChiPhiTrangThaiDuyetBadgeConfig)(),[]),O=(0,i.useMemo)(()=>(0,_.buildFieldLabels)(k.DE_XUAT_CHI_PHI_FIELDS),[]),K=(0,i.useMemo)(()=>[...e.dong??[]].sort((e,t)=>e.thu_tu-t.thu_tu),[e.dong]),G=[{label:(0,C.txt)("deXuatChiPhi.detail.print"),icon:(0,t.jsx)(o.Printer,{size:y.ICON_SIZE.default}),onClick:()=>S(!0),variant:"secondary"}],B=(0,t.jsx)(l.DetailFooterActions,{onClose:j,onDuplicate:N&&I?()=>{I(e),j()}:void 0,onEdit:H?()=>{D(e),j()}:void 0,onDelete:M?()=>{$(e.id),j()}:void 0}),V=(0,t.jsx)(c.DetailLayout,{variant:"stacked",summary:(0,t.jsxs)("div",{className:"bg-card p-4 rounded-xl border border-border/50 shadow-sm flex items-center gap-4",children:[(0,t.jsx)("div",{className:"h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-primary/20 shadow-lg shrink-0",children:(0,t.jsx)(a.FileText,{size:24,className:"text-white"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 flex flex-col gap-0.5",children:[(0,t.jsxs)("div",{className:"flex items-start justify-between gap-2 min-w-0",children:[(0,t.jsx)("h2",{className:"text-base font-bold text-foreground leading-tight truncate flex-1 min-w-0",children:e.so_phieu||e.tieu_de}),(0,t.jsx)("div",{className:"shrink-0",children:(0,t.jsx)(d.EnumBadge,{value:e.trang_thai_duyet??"nhap",config:L})})]}),(0,t.jsx)("p",{className:"text-body-sm text-foreground truncate",children:e.tieu_de}),(0,t.jsx)("p",{className:"text-body-sm font-medium text-primary tabular-nums",children:(0,v.formatCurrency)(e.tong_tien)})]})]}),toolbar:(0,t.jsx)(p.DetailToolbar,{actions:G,className:"bg-card rounded-xl border border-border"}),body:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.DetailSection,{title:(0,C.txt)("deXuatChiPhi.detail.basicInfo"),icon:(0,t.jsx)(a.FileText,{size:y.ICON_SIZE.compact}),variant:"primary",children:(0,t.jsx)(r.DerivedDetailFields,{fields:k.DE_XUAT_CHI_PHI_FIELDS,section:"main",record:e,refStackLevel:X+1})}),(0,t.jsx)(h.DetailSection,{title:(0,C.txt)("deXuatChiPhi.detail.lineItems"),icon:(0,t.jsx)(a.FileText,{size:y.ICON_SIZE.compact}),children:(0,t.jsx)(x.EmbeddedChildDataGrid,{rows:K,getRowKey:e=>e.id,labelColumn:{header:(0,C.txt)("deXuatChiPhi.dong.field.khoanMuc"),renderCell:e=>e.ten_danh_muc??e.id_danh_muc,minWidthClass:"min-w-[160px]"},columns:[{id:"dien_giai",header:(0,C.txt)("deXuatChiPhi.dong.field.dienGiai"),renderCell:e=>e.dien_giai,preset:"longText"},{id:"so_luong",header:(0,C.txt)("deXuatChiPhi.dong.field.soLuong"),renderCell:e=>e.so_luong},{id:"don_gia",header:(0,C.txt)("deXuatChiPhi.dong.field.donGia"),renderCell:e=>(0,v.formatCurrency)(e.don_gia)},{id:"so_tien",header:(0,C.txt)("deXuatChiPhi.dong.field.thanhTien"),renderCell:e=>(0,v.formatCurrency)(e.so_tien)}],actionsColumn:{header:"",renderCell:()=>null},columnWidthsKey:"de-xuat-chi-phi.dong",emptyTitle:(0,C.txt)("deXuatChiPhi.dong.empty")})})]}),system:(0,t.jsx)(s.DetailSystemSection,{title:(0,C.txt)("deXuatChiPhi.detail.systemInfo"),createdAt:e.tg_tao,updatedAt:e.tg_cap_nhat,createdBy:e.ten_nguoi_tao??void 0,labels:{createdAt:(0,C.txt)("deXuatChiPhi.detail.createdAt"),updated:(0,C.txt)("deXuatChiPhi.detail.updated")}}),history:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.ApprovalBar,{moduleKey:w.DE_XUAT_CHI_PHI_MODULE_KEY,banGhiId:e.id,soBac:e.so_bac,canApprove:U,canSubmit:H,hideHistory:!0,className:"mb-4"}),(0,t.jsx)(m.RecordHistoryPanel,{moduleKey:w.DE_XUAT_CHI_PHI_MODULE_KEY,banGhiId:e.id,tabs:F,fieldLabels:O,soBac:e.so_bac,canApprove:U,readOnly:!H})]})});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.GenericDrawer,{title:(0,C.txt)("deXuatChiPhi.detail.title"),subtitle:`${(0,C.txt)("deXuatChiPhi.detail.subtitle")}: ${e.so_phieu||e.tieu_de}`,icon:(0,t.jsx)(a.FileText,{size:y.ICON_SIZE.prominent}),headerActions:E,onClose:j,footer:B,footerCompact:!0,maxWidthClass:g.DRAWER_WIDTH_DETAIL,widthKey:w.DE_XUAT_CHI_PHI_MODULE_KEY,overlayTier:T,stackLevel:X,children:V}),A&&(0,t.jsx)(R,{item:e,onClose:()=>S(!1)})]})}],180271)}]);