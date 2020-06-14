<template>
  <q-page>
    <q-pull-to-refresh @refresh="cargarEstudiantes">
      <div class="row q-pt-lg">
        <div class="col-12 col-xs-12 col-md-2 col-lg-2 "></div>
        <div class="row col-12 col-xs-12 col-md-12 col-lg-8 justify-center">
          <div class="col-12 flex justify-between q-pl-sm q-pr-sm ">

            <div class="flex-center flex">
              <q-btn icon="fas fa-th" flat dense @click="()=>{
                if (!vistaCuadricula){
                  this.vistaCuadricula = true;
                  this.vistaListado = false;
                  this.changeLocalVista({
                    vistaCuadricula: true,
                    vistaListado: false
                  })
                  this.recargarFotoEstudiantes()
                }
              }" :color="vistaCuadricula?'blue':'grey-8'"
              />
              <q-btn icon="fas fa-bars" flat dense @click="()=>{
                if (!vistaListado){
                  this.vistaCuadricula = false;
                  this.vistaListado = true;
                  this.changeLocalVista({
                    vistaCuadricula: false,
                    vistaListado: true
                  })
                  this.recargarFotoEstudiantes()
                }
              }"
                     :color="vistaListado?'blue':'grey-8'"
              />

            </div>

            <div class="flex">
              <q-btn icon="keyboard_arrow_down" color="blue" class="q-mr-md"
                     :label="$q.screen.gt.sm?'Añadir estudiantes':''">
                <q-menu fit>
                  <q-list style="min-width: 100px">
                    <q-item clickable v-close-popup @click="">
                      <q-item-section avatar>
                        <q-icon name="fas fa-users"/>
                      </q-item-section>
                      <q-item-section>Manual</q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="addCSV=true">
                      <q-item-section avatar>
                        <q-icon name="fas fa-file-csv"/>
                      </q-item-section>
                      <q-item-section>
                        Importar csv
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>

              </q-btn>

              <q-input color="blue" dense outlined v-model="busquedaEstudiante" label="Buscar estudiante"
                       @input="filterStudents">
                <template v-slot:append>
                  <q-icon name="fas fa-user-tie" color="blue"/>
                </template>
              </q-input>
            </div>
          </div>

          <div class="fixed-center text-center" v-if="listadoEstudiantes.length===0 && estudiantesHanSidoCargados">
            <p>
              <img
                src="~assets/sad.svg"
                style="width:30vw;max-width:150px;"
                alt="imagen sad"
              >
            </p>
            <p class="text-faded">
              No hay ninguna estudiante en la bbdd.
            </p>
          </div>

          <div :class="$q.screen.gt.md?'flex justify-between':'flex flex-center'" v-if="!estudiantesHanSidoCargados">
            <q-card :class="$q.screen.gt.md?'lg-card-item q-ma-sm':'md-card-item q-ma-sm'" v-for="index in 6"
                    :key="index">
              <q-skeleton height="150px" square/>

              <q-card-section>
                <q-skeleton type="circle" class="absolute " style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="text-h6 q-mt-sm">
                  <q-skeleton type="text"/>
                </div>
                <div class=" text-grey-7 ">
                  <q-skeleton type="text"/>
                </div>

              </q-card-section>
              <q-card-section class="row">
                <div class="col-6 flex">
                  <q-skeleton type="QAvatar"/>

                </div>
                <div class="col-6 flex   content-center justify-end ">
                  <q-skeleton type="text" style="flex-basis: 70%"/>
                </div>
              </q-card-section>
              <q-card-actions class="justify-between no-wrap">

                <q-skeleton type="QChip"/>
                <q-skeleton type="QBtn"/>
              </q-card-actions>
            </q-card>

          </div>


          <div class="row q-mt-sm q-pa-sm col-12"
               v-if=" (listadoEstudiantes.length!==0 || listadoEstudiantesFiltrados.length!==0 ) && vistaListado===true">
            <q-list bordered class="rounded-borders col-12 ">
              <q-item-label header>Estudiantes</q-item-label>
              <q-item v-for="estudiante in listadoEstudiantesFiltrados" :key="estudiante.idusuario">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img :src="estudiante.fotoPerfil" placeholder-src="~/assets/user-placeholder.png"
                           spinner-color="primary"
                           ratio="1"
                           alt="Imagen perfil usuario"/>
                  </q-avatar>
                </q-item-section>

                <q-item-section class="col-2 ">
                  <q-item-label class="text-weight-mediumn">{{estudiante.nombre}} {{estudiante.apellidos}}
                  </q-item-label>
                </q-item-section>

                <q-item-section class="col-3" v-if="$q.screen.gt.sm">
                  <q-item-label class="justify-end flex">
                    <span class=" text-grey-7">{{estudiante.email}}</span>
                  </q-item-label>

                </q-item-section>
                <q-item-section>
                  <q-chip square color="white" text-color="green-7" icon="fas fa-circle"
                          v-if="estudiante.trabajando && !$q.dark.isActive">
                    Trabajando
                  </q-chip>
                  <q-chip square color="white" text-color="grey-6" icon="fas fa-circle"
                          v-if="!estudiante.trabajando && !$q.dark.isActive">
                    No trabajando
                  </q-chip>

                  <q-chip square text-color="green-6" icon="fas fa-circle"
                          v-if="estudiante.trabajando && $q.dark.isActive">
                    Trabajando
                  </q-chip>
                  <q-chip square text-color="white" icon="fas fa-circle"
                          v-if="!estudiante.trabajando && $q.dark.isActive">
                    No trabajando
                  </q-chip>

                </q-item-section>

                <q-item-section top side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-avatar color="secondary" size="30px" text-color="white" icon="fas fa-male"
                              v-if="estudiante.genero!=null && estudiante.genero.toLowerCase()==='hombre'">

                      <q-tooltip anchor="center left" self="center right" transition-show="flip-right"
                                 transition-hide="flip-left" content-class="bg-indigo" :offset="[10, 10]">
                        Hombre
                      </q-tooltip>

                    </q-avatar>
                    <q-avatar color="secondary" size="30px" text-color="white" icon="fas fa-female"
                              v-if="estudiante.genero!=null && estudiante.genero.toLowerCase()==='mujer'">

                      <q-tooltip anchor="center left" self="center right" transition-show="flip-right"
                                 transition-hide="flip-left" content-class="bg-indigo" :offset="[10, 10]">
                        Mujer
                      </q-tooltip>

                    </q-avatar>
                    <q-avatar color="secondary" size="30px" text-color="white" icon="fas fa-horse"
                              v-if="estudiante.genero===null || estudiante.genero.toLowerCase()==='indefinido'">

                      <q-tooltip anchor="center left" self="center right" transition-show="flip-right"
                                 transition-hide="flip-left" content-class="bg-indigo" :offset="[10, 10]">
                        Indefinido
                      </q-tooltip>

                    </q-avatar>


                    <q-btn
                      flat
                      size="13px"
                      color="primary"
                      icon="fas fa-plus" dense round>

                      <q-menu anchor="top right" self="top left">
                        <q-item clickable :to="'estudiante/'+estudiante.idusuario">
                          <q-item-section>Ver estudiante</q-item-section>
                        </q-item>
                        <q-separator inset="" v-if="estudiante.empresa!=null"/>
                        <q-item clickable v-if="estudiante.empresa!=null"
                                :to="'/profesor/empresa/'+estudiante.empresa.idempresa">
                          <q-item-section>Ver empresa</q-item-section>
                        </q-item>
                      </q-menu>
                    </q-btn>
                  </div>
                </q-item-section>
              </q-item>

            </q-list>

          </div>

          <div :class="$q.screen.gt.md?'flex justify-between':'flex flex-center'"
               v-if=" (listadoEstudiantes.length!==0 || listadoEstudiantesFiltrados.length!==0 ) && vistaCuadricula===true">

            <q-card :class="$q.screen.gt.md?'lg-card-item q-ma-sm':'md-card-item q-ma-sm'"
                    :key="estudiante.idusuario"
                    v-for="estudiante in listadoEstudiantesFiltrados"
            >
              <q-img
                :src="estudiante.fotoPerfil"
                placeholder-src="~/assets/user-placeholder.png"
                spinner-color="primary"
                :ratio="16/9"
                v-if="(estudiante.genero!=null && estudiante.genero.toLowerCase()==='hombre') || (estudiante.genero===null || estudiante.genero.toLowerCase()==='indefinido')"
                alt="Imagen de perfil de usuario hombre"
              />

              <q-img
                :src="estudiante.fotoPerfil"
                placeholder-src="~/assets/user-placeholder-woman.jpg"
                spinner-color="primary"
                :ratio="16/9"
                position="50% 30%"
                v-if="estudiante.genero!=null && estudiante.genero.toLowerCase()==='mujer'"
                alt="Imagen de perfil de usuario mujer"
              />

              <q-card-section>
                <q-btn

                  fab-mini
                  color="primary"
                  icon="fas fa-plus"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                  :to="'estudiante/'+estudiante.idusuario"
                />
                <div :class="$q.screen.gt.sm?'text-h6':'text-body1 text-bold'">{{ estudiante.nombre }}
                  {{estudiante.apellidos}}
                </div>
                <div class="text-grey-7 ">{{estudiante.email}}</div>


              </q-card-section>
              <q-card-section class="row">
                <div class="col-6" align="left">
                  <q-avatar color="secondary" size="35px" text-color="white" icon="fas fa-male"
                            v-if="estudiante.genero!=null && estudiante.genero.toLowerCase()==='hombre'">
                    <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                      Hombre
                    </q-tooltip>
                  </q-avatar>
                  <q-avatar color="secondary" size="35px" text-color="white" icon="fas fa-female"
                            v-if="estudiante.genero!=null && estudiante.genero.toLowerCase()==='mujer'">
                    <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                      Mujer
                    </q-tooltip>
                  </q-avatar>
                  <q-avatar color="secondary" size="35px" text-color="white" icon="fas fa-horse"
                            v-if="estudiante.genero===null || estudiante.genero.toLowerCase()==='indefinido'">
                    <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
                      Indefinido
                    </q-tooltip>
                  </q-avatar>

                </div>
                <div class="col-6" align="right">
                  <q-avatar size="30px" text-color="grey-14" icon="fas fa-birthday-cake"/>
                  {{estudiante.dataNacimiento}}
                  <span v-if="estudiante.dataNacimiento===null">N/A</span>
                </div>
              </q-card-section>

              <q-card-actions class="justify-between no-wrap">
                <q-chip square color="white" text-color="green-7" icon="fas fa-circle" v-if="estudiante.trabajando && !$q.dark.isActive">
                  Trabajando
                </q-chip>
                <q-chip square color="white" text-color="grey-6" icon="fas fa-circle" v-if="!estudiante.trabajando && !$q.dark.isActive">
                  No trabajando
                </q-chip>

                <q-chip square text-color="green-6" icon="fas fa-circle" v-if="estudiante.trabajando && $q.dark.isActive">
                  Trabajando
                </q-chip>
                <q-chip square text-color="white" icon="fas fa-circle" v-if="!estudiante.trabajando && $q.dark.isActive">
                  No trabajando
                </q-chip>

                <q-btn class="" dense flat label="Sin empresa" disable color="grey-8" v-if="estudiante.empresa==null && !$q.dark.isActive"/>
                <q-btn class="" flat :label="estudiante.empresa.nombre" color="secondary"
                       v-if="estudiante.empresa!=null && !$q.dark.isActive" :to="'/profesor/empresa/'+estudiante.empresa.idempresa"/>

                <q-btn class="" dense flat label="Sin empresa" disable text-color="white" v-if="estudiante.empresa==null && $q.dark.isActive"/>
                <q-btn class="" flat :label="estudiante.empresa.nombre" color="white"
                       v-if="estudiante.empresa!=null && $q.dark.isActive" :to="'/profesor/empresa/'+estudiante.empresa.idempresa"/>

              </q-card-actions>
            </q-card>

          </div>
        </div>
      </div>
    </q-pull-to-refresh>

    <q-dialog v-model="addCSV">
      <q-card class="column   ">
        <q-card-section>
          <div class="text-h5">Importar estudiantes</div>
        </q-card-section>
        <q-separator/>

        <q-card-section>
          <div class="text-h6 text-grey-8">
            Formato csv
          </div>
          <div class="text-subtitle2 text-grey-7">
            El archivo csv, ha de cumplir el siguiente formato
          </div>
          <div class="font-code q-mt-sm q-mb-md bg-grey-3 rounded-borders q-pa-md   items-center">
            email,nombre,apellidos
          </div>
          <div class="text-justify">
            No importa el orden en el que esten las columnas, pero si que hemos de recibir por seguro, es la cabecera de
            cada columna exactamente,
            como esta establecido en el ejemplo. <br>

            <span class="text-bold">Cada linea</span> del archivo csv, se contará como un usuario <span
            class="text-bold">individual</span>. Si por algun caso, no se puede añadir
            un usuario en especifico o mas.
            Se procederá a añadir todos los que si se puedan, y los que no se puedan, no se añadiran.
            Los emails, han de ser <span class="text-bold">unicos</span>.
            <br>
            A cada usuario que añadas, se le enviará un correo electronico a su dirección email.
            con instrucciones detalladas de como continuar el proceso de registro.
          </div>

        </q-card-section>

        <q-card-section>
          <q-uploader class="full-width"
                      :url="urlUploadCSV"
                      label="Seleccionar o arrastrar csv"
                      color="grey-3"
                      text-color="black"
                      accept=".csv"
                      auto-upload
                      method="POST"
                      field-name="file"
                      :headers="[{name: 'Authorization', value: 'Bearer '+token}]"
                      :with-credentials="true"
                      @uploaded="csvUploaded"
                      @failed="csvFailed()"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="red-8 " v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
  export default {
    name: "Estudiantes",
    data() {
      return {
        urlUploadCSV: process.env.API_JAVA + '/admin/estudiantes/upload/csv',
        token: localStorage.getItem('refreshToken'),
        addCSV: false,
        listadoEstudiantes: {},
        listadoEstudiantesFiltrados: {},
        estudiantesHanSidoCargados: false,
        busquedaEstudiante: '',
        vistaCuadricula: false,
        vistaListado: false
      }
    },
    created() {
      if (!localStorage.getItem('vistaEstudiantes')) {
        localStorage.setItem('vistaEstudiantes', JSON.stringify({
          vistaCuadricula: true,
          vistaListado: false
        }));
        this.vistaCuadricula = true;
      } else {
        const guardado = JSON.parse(localStorage.getItem('vistaEstudiantes'));
        this.vistaCuadricula = guardado.vistaCuadricula;
        this.vistaListado = guardado.vistaListado;
      }

      this.cargarEstudiantes();
    },
    methods: {
      csvFailed() {
        this.mostrarNotificacion("Ha habido un error al subir los usuarios", 'red-10', false, 'bottom-left')
      },
      async csvUploaded() {
        this.addCSV=false;
        this.mostrarNotificacion("Usuarios añadidos correctamente", 'indigo', false, 'bottom-left')
        await this.cargarEstudiantes()
      },
      changeLocalVista(obj) {
        localStorage.setItem('vistaEstudiantes', JSON.stringify(obj))
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
      async cargarEstudiantes(done = () => console.log("no has pasado cb")) {
        this.estudiantesHanSidoCargados = false;
        const response = await this.$axiosJava.get('/admin/estudiantes');
        if (response.status === 200) {
          this.listadoEstudiantes = this.ordenarEstudiantes(response.data.map(estudiante => {
            if (estudiante.fichajes.length > 0) {
              estudiante.trabajando = estudiante.fichajes[estudiante.fichajes.length - 1].horaSalida === null;
            } else {
              estudiante.trabajando = false;
            }
            return estudiante;
          }));
          this.listadoEstudiantesFiltrados = this.listadoEstudiantes;
          this.estudiantesHanSidoCargados = true;

        }
        done()
      },
      ordenarEstudiantes(estudiantes) {
        return estudiantes.sort((a, b) => {
          if (a.nombre[0].toLowerCase() < b.nombre[0].toLowerCase()) {
            return -1;
          }
          if (a.nombre[0].toLowerCase() > b.nombre[0].toLowerCase()) {
            return 1;
          }
          return 0;
        });
      },
      async recargarFotoEstudiantes() {
        this.listadoEstudiantes.map(estudiante => {
          this.$axiosJava.get(`/admin/estudiantes/${estudiante.idusuario}/foto`).then(response => {
            if (response.status === 200) estudiante.fotoPerfil = response.data
          })
        })

      },
      filterStudents(texto) {
        texto = texto.toLowerCase();
        this.listadoEstudiantesFiltrados = this.listadoEstudiantes.filter(student => {
          return student.nombre.toLowerCase().includes(texto) || student.apellidos.toLowerCase().includes(texto) || student.email.toLowerCase().includes(texto)
        })
      }
    }
  }
</script>

<style scoped>
  .lg-card-item {
    flex-basis: 30%;
  }

  .md-card-item {
    flex-basis: 35%;
  }

  /*HOLA PRUEBA*/
</style>
