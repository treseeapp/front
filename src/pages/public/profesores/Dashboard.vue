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
        todosLosEstudiantes: [
          {
            idusuario: 1,
            nombre: 'Fernando',
            apellidos: 'Perez',
            email: 'fer@tresee.app',
            genero: "HOMBRE",
            foto: require("./assets/demo/perfil_fer.jpg"),
            dataNacimiento: '1998-03-16',
            empresa: {
              idempresa: 1,
              nombre: 'iajoo',
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
          },
          {
            idusuario: 2,
            nombre: 'María',
            apellidos: 'Fernandez',
            email: 'mfernandez@tresee.app',
            genero: "MUJER",
            foto: require("./assets/demo/perfil_mari.jpg"),
            dataNacimiento: '1997-09-16',
            empresa: {
              idempresa: 2,
              nombre: 'tuitah',

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
            ]
          },
          {
            idusuario: 3,
            nombre: 'Paco',
            apellidos: 'Alonso',
            email: 'palonso@tresee.app',
            genero: "HOMBRE",
            foto: require("./assets/demo/perfil_paco.jpg"),
            dataNacimiento: '1990-09-13',
            empresa: {
              idempresa: 3,
              nombre: 'Gogle sle',
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
            ]
          },
          {
            idusuario: 4,
            nombre: 'Richard',
            apellidos: 'Hendricks',
            email: 'rich@tresee.app',
            genero: "HOMBRE",
            foto: require("./assets/demo/perfil_richard.jpeg"),
            dataNacimiento: '1978-01-16',
            empresa: {
              idempresa: 4,
              nombre: 'Fasebuk',

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
            ]
          },
          {
            idusuario: 5,
            nombre: 'Joan',
            apellidos: 'Pacheco',
            email: 'joapacheco@tresee.app',
            genero: "HOMBRE",
            foto: require("./assets/demo/perfil_pacheco.jpg"),
            dataNacimiento: '',
            empresa: {
              idempresa: 5,
              nombre: 'telejrom',

            },
            fichajes: [
              {idfichaje: 1, diaFichaje: "2020/04/27", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 2, diaFichaje: "2020/04/28", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 3, diaFichaje: "2020/04/29", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 5, diaFichaje: "2020/04/30", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 6, diaFichaje: "2020/05/04", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 7, diaFichaje: "2020/05/05", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
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
          },
          {
            idusuario: 6,
            nombre: 'Manolo',
            apellidos: 'Sanchez',
            email: 'msanchez@tresee.app',
            genero: "HOMBRE",
            foto: require("./assets/demo/perfil_manolo.jpg"),
            dataNacimiento: '24-02-1956',
            empresa: null,
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
              {idfichaje: 11, diaFichaje: "2020/05/07", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 12, diaFichaje: "2020/05/08", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 14, diaFichaje: "2020/05/11", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 16, diaFichaje: "2020/05/12", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 17, diaFichaje: "2020/05/13", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 18, diaFichaje: "2020/05/14", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 19, diaFichaje: "2020/05/15", horaEntrada: "09:00:00", horaSalida: "17:00:00"},
              {idfichaje: 20, diaFichaje: "2020/05/16", horaEntrada: "09:04:32", horaSalida: "16:20:50"},
            ]
          },
        ],
        arrayColoresDistintos: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
        empresas: [
          {
            idempresa: 1,
            nombre: 'iajoo',
            estudiantes:'2'

          },
          {
            idempresa: 2,
            nombre: 'tuitah',
            estudiantes:'0'

          },
          {
            idempresa: 3,
            nombre: 'Gogle sle',
            estudiantes:'2'

          },
          {
            idempresa: 4,
            nombre: 'Fasebuk',
            estudiantes:'2'

          },
          {
            idempresa: 5,
            nombre: 'telejrom',
            estudiantes:'1'

          },
          {
            idempresa: 6,
            nombre: 'shaome',
            estudiantes:'1'

          }],
      }
    },
    components: {
      chartLinea: LineChart,
      barrasEmpresasUsuarios: BarChart,
    },
    async created() {

      const dataSet = {
        data: [],
        label: 'Estudiantes',
        backgroundColor: this.arrayColoresDistintos,
        fill: false,
      };

      this.empresas.map(empresa => {
        this.graficoEstudiantesEmpresas.labels.push(empresa.nombre);
        dataSet.data.push(empresa.estudiantes)
      });
      this.graficoEstudiantesEmpresas.datasets.push(dataSet);
      this.mostrarGraficoBarras = true;

      /*
      * Cogemos todos los estudiantes
      * */
/*      await this.cogerEstudiantes();*/
      if (this.todosLosEstudiantes.length > 0) {
        this.changeDataSetStudentsHoursChart(this.todosLosEstudiantes[0]);
      }

      console.log(this.todosLosEstudiantes);
      this.studentTable.data = this.todosLosEstudiantes;
    },
    mounted() {

    },
    methods: {
/*      async cogerEstudiantes() {
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
      },*/
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
