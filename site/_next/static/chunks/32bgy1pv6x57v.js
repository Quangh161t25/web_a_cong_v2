(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,265756,e=>{"use strict";e.s(["downloadBlob",0,function(e,t){let i=URL.createObjectURL(e),o=document.createElement("a");o.href=i,o.download=t,o.rel="noopener",o.style.display="none",document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e4)}])},921313,e=>{"use strict";let t="#1f2937",i="#4b5563",o="#6b7280",n="#d7dae0",a="#f7f8fa";var r=e.i(805378);e.s(["buildPrintDocumentCSS",0,function(e={}){let d=e.fontStack??"'Times New Roman', Tinos, 'Liberation Serif', serif",h=e.page??r.DEFAULT_PAGE_SPEC,c=(0,r.pageMarginMm)(h),l=Math.max(1,Math.floor(e.copies??1)),u=e.includePage?`@page {
  size: ${(0,r.cssPageSizeDeclaration)(h)};
  margin: ${c.top}mm ${c.right}mm ${c.bottom}mm ${c.left}mm;
}
`:"",s=l>=2?`.epdoc-copy {
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
`:"";return`${u}${s}.epdoc-root {
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
  border: 1px solid ${n};
}
.epdoc-photo-placeholder {
  width: 30mm;
  height: 40mm;
  margin-left: auto;
  border: 1px dashed ${n};
  color: ${o};
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
  background: ${a};
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
  background: ${a};
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
  background: ${a};
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
  color: ${o};
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
}`}],921313)},714884,67170,e=>{"use strict";let t=(0,e.i(475254).default)("file-type",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5",key:"qbrxap"}]]);e.s(["FileType",0,t],714884),e.s(["safeFileName",0,function(e){return e.replace(/\s+/g,"_").replace(/[<>:"/\\|?*]/g,"")}],67170)},56791,613951,55234,663946,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(334661);function n(e){return e?e.replace(/đ/g,"d").replace(/Đ/g,"D").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim():""}e.s(["foldVi",0,n,"matchesSearch",0,function(e,t){let i=n(t);if(!i)return!0;let o=e.map(n).filter(Boolean).join(" ");return i.split(/\s+/).every(e=>o.includes(e))}],613951),e.i(6627);var a=e.i(755369),a=a,r=e.i(916032);let d=a.default;function h(e,t){return e?n(e).toUpperCase().replace(/[^A-Z0-9 ]+/g," ").replace(/\s+/g," ").trim().slice(0,t).trim():""}function c(e){let t=(0,r.findBank)(e.bank);if(!t)throw Error(`Kh\xf4ng nhận ra ng\xe2n h\xe0ng: ${e.bank}`);let i=(e.accountNumber??"").replace(/\s+/g,"");if(!/^\d{6,19}$/.test(i))throw Error("Số tài khoản phải là 6-19 chữ số.");let o=e.amount,n=null==o||0===o?null:Number(o);if(null!==n&&(!Number.isInteger(n)||n<0||n>0x9184e729fff))throw Error("Số tiền phải là số nguyên dương (VND), tối đa 13 chữ số.");let a=h(e.description,25),c=h(e.orderId,25),l=null===n?"STATIC":"DYNAMIC";return{content:d.generateQRContent({qrType:l,bin:t.bin,receiverNumber:i,...null===n?{}:{amount:n},...c?{orderId:c}:{},...a?{description:a}:{}}),type:l,bankShortName:t.shortName,bin:t.bin,accountNumber:i,amount:n,description:a,orderId:c}}function l(e){try{return{ok:!0,data:c(e)}}catch(e){return{ok:!1,error:e instanceof Error?e.message:"Không dựng được mã VietQR."}}}e.s(["VIETQR_DESCRIPTION_MAX",0,25,"VIETQR_ORDER_ID_MAX",0,25,"buildVietQr",0,c,"safeBuildVietQr",0,l,"sanitizeVietQrText",0,h],55234);let u={compact:{width:540,height:540},compact2:{width:540,height:640},qr_only:{width:480,height:480},print:{width:600,height:776}};function s(e){let t;try{t=c(e)}catch{return null}let i=e.template??"compact2",o=new URLSearchParams;null!==t.amount&&o.set("amount",String(t.amount));let n=h([e.orderId,e.description].filter(Boolean).join(" "),50);n&&o.set("addInfo",n);let a=h(e.accountName,50);a&&o.set("accountName",a);let r=o.toString();return`https://img.vietqr.io/image/${t.bin}-${t.accountNumber}-${i}.png`+(r?`?${r}`:"")}e.s(["VIETQR_TEMPLATE_SIZE",0,u,"vietQrImageUrl",0,s],663946);var g=e.i(647163);let p=new Intl.NumberFormat("vi-VN");e.s(["VietQrDisplay",0,({bank:e,accountNumber:n,amount:a,orderId:r,description:d,accountName:h,template:c="compact2",size:m=260,showDetails:x,offline:_=!1,className:f})=>{let y=(0,i.useMemo)(()=>l({bank:e,accountNumber:n,amount:a,orderId:r,description:d,accountName:h}),[e,n,a,r,d,h]),b=(0,i.useMemo)(()=>_?null:s({bank:e,accountNumber:n,amount:a,orderId:r,description:d,accountName:h,template:c}),[e,n,a,r,d,h,c,_]),[k,v]=(0,i.useState)(null),C=null!==b&&k!==b,w=y.ok?y.data.content:"",[N,j]=(0,i.useState)(null);if((0,i.useEffect)(()=>{if(!w||C)return;let e=!1;return(0,o.toQrDataUrl)(w,{width:2*m,margin:2}).then(t=>{e||j({key:w,url:t})}).catch(()=>{}),()=>{e=!0}},[w,m,C]),!y.ok)return(0,t.jsx)("p",{className:(0,g.cn)("text-sm text-destructive",f),role:"status",children:y.error});let T=y.data,D=N?.key===w?N.url:null,S=`M\xe3 VietQR chuyển khoản ${T.bankShortName} ${T.accountNumber}`,K=u[c],$=C?Math.round(m*K.height/K.width):m,I=x??(!C||"qr_only"===c);return(0,t.jsxs)("div",{className:(0,g.cn)("inline-flex flex-col items-center gap-3",f),children:[(0,t.jsx)("div",{className:"flex items-center justify-center overflow-hidden rounded-xl border border-border bg-white shadow-sm",style:{width:m,height:$},children:C?(0,t.jsx)("img",{src:b,alt:S,width:m,height:$,className:"h-full w-full object-contain",onError:()=>v(b)}):D?(0,t.jsx)("img",{src:D,alt:S,width:m-16,height:m-16,className:"p-2"}):(0,t.jsx)("span",{className:"text-xs text-muted-foreground",children:"Đang tạo mã…"})}),I&&(0,t.jsxs)("dl",{className:"grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Ngân hàng"}),(0,t.jsx)("dd",{className:"font-medium",children:T.bankShortName}),(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Số tài khoản"}),(0,t.jsx)("dd",{className:"font-mono tracking-wide",children:T.accountNumber}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Chủ tài khoản"}),(0,t.jsx)("dd",{className:"font-medium uppercase",children:h})]}),null!==T.amount&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Số tiền"}),(0,t.jsxs)("dd",{className:"font-medium",children:[p.format(T.amount)," ₫"]})]}),T.description&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Nội dung"}),(0,t.jsx)("dd",{className:"font-mono",children:T.description})]})]})]})}],56791)},53678,e=>{"use strict";var t=e.i(172562);let i=(0,t.defineVoucher)({slug:"phieu-chi",titleKey:"thuChi.voucher.tieuDeChi",formNumberKey:"thuChi.voucher.mauSoChi",fields:{nguoi_nop_nhan:{key:"nguoi_nop_nhan",dataType:"text",labelKey:"thuChi.voucher.nguoiNhan",surfaces:{doc:{section:"chung",order:10,mapValue:e=>e.nguoi_nop_nhan||e.ten_doi_tuong||""}}},id_danh_muc:{key:"id_danh_muc",dataType:"text",labelKey:"thuChi.voucher.khoanMucChi",surfaces:{doc:{section:"chung",order:20,mapValue:e=>e.ten_danh_muc??""}}},id_de_xuat:{key:"id_de_xuat",dataType:"text",labelKey:"thuChi.voucher.theoDeXuat",surfaces:{doc:{section:"chung",order:30,mapValue:e=>e.ngoai_de_xuat?`Ngo\xe0i đề xuất — ${e.ly_do_ngoai_de_xuat??""}`:e.so_phieu_de_xuat??""}}},dien_giai:{key:"dien_giai",dataType:"long_text",labelKey:"thuChi.voucher.lyDoChi",surfaces:{doc:{section:"chung",order:40,wide:!0}}},id_tai_khoan:{key:"id_tai_khoan",dataType:"text",labelKey:"thuChi.voucher.xuatTuTaiKhoan",surfaces:{doc:{section:"chung",order:50,mapValue:e=>e.ten_tai_khoan??""}}}},sections:[{key:"chung",titleKey:"thuChi.voucher.sectionChung"}],documentNumber:e=>e.so_phieu??"",documentDate:e=>e.ngay_giao_dich,amountOf:e=>e.so_tien,signatureRoles:[{key:"giam_doc",titleKey:"thuChi.voucher.signGiamDoc",isRepresentative:!0},{key:"ke_toan",titleKey:"thuChi.voucher.signKeToan"},{key:"nguoi_lap",titleKey:"thuChi.voucher.signNguoiLap"},{key:"nguoi_nhan",titleKey:"thuChi.voucher.signNguoiNhan"},{key:"thu_quy",titleKey:"thuChi.voucher.signThuQuy"}],page:{size:"A4",orientation:"portrait"},copies:["Liên 1: Lưu","Liên 2: Giao người nhận"]}),o=(0,t.defineVoucher)({slug:"phieu-luan-chuyen",titleKey:"thuChi.voucher.tieuDeLuanChuyen",fields:{id_tai_khoan:{key:"id_tai_khoan",dataType:"text",labelKey:"thuChi.voucher.tuTaiKhoan",surfaces:{doc:{section:"chung",order:10,mapValue:e=>e.ten_tai_khoan??""}}},id_tai_khoan_den:{key:"id_tai_khoan_den",dataType:"text",labelKey:"thuChi.voucher.denTaiKhoan",surfaces:{doc:{section:"chung",order:20,mapValue:e=>e.ten_tai_khoan_den??""}}},dien_giai:{key:"dien_giai",dataType:"long_text",labelKey:"thuChi.voucher.lyDoLuanChuyen",surfaces:{doc:{section:"chung",order:30,wide:!0}}}},sections:[{key:"chung",titleKey:"thuChi.voucher.sectionChung"}],documentNumber:e=>e.so_phieu??"",documentDate:e=>e.ngay_giao_dich,amountOf:e=>e.so_tien,signatureRoles:[{key:"giam_doc",titleKey:"thuChi.voucher.signGiamDoc",isRepresentative:!0},{key:"ke_toan",titleKey:"thuChi.voucher.signKeToan"},{key:"nguoi_lap",titleKey:"thuChi.voucher.signNguoiLap"},{key:"thu_quy",titleKey:"thuChi.voucher.signThuQuy"}],page:{size:"A4",orientation:"portrait"},copies:["Liên 1: Lưu","Liên 2: Đối chiếu quỹ"]}),n=(0,t.defineVoucher)({slug:"phieu-thu",titleKey:"thuChi.voucher.tieuDeThu",formNumberKey:"thuChi.voucher.mauSoThu",fields:{nguoi_nop_nhan:{key:"nguoi_nop_nhan",dataType:"text",labelKey:"thuChi.voucher.nguoiNop",surfaces:{doc:{section:"chung",order:10,mapValue:e=>e.nguoi_nop_nhan||e.ten_doi_tuong||""}}},id_danh_muc:{key:"id_danh_muc",dataType:"text",labelKey:"thuChi.voucher.khoanMucThu",surfaces:{doc:{section:"chung",order:20,mapValue:e=>e.ten_danh_muc??""}}},dien_giai:{key:"dien_giai",dataType:"long_text",labelKey:"thuChi.voucher.lyDoNop",surfaces:{doc:{section:"chung",order:30,wide:!0}}},id_tai_khoan:{key:"id_tai_khoan",dataType:"text",labelKey:"thuChi.voucher.noVaoTaiKhoan",surfaces:{doc:{section:"chung",order:40,mapValue:e=>e.ten_tai_khoan??""}}}},sections:[{key:"chung",titleKey:"thuChi.voucher.sectionChung"}],documentNumber:e=>e.so_phieu??"",documentDate:e=>e.ngay_giao_dich,amountOf:e=>e.so_tien,signatureRoles:[{key:"giam_doc",titleKey:"thuChi.voucher.signGiamDoc",isRepresentative:!0},{key:"ke_toan",titleKey:"thuChi.voucher.signKeToan"},{key:"nguoi_lap",titleKey:"thuChi.voucher.signNguoiLap"},{key:"nguoi_nop",titleKey:"thuChi.voucher.signNguoiNop"},{key:"thu_quy",titleKey:"thuChi.voucher.signThuQuy"}],page:{size:"A4",orientation:"portrait"},copies:["Liên 1: Lưu","Liên 2: Giao người nộp"]});function a(e){return"thu"===e?n:"chi"===e?i:o}e.s(["THU_CHI_PRINT_DOCUMENTS",0,[{id:"phieu",labelKey:"thuChi.print.voucher",descriptionKey:"thuChi.print.voucherDesc",path:e=>`/phieu-thu-chi/${encodeURIComponent(e)}`}],"thuChiVoucherOf",0,a,"thuChiVoucherSlugOf",0,function(e){return a(e).slug}],53678)},163161,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(187378),n=e.i(181203),a=e.i(303281),r=e.i(842493),d=e.i(56791);e.i(621592);var h=e.i(754693),c=e.i(67828),l=e.i(653201),u=e.i(28401),s=e.i(266599),g=e.i(210195),p=e.i(119513),m=e.i(471152),x=e.i(947113),_=e.i(167572),f=e.i(623527),y=e.i(787535);e.i(991715);var b=e.i(893200),k=e.i(83365),v=e.i(54932),C=e.i(647163),w=e.i(616159),N=e.i(101642),j=e.i(55234),T=e.i(473253),D=e.i(522016),S=e.i(178583),K=e.i(714884),$=e.i(174080),I=e.i(84611),M=e.i(178560),E=e.i(374),L=e.i(735671),z=e.i(725953),R=e.i(265756),V=e.i(67170),P=e.i(921313),A=e.i(172562),O=e.i(644075),U=e.i(53678),F=e.i(530667);let B=({item:e,onClose:o})=>{let{data:n,isLoading:a}=(0,E.useCompanyInfo)(),[r]=(0,i.useState)(()=>(0,C.formatDateTime)(new Date)),d=(0,i.useMemo)(()=>(0,U.thuChiVoucherOf)(e.loai),[e.loai]),h=(0,i.useMemo)(()=>(0,U.thuChiVoucherSlugOf)(e.loai),[e.loai]),c=(0,i.useMemo)(()=>(0,P.buildPrintDocumentCSS)({includePage:!0,page:d.page,copies:d.copies?.length}),[d]),l=(0,i.useMemo)(()=>n?(0,A.buildVoucherModel)(d,e,{ten_cong_ty:n.ten_cong_ty,dia_chi:n.dia_chi,email:n.email,so_dien_thoai:n.so_dien_thoai,logo:n.logo,ma_so_thue:n.ma_so_thue,website:n.website,dia_diem_ky:n.dia_diem_ky,nguoi_dai_dien:n.nguoi_dai_dien,chuc_vu_nguoi_dai_dien:n.chuc_vu_nguoi_dai_dien},r):null,[d,e,n,r]),u=(0,i.useMemo)(()=>{let e=[];return(0,L.isApi)()&&e.push({format:"docx",label:(0,v.txt)("thuChi.print.doc"),icon:(0,t.jsx)(K.FileType,{size:14})}),e.push({format:"pdf",label:(0,v.txt)("thuChi.print.pdf"),icon:(0,t.jsx)(S.FileText,{size:14})}),e},[]),s=(0,i.useCallback)(async t=>{let i=`${"phieu-luan-chuyen"===h?"Phieu_luan_chuyen":"phieu-chi"===h?"Phieu_chi":"Phieu_thu"}_${(0,V.safeFileName)(e.so_phieu??String(e.id))}`;if(!(0,L.isApi)()){O.toast.info((0,v.txt)("thuChi.print.printFallback")),await (0,z.printWhenReady)();return}let{blob:o,filename:n}="pdf"===t?await (0,F.apiGetThuChiVoucherPdf)(e.id,h):await (0,F.apiGetThuChiVoucherDocx)(e.id,h);(0,R.downloadBlob)(o,n??`${i}.${"pdf"===t?"pdf":"docx"}`)},[e,h]),g=(0,t.jsx)(D.default,{href:U.THU_CHI_PRINT_DOCUMENTS[0].path(e.id),target:"_blank",rel:"noopener","data-print":"hide",className:"inline-flex items-center h-8 px-2.5 rounded-lg text-xs font-medium border border-border bg-card hover:bg-muted/50",children:(0,v.txt)("thuChi.print.openSeparatePage")});return"u"<typeof document?null:a||!l?(0,$.createPortal)((0,t.jsx)("div",{className:"fixed inset-0 z-[120] flex items-center justify-center bg-muted/90",children:(0,t.jsx)("div",{className:"h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin","aria-label":(0,v.txt)("common.loading")})}),document.body):(0,$.createPortal)((0,t.jsx)(M.PrintDocumentShell,{title:`${(0,v.txt)("thuChi.print.voucher")} - ${e.so_phieu} (${e.id})`,css:c,styleId:"thu-chi-voucher-dialog-print-styles",formats:u,onDownload:s,onClose:o,toolbarExtra:g,overlay:!0,children:(0,t.jsx)(I.ChungTuSheet,{model:l})}),document.body)},Q=["nhat-ky","binh-luan","dinh-kem"];e.s(["default",0,({data:e,onClose:D,onEdit:S,onDelete:K,onStatusChange:$,onDuplicate:I,maxWidthClass:M=m.DRAWER_WIDTH_DETAIL,stackLevel:E=0,presentation:L="drawer",headerActions:z})=>{let R={nguoi_tao:e.nguoi_tao},V=(0,y.useCanOnRecord)("edit","thuChi",R),P=(0,y.useCanOnRecord)("delete","thuChi",R),A=(0,f.useCan)("create","thuChi"),O="Đang hoạt động"===e.trang_thai,[U,F]=(0,i.useState)(!1),H=(0,i.useMemo)(()=>(0,T.thuChiLoaiBadgeConfig)(),[]),G=(0,i.useMemo)(()=>(0,T.thuChiTrangThaiBadgeConfig)(),[]),q=(0,i.useMemo)(()=>(0,b.buildFieldLabels)(N.THU_CHI_FIELDS),[]),Z=(0,i.useMemo)(()=>{let t=new Set;return"chuyen"!==e.loai&&t.add("id_tai_khoan_den"),"chuyen"===e.loai&&(t.add("id_danh_muc"),t.add("id_doi_tuong"),t.add("nguoi_nop_nhan")),"chi"!==e.loai?(t.add("id_de_xuat"),t.add("id_tam_ung"),t.add("ngoai_de_xuat"),t.add("ly_do_ngoai_de_xuat")):e.ngoai_de_xuat?t.add("id_de_xuat"):t.add("ly_do_ngoai_de_xuat"),Array.from(t)},[e.loai,e.ngoai_de_xuat]),W=(0,i.useMemo)(()=>"chi"===e.loai?function(e,t){let i=(e?.ngan_hang??"").trim(),o=(e?.so_tai_khoan??"").trim();if(!i||!o)return null;let n=[t.so_phieu?.trim(),t.dien_giai?.trim()].filter(Boolean).join(" ").slice(0,j.VIETQR_DESCRIPTION_MAX);return{bank:i,accountNumber:o,amount:t.so_tien>0?t.so_tien:null,description:n,accountName:e?.chu_tai_khoan??void 0}}({ten_doi_tuong:e.ten_doi_tuong,ngan_hang:e.ngan_hang_doi_tuong,so_tai_khoan:e.so_tai_khoan_doi_tuong,chu_tai_khoan:e.chu_tai_khoan_doi_tuong},{so_phieu:e.so_phieu,dien_giai:e.dien_giai,so_tien:e.so_tien}):null,[e]),Y=[{label:(0,v.txt)("thuChi.detail.print"),icon:(0,t.jsx)(a.Printer,{size:k.ICON_SIZE.default}),onClick:()=>F(!0)},...$&&V?[{label:O?(0,v.txt)("thuChi.detail.deactivate"):(0,v.txt)("thuChi.detail.activate"),icon:(0,t.jsx)(n.Power,{size:k.ICON_SIZE.default}),onClick:()=>$(e),variant:"info"}]:[]],X=(0,t.jsx)(c.DetailFooterActions,{onClose:D,onDuplicate:A&&I?()=>{I(e),D()}:void 0,onEdit:V?()=>{S(e),D()}:void 0,onDelete:P?()=>{K(e.id),D()}:void 0}),J=(0,t.jsx)(l.DetailLayout,{variant:"page"===L?"columns":"stacked",summary:(0,t.jsxs)("div",{className:"bg-card p-4 rounded-xl border border-border/50 shadow-sm flex items-center gap-4",children:[(0,t.jsx)("div",{className:"h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-primary/20 shadow-lg shrink-0",children:(0,t.jsx)(o.Banknote,{size:24,className:"text-white"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 flex flex-col gap-0.5",children:[(0,t.jsxs)("div",{className:"flex items-start justify-between gap-2 min-w-0",children:[(0,t.jsx)("h2",{className:"text-base font-bold text-foreground leading-tight truncate flex-1 min-w-0",children:e.so_phieu}),(0,t.jsxs)("div",{className:"flex shrink-0 items-center gap-1.5",children:[(0,t.jsx)(r.EnumBadge,{value:e.loai,config:H}),(0,t.jsx)(r.EnumBadge,{value:e.trang_thai,config:G})]})]}),(0,t.jsx)("p",{className:"text-body-sm text-foreground",children:(0,C.formatCurrency)(e.so_tien)})]})]}),toolbar:(0,t.jsx)(p.DetailToolbar,{actions:Y,className:"bg-card rounded-xl border border-border"}),body:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DetailSection,{title:(0,v.txt)("thuChi.detail.basicInfo"),icon:(0,t.jsx)(o.Banknote,{size:k.ICON_SIZE.compact}),variant:"primary",children:(0,t.jsx)(h.DerivedDetailFields,{fields:N.THU_CHI_FIELDS,section:"main",record:e,hiddenKeys:Z,refStackLevel:E+1})}),"chi"===e.loai&&(0,t.jsx)(s.DetailSection,{title:(0,v.txt)("thuChi.detail.qrSection"),icon:(0,t.jsx)(o.Banknote,{size:k.ICON_SIZE.compact}),children:W?(0,t.jsx)(d.VietQrDisplay,{...W,offline:!0,size:220}):(0,t.jsx)("p",{className:"text-body-sm text-muted-foreground",children:(0,v.txt)("thuChi.detail.qrMissing")})})]}),system:(0,t.jsx)(g.DetailSystemSection,{title:(0,v.txt)("thuChi.detail.systemInfo"),createdAt:e.tg_tao,updatedAt:e.tg_cap_nhat,createdBy:e.ten_nguoi_tao??void 0,labels:{createdAt:(0,v.txt)("thuChi.detail.createdAt"),updated:(0,v.txt)("thuChi.detail.updated")}}),history:(0,t.jsx)(_.RecordHistoryPanel,{moduleKey:w.THU_CHI_MODULE_KEY,banGhiId:String(e.id),tabs:Q,fieldLabels:q,readOnly:!V})}),ee=(0,v.txt)("thuChi.detail.title"),et=`${(0,v.txt)("thuChi.detail.subtitle")}: ${e.so_phieu}`,ei=(0,t.jsx)(o.Banknote,{size:k.ICON_SIZE.prominent}),eo=U&&(0,t.jsx)(B,{item:e,onClose:()=>F(!1)});return"page"===L?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.DetailPageShell,{title:ee,subtitle:et,icon:ei,headerActions:z,onClose:D,footer:X,children:J}),eo]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.GenericDrawer,{title:ee,subtitle:et,icon:ei,headerActions:z,onClose:D,footer:X,footerCompact:!0,maxWidthClass:M,widthKey:w.THU_CHI_MODULE_KEY,stackLevel:E,children:J}),eo]})}],163161)}]);