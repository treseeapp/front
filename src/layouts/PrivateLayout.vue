<template>
  <q-layout view="hHh LpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" class="sm" @click="left = !left"/>
        <q-btn dense flat round icon="menu" class="xs" @click="left = !left"/>
        <q-toolbar-title class="">
        <span class="text-h4 font-prime-regular q-pl-sm vertical-middle">
            tresee
          </span>
          <q-badge class="" color="white" text-color="white" outline>
            beta
          </q-badge>
        </q-toolbar-title>

        <q-btn flat @click="fichar" icon="fas fa-id-badge"
               :label="(isEntradaOrSalida)?'Fichar entrada':'Fichar salida'" v-if="userRol === 'estudiante'"/>
        <q-btn icon="settings" class="q-ml-md" flat round>
          <q-menu>
            <q-list>
              <q-item-label header class="q-pb-xs">Ajustes de sistema</q-item-label>
              <q-separator inset=""/>

              <q-item class="flex flex-center">
                <q-item-section>
                  <q-item-label>Tema</q-item-label>
                </q-item-section>
                <q-icon name="wb_sunny"/>
                <q-toggle color="blue" v-model="darkMode" @input="guardarAjusteDarkMode"/>
                <q-icon name="nights_stay"/>
              </q-item>

              <q-item-label class="q-mt-md q-pb-xs" header>Ajustes de sonido</q-item-label>
              <q-separator inset=""/>
              <q-item class="row">

                <q-item-section>
                  <q-item-label>Notificaciones</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-toggle class="flex justify-end" color="blue" v-model="puedeNotificarSonido"
                            @input="guardarAjustesNotificarSonido"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section side>
                  <q-icon color="blue-5" name="volume_down"/>
                </q-item-section>
                <q-item-section>
                  <q-slider
                    v-model="volumenNotificacion"
                    :min="1"
                    :max="10"
                    label
                    color="blue-5"
                    @input="guardarAjustesVolumen"
                    :disable="!puedeNotificarSonido"
                  />
                </q-item-section>
                <q-item-section side>
                  <q-icon color="blue-5" name="volume_up"/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <div class="row q-mt-md">
        <div class="col-2"></div>
        <div class="col-8 ">
          <div class="row flex-center q-mb-sm">
            <q-avatar rounded size="50px" class="">
              <q-img :src="logedUser.foto" :ratio="1"
                     placeholder-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr1v58ICPpgv8t4zeWFfmJqBre8Xedi8agxMpKEHR-G5L06sic"
                     spinner-color="primary"/>
            </q-avatar>
          </div>
          <div class="row flex-center ">
            <span class="text-h6 font-prime-regular">{{logedUser.nombre}}</span>
          </div>
          <q-separator class="q-mt-sm q-mb-sm"/>
          <div class="row flex-center justify-evenly q-mb-sm">
            <q-btn outline icon="person" color="indigo" to="/account">
              <q-tooltip content-class="bg-indigo" :delay="300" :offset="[10, 10]">
                Account
              </q-tooltip>
            </q-btn>

            <q-btn icon="lock" color="negative" @click="confirmDisconnect = true" outline>
              <q-tooltip content-class="bg-red" :delay="300" :offset="[10, 10]">
                Log Out
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </div>

      <q-separator class="q-mt-sm q-mb-sm"/>

      <q-list>
        <q-item clickable v-ripple v-for="link in menuLinks" :to="link.link" v-if="link.rolNeeded === userRol">
          <q-item-section avatar top>
            <q-icon :name="link.icon" color="secondary" size="2em"/>
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1" style="font-size: 1.2em">{{link.title}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :usuarioLogged="logedUser" :direccionUsuario="direccionUsuario"/>
    </q-page-container>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab color="blue" icon="far fa-comments" @click="()=>{
          this.mostrarChat = !this.mostrarChat
          emptyNumberMessages()
        }">
        <q-badge color="red" floating v-if="mensajesSinLeer>0">{{mensajesSinLeer}}</q-badge>
      </q-btn>

    </q-page-sticky>


    <q-page-sticky position="bottom-right" :offset="[$q.screen.lt.sm?'30':'90', 7]" v-if="mostrarChat">
      <q-card class="" style="min-height: 45vh; min-width: 350px; max-width: 351px">
        <q-card-section style="min-height: 5vh">
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">Chat grupal</div>
            </div>
            <div class="col-auto">
              <q-btn color="accent" @click="mostrarChat=false" outline round icon="close"/>
            </div>
          </div>
        </q-card-section>
        <q-separator inset=""/>

        <template>
          <div>
            <q-virtual-scroll
              ref="virtualListRef"
              style="height: 300px;"
              class="chatSpace"
              :items="allMensajes"
              separator
            >
              <template v-slot="{ item, index }">
                <q-item-section class="q-pr-lg q-pl-lg q-pt-sm q-pb-sm">
                  <q-badge class="q-pa-sm" color="grey-7" v-if="item.tipo.toLowerCase()==='join'">
                    {{item.usuario}} se ha conectado
                  </q-badge>

                  <q-chat-message
                    v-if="(item.usuario === logedUser.nombre+' '+logedUser.apellidos) && item.tipo.toLowerCase()!=='join'"
                    :name="item.usuario"
                    :text="[item.contenido]"
                    sent
                    text-color="white"
                    bg-color="green"
                    :stamp=" item | filtrarHoraMensaje"
                  />
                  <q-chat-message
                    v-if="(item.usuario !== logedUser.nombre+' '+logedUser.apellidos) && item.tipo.toLowerCase()!=='join'"
                    :name="item.usuario"
                    :text="[item.contenido]"
                    text-color="white"
                    bg-color="blue"
                    :stamp=" item | filtrarHoraMensaje"
                  />
                </q-item-section>

              </template>
            </q-virtual-scroll>
          </div>
        </template>

        <q-separator inset=""/>
        <q-card-section class="q-pa-md" style="min-height: 7vh">
          <q-input outlined autogrow color="green" v-model="actualMensajeChat" placeholder="Enter para enviar"
                   @keyup.enter="send" @click="mostrarEmojis=false">
            <template v-slot:prepend>
              <q-icon name="far fa-grin" class="cursor-pointer" :color="(mostrarEmojis)?'blue':''"
                      @click="mostrarEmojis=!mostrarEmojis"/>
            </template>
            <template v-slot:append>
              <q-icon name="far fa-paper-plane" class="cursor-pointer" color="green" v-if="actualMensajeChat===''"/>
              <q-icon name="far fa-paper-plane" class="cursor-pointer" color="green" @click="send"
                      v-if="actualMensajeChat!==''"/>
            </template>
          </q-input>
        </q-card-section>
      </q-card>

    </q-page-sticky>

    <q-page-sticky position="bottom-right" :offset="[$q.screen.lt.sm?'30':'340', 95]" v-if="mostrarEmojis">
      <VEmojiPicker @select="selectEmoji" class="shadow-transition"/>
    </q-page-sticky>
    <q-dialog v-model="confirmDisconnect">
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">¿Estas seguro que deseas desconectarte?</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup/>
          <q-btn flat label="Desconectar" color="primary" v-close-popup to="/" @click="disconnect"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-ajax-bar
      ref="bar"
      position="top"
      color="secondary"
      size="4px"
    />
  </q-layout>
</template>

<script>
  import SockJS from "sockjs-client";
  import Stomp from "webstomp-client";
  import VEmojiPicker from 'v-emoji-picker';
  import * as playAlert from 'alert-sound-notify';

  export default {
    components: {
      VEmojiPicker
    },
    async created() {

      this.userRol = localStorage.getItem('rol').toLowerCase();

      const response = await this.$axiosJava.get('/private/usuario');
      const userRecived = response.data;

      this.logedUser.email = userRecived.email;
      this.logedUser.nombre = userRecived.nombre;
      this.logedUser.apellidos = userRecived.apellidos;
      this.logedUser.genero = userRecived.genero;
      this.logedUser.foto = userRecived.fotoPerfil
      if (userRecived.dataNacimiento != null && userRecived.dataNacimiento !== '') this.logedUser.dataNacimiento = userRecived.dataNacimiento;
      if (userRecived.direccion != null && userRecived.direccion !== '') {
        this.parserDirection(userRecived.direccion);
      }
      this.logedUser.modoInicioSesion = userRecived.modoInicioSesion.toLowerCase();

      if (this.userRol === 'estudiante') {
        const fichajes = userRecived.fichajes;
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        const fecha = yyyy + '-' + mm + '-' + dd;
        if (fichajes.length > 0 && !fichajes[fichajes.length - 1].horaSalida) {
          if (fecha === fichajes[fichajes.length - 1].diaFichaje) {
            // le corresponde fichar salida
            this.isEntradaOrSalida = false;
          } else {
            // Tiene que fichar entrada ya que el ultimo fichaje es de otro dia
          }
        } else {
          // corresponde fichar entrada
          this.isEntradaOrSalida = true;
        }
      }

      this.connectChat();
      /*
      * Hacemos esto ya que asi se iran actualizando los mensajes a medida que vaya pasando cada minuto
      * Asi se podrá actualizar la marca de tiempo del mensaje, ya que utiliza un filter, y los filters a no ser
      * que modifiques una variable o interactues, no se actualiza como se muestra
      * */
      this.updaterMessages = setInterval(() => {
        if (this.allMensajes.length > 0) {
          const copy = this.allMensajes;
          this.allMensajes = null;
          this.allMensajes = copy;
        }
      }, 1000 * 30);


      if (localStorage.getItem('puedeNotificarSonido')) {
        this.puedeNotificarSonido = JSON.parse(localStorage.getItem('puedeNotificarSonido'));
      } else {
        // PONEMOS UNO POR DEFECTO
        localStorage.setItem('puedeNotificarSonido', JSON.stringify(true));
        this.puedeNotificarSonido = true;
      }

      if (localStorage.getItem('volumenNotificacion')) {
        this.volumenNotificacion = JSON.parse(localStorage.getItem('volumenNotificacion'));
      } else {
        // PONEMOS POR DEFECTO
        localStorage.setItem('volumenNotificacion', JSON.stringify(5));
        this.volumenNotificacion = 5
      }

      if (localStorage.getItem('darkMode')) {
        this.darkMode = JSON.parse(localStorage.getItem('darkMode'));
        this.cambiarEstadoDarkMode();
      } else {
        // PONEMOS POR DEFECTO
        localStorage.setItem('darkMode', JSON.stringify(false));
        this.darkMode = false;
      }

    },
    data() {
      return {
        volumenNotificacion: null,
        puedeNotificarSonido: null,
        mostrarEmojis: false,
        isEntradaOrSalida: true,
        updaterMessages: null,
        mensajesSinLeer: 0,
        urlBackendSocket: process.env.API_JAVA,
        subscripcion: '',
        stompClient: null,
        socket: null,
        allMensajes: [],
        actualMensajeChat: '',
        mostrarChat: false,
        confirmDisconnect: false,
        userRol: null,
        firstEntry: true,
        scrollIndexNumber: 99999,
        left: false,
        darkMode: false,
        logedUser: {
          email: '',
          nombre: 'Tu',
          apellidos: 'Nombre',
          foto: ''
        },
        direccionUsuario: {
          calle: '',
          numero: null,
          zip: null,
          ciudad: '',
          pais: ''
        },
        menuLinks: [
          /*
          * Profesor links
          * */
          {
            title: 'Dashboard',
            rolNeeded: 'profesor',
            link: '/profesor/dashboard',
            icon: 'fas fa-chart-pie'
          },
          {
            title: 'Estudiantes',
            rolNeeded: 'profesor',
            link: '/profesor/estudiantes',
            icon: 'fas fa-user-graduate'
          },
          {
            title: 'Empresas',
            rolNeeded: 'profesor',
            link: '/profesor/empresas',
            icon: 'fas fa-city'
          },
          /*
          * Estudiante links
          * */
          {
            title: 'Dashboard',
            rolNeeded: 'estudiante',
            link: '/estudiante/dashboard',
            icon: 'fas fa-chart-pie'
          },
          {
            title: 'Fichajes',
            rolNeeded: 'estudiante',
            link: '/estudiante/fichajes',
            icon: 'fas fa-clipboard-check'
          }
        ]
      }
    },
    methods: {
      connectChat() {
        this.socket = new SockJS(this.urlBackendSocket + "/socket");
        this.stompClient = Stomp.over(this.socket);
        this.stompClient.connect({}, this.onConnected, this.onError);
      },
      onConnected() {
        /* Si ha conectado correctamente a la conexión del Socket
         * Se "subscribe" y cada vez que se realice un nuevo evento en el
         * servicio Socket se ejecutará la función de CallBack onMessageRecived
         * */
        // TODO hay que hacer un unsubscribe cuando se desconecte
        this.subscripcion = this.stompClient.subscribe('/topic', this.onMessageRecived);

        let messageSend = {
          contenido: '',
          usuario: this.logedUser.nombre + ' ' + this.logedUser.apellidos,
          tipo: 'JOIN'
        };
        this.stompClient.send("/chat/chat.send", JSON.stringify(messageSend), {}); // {} vacios para poner headers
      },
      onError() {
        console.log("NO SE HA PODIDO CONECTAR")
      },
      onMessageRecived(messageRecived) {
        messageRecived = JSON.parse((messageRecived.body));
        if (messageRecived.tipo.toLowerCase() === "join") {
          if (messageRecived.usuario !== this.logedUser.nombre + ' ' + this.logedUser.apellidos) {
            this.mostrarNotificacion(messageRecived.usuario + " se ha conectado al chat")
          }
          this.allMensajes.push(messageRecived);
        } else {
          if (!this.mostrarChat) {
            this.mensajesSinLeer++;
          }

          const hora = new Date();
          messageRecived.tiempo = {
            hora: hora.getHours(),
            minutos: hora.getMinutes()
          };

          this.allMensajes.push(messageRecived);
          if (messageRecived.usuario !== this.logedUser.nombre + ' ' + this.logedUser.apellidos) {
            this.mostrarNotificacion("Has recibido un nuevo mensaje");
          }
        }

        if (this.firstEntry) {
          this.firstEntry = false;
        } else {
          this.$refs.virtualListRef.scrollTo(this.scrollIndexNumber);
        }
      },
      notificarSonido() {
        if (this.puedeNotificarSonido) {
          playAlert.volume(this.volumenNotificacion / 10);
          playAlert('submarine')
        }
      },
      guardarAjustesVolumen() {
        localStorage.setItem('volumenNotificacion', JSON.stringify(this.volumenNotificacion));
      },
      guardarAjustesNotificarSonido() {
        localStorage.setItem('puedeNotificarSonido', JSON.stringify(this.puedeNotificarSonido));
      },
      guardarAjusteDarkMode() {
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
        this.cambiarEstadoDarkMode();
      },
      cambiarEstadoDarkMode() {
        this.$q.dark.set(this.darkMode);
      },
      send() {
        const blanco = this.actualMensajeChat.replace(/\s/g, '');
        if (this.stompClient && this.stompClient.connected) {
          if (blanco !== '') {

            let messageSend = {
              contenido: this.actualMensajeChat,
              usuario: this.logedUser.nombre + ' ' + this.logedUser.apellidos,
              tipo: 'CHAT'
            };

            this.stompClient.send("/chat/chat.send", JSON.stringify(messageSend), {}); // {} vacios para poner headers
            this.actualMensajeChat = '';
            this.mostrarEmojis = false
          } else {
            this.actualMensajeChat = ''
          }
        }
      },
      emptyNumberMessages() {
        this.mensajesSinLeer = 0;
      },
      selectEmoji(emoji) {
        this.actualMensajeChat += emoji.data
      },
      disconnect() {
        if (this.stompClient) {
          this.stompClient.disconnect(() => console.log("DISCONNECT"), {})
        }
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('rol')
      },
      parserDirection(dir) {
        dir = dir.replace(/\s/g, '');
        const piezas = dir.split(',');

        this.direccionUsuario.calle = piezas[0];
        this.direccionUsuario.numero = parseInt(piezas[1]);
        this.direccionUsuario.zip = parseInt(piezas[2]);
        if (piezas[3]) {
          this.direccionUsuario.ciudad = piezas[3];
        }
        if (piezas[4]) {
          this.direccionUsuario.pais = piezas[4];
        }
      },
      mostrarNotificacion(texto, color = 'indigo', multiLine = false, position = 'top-right') {
        this.notificarSonido();
        this.$q.notify({
          color: color,
          message: texto,
          position: position,
          timeout: 5000,
          multiLine: multiLine
        })
      },
      fichar() {
        if (this.isEntradaOrSalida) {
          this.ficharEntrada();
        } else {
          this.ficharSalida()
        }
      },
      async ficharEntrada() {
        const response = await this.$axiosJava.post('/private/estudiante/fichaje');
        if (response.status === 200) {
          //OK
          this.mostrarNotificacion("Fichaje correcto! Bienvenido al trabajo", "green", false, 'bottom-left');
        } else {
          // NO OK
          this.mostrarNotificacion(["Ha habido un error: ", response.data], "red-10", true, 'bottom-left');
        }
        this.isEntradaOrSalida = false;

      },
      async ficharSalida() {
        const response = await this.$axiosJava.put('/private/estudiante/fichaje');
        if (response.status === 200) {
          //OK
          this.mostrarNotificacion("Saliendo del trabajo. Que tengas un buen dia", "green", false, 'bottom-left');
        } else {
          // NO OK
          this.mostrarNotificacion(["Ha habido un error: ", response.data], "red-10", true, 'bottom-left');
        }
        this.isEntradaOrSalida = true;
      },
    },
    filters: {
      filtrarHoraMensaje(mensaje) {
        const time = mensaje.tiempo;
        const actual = new Date();
        let boolean = true;

        if (time.hora === actual.getHours()) {
          boolean = !((time.minutos >= (actual.getMinutes() - 5)) && (time.minutos <= actual.getMinutes()));
        }

        if (boolean) {
          if (mensaje.tiempo.minutos < 10) {
            return mensaje.tiempo.hora + ':0' + mensaje.tiempo.minutos
          } else {
            return mensaje.tiempo.hora + ':' + mensaje.tiempo.minutos
          }
        } else {
          if (time.minutos === actual.getMinutes()) {
            return 'ahora'
          }
          return actual.getMinutes() - time.minutos + ' min'
        }
      }
    }
  }
</script>

<style scoped>
  .chatSpace::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  .chatSpace::-webkit-scrollbar-track {
    background: #ffffff;
  }

  /* Handle */
  .chatSpace::-webkit-scrollbar-thumb {
    background: #418847;
  }

  /* Handle on hover */
  .chatSpace::-webkit-scrollbar-thumb:hover {
    background: #2b572b;
  }

  scrollbar {
    width: 20px;
  }
</style>
