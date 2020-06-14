<template>
  <q-page :class="$q.screen.lt.md?'bg-sm-foto':'bg-lg-foto'">

    <div class="row justify-center q-pt-lg">

      <div class="column items-center col-lg-3 col-md-4 col-sm-6 col-xs-11 q-mt-md q-ml-md q-mr-md"
           style="min-width: 350px">

        <q-avatar size="110px" class="q-mb-md">
          <img src="~/assets/Logo_tresee.png">
        </q-avatar>

        <q-card v-if="forgot===false" class="q-mt-lg full-width">
          <q-card-section class="text-center">
            <div class="text-subtitle2 q-pa-sm" style="font-size: 16px">¿No recuerda su Contraseña?</div>
            <q-space/>
          </q-card-section>

          <q-separator/>
          <q-card-section>
            <div class="text-subtitle1 q-ml-md q-mr-md text-bold" style="font-size: 12px">Le enviaremos un
              enlace de recuperación a:
            </div>
            <q-input outlined v-model="email" label="Introduce el correo" type="email"
                     color="secondary"
                     class=" q-pr-sm q-pl-sm"
            >
              <template v-slot:prepend>
                <q-icon name="alternate_email"/>
              </template>

            </q-input>

          </q-card-section>

          <q-card-actions class="justify-center q-ml-lg q-mr-lg q-mb-lg">
            <q-btn
              :loading="cargandoEmail"
              label="Enviar correo de recuperación"
              text-color="white"
              class="text-center bg-green-9 full-width"
              @click="enviarCorreo()"/>

          </q-card-actions>

          <q-separator inset/>

          <q-card-section class="text-center">
            <p class="text-bold text-indigo-9 q-mt-md" @click="$router.push('/')" :style="{ cursor: 'pointer'}">Regresar
              a la Página Principal</p>
          </q-card-section>

        </q-card>

        <q-card class="q-mt-lg full-width" v-if="forgot===true">
          <q-card-section class="text-center">
            <div class="text-subtitle2 q-pa-sm" style="font-size: 16px">Correo enviado</div>
            <q-space/>
          </q-card-section>

          <q-separator inset=""/>
          <q-card-section>
            <div class="text-subtitle1 text-center q-ml-md q-mr-md text-bold" style="font-size: 14px">Le hemos enviado
              un enlace de recuperación
              a su dirección:
            </div>

            <div class=" q-pa-lg text-center text-h5 text-grey-8">{{email}}</div>


            <div class="text-subtitle2 text-grey-7 text-center   text-bold" style="font-size: 14px">
              El enlace que se le ha enviado, solo es valido 1 hora.
            </div>

          </q-card-section>


          <q-separator inset/>

          <q-card-section class="text-center">

            <p class="text-bold text-indigo-9 q-mt-md" @click="$router.push('/')" :style="{ cursor: 'pointer'}">Regresar
              a la Página Principal</p>

            <p class="text-bold text-indigo-9 q-mt-md" @click="forgot=false" :style="{ cursor: 'pointer'}">Reenviar
              enlace de recuperación</p>

          </q-card-section>

        </q-card>


      </div>
    </div>

  </q-page>
</template>

<script>
  import {load} from 'recaptcha-v3'

  export default {
    name: "Forgot",
    data() {
      return {
        email: '',
        forgot: false,
        validEmail: false,
        tokenCaptcha: null,
        cargandoEmail: false
      }
    },
    async created() {
      this.recaptcha = await load(process.env.CAPTCHA_SITE_KEY, {
        autoHideBadge: true
      });
    },
    methods: {
      mostrarNotificacion(texto, color = 'indigo', multiLine = false, position = 'top-right') {
        this.$q.notify({
          color: color,
          message: texto,
          position: position,
          timeout: 3000,
          multiLine: multiLine,
          group: false
        })
      },
      async enviarCorreo() {
        this.cargandoEmail = true;

        /*
        * Cogemos el token de nuestra puntuacion captcha
        * */
        this.tokenCaptcha = await this.recaptcha.execute({action: 'forgotPassword'});
        const response = await this.$axiosNode.post('/auth/recover/password', {
          email: this.email,
          tokenCaptcha: this.tokenCaptcha
        });
        if (response.status === 200) {
          this.forgot = true;
        } else {
          this.mostrarNotificacion(response.statusText, 'red-9', false, 'bottom-right')
        }

        this.cargandoEmail = false;

      }
    }
  }
</script>

<style scoped>
  .bg-sm-foto {
    background-image: url("assets/thinking.svg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 70vw;
  }

  .bg-lg-foto {
    background-image: url("assets/thinking.svg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 20vw;
  }
</style>
