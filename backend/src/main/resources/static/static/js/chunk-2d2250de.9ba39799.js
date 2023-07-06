(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2250de"],{e382:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"filter-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:3}},[s("el-input",{attrs:{placeholder:"用户名",clearable:""},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),s("el-col",{attrs:{span:3}},[s("el-select",{attrs:{placeholder:"身份",clearable:""},model:{value:e.listQuery.role,callback:function(t){e.$set(e.listQuery,"role",t)},expression:"listQuery.role"}},e._l(e.roleOptions,(function(e){return s("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1)],1),s("el-col",{attrs:{span:3}},[s("el-select",{attrs:{placeholder:"状态",clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,(function(e){return s("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1)],1),s("el-col",{attrs:{span:3}},[s("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getUserList}},[e._v("搜索")])],1)],1)],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.userList,border:""}},[s("el-table-column",{attrs:{label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.userId)+" ")]}}])}),s("el-table-column",{attrs:{label:"用户名"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),s("el-table-column",{attrs:{label:"邮箱"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.email)+" ")]}}])}),s("el-table-column",{attrs:{label:"身份"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?s("el-select",{model:{value:t.row.role,callback:function(s){e.$set(t.row,"role",s)},expression:"scope.row.role"}},e._l(e.roles,(function(e){return s("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1):s("span",[e._v(e._s(e._f("roleFilter")(t.row.role)))])]}}])}),s("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status,"css")}},[e._v(" "+e._s(e._f("statusFilter")(t.row.status,"content"))+" ")])]}}])}),s("el-table-column",{attrs:{label:"操作",width:"220px"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.email!==e.email?[s("el-button",{attrs:{size:"mini"},on:{click:function(s){return e.changeStatus(t.row)}}},[e._v(e._s(e._f("statusFilter")(t.row.status,"btn")))]),t.row.edit?[s("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-close",circle:""},on:{click:function(s){return e.cancelEdit(t.row)}}}),s("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-check",circle:""},on:{click:function(s){return e.confirmEdit(t.row)}}})]:s("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(e){t.row.edit=!t.row.edit}}},[e._v("修改身份")])]:void 0}}],null,!0)})],1),s("el-pagination",{staticStyle:{margin:"40px 0"},attrs:{"page-sizes":[5,10,15,20],"page-size":e.listQuery.pageSize,total:e.totalSize,background:"",layout:"sizes, prev, pager, next"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],i=(s("d81d"),s("c24f")),a={updateInfo:i["g"],getUserList:i["c"],countList:i["a"]},r={SUPER_ADMIN:"超级管理员",ADMIN:"管理员",NORMAL:"普通用户"},o=[{key:"SUPER_ADMIN",value:"超级管理员"},{key:"ADMIN",value:"管理员"},{key:"NORMAL",value:"普通用户"}],u={ENABLE:{css:"success",btn:"禁用",content:"正常"},DISABLE:{css:"info",btn:"恢复",content:"禁用中"}},c=[{key:"ENABLE",value:"正常"},{key:"DISABLE",value:"禁用中"}],d={data:function(){return{email:this.$store.getters.email,listLoading:!0,roleOptions:o,statusOptions:c,listQuery:{page:1,pageSize:10,name:void 0,role:void 0,status:void 0},totalSize:void 0,userList:[],roles:o}},filters:{roleFilter:function(e){return r[e]},statusFilter:function(e,t){return u[e][t]}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;this.listLoading=!0,""===this.listQuery.role&&(this.listQuery.role=null),""===this.listQuery.status&&(this.listQuery.status=null),a.getUserList(this.listQuery).then((function(t){e.userList=t.data;var s=e.userList;s.map((function(t){return e.$set(t,"edit",!1),t.originalRole=t.role,t}))})),a.countList(this.listQuery).then((function(t){e.totalSize=t.data})),this.listLoading=!1},changeStatus:function(e){var t=this,s="ENABLE"===e.status?"DISABLE":"ENABLE";a.updateInfo({userId:e.userId,status:s}).then((function(){t.$message({type:"success",message:"设置成功"}),t.getUserList()}))},cancelEdit:function(e){e.role=e.originalRole,e.edit=!1,this.$message({message:"取消修改",type:"warning"})},confirmEdit:function(e){var t=this;a.updateInfo({userId:e.userId,role:e.role}).then((function(){e.edit=!1,e.originalRole=e.role,t.$message({message:"修改成功",type:"success"})}))},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getUserList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getUserList()}}},p=d,f=s("2877"),y=Object(f["a"])(p,l,n,!1,null,null,null);t["default"]=y.exports}}]);