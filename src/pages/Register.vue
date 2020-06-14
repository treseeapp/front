<template>
  <div class="q-pa-md rounded-borders col-12 col-lg-12 col-md-12 col-sm-12 items-center full-height">
    <div style="min-height: 10vh"></div>
    <div class="row q-mt-lg" style="min-height: 50vh">
      <div class="col-12  col-lg-3 col-md-12 col-sm-12 "></div>
      <q-stepper
        v-model="step"
        ref="stepper"
        animated
        class="col-12 col-lg-6 col-md-12 col-sm-12 "
        done-color="green-6"
        active-color="primary"
        inactive-color="grey-8"
        error-color="red"
      >
        <q-step
          :name="1"
          title="Informacion de login"
          icon="settings"
          :done="step1Complete===true"
          :error="step1Error===true"
        >
          <div class="row">
            <div class="col-12 col-lg-8 col-md-8 col-sm-8  q-pa-lg">
              <div class="text-h6 q-mb-md">Información necesaria para login</div>
              <q-input @input="comproveStep1" outlined v-model="usuario.email" label="Email" type="email"
                       color="secondary"
                       class=" q-pr-sm q-pl-sm"
                       lazy-rules
                       :rules="[val => val && val.length,
                       val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)]">
                <template v-slot:prepend>
                  <q-icon name="alternate_email"/>
                </template>

              </q-input>
              <div class="q-mb-md row">
                <q-input @input="comproveStep1" outlined v-model="usuario.contraseña" label="Contraseña"
                         color="secondary"
                         :type="isPwd1 ? 'password' : 'text'"
                         class="col-12 col-lg-6 col-md-6 col-sm-6 q-pr-sm q-pl-sm q-pt-sm"
                         lazy-rules
                         :rules="[val => val && val.length > 0,
                           val => /([a-z])/.test(val) || 'Debe contener letras mínusculas.',
                           val => /([A-Z])/.test(val) || 'Debe contener letras mayúsculas.',
                           val => /([0-9])/.test(val) || 'Debe contener números.',
                           val => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(val) || 'Debe tener entre 8 y 20 carácteres.']">
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
                <q-input @input="comproveStep1" outlined v-model="usuario.contraseña2" label="Repetir contraseña"
                         color="secondary"
                         :type="isPwd2 ? 'password' : 'text'"
                         class="col-12 col-lg-6 col-md-6 col-sm-6 q-pr-sm q-pl-sm q-pt-sm"
                         lazy-rules
                         :rules="[val =>val && val.length > 0,
                         val => val===usuario.contraseña || 'Las contraseñas no coindicen.']">
                  <template v-slot:prepend>
                    <q-icon name="fas fa-key"/>
                  </template>
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd2 ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd2 = !isPwd2"
                    />
                  </template>
                </q-input>
              </div>
            </div>

            <div class="col-12 col-lg-4 col-md-4 col-sm-4  column flex-center content-center">
              <q-icon name="img:statics/tresee_shield.svg" size="22em"/>

              Por que tu seguriad nos importa.
            </div>
          </div>
        </q-step>

        <q-step
          :name="2"
          title="Información personal"
          icon="far fa-user-circle"
          :done="step2Complete===true"
          :error="step2Error===true"
        >
          <div class="row">
            <div class="col-12 col-lg-8 col-md-8 col-sm-8  q-pa-lg">
              <div class="text-h6 q-mb-md">Información personal</div>

              <div class="row">
                <q-input @input="comproveStep2" outlined v-model="usuario.nombre" label="Nombre" type="text"
                         color="secondary"
                         class="col-4 q-pr-sm" placeholder="John"
                         lazy-rules
                         :rules="[val =>val && val.length > 0]"
                >
                </q-input>
                <q-input @input="comproveStep2" outlined v-model="usuario.apellidos" label="Apellidos" type="text"
                         color="secondary"
                         class="col-8 q-pl-sm" placeholder="Doe"
                         lazy-rules
                         :rules="[val =>val && val.length > 0]">
                </q-input>

              </div>

              <div class="row vertical-middle">
                <q-input @input="comproveStep2" outlined v-model="usuario.dataNacimiento" mask="date"
                         label="Fecha de nacimiento"
                         lazy-rules
                         :rules="['date',
                         val =>val && val.length > 0]" class="col-5   q-pr-sm" color="secondary">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date color="accent" v-model="usuario.dataNacimiento" @input="() => $refs.qDateProxy.hide()"/>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                  <q-tooltip anchor="bottom right" self="bottom right" :offset="[-10, 35]" content-class="bg-accent"
                             content-style="font-size: 12px">
                    Pulsa el icono
                    <q-icon name="fas fa-level-up-alt"></q-icon>
                  </q-tooltip>

                </q-input>
                <q-select @input="comproveStep2" outlined v-model="usuario.genero" :options="opcionesSexo" label="Sexo"
                          class="col-7"
                          color="secondary"
                          lazy-rules
                          :rules="[val =>val && val.length > 0]"/>

              </div>
            </div>

            <div class="col-12 col-lg-4 col-md-4 col-sm-4  column flex-center content-center">
              <q-icon name="img:statics/tresee_shield.svg" size="22em"/>
              Por que tu seguriad nos importa.
            </div>
          </div>
        </q-step>

        <q-step
          :name="3"
          icon="fas fa-map-marked-alt"
          title="Dirección"
          :done="step3Complete===true"
          :error="step3Error===true"

        >
          <div class="row">
            <div class="col-12 col-lg-8 col-md-8 col-sm-8  q-pa-lg">
              <div class="text-h6 q-mb-md">Dirección</div>

              <div class=" row">
                <q-input @input="comproveStep3" outlined v-model="direccion.calle" label="Calle" type="text"
                         color="secondary"
                         class="col-8 col-lg-9 col-md-8 col-sm-7 q-pl-sm q-pr-sm"
                         lazy-rules
                         :rules="[val => val && val.length > 0]">
                  <template v-slot:prepend>
                    <q-icon name="fas fa-road"/>
                  </template>
                </q-input>
                <q-input @input="comproveStep3" outlined v-model="direccion.numero" label="Número" type="number"
                         color="secondary"
                         class="col-4 col-lg-3 col-md-4 col-sm-5  q-pl-sm q-pr-sm"
                         lazy-rules
                         :rules="[val => val && val.length > 0]">
                </q-input>

              </div>

              <div class=" row">
                <q-input @input="comproveStep3" outlined v-model="direccion.zip" label="Código postal"
                         type="number" color="secondary"
                         class="col-12 col-lg-3 col-md-3 col-sm-3 q-pl-sm q-pr-sm "
                         lazy-rules
                         :rules="[val => val && val.length > 0]">
                </q-input>
                <q-input @input="comproveStep3" outlined v-model="direccion.ciudad" label="Ciudad" type="text"
                         color="secondary"
                         class="col-12 col-lg-4 col-md-4 col-sm-4 q-pl-sm q-pr-sm "
                         lazy-rules
                         :rules="[val => val && val.length > 0]">
                  <template v-slot:prepend>
                    <q-icon name="fas fa-city"/>
                  </template>
                </q-input>
                <q-input outlined @input="comproveStep3" v-model="direccion.pais" label="País" type="text"
                         color="secondary"
                         class="col-12 col-lg-5 col-md-5 col-sm-5 q-pl-sm q-pr-sm "
                         lazy-rules
                         :rules="[val => val && val.length > 0]">
                  <template v-slot:prepend>
                    <q-icon name="fas fa-globe-americas"/>
                  </template>
                </q-input>
              </div>
            </div>

            <div class="col-12 col-lg-4 col-md-4 col-sm-4  column flex-center content-center">
              <q-icon name="img:statics/tresee_shield.svg" size="22em"/>
              Por que tu seguriad nos importa.
            </div>
          </div>
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>

            <q-btn v-if="step===3 && step3Complete===true" label="Crear cuenta" @click="createAccount"
                   color="secondary"/>
            <q-btn v-if="step===3 && step3Complete===false" disable label="Crear cuenta" @click="createAccount"
                   color="secondary"/>

            <q-btn @click="$refs.stepper.next()" v-if="step!==3" label="Siguiente paso" outline
                   color="secondary"/>
            <q-btn v-if="step > 1" flat color="accent" @click="$refs.stepper.previous()" label="Paso anterior"
                   class="q-ml-sm"/>
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>

  </div>
</template>

<script>
  import {load} from 'recaptcha-v3'

  export default {
    name: "Register",
    data() {
      return {
        isPwd1: true,
        isPwd2: true,
        step: 1,
        opcionesSexo: [
          'HOMBRE',
          'MUJER',
          'INDEFINIDO'
        ],
        usuario: {
          nombre: '',
          apellidos: '',
          direccion: '',
          email: '',
          dataNacimiento: '',
          contraseña: '',
          contraseña2: '',
          genero: ''
        },
        direccion: {
          calle: '',
          numero: null,
          zip: null,
          ciudad: '',
          pais: ''
        },
        prueba: "ola",
        informationComplete: false,
        step1Complete: false,
        step1Error: false,
        step2Complete: false,
        step2Error: false,
        step3Complete: false,
        step3Error: false,
        recaptcha: null

      }
    },
    async created() {
      this.recaptcha = await load(process.env.CAPTCHA_SITE_KEY, {
        autoHideBadge: true
      });
    },
    methods: {
      async createAccount() {
        this.usuario.direccion = this.direccion.calle + ', ' + this.direccion.numero + ', ' + this.direccion.zip + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;

        /*
        * Cogemos el token de nuestra puntuacion captcha
        * */
        this.usuario.tokenCaptcha = await this.recaptcha.execute({action: 'register'});

        /*
        * Hacemos la peticion de registrar al usuario
        * */
        const response = await this.$axiosNode.post('/auth/register', this.usuario);

        if (response.status !== 200) {
          this.$q.notify({
            message: response.statusText,
            icon: 'fas fa-exclamation-triangle',
            color: 'negative'
          })
        } else if (response.status === 200) {
          /*
          * Guardamos los tokens + rol
          * */
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          localStorage.setItem('rol', response.data.rol);
          /*
          * Redirect para su ruta dashboard
          * Siempre sera un /estudiante ya que de
          * normal el register solo sera para estudiantes
          * */
          await this.$router.push('/estudiante')
        }

      },
      comproveStep1() {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.usuario.email) &&
          (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(this.usuario.contraseña)) &&
          (this.usuario.contraseña === this.usuario.contraseña2)) {
          this.step1Complete = true;
          this.step1Error = false;
        } else {
          this.step1Error = true;
          this.step1Complete = false;
        }
      },
      comproveStep2() {

        if (this.usuario.nombre && this.usuario.apellidos && this.usuario.genero && this.usuario.dataNacimiento) {
          this.step2Complete = true;
          this.step2Error = false;
        } else {
          this.step2Complete = false;
          this.step2Error = true;
        }
      },
      comproveStep3() {

        if (this.step1Complete && this.step2Complete && this.direccion.calle && this.direccion.numero &&
          this.direccion.zip && this.direccion.ciudad && this.direccion.pais) {
          this.step3Complete = true;
          this.step3Error = false;
        } else {
          this.step3Complete = false;
          this.step3Error = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>
