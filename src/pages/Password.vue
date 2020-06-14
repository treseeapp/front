<template>

  <q-page>

    <div class="row justify-center q-pt-lg">

      <div class="column items-center col-lg-3 col-md-4 col-sm-6 col-xs-11 q-mt-md q-ml-md q-mr-md"
           style="min-width: 350px">

        <q-avatar size="110px" class="q-mb-md">
          <img src="~/assets/Logo_tresee.png">
        </q-avatar>

        <q-card class="q-mt-lg full-width q-ml-md ">
          <q-card-section class="text-center">
            <div class="text-subtitle2 q-pa-sm" style="font-size: 16px">Elija una nueva contraseña</div>
            <q-space/>
          </q-card-section>

          <q-separator/>
          <q-card-section>
            <div class="text-subtitle1 q-ml-md q-mr-md q-mt-md text-bold" style="font-size: 12px">Nueva Contraseña
            </div>
            <q-input outlined v-model="newPassword" label="Contraseña"
                     @input="comprobarInputPassword"
                     color="secondary"
                     :type="isPwd1 ? 'password' : 'text'"
                     class="q-ml-md q-mr-md"
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

            <div class="text-subtitle1 q-ml-md q-mr-md text-bold q-mt-md" style="font-size: 12px">Repite la nueva
              contraseña
            </div>
            <q-input @input="comprobarInputPassword" outlined v-model="newPassword2" label="Repetir contraseña"
                     color="secondary"
                     :type="isPwd2 ? 'password' : 'text'"
                     class="q-ml-md q-mr-md"
                     lazy-rules
                     :rules="[val =>val && val.length > 0,
                         val => val===newPassword || 'Las contraseñas no coindicen.']">
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

          </q-card-section>

          <q-card-actions class="justify-center q-ml-lg q-mr-lg q-mb-lg">
            <q-btn
              :disable="!validPassword"
              label="Cambiar contraseña"
              text-color="white"
              class="text-center bg-green-9 full-width"
              @click="changePassword()"/>

          </q-card-actions>

          <q-separator inset/>

          <q-card-section class="text-center">
            <p class="text-bold text-indigo-9 q-mt-md">¿Sigue teniendo problemas para iniciar Sesión?</p>
          </q-card-section>

        </q-card>

      </div>
    </div>

  </q-page>
</template>

<script>
  export default {
    name: "NewPassword",
    data() {
      return {
        newPassword: '',
        newPassword2: '',
        isPwd1: true,
        isPwd2: true,
        validPassword: false
      }
    },
    methods: {
      async changePassword() {

        const response = await this.$axiosNode.put('/auth/recover/password', {
          tokenValidacion: sessionStorage.getItem('tokenUserModify'),
          contraseña1: this.newPassword,
          contraseña2: this.newPassword2
        });
        if (response.status === 200) {
          this.mostrarNotificacion('Contraseña modificada correctamente', 'secondary', false, 'bottom-right')
        } else {
          this.mostrarNotificacion(response.statusText, 'red-9', false, 'bottom-right')
        }
      },
      comprobarInputPassword() {

        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(this.newPassword) && this.newPassword === this.newPassword2) {
          console.log("Las contraseñas son correctas");
          this.validPassword = true
        }
      },
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
    }
  }
</script>

<style scoped>

</style>
