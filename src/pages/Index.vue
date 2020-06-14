<template>
  <q-page class="flex flex-center">
    <div class="q-ml-auto q-mr-auto" style="width: 350px">

      <q-form
        @submit="login"
        class="q-gutter-md q-mt-lg"
      >

        <q-input
          filled
          class="q-mt-lg"
          label="Correo Electronico"
          v-model="usuarioLogin.email"
          type="email"
          hint="Introduce tu email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'El correo es obligatorio',
                    val => val && val.length > 6 || 'Mínimo 6 carácteres']"

        />

        <q-input
          filled
          class="q-mt-lg"
          label="Contraseña"
          v-model="usuarioLogin.contraseña"
          type="password"
          hint="Introduce tu contraseña"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'La contraseña es obligatorio',
                    val => val && val.length >= 8 || 'Mínimo 8 carácteres']"

        />

        <q-btn class="q-my-lg" color="secondary" label="Iniciar sesión local"/>
        <q-btn class=""
               color="secondary"
               :href="'http://localhost:3000/auth/google'"
               icon="mail"
               label="Iniciar sesión con Google"
               type="a"
        />

      </q-form>
    </div>

  </q-page>

</template>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {
        usuarioLogin: {
          email: '',
          contraseña: ''
        }
      }
    },
    methods: {

      async login() {

        const response = await this.$axiosNode.post('/auth/login', this.usuarioLogin);

        console.log(response);
      }
    }
  }

</script>
