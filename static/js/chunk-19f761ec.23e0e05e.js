(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19f761ec"],{"9ed6":function(e,o,t){"use strict";t.r(o);var s=function(){var e=this,o=e._self._c;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("宿舍管理系统")])]),e._v(" "),o("el-form-item",{attrs:{prop:"account"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),o("el-input",{ref:"account",attrs:{placeholder:"学号/职工号",name:"account",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.account,callback:function(o){e.$set(e.loginForm,"account",o)},expression:"loginForm.account"}})],1),e._v(" "),o("el-tooltip",{attrs:{content:"大写锁定键已开启",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(o){e.capsTooltip=o},expression:"capsTooltip"}},[o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(o){e.capsTooltip=!1}},nativeOn:{keyup:[function(o){return e.checkCapslock.apply(null,arguments)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleLogin.apply(null,arguments)}]},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),e._v(" "),e.registerMode?o("el-form-item",{attrs:{prop:"repassword"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),o("el-input",{ref:"repassword",attrs:{placeholder:"确认密码",name:"repassword",type:"password",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.repassword,callback:function(o){e.$set(e.loginForm,"repassword",o)},expression:"loginForm.repassword"}})],1):e._e(),e._v(" "),o("div",{staticStyle:{display:"flex","justify-content":"center"}},[e.registerMode?e._e():o("el-button",{attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(o){return o.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e._v("登录")])],1)],1)],1)},r=[],n=(t("ac6a"),t("456d"),{name:"Login",data:function(){var e=this,o=function(e,o,t){o.length<6?t(new Error("密码需要6位以上")):t()},t=function(o,t,s){t!==e.loginForm.password&&e.registerMode?s(new Error("两次密码不符合")):s()};return{loginForm:{account:"",password:"",repassword:""},loginRules:{account:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:o}],repassword:[{validator:t,trigger:"blur"}]},passwordType:"password",registerMode:!1,capsTooltip:!1,loading:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var o=e.query;o&&(this.redirect=o.redirect,this.otherQuery=this.getOtherQuery(o))},immediate:!0}},mounted:function(){""===this.loginForm.account?this.$refs.account.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{checkCapslock:function(e){var o=e.key;this.capsTooltip=o&&1===o.length&&o>="A"&&o<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(o){if(!o)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(o,t){return"redirect"!==t&&(o[t]=e[t]),o}),{})}}}),a=n,i=(t("f07e"),t("b688"),t("2877")),c=Object(i["a"])(a,s,r,!1,null,"0ee69368",null);o["default"]=c.exports},b688:function(e,o,t){"use strict";t("e0cf")},bb77:function(e,o,t){},e0cf:function(e,o,t){},f07e:function(e,o,t){"use strict";t("bb77")}}]);