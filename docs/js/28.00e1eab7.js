(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{c3cd:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("q-page",{staticClass:"row q-pa-lg"},[r("div",{staticClass:"col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12 q-pa-sm"},[r("q-card",{staticClass:"q-pa-sm"},[r("q-card-section",{staticClass:"flex"},[r("div",{staticClass:"text-h5"},[e._v("Información de la empresa")]),r("q-space"),r("q-icon",{staticClass:"cursor-pointer",staticStyle:{"font-size":"2em"},attrs:{name:"info",color:"secondary"}},[r("q-tooltip",{attrs:{"content-class":"bg-purple","content-style":"font-size: 13px",offset:[10,10]}},[e._v("\n            Aquí puede ver toda la información referente a la emrpesa.\n          ")])],1)],1),r("q-separator"),r("q-card-section",[r("div",{staticClass:"text-h6 text-grey-6 q-ml-md"},[e._v("Informacion")]),r("div",{staticClass:"row wrap justify-center"},[r("div",{staticClass:"q-mt-lg column col-lg-6 col-md-6 col-sm-10 col-xs-12"},[r("q-input",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-xs-3 q-pa-sm",attrs:{readonly:!e.editarEmpresa,outlined:"",label:"Nombre empresa",type:"text",color:"secondary"},model:{value:e.empresa.nombre,callback:function(a){e.$set(e.empresa,"nombre",a)},expression:"empresa.nombre"}}),r("q-input",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-xs-3 q-pa-sm q-mt-lg",attrs:{readonly:!e.editarEmpresa,outlined:"",label:"Contacto",type:"text",color:"secondary"},model:{value:e.empresa.contacto,callback:function(a){e.$set(e.empresa,"contacto",a)},expression:"empresa.contacto"}}),r("q-input",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-xs-3 q-pa-sm q-mt-lg",attrs:{readonly:!e.editarEmpresa,outlined:"",label:"Fecha inicio prácticas",mask:"date",color:"secondary"},on:{click:function(){return e.$refs.qDateProxy.show()}},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[r("q-popup-proxy",{ref:"qDateProxy"},[r("q-date",{attrs:{readonly:!e.editarEmpresa,color:"accent","first-day-of-week":"1"},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.empresa.fechaInicioPracticas,callback:function(a){e.$set(e.empresa,"fechaInicioPracticas",a)},expression:"empresa.fechaInicioPracticas"}})],1)],1)]},proxy:!0}]),model:{value:e.empresa.fechaInicioPracticas,callback:function(a){e.$set(e.empresa,"fechaInicioPracticas",a)},expression:"empresa.fechaInicioPracticas"}},[r("q-tooltip",{attrs:{anchor:"bottom right",self:"bottom right",offset:[-10,35],"content-class":"bg-accent","content-style":"font-size: 12px"}},[e._v("\n                Pulsa el icono\n                "),r("q-icon",{attrs:{name:"fas fa-level-up-alt"}})],1)],1)],1),r("q-card",{staticClass:"column content-center q-ma-sm q-ml-auto q-mr-auto",staticStyle:{width:"250px"}},[r("q-card-section",{staticClass:"q-ml-autoflex flex-center"},[r("div",{staticClass:"text-h6 text-grey-6 text-center"},[e._v("Fotografia")])]),r("q-card-section",{staticClass:"flex flex-center",staticStyle:{width:"250px"}},[r("q-img",{attrs:{src:e.empresa.fotoEmpresa,"placeholder-src":t("5417"),"spinner-color":"primary",ratio:16/9}}),r("q-btn",{staticClass:"q-mt-md",attrs:{flat:"",color:"secondary",label:"Cambiar foto",icon:"far fa-edit"},on:{click:function(a){e.upload=!0}}})],1)],1)],1)]),r("q-card-section",{staticClass:"q-mt-md"},[r("div",{staticClass:"text-h6 text-grey-6 q-ml-md"},[e._v("Dirección")]),r("div",{staticClass:"row q-mt-md"},[r("q-input",{staticClass:"col-lg-8 col-md-7 col-sm-7 col-12 q-pa-sm",attrs:{readonly:!e.editarEmpresa,outlined:"",label:"Calle",type:"text",color:"secondary"},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"fas fa-road"}})]},proxy:!0}]),model:{value:e.direccion.calle,callback:function(a){e.$set(e.direccion,"calle",a)},expression:"direccion.calle"}}),r("q-input",{staticClass:" col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm q-ml-auto q-mr-auto",attrs:{readonly:!e.editarEmpresa,outlined:"",label:"Número piso",type:"number",color:"secondary"},model:{value:e.direccion.numero,callback:function(a){e.$set(e.direccion,"numero",a)},expression:"direccion.numero"}})],1),r("div",{staticClass:"row"},[r("q-input",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm",attrs:{readonly:!e.editarEmpresa,outlined:"",label:"Código postal",type:"number",color:"secondary"},model:{value:e.direccion.zip,callback:function(a){e.$set(e.direccion,"zip",a)},expression:"direccion.zip"}}),r("q-input",{staticClass:"col-lg-5 col-md-4 col-sm-4 col-12 q-pa-sm",attrs:{readonly:!e.editarEmpresa,outlined:"",label:"Ciudad",type:"text",color:"secondary"},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"fas fa-city"}})]},proxy:!0}]),model:{value:e.direccion.ciudad,callback:function(a){e.$set(e.direccion,"ciudad",a)},expression:"direccion.ciudad"}}),r("q-input",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm q-ml-auto q-mr-auto",attrs:{readonly:!e.editarEmpresa,outlined:"",label:"País",type:"text",color:"secondary"},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"fas fa-globe-americas"}})]},proxy:!0}]),model:{value:e.direccion.pais,callback:function(a){e.$set(e.direccion,"pais",a)},expression:"direccion.pais"}})],1)]),r("q-card-actions",[r("div",{staticClass:"row full-width q-pl-lg q-pr-lg q-mb-lg q-mt-md justify-center"},[e.editarEmpresa?e._e():r("q-btn",{staticClass:"q-mb-md q-pt-xs q-pb-xs col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ml-lg q-mr-lg",attrs:{label:"Modificar",color:"secondary",cladense:""},on:{click:function(a){e.editarEmpresa=!0}}}),e.editarEmpresa?e._e():r("q-btn",{staticClass:"q-mb-md q-pt-xs q-pb-xs col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ml-lg q-mr-lg",attrs:{label:"Eliminar",color:"negative",outline:""},on:{click:function(a){e.eliminarEmpresa=!0}}}),e.editarEmpresa?r("q-btn",{staticClass:"q-mb-md q-pt-xs q-pb-xs col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ml-lg q-mr-lg",attrs:{label:"Guardar",color:"green",cladense:""},on:{click:e.guardarInformacionEmpresa}}):e._e(),e.editarEmpresa?r("q-btn",{staticClass:"q-mb-md q-pt-xs q-pb-xs col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ml-lg q-mr-lg",attrs:{label:"Cancelar",color:"negative",flat:""},on:{click:e.cancelEdit}}):e._e()],1)])],1),r("q-card",{staticClass:"q-mt-lg q-pa-sm"},[r("q-card-section",{staticClass:"flex items-center"},[r("div",{staticClass:"text-h5"},[e._v("Horario de la empresa")]),r("q-space"),r("q-btn",{staticClass:"q-mr-md",attrs:{dense:"",color:"green",outline:"","icon-right":"far fa-plus-square","no-caps":"",label:"Añadir horario"},on:{click:function(a){e.anadirHorario=!0}}}),r("q-icon",{staticClass:"cursor-pointer",staticStyle:{"font-size":"2em"},attrs:{name:"info",color:"secondary"}},[r("q-tooltip",{attrs:{"content-class":"bg-purple text-justify","content-style":"font-size: 11px",offset:[10,10]}},[e._v("\n            Para modificar un horario, selecciona el dia que quieres modificar, "),r("br"),e._v("\n            y despues haz click en la hora, modificala y pulsa enter para guardar los cambios\n          ")])],1)],1),r("q-card-section",[r("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:e.tabHorario,callback:function(a){e.tabHorario=a},expression:"tabHorario"}},e._l(e.empresa.horarios,(function(e){return r("q-tab",{attrs:{name:e.dia.dia,label:e.dia.dia}})})),1),r("q-separator"),r("q-tab-panels",{attrs:{animated:""},model:{value:e.tabHorario,callback:function(a){e.tabHorario=a},expression:"tabHorario"}},e._l(e.empresa.horarios,(function(a){return r("q-tab-panel",{attrs:{name:a.dia.dia}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-4 flex justify-end"},[e._v("\n                Entrada\n              ")]),r("div",{staticClass:"col-1"}),r("div",{staticClass:"col-4 flex"},[e._v("\n                Salida\n              ")])]),r("div",{staticClass:"row "},[r("div",{staticClass:"text-h6 flex justify-end text-weight-regular cursor-pointer col-4"},[e._v("\n                "+e._s(e._f("filtroQuitarSegundoHoras")(a.horaEntrada))+"\n                "),r("q-popup-edit",{model:{value:a.horaEntrada,callback:function(t){e.$set(a,"horaEntrada",t)},expression:"horario.horaEntrada"}},[r("q-input",{attrs:{outlined:"",color:"secondary",dense:"",autofocus:"",maxlength:"5",mask:"##:##",rules:[function(e){return/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e)||"Ha de ser una hora real"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveCahngesHorario(a)}},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-question-circle",color:"accent"}},[r("q-tooltip",[e._v("\n                          Para guardar, pulsa enter\n                        ")])],1)]},proxy:!0}],null,!0),model:{value:a.horaEntrada,callback:function(t){e.$set(a,"horaEntrada",t)},expression:"horario.horaEntrada"}})],1)],1),r("div",{staticClass:"text-h6 text-weight-regular col-1 flex flex-center"},[e._v("-")]),r("div",{staticClass:"text-h6 text-weight-regular cursor-pointer col-4 flex"},[e._v("\n                "+e._s(e._f("filtroQuitarSegundoHoras")(a.horaSalida))+"\n                "),r("q-popup-edit",{model:{value:a.horaSalida,callback:function(t){e.$set(a,"horaSalida",t)},expression:"horario.horaSalida"}},[r("q-input",{attrs:{outlined:"",color:"secondary",dense:"",autofocus:"",maxlength:"5",mask:"##:##",rules:[function(e){return/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e)||"Ha de ser una hora real"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveCahngesHorario(a)}},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-question-circle",color:"accent"}},[r("q-tooltip",[e._v("\n                          Para guardar, pulsa enter\n                        ")])],1)]},proxy:!0}],null,!0),model:{value:a.horaSalida,callback:function(t){e.$set(a,"horaSalida",t)},expression:"horario.horaSalida"}})],1)],1),r("q-space"),r("q-btn",{attrs:{flat:"",rounded:"",icon:"fas fa-times","text-color":"red-9",label:"Eliminar horario"},on:{click:function(t){return e.borrarHorario(a)}}})],1)])})),1)],1)],1)],1),r("q-dialog",{model:{value:e.anadirHorario,callback:function(a){e.anadirHorario=a},expression:"anadirHorario"}},[r("q-stepper",{style:e.$q.screen.lt.md?"width: 100vw; max-width: 100vw":"width: 20vw; max-width: 20vw",attrs:{vertical:"",color:"primary",animated:""},model:{value:e.createHorarioStep,callback:function(a){e.createHorarioStep=a},expression:"createHorarioStep"}},[r("q-step",{staticClass:"flex column wrap",attrs:{name:1,title:"Seleccionar día",icon:"settings",done:e.createHorarioStep>1}},[0===e.allPosibleDias.length?r("div",{staticClass:"text-h6"},[e._v("Todos los dias posibles ya tienen horario")]):e._e(),e._l(e.allPosibleDias,(function(a){return e.allPosibleDias.length>0?r("q-chip",{attrs:{clickable:"","text-color":"white",color:"blue-7"},on:{click:function(t){return e.seleccionarDiaNewHorario(a)}}},[e._v(e._s(a.dia)+"\n        ")]):e._e()}))],2),r("q-step",{attrs:{name:2,title:"Seleccionar hora de entrada a la empresa",icon:"far fa-id-badge",done:e.createHorarioStep>2}},[r("q-input",{staticStyle:{"max-width":"130px"},attrs:{autofocus:"",maxlength:"5",mask:"##:##",dense:"",label:"Hora entrada",outlined:"",hint:"Solo numeros",rules:[function(e){return/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e)||"Ha de ser una hora real"}]},model:{value:e.newHorario.horaEntrada,callback:function(a){e.$set(e.newHorario,"horaEntrada",a)},expression:"newHorario.horaEntrada"}}),r("q-stepper-navigation",[/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e.newHorario.horaEntrada)?e._e():r("q-btn",{attrs:{color:"secondary",label:"Continue",disable:""},on:{click:function(a){e.createHorarioStep=3}}}),/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e.newHorario.horaEntrada)?r("q-btn",{attrs:{color:"secondary",label:"Continue"},on:{click:function(a){e.createHorarioStep=3}}}):e._e(),r("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(a){e.createHorarioStep=1}}})],1)],1),r("q-step",{attrs:{name:3,title:"Seleccionar hora de salida de la empresa",icon:"far fa-id-badge"}},[r("q-input",{staticStyle:{"max-width":"130px"},attrs:{autofocus:"",maxlength:"5",mask:"##:##",dense:"",label:"Hora salida",outlined:"",hint:"Solo numeros",rules:[function(e){return/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e)||"Ha de ser una hora real"}]},model:{value:e.newHorario.horaSalida,callback:function(a){e.$set(e.newHorario,"horaSalida",a)},expression:"newHorario.horaSalida"}}),r("q-stepper-navigation",[/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e.newHorario.horaSalida)?e._e():r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"green",label:"Finish",outline:"",disable:""}}),/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e.newHorario.horaSalida)?r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"green",label:"Finish",outline:""},on:{click:e.saveNewHorario}}):e._e(),r("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(a){e.createHorarioStep=2}}})],1)],1)],1)],1),r("div",{staticClass:"col-lg-4 col-md-12 col-sm-12 col-xs-12 q-pr-md q-pl-md column"},[r("q-card",{staticClass:"column content-center q-ma-sm q-mb-lg"},[r("div",{staticClass:"column full-width full-height",attrs:{id:"mapa"}},[r("gmap-map",{staticStyle:{width:"100%",height:"350px"},attrs:{center:e.center,zoom:e.zoom}},[!0===e.precisionMaps?r("gmap-circle",{attrs:{radius:3e3,visible:!0,options:{strokeColor:"black",strokeWeight:1,strokeOpacity:.8,fillColor:"blue",fillOpacity:.1},position:e.marker,center:e.marker}}):e._e(),r("gmap-marker",{attrs:{icon:e.icon,position:e.marker}})],1)],1)]),r("div",{staticClass:"q-pl-sm q-pr-sm"},[r("q-card",[r("q-card-section",[r("div",{staticClass:"text-h5 flex flex-center"},[e._v("Estudiantes vinculados")])]),r("q-separator",{attrs:{inset:""}}),r("q-card-section",[r("q-list",[0===e.empresa.estudiantes.length?r("q-item",[r("q-item-section",{staticClass:"flex flex-center"},[e._v("No hay ningun estudiante vinculado")])],1):e._e(),e._l(e.empresa.estudiantes,(function(a){return r("q-item",{attrs:{"right-color":"red"},on:{right:function(e){}}},[r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",[r("q-img",{attrs:{src:a.fotoPerfil,"placeholder-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr1v58ICPpgv8t4zeWFfmJqBre8Xedi8agxMpKEHR-G5L06sic",ratio:1,"spinner-color":"primary"}})],1)],1),r("q-item-section",[e._v("\n                "+e._s(a.nombre)+" "+e._s(a.apellidos)+"\n              ")]),r("q-item-section",{attrs:{align:"right"}},[r("q-btn",{attrs:{flat:"",round:"",icon:"fas fa-times","text-color":"red-9"},on:{click:function(t){return e.desvincularEstudiante(a.idusuario)}}})],1)],1)}))],2)],1),r("q-card-actions",{staticClass:"row full-width q-mt-lg"},[r("div",{staticClass:"col-12 text-center"},[r("q-select",{staticClass:"col-12 text-center q-ml-xs q-mr-sm",attrs:{outlined:"","use-input":"","input-debounce":"0",label:"Vincula un usuario",options:e.estudiantesOpciones,behavior:"menu",value:"code"},on:{filter:e.filtrarEstudianteInput,input:e.vincularEstudiante},scopedSlots:e._u([{key:"no-option",fn:function(){return[r("q-item",[r("q-item-section",{staticClass:"text-grey"},[e._v("\n                    No hay resultados\n                  ")])],1)]},proxy:!0}]),model:{value:e.estudianteSeleccionado,callback:function(a){e.estudianteSeleccionado=a},expression:"estudianteSeleccionado"}})],1)])],1)],1)],1),r("q-dialog",{attrs:{position:"top"},model:{value:e.upload,callback:function(a){e.upload=a},expression:"upload"}},[r("q-uploader",{staticStyle:{"max-width":"240px"},attrs:{color:"indigo",label:"Arrastra o selecciona tu foto (MAX 10MB)","auto-upload":"",url:e.urlUploadEmpresaFoto+"/admin/empresas/"+this.empresa.idempresa+"/foto",headers:[{name:"Authorization",value:e.tokenToUploadFoto}],method:"PUT","with-credentials":e.booleano,fieldName:"file","max-file-size":10485760},on:{uploaded:e.fotoSubida}})],1),r("q-dialog",{model:{value:e.eliminarEmpresa,callback:function(a){e.eliminarEmpresa=a},expression:"eliminarEmpresa"}},[r("q-card",{staticClass:"my-card"},[r("q-card-section",{staticClass:"q-pt-sm"},[r("div",{staticClass:"text-h6"},[e._v("\n          Eliminar empresa\n        ")]),r("div",{staticClass:"text-subtitle2"},[e._v("\n          Introduce el nombre de la empresa a eliminar.\n        ")]),r("div",{staticClass:"text-grey-7"},[e._v("\n          Para verificar que esta acción es voluntaria te pedimos que\n          nos escribas el nombre de la empresa que quieres eliminar.\n        ")])]),r("q-separator"),r("q-card-section",{},[r("q-input",{attrs:{outlined:"",dense:"",color:"secondary",placeholder:e.empresa.nombre,rules:[function(a){return null!=e.empresaDelete||"Campo requerido"},function(a){return""!==e.empresaDelete||"Campo requerido"}],"lazy-rules":""},model:{value:e.empresaDelete,callback:function(a){e.empresaDelete=a},expression:"empresaDelete"}}),r("div",{staticClass:"q-pt-md"},[e._v("\n          ¿Estas seguro de borrar la empresa?\n          Esta acción "),r("span",{staticClass:"text-negative text-weight-bolder"},[e._v("no se puede deshacer")]),e._v(".\n          Si en el futuro quieres volver a utilizar esta empresa, tendrás que volver a crearla.\n\n        ")])],1),r("q-separator"),r("q-card-actions",{attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"accent",label:"Cancelar"}}),e.empresa.nombre!==e.empresaDelete?r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",disable:"",color:"negative",label:"Borrar empresa"}}):e._e(),e.empresa.nombre===e.empresaDelete?r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"negative",label:"Borrar empresa"},on:{click:e.borrarEmpresa}}):e._e()],1)],1)],1)],1)},o=[],s=t("fa84"),i=t.n(s),n=(t("d25f"),t("28a5"),t("a481"),t("20d6"),t("967e")),c=t.n(n),l={name:"Empresa",data:function(){return{newHorario:{idempresa:null,horaEntrada:"",horaSalida:"",iddia:null},allPosibleDias:[],createHorarioStep:1,tabHorario:"",anadirHorario:!1,estudianteSeleccionado:null,estudiantesOpciones:[],estudiantes:[],estudiantesFilter:[],empresa:{idempresa:null,nombre:"",contacto:"",fechaInicioPracticas:null,direccion:null,fotoEmpresa:null,estudiantes:[],horarios:[]},direccion:{calle:"",numero:null,zip:null,ciudad:"",pais:""},empresaDelete:"",center:{lat:39.60172,lng:2.689314},zoom:12,marker:{lat:39.60172,lng:2.689314},options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!0,fullscreenControl:!0},icon:{url:"statics/marker.svg",scaledSize:{width:50,height:50},anchor:{x:20,y:24}},editarEmpresa:!1,eliminarEmpresa:!1,upload:!1,booleano:!0,urlUploadEmpresaFoto:"https://api.tresee.app",tokenToUploadFoto:localStorage.getItem("refreshToken"),estudiante:"",precisionMaps:!1}},methods:{cancelEdit:function(){this.editarEmpresa=!1,this.cargarInfoEmpresa(this.empresa.idempresa)},fotoSubida:function(){var e=this;return i()(c.a.mark((function a(){return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.upload=!1,a.next=3,e.cargarInfoEmpresa(e.empresa.idempresa);case 3:e.mostrarNotificacion("Se ha modificado la foto correctamente","green");case 4:case"end":return a.stop()}}),a)})))()},vincularEstudiante:function(){var e=this;return i()(c.a.mark((function a(){var t,r;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t={idempresa:e.empresa.idempresa,idusuario:e.estudianteSeleccionado.value},a.next=3,e.$axiosJava.post("/admin/empresas/vincular/user",t);case 3:r=a.sent,200===r.status?(e.mostrarNotificacion("El estudiante "+e.estudianteSeleccionado.label+" ha sido vinculado correctamente.","green"),e.cargarInfoEmpresa(e.empresa.idempresa),e.estudianteSeleccionado=null):e.mostrarNotificacion("El estudiante "+e.estudianteSeleccionado.label+" no ha podido ser vinculado.","red-9");case 5:case"end":return a.stop()}}),a)})))()},desvincularEstudiante:function(e){var a=this;return i()(c.a.mark((function t(){var r,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={idusuario:e},t.next=3,a.$axiosJava.delete("/admin/empresas/vincular/user",{data:r});case 3:if(o=t.sent,200!==o.status){t.next=10;break}return a.mostrarNotificacion("Se ha desnvinculado la empresa correctamente.","green"),t.next=8,a.cargarInfoEmpresa(a.empresa.idempresa);case 8:t.next=12;break;case 10:a.mostrarNotificacion("Ha ocurrido un error al desvincular el usuario","red-9"),a.cargarInfoEmpresa(a.empresa.idempresa);case 12:case"end":return t.stop()}}),t)})))()},filtrarEstudianteInput:function(e,a){var t=this;a(""!==e?function(){var a=e.toLowerCase();t.estudiantesOpciones=t.estudiantesFilter.filter((function(e){return e.label.toLowerCase().indexOf(a)>-1}))}:function(){t.estudiantesOpciones=t.estudiantesFilter})},parserDirection:function(e){var a=e.split(",");this.direccion.calle=a[0],this.direccion.numero=parseInt(a[1]),this.direccion.zip=parseInt(a[2]),a[3]&&(this.direccion.ciudad=a[3].replace(/\s/g,"")),a[4]&&(this.direccion.pais=a[4].replace(/\s/g,""))},guardarInformacionEmpresa:function(){var e=this;return i()(c.a.mark((function a(){var t;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.empresa.direccion=e.direccion.calle+", "+e.direccion.numero+", "+e.direccion.zip+", "+e.direccion.ciudad+", "+e.direccion.pais,a.next=3,e.$axiosJava.put("/admin/empresas",e.empresa);case 3:t=a.sent,200===t.status?(e.mostrarNotificacion("Se ha guardado la informacion correctamente","secondary"),e.editarEmpresa=!1):e.mostrarNotificacion(t.data,"red-9");case 5:case"end":return a.stop()}}),a)})))()},borrarEmpresa:function(){var e=this;return i()(c.a.mark((function a(){var t;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$axiosJava.delete("/admin/empresas",{data:{idempresa:e.empresa.idempresa}});case 2:if(t=a.sent,200!==t.status){a.next=9;break}return e.mostrarNotificacion("Se ha borrado la empresa correctamente.","secondary"),a.next=7,e.$router.push("/profesor/empresas");case 7:a.next=10;break;case 9:e.mostrarNotificacion(t.data,"red-9");case 10:case"end":return a.stop()}}),a)})))()},mostrarNotificacion:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"indigo",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-right";this.$q.notify({color:a,message:e,position:t,timeout:5e3})},cargarEstudiantes:function(){var e=this;return i()(c.a.mark((function a(){var t,r;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$axiosJava.get("/admin/estudiantes");case 2:t=a.sent,200===t.status&&(e.estudiantes=t.data,r=e.estudiantes.filter((function(a){return-1===e.empresa.estudiantes.findIndex((function(e){return e.idusuario===a.idusuario}))})),r.forEach((function(a){e.estudiantesFilter.push({label:a.nombre+" "+a.apellidos,value:a.idusuario})})));case 4:case"end":return a.stop()}}),a)})))()},geocodeEmpresa:function(){var e=this;return i()(c.a.mark((function a(){var t;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t={address_line_1:e.direccion.numero+" "+e.direccion.calle,city:e.direccion.ciudad,state:e.direccion.ciudad,zip_code:e.direccion.zip,country:e.direccion.pais},e.$geocoder.send(t,(function(a){console.log(a),"OK"===a.status?(a.results[0].partial_match&&(e.precisionMaps=!0),e.marker.lat=a.results[0].geometry.location.lat,e.marker.lng=a.results[0].geometry.location.lng,e.center.lat=a.results[0].geometry.location.lat,e.center.lng=a.results[0].geometry.location.lng):e.mostrarNotificacion("Ha habido un problema al cargar la ubicación","red-9")}));case 2:case"end":return a.stop()}}),a)})))()},cargarInfoEmpresa:function(e){var a=this;return i()(c.a.mark((function t(){var r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.estudiantesFilter=[],a.estudiantesOpciones=[],t.next=4,a.$axiosJava.get("/admin/empresas/"+e);case 4:if(r=t.sent,200!==r.status){t.next=23;break}return a.empresa.idempresa=r.data.idempresa,a.empresa.nombre=r.data.nombre,a.empresa.contacto=r.data.contacto,a.empresa.fechaInicioPracticas=r.data.inicioPracticas.replace(/-/g,"/"),a.empresa.direccion=r.data.direccion,a.empresa.estudiantes=r.data.estudiantes,a.empresa.fotoEmpresa=r.data.fotoEmpresa,a.empresa.horarios=r.data.empresaTieneDias.sort((function(e,a){return e.dia.iddia-a.dia.iddia})),a.empresa.horarios.length>0&&(a.tabHorario=a.empresa.horarios[0].dia.dia),t.next=17,a.parserDirection(r.data.direccion);case 17:return t.next=19,a.cargarEstudiantes();case 19:return t.next=21,a.geocodeEmpresa();case 21:t.next=24;break;case 23:a.mostrarNotificacion("No se ha podido recuperar la empresa","red-9");case 24:case"end":return t.stop()}}),t)})))()},seleccionarDiaNewHorario:function(e){this.newHorario.idempresa=this.empresa.idempresa,this.newHorario.iddia=e.iddia,this.createHorarioStep=2},saveCahngesHorario:function(e){var a=this;return i()(c.a.mark((function t(){var r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.idempresa=a.empresa.idempresa,e.iddia=e.dia.iddia,e.horaEntrada=a.filtroQuitarSegundoHoras(e.horaEntrada),e.horaSalida=a.filtroQuitarSegundoHoras(e.horaSalida),t.next=6,a.$axiosJava.put("/admin/horario",e);case 6:if(r=t.sent,200!==r.status){t.next=15;break}return a.mostrarNotificacion("Horario guardado correctamente","secondary","bottom-left"),t.next=11,a.cargarInfoEmpresa(a.empresa.idempresa);case 11:return t.next=13,a.cargarTodosLosDias();case 13:t.next=16;break;case 15:a.mostrarNotificacion(r.data,"red-9","bottom-left");case 16:case"end":return t.stop()}}),t)})))()},cargarTodosLosDias:function(){var e=this;return i()(c.a.mark((function a(){var t;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$axiosJava.get("/admin/dias");case 2:t=a.sent,console.log(t),200===t.status&&(0===e.empresa.horarios.length?e.allPosibleDias=t.data:e.allPosibleDias=t.data.filter((function(a){return-1===e.empresa.horarios.findIndex((function(e){return e.dia.iddia===a.iddia}))})));case 5:case"end":return a.stop()}}),a)})))()},saveNewHorario:function(){var e=this;return i()(c.a.mark((function a(){var t;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$axiosJava.post("/admin/horario",e.newHorario);case 2:if(t=a.sent,200!==t.status){a.next=11;break}return e.mostrarNotificacion("Horario guardado correctamente","secondary","bottom-left"),a.next=7,e.cargarInfoEmpresa(e.empresa.idempresa);case 7:return a.next=9,e.cargarTodosLosDias();case 9:a.next=12;break;case 11:e.mostrarNotificacion(t.data,"red-9","bottom-left");case 12:e.newHorario.horaSalida="",e.newHorario.horaEntrada="",e.newHorario.iddia=null,e.createHorarioStep=1;case 16:case"end":return a.stop()}}),a)})))()},borrarHorario:function(e){var a=this;return i()(c.a.mark((function t(){var r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.idempresa=a.empresa.idempresa,e.iddia=e.dia.iddia,t.next=4,a.$axiosJava.delete("/admin/horario",{data:e});case 4:if(r=t.sent,200!==r.status){t.next=13;break}return a.mostrarNotificacion("Horario eliminado correctamente","secondary","bottom-left"),t.next=9,a.cargarInfoEmpresa(a.empresa.idempresa);case 9:return t.next=11,a.cargarTodosLosDias();case 11:t.next=18;break;case 13:return a.mostrarNotificacion(r.data,"red-9","bottom-left"),t.next=16,a.cargarInfoEmpresa(a.empresa.idempresa);case 16:return t.next=18,a.cargarTodosLosDias();case 18:case"end":return t.stop()}}),t)})))()},filtroQuitarSegundoHoras:function(e){return e.substring(0,5)}},created:function(){var e=this;return i()(c.a.mark((function a(){var t;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=e.$route.params.id,a.next=3,e.cargarInfoEmpresa(t);case 3:return a.next=5,e.cargarTodosLosDias();case 5:case"end":return a.stop()}}),a)})))()},filters:{filtroQuitarSegundoHoras:function(e){return e.substring(0,5)}}},d=l,u=t("2877"),p=t("9989"),m=t("f09f"),f=t("a370"),h=t("2c91"),v=t("0016"),x=t("05c0"),b=t("eb85"),q=t("27f9"),g=t("7cbe"),y=t("52ee"),w=t("068f"),k=t("9c40"),C=t("4b7e"),E=t("429b"),S=t("7460"),H=t("adad"),_=t("823b"),$=t("42a1"),I=t("24e8"),N=t("f531"),Q=t("87fe"),P=t("b047"),D=t("b19c"),z=t("1c1c"),T=t("66e5"),F=t("4074"),J=t("cb32"),O=t("ddd8"),L=t("ee89"),A=t("7f67"),j=t("eebe"),B=t.n(j),M=Object(u["a"])(d,r,o,!1,null,"7ce74808",null);a["default"]=M.exports;B()(M,"components",{QPage:p["a"],QCard:m["a"],QCardSection:f["a"],QSpace:h["a"],QIcon:v["a"],QTooltip:x["a"],QSeparator:b["a"],QInput:q["a"],QPopupProxy:g["a"],QDate:y["a"],QImg:w["a"],QBtn:k["a"],QCardActions:C["a"],QTabs:E["a"],QTab:S["a"],QTabPanels:H["a"],QTabPanel:_["a"],QPopupEdit:$["a"],QDialog:I["a"],QStepper:N["a"],QStep:Q["a"],QChip:P["a"],QStepperNavigation:D["a"],QList:z["a"],QItem:T["a"],QItemSection:F["a"],QAvatar:J["a"],QSelect:O["a"],QUploader:L["a"]}),B()(M,"directives",{ClosePopup:A["a"]})}}]);