(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("fa84"),o=t.n(r),a=t("967e"),u=t.n(a),s=(t("a481"),t("573e"),t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("2b0e")),c=t("1f91"),i=t("42d2"),l=t("b05d"),p=t("2a19");s["a"].use(l["a"],{config:{},lang:c["a"],iconSet:i["a"],plugins:{Notify:p["a"]}});var f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},h=[],d={name:"App"},m=d,b=t("2877"),w=Object(b["a"])(m,f,h,!1,null,null,null),g=w.exports,k=t("8c4f"),P=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"7896"))}},{path:"ayuda",component:function(){return Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"8b24"))}},{path:"terminos",component:function(){return Promise.all([t.e(0),t.e(25)]).then(t.bind(null,"4b94"))}},{path:"forgot",component:function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,"6f0f"))}},{path:"change/password",component:function(){return Promise.all([t.e(0),t.e(1),t.e(23)]).then(t.bind(null,"a6cb"))},beforeEnter:function(e,n,t){var r=new URL(location),o=r.searchParams.get("tokenUserModify");sessionStorage.setItem("tokenUserModify",o),window.history.pushState({},document.title,"/change/password"),t()}},{path:"login/callback",beforeEnter:function(e,n,t){var r=new URL(location),o=r.searchParams.get("accessToken"),a=r.searchParams.get("refreshToken"),u=r.searchParams.get("rol");localStorage.setItem("accessToken",o),localStorage.setItem("refreshToken",a),localStorage.setItem("rol",u),window.history.pushState({},document.title,"/"),"PROFESOR"===u?t("/profesor/"):"ESTUDIANTE"===u&&t("/estudiante/")}}]},{path:"",component:function(){return Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"5f5f"))},children:[{path:"register",component:function(){return Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"56b4"))}}]},{path:"/",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"0217"))},children:[{path:"account",component:function(){return Promise.all([t.e(0),t.e(1),t.e(27)]).then(t.bind(null,"da01"))}}],beforeEnter:function(e,n,t){var r=localStorage.getItem("accessToken");r?t():t("/")}},{path:"/estudiante",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"0217"))},children:[{path:"",redirect:"dashboard"},{path:"dashboard",component:function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,"d08f"))}},{path:"fichajes",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"3620"))}}],beforeEnter:function(e,n,t){var r=localStorage.getItem("accessToken"),o=localStorage.getItem("rol");o||t("/"),r&&"estudiante"===o.toLowerCase()?t():t("/")}},{path:"/profesor",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"0217"))},children:[{path:"",redirect:"dashboard"},{path:"dashboard",component:function(){return Promise.all([t.e(0),t.e(1),t.e(13)]).then(t.bind(null,"de45"))}},{path:"estudiantes",component:function(){return Promise.all([t.e(0),t.e(1),t.e(16)]).then(t.bind(null,"8a6b"))}},{path:"estudiante/:id",component:function(){return Promise.all([t.e(0),t.e(1),t.e(15)]).then(t.bind(null,"90d8"))}},{path:"empresas",component:function(){return Promise.all([t.e(0),t.e(1),t.e(14)]).then(t.bind(null,"d74f"))}},{path:"empresa/:id",component:function(){return Promise.all([t.e(0),t.e(1),t.e(28)]).then(t.bind(null,"c3cd"))}}],beforeEnter:function(e,n,t){var r=localStorage.getItem("accessToken"),o=localStorage.getItem("rol");o||t("/"),r&&"profesor"===o.toLowerCase()?t():t("/")}},{path:"/DEMO",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"3038"))},children:[{path:"account",component:function(){return Promise.all([t.e(0),t.e(1),t.e(29)]).then(t.bind(null,"4618"))}},{path:"estudiante/dashboard",component:function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,"e800"))}},{path:"estudiante/fichajes",component:function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"742f"))}},{path:"profesor/dashboard",component:function(){return Promise.all([t.e(0),t.e(1),t.e(18)]).then(t.bind(null,"82b8"))}},{path:"profesor/estudiantes",component:function(){return Promise.all([t.e(0),t.e(1),t.e(20)]).then(t.bind(null,"1b3f"))}},{path:"profesor/empresas",component:function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,"79ac"))}},{path:"profesor/estudiante/:id",component:function(){return Promise.all([t.e(0),t.e(1),t.e(19)]).then(t.bind(null,"decb"))}},{path:"profesor/empresa/:id",component:function(){return Promise.all([t.e(0),t.e(1),t.e(30)]).then(t.bind(null,"8283"))}}]}];P.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(1),t.e(26)]).then(t.bind(null,"1fd4"))}});var v=P;s["a"].use(k["a"]);var x=function(){var e=new k["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:v,mode:"history",base:"/"});return e},y=function(){return S.apply(this,arguments)};function S(){return S=o()(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof x){e.next=6;break}return e.next=3,x({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=x;case 7:return n=e.t0,t={router:n,render:function(e){return e(g)}},t.el="#q-app",e.abrupt("return",{app:t,router:n});case 11:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}t("06db"),t("551c");var T=t("bc3a"),I=t.n(T),E=I.a.create({baseURL:"https://api.tresee.app"}),C=I.a.create({baseURL:"https://auth.tresee.app"}),L=function(){var e=o()(u.a.mark((function e(n){var t;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.Vue,t=n.router,E.interceptors.request.use((function(e){e.withCredentials=!0;var n=localStorage.getItem("accessToken");return e.headers.Authorization="Bearer ".concat(n),e}),(function(e){return Promise.reject(e)})),E.interceptors.response.use((function(e){return e}),function(){var e=o()(u.a.mark((function e(n){var r,o,a,s;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=n.config,401!==n.response.status){e.next=16;break}return e.next=4,C.post("/auth/refresh/token");case 4:if(o=e.sent,a=o.data.accessToken,s=o.data.refreshToken,localStorage.setItem("accessToken",a),localStorage.setItem("refreshToken",s),200!==o.status){e.next=15;break}return localStorage.setItem("accessToken",o.data.accessToken),localStorage.setItem("refreshToken",o.data.refreshToken),e.abrupt("return",E(r));case 15:t.push("/");case 16:return 403===n.response.status&&t.push("/"),e.abrupt("return",n.response);case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),C.interceptors.request.use((function(e){e.withCredentials=!0;var n=localStorage.getItem("refreshToken");return e.headers.Authorization="".concat(n),e}),(function(e){return Promise.reject(e)})),C.interceptors.response.use((function(e){return e}),function(){var e=o()(u.a.mark((function e(n){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",n.response);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();s["a"].prototype.$axiosJava=E,s["a"].prototype.$axiosNode=C;var U=t("755e"),R=function(e){var n=e.Vue;n.use(U,{load:{key:""}})},j=t("68f6"),A=function(e){var n=e.Vue;n.use(j["a"],{defaultCountryCode:null,defaultLanguage:null,defaultMode:"address",googleMapsApiKey:""})};function M(){return V.apply(this,arguments)}function V(){return V=o()(u.a.mark((function e(){var n,t,r,o,a,c,i,l;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:n=e.sent,t=n.app,r=n.router,o=!0,a=function(e){o=!1,window.location.href=e},c=window.location.href.replace(window.location.origin,""),i=[L,R,A],l=0;case 10:if(!(!0===o&&l<i.length)){e.next=28;break}if("function"===typeof i[l]){e.next=13;break}return e.abrupt("continue",25);case 13:return e.prev=13,e.next=16,i[l]({app:t,router:r,Vue:s["a"],ssrContext:null,redirect:a,urlPath:c});case 16:e.next=25;break;case 18:if(e.prev=18,e.t0=e["catch"](13),!e.t0||!e.t0.url){e.next=23;break}return window.location.href=e.t0.url,e.abrupt("return");case 23:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 25:l++,e.next=10;break;case 28:if(!1!==o){e.next=30;break}return e.abrupt("return");case 30:new s["a"](t);case 31:case"end":return e.stop()}}),e,null,[[13,18]])}))),V.apply(this,arguments)}M()},"31cd":function(e,n,t){}},[[0,4,0]]]);