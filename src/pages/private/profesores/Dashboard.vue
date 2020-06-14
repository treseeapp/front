<template>
  <q-page class="row bg-imagen">
    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12  q-pa-lg">
      <q-card class="no-shadow bg-transparent">
        <q-card-section v-if="!mostrarGraficoLineas">
          <q-skeleton height="60vh" animation="wave"/>
        </q-card-section>
        <q-card-section class="row" v-if="mostrarGraficoLineas">
          <chartLinea ref="chartLinea" class="no-border" width-canvas-porcentaje="100"
                      :labels="graficoHorasEstudiantes.labels"
                      :datasets="graficoHorasEstudiantes.datasets"
                      :title="graficoHorasEstudiantes.titulo"></chartLinea>

          <q-btn class="absolute-top-right q-mt-lg q-mr-lg" label="Seleccionar estudiante"
                 @click="reloadAndChangeDatasetHoras" color="green">
            <q-menu

              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <q-list style="max-height: 400px">
                <q-item clickable v-ripple v-for="student in todosLosEstudiantes"
                        @click="changeDataSetStudentsHoursChart(student)">
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img :src="student.foto"
                             placeholder-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr1v58ICPpgv8t4zeWFfmJqBre8Xedi8agxMpKEHR-G5L06sic"
                             :ratio="1" spinner-color="primary"/>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>{{student.nombre}} {{student.apellidos}}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

        </q-card-section>
      </q-card>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12  q-pa-lg">
      <q-card class="shadow-0 bg-transparent">
        <q-card-section>
          <q-skeleton height="30vh" animation="wave" v-if="!mostrarGraficoBarras"/>
        </q-card-section>

        <q-card-section>
          <barras-empresas-usuarios v-if="mostrarGraficoBarras" :title="graficoEstudiantesEmpresas.titulo"
                                    :labels="graficoEstudiantesEmpresas.labels"
                                    :datasets="graficoEstudiantesEmpresas.datasets"
                                    width-canvas-porcentaje="100"></barras-empresas-usuarios>
        </q-card-section>
        <q-card-section>

          <q-table
            :rows-per-page-options="[5]"
            title="Estudiantes"
            :data="studentTable.data"
            :columns="studentTable.columns"
            row-key="name"
            :visible-columns="studentTable.visibleColumns"
          >
            <template v-slot:top>
              <img
                style="height: 50px; width: 50px"
                src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
              >

              <q-space/>

              <q-select
                v-model="studentTable.visibleColumns"
                multiple
                outlined
                dense
                options-dense
                :display-value="$q.lang.table.columns"
                emit-value
                map-options
                :options="studentTable.columns"
                option-value="name"
                options-cover
                style="min-width: 150px"
              />
            </template>

          </q-table>

        </q-card-section>
      </q-card>
    </div>


  </q-page>
</template>

<script>
  import LineChart from '../../../components/charts/LineChart'
  import BarChart from '../../../components/charts/BarChart'

  export default {
    name: "Dashboard",
    data() {
      return {
        studentTable: {
          visibleColumns: ['nombre', 'apellidos'],
          columns: [

            {name: 'nombre', align: 'left', label: 'Nombre', field: 'nombre', sortable: true},
            {name: 'apellidos', align: 'center', label: 'Apellidos', field: 'apellidos', sortable: true},
            {name: 'email', label: 'Email', field: 'email', sortable: true},
            {name: 'dataNacimiento', label: 'Fecha de nac', field: 'dataNacimiento', sortable: true},

          ],
          data: []
        },
        graficoEstudiantesEmpresas: {
          labels: [],
          datasets: [],
          titulo: 'Estudiantes por empresa actuales'
        },
        graficoHorasEstudiantes: {
          labels: [],
          datasets: [],
          titulo: 'Horas fichadas por dia'
        },
        mostrarGraficoBarras: false,
        mostrarGraficoLineas: false,
        todosLosEstudiantes: [],
        arrayColoresDistintos: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850']
      }
    },
    components: {
      chartLinea: LineChart,
      barrasEmpresasUsuarios: BarChart,
    },
    async created() {


      /*
      * Cogemos todas las empresas para saber el numero de estudiantes que tienen cada empresa
      * */
      const response = await this.$axiosJava.get('/admin/empresas');
      if (response.status === 200) {
        const body = response.data;
        const dataSet = {
          data: [],
          label: 'Estudiantes',
          backgroundColor: this.arrayColoresDistintos,
          fill: false,
        };
        body.map(empresa => {
          this.graficoEstudiantesEmpresas.labels.push(empresa.nombre);
          dataSet.data.push(empresa.estudiantes.length)
        });
        this.graficoEstudiantesEmpresas.datasets.push(dataSet);
        this.mostrarGraficoBarras = true;
      }

      /*
      * Cogemos todos los estudiantes
      * */
      await this.cogerEstudiantes();
      if (this.todosLosEstudiantes.length > 0) {
        this.changeDataSetStudentsHoursChart(this.todosLosEstudiantes[0]);
      }
      this.studentTable.data = this.todosLosEstudiantes;
    },
    mounted() {

    },
    methods: {
      async cogerEstudiantes() {
        const studentResponse = await this.$axiosJava.get('/admin/estudiantes');
        if (studentResponse.status === 200) {
          const allResponses = [];
          studentResponse.data.forEach(student => {
            allResponses.push(this.$axiosJava.get('/admin/estudiantes/' + student.idusuario + '/foto'));
          });

          const resultados = await Promise.all(allResponses);
          let index = 0;
          resultados.map(result => {
            if (result.status === 200) {
              studentResponse.data[index].foto = result.data
            }
            index++;
          });

          this.todosLosEstudiantes = studentResponse.data;
        }
      },
      changeDataSetStudentsHoursChart(student) {
        let labels = [];
        const dataSet = {
          data: [],
          label: 'Horas fichadas',
          borderColor: '#283592',
          backgroundColor: 'rgba(233,67,122,0.21)',
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


        this.graficoHorasEstudiantes.titulo = student.nombre + ' ' + student.apellidos + ' tiene ' + horasTotales + ' horas fichadas';
        this.graficoHorasEstudiantes.labels = labels;
        this.graficoHorasEstudiantes.datasets = [];

        this.graficoHorasEstudiantes.datasets.push(dataSet);
        if (this.mostrarGraficoLineas) {
          this.$refs.chartLinea.updateChart(this.graficoHorasEstudiantes.labels, this.graficoHorasEstudiantes.datasets, this.graficoHorasEstudiantes.titulo);
        }
        this.mostrarGraficoLineas = true;
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
      reloadAndChangeDatasetHoras() {
        this.cogerEstudiantes()
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
    background-image: url("assets/bg-2.svg");
    background-repeat: no-repeat;
    opacity: 0.4;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;

  }
</style>
