(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,265756,e=>{"use strict";e.s(["downloadBlob",0,function(e,t){let i=URL.createObjectURL(e),n=document.createElement("a");n.href=i,n.download=t,n.rel="noopener",n.style.display="none",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e4)}])},921313,e=>{"use strict";let t="#1f2937",i="#4b5563",n="#6b7280",a="#d7dae0",o="#f7f8fa";var h=e.i(805378);e.s(["buildPrintDocumentCSS",0,function(e={}){let u=e.fontStack??"'Times New Roman', Tinos, 'Liberation Serif', serif",c=e.page??h.DEFAULT_PAGE_SPEC,r=(0,h.pageMarginMm)(c),d=Math.max(1,Math.floor(e.copies??1)),g=e.includePage?`@page {
  size: ${(0,h.cssPageSizeDeclaration)(c)};
  margin: ${r.top}mm ${r.right}mm ${r.bottom}mm ${r.left}mm;
}
`:"",_=d>=2?`.epdoc-copy {
  break-inside: avoid;
  page-break-inside: avoid;
  position: relative;
}
.epdoc-copy + .epdoc-copy {
  margin-top: ${h.PRINT_COPY_GAP_MM}mm;
  padding-top: ${h.PRINT_COPY_GAP_MM}mm;
  border-top: 1px dashed ${a};
}
.epdoc-copy-label {
  font-size: 7pt;
  color: ${i};
  text-align: right;
  margin: 0 0 2px 0;
}
`:"";return`${g}${_}.epdoc-root {
  font-family: ${u};
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
  padding: ${r.top}mm ${r.right}mm ${r.bottom}mm ${r.left}mm;
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
  border: 1px solid ${a};
}
.epdoc-photo-placeholder {
  width: 30mm;
  height: 40mm;
  margin-left: auto;
  border: 1px dashed ${a};
  color: ${n};
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
  border: 1px solid ${a};
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
  border: 1px solid ${a};
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
  color: ${n};
  margin-top: 12px;
}
.epdoc-divider {
  border: 0;
  border-top: 1px solid ${a};
  margin: 10px 0;
}
@media print {
  .epdoc-sheet {
    padding: 0 !important;
    box-shadow: none !important;
  }
}`}],921313)},714884,67170,e=>{"use strict";let t=(0,e.i(475254).default)("file-type",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5",key:"qbrxap"}]]);e.s(["FileType",0,t],714884),e.s(["safeFileName",0,function(e){return e.replace(/\s+/g,"_").replace(/[<>:"/\\|?*]/g,"")}],67170)},778833,e=>{"use strict";function t(e,t){let i=n(e.so_tien);return 0===i?0:"chuyen"===e.loai?e.id_tai_khoan===e.id_tai_khoan_den?0:e.id_tai_khoan===t?-i:e.id_tai_khoan_den===t?i:0:e.id_tai_khoan!==t?0:"thu"===e.loai?i:-i}function i(e){let{idTaiKhoan:i,giaoDich:a,tuNgay:o,denNgay:h}=e,u=n(e.tonDau),c=e.ngayTonDau??null,r=0,d=0,g=0;for(let e of a){let n=t(e,i);if(0===n)continue;let a=e.ngay_giao_dich;if(!c||!(a<c)){if(o&&a<o){r+=n;continue}h&&a>h||(n>0?d+=n:g+=-n)}}let _=u+r;return{dau_ky:_,thu:d,chi:g,cuoi_ky:_+d-g}}function n(e){if("number"==typeof e)return Number.isFinite(e)?e:0;if("string"==typeof e&&""===e.trim())return 0;let t=Number(e);return Number.isFinite(t)?t:0}e.s(["anhHuongLenTaiKhoan",0,t,"soDuHienTai",0,function(e){return i({...e,tuNgay:null,denNgay:null}).cuoi_ky},"soDuTaiKhoanTheoKy",0,i])},530667,e=>{"use strict";var t=e.i(715760);function i(e,t){t&&(null!=t.limit&&e.set("limit",String(t.limit)),null!=t.offset&&e.set("offset",String(t.offset)),t.orderBy&&e.set("orderBy",t.orderBy),null!=t.ascending&&e.set("ascending",String(t.ascending)),t.search?.trim()&&e.set("search",t.search.trim()),null!=t.activeOnly&&e.set("activeOnly",String(t.activeOnly)),t.loai?.length&&e.set("loai",t.loai.join(",")),t.tuNgay&&e.set("tuNgay",t.tuNgay),t.denNgay&&e.set("denNgay",t.denNgay),t.columnSearch&&Object.keys(t.columnSearch).length>0&&e.set("columnSearch",JSON.stringify(t.columnSearch)))}async function n(e){let n=new URLSearchParams;i(n,e);let a=n.toString();return(0,t.apiFetch)(`/thu-chi${a?`?${a}`:""}`)}async function a(e={}){let i=new URLSearchParams;e.tuNgay&&i.set("tuNgay",e.tuNgay),e.denNgay&&i.set("denNgay",e.denNgay),e.idTaiKhoan?.length&&i.set("idTaiKhoan",e.idTaiKhoan.join(","));let n=i.toString();return(0,t.apiFetch)(`/thu-chi/so-du${n?`?${n}`:""}`)}async function o(e){let n=new URLSearchParams;i(n,e);let a=n.toString();return(0,t.apiFetch)(`/thu-chi/filter-counts${a?`?${a}`:""}`)}async function h(e){return(0,t.apiFetch)(`/thu-chi/${e}`)}async function u(e){return(0,t.apiFetch)("/thu-chi",{method:"POST",body:JSON.stringify(e)})}async function c(e,i){return(0,t.apiFetch)(`/thu-chi/${e}`,{method:"PATCH",body:JSON.stringify(i)})}async function r(e){await (0,t.apiFetch)(`/thu-chi/${e}`,{method:"DELETE"})}async function d(e,i){return(0,t.apiFetchBlob)(`/thu-chi/${e}/${i}.pdf`)}async function g(e,i){return(0,t.apiFetchBlob)(`/thu-chi/${e}/${i}.docx`)}e.s(["apiCreateThuChi",0,u,"apiDeleteThuChi",0,r,"apiGetSoDuTaiKhoan",0,a,"apiGetThuChi",0,h,"apiGetThuChiFilterCounts",0,o,"apiGetThuChiPage",0,n,"apiGetThuChiVoucherDocx",0,g,"apiGetThuChiVoucherPdf",0,d,"apiUpdateThuChi",0,c])},960338,691959,e=>{"use strict";var t=e.i(536553),i=e.i(735671),n=e.i(57860),a=e.i(191206),o=e.i(778833);let h={orderBy:"tg_cap_nhat",ascending:!1};e.s(["THU_CHI_LIST_QUERY_PARAMS",0,h,"THU_CHI_QUERY_KEYS",0,{all:["thu-chi"],pagePrefix:["thu-chi","page"],page:e=>["thu-chi","page",e],filterCountsPrefix:["thu-chi","filter-counts"],filterCounts:(e={})=>["thu-chi","filter-counts",e],detail:e=>["thu-chi",e]}],691959);var u=e.i(530667);let c=e=>`${e}T00:00:00Z`,r=[{id:"thu-chi-1",so_phieu:"PT2609-0001",loai:"thu",ngay_giao_dich:"2026-09-02",id_tai_khoan:"tai-khoan-2",ten_tai_khoan:"Vietcombank - Tài khoản chính",id_danh_muc:"dmtc-12",ten_danh_muc:"Bán sản phẩm",id_doi_tuong:"doi-tuong-5",ten_doi_tuong:"Công ty CP Đầu tư Xây dựng Phương Nam",so_tien:45e6,dien_giai:"Thu tiền công trình đợt 1 theo hợp đồng thi công",id_nguoi_lap:"emp-002",ten_nguoi_lap:"Trần Thị Mai",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-02"),tg_cap_nhat:c("2026-09-02"),nguoi_tao:"emp-002",ten_nguoi_tao:"Trần Thị Mai",phien_ban:1},{id:"thu-chi-2",so_phieu:"PT2609-0002",loai:"thu",ngay_giao_dich:"2026-09-03",id_tai_khoan:"tai-khoan-2",ten_tai_khoan:"Vietcombank - Tài khoản chính",id_danh_muc:"dmtc-14",ten_danh_muc:"Lãi tiền gửi",so_tien:125e4,dien_giai:"Lãi tiền gửi có kỳ hạn tháng 8/2026",id_nguoi_lap:"emp-002",ten_nguoi_lap:"Trần Thị Mai",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-03"),tg_cap_nhat:c("2026-09-03"),nguoi_tao:"emp-002",ten_nguoi_tao:"Trần Thị Mai",phien_ban:1},{id:"thu-chi-3",so_phieu:"PT2609-0003",loai:"thu",ngay_giao_dich:"2026-09-04",id_tai_khoan:"tai-khoan-1",ten_tai_khoan:"Quỹ tiền mặt",id_danh_muc:"dmtc-12",ten_danh_muc:"Bán sản phẩm",id_doi_tuong:"doi-tuong-6",ten_doi_tuong:"Cửa hàng Vật liệu Xây dựng Thành Đạt",so_tien:86e5,dien_giai:"Thu tiền bán vật tư lẻ tại cửa hàng",id_nguoi_lap:"emp-001",ten_nguoi_lap:"Nguyễn Văn Thành",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-04"),tg_cap_nhat:c("2026-09-04"),nguoi_tao:"emp-001",ten_nguoi_tao:"Nguyễn Văn Thành",phien_ban:1},{id:"thu-chi-4",so_phieu:"PC2609-0001",loai:"chi",ngay_giao_dich:"2026-09-02",id_tai_khoan:"tai-khoan-1",ten_tai_khoan:"Quỹ tiền mặt",id_danh_muc:"dmtc-04",ten_danh_muc:"Văn phòng phẩm",id_de_xuat:"dxcp-3",so_phieu_de_xuat:"DX2608-0007",id_doi_tuong:"doi-tuong-3",ten_doi_tuong:"DNTN Văn phòng phẩm Hồng Hà",ngoai_de_xuat:!1,so_tien:42e5,dien_giai:"Mua văn phòng phẩm quý 3 — đợt 1",id_nguoi_lap:"emp-002",ten_nguoi_lap:"Trần Thị Mai",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-02"),tg_cap_nhat:c("2026-09-02"),nguoi_tao:"emp-002",ten_nguoi_tao:"Trần Thị Mai",phien_ban:1},{id:"thu-chi-5",so_phieu:"PC2609-0002",loai:"chi",ngay_giao_dich:"2026-09-05",id_tai_khoan:"tai-khoan-1",ten_tai_khoan:"Quỹ tiền mặt",id_danh_muc:"dmtc-04",ten_danh_muc:"Văn phòng phẩm",id_de_xuat:"dxcp-3",so_phieu_de_xuat:"DX2608-0007",id_doi_tuong:"doi-tuong-3",ten_doi_tuong:"DNTN Văn phòng phẩm Hồng Hà",ngoai_de_xuat:!1,so_tien:38e5,dien_giai:"Mua văn phòng phẩm quý 3 — đợt 2, bổ sung giấy in",id_nguoi_lap:"emp-002",ten_nguoi_lap:"Trần Thị Mai",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-05"),tg_cap_nhat:c("2026-09-05"),nguoi_tao:"emp-002",ten_nguoi_tao:"Trần Thị Mai",phien_ban:1},{id:"thu-chi-6",so_phieu:"PC2609-0003",loai:"chi",ngay_giao_dich:"2026-09-06",id_tai_khoan:"tai-khoan-1",ten_tai_khoan:"Quỹ tiền mặt",id_danh_muc:"dmtc-01",ten_danh_muc:"Chi phí văn phòng",ngoai_de_xuat:!0,ly_do_ngoai_de_xuat:"Sự cố khẩn cấp: vỡ đường ống nước, phải sửa gấp trong ngày, chưa kịp lập đề xuất.",nguoi_nop_nhan:"Đội sửa chữa điện nước Bình Thạnh",so_tien:25e5,dien_giai:"Sửa gấp đường ống nước vỡ tại văn phòng chính",id_nguoi_lap:"emp-000",ten_nguoi_lap:"Lê Minh Công",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-06"),tg_cap_nhat:c("2026-09-06"),nguoi_tao:"emp-000",ten_nguoi_tao:"Lê Minh Công",phien_ban:1},{id:"thu-chi-7",so_phieu:"PC2609-0004",loai:"chi",ngay_giao_dich:"2026-09-05",id_tai_khoan:"tai-khoan-3",ten_tai_khoan:"Techcombank - Chi lương",id_danh_muc:"dmtc-06",ten_danh_muc:"Lương nhân viên",id_de_xuat:"dxcp-2",so_phieu_de_xuat:"DX2609-0001",ngoai_de_xuat:!1,nguoi_nop_nhan:"Chi lương toàn công ty tháng 8/2026",so_tien:3e7,dien_giai:"Chi trả lương nhân viên tháng 8/2026",id_nguoi_lap:"emp-002",ten_nguoi_lap:"Trần Thị Mai",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-05"),tg_cap_nhat:c("2026-09-05"),nguoi_tao:"emp-002",ten_nguoi_tao:"Trần Thị Mai",phien_ban:1},{id:"thu-chi-8",so_phieu:"PC2609-0005",loai:"chi",ngay_giao_dich:"2026-09-05",id_tai_khoan:"tai-khoan-3",ten_tai_khoan:"Techcombank - Chi lương",id_danh_muc:"dmtc-07",ten_danh_muc:"Bảo hiểm xã hội",id_de_xuat:"dxcp-2",so_phieu_de_xuat:"DX2609-0002",ngoai_de_xuat:!1,nguoi_nop_nhan:"Bảo hiểm xã hội Quận 1",so_tien:15e6,dien_giai:"Nộp bảo hiểm xã hội tháng 8/2026",id_nguoi_lap:"emp-002",ten_nguoi_lap:"Trần Thị Mai",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-05"),tg_cap_nhat:c("2026-09-05"),nguoi_tao:"emp-002",ten_nguoi_tao:"Trần Thị Mai",phien_ban:1},{id:"thu-chi-9",so_phieu:"PC2609-0006",loai:"chi",ngay_giao_dich:"2026-09-07",id_tai_khoan:"tai-khoan-2",ten_tai_khoan:"Vietcombank - Tài khoản chính",id_danh_muc:"dmtc-09",ten_danh_muc:"Quảng cáo",id_de_xuat:"dxcp-5",so_phieu_de_xuat:"DX2608-0012",ngoai_de_xuat:!1,nguoi_nop_nhan:"Chi phí chạy quảng cáo Facebook/TikTok tháng 8/2026",so_tien:15e6,dien_giai:"Thanh toán chi phí quảng cáo Facebook/TikTok tháng 8/2026",id_nguoi_lap:"emp-001",ten_nguoi_lap:"Nguyễn Văn Thành",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-07"),tg_cap_nhat:c("2026-09-07"),nguoi_tao:"emp-001",ten_nguoi_tao:"Nguyễn Văn Thành",phien_ban:1},{id:"thu-chi-10",so_phieu:"PC2609-0007",loai:"chi",ngay_giao_dich:"2026-09-08",id_tai_khoan:"tai-khoan-2",ten_tai_khoan:"Vietcombank - Tài khoản chính",id_danh_muc:"dmtc-01",ten_danh_muc:"Chi phí văn phòng",id_de_xuat:"dxcp-5",so_phieu_de_xuat:"DX2609-0004",id_doi_tuong:"doi-tuong-2",ten_doi_tuong:"Công ty CP Thiết bị Điện Toàn Cầu",ngan_hang_doi_tuong:"BIDV",so_tai_khoan_doi_tuong:"21810000998877",chu_tai_khoan_doi_tuong:"CONG TY CP THIET BI DIEN TOAN CAU",ngoai_de_xuat:!1,so_tien:284e5,dien_giai:"Thanh toán tiền thiết bị điện lắp đặt văn phòng mới theo HĐ TBDT-2609",id_nguoi_lap:"emp-002",ten_nguoi_lap:"Trần Thị Mai",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-08"),tg_cap_nhat:c("2026-09-08"),nguoi_tao:"emp-002",ten_nguoi_tao:"Trần Thị Mai",phien_ban:1},{id:"thu-chi-11",so_phieu:"PLC2609-0001",loai:"chuyen",ngay_giao_dich:"2026-09-09",id_tai_khoan:"tai-khoan-1",ten_tai_khoan:"Quỹ tiền mặt",id_tai_khoan_den:"tai-khoan-2",ten_tai_khoan_den:"Vietcombank - Tài khoản chính",so_tien:2e7,dien_giai:"Nộp tiền mặt thu bán hàng vào tài khoản ngân hàng",id_nguoi_lap:"emp-000",ten_nguoi_lap:"Lê Minh Công",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-09"),tg_cap_nhat:c("2026-09-09"),nguoi_tao:"emp-000",ten_nguoi_tao:"Lê Minh Công",phien_ban:1},{id:"thu-chi-12",so_phieu:"PT2609-0004",loai:"thu",ngay_giao_dich:"2026-09-10",id_tai_khoan:"tai-khoan-2",ten_tai_khoan:"Vietcombank - Tài khoản chính",id_danh_muc:"dmtc-12",ten_danh_muc:"Bán sản phẩm",id_doi_tuong:"doi-tuong-5",ten_doi_tuong:"Công ty CP Đầu tư Xây dựng Phương Nam",so_tien:15e6,dien_giai:"Thu tiền công trình đợt 2 theo hợp đồng thi công",id_nguoi_lap:"emp-002",ten_nguoi_lap:"Trần Thị Mai",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-10"),tg_cap_nhat:c("2026-09-10"),nguoi_tao:"emp-002",ten_nguoi_tao:"Trần Thị Mai",phien_ban:1},{id:"thu-chi-13",so_phieu:"PC2609-0008",loai:"chi",ngay_giao_dich:"2026-09-01",id_tai_khoan:"tai-khoan-2",ten_tai_khoan:"Vietcombank - Tài khoản chính",id_danh_muc:"dmtc-09",ten_danh_muc:"Quảng cáo",id_de_xuat:"dxcp-5",so_phieu_de_xuat:"DX2609-0005",ngoai_de_xuat:!1,nguoi_nop_nhan:"Chi quảng cáo thử nghiệm",so_tien:5e6,dien_giai:"Chi quảng cáo thử nghiệm — huỷ do trùng ngân sách với PC2609-0006",id_nguoi_lap:"emp-001",ten_nguoi_lap:"Nguyễn Văn Thành",trang_thai:"Ngừng hoạt động",tg_tao:c("2026-09-01"),tg_cap_nhat:c("2026-09-07"),nguoi_tao:"emp-001",ten_nguoi_tao:"Nguyễn Văn Thành",phien_ban:2},{id:"thu-chi-14",so_phieu:"PT2609-0005",loai:"thu",ngay_giao_dich:"2026-09-11",id_tai_khoan:"tai-khoan-1",ten_tai_khoan:"Quỹ tiền mặt",id_danh_muc:"dmtc-14",ten_danh_muc:"Lãi tiền gửi",so_tien:5e5,dien_giai:"Thu lãi tiết kiệm tiền mặt tại quầy giao dịch",id_nguoi_lap:"emp-001",ten_nguoi_lap:"Nguyễn Văn Thành",trang_thai:"Đang hoạt động",tg_tao:c("2026-09-11"),tg_cap_nhat:c("2026-09-11"),nguoi_tao:"emp-001",ten_nguoi_tao:"Nguyễn Văn Thành",phien_ban:1}],d=(0,n.createRepository)({tableName:"var_thu_chi",mockData:r,delay:400}),g={thu:"PT",chi:"PC",chuyen:"PLC"};function _(e,t){let i=!t.activeOnly||"Đang hoạt động"===e.trang_thai,n=!t.loai?.length||t.loai.includes(e.loai),a=(t.search??"").trim().toLowerCase(),o=!a||[e.so_phieu,e.dien_giai,e.nguoi_nop_nhan,e.ghi_chu,e.ten_doi_tuong].filter(Boolean).some(e=>e.toLowerCase().includes(a));return!!(i&&n&&o)}async function l(e={}){let t=e.limit??20,n=e.offset??0;if((0,i.isApi)())return(0,u.apiGetThuChiPage)({...e,limit:t,offset:n,orderBy:e.orderBy??h.orderBy,ascending:e.ascending??h.ascending});let a=(await d.getAll()).filter(t=>_(t,e)),o=e.ascending??h.ascending,c=[...a].sort((e,t)=>{let i=e.tg_cap_nhat.localeCompare(t.tg_cap_nhat);return o?i:-i});return{items:c.slice(n,n+t),total:c.length}}async function s(e={}){let t=await l({...e,limit:100,offset:0}),i=[...t.items];for(;i.length<t.total;){let t=await l({...e,limit:100,offset:i.length});if(0===t.items.length)break;i.push(...t.items)}return i}async function p(e={}){if((0,i.isApi)())return(0,u.apiGetThuChiFilterCounts)(e);let t=await d.getAll(),n=t.filter(t=>_(t,{...e,activeOnly:!1})),a=t.filter(t=>_(t,{...e,loai:void 0}));return{status:{active:n.filter(e=>"Đang hoạt động"===e.trang_thai).length,inactive:n.filter(e=>"Đang hoạt động"!==e.trang_thai).length},loai:{thu:a.filter(e=>"thu"===e.loai).length,chi:a.filter(e=>"chi"===e.loai).length,chuyen:a.filter(e=>"chuyen"===e.loai).length}}}async function m(e){if((0,i.isApi)())return(0,u.apiGetThuChi)(e);let t=(await d.getAll()).find(t=>t.id===e);if(!t)throw Error("Không tìm thấy phiếu thu chi");return t}async function y(e={}){if((0,i.isApi)())return(0,u.apiGetSoDuTaiKhoan)(e);let[n,a]=await Promise.all([(0,t.getTaiKhoanList)(),d.getAll()]),h=e.idTaiKhoan?.length?new Set(e.idTaiKhoan):null;return n.filter(e=>"Đang hoạt động"===e.trang_thai&&(!h||h.has(e.id))).map(t=>({id_tai_khoan:t.id,ten_tai_khoan:t.ten_tai_khoan,...(0,o.soDuTaiKhoanTheoKy)({idTaiKhoan:t.id,tonDau:t.ton_dau??0,ngayTonDau:t.ngay_ton_dau??null,giaoDich:a,tuNgay:e.tuNgay??null,denNgay:e.denNgay??null})}))}async function f(e={}){if((0,i.isApi)())return(await (0,u.apiGetThuChiPage)({limit:500,tuNgay:e.tuNgay??void 0,denNgay:e.denNgay??void 0})).items;let t=await d.getAll();return e.tuNgay||e.denNgay?t.filter(t=>{let i=t.ngay_giao_dich??"";return(!e.tuNgay||!(i<e.tuNgay))&&(!e.denNgay||!(i>e.denNgay))}):t}async function x(e){if((0,i.isApi)())return(0,u.apiCreateThuChi)(e);let t=new Date().toISOString(),n=await d.getAll(),o=`${g[e.loai]??"PT"}${t.slice(2,4)}${t.slice(5,7)}-${String(n.length+1).padStart(4,"0")}`;return d.insert({...e,id:(0,a.createMockId)("thu-chi"),so_phieu:o,phien_ban:1,tg_tao:t,tg_cap_nhat:t})}async function T(e,t){return(0,i.isApi)()?(0,u.apiUpdateThuChi)(e,t):d.update(e,{...t,tg_cap_nhat:new Date().toISOString()})}async function k(e){if((0,i.isApi)())return(0,u.apiDeleteThuChi)(e);await d.remove([e])}e.s(["createThuChi",0,x,"deleteThuChi",0,k,"getAllThuChiForExport",0,s,"getSoDuTaiKhoan",0,y,"getThuChiById",0,m,"getThuChiFilterCounts",0,p,"getThuChiList",0,f,"getThuChiPage",0,l,"updateThuChi",0,T],960338)},333658,e=>{"use strict";var t=e.i(271645),i=e.i(619273),n=e.i(933818),a=e.i(954616),o=e.i(266027),h=e.i(912598),u=e.i(54932),c=e.i(644075),r=e.i(691959),d=e.i(960338);function g(e){if(1===e.length&&"Active"===e[0])return!0}function _(e){return{search:e.search,activeOnly:e.activeOnly,loai:e.loai,columnSearch:e.columnSearch}}function l(e){e.invalidateQueries({queryKey:r.THU_CHI_QUERY_KEYS.pagePrefix}),e.invalidateQueries({queryKey:r.THU_CHI_QUERY_KEYS.filterCountsPrefix}),e.invalidateQueries({queryKey:r.THU_CHI_QUERY_KEYS.all})}e.s(["useCreateThuChi",0,function(e){let t=(0,h.useQueryClient)();return(0,a.useMutation)({mutationFn:e=>(0,d.createThuChi)(e),onSuccess:i=>{l(t),c.toast.success((0,u.txt)("thuChi.toast.createSuccess")),e?.(i)},onError:e=>c.toast.fromError(e,(0,u.txt)("shared.error.saveFailed"))})},"useDeleteThuChi",0,function(){let e=(0,h.useQueryClient)();return(0,a.useMutation)({mutationFn:e=>Promise.all(e.map(e=>(0,d.deleteThuChi)(e))),onSuccess:()=>{l(e),c.toast.success((0,u.txt)("thuChi.toast.deleteSuccess"))}})},"useFetchAllThuChiForExport",0,function(){return(0,t.useCallback)(()=>(0,d.getAllThuChiForExport)(),[])},"useThuChi",0,e=>(0,o.useQuery)((0,n.queryOptions)({queryKey:r.THU_CHI_QUERY_KEYS.detail(e),queryFn:()=>(0,d.getThuChiById)(e),enabled:!!e})),"useThuChiFilterCounts",0,function(e,t){let i={search:e.trim()||void 0,activeOnly:g(t.status),loai:t.loai.length?t.loai:void 0,columnSearch:Object.keys(t.columnSearch??{}).length?t.columnSearch:void 0},{data:a}=(0,o.useQuery)(function(e={}){return(0,n.queryOptions)({queryKey:r.THU_CHI_QUERY_KEYS.filterCounts(_(e)),queryFn:()=>(0,d.getThuChiFilterCounts)(e)})}(i));return a??{status:{active:0,inactive:0},loai:{thu:0,chi:0,chuyen:0}}},"useThuChiList",0,()=>(0,o.useQuery)({queryKey:r.THU_CHI_QUERY_KEYS.all,queryFn:()=>(0,d.getThuChiList)()}),"useThuChiPage",0,({pagination:e,sort:t,searchTerm:a,filters:h})=>{var u,c;let l,s,p,m,y,f=(u=e.page,c=e.pageSize,l=Object.fromEntries(Object.entries(h.columnSearch??{}).filter(([,e])=>e?.trim())),{limit:c,offset:(u-1)*c,orderBy:t.column&&t.column.length>0?t.column:r.THU_CHI_LIST_QUERY_PARAMS.orderBy,ascending:"desc"!==t.direction,search:a.trim()||void 0,activeOnly:g(h.status),loai:h.loai.length?h.loai:void 0,columnSearch:Object.keys(l).length?l:void 0}),x=(0,o.useQuery)({...(s=f.limit??20,p=f.offset??0,m=f.orderBy??r.THU_CHI_LIST_QUERY_PARAMS.orderBy,y=f.ascending??r.THU_CHI_LIST_QUERY_PARAMS.ascending,(0,n.queryOptions)({queryKey:r.THU_CHI_QUERY_KEYS.page({limit:s,offset:p,orderBy:m,ascending:y,..._(f)}),queryFn:()=>(0,d.getThuChiPage)({...f,limit:s,offset:p,orderBy:m,ascending:y})})),placeholderData:i.keepPreviousData});return{data:x.data?.items??[],total:x.data?.total??0,isLoading:x.isLoading,isFetching:x.isFetching,mode:"server"}},"useUpdateStatusThuChi",0,function(){let e=(0,h.useQueryClient)();return(0,a.useMutation)({mutationFn:({ids:e,status:t})=>Promise.all(e.map(e=>(0,d.updateThuChi)(e,{trang_thai:t}))),onSuccess:()=>{l(e),c.toast.success((0,u.txt)("thuChi.toast.updateSuccess"))},onError:e=>c.toast.fromError(e,(0,u.txt)("shared.error.saveFailed"))})},"useUpdateThuChi",0,function(e){let t=(0,h.useQueryClient)();return(0,a.useMutation)({mutationFn:({id:e,data:t})=>(0,d.updateThuChi)(e,t),onSuccess:(i,n)=>{l(t),t.invalidateQueries({queryKey:r.THU_CHI_QUERY_KEYS.detail(n.id)}),c.toast.success((0,u.txt)("thuChi.toast.updateSuccess")),e?.(i)},onError:e=>c.toast.fromError(e,(0,u.txt)("shared.error.saveFailed"))})}])},53678,e=>{"use strict";var t=e.i(172562);let i=(0,t.defineVoucher)({slug:"phieu-chi",titleKey:"thuChi.voucher.tieuDeChi",formNumberKey:"thuChi.voucher.mauSoChi",fields:{nguoi_nop_nhan:{key:"nguoi_nop_nhan",dataType:"text",labelKey:"thuChi.voucher.nguoiNhan",surfaces:{doc:{section:"chung",order:10,mapValue:e=>e.nguoi_nop_nhan||e.ten_doi_tuong||""}}},id_danh_muc:{key:"id_danh_muc",dataType:"text",labelKey:"thuChi.voucher.khoanMucChi",surfaces:{doc:{section:"chung",order:20,mapValue:e=>e.ten_danh_muc??""}}},id_de_xuat:{key:"id_de_xuat",dataType:"text",labelKey:"thuChi.voucher.theoDeXuat",surfaces:{doc:{section:"chung",order:30,mapValue:e=>e.ngoai_de_xuat?`Ngo\xe0i đề xuất — ${e.ly_do_ngoai_de_xuat??""}`:e.so_phieu_de_xuat??""}}},dien_giai:{key:"dien_giai",dataType:"long_text",labelKey:"thuChi.voucher.lyDoChi",surfaces:{doc:{section:"chung",order:40,wide:!0}}},id_tai_khoan:{key:"id_tai_khoan",dataType:"text",labelKey:"thuChi.voucher.xuatTuTaiKhoan",surfaces:{doc:{section:"chung",order:50,mapValue:e=>e.ten_tai_khoan??""}}}},sections:[{key:"chung",titleKey:"thuChi.voucher.sectionChung"}],documentNumber:e=>e.so_phieu??"",documentDate:e=>e.ngay_giao_dich,amountOf:e=>e.so_tien,signatureRoles:[{key:"giam_doc",titleKey:"thuChi.voucher.signGiamDoc",isRepresentative:!0},{key:"ke_toan",titleKey:"thuChi.voucher.signKeToan"},{key:"nguoi_lap",titleKey:"thuChi.voucher.signNguoiLap"},{key:"nguoi_nhan",titleKey:"thuChi.voucher.signNguoiNhan"},{key:"thu_quy",titleKey:"thuChi.voucher.signThuQuy"}],page:{size:"A4",orientation:"portrait"},copies:["Liên 1: Lưu","Liên 2: Giao người nhận"]}),n=(0,t.defineVoucher)({slug:"phieu-luan-chuyen",titleKey:"thuChi.voucher.tieuDeLuanChuyen",fields:{id_tai_khoan:{key:"id_tai_khoan",dataType:"text",labelKey:"thuChi.voucher.tuTaiKhoan",surfaces:{doc:{section:"chung",order:10,mapValue:e=>e.ten_tai_khoan??""}}},id_tai_khoan_den:{key:"id_tai_khoan_den",dataType:"text",labelKey:"thuChi.voucher.denTaiKhoan",surfaces:{doc:{section:"chung",order:20,mapValue:e=>e.ten_tai_khoan_den??""}}},dien_giai:{key:"dien_giai",dataType:"long_text",labelKey:"thuChi.voucher.lyDoLuanChuyen",surfaces:{doc:{section:"chung",order:30,wide:!0}}}},sections:[{key:"chung",titleKey:"thuChi.voucher.sectionChung"}],documentNumber:e=>e.so_phieu??"",documentDate:e=>e.ngay_giao_dich,amountOf:e=>e.so_tien,signatureRoles:[{key:"giam_doc",titleKey:"thuChi.voucher.signGiamDoc",isRepresentative:!0},{key:"ke_toan",titleKey:"thuChi.voucher.signKeToan"},{key:"nguoi_lap",titleKey:"thuChi.voucher.signNguoiLap"},{key:"thu_quy",titleKey:"thuChi.voucher.signThuQuy"}],page:{size:"A4",orientation:"portrait"},copies:["Liên 1: Lưu","Liên 2: Đối chiếu quỹ"]}),a=(0,t.defineVoucher)({slug:"phieu-thu",titleKey:"thuChi.voucher.tieuDeThu",formNumberKey:"thuChi.voucher.mauSoThu",fields:{nguoi_nop_nhan:{key:"nguoi_nop_nhan",dataType:"text",labelKey:"thuChi.voucher.nguoiNop",surfaces:{doc:{section:"chung",order:10,mapValue:e=>e.nguoi_nop_nhan||e.ten_doi_tuong||""}}},id_danh_muc:{key:"id_danh_muc",dataType:"text",labelKey:"thuChi.voucher.khoanMucThu",surfaces:{doc:{section:"chung",order:20,mapValue:e=>e.ten_danh_muc??""}}},dien_giai:{key:"dien_giai",dataType:"long_text",labelKey:"thuChi.voucher.lyDoNop",surfaces:{doc:{section:"chung",order:30,wide:!0}}},id_tai_khoan:{key:"id_tai_khoan",dataType:"text",labelKey:"thuChi.voucher.noVaoTaiKhoan",surfaces:{doc:{section:"chung",order:40,mapValue:e=>e.ten_tai_khoan??""}}}},sections:[{key:"chung",titleKey:"thuChi.voucher.sectionChung"}],documentNumber:e=>e.so_phieu??"",documentDate:e=>e.ngay_giao_dich,amountOf:e=>e.so_tien,signatureRoles:[{key:"giam_doc",titleKey:"thuChi.voucher.signGiamDoc",isRepresentative:!0},{key:"ke_toan",titleKey:"thuChi.voucher.signKeToan"},{key:"nguoi_lap",titleKey:"thuChi.voucher.signNguoiLap"},{key:"nguoi_nop",titleKey:"thuChi.voucher.signNguoiNop"},{key:"thu_quy",titleKey:"thuChi.voucher.signThuQuy"}],page:{size:"A4",orientation:"portrait"},copies:["Liên 1: Lưu","Liên 2: Giao người nộp"]});function o(e){return"thu"===e?a:"chi"===e?i:n}e.s(["THU_CHI_PRINT_DOCUMENTS",0,[{id:"phieu",labelKey:"thuChi.print.voucher",descriptionKey:"thuChi.print.voucherDesc",path:e=>`/phieu-thu-chi/${encodeURIComponent(e)}`}],"thuChiVoucherOf",0,o,"thuChiVoucherSlugOf",0,function(e){return o(e).slug}],53678)},151444,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(618566),a=e.i(178583),o=e.i(714884);e.i(621592);var h=e.i(84611),u=e.i(958598),c=e.i(178560),r=e.i(374),d=e.i(735671),g=e.i(725953),_=e.i(265756),l=e.i(67170),s=e.i(921313),p=e.i(172562),m=e.i(54932),y=e.i(644075),f=e.i(647163),x=e.i(53678),T=e.i(333658),k=e.i(530667);e.s(["default",0,()=>{let e=(0,n.useParams)(),C=e?.id??"",b=(0,n.useRouter)(),v=(0,n.usePathname)(),{data:w,isLoading:N}=(0,r.useCompanyInfo)(),{data:S,isLoading:K,isError:P,error:$,refetch:D}=(0,T.useThuChi)(C),[M]=(0,i.useState)(()=>(0,f.formatDateTime)(new Date)),L=S?(0,x.thuChiVoucherOf)(S.loai):null,V=S?(0,x.thuChiVoucherSlugOf)(S.loai):null,E=(0,i.useCallback)(()=>{if(window.opener)return void window.close();let e=(0,u.getParentPath)(v??"",m.txt);b.push(e??"/tai-chinh/thu-chi")},[b,v]),U=(0,i.useMemo)(()=>L?(0,s.buildPrintDocumentCSS)({includePage:!0,page:L.page,copies:L.copies?.length}):"",[L]),F=(0,i.useMemo)(()=>L&&S&&w?(0,p.buildVoucherModel)(L,S,{ten_cong_ty:w.ten_cong_ty,dia_chi:w.dia_chi,email:w.email,so_dien_thoai:w.so_dien_thoai,logo:w.logo,ma_so_thue:w.ma_so_thue,website:w.website,dia_diem_ky:w.dia_diem_ky,nguoi_dai_dien:w.nguoi_dai_dien,chuc_vu_nguoi_dai_dien:w.chuc_vu_nguoi_dai_dien},M):null,[L,S,w,M]),A=(0,i.useMemo)(()=>{let e=[];return(0,d.isApi)()&&e.push({format:"docx",label:(0,m.txt)("thuChi.print.doc"),icon:(0,t.jsx)(o.FileType,{size:14})}),e.push({format:"pdf",label:(0,m.txt)("thuChi.print.pdf"),icon:(0,t.jsx)(a.FileText,{size:14})}),e},[]),R=(0,i.useCallback)(async e=>{if(!S||!V)return;let t=`${"phieu-luan-chuyen"===V?"Phieu_luan_chuyen":"phieu-chi"===V?"Phieu_chi":"Phieu_thu"}_${(0,l.safeFileName)(S.so_phieu??String(S.id))}`;if(!(0,d.isApi)()){y.toast.info((0,m.txt)("thuChi.print.printFallback")),await (0,g.printWhenReady)();return}let{blob:i,filename:n}="pdf"===e?await (0,k.apiGetThuChiVoucherPdf)(S.id,V):await (0,k.apiGetThuChiVoucherDocx)(S.id,V);(0,_.downloadBlob)(i,n??`${t}.${"pdf"===e?"pdf":"docx"}`)},[S,V]),O=(0,t.jsx)("p",{className:"hidden print:block text-center",children:(0,m.txt)("document.notReady")});return K||N?(0,t.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-muted/30",children:[O,(0,t.jsx)("div",{"data-print":"hide",className:"h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin","aria-label":(0,m.txt)("common.loading")})]}):(P||S)&&!P?S&&F?(0,t.jsx)(c.PrintDocumentShell,{title:`${(0,m.txt)("thuChi.print.voucher")} - ${S.so_phieu} (${S.id})`,css:U,styleId:"thu-chi-voucher-print-styles",formats:A,onDownload:R,onClose:E,children:(0,t.jsx)(h.ChungTuSheet,{model:F})}):null:(0,t.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4 bg-muted/30 p-4",children:[(0,t.jsx)("p",{className:"text-destructive font-medium text-center",children:P?$?.message??(0,m.txt)("thuChi.print.loadError"):(0,m.txt)("thuChi.print.notFound")}),O,(0,t.jsxs)("div",{"data-print":"hide",className:"flex flex-wrap items-center justify-center gap-2",children:[P&&(0,t.jsx)("button",{type:"button",onClick:()=>void D(),className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted/50 font-medium",children:(0,m.txt)("common.retry")}),(0,t.jsx)("button",{type:"button",onClick:E,className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90",children:(0,m.txt)("common.close")})]})]})}])}]);