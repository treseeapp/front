<template>
  <q-page class="row bg-imagen">

    <div class="col-lg-8 col-md-12 col-sm-12  col-xs-12 col-12 q-pa-lg column  flex-center ">
      <q-card style="width: 100%" v-if="!graficoHoras.mostrar">
        <q-skeleton height="50vh" width="100%"/>
      </q-card>
      <chartLinea ref="chartLinea" width-canvas-porcentaje="100"
                  :labels="graficoHoras.labels"
                  :datasets="graficoHoras.datasets" v-if="graficoHoras.mostrar"
                  :title="graficoHoras.titulo" height-canvas-porcentaje="40"></chartLinea>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12  col-xs-12 col-12 column  justify-center">
      <q-card v-if="!mostrarTajetaEmpresa" class="q-ma-md">
        <q-skeleton width="100%" height="23vh"/>
      </q-card>
      <q-card class="q-ma-md " v-if="mostrarTajetaEmpresa">
        <q-card-section class="q-pa-sm q-pl-md">
          <q-item class="q-pa-none">
            <q-item-section avatar>
              <q-avatar square size="4.5em">
                <q-img :src="empresa.foto"/>
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h5"> {{empresa.nombre || 'No tienes empresa asignada'}}</q-item-label>
              <q-item-label caption> Tu empresa de FCT</q-item-label>
            </q-item-section>
          </q-item>

        </q-card-section>
        <q-card-section class=" q-pa-none ">
          <q-separator spaced inset=""/>
          <q-splitter
            v-model="splitterModel"
          >

            <template v-slot:before>
              <q-tabs
                v-model="tabEmpresa"
                vertical

                class="text-secondary"

              >
                <q-tab :disable="empresa.nombre===null" :ripple="false" name="Info" label="Info"/>
                <q-tab :disable="empresa.nombre===null" :ripple="false" name="Compañeros" label="Estudiantes"/>
                <q-tab :disable="empresa.nombre===null" :ripple="false" name="Horario" label="Horario"
                       v-if="$q.screen.gt.xs"/>
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="tabEmpresa"
                animated
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
              >
                <q-tab-panel name="Info" class="column q-pa-none">
                  <div v-if="empresa.nombre!==null">
                    <div class="column items-center q-pa-xs">
                      <span class="text-h6">Contacto:</span>{{empresa.contacto}}
                    </div>
                    <div class="column q-pa-xs items-center">
                      <span class="text-h6">Dirección:</span> {{empresa.direccion}}
                    </div>
                  </div>

                  <div v-if="empresa.nombre===''">
                  </div>
                </q-tab-panel>

                <q-tab-panel name="Compañeros" class="q-pa-none">
                  <q-list style="height: 15vh" class="">
                    <q-item v-for="estudiante in empresa.estudiantes" :key="estudiante.idusuario">

                      <q-item-section>
                        <q-item-label>{{ estudiante.nombre }} {{estudiante.apellidos}}</q-item-label>
                        <q-item-label caption lines="1">{{ estudiante.email }}</q-item-label>
                      </q-item-section>

                    </q-item>

                  </q-list>
                </q-tab-panel>

                <q-tab-panel name="Horario" class="q-pa-none" v-if="$q.screen.gt.xs">
                  <q-tabs
                    v-model="tabHorario"
                    class="text-grey"
                    active-color="secondary"
                    indicator-color="secondary"
                    dense
                  >

                    <q-tab v-for="horario in empresa.horarios" :name="horario.dia.dia"
                           :label="horario.dia.dia.substring(0,3)"/>
                  </q-tabs>

                  <q-separator/>

                  <q-tab-panels v-model="tabHorario" animated>
                    <q-tab-panel v-for="horario in empresa.horarios" :name="horario.dia.dia">
                      <div class="row">
                        <div class="col-5 flex justify-end">
                          Entrada
                        </div>
                        <div class="col-2">
                        </div>
                        <div class="col-5 flex">
                          Salida
                        </div>
                      </div>
                      <div class="row ">
                        <div class="text-h6 flex justify-end text-weight-regular  col-5">
                          {{horario.horaEntrada | filtroQuitarSegundoHoras}}

                        </div>
                        <div class="text-h6 text-weight-regular col-2 flex flex-center">-</div>
                        <div class="text-h6 text-weight-regular  col-5 flex">
                          {{horario.horaSalida | filtroQuitarSegundoHoras}}

                        </div>

                      </div>
                    </q-tab-panel>
                  </q-tab-panels>

                </q-tab-panel>
              </q-tab-panels>
            </template>

          </q-splitter>
        </q-card-section>

      </q-card>

      <q-card v-if="!graficoHoras.mostrar" class="q-ma-md">
        <q-skeleton width="100%" height="23vh"/>
      </q-card>
      <q-card class="q-ma-md " v-if="graficoHoras.mostrar">
        <q-card-section>
          <q-item class="q-pa-none  ">
            <q-item-section avatar>
              <q-avatar square size="4.5em" icon="far fa-id-badge"/>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h5">Horas fichadas</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="text-grey-9 q-pa-none flex flex-center text-weight-medium" style="font-size: 2em">
          {{horasTotalesFichadas}}/400 Horas
        </q-card-section>
        <q-card-actions class="">

          <q-chip square color="grey-7" text-color="white" label="Venga a trabajar, que aun te queda"
                  v-if="horasTotalesFichadas < 100"/>
          <q-chip square color="amber-8" text-color="white" label="Así se hace, sigue así"
                  v-if="horasTotalesFichadas >=100 && horasTotalesFichadas < 300"/>
          <q-chip square color="blue" text-color="white" label="Va va, ya casi acabas"
                  v-if="horasTotalesFichadas >=300 && horasTotalesFichadas < 400"/>
          <q-chip square color="green" text-color="white" label="Ya has acabado, enhorabuena !"
                  v-if="horasTotalesFichadas >= 400 "/>

        </q-card-actions>
      </q-card>

    </div>
  </q-page>
</template>

<script>
  import LineChart from '../../../components/charts/LineChart'

  export default {
    components: {
      chartLinea: LineChart,
    },
    name: "Dashboard",
    data() {
      return {
        mostrarTajetaEmpresa: false,
        graficoHoras: {
          labels: [],
          datasets: [],
          titulo: 'Todos los fichajes',
          mostrar: false
        },
        horasTotalesFichadas: 0,
        tabEmpresa: 'Info',
        tabHorario: null,
        splitterModel: 20,
        empresa: {
          nombre: '',
          contacto: '',
          direccion: '',
          foto: '',
          horarios: [],
          estduaintes: [],
        }
      }
    },
    async created() {

      const response = await this.$axiosJava.get('/private/my/empresa');
      if (response.status === 200) {
        this.empresa.nombre = response.data.nombre;
        this.empresa.foto = response.data.fotoEmpresa;
        this.empresa.estudiantes = response.data.estudiantes;
        this.empresa.direccion = response.data.direccion;
        this.empresa.contacto = response.data.contacto;
        this.empresa.horarios = response.data.empresaTieneDias;


        if (this.empresa.horarios != null && this.empresa.horarios.length > 0) {
          // Ordenamos el horario
          this.empresa.horarios = response.data.empresaTieneDias.sort((a, b) => {
            return a.dia.iddia - b.dia.iddia
          });

          if (this.empresa.horarios.length > 0) {
            this.tabHorario = this.empresa.horarios[0].dia.dia;
          }
          this.mostrarTajetaEmpresa = true;
        } else {
          this.mostrarTajetaEmpresa = true;
        }

        /*
        * Cogemos la info del usuario actual
        * */
        const usuarioResponse = await this.$axiosJava.get('/private/usuario');
        if (usuarioResponse.status === 200) {
          this.createDataSet(usuarioResponse.data)
        } else {
          this.mostrarNotificacion("Algo ha ido mal", 'red', false, 'bottom-left')
        }

      }
    },
    methods: {
      createDataSet(student) {
        let labels = [];
        const dataSet = {
          data: [],
          label: 'Horas fichadas',
          borderColor: '#1f8b92',
          backgroundColor: 'rgba(123,233,115,0.21)',
          fill: true
        };


        const fichajesTotales = [];
        student.fichajes.map(fichaje => {
          if (fichaje.horaEntrada && fichaje.horaSalida) {
            let finded = false;
            labels.forEach(label => {
              if (label === fichaje.diaFichaje) finded = true;
            });

            const individual = {
              label: null,
              horasFichadas: null
            };

            if (!finded) {
              labels.push(fichaje.diaFichaje);

              individual.label = fichaje.diaFichaje;
              individual.horasFichadas = this.getDiffHoras(fichaje.horaEntrada, fichaje.horaSalida);
              fichajesTotales.push(individual)
            } else {
              let actual = fichajesTotales.filter(indv => {
                return indv.label === fichaje.diaFichaje
              });
              actual = actual[0];
              actual.horasFichadas += this.getDiffHoras(fichaje.horaEntrada, fichaje.horaSalida);
            }
          }
        });

        fichajesTotales.map(fichaje => {
          dataSet.data.push(fichaje.horasFichadas)
        });

        let horasTotales = 0;
        dataSet.data.map(data => {
          horasTotales += parseFloat(data.toFixed(2));
        });

        this.horasTotalesFichadas = parseFloat(horasTotales.toFixed(1));


        this.graficoHoras.labels = labels;
        this.graficoHoras.datasets = [];

        this.graficoHoras.datasets.push(dataSet);

        this.graficoHoras.mostrar = true;
      },
      getDiffHoras(hora1, hora2) {

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

        return parseFloat((((salida - entrada) / 1000) / 3600).toFixed(2))
      },
      mostrarNotificacion(texto, color = 'indigo', multiLine = false, position = 'top-right') {
        this.$q.notify({
          color: color,
          message: texto,
          position: position,
          timeout: 5000,
          multiLine: multiLine
        })
      },
    },
    filters: {
      filtroQuitarSegundoHoras(hora, posiciones = 5) {
        return hora.substring(0, posiciones)
      }
    }
  }
</script>

<style scoped>
  .scrollDecorated::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  .scrollDecorated::-webkit-scrollbar-track {
    background: #ffffff;
  }

  /* Handle */
  .scrollDecorated::-webkit-scrollbar-thumb {
    background: #ae1fa6;
  }

  /* Handle on hover */
  .scrollDecorated::-webkit-scrollbar-thumb:hover {
    background: #571151;
  }


  .bg-imagen::after {
    content: "";

    background-size: contain;
    background-image: url("assets/bg-11.svg");
    background-repeat: no-repeat;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;

  }
</style>
