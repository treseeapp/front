<template>
  <q-page :class="$q.screen.lt.md?'bg-sm-image row':'bg-lg-image row'">

    <div class="col-8 q-pa-md" v-if="!$q.screen.lt.md">
      <q-date
        v-model="dataFichaje"
        :events="datasAllFichajes"
        event-color="primary"
        class="full-width full-height"
        first-day-of-week="1"
        color="secondary"
        subtitle="Calendario de fichajes"
        today-btn
      />
    </div>
    <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4">

      <q-tab-panels
        v-model="dataFichaje"
        animated
        swipeable
      >
        <q-tab-panel v-for="fichaje in allFichajes" :name="fichaje.fecha">
          <q-card style="min-height: 35vh">
            <q-card-section class="column">
              <div class="flex justify-between items-center">
                <div class="text-h4">{{fichaje.fecha}}</div>

                <q-btn color="blue" icon-right="event" v-if="$q.screen.lt.md">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date v-model="dataFichaje"
                            first-day-of-week="1"
                            color="blue"
                            subtitle="Calendario de fichajes"
                            class="full-width"
                            :options="datasAllFichajes"/>
                  </q-popup-proxy>
                </q-btn>
              </div>
              <div class="caption text-grey-7 q-mb-md">{{fichaje.fichajes.length +' fichaje(s)'}}</div>
            </q-card-section>
            <q-card-section>
              <div class="row q-mb-sm">
                <div class="col-3 flex justify-end">
                  Entrada &nbsp;
                </div>
                <div class="col-1 flex flex-center">
                </div>
                <div class="col-3 flex ">
                  &nbsp;Salida
                </div>

              </div>
              <div class="row q-mt-xs q-mb-xs" v-for="individual in fichaje.fichajes">
                <div class="col-3 flex justify-end">
                  {{individual.entrada}}&nbsp;
                </div>
                <div class="col-1 flex flex-center">
                  -
                </div>
                <div class="col-3 flex ">
                  &nbsp;{{individual.salida}}
                </div>
                <div class="col-5 flex justify-end q-pr-lg">
                  {{diferenciaEntreHoras(individual.entrada, individual.salida)}} hora(s)
                </div>
              </div>
            </q-card-section>
            <q-separator inset=""/>
            <q-card-section class="flex justify-end">
              {{calcularHorasTotalesDeUnDia(fichaje.fichajes)}} hora(s) totales

            </q-card-section>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>

      <q-card class="q-ma-md bg-grey-7 text-white">

        <q-card-section class="flex justify-between" v-if="calcularHorasTotales(allFichajes)===0">
          <div class="text-h5">
            No has realizado ningún fichaje
          </div>
        </q-card-section>

        <q-card-section class="flex justify-between" v-if="calcularHorasTotales(allFichajes)!=0">
          <div class="text-h5">
            Horas totales fichadas
          </div>
          <div class="text-h5">{{calcularHorasTotales(allFichajes)}}/400</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: "Fichajes",
    data() {
      return {
        dataFichaje: '2019/02/01',
        allFichajes: [],
        datasAllFichajes: [],
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
        const datasAllFichajes = [];

        this.fichajes.forEach(fichaje => {
          if (!fichaje.horaSalida) {
            return;
          }
          fichaje.diaFichaje = fichaje.diaFichaje.replace("-", "/")
          fichaje.diaFichaje = fichaje.diaFichaje.replace("-", "/")
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
            datasAllFichajes.push(fichaje.diaFichaje);
            objetoFichaje.fecha = fichaje.diaFichaje;
            fichajeIndividual.entrada = fichaje.horaEntrada;
            fichajeIndividual.salida = fichaje.horaSalida;
            objetoFichaje.fichajes.push(fichajeIndividual);
            this.allFichajes.push(objetoFichaje);
          }
        });

        this.datasAllFichajes = datasAllFichajes;
        this.dataFichaje = '' + datasAllFichajes[datasAllFichajes.length - 1];

    },
    methods: {

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
    }
  }
</script>

<style scoped>
  .bg-lg-image {
    background-image: url("assets/calendar.svg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 23vw;
  }

  .bg-sm-image {
    background-image: url("assets/calendar.svg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 95vw;
  }

</style>
