(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"00406":function(a,e,t){},"51f5":function(a,e,t){"use strict";var s=t("00406"),o=t.n(s);o.a},d74f:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=this,s=e.$createElement,o=e._self._c||s;return o("q-page",[o("q-pull-to-refresh",{on:{refresh:e.cargar}},[o("div",{staticClass:"row q-pt-lg"},[o("div",{staticClass:"col-12 col-xs-12 col-md-2 col-lg-2 "}),o("div",{staticClass:"row col-12 col-xs-12 col-md-12 col-lg-8 justify-center"},[o("div",{staticClass:"col-12 flex justify-between q-pl-sm q-pr-sm q-mb-md"},[o("div",{staticClass:"flex-center flex"},[o("q-btn",{attrs:{icon:"fas fa-th",flat:"",dense:"",color:e.vistaCuadricula?"blue":"grey-8"},on:{click:function(){e.vistaCuadricula||(a.vistaCuadricula=!0,a.vistaListado=!1,a.changeLocalVista({vistaCuadricula:!0,vistaListado:!1}),a.recargarFotoEmpresas())}}}),o("q-btn",{attrs:{icon:"fas fa-bars",flat:"",dense:"",color:e.vistaListado?"blue":"grey-8"},on:{click:function(){e.vistaListado||(a.vistaCuadricula=!1,a.vistaListado=!0,a.changeLocalVista({vistaCuadricula:!1,vistaListado:!0}),a.recargarFotoEmpresas())}}})],1),o("div",{staticClass:"flex"},[o("q-btn",{staticClass:"q-mr-md",attrs:{icon:"add",color:"blue",label:e.$q.screen.gt.sm?"Crear empresa":""},on:{click:function(a){e.addCompanyPopUp=!0}}}),o("q-input",{attrs:{color:"blue",dense:"",outlined:"",label:"Buscar empresa"},on:{input:e.filtrarCompanys},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search",color:"blue"}})]},proxy:!0}]),model:{value:e.busquedaEmpresa,callback:function(a){e.busquedaEmpresa=a},expression:"busquedaEmpresa"}})],1)]),0===e.listadoEmpresas.length&&e.empresasCargadas?o("div",{staticClass:"fixed-center text-center"},[o("p",[o("img",{staticStyle:{width:"30vw","max-width":"150px"},attrs:{src:t("c4e4")}})]),o("p",{staticClass:"text-faded"},[e._v("\n            No hay ninguna empresa creada.\n          ")])]):e._e(),e.empresasCargadas?e._e():o("div",{class:e.$q.screen.gt.md?"col-12 flex justify-between":"flex flex-center"},e._l(9,(function(a){return o("q-card",{key:a,class:e.$q.screen.gt.md?"lg-card-item q-ma-sm":"md-card-item q-ma-sm"},[o("q-skeleton",{attrs:{height:"150px",square:""}}),o("q-card-section",[o("q-skeleton",{staticClass:"absolute ",staticStyle:{top:"0",right:"12px",transform:"translateY(-50%)"},attrs:{type:"circle"}}),o("div",{staticClass:"text-h6 q-mt-xs"},[o("q-skeleton",{attrs:{type:"text"}})],1)],1),o("q-card-section",{staticClass:"row"},[o("div",{staticClass:"col-6 flex"}),o("div",{staticClass:"col-6 flex   content-center justify-end "},[o("q-skeleton",{staticStyle:{"flex-basis":"70%"},attrs:{type:"text"}})],1)]),o("q-card-actions",{staticClass:"justify-end no-wrap"},[o("q-skeleton",{attrs:{type:"QBtn"}})],1)],1)})),1),0!==e.listadoEmpresas.length&&0!==e.listadoEmpresasFiltradas.length&&!0===e.vistaListado?o("div",{staticClass:"row q-mt-sm q-pa-sm col-12"},[o("q-list",{staticClass:"rounded-borders col-12 ",attrs:{bordered:""}},[o("q-item-label",{attrs:{header:""}},[e._v("Empresas")]),e._l(e.listadoEmpresasFiltradas,(function(a){return o("q-item",{key:a.idusuario},[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",[o("q-img",{attrs:{src:a.fotoEmpresa,"placeholder-src":t("5417"),"spinner-color":"primary",ratio:"1",alt:"Imagen empresa"}})],1)],1),o("q-item-section",[o("q-item-label",{staticClass:"text-weight-bold"},[e._v("\n                  "+e._s(a.nombre)+"\n                ")])],1),e.$q.screen.gt.sm?o("q-item-section",[o("q-item-label",{staticClass:"justify-end flex"},[o("span",{staticClass:" text-grey-7"},[e._v(e._s(a.contacto))])])],1):e._e(),o("q-item-section",{attrs:{top:"",side:""}},[o("div",{staticClass:"text-grey-8 q-gutter-xs"},[o("q-btn",{attrs:{flat:"",size:"13px",color:"primary",icon:"fas fa-plus",dense:"",round:"",to:"empresa/"+a.idempresa}})],1)])],1)}))],2)],1):e._e(),0===e.listadoEmpresas.length&&0===e.listadoEmpresasFiltradas.length||!0!==e.vistaCuadricula?e._e():o("div",{class:e.$q.screen.gt.md?"flex justify-between":"flex flex-center"},e._l(e.listadoEmpresasFiltradas,(function(a){return o("q-card",{key:a.idempresa,class:e.$q.screen.gt.md?"lg-card-item q-ma-sm":"md-card-item q-ma-sm"},[o("q-img",{attrs:{src:a.fotoEmpresa,"placeholder-src":t("5417"),"spinner-color":"primary",ratio:16/9}}),o("q-card-section",[o("div",{class:e.$q.screen.gt.sm?"text-h6":"text-body2 text-bold"},[e._v(e._s(a.nombre))]),o("div",{staticClass:"text-grey-7"},[e._v(e._s(a.contacto))])]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{flat:"",label:" mas info",color:"secondary",to:"empresa/"+a.idempresa}})],1)],1)})),1)])])]),o("q-dialog",{ref:"popUpNewCompany",attrs:{persistent:""},on:{hide:e.clearNewCompany},model:{value:e.addCompanyPopUp,callback:function(a){e.addCompanyPopUp=a},expression:"addCompanyPopUp"}},[o("q-card",{staticStyle:{"min-width":"350px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[e._v("Nueva empresa")]),o("div",{staticClass:"text-subtitle2 text-grey-7"},[e._v("Los campos con un * son campos requeridos y han de estar rellenados\n          para poder crear una nueva empresa.\n        ")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",{staticClass:"q-pt-md"},[o("div",{staticClass:"row"},[o("q-input",{staticClass:"col-6 q-pa-xs",attrs:{color:"secondary",dense:"",outlined:"",label:"Nombre *","lazy-rules":"",rules:[function(a){return a&&""!==a||"Nombre requerido"}]},on:{input:e.comprobarCampos},model:{value:e.newCompany.nombre,callback:function(a){e.$set(e.newCompany,"nombre",a)},expression:"newCompany.nombre"}}),o("q-input",{staticClass:"col-6 q-pa-xs",attrs:{dense:"",outlined:"",color:"secondary",label:"Fecha inicio practicas",mask:"date"},on:{input:e.comprobarCampos,click:function(){return e.$refs.qDateProxy.show()}},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[o("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[o("q-date",{attrs:{color:"accent"},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.newCompany.fechaInicioPracticas,callback:function(a){e.$set(e.newCompany,"fechaInicioPracticas",a)},expression:"newCompany.fechaInicioPracticas"}})],1)],1)]},proxy:!0}]),model:{value:e.newCompany.fechaInicioPracticas,callback:function(a){e.$set(e.newCompany,"fechaInicioPracticas",a)},expression:"newCompany.fechaInicioPracticas"}})],1),o("div",{staticClass:"row q-mt-lg"},[o("q-input",{staticClass:"q-pa-xs col-12",attrs:{dense:"",outlined:"",label:"Email de contacto *",color:"secondary","lazy-rules":"",rules:[function(a){return a&&""!==a||"Email requerido"}]},on:{input:e.comprobarCampos},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"far fa-envelope"}})]},proxy:!0}]),model:{value:e.newCompany.contacto,callback:function(a){e.$set(e.newCompany,"contacto",a)},expression:"newCompany.contacto"}})],1),o("div",{staticClass:"row q-mt-lg"},[o("q-input",{staticClass:" col-lg-9 col-md-9 col-sm-9 col-12 q-pa-sm",attrs:{dense:"",outlined:"",label:"Calle *",type:"text",color:"secondary","lazy-rules":"",rules:[function(a){return a&&""!==a||"Requerido"}]},on:{input:e.comprobarCampos},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"fas fa-road"}})]},proxy:!0}]),model:{value:e.direccionNewCompany.calle,callback:function(a){e.$set(e.direccionNewCompany,"calle",a)},expression:"direccionNewCompany.calle"}}),o("q-input",{staticClass:" col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm ",attrs:{dense:"",outlined:"",label:"Número *",type:"number",color:"secondary","lazy-rules":"",rules:[function(a){return a&&""!==a||"Requerido"}]},on:{input:e.comprobarCampos},model:{value:e.direccionNewCompany.numero,callback:function(a){e.$set(e.direccionNewCompany,"numero",a)},expression:"direccionNewCompany.numero"}})],1),o("div",{staticClass:"row q-mt-md"},[o("q-input",{staticClass:" col-lg-3 col-md-3 col-sm-3 col-12  q-pa-sm",attrs:{dense:"",outlined:"",label:"Código postal *",type:"number",color:"secondary","lazy-rules":"",rules:[function(a){return a&&""!==a||"Requerido"}]},on:{input:e.comprobarCampos},model:{value:e.direccionNewCompany.zip,callback:function(a){e.$set(e.direccionNewCompany,"zip",a)},expression:"direccionNewCompany.zip"}}),o("q-input",{staticClass:" col-lg-5 col-md-5 col-sm-5 col-12 q-pa-sm",attrs:{dense:"",outlined:"",label:"Ciudad *",type:"text",color:"secondary","lazy-rules":"",rules:[function(a){return a&&""!==a||"Requerido"}]},on:{input:e.comprobarCampos},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"fas fa-city"}})]},proxy:!0}]),model:{value:e.direccionNewCompany.ciudad,callback:function(a){e.$set(e.direccionNewCompany,"ciudad",a)},expression:"direccionNewCompany.ciudad"}}),o("q-input",{staticClass:" col-lg-4 col-md-4 col-sm-4 col-12 q-pa-sm",attrs:{dense:"",outlined:"",label:"País *",type:"text",color:"secondary","lazy-rules":"",rules:[function(a){return a&&""!==a||"Requerido"}]},on:{input:e.comprobarCampos},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"fas fa-globe-americas"}})]},proxy:!0}]),model:{value:e.direccionNewCompany.pais,callback:function(a){e.$set(e.direccionNewCompany,"pais",a)},expression:"direccionNewCompany.pais"}})],1)]),o("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"red-9"}}),!0===e.completeValues?o("q-btn",{attrs:{outline:"",label:"Añadir empresa",color:"secondary"},on:{click:e.saveNewCompany}}):e._e(),!1===e.completeValues?o("q-btn",{attrs:{disable:"",outline:"",label:"Añadir empresa",color:"secondary"},on:{click:e.saveNewCompany}}):e._e()],1)],1)],1)],1)},o=[],n=t("fa84"),r=t.n(n),i=(t("6d67"),t("d25f"),t("2fdb"),t("6762"),t("a481"),t("28a5"),t("967e")),c=t.n(i),l={name:"Empresas",created:function(){var a=this;return r()(c.a.mark((function e(){var t;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.getItem("vistaEmpresas")?(t=JSON.parse(localStorage.getItem("vistaEmpresas")),a.vistaCuadricula=t.vistaCuadricula,a.vistaListado=t.vistaListado):(localStorage.setItem("vistaEmpresas",JSON.stringify({vistaCuadricula:!0,vistaListado:!1})),a.vistaCuadricula=!0),e.next=3,a.cargar();case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{vistaCuadricula:!1,vistaListado:!1,busquedaEmpresa:"",empresasCargadas:!1,listadoEmpresas:[],listadoEmpresasFiltradas:[],addCompanyPopUp:!1,newCompany:{nombre:"",contacto:"",fechaInicioPracticas:null,direccion:null,fotoEmpresa:""},direccionNewCompany:{calle:"",numero:null,zip:null,ciudad:"",pais:""},completeValues:!1}},methods:{ordenarEmpresas:function(a){return a.sort((function(a,e){return a.nombre[0].toLowerCase()<e.nombre[0].toLowerCase()?-1:a.nombre[0].toLowerCase()>e.nombre[0].toLowerCase()?1:0}))},recargarFotoEmpresas:function(){var a=this;return r()(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.listadoEmpresas.map((function(e){a.$axiosJava.get("/admin/empresas/".concat(e.idempresa,"/foto")).then((function(a){200===a.status&&(e.fotoEmpresa=a.data)}))}));case 1:case"end":return e.stop()}}),e)})))()},changeLocalVista:function(a){localStorage.setItem("vistaEmpresas",JSON.stringify(a))},filtrarCompanys:function(a){a=a.toLowerCase(),this.listadoEmpresasFiltradas=this.listadoEmpresas.filter((function(e){return e.nombre.toLowerCase().includes(a)||e.contacto.toLowerCase().includes(a)}))},cargar:function(){var a=arguments,e=this;return r()(c.a.mark((function t(){var s,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a.length>0&&void 0!==a[0]?a[0]:function(){return console.log("no has pasado cb")},e.empresasCargadas=!1,t.next=4,e.$axiosJava.get("/admin/empresas");case 4:o=t.sent,200!==o.status?e.mostrarNotificacion("Ha habido un error al cargar el listado de empresas","red-10"):(e.listadoEmpresas=e.ordenarEmpresas(o.data),e.listadoEmpresasFiltradas=e.listadoEmpresas,e.empresasCargadas=!0,s());case 6:case"end":return t.stop()}}),t)})))()},saveNewCompany:function(){var a=this;return r()(c.a.mark((function e(){var t;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.newCompany.direccion=a.direccionNewCompany.calle+", "+a.direccionNewCompany.numero+", "+a.direccionNewCompany.zip+", "+a.direccionNewCompany.ciudad+", "+a.direccionNewCompany.pais,e.next=3,a.$axiosJava.post("/admin/empresas",a.newCompany);case 3:t=e.sent,200===t.status?(a.mostrarNotificacion("Empresa creada correctamente","green"),a.cargar(),a.clearNewCompany()):a.mostrarNotificacion("Ha habido un error.","red-9"),a.$refs.popUpNewCompany.hide();case 6:case"end":return e.stop()}}),e)})))()},parserDirection:function(a){a=a.replace(/\s/g,"");var e=a.split(","),t={calle:"",numero:null,zip:null,ciudad:"",pais:""};return t.calle=e[0],t.numero=parseInt(e[1]),t.zip=parseInt(e[2]),e[3]&&(t.ciudad=e[3]),e[4]&&(t.pais=e[4]),t},mostrarNotificacion:function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:indigo;this.$q.notify({color:e,message:a,position:"top-right",timeout:5e3})},clearNewCompany:function(){this.newCompany.nombre="",this.newCompany.direccion=null,this.newCompany.fechaInicioPracticas=null,this.newCompany.contacto="",this.direccionNewCompany={calle:"",numero:null,zip:null,ciudad:"",pais:""},this.completeValues=!1},comprobarCampos:function(){""!==this.newCompany.nombre&&""!==this.newCompany.contacto&&null!=this.newCompany.fechaInicioPracticas&&""!==this.direccionNewCompany.calle&&null!==this.direccionNewCompany.numero&&null!==this.direccionNewCompany.zip&&""!==this.direccionNewCompany.ciudad&&""!==this.direccionNewCompany.pais?this.completeValues=!0:this.completeValues=!1}}},p=l,d=(t("51f5"),t("2877")),m=t("9989"),u=t("59d7"),f=t("9c40"),C=t("27f9"),y=t("0016"),q=t("f09f"),v=t("293e"),w=t("a370"),b=t("4b7e"),h=t("1c1c"),g=t("0170"),x=t("66e5"),N=t("4074"),k=t("cb32"),E=t("068f"),_=t("24e8"),L=t("eb85"),$=t("7cbe"),P=t("52ee"),I=t("7f67"),S=t("eebe"),Q=t.n(S),z=Object(d["a"])(p,s,o,!1,null,"02cd3f66",null);e["default"]=z.exports;Q()(z,"components",{QPage:m["a"],QPullToRefresh:u["a"],QBtn:f["a"],QInput:C["a"],QIcon:y["a"],QCard:q["a"],QSkeleton:v["a"],QCardSection:w["a"],QCardActions:b["a"],QList:h["a"],QItemLabel:g["a"],QItem:x["a"],QItemSection:N["a"],QAvatar:k["a"],QImg:E["a"],QDialog:_["a"],QSeparator:L["a"],QPopupProxy:$["a"],QDate:P["a"]}),Q()(z,"directives",{ClosePopup:I["a"]})}}]);