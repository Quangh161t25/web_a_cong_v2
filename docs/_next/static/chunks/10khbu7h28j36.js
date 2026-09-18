(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,346944,e=>{"use strict";var t=e.i(271645);let a=(e,t)=>{let a=e instanceof Map?e:new Map(e.entries()),r=t instanceof Map?t:new Map(t.entries());if(a.size!==r.size)return!1;for(let[e,t]of a)if(!r.has(e)||!Object.is(t,r.get(e)))return!1;return!0};e.s(["useShallow",0,function(e){let r=t.default.useRef(void 0);return t=>{let i=e(t);return!function(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Symbol.iterator in e&&Symbol.iterator in t){if("entries"in e&&"entries"in t)return a(e,t);let r=e[Symbol.iterator](),i=t[Symbol.iterator](),n=r.next(),o=i.next();for(;!n.done&&!o.done;){if(!Object.is(n.value,o.value))return!1;n=r.next(),o=i.next()}return!!n.done&&!!o.done}return a({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}(r.current,i)?r.current=i:r.current}}],346944)},985978,e=>{"use strict";var t=e.i(54932);let a=[{id:"all",group:"special",direction:"any",labelKey:"dateRange.preset.all"},{id:"overdue",group:"special",direction:"future",labelKey:"dateRange.preset.overdue"},{id:"today",group:"day",direction:"any",labelKey:"dateRange.preset.today"},{id:"yesterday",group:"day",direction:"past",labelKey:"dateRange.preset.yesterday"},{id:"tomorrow",group:"day",direction:"future",labelKey:"dateRange.preset.tomorrow"},{id:"this_week",group:"week",direction:"past",labelKey:"dateRange.preset.thisWeek"},{id:"last_week",group:"week",direction:"past",labelKey:"dateRange.preset.lastWeek"},{id:"last_7_days",group:"week",direction:"past",labelKey:"dateRange.preset.last7Days"},{id:"next_7_days",group:"week",direction:"future",labelKey:"dateRange.preset.next7Days"},{id:"this_month",group:"month",direction:"past",labelKey:"dateRange.preset.thisMonth"},{id:"last_month",group:"month",direction:"past",labelKey:"dateRange.preset.lastMonth"},{id:"last_30_days",group:"month",direction:"past",labelKey:"dateRange.preset.last30Days"},{id:"next_30_days",group:"month",direction:"future",labelKey:"dateRange.preset.next30Days"},{id:"next_month",group:"month",direction:"future",labelKey:"dateRange.preset.nextMonth"},{id:"this_quarter",group:"quarter",direction:"past",labelKey:"dateRange.preset.thisQuarter"},{id:"last_quarter",group:"quarter",direction:"past",labelKey:"dateRange.preset.lastQuarter"},{id:"last_90_days",group:"quarter",direction:"past",labelKey:"dateRange.preset.last90Days"},{id:"this_year",group:"year",direction:"past",labelKey:"dateRange.preset.thisYear"},{id:"last_year",group:"year",direction:"past",labelKey:"dateRange.preset.lastYear"},{id:"last_6_months",group:"year",direction:"past",labelKey:"dateRange.preset.last6Months"},{id:"last_12_months",group:"year",direction:"past",labelKey:"dateRange.preset.last12Months"}],r=["past","any"];function i(e=r){return a.filter(t=>e.includes(t.direction))}function n(e){return"all"===e}function o(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function s(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function l(e,t=0){return new Date(e.getFullYear(),e.getMonth()+t,1)}function d(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function u(e){let t=e.getDay();return s(e,-(0===t?6:t-1))}function c(e,t=0){return new Date(e.getFullYear(),3*Math.floor(e.getMonth()/3)+3*t,1)}function p(e){return new Date(e.getFullYear(),3*Math.floor(e.getMonth()/3)+3,0)}function g(e,t){return e.getTime()<=t.getTime()?e:t}function m(e,t,a){let r=o(t);switch(e){case"all":return{start:null,end:null};case"overdue":return{start:null,end:s(r,-1)};case"today":return{start:r,end:r};case"yesterday":return{start:s(r,-1),end:s(r,-1)};case"tomorrow":return{start:s(r,1),end:s(r,1)};case"this_week":{let e=u(r);return{start:e,end:g(s(e,6),r)}}case"last_week":{let e=s(u(r),-7);return{start:e,end:s(e,6)}}case"last_7_days":return{start:s(r,-6),end:r};case"next_7_days":return{start:r,end:s(r,6)};case"this_month":return{start:l(r),end:g(d(r),r)};case"last_month":{let e=l(r,-1);return{start:e,end:d(e)}}case"last_30_days":return{start:s(r,-29),end:r};case"next_30_days":return{start:r,end:s(r,29)};case"next_month":{let e=l(r,1);return{start:e,end:d(e)}}case"this_quarter":return{start:c(r),end:g(p(r),r)};case"last_quarter":{let e=c(r,-1);return{start:e,end:p(e)}}case"last_90_days":return{start:s(r,-89),end:r};case"this_year":return{start:new Date(r.getFullYear(),0,1),end:g(new Date(r.getFullYear(),11,31),r)};case"last_year":return{start:new Date(r.getFullYear()-1,0,1),end:new Date(r.getFullYear()-1,11,31)};case"last_6_months":return{start:l(r,-5),end:g(d(r),r)};case"last_12_months":return{start:l(r,-11),end:g(d(r),r)};case"custom":return{start:a?.start?o(a.start):null,end:a?.end?o(a.end):null}}}function h(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function y(e){return`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")}/${e.getFullYear()}`}function f(e){return!(!e||n(e.preset))&&("custom"!==e.preset||!!(e.customStart||e.customEnd))}function _(e){if(!e)return null;let[t,a,r]=e.split("-").map(Number);return t&&a&&r?new Date(t,a-1,r):null}i().map(e=>e.id);let x={special:"",day:"dateRange.group.day",week:"dateRange.group.week",month:"dateRange.group.month",quarter:"dateRange.group.quarter",year:"dateRange.group.year"};e.s(["DEFAULT_STATS_DATE_PRESET_ID",0,"all","EMPTY_DATE_RANGE_VALUE",0,{preset:"all",customStart:"",customEnd:""},"buildDateRangePresetOptions",0,function(e){let{directions:a=r,includeCustom:n=!0}=e??{},o=i(a).map(e=>({id:e.id,group:e.group,get label(){return(0,t.txt)(e.labelKey)},get groupLabel(){let a=x[e.group];return a?(0,t.txt)(a):""}}));return n&&o.push({id:"custom",group:"special",get label(){return(0,t.txt)("dateRange.preset.custom")},groupLabel:""}),o},"dateRangeFilterToParams",0,function(e,t){if(!f(e))return{};let{start:a,end:r}=m(e.preset,t,{start:_(e.customStart),end:_(e.customEnd)});return{dateFrom:a?h(a):void 0,dateTo:r?h(r):void 0}},"getStatsDateRangeLabel",0,function(e,r){let{start:i,end:n}=r;switch(e){case"this_week":case"last_week":if(!i||!n)break;return`${(0,t.txt)("dateRange.unit.week")} ${i.getDate()}/${i.getMonth()+1} – ${n.getDate()}/${n.getMonth()+1}/${n.getFullYear()}`;case"this_month":case"last_month":case"next_month":if(!i)break;return`${(0,t.txt)("dateRange.unit.month")} ${i.getMonth()+1}/${i.getFullYear()}`;case"this_quarter":case"last_quarter":if(!i)break;return`${(0,t.txt)("dateRange.unit.quarter")} ${Math.floor(i.getMonth()/3)+1}/${i.getFullYear()}`;case"this_year":case"last_year":if(!i)break;return`${(0,t.txt)("dateRange.unit.year")} ${i.getFullYear()}`;case"custom":if(i&&n)return`${y(i)} – ${y(n)}`;return(0,t.txt)("dateRange.preset.custom")}let o=a.find(t=>t.id===e);return o?(0,t.txt)(o.labelKey):""},"isAllStatsDateRange",0,n,"isDateRangeFilterActive",0,f,"resolveStatsDateRange",0,m,"toLocalDateParam",0,h])},956726,e=>{"use strict";var t=e.i(526732),a=e.i(365466),r=e.i(715760),i=e.i(642651),n=e.i(735671),o=e.i(391042),s=e.i(54932),l=e.i(531286),d=e.i(733595);async function u(e,a){let r=(0,l.normalizeLoginName)(e);if(!r)return!1;try{let e=await (0,t.signIn)("credentials",{tai_khoan:r,password:a,remember:String((0,d.isAuthRemembered)()),redirect:!1});return!e?.error}catch{return!1}}function c(e){if(e instanceof r.ApiError){if(401===e.status)return(0,s.txt)("page.profile.wrongCurrentPassword");if(e.message)return e.message}return e instanceof Error&&e.message?e.message:(0,s.txt)("page.profile.passwordChangeFailed")}async function p(e){let t=(0,l.normalizeLoginName)(e.loginName);if(!t)return{ok:!1,error:(0,s.txt)("page.profile.noLoginName")};if((0,n.isMock)())return(0,o.verifyMockPassword)(t,e.currentPassword)?((0,o.setMockPassword)(t,e.newPassword),{ok:!0}):{ok:!1,error:(0,s.txt)("page.profile.wrongCurrentPassword")};if((0,n.isApi)()){try{await (0,a.apiChangePassword)(e.currentPassword,e.newPassword)}catch(e){return{ok:!1,error:c(e)}}return await u(t,e.newPassword)?{ok:!0}:{ok:!1,error:(0,s.txt)("page.profile.passwordChangedRelogin")}}return{ok:!1,error:(0,s.txt)("page.profile.dataSourceUnsupported")}}async function g(e,t){if((0,n.isMock)()){let a=t?(0,l.normalizeLoginName)(t):"";return a&&(0,o.setMockPassword)(a,e),{ok:!0}}if((0,n.isApi)()){try{await (0,a.apiSetPassword)(e)}catch(e){return{ok:!1,error:c(e)}}return t?await u(t,e)?{ok:!0}:{ok:!1,error:(0,s.txt)("page.profile.passwordChangedRelogin")}:{ok:!0}}return{ok:!1,error:(0,s.txt)("page.profile.dataSourceUnsupported")}}e.s(["MIN_PASSWORD_LENGTH",0,6,"changePassword",0,p,"resolveUserAuthEmail",0,function(e){return e.tai_khoan?.trim()?(0,i.loginNameToAuthEmail)(e.tai_khoan):e.email?.trim()??""},"resolveUserLoginName",0,function(e){if(e.tai_khoan?.trim())return(0,l.normalizeLoginName)(e.tai_khoan);let t=e.email?.trim()??"";return t?(0,l.normalizeLoginName)(t.split("@")[0]??""):""},"setNewPasswordWithoutCurrent",0,g])},618149,323153,e=>{"use strict";var t=e.i(54932),a=e.i(644075);e.s(["reportBulkOutcome",0,function(e,r){let{succeededIds:i,failures:n}=e;if(0===n.length)return void a.toast.success(r.successMessage(i.length));if(0===i.length)return void a.toast.error(r.allFailedMessage(n.length));let o=r.onShowDetails;a.toast.warning(r.partialMessage(i.length,n.length),{duration:8e3,...o?{action:{label:r.viewDetailsLabel??(0,t.txt)("shared.bulk.viewDetails"),onClick:()=>o(n)}}:{}})}],618149);var r=e.i(933818),i=e.i(197393),n=e.i(328118),o=e.i(625776);function s(e){return{search:e.search,trang_thai:e.trang_thai,id_phong_ban:e.id_phong_ban,id_chuc_vu:e.id_chuc_vu,gioi_tinh:e.gioi_tinh,columnSearch:e.columnSearch,asAt:e.asAt,dateFrom:e.dateFrom,dateTo:e.dateTo}}e.s(["employeeDetailQueryOptions",0,function(e){return(0,r.queryOptions)({queryKey:o.employeeKeys.detail(e),queryFn:()=>(0,i.getEmployeeById)(e),enabled:!!e,...n.listQueryOptions})},"employeeFilterCountsQueryOptions",0,function(e={}){let t=s(e);return(0,r.queryOptions)({queryKey:o.employeeKeys.filterCounts(t),queryFn:()=>(0,i.getEmployeeFilterCounts)(e),...n.listQueryOptions})},"employeeStatsAggregatesQueryOptions",0,function(e={}){return(0,r.queryOptions)({queryKey:o.employeeKeys.statsAggregates(s(e)),queryFn:()=>(0,i.getEmployeeStatsAggregates)(e),...n.listQueryOptions})},"employeesPageQueryOptions",0,function(e){let t=e.limit??20,a=e.offset??0,l=e.orderBy??o.EMPLOYEES_LIST_QUERY_PARAMS.orderBy,d=e.ascending??o.EMPLOYEES_LIST_QUERY_PARAMS.ascending,u={limit:t,offset:a,orderBy:l,ascending:d,...s(e)};return(0,r.queryOptions)({queryKey:o.employeeKeys.page(u),queryFn:()=>(0,i.getEmployeesPage)({...e,limit:t,offset:a,orderBy:l,ascending:d}),...n.listQueryOptions})}],323153)},635821,e=>{"use strict";var t=e.i(681307);e.i(991715);var a=e.i(350108),r=e.i(956726),i=e.i(54932),n=e.i(531286),o=e.i(725245),s=e.i(522264);let l=(0,a.buildZodShape)(s.EMPLOYEE_FIELDS);function d(e,a){"Nghỉ việc"===e.trang_thai&&(e.ngay_nghi_viec&&""!==String(e.ngay_nghi_viec).trim()||a.addIssue({code:t.z.ZodIssueCode.custom,path:["ngay_nghi_viec"],message:(0,i.txt)("employee.validation.resignationDateRequired")}))}let u=(0,a.buildFormSchema)(s.EMPLOYEE_FIELDS).superRefine(d),c=(0,a.buildPartialFormSchema)(s.EMPLOYEE_FIELDS),p=t.z.object({so_dien_thoai:l.so_dien_thoai,email_ca_nhan:l.email_ca_nhan});function g(e){return"function"==typeof e?e():e}let m=t.z.object({tai_khoan:(0,n.loginNameSchema)(),mat_khau_tam:t.z.string().min(r.MIN_PASSWORD_LENGTH,{message:(0,i.txt)("employee.validation.tempPasswordMin")})}),h=t.z.object({tai_khoan:t.z.union([t.z.literal(""),(0,n.loginNameSchema)()]).optional(),mat_khau_tam:t.z.string().optional()});function y(e){return t.z.object({...l,...e})}function f(e,a,r){if(!a.id_chuc_vu)return;let n=(0,o.findPositionById)(e,a.id_chuc_vu);if(!n)return void r.addIssue({code:t.z.ZodIssueCode.custom,path:["id_chuc_vu"],message:(0,i.txt)("employee.validation.positionRequired")});let s=(0,o.getPositionDepartmentId)(n);s?a.id_phong_ban&&String(a.id_phong_ban)!==s&&r.addIssue({code:t.z.ZodIssueCode.custom,path:["id_phong_ban"],message:(0,i.txt)("employee.validation.departmentMismatch")}):r.addIssue({code:t.z.ZodIssueCode.custom,path:["id_chuc_vu"],message:(0,i.txt)("employee.validation.positionNoDepartment")})}e.s(["createEmployeeCreateSchema",0,function(e=[]){return y(m.shape).superRefine((t,a)=>{d(t,a),f(g(e),t,a)})},"createEmployeeEditSchema",0,function(e=[],a){return y(h.shape).superRefine((o,s)=>{let l,u;d(o,s),f(g(e),o,s),l=a?.trim()?(0,n.normalizeLoginName)(a):"",u=o.tai_khoan?.trim()?(0,n.normalizeLoginName)(o.tai_khoan):"",((l?u!==l:u)||!l&&u)&&(!o.mat_khau_tam||o.mat_khau_tam.length<r.MIN_PASSWORD_LENGTH)&&s.addIssue({code:t.z.ZodIssueCode.custom,path:["mat_khau_tam"],message:(0,i.txt)("employee.validation.tempPasswordMin")})})},"createEmployeeSchema",0,function(e=[]){return u.superRefine((t,a)=>{f(g(e),t,a)})},"employeePartialSchema",0,c,"selfProfileSchema",0,p])},916797,700878,926065,e=>{"use strict";var t=e.i(271645),a=e.i(954616),r=e.i(266027),i=e.i(912598),n=e.i(346944),o=e.i(618149),s=e.i(54932),l=e.i(644075),d=e.i(625776),u=e.i(323153),c=e.i(136446),p=e.i(263764),g=e.i(735671);e.i(220864);var m=e.i(455226),h=e.i(463310),y=e.i(571168),f=e.i(933462),_=e.i(915697),x=e.i(647163),b=e.i(531286),v=e.i(301613),w=e.i(635821),k=e.i(725245),E=e.i(945021),S=e.i(197393);function P(e,t,a){if(null==t||""===String(t).trim())return null;let r=String(t).trim(),i=e.find(e=>e.id===r);if(i)return i.id;let n=r.toUpperCase(),o=e.find(e=>{let t=e[a];return"string"==typeof t&&t.toUpperCase()===n});return o?.id??null}async function M(){let e=[];for(let t=0;;t+=100){let a=await (0,S.getEmployeesPage)({limit:100,offset:t});if(e.push(...a.items),0===a.items.length||e.length>=a.total)return e}}let R={writeCostMs:80,checkCostMs:3},D=async(e,t)=>{let[a,r]=await Promise.all([(0,c.getActivePositions)(),(0,p.getDepartments)()]),i=async(e,t,a)=>{let r=e.map(e=>({matchValue:e.matchValue,data:e.data.hinh_anh||!e.data.ho_va_ten?e.data:{...e.data,hinh_anh:(0,x.getAvatarUrl)(e.data.ho_va_ten)}}));return(0,g.isApi)()?(0,E.apiImportNhanVien)(r,t,a):(0,_.runWriteModeBatch)(r,t,{findExistingMany:async e=>{let t=await M(),r=new Set(e),i=a.matchBy===m.IMPORT_ID_COLUMN_KEY?e=>e.id:e=>e.tai_khoan;return(0,_.toExistingLookup)(t.filter(e=>r.has((0,m.normalizeMatchValue)(i(e)))),i)},idOf:e=>Number(e.id),check:async()=>{},create:e=>(0,S.createEmployee)(e).then(()=>void 0),update:(e,t,a)=>(0,S.updateEmployee)(String(e),{...a,...t}).then(()=>void 0),translateError:e=>e instanceof Error?e.message:String(e)},{dryRun:a.dryRun,matchBy:a.matchBy})};return(0,f.runChunkedImport)(e,(e,t,i)=>{let n="update-only"===i,o=String(e.ho_va_ten??"").trim(),l=String(e.email??"").trim();if(!n&&(!o||!l))throw Error((0,s.txt)("employee.import.missingRequired"));let d=e.id_chuc_vu??e.ma_chuc_vu,u=P(a.map(e=>({...e,ma:e.ma_chuc_vu})),d,"ma"),c=!n||null!=d;if(c&&!u)throw Error((0,s.txt)("employee.validation.positionRequired"));let p=u?(0,k.findPositionById)(a,u):null,g=e.id_phong_ban??e.ma_phong_ban,m=P(r.map(e=>({...e,ma:e.ma_phong_ban})),g,"ma")??p?.id_phong_ban??"";if((!n||null!=g||c)&&!m)throw Error((0,s.txt)("employee.validation.departmentRequired"));let f=null!=e.tai_khoan?String(e.tai_khoan).trim():"",_=null!=e.mat_khau_tam?String(e.mat_khau_tam):"";if(!n&&f&&!_.trim())throw Error((0,s.txt)("employee.validation.tempPasswordMin"));let x={ho_va_ten:o,email:l,so_dien_thoai:String(e.so_dien_thoai??"").trim(),id_chuc_vu:u??"",id_phong_ban:m,gioi_tinh:function(e){if(null==e||""===String(e).trim())return"Nam";let t=String(e).trim();if("Nam"===t||"Nữ"===t||"Khác"===t)return t;throw Error((0,s.txt)("employee.validation.genderInvalid"))}(e.gioi_tinh),trang_thai:function(e){if(null==e||""===String(e).trim())return"Đang làm việc";let t=String(e).trim(),a=v.TRANG_THAI_NHAN_VIEN.find(e=>e===t);if(!a)throw Error((0,s.txt)("employee.validation.statusInvalid"));return a}(e.trang_thai),...f?{tai_khoan:(0,b.normalizeLoginName)(f),mat_khau_tam:_}:{}};if(n){let t=(0,y.parseForImport)(w.employeePartialSchema,x);return(0,h.keepPresentKeys)({...t,...x},e,{id_chuc_vu:["id_chuc_vu","ma_chuc_vu"],id_phong_ban:["id_phong_ban","ma_phong_ban"]})}return f?(0,y.parseForImport)((0,w.createEmployeeCreateSchema)(a),x):(0,y.parseForImport)((0,w.createEmployeeSchema)(a),x)},i,{...t,costProfile:R})};e.i(991715);var K=e.i(232539),F=e.i(985978),$=e.i(547061),C=e.i(522264);let T=(0,K.buildTableColumns)(C.EMPLOYEE_FIELDS),q={columnSearch:{},trang_thai:[],id_phong_ban:[],gender:[],position:[],dateRange:F.EMPTY_DATE_RANGE_VALUE},L=(0,$.createGenericStore)(q,T,"table-nhan-vien");e.s(["useEmployeeStore",0,L],700878);var A=e.i(619273);function N(e,t,a,r,i){let{orderBy:n,ascending:o}={orderBy:a.column&&a.column.length>0?a.column:d.EMPLOYEES_LIST_QUERY_PARAMS.orderBy,ascending:"desc"!==a.direction},s=Object.fromEntries(Object.entries(i.columnSearch??{}).filter(([,e])=>e?.trim())),{dateFrom:l,dateTo:u}=(0,F.dateRangeFilterToParams)(i.dateRange,(0,x.getNowAsLocalDate)());return{dateFrom:l,dateTo:u,limit:t,offset:(e-1)*t,orderBy:n,ascending:o,search:r.trim()||void 0,trang_thai:i.trang_thai.length?i.trang_thai:void 0,id_phong_ban:i.id_phong_ban.length?i.id_phong_ban:void 0,id_chuc_vu:i.position.length?i.position:void 0,gioi_tinh:i.gender.length?i.gender:void 0,columnSearch:Object.keys(s).length?s:void 0}}function O({page:e,pageSize:a,sort:i,searchTerm:n,filters:o}){let s=(0,t.useMemo)(()=>N(e,a,i,n,o),[e,a,i,n,o]),l=(0,r.useQuery)({...(0,u.employeesPageQueryOptions)(s),placeholderData:A.keepPreviousData}),d=l.data;return{employees:d?.items??[],total:d?.total??0,mode:"server",isServerPaginated:!0,isLoading:l.isLoading,isFetching:l.isFetching}}function z(e){e.invalidateQueries({queryKey:d.employeeKeys.pagePrefix}),e.invalidateQueries({queryKey:d.employeeKeys.countPrefix}),e.invalidateQueries({queryKey:d.employeeKeys.filterCountsPrefix}),e.invalidateQueries({queryKey:d.employeeKeys.statsAggregatesPrefix})}e.s(["toListParams",0,N,"useEmployeesList",0,O],926065),e.s(["useBulkResetEmployeePasswords",0,e=>{let t=(0,i.useQueryClient)();return(0,a.useMutation)({mutationFn:({ids:e,password:t})=>(0,S.bulkResetEmployeePasswords)(e,t),onSuccess:a=>{z(t),t.invalidateQueries({queryKey:d.employeeKeys.anyDetail}),a.updated>0&&l.toast.success((0,s.txt)("employee.bulkPassword.success",{count:a.updated})),a.skipped.length>0&&l.toast.warning((0,s.txt)("employee.bulkPassword.skipped",{count:a.skipped.length}),{description:a.skipped.slice(0,3).join(", ")}),e?.()},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.actionFailed"))})},"useBulkUpdateEmployees",0,e=>{let t=(0,i.useQueryClient)();return(0,a.useMutation)({mutationFn:({targets:e,fields:t})=>(0,S.bulkUpdateEmployees)(e,t),onSuccess:a=>{z(t),t.invalidateQueries({queryKey:d.employeeKeys.anyDetail}),(0,o.reportBulkOutcome)(a,{successMessage:e=>(0,s.txt)("employee.toast.bulkUpdateSuccess",{count:e}),partialMessage:(e,t)=>(0,s.txt)("shared.bulk.partialDone",{ok:e,failed:t}),allFailedMessage:e=>(0,s.txt)("shared.bulk.allFailed",{count:e})}),0===a.failures.length&&e?.()},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.saveFailed"))})},"useCreateEmployee",0,e=>{let t=(0,i.useQueryClient)();return(0,a.useMutation)({mutationFn:e=>(0,S.createEmployee)(e),onSuccess:a=>{z(t),l.toast.success((0,s.txt)("employee.toast.createSuccess")),e&&e(a)},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.saveFailed"))})},"useDeleteEmployees",0,()=>{let e=(0,i.useQueryClient)();return(0,a.useMutation)({mutationFn:e=>(0,S.deleteEmployees)(e),onSuccess:(t,a)=>{z(e),a.forEach(t=>e.removeQueries({queryKey:d.employeeKeys.detail(t)})),l.toast.success((0,s.txt)("employee.toast.deleteSuccess",{count:a.length}))},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.deleteFailed"))})},"useDeleteWithUndo",0,()=>{let e=(0,i.useQueryClient)(),t=(0,a.useMutation)({mutationFn:e=>(0,S.deleteEmployees)(e),onSuccess:(t,a)=>{z(e),a.forEach(t=>e.removeQueries({queryKey:d.employeeKeys.detail(t)}))},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.deleteFailed"))});return{deleteWithUndo:async(e,a)=>{let r=e.map(e=>e.id);await t.mutateAsync(r),a?.onDone?.(),l.toast.success((0,s.txt)("employee.toast.deleteCount",{count:r.length}))},isPending:t.isPending}},"useEmployee",0,e=>(0,r.useQuery)({...(0,u.employeeDetailQueryOptions)(e??""),enabled:!!e}),"useEmployees",0,()=>{let{pagination:e,sort:a,searchTerm:r,filters:i,setPage:o}=L((0,n.useShallow)(e=>({pagination:e.pagination,sort:e.sort,searchTerm:e.searchTerm,filters:e.filters,setPage:e.setPage})));(0,t.useEffect)(()=>{o(1)},[r,i.trang_thai,i.id_phong_ban,i.position,i.gender,i.columnSearch,o]);let s=O({page:e.page,pageSize:e.pageSize,sort:a,searchTerm:r,filters:i});return{data:s.employees,total:s.total,mode:s.mode,isServerPaginated:s.isServerPaginated,isLoading:s.isLoading,isFetching:s.isFetching}},"useImportEmployees",0,()=>{let e=(0,i.useQueryClient)();return(0,a.useMutation)({mutationFn:({rows:e,...t})=>D(e,t),onSuccess:(t,a)=>{if(a.dryRun)return;z(e);let r=t.created+t.updated;r>0&&l.toast.success((0,s.txt)("employee.toast.importSuccess",{count:r}))},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.actionFailed"))})},"useResetEmployeePassword",0,()=>{let e=(0,i.useQueryClient)();return(0,a.useMutation)({mutationFn:({id:e,password:t})=>(0,S.resetEmployeePassword)(e,t),onSuccess:(t,a)=>{e.invalidateQueries({queryKey:d.employeeKeys.detail(a.id)}),l.toast.success((0,s.txt)("employee.form.resetPasswordSuccess"))},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.actionFailed"))})},"useUpdateEmployee",0,e=>{let t=(0,i.useQueryClient)();return(0,a.useMutation)({mutationFn:({id:e,data:t})=>(0,S.updateEmployee)(e,t),onSuccess:(a,r)=>{z(t),t.setQueryData(d.employeeKeys.detail(r.id),a),l.toast.success((0,s.txt)("employee.toast.updateSuccess")),e&&e(a)},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.saveFailed"))})},"useUpdateOwnProfile",0,()=>{let e=(0,i.useQueryClient)();return(0,a.useMutation)({mutationFn:({id:e,patch:t})=>(0,S.updateOwnProfile)(e,t),onSuccess:(t,a)=>{z(e),e.setQueryData(d.employeeKeys.detail(a.id),t)},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.saveFailed"))})},"useUpdateStatusEmployee",0,()=>{let e=(0,i.useQueryClient)();return(0,a.useMutation)({mutationFn:({ids:e,status:t})=>(0,S.updateEmployeeStatus)(e,t),onSuccess:(t,a)=>{z(e),a.ids.forEach(t=>{e.setQueryData(d.employeeKeys.detail(t),e=>e?{...e,trang_thai:a.status}:e)}),l.toast.success((0,s.txt)("employee.toast.statusUpdateSuccess",{count:a.ids.length}))},onError:e=>l.toast.fromError(e,(0,s.txt)("shared.error.saveFailed"))})}],916797)},265756,e=>{"use strict";e.s(["downloadBlob",0,function(e,t){let a=URL.createObjectURL(e),r=document.createElement("a");r.href=a,r.download=t,r.rel="noopener",r.style.display="none",document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(a),1e4)}])},921313,e=>{"use strict";let t="#1f2937",a="#4b5563",r="#6b7280",i="#d7dae0",n="#f7f8fa";var o=e.i(805378);e.s(["buildPrintDocumentCSS",0,function(e={}){let s=e.fontStack??"'Times New Roman', Tinos, 'Liberation Serif', serif",l=e.page??o.DEFAULT_PAGE_SPEC,d=(0,o.pageMarginMm)(l),u=Math.max(1,Math.floor(e.copies??1)),c=e.includePage?`@page {
  size: ${(0,o.cssPageSizeDeclaration)(l)};
  margin: ${d.top}mm ${d.right}mm ${d.bottom}mm ${d.left}mm;
}
`:"",p=u>=2?`.epdoc-copy {
  break-inside: avoid;
  page-break-inside: avoid;
  position: relative;
}
.epdoc-copy + .epdoc-copy {
  margin-top: ${o.PRINT_COPY_GAP_MM}mm;
  padding-top: ${o.PRINT_COPY_GAP_MM}mm;
  border-top: 1px dashed ${i};
}
.epdoc-copy-label {
  font-size: 7pt;
  color: ${a};
  text-align: right;
  margin: 0 0 2px 0;
}
`:"";return`${c}${p}.epdoc-root {
  font-family: ${s};
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
  padding: ${d.top}mm ${d.right}mm ${d.bottom}mm ${d.left}mm;
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
  color: ${a};
  margin: 2px 0 0 0;
}
.epdoc-photo {
  width: 30mm;
  height: 40mm;
  object-fit: cover;
  border: 1px solid ${i};
}
.epdoc-photo-placeholder {
  width: 30mm;
  height: 40mm;
  margin-left: auto;
  border: 1px dashed ${i};
  color: ${r};
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
  color: ${a};
  white-space: nowrap;
}
.epdoc-heading-role {
  font-size: 11pt;
  color: ${a};
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
  border: 1px solid ${i};
  padding: 3px 6px;
  vertical-align: top;
  font-size: 11pt;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.epdoc-label {
  width: 22%;
  background: ${n};
  color: ${a};
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
  border: 1px solid ${i};
  padding: 3px 5px;
  vertical-align: top;
  word-wrap: break-word;
}
.epdoc-table th {
  background: ${n};
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
  background: ${n};
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
  color: ${a};
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
  color: ${r};
  margin-top: 12px;
}
.epdoc-divider {
  border: 0;
  border-top: 1px solid ${i};
  margin: 10px 0;
}
@media print {
  .epdoc-sheet {
    padding: 0 !important;
    box-shadow: none !important;
  }
}`}],921313)},714884,67170,e=>{"use strict";let t=(0,e.i(475254).default)("file-type",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5",key:"qbrxap"}]]);e.s(["FileType",0,t],714884),e.s(["safeFileName",0,function(e){return e.replace(/\s+/g,"_").replace(/[<>:"/\\|?*]/g,"")}],67170)},885308,e=>{"use strict";var t=e.i(843476),a=e.i(271645),r=e.i(618566),i=e.i(178583),n=e.i(714884);e.i(621592);var o=e.i(84611),s=e.i(958598),l=e.i(178560),d=e.i(945021),u=e.i(374),c=e.i(735671),p=e.i(725953),g=e.i(265756),m=e.i(67170),h=e.i(921313),y=e.i(172562),f=e.i(54932),_=e.i(644075),x=e.i(647163);let b=(0,y.defineVoucher)({slug:"quyet-dinh-bo-nhiem",titleKey:"employee.quyetDinh.title",fields:{ho_va_ten:{key:"ho_va_ten",dataType:"name",labelKey:"employee.field.ho_va_ten",surfaces:{doc:{section:"employee",order:10}}},ngay_sinh:{key:"ngay_sinh",dataType:"date",labelKey:"employee.field.ngay_sinh",surfaces:{doc:{section:"employee",order:20}}},so_cccd:{key:"so_cccd",dataType:"text",labelKey:"employee.field.so_cccd",surfaces:{doc:{section:"employee",order:30}}},dia_chi:{key:"dia_chi",dataType:"address",labelKey:"employee.field.dia_chi",surfaces:{doc:{section:"employee",order:40,wide:!0}}},ten_chuc_vu:{key:"ten_chuc_vu",dataType:"text",labelKey:"employee.field.id_chuc_vu",surfaces:{doc:{section:"assignment",order:10}}},ten_phong_ban:{key:"ten_phong_ban",dataType:"text",labelKey:"employee.field.id_phong_ban",surfaces:{doc:{section:"assignment",order:20}}},ngay_vao_lam:{key:"ngay_vao_lam",dataType:"date",labelKey:"employee.field.ngay_vao_lam",surfaces:{doc:{section:"assignment",order:30}}}},sections:[{key:"employee",titleKey:"employee.quyetDinh.sectionEmployee"},{key:"assignment",titleKey:"employee.quyetDinh.sectionAssignment"}],documentNumber:e=>e.so_quyet_dinh_goi_y??"",documentDate:e=>e.ngay_vao_lam??null,signatureRoles:[{key:"issuer",titleKey:"employee.quyetDinh.signIssuer"},{key:"hr",titleKey:"employee.quyetDinh.signHr"},{key:"receiver",titleKey:"employee.quyetDinh.signReceiver"}]});var v=e.i(916797),w=e.i(266027),k=e.i(328118),E=e.i(625776);e.s(["default",0,()=>{let e,S=(0,r.useParams)(),P=S?.id,M=(0,r.useRouter)(),R=(0,r.usePathname)(),{data:D,isLoading:K}=(0,u.useCompanyInfo)(),{data:F,isLoading:$,isError:C,error:T,refetch:q}=(0,v.useEmployee)(P??null),{data:L,isLoading:A,isError:N,error:O,refetch:z}=(e=P??null,(0,w.useQuery)({queryKey:E.employeeKeys.quyetDinhModel(e??""),queryFn:()=>(0,d.apiGetEmployeeQuyetDinhModel)(e),enabled:!!e&&(0,c.isApi)(),...k.defaultServerQueryOptions})),[I]=(0,a.useState)(()=>(0,x.formatDateTime)(new Date)),Q=(0,a.useCallback)(()=>{if(window.opener)return void window.close();let e=(0,s.getParentPath)(R??"",f.txt);M.push(e??"/he-thong/nhan-vien")},[M,R]),j=(0,a.useMemo)(()=>(0,h.buildPrintDocumentCSS)({includePage:!0,page:b.page}),[]),Y=(0,a.useMemo)(()=>L||(!(0,c.isApi)()&&F&&D?(0,y.buildVoucherModel)(b,F,{ten_cong_ty:D.ten_cong_ty,dia_chi:D.dia_chi,email:D.email,so_dien_thoai:D.so_dien_thoai,logo:D.logo,ma_so_thue:D.ma_so_thue,website:D.website,dia_diem_ky:D.dia_diem_ky,nguoi_dai_dien:D.nguoi_dai_dien,chuc_vu_nguoi_dai_dien:D.chuc_vu_nguoi_dai_dien},I):null),[L,F,D,I]),U=(0,a.useMemo)(()=>{let e=[];return(0,c.isApi)()&&e.push({format:"docx",label:(0,f.txt)("employee.export.doc"),icon:(0,t.jsx)(n.FileType,{size:14})}),e.push({format:"pdf",label:(0,f.txt)("employee.export.pdf"),icon:(0,t.jsx)(i.FileText,{size:14})}),e},[]),B=(0,a.useCallback)(async e=>{if(!F)return;let t=`Quyet_dinh_${(0,m.safeFileName)(F.ho_va_ten)}_${F.id}`;if(!(0,c.isApi)()){_.toast.info((0,f.txt)("employee.export.printFallback")),await (0,p.printWhenReady)();return}let{blob:a,filename:r}="pdf"===e?await (0,d.apiGetEmployeeQuyetDinhPdf)(F.id):await (0,d.apiGetEmployeeQuyetDinhDocx)(F.id);(0,g.downloadBlob)(a,r??`${t}.${"pdf"===e?"pdf":"docx"}`)},[F]),G=(0,t.jsx)("p",{className:"hidden print:block text-center",children:(0,f.txt)("document.notReady")});if($||K||A)return(0,t.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-muted/30",children:[G,(0,t.jsx)("div",{"data-print":"hide",className:"h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin","aria-label":(0,f.txt)("common.loading")})]});let V=C||N;return(V||F)&&!V?F&&Y?(0,t.jsx)(l.PrintDocumentShell,{title:`${(0,f.txt)("employee.quyetDinh.title")} - ${F.ho_va_ten} (${F.id})`,css:j,styleId:"employee-quyet-dinh-print-styles",formats:U,onDownload:B,onClose:Q,children:(0,t.jsx)(o.ChungTuSheet,{model:Y})}):null:(0,t.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4 bg-muted/30 p-4",children:[(0,t.jsx)("p",{className:"text-destructive font-medium text-center",children:V?(T??O)?.message??(0,f.txt)("employee.profile.loadError"):(0,f.txt)("employee.quyetDinh.notFound")}),G,(0,t.jsxs)("div",{"data-print":"hide",className:"flex flex-wrap items-center justify-center gap-2",children:[V&&(0,t.jsx)("button",{type:"button",onClick:()=>{q(),z()},className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted/50 font-medium",children:(0,f.txt)("common.retry")}),(0,t.jsx)("button",{type:"button",onClick:Q,className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90",children:(0,f.txt)("common.close")})]})]})}],885308)}]);