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
          nombre: 'iajoo',
          contacto: 'iajooo@tresee.app',
          direccion: 'Calle de la Vida Nº45, Marratxi, 07141',
          foto: require("./assets/demo/iajoo.jpg"),
          horarios: [ { "idempresa_tiene_dia": null, "dia": { "iddia": 1, "dia": "LUNES" }, "horaEntrada": "08:00:00", "horaSalida": "16:00:00" }, { "idempresa_tiene_dia": null, "dia": { "iddia": 2, "dia": "MARTES" }, "horaEntrada": "08:00:00", "horaSalida": "16:00:00" }, { "idempresa_tiene_dia": null, "dia": { "iddia": 3, "dia": "MIERCOLES" }, "horaEntrada": "08:00:00", "horaSalida": "16:00:00" }, { "idempresa_tiene_dia": null, "dia": { "iddia": 4, "dia": "JUEVES" }, "horaEntrada": "07:00:00", "horaSalida": "17:00:00" }, { "idempresa_tiene_dia": null, "dia": { "iddia": 5, "dia": "VIERNES" }, "horaEntrada": "08:00:00", "horaSalida": "14:00:00" } ],
          estudiantes: [
            {
            idusuario:1,
            nombre:'Pablo',
            apellidos:'Escobar',
            email:'pabloescobar@gmail.com'},
            {
              idusuario:2,
              nombre:'Pepito',
              apellidos:'Lolo',
              email:'pepitololo@gmail.com'}
            ],
        },
        fichajes: [
          {idfichaje: 1, diaFichaje: "2020/04/27", horaEntrada: "09:01:12", horaSalida: "17:20:00"},
          {idfichaje: 2, diaFichaje: "2020/04/28", horaEntrada: "09:03:12", horaSalida: "17:05:59"},
          {idfichaje: 3, diaFichaje: "2020/04/29", horaEntrada: "09:23:42", horaSalida: "13:05:59"},
          {idfichaje: 4, diaFichaje: "2020/04/29", horaEntrada: "13:55:12", horaSalida: "17:55:00"},
          {idfichaje: 5, diaFichaje: "2020/04/30", horaEntrada: "09:00:00", horaSalida: "15:00:00"},
          {idfichaje: 6, diaFichaje: "2020/05/04", horaEntrada: "09:23:42", horaSalida: "17:54:40"},
          {idfichaje: 7, diaFichaje: "2020/05/05", horaEntrada: "08:23:42", horaSalida: "18:15:00"},
          {idfichaje: 8, diaFichaje: "2020/05/06", horaEntrada: "09:02:42", horaSalida: "12:50:50"},
          {idfichaje: 9, diaFichaje: "2020/05/06", horaEntrada: "15:00:00", horaSalida: "15:45:10"},
          {idfichaje: 10, diaFichaje: "2020/05/06", horaEntrada: "16:23:42", horaSalida: "17:55:55"},
          {idfichaje: 11, diaFichaje: "2020/05/07", horaEntrada: "09:01:35", horaSalida: "17:30:00"},
          {idfichaje: 12, diaFichaje: "2020/05/08", horaEntrada: "08:15:30", horaSalida: "13:45:00"},
          {idfichaje: 13, diaFichaje: "2020/05/08", horaEntrada: "14:30:45", horaSalida: "17:25:52"},
          {idfichaje: 14, diaFichaje: "2020/05/11", horaEntrada: "09:05:03", horaSalida: "15:10:10"},
          {idfichaje: 15, diaFichaje: "2020/05/11", horaEntrada: "16:23:42", horaSalida: "19:50:20"},
          {idfichaje: 16, diaFichaje: "2020/05/12", horaEntrada: "09:01:12", horaSalida: "17:20:00"},
          {idfichaje: 17, diaFichaje: "2020/05/13", horaEntrada: "09:10:15", horaSalida: "17:10:10"},
          {idfichaje: 18, diaFichaje: "2020/05/14", horaEntrada: "08:20:50", horaSalida: "17:05:30"},
          {idfichaje: 19, diaFichaje: "2020/05/15", horaEntrada: "09:01:30", horaSalida: "17:30:30"},
          {idfichaje: 20, diaFichaje: "2020/05/16", horaEntrada: "09:04:32", horaSalida: "16:20:50"},
        ]
      }
    },
    async created() {

        if (this.empresa.horarios != null && this.empresa.horarios.length > 0) {

          if (this.empresa.horarios.length > 0) {
            this.tabHorario = this.empresa.horarios[0].dia.dia;
          }
          this.mostrarTajetaEmpresa = true;
        } else {
          this.mostrarTajetaEmpresa = true;
        }

        this.createDataSet();
    },
    methods: {
      createDataSet() {
        let labels = [];
        const dataSet = {
          data: [],
          label: 'Horas fichadas',
          borderColor: '#1f8b92',
          backgroundColor: 'rgba(123,233,115,0.21)',
          fill: true
        };

        const fichajesTotales = [];
        this.fichajes.map(fichaje => {
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

        console.log("HACE EL TRUE");

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
