<template>
  <q-page class="row">
    <div class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 q-pa-lg">
      <q-card>
        <q-card-section>
          <div class="text-h5">
            Informacion del estudiante
          </div>
        </q-card-section>
        <q-separator inset=""/>
        <q-card-section class="row ">
          <div class="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 flex-center flex">
            <q-avatar square rounded size="10em">
              <q-img
                :src="estudiante.foto_perfil"
                placeholder-src="~/assets/user-placeholder.png"
                spinner-color="primary"
                :ratio="1"
                alt="Imagen de perfil de usuario hombre"/>
            </q-avatar>
          </div>
          <div class="col-12 col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 row">
            <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
              <q-input v-model="estudiante.nombre" class="q-pa-sm" outlined readonly/>
              <q-input v-model="estudiante.apellidos" class="q-pa-sm" outlined readonly/>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 column">
              <q-input v-model="estudiante.email" class="q-pa-sm" outlined readonly>
                <template v-slot:append>
                  <q-icon name="far fa-envelope"/>
                </template>
              </q-input>
              <div class="row">
                <q-input v-model="estudiante.genero" class="q-pa-sm col-6" outlined readonly>
                  <template v-slot:append>
                    <q-icon name="fas fa-venus-mars"/>
                  </template>
                </q-input>
                <q-input v-model="estudiante.dataNacimiento" class="q-pa-sm col-6" outlined readonly>
                  <template v-slot:append>
                    <q-icon name="fas fa-birthday-cake"/>
                  </template>
                </q-input>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-mt-sm row">
          <div class="col-0 col-xs-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 column q-pa-lg ">
            <q-btn outline label="Asignar IP" v-if="estudiante.ipFichaje===null" @click="dialogIpEstudiante=true"/>
            <q-input dense outlined readonly v-model="estudiante.ipFichaje" v-if="estudiante.ipFichaje!==null ">
              <template v-slot:append>
                <q-btn icon="far fa-times-circle" flat round dense color="red-9" @click="removeIpStudent"
                       class="cursor-pointer"/>
              </template>
            </q-input>
            <q-btn outline color="amber-9" label="convertir usuario a profesor" class="q-mt-sm"
                   @click="mostrarConfirmacionConvertir=true"/>
          </div>
          <div class="col-12 col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <div class="text-h6 text-grey-6 q-pa-sm">
              Dirección
              <q-icon name="far fa-address-card"/>
            </div>
            <div class="row">
              <q-input outlined v-model="direccion.calle" label="Calle" type="text" color="secondary"
                       class=" col-lg-9 col-md-9 col-sm-9 col-12 q-pa-sm" readonly>
                <template v-slot:append>
                  <q-icon name="fas fa-road"/>
                </template>
              </q-input>
              <q-input outlined v-model="direccion.numero" label="Número piso" type="number" color="secondary"
                       class=" col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm " readonly>
              </q-input>

            </div>

            <div class="q-mb-md row">
              <q-input outlined v-model="direccion.zip" label="Código postal" type="number" color="secondary"
                       class=" col-lg-3 col-md-3 col-sm-3 col-12  q-pa-sm" readonly>
              </q-input>
              <q-input outlined v-model="direccion.ciudad" label="Ciudad" type="text" color="secondary"
                       class=" col-lg-4 col-md-4 col-sm-4 col-12 q-pa-sm" readonly>
                <template v-slot:append>
                  <q-icon name="fas fa-city"/>
                </template>
              </q-input>
              <q-input outlined v-model="direccion.pais" label="País" type="text" color="secondary"
                       class=" col-lg-5 col-md-5 col-sm-5 col-12 q-pa-sm" readonly>
                <template v-slot:append>
                  <q-icon name="fas fa-globe-americas"/>
                </template>
              </q-input>
            </div>
          </div>

        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 q-pa-lg">
      <q-card style="height: 80vh">

        <q-card-section class="row">
          <div v-if="!$q.screen.lt.md" class="text-h5">Fichajes</div>
          <div v-if="$q.screen.lt.md" class="text-h6 col-sm-6 col-xs-6">Fichajes</div>
          <q-card-actions class="col-6 ml-auto q-mb-sm" align="right" v-if="$q.screen.lt.md">
            <q-chip v-if="calcularHorasTotales(allFichajes) < 100">{{calcularHorasTotales(allFichajes)}} / 400 horas
            </q-chip>
            <q-chip v-if="calcularHorasTotales(allFichajes) > 100 && calcularHorasTotales(allFichajes) < 300"
                    color="amber-8" text-color="white">{{calcularHorasTotales(allFichajes)}} / 400 horas
            </q-chip>
            <q-chip v-if="calcularHorasTotales(allFichajes) > 300 && calcularHorasTotales(allFichajes) < 400"
                    color="light-blue" text-color="white">{{calcularHorasTotales(allFichajes)}} / 400 horas
            </q-chip>
            <q-chip v-if="calcularHorasTotales(allFichajes) > 400" color="green" text-color="white">
              {{calcularHorasTotales(allFichajes)}} / 400 horas
            </q-chip>
          </q-card-actions>
        </q-card-section>

        <q-separator inset=""/>
        <q-card-section class=" overflow-auto scrollArea" style="height: 85%">
          <q-list>
            <q-expansion-item v-for="fichaje in allFichajes"
                              icon="fas fa-history"
                              :label="'Dia '+fichaje.fecha"
                              :caption="fichaje.fichajes.length +' fichaje(s)'"
            >
              <q-card class="bg-grey-1 ">

                <q-card-section class="">
                  <div class="row q-mb-sm">
                    <div class="col-3 " align="right">
                      Entrada &nbsp;
                    </div>
                    <div class="col-1">
                    </div>
                    <div class="col-3">
                      &nbsp;Salida
                    </div>
                  </div>
                  <div class="row q-mt-xs q-mb-xs" v-for="individual in fichaje.fichajes">
                    <div class="col-3 " align="right">
                      {{individual.entrada}}&nbsp;
                    </div>
                    <div class="col-1" align="center">
                      -
                    </div>
                    <div class="col-3" align="left">
                      &nbsp;{{individual.salida}}
                    </div>
                    <div class="col-5" align="right">
                      {{diferenciaEntreHoras(individual.entrada, individual.salida)}} hora(s)
                    </div>
                  </div>
                </q-card-section>
                <q-separator inset=""/>
                <q-card-actions align="right" class="q-pr-md">
                  {{calcularHorasTotalesDeUnDia(fichaje.fichajes)}} hora(s) totales
                </q-card-actions>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-card-section>
        <q-card-actions v-if="!$q.screen.lt.md" align="right">
          <q-chip v-if="calcularHorasTotales(allFichajes) < 100">{{calcularHorasTotales(allFichajes)}} / 400 horas
          </q-chip>
          <q-chip v-if="calcularHorasTotales(allFichajes) > 100 && calcularHorasTotales(allFichajes) < 300"
                  color="amber-8" text-color="white">{{calcularHorasTotales(allFichajes)}} / 400 horas
          </q-chip>
          <q-chip v-if="calcularHorasTotales(allFichajes) > 300 && calcularHorasTotales(allFichajes) < 400"
                  color="light-blue" text-color="white">{{calcularHorasTotales(allFichajes)}} / 400 horas
          </q-chip>
          <q-chip v-if="calcularHorasTotales(allFichajes) > 400" color="green" text-color="white">
            {{calcularHorasTotales(allFichajes)}} / 400 horas
          </q-chip>
        </q-card-actions>
      </q-card>
    </div>

    <q-dialog v-model="mostrarConfirmacionConvertir" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h5">
            Confirmacion de seguridad
          </div>
        </q-card-section>
        <q-separator inset=""/>
        <q-card-section>
          <p>
            ¿ Estas seguro de que quieres convertir este usuario a profesor ?
          </p>

          <p>
            Está acción es <span class="text-weight-bold text-red-9">irreversible</span> sin la ayuda de un
            administrador de tu base de datos. <br>
            Para asegurarnos de que esta acción esta siendo activada a proposito,
            y no es un error, te pedimos que nos introduzcas el email, de el usuario que estas intentando modificar
          </p>
          <q-input v-model="emailToModify" color="grey" input-class="text-secondary text-weight-bold" outlined
                   :placeholder="estudiante.email"/>

          <p class="q-mt-md">
            Al confirmar esta accion, estarás dando todos los permisos que tienen todos los profesores,
            para hacer cualquier accion al usuario <span class="text-weight-bolder">{{estudiante.nombre}} {{estudiante.apellidos}}</span>.
            Entre otras, el <span class="text-weight-bold text-grey-8">añadir</span>, <span
            class="text-weight-bold text-grey-8">modificar</span>
            y <span class="text-weight-bold text-grey-8">eliminar</span> empresas o <span
            class="text-weight-bold text-grey-8">ver</span>
            toda la informacion privada de los estudiantes.
          </p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Convertir" color="secondary" outline v-close-popup disable
                 v-if="estudiante.email!==emailToModify"/>
          <q-btn label="Convertir" color="secondary" v-close-popup @click="convertUser()"
                 v-if="estudiante.email===emailToModify"/>
          <q-btn flat label="Cancelar" color="red-7" v-close-popup @click="emailToModify=''"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="dialogIpEstudiante" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h5">Restriccion de IP para fichar</div>
          <q-separator spaced/>
          <div>
            Puedes asignar una IP, la cual representara a la red desde la cual este estudiante tendrá que estar
            conectado para hacer los fichajes. En el caso de que no
            tengá ninguna ip asignada, significará, que podrá fichar en cualquier red, es decir, sin restricciones.
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input label="IP" placeholder="162.138.18.45" dense outlined v-model="estudiante.ipFichaje"
                   maxlength="15"
                   lazy-rules
                   :rules="[v =>   /^(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})$/.test(v)  || 'Ha de ser una ip real']"/>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" v-close-popup @click="estudiante.ipFichaje=''"/>
          <q-btn label="Asignar ip" outline color="blue-8" @click="asignIpStudent" v-close-popup
                 :disable="!/^(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-5]{2}|1[0-9]{2}|[0-9]{1,2})$/.test(estudiante.ipFichaje)"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
  export default {
    name: "Estudiante",
    data() {
      return {
        dialogIpEstudiante: false,
        emailToModify: '',
        mostrarConfirmacionConvertir: false,
        estudiante: {
          idusuario: '',
          nombre: '',
          apellidos: '',
          email: '',
          genero: null,
          foto_perfil: '',
          direccion: null,
          dataNacimiento: '',
          ipFichaje: null
        },
        direccion: {
          calle: '',
          numero: null,
          zip: null,
          ciudad: '',
          pais: ''
        },
        allFichajes: []
      }
    },
    methods: {
      parserDirection(dir) {
        if (dir != null) {
          const piezas = dir.split(',');
          const direcction = {
            calle: '',
            numero: null,
            zip: null,
            ciudad: '',
            pais: ''
          };
          direcction.calle = piezas[0];
          direcction.numero = parseInt(piezas[1]);
          direcction.zip = parseInt(piezas[2]);
          if (piezas[3]) {
            direcction.ciudad = piezas[3].replace(/\s/g, '');
          }
          if (piezas[4]) {
            direcction.pais = piezas[4].replace(/\s/g, '');
          }
          console.log(direcction);
          return direcction;
        } else {
          return {
            calle: '',
            numero: null,
            zip: null,
            ciudad: '',
            pais: ''
          };
        }
      },
      mostrarNotificacion(texto, color = 'indigo', multiLine = false, position = 'bottom-left') {
        this.$q.notify({
          color: color,
          message: texto,
          position: position,
          timeout: 3000,
          multiLine: multiLine
        })
      },

      /*
      * hora 2 ha de ser la salida,que siempre
      * sera mayor a la hora 1 que sera la entrada
      * */
      diferenciaEntreHoras(hora1, hora2) {

        let array = hora1.split(':');
        const entrada = new Date();
        entrada.setHours(array[0]);
        entrada.setMinutes(array[1]);
        entrada.setSeconds(array[2]);


        let array1 = hora2.split(':');
        const salida = new Date();
        salida.setHours(array1[0]);
        salida.setMinutes(array1[1]);
        salida.setSeconds(array1[2]);

        return Math.round(parseFloat((((salida - entrada) / 1000) / 3600)))
      },
      calcularHorasTotalesDeUnDia(fichajesDia) {
        let total = 0;
        fichajesDia.forEach(fichaje => {
          total += this.diferenciaEntreHoras(fichaje.entrada, fichaje.salida)
        });
        return total;
      },
      calcularHorasTotales(fichajes) {
        let total = 0;
        fichajes.forEach(fichaje => {
          total += this.calcularHorasTotalesDeUnDia(fichaje.fichajes)
        });
        return total;
      },
      async convertUser() {
        const response = await this.$axiosJava.post("/admin/usuario/convert/profesor", {idusuario: this.estudiante.idusuario});
        if (response.status === 200) {
          this.mostrarNotificacion("Usuario convertido a profesor");
          await this.$router.push("/profesor/estudiantes")
        } else {
          this.mostrarNotificacion(response.data, 'red-9')
        }
      },
      async asignIpStudent() {

        const response = await this.$axiosJava.post('/admin/estudiante/ip',{
          ip: this.estudiante.ipFichaje,
          idusuario: this.estudiante.idusuario
        })

        if (response.status===200){
          this.mostrarNotificacion("Ip asignada correctamente")
        }else   {
          this.mostrarNotificacion(response.data, "red-10")
        }

      },
      async removeIpStudent() {


        const response = await this.$axiosJava.delete('/admin/estudiante/ip',{
          data:{
            idusuario: this.estudiante.idusuario
          }
        })

        if (response.status===200){
          this.mostrarNotificacion("Ip eliminada correctamente")
        }else   {
          this.mostrarNotificacion(response.data, "red-10")
        }

        this.estudiante.ipFichaje = null
      }
    },
    async created() {

      const id = this.$route.params.id;
      const response = await this.$axiosJava.get(`/admin/estudiantes/${id}`);
      if (response.status === 200) {
        this.estudiante.idusuario = response.data.idusuario;
        this.estudiante.nombre = response.data.nombre;
        this.estudiante.email = response.data.email;
        this.estudiante.apellidos = response.data.apellidos;
        this.estudiante.dataNacimiento = response.data.dataNacimiento;
        this.estudiante.genero = response.data.genero;
        this.estudiante.foto_perfil = response.data.fotoPerfil;
        this.estudiante.ipFichaje = response.data.ipFichajes;
        this.direccion = this.parserDirection(response.data.direccion);

        console.log(this.estudiante)
        response.data.fichajes.forEach(fichaje => {
          if (!fichaje.horaSalida) {
            return;
          }
          const objetoFichaje = {
            fecha: null,
            fichajes: []
          };
          const fichajeIndividual = {
            entrada: null,
            salida: null
          };

          if (this.allFichajes.length !== 0 && this.allFichajes[this.allFichajes.length - 1].fecha === fichaje.diaFichaje) {
            fichajeIndividual.entrada = fichaje.horaEntrada;
            fichajeIndividual.salida = fichaje.horaSalida;
            this.allFichajes[this.allFichajes.length - 1].fichajes.push(fichajeIndividual);
          } else {
            objetoFichaje.fecha = fichaje.diaFichaje;
            fichajeIndividual.entrada = fichaje.horaEntrada;
            fichajeIndividual.salida = fichaje.horaSalida;
            objetoFichaje.fichajes.push(fichajeIndividual);
            this.allFichajes.push(objetoFichaje);
          }

        });

      } else {
        this.mostrarNotificacion("No se ha podido recuperar la info del usuario con id: " + id, 'red-9')
      }
    }
  }
</script>

<style scoped>
  .scrollArea::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  .scrollArea::-webkit-scrollbar-track {
    background: #ffffff;
  }

  /* Handle */
  .scrollArea::-webkit-scrollbar-thumb {
    background: #418847;
  }

  /* Handle on hover */
  .scrollArea::-webkit-scrollbar-thumb:hover {
    background: #2b572b;
  }

</style>
