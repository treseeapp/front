(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{5819:function(a,e,t){"use strict";var s=t("d4a6"),i=t.n(s);i.a},"90d8":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("q-page",{staticClass:"row"},[s("div",{staticClass:"col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 q-pa-lg"},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h5"},[a._v("\n          Informacion del estudiante\n        ")])]),s("q-separator",{attrs:{inset:""}}),s("q-card-section",{staticClass:"row "},[s("div",{staticClass:"col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 flex-center flex"},[s("q-avatar",{attrs:{square:"",rounded:"",size:"10em"}},[s("q-img",{attrs:{src:a.estudiante.foto_perfil,"placeholder-src":t("c15d"),"spinner-color":"primary",ratio:1,alt:"Imagen de perfil de usuario hombre"}})],1)],1),s("div",{staticClass:"col-12 col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 row"},[s("div",{staticClass:"col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 "},[s("q-input",{staticClass:"q-pa-sm",attrs:{outlined:"",readonly:""},model:{value:a.estudiante.nombre,callback:function(e){a.$set(a.estudiante,"nombre",e)},expression:"estudiante.nombre"}}),s("q-input",{staticClass:"q-pa-sm",attrs:{outlined:"",readonly:""},model:{value:a.estudiante.apellidos,callback:function(e){a.$set(a.estudiante,"apellidos",e)},expression:"estudiante.apellidos"}})],1),s("div",{staticClass:"col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 column"},[s("q-input",{staticClass:"q-pa-sm",attrs:{outlined:"",readonly:""},scopedSlots:a._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"far fa-envelope"}})]},proxy:!0}]),model:{value:a.estudiante.email,callback:function(e){a.$set(a.estudiante,"email",e)},expression:"estudiante.email"}}),s("div",{staticClass:"row"},[s("q-input",{staticClass:"q-pa-sm col-6",attrs:{outlined:"",readonly:""},scopedSlots:a._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"fas fa-venus-mars"}})]},proxy:!0}]),model:{value:a.estudiante.genero,callback:function(e){a.$set(a.estudiante,"genero",e)},expression:"estudiante.genero"}}),s("q-input",{staticClass:"q-pa-sm col-6",attrs:{outlined:"",readonly:""},scopedSlots:a._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"fas fa-birthday-cake"}})]},proxy:!0}]),model:{value:a.estudiante.dataNacimiento,callback:function(e){a.$set(a.estudiante,"dataNacimiento",e)},expression:"estudiante.dataNacimiento"}})],1)],1)])]),s("q-card-section",{staticClass:"q-mt-sm row"},[s("div",{staticClass:"col-0 col-xs-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 column q-pa-lg "},[null===a.estudiante.ipFichaje?s("q-btn",{attrs:{outline:"",label:"Asignar IP"},on:{click:function(e){a.dialogIpEstudiante=!0}}}):a._e(),null!==a.estudiante.ipFichaje?s("q-input",{attrs:{dense:"",outlined:"",readonly:""},scopedSlots:a._u([{key:"append",fn:function(){return[s("q-btn",{staticClass:"cursor-pointer",attrs:{icon:"far fa-times-circle",flat:"",round:"",dense:"",color:"red-9"},on:{click:a.removeIpStudent}})]},proxy:!0}],null,!1,259271186),model:{value:a.estudiante.ipFichaje,callback:function(e){a.$set(a.estudiante,"ipFichaje",e)},expression:"estudiante.ipFichaje"}}):a._e(),s("q-btn",{staticClass:"q-mt-sm",attrs:{outline:"",color:"amber-9",label:"convertir usuario a profesor"},on:{click:function(e){a.mostrarConfirmacionConvertir=!0}}})],1),s("div",{staticClass:"col-12 col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"},[s("div",{staticClass:"text-h6 text-grey-6 q-pa-sm"},[a._v("\n            Dirección\n            "),s("q-icon",{attrs:{name:"far fa-address-card"}})],1),s("div",{staticClass:"row"},[s("q-input",{staticClass:" col-lg-9 col-md-9 col-sm-9 col-12 q-pa-sm",attrs:{outlined:"",label:"Calle",type:"text",color:"secondary",readonly:""},scopedSlots:a._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"fas fa-road"}})]},proxy:!0}]),model:{value:a.direccion.calle,callback:function(e){a.$set(a.direccion,"calle",e)},expression:"direccion.calle"}}),s("q-input",{staticClass:" col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm ",attrs:{outlined:"",label:"Número piso",type:"number",color:"secondary",readonly:""},model:{value:a.direccion.numero,callback:function(e){a.$set(a.direccion,"numero",e)},expression:"direccion.numero"}})],1),s("div",{staticClass:"q-mb-md row"},[s("q-input",{staticClass:" col-lg-3 col-md-3 col-sm-3 col-12  q-pa-sm",attrs:{outlined:"",label:"Código postal",type:"number",color:"secondary",readonly:""},model:{value:a.direccion.zip,callback:function(e){a.$set(a.direccion,"zip",e)},expression:"direccion.zip"}}),s("q-input",{staticClass:" col-lg-4 col-md-4 col-sm-4 col-12 q-pa-sm",attrs:{outlined:"",label:"Ciudad",type:"text",color:"secondary",readonly:""},scopedSlots:a._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"fas fa-city"}})]},proxy:!0}]),model:{value:a.direccion.ciudad,callback:function(e){a.$set(a.direccion,"ciudad",e)},expression:"direccion.ciudad"}}),s("q-input",{staticClass:" col-lg-5 col-md-5 col-sm-5 col-12 q-pa-sm",attrs:{outlined:"",label:"País",type:"text",color:"secondary",readonly:""},scopedSlots:a._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"fas fa-globe-americas"}})]},proxy:!0}]),model:{value:a.direccion.pais,callback:function(e){a.$set(a.direccion,"pais",e)},expression:"direccion.pais"}})],1)])])],1)],1),s("div",{staticClass:"col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 q-pa-lg"},[s("q-card",{staticStyle:{height:"80vh"}},[s("q-card-section",{staticClass:"row"},[a.$q.screen.lt.md?a._e():s("div",{staticClass:"text-h5"},[a._v("Fichajes")]),a.$q.screen.lt.md?s("div",{staticClass:"text-h6 col-sm-6 col-xs-6"},[a._v("Fichajes")]):a._e(),a.$q.screen.lt.md?s("q-card-actions",{staticClass:"col-6 ml-auto q-mb-sm",attrs:{align:"right"}},[a.calcularHorasTotales(a.allFichajes)<100?s("q-chip",[a._v(a._s(a.calcularHorasTotales(a.allFichajes))+" / 400 horas\n          ")]):a._e(),a.calcularHorasTotales(a.allFichajes)>100&&a.calcularHorasTotales(a.allFichajes)<300?s("q-chip",{attrs:{color:"amber-8","text-color":"white"}},[a._v(a._s(a.calcularHorasTotales(a.allFichajes))+" / 400 horas\n          ")]):a._e(),a.calcularHorasTotales(a.allFichajes)>300&&a.calcularHorasTotales(a.allFichajes)<400?s("q-chip",{attrs:{color:"light-blue","text-color":"white"}},[a._v(a._s(a.calcularHorasTotales(a.allFichajes))+" / 400 horas\n          ")]):a._e(),a.calcularHorasTotales(a.allFichajes)>400?s("q-chip",{attrs:{color:"green","text-color":"white"}},[a._v("\n            "+a._s(a.calcularHorasTotales(a.allFichajes))+" / 400 horas\n          ")]):a._e()],1):a._e()],1),s("q-separator",{attrs:{inset:""}}),s("q-card-section",{staticClass:" overflow-auto scrollArea",staticStyle:{height:"85%"}},[s("q-list",a._l(a.allFichajes,(function(e){return s("q-expansion-item",{attrs:{icon:"fas fa-history",label:"Dia "+e.fecha,caption:e.fichajes.length+" fichaje(s)"}},[s("q-card",{staticClass:"bg-grey-1 "},[s("q-card-section",{},[s("div",{staticClass:"row q-mb-sm"},[s("div",{staticClass:"col-3 ",attrs:{align:"right"}},[a._v("\n                    Entrada  \n                  ")]),s("div",{staticClass:"col-1"}),s("div",{staticClass:"col-3"},[a._v("\n                     Salida\n                  ")])]),a._l(e.fichajes,(function(e){return s("div",{staticClass:"row q-mt-xs q-mb-xs"},[s("div",{staticClass:"col-3 ",attrs:{align:"right"}},[a._v("\n                    "+a._s(e.entrada)+" \n                  ")]),s("div",{staticClass:"col-1",attrs:{align:"center"}},[a._v("\n                    -\n                  ")]),s("div",{staticClass:"col-3",attrs:{align:"left"}},[a._v("\n                     "+a._s(e.salida)+"\n                  ")]),s("div",{staticClass:"col-5",attrs:{align:"right"}},[a._v("\n                    "+a._s(a.diferenciaEntreHoras(e.entrada,e.salida))+" hora(s)\n                  ")])])}))],2),s("q-separator",{attrs:{inset:""}}),s("q-card-actions",{staticClass:"q-pr-md",attrs:{align:"right"}},[a._v("\n                "+a._s(a.calcularHorasTotalesDeUnDia(e.fichajes))+" hora(s) totales\n              ")])],1)],1)})),1)],1),a.$q.screen.lt.md?a._e():s("q-card-actions",{attrs:{align:"right"}},[a.calcularHorasTotales(a.allFichajes)<100?s("q-chip",[a._v(a._s(a.calcularHorasTotales(a.allFichajes))+" / 400 horas\n        ")]):a._e(),a.calcularHorasTotales(a.allFichajes)>100&&a.calcularHorasTotales(a.allFichajes)<300?s("q-chip",{attrs:{color:"amber-8","text-color":"white"}},[a._v(a._s(a.calcularHorasTotales(a.allFichajes))+" / 400 horas\n        ")]):a._e(),a.calcularHorasTotales(a.allFichajes)>300&&a.calcularHorasTotales(a.allFichajes)<400?s("q-chip",{attrs:{color:"light-blue","text-color":"white"}},[a._v(a._s(a.calcularHorasTotales(a.allFichajes))+" / 400 horas\n        ")]):a._e(),a.calcularHorasTotales(a.allFichajes)>400?s("q-chip",{attrs:{color:"green","text-color":"white"}},[a._v("\n          "+a._s(a.calcularHorasTotales(a.allFichajes))+" / 400 horas\n        ")]):a._e()],1)],1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:a.mostrarConfirmacionConvertir,callback:function(e){a.mostrarConfirmacionConvertir=e},expression:"mostrarConfirmacionConvertir"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h5"},[a._v("\n          Confirmacion de seguridad\n        ")])]),s("q-separator",{attrs:{inset:""}}),s("q-card-section",[s("p",[a._v("\n          ¿ Estas seguro de que quieres convertir este usuario a profesor ?\n        ")]),s("p",[a._v("\n          Está acción es "),s("span",{staticClass:"text-weight-bold text-red-9"},[a._v("irreversible")]),a._v(" sin la ayuda de un\n          administrador de tu base de datos. "),s("br"),a._v("\n          Para asegurarnos de que esta acción esta siendo activada a proposito,\n          y no es un error, te pedimos que nos introduzcas el email, de el usuario que estas intentando modificar\n        ")]),s("q-input",{attrs:{color:"grey","input-class":"text-secondary text-weight-bold",outlined:"",placeholder:a.estudiante.email},model:{value:a.emailToModify,callback:function(e){a.emailToModify=e},expression:"emailToModify"}}),s("p",{staticClass:"q-mt-md"},[a._v("\n          Al confirmar esta accion, estarás dando todos los permisos que tienen todos los profesores,\n          para hacer cualquier accion al usuario "),s("span",{staticClass:"text-weight-bolder"},[a._v(a._s(a.estudiante.nombre)+" "+a._s(a.estudiante.apellidos))]),a._v(".\n          Entre otras, el "),s("span",{staticClass:"text-weight-bold text-grey-8"},[a._v("añadir")]),a._v(", "),s("span",{staticClass:"text-weight-bold text-grey-8"},[a._v("modificar")]),a._v("\n          y "),s("span",{staticClass:"text-weight-bold text-grey-8"},[a._v("eliminar")]),a._v(" empresas o "),s("span",{staticClass:"text-weight-bold text-grey-8"},[a._v("ver")]),a._v("\n          toda la informacion privada de los estudiantes.\n        ")])],1),s("q-card-actions",{attrs:{align:"right"}},[a.estudiante.email!==a.emailToModify?s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Convertir",color:"secondary",outline:"",disable:""}}):a._e(),a.estudiante.email===a.emailToModify?s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Convertir",color:"secondary"},on:{click:function(e){return a.convertUser()}}}):a._e(),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"red-7"},on:{click:function(e){a.emailToModify=""}}})],1)],1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:a.dialogIpEstudiante,callback:function(e){a.dialogIpEstudiante=e},expression:"dialogIpEstudiante"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h5"},[a._v("Restriccion de IP para fichar")]),s("q-separator",{attrs:{spaced:""}}),s("div",[a._v("\n          Puedes asignar una IP, la cual representara a la red desde la cual este estudiante tendrá que estar\n          conectado para hacer los fichajes. En el caso de que no\n          tengá ninguna ip asignada, significará, que podrá fichar en cualquier red, es decir, sin restricciones.\n        ")])],1),s("q-card-section",{staticClass:"q-pt-none"},[s("q-input",{attrs:{label:"IP",placeholder:"162.138.18.45",dense:"",outlined:"",maxlength:"15","lazy-rules":"",rules:[function(a){return/^(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})$/.test(a)||"Ha de ser una ip real"}]},model:{value:a.estudiante.ipFichaje,callback:function(e){a.$set(a.estudiante,"ipFichaje",e)},expression:"estudiante.ipFichaje"}})],1),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"},on:{click:function(e){a.estudiante.ipFichaje=""}}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Asignar ip",outline:"",color:"blue-8",disable:!/^(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})$/.test(a.estudiante.ipFichaje)},on:{click:a.asignIpStudent}})],1)],1)],1)],1)},i=[],o=t("fa84"),l=t.n(o),n=t("967e"),c=t.n(n),r=(t("28a5"),t("a481"),{name:"Estudiante",data:function(){return{dialogIpEstudiante:!1,emailToModify:"",mostrarConfirmacionConvertir:!1,estudiante:{idusuario:"",nombre:"",apellidos:"",email:"",genero:null,foto_perfil:"",direccion:null,dataNacimiento:"",ipFichaje:null},direccion:{calle:"",numero:null,zip:null,ciudad:"",pais:""},allFichajes:[]}},methods:{parserDirection:function(a){if(null!=a){var e=a.split(","),t={calle:"",numero:null,zip:null,ciudad:"",pais:""};return t.calle=e[0],t.numero=parseInt(e[1]),t.zip=parseInt(e[2]),e[3]&&(t.ciudad=e[3].replace(/\s/g,"")),e[4]&&(t.pais=e[4].replace(/\s/g,"")),console.log(t),t}return{calle:"",numero:null,zip:null,ciudad:"",pais:""}},mostrarNotificacion:function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"indigo",t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"bottom-left";this.$q.notify({color:e,message:a,position:s,timeout:3e3,multiLine:t})},diferenciaEntreHoras:function(a,e){var t=a.split(":"),s=new Date;s.setHours(t[0]),s.setMinutes(t[1]),s.setSeconds(t[2]);var i=e.split(":"),o=new Date;return o.setHours(i[0]),o.setMinutes(i[1]),o.setSeconds(i[2]),Math.round(parseFloat((o-s)/1e3/3600))},calcularHorasTotalesDeUnDia:function(a){var e=this,t=0;return a.forEach((function(a){t+=e.diferenciaEntreHoras(a.entrada,a.salida)})),t},calcularHorasTotales:function(a){var e=this,t=0;return a.forEach((function(a){t+=e.calcularHorasTotalesDeUnDia(a.fichajes)})),t},convertUser:function(){var a=this;return l()(c.a.mark((function e(){var t;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$axiosJava.post("/admin/usuario/convert/profesor",{idusuario:a.estudiante.idusuario});case 2:if(t=e.sent,200!==t.status){e.next=9;break}return a.mostrarNotificacion("Usuario convertido a profesor"),e.next=7,a.$router.push("/profesor/estudiantes");case 7:e.next=10;break;case 9:a.mostrarNotificacion(t.data,"red-9");case 10:case"end":return e.stop()}}),e)})))()},asignIpStudent:function(){var a=this;return l()(c.a.mark((function e(){var t;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$axiosJava.post("/admin/estudiante/ip",{ip:a.estudiante.ipFichaje,idusuario:a.estudiante.idusuario});case 2:t=e.sent,200===t.status?a.mostrarNotificacion("Ip asignada correctamente"):a.mostrarNotificacion(t.data,"red-10");case 4:case"end":return e.stop()}}),e)})))()},removeIpStudent:function(){var a=this;return l()(c.a.mark((function e(){var t;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$axiosJava.delete("/admin/estudiante/ip",{data:{idusuario:a.estudiante.idusuario}});case 2:t=e.sent,200===t.status?a.mostrarNotificacion("Ip eliminada correctamente"):a.mostrarNotificacion(t.data,"red-10"),a.estudiante.ipFichaje=null;case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var a=this;return l()(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.$route.params.id,e.next=3,a.$axiosJava.get("/admin/estudiantes/".concat(t));case 3:s=e.sent,200===s.status?(a.estudiante.idusuario=s.data.idusuario,a.estudiante.nombre=s.data.nombre,a.estudiante.email=s.data.email,a.estudiante.apellidos=s.data.apellidos,a.estudiante.dataNacimiento=s.data.dataNacimiento,a.estudiante.genero=s.data.genero,a.estudiante.foto_perfil=s.data.fotoPerfil,a.estudiante.ipFichaje=s.data.ipFichajes,a.direccion=a.parserDirection(s.data.direccion),console.log(a.estudiante),s.data.fichajes.forEach((function(e){if(e.horaSalida){var t={fecha:null,fichajes:[]},s={entrada:null,salida:null};0!==a.allFichajes.length&&a.allFichajes[a.allFichajes.length-1].fecha===e.diaFichaje?(s.entrada=e.horaEntrada,s.salida=e.horaSalida,a.allFichajes[a.allFichajes.length-1].fichajes.push(s)):(t.fecha=e.diaFichaje,s.entrada=e.horaEntrada,s.salida=e.horaSalida,t.fichajes.push(s),a.allFichajes.push(t))}}))):a.mostrarNotificacion("No se ha podido recuperar la info del usuario con id: "+t,"red-9");case 5:case"end":return e.stop()}}),e)})))()}}),d=r,u=(t("5819"),t("2877")),p=t("9989"),m=t("f09f"),f=t("a370"),h=t("eb85"),v=t("cb32"),q=t("068f"),g=t("27f9"),x=t("0016"),b=t("9c40"),_=t("4b7e"),C=t("b047"),y=t("1c1c"),j=t("3b73"),w=t("24e8"),F=t("7f67"),k=t("eebe"),T=t.n(k),H=Object(u["a"])(d,s,i,!1,null,"772dd228",null);e["default"]=H.exports;T()(H,"components",{QPage:p["a"],QCard:m["a"],QCardSection:f["a"],QSeparator:h["a"],QAvatar:v["a"],QImg:q["a"],QInput:g["a"],QIcon:x["a"],QBtn:b["a"],QCardActions:_["a"],QChip:C["a"],QList:y["a"],QExpansionItem:j["a"],QDialog:w["a"]}),T()(H,"directives",{ClosePopup:F["a"]})},d4a6:function(a,e,t){}}]);