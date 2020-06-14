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
      }
    },
    async created() {
      const response = await this.$axiosJava.get("/private/usuario")
      if (response.status === 200) {
        const datasAllFichajes = [];
        response.data.fichajes.forEach(fichaje => {
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
      }

    },
    methods: {
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
