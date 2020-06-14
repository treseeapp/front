<template>
  <q-page class="row q-pa-lg ">

    <div class="col-lg-8 col-md-8 col-sm-12 col-12 q-pa-lg">
      <q-card class=" q-ma-sm">
        <q-card-section class="flex">
          <div class="text-h5">Mi cuenta</div>
          <q-space/>
          <q-icon name="info" color="secondary" class="cursor-pointer" style="font-size: 2em;">
            <q-tooltip content-class="bg-purple" content-style="font-size: 13px" :offset="[10, 10]">
              Para editar la informacion, modifica el campo que quieras modificar y despues pulsa 'Guardar'
            </q-tooltip>
          </q-icon>

        </q-card-section>
        <q-separator/>
        <q-card-section>
          <div class="text-h6 text-grey-6">Informacion del usuario</div>
          <div class="row">
            <q-input outlined v-model="usuario.nombre" label="Nombre" placeholder="John" color="secondary"
                     class="q-pa-sm col-lg-4 col-md-4 col-sm-4 col-12"/>
            <q-input outlined v-model="usuario.apellidos" label="Apellidos" placeholder="Doe" color="secondary"
                     class="q-pa-sm col-lg-6 col-md-6 col-sm-6 col-12"/>
          </div>

          <div class="row">
            <q-input input-class="text-grey-6" outlined v-model="usuario.email" type="email" label="Email" readonly
                     color="secondary"
                     class="q-pa-sm col-lg-5 col-md-5 col-sm-10 col-12">
              <template v-slot:prepend>
                <q-icon name="far fa-envelope"/>
              </template>
              <q-tooltip content-class="bg-red-9 content-center" content-style="font-size: 0.9em" class="justify-center"  :delay="500" :offset="[0, 5]">
                <q-icon name="fas fa-exclamation-circle" size="0.9em"/>
                Correo electronico no modificable
              </q-tooltip>
            </q-input>

            <q-input outlined v-model="usuario.dataNacimiento" @click="()=> $refs.qDateProxy.show()" mask="####/##/##"
                     label="Fecha de nacimiento"
                     class="col-lg-3 col-md-3 col-sm-5 col-12 q-pa-sm" color="secondary">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy">
                    <q-date color="accent" v-model="usuario.dataNacimiento" first-day-of-week="1"
                            @input="()=>$refs.qDateProxy.hide()"/>
                  </q-popup-proxy>
                </q-icon>
              </template>
              <q-tooltip anchor="bottom right" self="bottom right" :offset="[-10, 35]" content-class="bg-accent"
                         content-style="font-size: 12px">
                Pulsa el icono
                <q-icon name="fas fa-level-up-alt"></q-icon>
              </q-tooltip>
            </q-input>

            <q-select outlined v-model="usuario.genero" :options="opcionesSexo" label="Sexo"
                      class="col-lg-2 col-md-2 col-sm-5 col-12 q-pa-sm"
                      color="secondary"/>

          </div>
        </q-card-section>
        <q-card-section class="q-mt-md">
          <div class="text-h6 text-grey-6">
            Dirección
            <q-icon name="far fa-address-card"/>
          </div>
          <div class="row">
            <q-input outlined v-model="direccion.calle" label="Calle" type="text" color="secondary"
                     class=" col-lg-7 col-md-7 col-sm-7 col-12 q-pa-sm">
              <template v-slot:prepend>
                <q-icon name="fas fa-road"/>
              </template>
            </q-input>
            <q-input outlined v-model="direccion.numero" label="Número piso" type="number" color="secondary"
                     class=" col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm ">
            </q-input>

          </div>

          <div class="q-mb-md row">
            <q-input outlined v-model="direccion.zip" label="Código postal" type="number" color="secondary"
                     class=" col-lg-3 col-md-3 col-sm-3 col-12  q-pa-sm">
            </q-input>
            <q-input outlined v-model="direccion.ciudad" label="Ciudad" type="text" color="secondary"
                     class=" col-lg-4 col-md-4 col-sm-4 col-12 q-pa-sm">
              <template v-slot:prepend>
                <q-icon name="fas fa-city"/>
              </template>
            </q-input>
            <q-input outlined v-model="direccion.pais" label="País" type="text" color="secondary"
                     class=" col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm">
              <template v-slot:prepend>
                <q-icon name="fas fa-globe-americas"/>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="q-pr-md q-pb-md">
          <q-btn dense outline color="green-9" label="Guardar cambios" @click="guardarInformacionPerfil"/>
        </q-card-actions>
      </q-card>


      <q-card class="q-mt-lg q-ma-sm" v-if="this.usuario.modoInicioSesion === 'local'">
        <q-card-section class="flex">
          <div class="text-h5">Seguridad</div>
          <q-space/>
          <q-icon name="info" color="secondary" class="cursor-pointer" style="font-size: 2em;">
            <q-tooltip content-class="bg-purple" content-style="font-size: 13px" :offset="[10, 10]">
              Para editar la informacion, modifica el campo que quieras modificar y despues pulsa 'Guardar'
            </q-tooltip>
          </q-icon>

        </q-card-section>
        <q-separator/>
        <q-card-section>
          <div class="text-h6 text-grey-6">Modifcar contraseña</div>
          <div class="row">
            <q-input outlined v-model="contraseñas.old" label="Antigua contraseña" placeholder="*******************"
                     color="secondary"
                     class="q-pa-sm col-lg-5 col-md-5 col-sm-5 col-12"/>
            <q-input outlined v-model="contraseñas.nueva" label="Nueva contraseña" placeholder="*******************"
                     color="secondary"
                     class="q-pa-sm col-lg-5 col-md-5 col-sm-5 col-12"
            />
          </div>
          <div class="row">
            <div class="q-pa-sm col-lg-5 col-md-5 col-sm-5 col-12"></div>

            <q-input outlined v-model="contraseñas.nueva2" label="Repetir contraseña" placeholder="*******************"
                     color="secondary"
                     class="q-pa-sm col-lg-5 col-md-5 col-sm-5 col-12"
                     :rules="[val => contraseñas.nueva === contraseñas.nueva2 || 'Las contraseñas no coinciden']"/>
          </div>

        </q-card-section>

        <q-card-actions align="right" class="q-pr-md q-pb-md">
          <q-btn dense outline color="green-9" label="Guardar cambios" @click="guardarInfoSeguridad"/>
        </q-card-actions>
      </q-card>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-12 q-pa-lg column">

      <q-card class="column  content-center q-ma-sm">
        <q-card-section class="flex flex-center">
          <div class="text-h6 text-grey-6">Fotografia de perfil</div>
        </q-card-section>
        <q-card-section class="flex flex-center">

          <q-avatar size="13em" class="">
            <q-img :src="usuario.foto" :ratio="1"
                   alt="Imagen de perfil del usuario"
                   placeholder-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr1v58ICPpgv8t4zeWFfmJqBre8Xedi8agxMpKEHR-G5L06sic"
                   spinner-color="primary"
            />
          </q-avatar>
        </q-card-section>
        <q-card-section v-if="editarFoto">
          <q-uploader
            color="indigo"
            label="Arrastra o selecciona tu foto (MAX 10MB)"
            auto-upload
            :url="urlUploadProfileFoto"
            :headers="[{name: 'Authorization', value: tokenToUploadFoto}]"
            @uploaded="fotoSubida"
            method="PUT"
            :with-credentials="booleano"
            style="max-width: 240px"
            fieldName="file"
            :max-file-size="10485760"

          />

        </q-card-section>
        <q-card-actions align="center" class="q-pr-md q-pb-md">
          <q-btn outline color="negative" label="Cancelar cambio" icon="fas fa-ban" @click="editFoto"
                 v-if="editarFoto"/>
          <q-btn flat color="secondary" label="Cambiar foto" icon="far fa-edit" @click="editFoto" v-if="!editarFoto"/>
        </q-card-actions>
      </q-card>
      <q-btn label="Eliminar cuenta" class="q-ma-sm" color="negative" @click="borrarCuenta = true" outline/>

    </div>

    <q-dialog v-model="borrarCuenta">
      <q-card class="my-card">

        <q-card-section class="q-pt-sm">
          <div class="text-h6">
            Eliminar cuenta
          </div>
          <div class="text-subtitle2">
            Introduce tu email para eliminar la cuenta
          </div>
          <div class="text-grey-7">
            Para verificar que esta acción es voluntaria te pedimos que
            nos escribas tu correo electronico con el que estas registrado
          </div>
        </q-card-section>
        <q-separator/>

        <q-card-section class="">
          <q-input outlined dense color="secondary" :placeholder="usuario.email" v-model="emailToDelete"
                   :rules="[
                     val => emailToDelete!=null || 'Campo requerido',
                     val => emailToDelete!=='' || 'Campo requerido'
                     ]" lazy-rules/>

          <div class="q-pt-md">
            ¿Estas seguro de borrar tu cuenta?
            Esta acción <span class="text-negative text-weight-bolder">no se puede deshacer</span>.
            Si en el futuro quieres volver a utilizar esta aplicacion, tendras que crearte otra cuenta.

            <div class="text-weight-bolder">
              Perderas todos tus fichajes y se te desvinculara de tu empresa.
            </div>
          </div>
        </q-card-section>

        <q-separator/>

        <q-card-actions align="right">
          <q-btn v-close-popup color="accent" label="Cancelar"/>

          <q-btn v-close-popup flat disable color="negative" label="Borrar cuenta"
                 v-if="usuario.email !== emailToDelete"/>
          <q-btn v-close-popup color="negative" label="Borrar cuenta" v-if="usuario.email === emailToDelete"
                 @click="deleteAccount"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
  import * as moment from 'moment';

  export default {
    name: "Account",
    props: {
      usuarioLogged: {},
      direccionUsuario: {}
    },
    async created() {
      this.moment = moment;
      const response = await this.$axiosJava.get('/private/usuario');
      const userRecived = response.data;

      this.usuario.email = userRecived.email;
      this.usuario.nombre = userRecived.nombre;
      this.usuario.apellidos = userRecived.apellidos;
      this.usuario.genero = userRecived.genero;
      if (userRecived.dataNacimiento != null && userRecived.dataNacimiento !== '') this.usuario.dataNacimiento = userRecived.dataNacimiento;
      if (userRecived.direccion != null && userRecived.direccion !== '') {
        this.parserDirection(userRecived.direccion);
      }
      this.usuario.modoInicioSesion = userRecived.modoInicioSesion.toLowerCase();
      this.usuario.foto = userRecived.fotoPerfil;

    },
    data() {
      return {
        parserMoment: null,
        booleano: true,
        emailToDelete: null,
        borrarCuenta: false,
        urlUploadProfileFoto: process.env.API_JAVA + '/private/usuario/foto',
        tokenToUploadFoto: '',
        editarFoto: false,
        modoInicioSesion: null,
        opcionesSexo: [
          'HOMBRE',
          'MUJER',
          'INDEFINIDO'
        ],
        usuario: {
          nombre: '',
          email: '',
          apellidos: '',
          direccion: '',
          dataNacimiento: '',
          genero: '',
          foto: '' // foto placeholder por si el usuario no tiene foto
        },
        contraseñas: {
          old: '',
          nueva: '',
          nueva2: ''
        },
        direccion: {
          calle: '',
          numero: null,
          zip: null,
          ciudad: '',
          pais: ''
        }
      }
    },
    methods: {
      async deleteAccount() {
        const response = await this.$axiosJava.delete('/private/usuario');
        if (response.status === 200) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('rol');
          await this.$router.push('/')
        } else {
          this.mostrarNotificacion("No se ha podido eliminar tu cuenta")
        }
      },
      editFoto() {
        this.editarFoto = !this.editarFoto;
        this.tokenToUploadFoto = localStorage.getItem("refreshToken")
      },
      async fotoSubida() {
        this.editarFoto = false;
        const response = await this.$axiosJava.get('/private/usuario/foto');
        if (response.status === 200) {
          this.usuario.foto = response.data;
          this.updateInfoWithLayout();
        } else {
          this.mostrarNotificacion("No se ha podido recuperar tu imagen de perfil", "red-9");
        }
        this.mostrarNotificacion("Se ha modificado la foto correctamente", "green");
      },
      async guardarInformacionPerfil() {
        this.usuario.direccion = this.direccion.calle + ', ' + this.direccion.numero + ', ' + this.direccion.zip + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
        if (this.usuario.genero === null) {
          this.usuario.genero = " "
        }
        const response = await this.$axiosJava.put('/private/usuario', this.usuario);
        if (response.status === 200) {
          this.mostrarNotificacion("Se ha guardado la informacion correctamente", "secondary")
          this.updateInfoWithLayout();
        } else {
          this.mostrarNotificacion(response.data, "red-9")
        }
      },
      async guardarInfoSeguridad() {
        const passwords = {
          oldPassword: this.contraseñas.old,
          newPassword: this.contraseñas.nueva,
          newPassword1: this.contraseñas.nueva2
        };

        const response = await this.$axiosNode.put('/usuario/seguridad', passwords);
        if (response.status === 200) {
          this.mostrarNotificacion("Se ha guardado la informacion correctamente", "secondary")
        } else {
          this.mostrarNotificacion(response.statusText, "red-9")
        }
      },
      parserDirection(dir) {
        const piezas = dir.split(',');

        this.direccion.calle = piezas[0];
        this.direccion.numero = parseInt(piezas[1]);
        this.direccion.zip = parseInt(piezas[2]);
        if (piezas[3]) {
          this.direccion.ciudad = piezas[3].replace(/\s/g, '');
        }
        if (piezas[4]) {
          this.direccion.pais = piezas[4].replace(/\s/g, '');
        }
      },
      mostrarNotificacion(texto, color = indigo) {
        this.$q.notify({
          color: color,
          message: texto,
          position: 'top-right',
          timeout: 5000
        })
      },
      updateInfoWithLayout(){
        this.usuarioLogged.nombre = this.usuario.nombre;
        this.usuarioLogged.apellidos = this.usuario.apellidos;
        this.usuarioLogged.foto = this.usuario.foto;
      }
    }
  }

</script>

<style scoped>

</style>
