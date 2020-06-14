<template>

  <q-layout view="hHh lpr fFf">

    <q-header reveal bordered class="bg-white text-white header-scroll-mobile" v-if="$q.screen.lt.md"
              style="height: 55px">
      <q-toolbar class="">
        <q-btn dense flat round icon="menu" style="font-size: 20px" color="black" @click="left = !left"
               class="q-mt-xs"/>
        <q-toolbar-title align="right" class="q-mt-xs">
          <span class="font-prime text-h4 text-black q-mr-lg">Tresee</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay elevated
              behavior="mobile"
              v-if="$q.screen.lt.md"
              :width="220"
              :breakpoint="400">

      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding class="nav-mobile">
          <a href="#header">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-home"/>
              </q-item-section>
              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
          </a>

          <a href="#about">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star"/>
              </q-item-section>

              <q-item-section>
                Sobre Tresee
              </q-item-section>
            </q-item>
          </a>

          <a href="#services">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send"/>
              </q-item-section>

              <q-item-section>
                Servicios
              </q-item-section>
            </q-item>
          </a>

          <a href="#features">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="far fa-file-code"/>
              </q-item-section>

              <q-item-section>
                Tecnologias
              </q-item-section>
            </q-item>
          </a>

          <a href="#team">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-user-friends"/>
              </q-item-section>

              <q-item-section>
                Equipo
              </q-item-section>
            </q-item>
          </a>

          <a href="#faq">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-question-circle"/>
              </q-item-section>

              <q-item-section>
                F.A.Q.
              </q-item-section>
            </q-item>
          </a>

          <a href="#contact">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts"/>
              </q-item-section>
              <q-item-section>
                Contacto
              </q-item-section>
            </q-item>
          </a>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top"
             src="~/assets/bg-menu-mobile.svg"
             :img-style="{ opacity:0.25}"
             style="height: 150px">
        <div class="absolute-bottom bg-transparent row justify-center">

          <div v-if="isLoged" class="row justify-center">
            <q-avatar size="62px">
              <q-img
                :src="usuarioLogged.foto"
                :ratio="1"
                class="cursor-pointer"
                spinner-color="primary"
                placeholder-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr1v58ICPpgv8t4zeWFfmJqBre8Xedi8agxMpKEHR-G5L06sic"
                @click=""/>
            </q-avatar>
            <div class="text-h6 col-12 text-center text-black q-mt-md">{{usuarioLogged.nombre}}</div>
          </div>

          <div class="row items-center q-mb-lg q-pb-md justify-center" v-if="!isLoged">
            <a class="get-started-mobile cursor-pointer" @click="loginDialog=true">Iniciar Sesión</a>
          </div>

          <q-menu style="width: 320px" v-if="isLoged">
            <q-list style="width: 220px">
              <q-item clickable v-close-popup :to="(usuarioLogged.rol=='profesor')?'/profesor':'/estudiante'">
                <q-item-section avatar>
                  <q-avatar icon="fas fa-chart-line" text-color="black"/>
                </q-item-section>
                <q-item-section class="text-black">Dashboard</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/account">
                <q-item-section avatar>
                  <q-avatar icon="far fa-user" text-color="black"/>
                </q-item-section>
                <q-item-section class="text-black">Tu cuenta</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="loginDialog=true" class="text-black">
                <q-item-section avatar>
                  <q-avatar icon="supervisor_account"/>
                </q-item-section>
                <q-item-section>Cambiar de cuenta</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="disconnect">
                <q-item-section avatar class="text-black">
                  <q-avatar icon="exit_to_app"/>
                </q-item-section>
                <q-item-section class="text-black">
                  Cerrar sesión
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </q-img>
    </q-drawer>

    <q-header class="row bg-white q-pa-md justify-around items-center header-scroll" v-if="!$q.screen.lt.md"
              id="header">
      <div class="logo text-h1">
        <h1 class="text-light "><a href="/"><span class="font-prime-light">Tresee</span></a></h1>
      </div>
      <nav class="row nav-menu items-center">
        <ul class="row items-center justify-around">
          <li>
            <a href="#header" class="text-center">Inicio
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li class="row justify-center">
            <a href="#about" class="text-center">Sobre Tresee
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#services">Servicios
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#features">Tecnologias
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#team">Equipo
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#faq">F.A.Q.
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#contact">Contacto
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li class="get-started cursor-pointer" v-if="!isLoged"><a @click="loginDialog=true">Iniciar Sesión</a></li>
        </ul>

        <q-btn flat v-if="isLoged" class="q-ml-lg q-pa-lg">
          <q-avatar size="42px">
            <q-img
              :src="usuarioLogged.foto"
              :ratio="1"
              spinner-color="primary"
              placeholder-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr1v58ICPpgv8t4zeWFfmJqBre8Xedi8agxMpKEHR-G5L06sic"/>
          </q-avatar>
          <q-menu style="width: 500px">
            <q-list style="width: 230px">
              <q-item clickable v-close-popup :to="(usuarioLogged.rol=='profesor')?'/profesor':'/estudiante'">
                <q-item-section avatar>
                  <q-avatar icon="fas fa-chart-line" text-color="black"/>
                </q-item-section>
                <q-item-section class="text-black">Dashboard</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/account">
                <q-item-section avatar>
                  <q-avatar icon="far fa-user" text-color="black"/>
                </q-item-section>
                <q-item-section class="text-black">Tu cuenta</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="loginDialog=true">
                <q-item-section avatar>
                  <q-avatar icon="supervisor_account"/>
                </q-item-section>
                <q-item-section>Cambiar de cuenta</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="disconnect">
                <q-item-section avatar>
                  <q-avatar icon="exit_to_app"/>
                </q-item-section>
                <q-item-section>
                  Cerrar sesión
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </nav>
    </q-header>

    <q-dialog class="justify-center" v-model="loginDialog" position="right">
      <q-card outlined>
        <q-card-section class="q-mb-md items-center q-pb-none text-center" style="min-width: 360px">
          <q-card-section>
            <div class="text-h5">Iniciar sesión</div>
          </q-card-section>
          <q-form
            @submit="login"
            class="q-gutter-md q-mt-lg"
          >

            <q-input outlined v-model="usuarioLogin.email" label="Email" type="email" color="secondary"
                     class="q-mb-md"
                     lazy-rules
                     :rules="[val => val && val.length > 0 || '']">
              <template v-slot:prepend>
                <q-icon name="alternate_email"/>
              </template>
            </q-input>

            <q-input outlined v-model="usuarioLogin.password" label="Contraseña" color="secondary"
                     :type="isPwd1 ? 'password' : 'text'" class="q-mb-md"
                     lazy-rules
                     :rules="[val => val && val.length > 0 || '']"
            >
              <template v-slot:prepend>
                <q-icon name="fas fa-key"/>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd1 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd1 = !isPwd1"
                />
              </template>
            </q-input>

            <div class="text-center ">
              <q-btn class="q-mt-md full-width q-mb-lg" type="submit" color="secondary" label="Iniciar sesión"/>
            </div>
            <div class="row">
              <div class="text-center q-pa-sm col-6">
                <a :href="authGoogleURL" style="text-decoration: none">
                  <q-btn color="red-8" class="full-width">
                    <q-icon name="fab fa-google" class="q-mr-md q-mt-xs" size="1.4rem"/>
                    GOOGLE
                  </q-btn>
                </a>
              </div>
              <div class="text-center q-pa-sm col-6">
                <a :href="authFacebookURL" style="text-decoration: none">
                  <q-btn style="background: #3b5998; color: white" class="full-width">
                    <q-icon name="fab fa-facebook-square" class="q-mr-md q-mt-xs" size="1.4rem"/>
                    FACEBOOK
                  </q-btn>
                </a>
              </div>
            </div>
            <q-separator inset/>
            <div class="column">
              <p class="text-bold" style="font-size: 15px" @click="$router.push('/register')"
                 :style="{ cursor: 'pointer'}">¿ No tienes cuenta ?</p>
              <p class="text-bold text-grey-9" style="font-size: 15px" @click="$router.push('/forgot')"
                 :style="{ cursor: 'pointer'}">¿
                Has olvidado tu contraseña ?</p>
            </div>
          </q-form>

        </q-card-section>
      </q-card>
    </q-dialog>

    <q-scroll-observer @scroll="onScroll"/>

    <q-page-container>
      <router-view/>
    </q-page-container>


    <!-- Inicio Footer -->
    <footer id="footer">
      <div class="row wrap justify-around">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
          <div class="copyright">
            Copyright <strong>Tresee</strong>. Todos los derechos reservados.
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-md">
          <nav class="footer-links text-center pt-2 pt-lg-0">
            <a href="#inicio" class="scrollto">Inicio</a>
            <a href="#about" class="scrollto">Sobre Tresee</a>
            <a class="cursor-pointer" @click="$router.push('/terminos')">Políticas y Términos de uso</a>
          </nav>
        </div>
      </div>
    </footer>
    <!-- Fin Footer -->

  </q-layout>
</template>

<script>

  export default {
    name: 'MainLayout',
    async created() {
      this.$q.dark.set(false);

      if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken") && localStorage.getItem("rol")) {
        this.isLoged = true;
        const response = await this.$axiosJava.get('/private/usuario');
        const userRecived = response.data;
        this.usuarioLogged.nombre = userRecived.nombre;
        const responseFoto = await this.$axiosJava.get('/private/usuario/foto');
        if (responseFoto.status === 200) {
          this.usuarioLogged.foto = responseFoto.data;
        }
        this.usuarioLogged.rol = localStorage.getItem('rol').toLowerCase();
      }
    },
    computed: {
      layout() {
        return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
      }
    },
    data() {
      return {
        model: 'home',
        tab: 'mails',
        usuarioLogged: {
          nombre: '',
          foto: '',
          rol: null
        },
        isLoged: false,
        authGoogleURL: process.env.API_NODE + '/auth/google',
        authFacebookURL: process.env.API_NODE + '/auth/facebook',
        loginDialog: false,
        usuarioLogin: {
          email: '',
          password: ''
        },
        isPwd1: true,
        left: false,
      }
    },
    methods: {

      async login() {

        const response = await this.$axiosNode.post('/auth/login', this.usuarioLogin);

        if (response.status === 401) {
          this.showNotification("El email o la contraseña es incorrecta.", "error", "negative");
        } else if (response.status === 200) {
          const token = response.data.accessToken;
          const refresh = response.data.refreshToken;
          const rol = response.data.rol;

          localStorage.setItem("accessToken", token);
          localStorage.setItem("refreshToken", refresh);
          localStorage.setItem("rol", rol);

          if (rol.toLowerCase() === 'estudiante') {
            await this.$router.push('/estudiante')
          } else {
            await this.$router.push('/profesor')
          }
        }
      },
      onScroll(info) {

        if (info.position >= 100) {
          if (this.$q.screen.lt.md) {
            document.querySelector(".header-scroll-mobile").classList.add("shadow-3");
          } else if (!this.$q.screen.lt.md) {

            document.querySelector(".header-scroll").style.height = "80px";
            document.querySelector(".header-scroll").classList.add("shadow-3");
          }

        } else {

          if (this.$q.screen.lt.md) {
            document.querySelector(".header-scroll-mobile").classList.remove("shadow-3");
          } else if (!this.$q.screen.lt.md) {
            document.querySelector(".header-scroll").style.height = "100px";
            document.querySelector(".header-scroll").classList.remove("shadow-3");
          }
        }
      },
      showNotification(content, icon, color) {
        this.$q.notify({
          message: content,
          color: color,
          icon: icon,
        })
      },
      disconnect() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('rol')
        this.isLoged = false;

      },
    },
  }
</script>

<style scoped>

  /*--------------------------------------------------------------
  # General
  --------------------------------------------------------------*/
  body {
    font-family: "Open Sans", sans-serif;
    color: #444444;
  }

  a {
    color: #3498db;
  }

  a:hover {
    color: #5faee3;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway", sans-serif;
  }

  /*--------------------------------------------------------------
  # Header
  --------------------------------------------------------------*/
  #header {
    position: fixed;
    height: 100px;
    z-index: 997;
    transition: all 0.5s;
  }

  #header .logo h1 {
    font-size: 36px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 1px;
  }

  #header .logo h1 a, #header .logo h1 a:hover {
    color: #222222;
    text-decoration: none;
  }

  #header .logo img {
    padding: 0;
    margin: 0;
    max-height: 40px;
  }

  @media (max-width: 768px) {
    #header {
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      height: 60px;
      background: #fff;
    }

    #header .logo h1 {
      font-size: 28px;
    }
  }

  /*--------------------------------------------------------------
  # Navigation Menu
  --------------------------------------------------------------*/
  /* Desktop Navigation */
  .nav-menu, .nav-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-menu > ul > li {
    white-space: nowrap;
    float: left;
    margin-left: 10px;
    margin-right: 10px;

  }

  .nav-menu a {
    display: block;
    position: relative;
    color: black;
    transition: 0.3s;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 4px;
    overflow: hidden;
  }

  .nav-menu li a span {
    position: absolute;
    display: block;
  }

  .nav-menu li:hover a span:nth-child(1) {
    bottom: 0;
    right: 50%;
    width: 0;
    height: 2px;
    background: #3498db;
    animation: animate1 0.25s linear 1;
    animation-fill-mode: forwards;
  }

  @keyframes animate1 {
    0% {
      width: 0;
      right: 50%;
    }
    50%, 100% {
      right: 0;
      width: 100%;
    }
  }

  .nav-menu li:hover a span:nth-child(2) {
    right: 0;
    bottom: 0;
    width: 2px;
    height: 0;
    background: #3498db;
    animation: animate2 0.25s linear 1;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }

  @keyframes animate2 {
    0% {
      height: 0;
    }
    50%, 100% {
      height: 100%;
    }
  }

  .nav-menu li:hover a span:nth-child(3) {
    left: 0;
    bottom: 0;
    width: 2px;
    height: 0;
    background: #3498db;
    animation: animate2 0.25s linear 1;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }

  @keyframes animate3 {
    0% {
      width: 0;

    }
    50%, 100% {
      width: 50%;
    }
  }

  .nav-menu li:hover a span:nth-child(4) {
    left: 0;
    width: 0;
    height: 2px;
    top: 0;
    background: #3498db;
    animation: animate4 0.25s linear 1;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes animate4 {
    0% {
      width: 0;
    }
    50%, 100% {

      width: 55%;

    }
  }

  .nav-menu li:hover a span:nth-child(5) {
    top: 0;
    right: 0;
    width: 0;
    height: 2px;
    background: #3498db;
    animation: animate3 0.25s linear 1;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes animate5 {
    0% {
      width: 0;
    }
    50%, 100% {
      width: 50%;
    }
  }

  .nav-menu .get-started a {
    background: #3498db;
    color: #fff;
    border-radius: 40px;
    margin: 0 0 0 30px;
    padding: 10px 25px;
  }

  .nav-menu .get-started a:hover {
    background: #57aae1;
    color: #fff;
  }

  .get-started-mobile{
    background: #3498db;
    color: #fff;
    border-radius: 40px;
    padding: 10px 25px;
    text-decoration: none;
  }

  .get-started-mobile:hover {
    background: #57aae1;
    color: #fff;
  }

  .nav-mobile a {
    text-decoration: none;
    color: black;
  }

  /*--------------------------------------------------------------
  # Sección Footer
  --------------------------------------------------------------*/
  #footer {
    background: #fff;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
    padding: 30px 0;
    color: #222222;
    font-size: 14px;
  }

  #footer .footer-links a {
    color: #222222;
    padding-left: 15px;
    text-decoration: none;
  }

  #footer .footer-links a:first-child {
    padding-left: 0;
  }

  #footer .footer-links a:hover {
    color: #3498db;
  }

</style>
