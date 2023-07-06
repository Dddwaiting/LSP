(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ac478aa"],{"6def":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return l})),a.d(e,"f",(function(){return s})),a.d(e,"c",(function(){return c}));a("b0c0");var i=a("b775");function r(t){return Object(i["a"])({url:"/laboratory/list",method:"GET",params:{page:t.page-1,pageSize:t.pageSize,name:t.name}})}function o(){return Object(i["a"])({url:"/laboratory/list/user",method:"GET"})}function n(t){return null==t?Object(i["a"])({url:"/laboratory/list/count",method:"GET"}):Object(i["a"])({url:"/laboratory/list/count",method:"GET",params:{name:t.name}})}function l(t){return Object(i["a"])({url:"/laboratory",method:"POST",data:t})}function s(t){return Object(i["a"])({url:"/laboratory",method:"PUT",data:t})}function c(t){return Object(i["a"])({url:"/laboratory",method:"DELETE",params:{laboratoryId:t}})}},"8acb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{placeholder:"设备名",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}})],1),a("el-col",{attrs:{span:3}},[a("el-select",{attrs:{placeholder:"状态",clearable:""},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.statusOptions,(function(t){return a("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})})),1)],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.getDeviceList}},[t._v("搜索")])],1),"NORMAL"!==t.role?a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.showFormDialog("create")}}},[t._v("添加设备")])],1):t._e()],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.deviceList}},[a("el-table-column",{attrs:{label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.deviceId)+" ")]}}])}),a("el-table-column",{attrs:{label:"设备名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),a("el-table-column",{attrs:{label:"设备图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"60%"},attrs:{src:t.row.imageUrl}})]}}])}),a("el-table-column",{attrs:{label:"所属实验室"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.laboratory?[t._v(" "+t._s(e.row.laboratory.name)+" ")]:void 0}}],null,!0)}),a("el-table-column",{attrs:{label:"当前状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status,"css")}},[t._v(" "+t._s(t._f("statusFilter")(e.row.status,"content"))+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"360px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:6}},[a("router-link",{attrs:{to:"/device/detail/"+e.row.deviceId}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("设备详情")])],1)],1),a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.showBorrowDialog(e.row)}}},[t._v("申请设备")])],1),e.row.laboratory.user.userId===t.userId?a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(a){return t.showFormDialog("update",e.row)}}},[t._v("修改")])],1):t._e(),"SUPER_ADMIN"===t.role||e.row.laboratory.user.userId===t.userId?a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.deleteData(e.row)}}},[t._v("删除")])],1):t._e()],1)]}}])})],1),a("el-pagination",{staticStyle:{margin:"40px 0"},attrs:{"page-sizes":[5,10,15,20],"page-size":t.listQuery.pageSize,total:t.totalSize,background:"",layout:"sizes, prev, pager, next"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),a("el-dialog",{attrs:{title:t.dialogTitleMap[t.dialogStatus],visible:t.formDialogVisible,width:"45%"},on:{"update:visible":function(e){t.formDialogVisible=e}}},[a("el-form",{attrs:{model:t.template,"label-position":"left"}},[a("el-form-item",{attrs:{label:"设备图片","label-width":"90px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://127.0.0.1:8080/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.template.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.template.imageUrl,alt:""}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"设备名称","label-width":"90px"}},[a("el-input",{model:{value:t.template.name,callback:function(e){t.$set(t.template,"name",e)},expression:"template.name"}})],1),a("el-form-item",{attrs:{label:"所属实验室","label-width":"90px"}},[a("el-select",{model:{value:t.template.laboratory.laboratoryId,callback:function(e){t.$set(t.template.laboratory,"laboratoryId",e)},expression:"template.laboratory.laboratoryId"}},t._l(t.laboratoryList,(function(t){return a("el-option",{key:t.laboratoryId,attrs:{label:t.name,value:t.laboratoryId}})})),1)],1),a("el-form-item",{attrs:{label:"设备状态","label-width":"90px"}},[a("el-select",{model:{value:t.template.status,callback:function(e){t.$set(t.template,"status",e)},expression:"template.status"}},t._l(t.statusOptions,(function(t){return a("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})})),1)],1),t._l(t.template.propertyList,(function(e,i){return a("el-form-item",{key:"属性"+i,attrs:{label:"属性"+i,"label-width":"90px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"属性"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"property.name"}}),a("el-input",{staticStyle:{width:"200px",margin:"0 20px"},attrs:{placeholder:"属性值"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"property.value"}}),a("el-button",{on:{click:function(e){return e.preventDefault(),t.removeProperty(i)}}},[t._v("删除")])],1)})),t._l(t.template.appendixList,(function(e,i){return a("el-form-item",{key:"附件"+i,attrs:{label:"附件"+i,"label-width":"90px"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"附件名"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"appendix.name"}}),a("el-button",{staticStyle:{margin:"0 20px"},on:{click:function(e){return e.preventDefault(),t.removeAppendix(i)}}},[t._v("删除")])],1)}))],2),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.addProperty}},[t._v("添加属性")]),a("el-button",{on:{click:t.addAppendix}},[t._v("添加附件")]),a("el-button",{on:{click:function(e){t.formDialogVisible=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("确认")])],1)],1),a("el-dialog",{attrs:{title:"填写申请单",visible:t.applyDialogVisible},on:{"update:visible":function(e){t.applyDialogVisible=e}}},[a("el-form",{attrs:{model:t.applyForm,"label-position":"left"}},[a("el-form-item",{attrs:{label:"归还时间"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp"},model:{value:t.applyForm.promiseTimestamp,callback:function(e){t.$set(t.applyForm,"promiseTimestamp",e)},expression:"applyForm.promiseTimestamp"}})],1),a("el-form-item",{attrs:{label:"申请理由"}},[a("el-input",{attrs:{autosize:{minRows:4,maxRows:8},type:"textarea"},model:{value:t.applyForm.borrowReason,callback:function(e){t.$set(t.applyForm,"borrowReason",e)},expression:"applyForm.borrowReason"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.applyDialogVisible=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.createApply()}}},[t._v("提交申请")])],1)],1)],1)},r=[],o=a("5530"),n=(a("a434"),a("aa98")),l=a("6def"),s=a("2f62"),c={getDeviceList:n["k"],countDeviceList:n["f"],addDevice:n["b"],updateDevice:n["o"],deleteDevice:n["g"],applyDevice:n["d"],getLaboratoryListByUserId:l["e"]},u={AVAILABLE:{css:"success",content:"可借用"},BORROWED:{css:"info",content:"已借出"},REPAIRING:{css:"warning",content:"维修中"},DAMAGED:{css:"danger",content:"已损坏"}},p=[{key:"AVAILABLE",value:"可借用"},{key:"BORROWED",value:"已借出"},{key:"REPAIRING",value:"维修中"},{key:"DAMAGED",value:"已损坏"}],d={data:function(){return{listLoading:!0,listQuery:{page:1,pageSize:5,name:void 0,status:void 0},totalSize:void 0,statusOptions:p,deviceList:[],formDialogVisible:!1,dialogStatus:"",dialogTitleMap:{update:"修改设备信息",create:"添加设备"},applyDialogVisible:!1,applyForm:{device:{deviceId:void 0},borrowReason:"",promiseTimestamp:""},template:{appendixList:[],deviceId:void 0,imageUrl:"",laboratory:{laboratoryId:void 0},name:"",propertyList:[],status:void 0},laboratoryList:[]}},filters:{statusFilter:function(t,e){return u[t][e]}},created:function(){this.getDeviceList(),this.getLaboratoryListByUserId()},computed:Object(o["a"])({},Object(s["b"])(["role","userId"])),methods:{getDeviceList:function(){var t=this;this.listLoading=!0,c.getDeviceList(this.listQuery).then((function(e){t.deviceList=e.data,c.countDeviceList(t.listQuery).then((function(e){t.totalSize=e.data,t.listLoading=!1}))}))},handleSizeChange:function(t){this.listQuery.pageSize=t,this.getDeviceList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getDeviceList()},getLaboratoryListByUserId:function(){var t=this;c.getLaboratoryListByUserId().then((function(e){t.laboratoryList=e.data}))},showFormDialog:function(t,e){this.template="create"===t?{appendixList:[],deviceId:void 0,imageUrl:"",laboratory:{laboratoryId:void 0},name:"",propertyList:[],status:void 0}:Object.assign({},e),this.dialogStatus=t,this.formDialogVisible=!0},handleAvatarSuccess:function(t){this.template.imageUrl=t.data},addProperty:function(){this.template.propertyList.push({name:"",value:""})},removeProperty:function(t){this.template.propertyList.splice(t,1)},addAppendix:function(){this.template.appendixList.push({name:""})},removeAppendix:function(t){this.template.appendixList.splice(t,1)},createData:function(){var t=this;c.addDevice(this.template).then((function(){t.formDialogVisible=!1,t.$notify({title:"Success",message:"添加成功",type:"success",duration:2e3}),t.getDeviceList()}))},updateData:function(){var t=this;c.updateDevice(this.template).then((function(){t.formDialogVisible=!1,t.$notify({title:"Success",message:"修改成功",type:"success",duration:2e3}),t.getDeviceList()}))},deleteData:function(t){var e=this;c.deleteDevice(t.deviceId).then((function(){e.$notify({title:"Success",message:"删除成功",type:"success",duration:2e3}),e.getDeviceList()}))},showBorrowDialog:function(t){"AVAILABLE"===t.status?(this.applyForm.device.deviceId=t.deviceId,this.applyDialogVisible=!0):this.$message.warning({message:"设备当前不可借用",duration:2e3})},createApply:function(){var t=this;this.applyForm.promiseTimestamp<=(new Date).getTime()?this.$message.error({message:"不能选择之前的时间",duration:2e3}):c.applyDevice(this.applyForm).then((function(){t.applyDialogVisible=!1,t.$notify({title:"Success",message:"添加成功",type:"success",duration:2e3}),t.applyForm={device:{deviceId:void 0},borrowReason:"",promiseTimestamp:""},t.getDeviceList()}))}}},m=d,f=(a("a042"),a("2877")),b=Object(f["a"])(m,i,r,!1,null,"3bdba932",null);e["default"]=b.exports},a042:function(t,e,a){"use strict";a("e93f")},aa98:function(t,e,a){"use strict";a.d(e,"m",(function(){return r})),a.d(e,"j",(function(){return o})),a.d(e,"k",(function(){return n})),a.d(e,"f",(function(){return l})),a.d(e,"b",(function(){return s})),a.d(e,"o",(function(){return c})),a.d(e,"g",(function(){return u})),a.d(e,"d",(function(){return p})),a.d(e,"h",(function(){return d})),a.d(e,"e",(function(){return m})),a.d(e,"n",(function(){return f})),a.d(e,"l",(function(){return b})),a.d(e,"c",(function(){return v})),a.d(e,"i",(function(){return y})),a.d(e,"a",(function(){return g}));a("b0c0");var i=a("b775");function r(){return Object(i["a"])({url:"/device/top",method:"GET"})}function o(t){return Object(i["a"])({url:"/device",method:"GET",params:{deviceId:t}})}function n(t){return Object(i["a"])({url:"/device/list",method:"GET",params:{page:t.page-1,pageSize:t.pageSize,name:t.name,status:t.status}})}function l(t){return null==t?Object(i["a"])({url:"/device/list/count",method:"GET"}):Object(i["a"])({url:"/device/list/count",method:"GET",params:{name:t.name,status:t.status}})}function s(t){return Object(i["a"])({url:"/device",method:"POST",data:t})}function c(t){return Object(i["a"])({url:"/device",method:"PUT",data:t})}function u(t){return Object(i["a"])({url:"/device",method:"DELETE",params:{deviceId:t}})}function p(t){return Object(i["a"])({url:"/device/apply",method:"POST",data:t})}function d(t){return Object(i["a"])({url:"/device/apply",method:"GET",params:{page:t.page-1,pageSize:t.pageSize,name:t.name,status:t.status}})}function m(t){return Object(i["a"])({url:"/device/apply/list",method:"GET",params:{page:t.page-1,pageSize:t.pageSize,name:t.name,status:t.status}})}function f(t){return Object(i["a"])({url:"/device/apply",method:"PUT",params:{deviceApplyId:t.deviceApplyId,status:t.status}})}function b(t){return Object(i["a"])({url:"/device/record",method:"GET",params:{deviceId:t}})}function v(t){return Object(i["a"])({url:"/device/record",method:"POST",data:t})}function y(t){return Object(i["a"])({url:"/device/comment",method:"GET",params:{deviceId:t}})}function g(t){return Object(i["a"])({url:"/device/comment",method:"POST",data:t})}},e93f:function(t,e,a){}}]);