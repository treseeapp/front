(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"1b3f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=this,s=t.$createElement,o=t._self._c||s;return o("q-page",[o("q-pull-to-refresh",{on:{refresh:t.cargar}},[o("div",{staticClass:"row  q-pt-lg"},[o("div",{staticClass:"col-12 col-xs-12 col-md-2 col-lg-2 "}),o("div",{staticClass:"row col-12 col-xs-12 col-md-12 col-lg-8 justify-center"},[o("div",{staticClass:"col-12 flex justify-between q-pl-sm q-pr-sm "},[o("div",{staticClass:"flex-center flex"},[o("q-btn",{attrs:{icon:"fas fa-th",flat:"",dense:"",color:t.vistaCuadricula?"blue":"grey-8"},on:{click:function(){t.vistaCuadricula||(e.vistaCuadricula=!0,e.vistaListado=!1,e.changeLocalVista({vistaCuadricula:!0,vistaListado:!1}),e.recargarFotoEstudiantes())}}}),o("q-btn",{attrs:{icon:"fas fa-bars",flat:"",dense:"",color:t.vistaListado?"blue":"grey-8"},on:{click:function(){t.vistaListado||(e.vistaCuadricula=!1,e.vistaListado=!0,e.changeLocalVista({vistaCuadricula:!1,vistaListado:!0}),e.recargarFotoEstudiantes())}}})],1),o("div",{staticClass:"flex"},[o("q-btn",{staticClass:"q-mr-md",attrs:{icon:"keyboard_arrow_down",color:"blue",label:t.$q.screen.gt.sm?"Añadir estudiantes":""}},[o("q-menu",{attrs:{fit:""}},[o("q-list",{staticStyle:{"min-width":"100px"}},[o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"fas fa-users"}})],1),o("q-item-section",[t._v("Manual")])],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.addCSV=!0}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"fas fa-file-csv"}})],1),o("q-item-section",[t._v("\n                      Importar csv\n                    ")])],1)],1)],1)],1),o("q-input",{attrs:{color:"blue",dense:"",outlined:"",label:"Buscar estudiante"},on:{input:t.filterStudents},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"fas fa-user-tie",color:"blue"}})]},proxy:!0}]),model:{value:t.busquedaEstudiante,callback:function(e){t.busquedaEstudiante=e},expression:"busquedaEstudiante"}})],1)]),0===t.listadoEstudiantes.length&&t.estudiantesHanSidoCargados?o("div",{staticClass:"fixed-center text-center"},[o("p",[o("img",{staticStyle:{width:"30vw","max-width":"150px"},attrs:{src:a("c4e4"),alt:"imagen sad"}})]),o("p",{staticClass:"text-faded"},[t._v("\n            No hay ninguna estudiante en la bbdd.\n          ")])]):t._e(),t.estudiantesHanSidoCargados?t._e():o("div",{class:t.$q.screen.gt.md?"flex justify-between":"flex flex-center"},t._l(6,(function(e){return o("q-card",{key:e,class:t.$q.screen.gt.md?"lg-card-item q-ma-sm":"md-card-item q-ma-sm"},[o("q-skeleton",{attrs:{height:"150px",square:""}}),o("q-card-section",[o("q-skeleton",{staticClass:"absolute ",staticStyle:{top:"0",right:"12px",transform:"translateY(-50%)"},attrs:{type:"circle"}}),o("div",{staticClass:"text-h6 q-mt-sm"},[o("q-skeleton",{attrs:{type:"text"}})],1),o("div",{staticClass:" text-grey-7 "},[o("q-skeleton",{attrs:{type:"text"}})],1)],1),o("q-card-section",{staticClass:"row"},[o("div",{staticClass:"col-6 flex"},[o("q-skeleton",{attrs:{type:"QAvatar"}})],1),o("div",{staticClass:"col-6 flex   content-center justify-end "},[o("q-skeleton",{staticStyle:{"flex-basis":"70%"},attrs:{type:"text"}})],1)]),o("q-card-actions",{staticClass:"justify-between no-wrap"},[o("q-skeleton",{attrs:{type:"QChip"}}),o("q-skeleton",{attrs:{type:"QBtn"}})],1)],1)})),1),0===t.listadoEstudiantes.length&&0===t.listadoEstudiantesFiltrados.length||!0!==t.vistaListado?t._e():o("div",{staticClass:"row q-mt-sm q-pa-sm col-12"},[o("q-list",{staticClass:"rounded-borders col-12 ",attrs:{bordered:""}},[o("q-item-label",{attrs:{header:""}},[t._v("Estudiantes")]),t._l(t.listadoEstudiantesFiltrados,(function(e){return o("q-item",{key:e.idusuario},[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",[o("q-img",{attrs:{src:e.fotoPerfil,"placeholder-src":a("c15d"),"spinner-color":"primary",ratio:"1",alt:"Imagen perfil usuario"}})],1)],1),o("q-item-section",{staticClass:"col-2 "},[o("q-item-label",{staticClass:"text-weight-mediumn"},[t._v(t._s(e.nombre)+" "+t._s(e.apellidos)+"\n                ")])],1),t.$q.screen.gt.sm?o("q-item-section",{staticClass:"col-3"},[o("q-item-label",{staticClass:"justify-end flex"},[o("span",{staticClass:" text-grey-7"},[t._v(t._s(e.email))])])],1):t._e(),o("q-item-section",[e.trabajando?o("q-chip",{attrs:{square:"",color:"white","text-color":"green-7",icon:"fas fa-circle"}},[t._v("\n                  Trabajando\n                ")]):t._e(),e.trabajando?t._e():o("q-chip",{attrs:{square:"",color:"white","text-color":"grey-6",icon:"fas fa-circle"}},[t._v(" No\n                  trabjando\n                ")])],1),o("q-item-section",{attrs:{top:"",side:""}},[o("div",{staticClass:"text-grey-8 q-gutter-xs"},[null!=e.genero&&"hombre"===e.genero.toLowerCase()?o("q-avatar",{attrs:{color:"secondary",size:"30px","text-color":"white",icon:"fas fa-male"}},[o("q-tooltip",{attrs:{anchor:"center left",self:"center right","transition-show":"flip-right","transition-hide":"flip-left","content-class":"bg-indigo",offset:[10,10]}},[t._v("\n                      Hombre\n                    ")])],1):t._e(),null!=e.genero&&"mujer"===e.genero.toLowerCase()?o("q-avatar",{attrs:{color:"secondary",size:"30px","text-color":"white",icon:"fas fa-female"}},[o("q-tooltip",{attrs:{anchor:"center left",self:"center right","transition-show":"flip-right","transition-hide":"flip-left","content-class":"bg-indigo",offset:[10,10]}},[t._v("\n                      Mujer\n                    ")])],1):t._e(),null===e.genero||"indefinido"===e.genero.toLowerCase()?o("q-avatar",{attrs:{color:"secondary",size:"30px","text-color":"white",icon:"fas fa-horse"}},[o("q-tooltip",{attrs:{anchor:"center left",self:"center right","transition-show":"flip-right","transition-hide":"flip-left","content-class":"bg-indigo",offset:[10,10]}},[t._v("\n                      Indefinido\n                    ")])],1):t._e(),o("q-btn",{attrs:{flat:"",size:"13px",color:"primary",icon:"fas fa-plus",dense:"",round:""}},[o("q-menu",{attrs:{anchor:"top right",self:"top left"}},[o("q-item",{attrs:{clickable:"",to:"estudiante/"+e.idusuario}},[o("q-item-section",[t._v("Ver estudiante")])],1),null!=e.empresa?o("q-separator",{attrs:{inset:""}}):t._e(),null!=e.empresa?o("q-item",{attrs:{clickable:"",to:"/profesor/empresa/"+e.empresa.idempresa}},[o("q-item-section",[t._v("Ver empresa")])],1):t._e()],1)],1)],1)])],1)}))],2)],1),0===t.listadoEstudiantes.length&&0===t.listadoEstudiantesFiltrados.length||!0!==t.vistaCuadricula?t._e():o("div",{class:t.$q.screen.gt.md?"flex justify-between":"flex flex-center"},t._l(t.listadoEstudiantesFiltrados,(function(e){return o("q-card",{key:e.idusuario,class:t.$q.screen.gt.md?"lg-card-item q-ma-sm":"md-card-item q-ma-sm"},[null!=e.genero&&"hombre"===e.genero.toLowerCase()||null===e.genero||"indefinido"===e.genero.toLowerCase()?o("q-img",{attrs:{src:e.fotoPerfil,"placeholder-src":a("c15d"),"spinner-color":"primary",ratio:16/9,alt:"Imagen de perfil de usuario hombre"}}):t._e(),null!=e.genero&&"mujer"===e.genero.toLowerCase()?o("q-img",{attrs:{src:e.fotoPerfil,"placeholder-src":a("df52"),"spinner-color":"primary",ratio:16/9,position:"50% 30%",alt:"Imagen de perfil de usuario mujer"}}):t._e(),o("q-card-section",[o("q-btn",{staticClass:"absolute",staticStyle:{top:"0",right:"12px",transform:"translateY(-50%)"},attrs:{"fab-mini":"",color:"primary",icon:"fas fa-plus",to:"/DEMO/profesor/estudiante/"+e.idusuario}}),o("div",{class:t.$q.screen.gt.sm?"text-h6":"text-body1 text-bold"},[t._v("\n                "+t._s(e.nombre)+"\n              ")]),o("div",{staticClass:"text-grey-7 "},[t._v(t._s(e.email))])],1),o("q-card-section",{staticClass:"row"},[o("div",{staticClass:"col-6",attrs:{align:"left"}},[null!=e.genero&&"hombre"===e.genero.toLowerCase()?o("q-avatar",{attrs:{color:"secondary",size:"35px","text-color":"white",icon:"fas fa-male"}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10]}},[t._v("\n                    Hombre\n                  ")])],1):t._e(),null!=e.genero&&"mujer"===e.genero.toLowerCase()?o("q-avatar",{attrs:{color:"secondary",size:"35px","text-color":"white",icon:"fas fa-female"}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10]}},[t._v("\n                    Mujer\n                  ")])],1):t._e(),null===e.genero||"indefinido"===e.genero.toLowerCase()?o("q-avatar",{attrs:{color:"secondary",size:"35px","text-color":"white",icon:"fas fa-horse"}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10]}},[t._v("\n                    Indefinido\n                  ")])],1):t._e()],1),o("div",{staticClass:"col-6",attrs:{align:"right"}},[o("q-avatar",{attrs:{size:"30px","text-color":"grey-14",icon:"fas fa-birthday-cake"}}),t._v("\n                "+t._s(e.dataNacimiento)+"\n                "),null===e.dataNacimiento?o("span",[t._v("N/A")]):t._e()],1)]),o("q-card-actions",{staticClass:"justify-between no-wrap"},[e.trabajando&&!t.$q.dark.isActive?o("q-chip",{attrs:{square:"",color:"white","text-color":"green-7",icon:"fas fa-circle"}},[t._v("\n                Trabajando\n              ")]):t._e(),e.trabajando||t.$q.dark.isActive?t._e():o("q-chip",{attrs:{square:"",color:"white","text-color":"grey-6",icon:"fas fa-circle"}},[t._v("\n                No trabajando\n              ")]),e.trabajando&&t.$q.dark.isActive?o("q-chip",{attrs:{square:"","text-color":"green-6",icon:"fas fa-circle"}},[t._v("\n                Trabajando\n              ")]):t._e(),!e.trabajando&&t.$q.dark.isActive?o("q-chip",{attrs:{square:"","text-color":"white",icon:"fas fa-circle"}},[t._v("\n                No trabajando\n              ")]):t._e(),null!=e.empresa||t.$q.dark.isActive?t._e():o("q-btn",{attrs:{dense:"",flat:"",label:"Sin empresa",disable:"",color:"grey-8"}}),null==e.empresa||t.$q.dark.isActive?t._e():o("q-btn",{attrs:{flat:"",label:e.empresa.nombre,color:"secondary",to:"/profesor/empresa/"+e.empresa.idempresa}}),null==e.empresa&&t.$q.dark.isActive?o("q-btn",{attrs:{dense:"",flat:"",label:"Sin empresa",disable:"","text-color":"white"}}):t._e(),null!=e.empresa&&t.$q.dark.isActive?o("q-btn",{attrs:{flat:"",label:e.empresa.nombre,color:"white",to:"/profesor/empresa/"+e.empresa.idempresa}}):t._e()],1)],1)})),1)])])]),o("q-dialog",{model:{value:t.addCSV,callback:function(e){t.addCSV=e},expression:"addCSV"}},[o("q-card",{staticClass:"column   "},[o("q-card-section",[o("div",{staticClass:"text-h5"},[t._v("Importar estudiantes")])]),o("q-separator"),o("q-card-section",[o("div",{staticClass:"text-h6 text-grey-8"},[t._v("\n          Formato csv\n        ")]),o("div",{staticClass:"text-subtitle2 text-grey-7"},[t._v("\n          El archivo csv, ha de cumplir el siguiente formato\n        ")]),o("div",{staticClass:"font-code q-mt-sm q-mb-md bg-grey-3 rounded-borders q-pa-md   items-center"},[t._v("\n          email,nombre,apellidos\n        ")]),o("div",{staticClass:"text-justify"},[t._v("\n          No importa el orden en el que esten las columnas, pero si que hemos de recibir por seguro, es la cabecera de\n          cada columna exactamente,\n          como esta establecido en el ejemplo. "),o("br"),o("span",{staticClass:"text-bold"},[t._v("Cada linea")]),t._v(" del archivo csv, se contará como un usuario "),o("span",{staticClass:"text-bold"},[t._v("individual")]),t._v(". Si por algun caso, no se puede añadir\n          un usuario en especifico o mas.\n          Se procederá a añadir todos los que si se puedan, y los que no se puedan, no se añadiran.\n          Los emails, han de ser "),o("span",{staticClass:"text-bold"},[t._v("unicos")]),t._v(".\n          "),o("br"),t._v("\n          A cada usuario que añadas, se le enviará un correo electronico a su dirección email.\n          con instrucciones detalladas de como continuar el proceso de registro.\n        ")])]),o("q-card-section",[o("q-uploader",{staticClass:"full-width",attrs:{url:t.urlUploadCSV,label:"Seleccionar o arrastrar csv",color:"grey-3","text-color":"black",accept:".csv","auto-upload":"",method:"POST","field-name":"file",headers:[{name:"Authorization",value:"Bearer "+t.token}],"with-credentials":!0},on:{uploaded:t.csvUploaded,failed:function(e){return t.csvFailed()}}})],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"red-8 "}})],1)],1)],1)],1)},o=[],r=a("fa84"),i=a.n(r),n=(a("d25f"),a("2fdb"),a("6762"),a("967e")),l=a.n(n),c={name:"Estudiantes",data:function(){return{urlUploadCSV:"https://api.tresee.app/admin/estudiantes/upload/csv",token:localStorage.getItem("refreshToken"),addCSV:!1,listadoEstudiantes:[{idusuario:1,nombre:"Fernando",apellidos:"Perez",email:"fer@tresee.app",genero:"HOMBRE",fotoPerfil:a("72b2"),dataNacimiento:"1998-03-16",empresa:{idempresa:1,nombre:"iajoo"}},{idusuario:2,nombre:"María",apellidos:"Fernandez",email:"mfernandez@tresee.app",genero:"MUJER",fotoPerfil:a("0b65"),dataNacimiento:"1997-09-16",empresa:{idempresa:2,nombre:"tuitah"}},{idusuario:3,nombre:"Paco",apellidos:"Alonso",email:"palonso@tresee.app",genero:"HOMBRE",fotoPerfil:a("f7c1"),dataNacimiento:"1990-09-13",empresa:{idempresa:3,nombre:"Gogle sle"}},{idusuario:4,nombre:"Richard",apellidos:"Hendricks",email:"rich@tresee.app",genero:"HOMBRE",fotoPerfil:a("fed9"),dataNacimiento:"1978-01-16",empresa:{idempresa:4,nombre:"Fasebuk"}},{idusuario:5,nombre:"Joan",apellidos:"Pacheco",email:"joapacheco@tresee.app",genero:"HOMBRE",fotoPerfil:a("7662"),dataNacimiento:"",empresa:{idempresa:5,nombre:"telejrom"}},{idusuario:6,nombre:"Manolo",apellidos:"Sanchez",email:"msanchez@tresee.app",genero:"HOMBRE",fotoPerfil:a("694c"),dataNacimiento:"24-02-1956",empresa:null}],listadoEstudiantesFiltrados:{},estudiantesHanSidoCargados:!1,busquedaEstudiante:"",vistaCuadricula:!1,vistaListado:!1}},created:function(){var e=this;return i()(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.vistaCuadricula=!0,e.listadoEstudiantesFiltrados=e.listadoEstudiantes,e.estudiantesHanSidoCargados=!0;case 3:case"end":return t.stop()}}),t)})))()},methods:{csvFailed:function(){this.mostrarNotificacion("Ha habido un error al subir los usuarios","red-10",!1,"bottom-left")},csvUploaded:function(){var e=this;return i()(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.addCSV=!1,e.mostrarNotificacion("Usuarios añadidos correctamente","indigo",!1,"bottom-left"),t.next=4,e.cargarEstudiantes();case 4:case"end":return t.stop()}}),t)})))()},changeLocalVista:function(e){},mostrarNotificacion:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"indigo",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"top-right";this.$q.notify({color:t,message:e,position:s,timeout:5e3,multiLine:a})},cargar:function(){return i()(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},recargarFotoEstudiantes:function(){return i()(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},filterStudents:function(e){console.log(e),e=e.toLowerCase(),this.listadoEstudiantesFiltrados=this.listadoEstudiantes.filter((function(t){return t.nombre.toLowerCase().includes(e)||t.apellidos.toLowerCase().includes(e)||t.email.toLowerCase().includes(e)}))}}},d=c,u=(a("b1a5"),a("2877")),p=a("9989"),m=a("59d7"),f=a("9c40"),v=a("4e73"),q=a("1c1c"),b=a("66e5"),g=a("4074"),h=a("0016"),C=a("27f9"),x=a("f09f"),_=a("293e"),w=a("a370"),y=a("4b7e"),k=a("0170"),j=a("cb32"),E=a("068f"),S=a("b047"),L=a("05c0"),Q=a("eb85"),N=a("24e8"),$=a("ee89"),A=a("7f67"),F=a("eebe"),P=a.n(F),z=Object(u["a"])(d,s,o,!1,null,"a3904812",null);t["default"]=z.exports;P()(z,"components",{QPage:p["a"],QPullToRefresh:m["a"],QBtn:f["a"],QMenu:v["a"],QList:q["a"],QItem:b["a"],QItemSection:g["a"],QIcon:h["a"],QInput:C["a"],QCard:x["a"],QSkeleton:_["a"],QCardSection:w["a"],QCardActions:y["a"],QItemLabel:k["a"],QAvatar:j["a"],QImg:E["a"],QChip:S["a"],QTooltip:L["a"],QSeparator:Q["a"],QDialog:N["a"],QUploader:$["a"]}),P()(z,"directives",{ClosePopup:A["a"]})},ae62:function(e,t,a){},b1a5:function(e,t,a){"use strict";var s=a("ae62"),o=a.n(s);o.a}}]);