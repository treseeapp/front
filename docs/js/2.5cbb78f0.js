(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0217":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=this,a=t.$createElement,o=t._self._c||a;return o("q-layout",{attrs:{view:"hHh LpR fFf"}},[o("q-header",{staticClass:"bg-primary text-white"},[o("q-toolbar",[o("q-btn",{staticClass:"sm",attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.left=!t.left}}}),o("q-btn",{staticClass:"xs",attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.left=!t.left}}}),o("q-toolbar-title",{},[o("span",{staticClass:"text-h4 font-prime-regular q-pl-sm vertical-middle"},[t._v("\n          tresee\n        ")]),o("q-badge",{attrs:{color:"white","text-color":"white",outline:""}},[t._v("\n          beta\n        ")])],1),"estudiante"===t.userRol?o("q-btn",{attrs:{flat:"",icon:"fas fa-id-badge",label:t.isEntradaOrSalida?"Fichar entrada":"Fichar salida"},on:{click:t.fichar}}):t._e(),o("q-btn",{staticClass:"q-ml-md",attrs:{icon:"settings",flat:"",round:""}},[o("q-menu",[o("q-list",[o("q-item-label",{staticClass:"q-pb-xs",attrs:{header:""}},[t._v("Ajustes de sistema")]),o("q-separator",{attrs:{inset:""}}),o("q-item",{staticClass:"flex flex-center"},[o("q-item-section",[o("q-item-label",[t._v("Tema")])],1),o("q-icon",{attrs:{name:"wb_sunny"}}),o("q-toggle",{attrs:{color:"blue"},on:{input:t.guardarAjusteDarkMode},model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}}),o("q-icon",{attrs:{name:"nights_stay"}})],1),o("q-item-label",{staticClass:"q-mt-md q-pb-xs",attrs:{header:""}},[t._v("Ajustes de sonido")]),o("q-separator",{attrs:{inset:""}}),o("q-item",{staticClass:"row"},[o("q-item-section",[o("q-item-label",[t._v("Notificaciones")])],1),o("q-item-section",{attrs:{side:""}},[o("q-toggle",{staticClass:"flex justify-end",attrs:{color:"blue"},on:{input:t.guardarAjustesNotificarSonido},model:{value:t.puedeNotificarSonido,callback:function(e){t.puedeNotificarSonido=e},expression:"puedeNotificarSonido"}})],1)],1),o("q-item",[o("q-item-section",{attrs:{side:""}},[o("q-icon",{attrs:{color:"blue-5",name:"volume_down"}})],1),o("q-item-section",[o("q-slider",{attrs:{min:1,max:10,label:"",color:"blue-5",disable:!t.puedeNotificarSonido},on:{input:t.guardarAjustesVolumen},model:{value:t.volumenNotificacion,callback:function(e){t.volumenNotificacion=e},expression:"volumenNotificacion"}})],1),o("q-item-section",{attrs:{side:""}},[o("q-icon",{attrs:{color:"blue-5",name:"volume_up"}})],1)],1)],1)],1)],1)],1)],1),o("q-drawer",{attrs:{"show-if-above":"",side:"left",bordered:""},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[o("div",{staticClass:"row q-mt-md"},[o("div",{staticClass:"col-2"}),o("div",{staticClass:"col-8 "},[o("div",{staticClass:"row flex-center q-mb-sm"},[o("q-avatar",{attrs:{rounded:"",size:"50px"}},[o("q-img",{attrs:{src:t.logedUser.foto,ratio:1,"placeholder-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr1v58ICPpgv8t4zeWFfmJqBre8Xedi8agxMpKEHR-G5L06sic","spinner-color":"primary"}})],1)],1),o("div",{staticClass:"row flex-center "},[o("span",{staticClass:"text-h6 font-prime-regular"},[t._v(t._s(t.logedUser.nombre))])]),o("q-separator",{staticClass:"q-mt-sm q-mb-sm"}),o("div",{staticClass:"row flex-center justify-evenly q-mb-sm"},[o("q-btn",{attrs:{outline:"",icon:"person",color:"indigo",to:"/account"}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",delay:300,offset:[10,10]}},[t._v("\n              Account\n            ")])],1),o("q-btn",{attrs:{icon:"lock",color:"negative",outline:""},on:{click:function(e){t.confirmDisconnect=!0}}},[o("q-tooltip",{attrs:{"content-class":"bg-red",delay:300,offset:[10,10]}},[t._v("\n              Log Out\n            ")])],1)],1)],1)]),o("q-separator",{staticClass:"q-mt-sm q-mb-sm"}),o("q-list",t._l(t.menuLinks,(function(e){return e.rolNeeded===t.userRol?o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:e.link}},[o("q-item-section",{attrs:{avatar:"",top:""}},[o("q-icon",{attrs:{name:e.icon,color:"secondary",size:"2em"}})],1),o("q-item-section",[o("q-item-label",{staticStyle:{"font-size":"1.2em"},attrs:{lines:"1"}},[t._v(t._s(e.title))])],1)],1):t._e()})),1)],1),o("q-page-container",[o("router-view",{attrs:{usuarioLogged:t.logedUser,direccionUsuario:t.direccionUsuario}})],1),o("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[o("q-btn",{attrs:{fab:"",color:"blue",icon:"far fa-comments"},on:{click:function(){e.mostrarChat=!e.mostrarChat,t.emptyNumberMessages()}}},[t.mensajesSinLeer>0?o("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.mensajesSinLeer))]):t._e()],1)],1),t.mostrarChat?o("q-page-sticky",{attrs:{position:"bottom-right",offset:[t.$q.screen.lt.sm?"30":"90",7]}},[o("q-card",{staticStyle:{"min-height":"45vh","min-width":"350px","max-width":"351px"}},[o("q-card-section",{staticStyle:{"min-height":"5vh"}},[o("div",{staticClass:"row items-center no-wrap"},[o("div",{staticClass:"col"},[o("div",{staticClass:"text-h6"},[t._v("Chat grupal")])]),o("div",{staticClass:"col-auto"},[o("q-btn",{attrs:{color:"accent",outline:"",round:"",icon:"close"},on:{click:function(e){t.mostrarChat=!1}}})],1)])]),o("q-separator",{attrs:{inset:""}}),[o("div",[o("q-virtual-scroll",{ref:"virtualListRef",staticClass:"chatSpace",staticStyle:{height:"300px"},attrs:{items:t.allMensajes,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;e.index;return[o("q-item-section",{staticClass:"q-pr-lg q-pl-lg q-pt-sm q-pb-sm"},["join"===a.tipo.toLowerCase()?o("q-badge",{staticClass:"q-pa-sm",attrs:{color:"grey-7"}},[t._v("\n                  "+t._s(a.usuario)+" se ha conectado\n                ")]):t._e(),a.usuario===t.logedUser.nombre+" "+t.logedUser.apellidos&&"join"!==a.tipo.toLowerCase()?o("q-chat-message",{attrs:{name:a.usuario,text:[a.contenido],sent:"","text-color":"white","bg-color":"green",stamp:t._f("filtrarHoraMensaje")(a)}}):t._e(),a.usuario!==t.logedUser.nombre+" "+t.logedUser.apellidos&&"join"!==a.tipo.toLowerCase()?o("q-chat-message",{attrs:{name:a.usuario,text:[a.contenido],"text-color":"white","bg-color":"blue",stamp:t._f("filtrarHoraMensaje")(a)}}):t._e()],1)]}}],null,!1,844491212)})],1)],o("q-separator",{attrs:{inset:""}}),o("q-card-section",{staticClass:"q-pa-md",staticStyle:{"min-height":"7vh"}},[o("q-input",{attrs:{outlined:"",autogrow:"",color:"green",placeholder:"Enter para enviar"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(e)},click:function(e){t.mostrarEmojis=!1}},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-grin",color:t.mostrarEmojis?"blue":""},on:{click:function(e){t.mostrarEmojis=!t.mostrarEmojis}}})]},proxy:!0},{key:"append",fn:function(){return[""===t.actualMensajeChat?o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-paper-plane",color:"green"}}):t._e(),""!==t.actualMensajeChat?o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-paper-plane",color:"green"},on:{click:t.send}}):t._e()]},proxy:!0}],null,!1,2546511792),model:{value:t.actualMensajeChat,callback:function(e){t.actualMensajeChat=e},expression:"actualMensajeChat"}})],1)],2)],1):t._e(),t.mostrarEmojis?o("q-page-sticky",{attrs:{position:"bottom-right",offset:[t.$q.screen.lt.sm?"30":"340",95]}},[o("VEmojiPicker",{staticClass:"shadow-transition",on:{select:t.selectEmoji}})],1):t._e(),o("q-dialog",{model:{value:t.confirmDisconnect,callback:function(e){t.confirmDisconnect=e},expression:"confirmDisconnect"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("span",{staticClass:"q-ml-sm"},[t._v("¿Estas seguro que deseas desconectarte?")])]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Desconectar",color:"primary",to:"/"},on:{click:t.disconnect}})],1)],1)],1),o("q-ajax-bar",{ref:"bar",attrs:{position:"top",color:"secondary",size:"4px"}})],1)},i=[],s=a("fa84"),r=a.n(s),n=a("967e"),c=a.n(n),l=(a("f576"),a("a481"),a("28a5"),a("cc7d")),d=a.n(l),u=a("c6e1"),m=a.n(u),f=a("79b5"),p=a("d7c8"),h={components:{VEmojiPicker:f["a"]},created:function(){var e=this;return r()(c.a.mark((function t(){var a,o,i,s,r,n,l,d;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userRol=localStorage.getItem("rol").toLowerCase(),t.next=3,e.$axiosJava.get("/private/usuario");case 3:a=t.sent,o=a.data,e.logedUser.email=o.email,e.logedUser.nombre=o.nombre,e.logedUser.apellidos=o.apellidos,e.logedUser.genero=o.genero,e.logedUser.foto=o.fotoPerfil,null!=o.dataNacimiento&&""!==o.dataNacimiento&&(e.logedUser.dataNacimiento=o.dataNacimiento),null!=o.direccion&&""!==o.direccion&&e.parserDirection(o.direccion),e.logedUser.modoInicioSesion=o.modoInicioSesion.toLowerCase(),"estudiante"===e.userRol&&(i=o.fichajes,s=new Date,r=String(s.getDate()).padStart(2,"0"),n=String(s.getMonth()+1).padStart(2,"0"),l=s.getFullYear(),d=l+"-"+n+"-"+r,i.length>0&&!i[i.length-1].horaSalida?d===i[i.length-1].diaFichaje&&(e.isEntradaOrSalida=!1):e.isEntradaOrSalida=!0),e.connectChat(),e.updaterMessages=setInterval((function(){if(e.allMensajes.length>0){var t=e.allMensajes;e.allMensajes=null,e.allMensajes=t}}),3e4),localStorage.getItem("puedeNotificarSonido")?e.puedeNotificarSonido=JSON.parse(localStorage.getItem("puedeNotificarSonido")):(localStorage.setItem("puedeNotificarSonido",JSON.stringify(!0)),e.puedeNotificarSonido=!0),localStorage.getItem("volumenNotificacion")?e.volumenNotificacion=JSON.parse(localStorage.getItem("volumenNotificacion")):(localStorage.setItem("volumenNotificacion",JSON.stringify(5)),e.volumenNotificacion=5),localStorage.getItem("darkMode")?(e.darkMode=JSON.parse(localStorage.getItem("darkMode")),e.cambiarEstadoDarkMode()):(localStorage.setItem("darkMode",JSON.stringify(!1)),e.darkMode=!1);case 19:case"end":return t.stop()}}),t)})))()},data:function(){return{volumenNotificacion:null,puedeNotificarSonido:null,mostrarEmojis:!1,isEntradaOrSalida:!0,updaterMessages:null,mensajesSinLeer:0,urlBackendSocket:"https://api.tresee.app",subscripcion:"",stompClient:null,socket:null,allMensajes:[],actualMensajeChat:"",mostrarChat:!1,confirmDisconnect:!1,userRol:null,firstEntry:!0,scrollIndexNumber:99999,left:!1,darkMode:!1,logedUser:{email:"",nombre:"Tu",apellidos:"Nombre",foto:""},direccionUsuario:{calle:"",numero:null,zip:null,ciudad:"",pais:""},menuLinks:[{title:"Dashboard",rolNeeded:"profesor",link:"/profesor/dashboard",icon:"fas fa-chart-pie"},{title:"Estudiantes",rolNeeded:"profesor",link:"/profesor/estudiantes",icon:"fas fa-user-graduate"},{title:"Empresas",rolNeeded:"profesor",link:"/profesor/empresas",icon:"fas fa-city"},{title:"Dashboard",rolNeeded:"estudiante",link:"/estudiante/dashboard",icon:"fas fa-chart-pie"},{title:"Fichajes",rolNeeded:"estudiante",link:"/estudiante/fichajes",icon:"fas fa-clipboard-check"}]}},methods:{connectChat:function(){this.socket=new d.a(this.urlBackendSocket+"/socket"),this.stompClient=m.a.over(this.socket),this.stompClient.connect({},this.onConnected,this.onError)},onConnected:function(){this.subscripcion=this.stompClient.subscribe("/topic",this.onMessageRecived);var e={contenido:"",usuario:this.logedUser.nombre+" "+this.logedUser.apellidos,tipo:"JOIN"};this.stompClient.send("/chat/chat.send",JSON.stringify(e),{})},onError:function(){console.log("NO SE HA PODIDO CONECTAR")},onMessageRecived:function(e){if(e=JSON.parse(e.body),"join"===e.tipo.toLowerCase())e.usuario!==this.logedUser.nombre+" "+this.logedUser.apellidos&&this.mostrarNotificacion(e.usuario+" se ha conectado al chat"),this.allMensajes.push(e);else{this.mostrarChat||this.mensajesSinLeer++;var t=new Date;e.tiempo={hora:t.getHours(),minutos:t.getMinutes()},this.allMensajes.push(e),e.usuario!==this.logedUser.nombre+" "+this.logedUser.apellidos&&this.mostrarNotificacion("Has recibido un nuevo mensaje")}this.firstEntry?this.firstEntry=!1:this.$refs.virtualListRef.scrollTo(this.scrollIndexNumber)},notificarSonido:function(){this.puedeNotificarSonido&&(p["volume"](this.volumenNotificacion/10),p("submarine"))},guardarAjustesVolumen:function(){localStorage.setItem("volumenNotificacion",JSON.stringify(this.volumenNotificacion))},guardarAjustesNotificarSonido:function(){localStorage.setItem("puedeNotificarSonido",JSON.stringify(this.puedeNotificarSonido))},guardarAjusteDarkMode:function(){localStorage.setItem("darkMode",JSON.stringify(this.darkMode)),this.cambiarEstadoDarkMode()},cambiarEstadoDarkMode:function(){this.$q.dark.set(this.darkMode)},send:function(){var e=this.actualMensajeChat.replace(/\s/g,"");if(this.stompClient&&this.stompClient.connected)if(""!==e){var t={contenido:this.actualMensajeChat,usuario:this.logedUser.nombre+" "+this.logedUser.apellidos,tipo:"CHAT"};this.stompClient.send("/chat/chat.send",JSON.stringify(t),{}),this.actualMensajeChat="",this.mostrarEmojis=!1}else this.actualMensajeChat=""},emptyNumberMessages:function(){this.mensajesSinLeer=0},selectEmoji:function(e){this.actualMensajeChat+=e.data},disconnect:function(){this.stompClient&&this.stompClient.disconnect((function(){return console.log("DISCONNECT")}),{}),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("rol")},parserDirection:function(e){e=e.replace(/\s/g,"");var t=e.split(",");this.direccionUsuario.calle=t[0],this.direccionUsuario.numero=parseInt(t[1]),this.direccionUsuario.zip=parseInt(t[2]),t[3]&&(this.direccionUsuario.ciudad=t[3]),t[4]&&(this.direccionUsuario.pais=t[4])},mostrarNotificacion:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"indigo",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"top-right";this.notificarSonido(),this.$q.notify({color:t,message:e,position:o,timeout:5e3,multiLine:a})},fichar:function(){this.isEntradaOrSalida?this.ficharEntrada():this.ficharSalida()},ficharEntrada:function(){var e=this;return r()(c.a.mark((function t(){var a;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axiosJava.post("/private/estudiante/fichaje");case 2:a=t.sent,200===a.status?e.mostrarNotificacion("Fichaje correcto! Bienvenido al trabajo","green",!1,"bottom-left"):e.mostrarNotificacion(["Ha habido un error: ",a.data],"red-10",!0,"bottom-left"),e.isEntradaOrSalida=!1;case 5:case"end":return t.stop()}}),t)})))()},ficharSalida:function(){var e=this;return r()(c.a.mark((function t(){var a;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axiosJava.put("/private/estudiante/fichaje");case 2:a=t.sent,200===a.status?e.mostrarNotificacion("Saliendo del trabajo. Que tengas un buen dia","green",!1,"bottom-left"):e.mostrarNotificacion(["Ha habido un error: ",a.data],"red-10",!0,"bottom-left"),e.isEntradaOrSalida=!0;case 5:case"end":return t.stop()}}),t)})))()}},filters:{filtrarHoraMensaje:function(e){var t=e.tiempo,a=new Date,o=!0;return t.hora===a.getHours()&&(o=!(t.minutos>=a.getMinutes()-5&&t.minutos<=a.getMinutes())),o?e.tiempo.minutos<10?e.tiempo.hora+":0"+e.tiempo.minutos:e.tiempo.hora+":"+e.tiempo.minutos:t.minutos===a.getMinutes()?"ahora":a.getMinutes()-t.minutos+" min"}}},g=h,b=(a("073b"),a("2877")),v=a("4d5a"),q=a("e359"),C=a("65c6"),S=a("9c40"),k=a("6ac5"),N=a("58a8"),j=a("4e73"),M=a("1c1c"),w=a("0170"),y=a("eb85"),x=a("66e5"),_=a("4074"),E=a("0016"),I=a("9564"),U=a("c1d0"),Q=a("9404"),O=a("cb32"),D=a("068f"),L=a("05c0"),J=a("09e3"),A=a("de5e"),R=a("f09f"),H=a("a370"),T=a("a12b"),$=a("8169"),F=a("27f9"),P=a("24e8"),z=a("4b7e"),B=a("7ea5"),V=a("714f"),G=a("7f67"),K=a("eebe"),W=a.n(K),X=Object(b["a"])(g,o,i,!1,null,"430c49a4",null);t["default"]=X.exports;W()(X,"components",{QLayout:v["a"],QHeader:q["a"],QToolbar:C["a"],QBtn:S["a"],QToolbarTitle:k["a"],QBadge:N["a"],QMenu:j["a"],QList:M["a"],QItemLabel:w["a"],QSeparator:y["a"],QItem:x["a"],QItemSection:_["a"],QIcon:E["a"],QToggle:I["a"],QSlider:U["a"],QDrawer:Q["a"],QAvatar:O["a"],QImg:D["a"],QTooltip:L["a"],QPageContainer:J["a"],QPageSticky:A["a"],QCard:R["a"],QCardSection:H["a"],QVirtualScroll:T["a"],QChatMessage:$["a"],QInput:F["a"],QDialog:P["a"],QCardActions:z["a"],QAjaxBar:B["a"]}),W()(X,"directives",{Ripple:V["a"],ClosePopup:G["a"]})},"073b":function(e,t,a){"use strict";var o=a("153c"),i=a.n(o);i.a},"153c":function(e,t,a){}}]);