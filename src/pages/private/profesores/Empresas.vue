<template>
  <q-page>
    <q-pull-to-refresh @refresh="cargar">
      <div class="row q-pt-lg">
        <div class="col-12 col-xs-12 col-md-2 col-lg-2 "></div>
        <div class="row col-12 col-xs-12 col-md-12 col-lg-8 justify-center">
          <div class="col-12 flex justify-between q-pl-sm q-pr-sm q-mb-md">

            <div class="flex-center flex">
              <q-btn icon="fas fa-th" flat dense @click="()=>{
                if (!vistaCuadricula){
                  this.vistaCuadricula = true;
                  this.vistaListado = false;
                  this.changeLocalVista({
                    vistaCuadricula: true,
                    vistaListado: false
                  })
                  this.recargarFotoEmpresas()
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
                  this.recargarFotoEmpresas()
                }
              }" :color="vistaListado?'blue':'grey-8'"
              />

            </div>

            <div class="flex">
              <q-btn icon="add" color="blue" class="q-mr-md" :label="$q.screen.gt.sm?'Crear empresa':''"
                     @click="addCompanyPopUp=true"/>

              <q-input color="blue" dense outlined v-model="busquedaEmpresa" label="Buscar empresa"
                       @input="filtrarCompanys">
                <template v-slot:append>
                  <q-icon name="search" color="blue"/>
                </template>
              </q-input>
            </div>

          </div>


          <div class="fixed-center text-center" v-if="listadoEmpresas.length===0 && empresasCargadas">
            <p>
              <img
                src="~assets/sad.svg"
                style="width:30vw;max-width:150px;"
              >
            </p>
            <p class="text-faded">
              No hay ninguna empresa creada.
            </p>

          </div>

          <div :class="$q.screen.gt.md?'col-12 flex justify-between':'flex flex-center'" v-if="!empresasCargadas">
            <q-card :class="$q.screen.gt.md?'lg-card-item q-ma-sm':'md-card-item q-ma-sm'" v-for="index in 9"
                    :key="index">
              <q-skeleton height="150px" square/>

              <q-card-section>
                <q-skeleton type="circle" class="absolute " style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="text-h6 q-mt-xs">
                  <q-skeleton type="text"/>
                </div>


              </q-card-section>
              <q-card-section class="row">
                <div class="col-6 flex">
                </div>
                <div class="col-6 flex   content-center justify-end ">
                  <q-skeleton type="text" style="flex-basis: 70%"/>
                </div>
              </q-card-section>
              <q-card-actions class="justify-end no-wrap">

                <q-skeleton type="QBtn"/>
              </q-card-actions>
            </q-card>

          </div>


          <div class="row q-mt-sm q-pa-sm col-12"
               v-if=" (listadoEmpresas.length!==0 && listadoEmpresasFiltradas.length!==0 ) && vistaListado===true">
            <q-list bordered class="rounded-borders col-12 ">
              <q-item-label header>Empresas</q-item-label>

              <q-item v-for="empresa in listadoEmpresasFiltradas" :key="empresa.idusuario">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img :src="empresa.fotoEmpresa" placeholder-src="~/assets/skyline.png"
                           spinner-color="primary"
                           ratio="1"
                           alt="Imagen empresa"/>
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-weight-bold">
                    {{empresa.nombre}}
                  </q-item-label>
                </q-item-section>

                <q-item-section v-if="$q.screen.gt.sm">
                  <q-item-label class="justify-end flex">
                    <span class=" text-grey-7">{{empresa.contacto}}</span>
                  </q-item-label>

                </q-item-section>


                <q-item-section top side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      flat
                      size="13px"
                      color="primary"
                      icon="fas fa-plus" dense round
                      :to="'empresa/'+empresa.idempresa"
                    />
                  </div>
                </q-item-section>
              </q-item>

            </q-list>

          </div>

          <div :class="$q.screen.gt.md?'flex justify-between':'flex flex-center'"
               v-if="(listadoEmpresas.length!==0 || listadoEmpresasFiltradas.length!==0 ) && vistaCuadricula===true">

            <q-card :class="$q.screen.gt.md?'lg-card-item q-ma-sm':'md-card-item q-ma-sm'"
                    v-for="empresa in listadoEmpresasFiltradas"
                    :key="empresa.idempresa">
              <q-img
                :src="empresa.fotoEmpresa"
                placeholder-src="~/assets/skyline.png"
                spinner-color="primary"
                :ratio="16/9"/>

              <q-card-section>
                <div :class="$q.screen.gt.sm?'text-h6':'text-body2 text-bold'">{{ empresa.nombre }}</div>
                <div class="text-grey-7">{{empresa.contacto}}</div>
              </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label=" mas info" color="secondary" :to="'empresa/'+empresa.idempresa"/>
                </q-card-actions>
              </q-card>

          </div>
        </div>
      </div>
    </q-pull-to-refresh>

    <!--    POPUPS AND STICKY THINGS-->
    <q-dialog v-model="addCompanyPopUp" ref="popUpNewCompany" persistent @hide="clearNewCompany">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Nueva empresa</div>
          <div class="text-subtitle2 text-grey-7">Los campos con un * son campos requeridos y han de estar rellenados
            para poder crear una nueva empresa.
          </div>
        </q-card-section>
        <q-separator inset=""/>
        <q-card-section class="q-pt-md">
          <div class="row">
            <q-input @input="comprobarCampos" color="secondary" dense outlined v-model="newCompany.nombre"
                     label="Nombre *" class="col-6 q-pa-xs"
                     lazy-rules :rules="[val=>val && val !=='' || 'Nombre requerido']"/>

            <q-input @input="comprobarCampos" @click="()=> $refs.qDateProxy.show()" dense outlined color="secondary"
                     label="Fecha inicio practicas" v-model="newCompany.fechaInicioPracticas"
                     mask="date" class="col-6 q-pa-xs">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="newCompany.fechaInicioPracticas" @input="() => $refs.qDateProxy.hide()"
                            color="accent"/>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="row q-mt-lg">
            <q-input @input="comprobarCampos" dense outlined v-model="newCompany.contacto" label="Email de contacto *"
                     class="q-pa-xs col-12"
                     color="secondary"
                     lazy-rules :rules="[val=>val && val !=='' || 'Email requerido']">
              <template v-slot:prepend>
                <q-icon name="far fa-envelope">
                </q-icon>
              </template>
            </q-input>
          </div>


          <div class="row q-mt-lg">
            <q-input @input="comprobarCampos" dense outlined v-model="direccionNewCompany.calle" label="Calle *"
                     type="text" color="secondary"
                     class=" col-lg-9 col-md-9 col-sm-9 col-12 q-pa-sm"
                     lazy-rules :rules="[val=>val && val !=='' || 'Requerido']">
              <template v-slot:prepend>
                <q-icon name="fas fa-road"/>
              </template>
            </q-input>
            <q-input @input="comprobarCampos" dense outlined v-model="direccionNewCompany.numero" label="Número *"
                     type="number"
                     color="secondary"
                     class=" col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm "
                     lazy-rules :rules="[val=>val && val !=='' || 'Requerido']">
            </q-input>

          </div>

          <div class="row q-mt-md">
            <q-input @input="comprobarCampos" dense outlined v-model="direccionNewCompany.zip" label="Código postal *"
                     type="number"
                     color="secondary"
                     class=" col-lg-3 col-md-3 col-sm-3 col-12  q-pa-sm"
                     lazy-rules :rules="[val=>val && val !=='' || 'Requerido']">
            </q-input>
            <q-input @input="comprobarCampos" dense outlined v-model="direccionNewCompany.ciudad" label="Ciudad *"
                     type="text" color="secondary"
                     class=" col-lg-5 col-md-5 col-sm-5 col-12 q-pa-sm"
                     lazy-rules :rules="[val=>val && val !=='' || 'Requerido']">
              <template v-slot:prepend>
                <q-icon name="fas fa-city"/>
              </template>
            </q-input>
            <q-input @input="comprobarCampos" dense outlined v-model="direccionNewCompany.pais" label="País *"
                     type="text" color="secondary"
                     class=" col-lg-4 col-md-4 col-sm-4 col-12 q-pa-sm"
                     lazy-rules :rules="[val=>val && val !=='' || 'Requerido']">
              <template v-slot:prepend>
                <q-icon name="fas fa-globe-americas"/>
              </template>
            </q-input>
          </div>

        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup color="red-9"/>

          <q-btn v-if="completeValues===true" outline label="Añadir empresa" @click="saveNewCompany" color="secondary"/>
          <q-btn v-if="completeValues===false" disable outline label="Añadir empresa" @click="saveNewCompany"
                 color="secondary"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
  export default {
    name: "Empresas",
    async created() {
      if (!localStorage.getItem('vistaEmpresas')) {
        localStorage.setItem('vistaEmpresas', JSON.stringify({
          vistaCuadricula: true,
          vistaListado: false
        }));
        this.vistaCuadricula = true;
      } else {
        const guardado = JSON.parse(localStorage.getItem('vistaEmpresas'));
        this.vistaCuadricula = guardado.vistaCuadricula;
        this.vistaListado = guardado.vistaListado;
      }

      /*
      * Cogemos el listado de empresas
      * */
      await this.cargar();
    },
    data() {
      return {
        vistaCuadricula: false,
        vistaListado: false,
        busquedaEmpresa: '',
        empresasCargadas: false,
        listadoEmpresas: [], // Listado de todas las empresas
        listadoEmpresasFiltradas: [], // Listado de las empresas que coincidan con el filtro de busqueda que tendremos
        addCompanyPopUp: false,
        newCompany: {
          nombre: '',
          contacto: '',
          fechaInicioPracticas: null,
          direccion: null,
          fotoEmpresa: ''
        },
        direccionNewCompany: {
          calle: '',
          numero: null,
          zip: null,
          ciudad: '',
          pais: ''
        },
        completeValues: false,
      }
    },
    methods: {
      ordenarEmpresas(empresas) {
        return empresas.sort((a, b) => {
          if (a.nombre[0].toLowerCase() < b.nombre[0].toLowerCase()) {
            return -1;
          }
          if (a.nombre[0].toLowerCase() > b.nombre[0].toLowerCase()) {
            return 1;
          }
          return 0;
        });
      },
      async recargarFotoEmpresas() {
        this.listadoEmpresas.map(empresa => {
          this.$axiosJava.get(`/admin/empresas/${empresa.idempresa}/foto`).then(response => {
            if (response.status === 200) empresa.fotoEmpresa = response.data
          })
        })
      },
      changeLocalVista(obj) {
        localStorage.setItem('vistaEmpresas', JSON.stringify(obj))
      },
      filtrarCompanys(texto) {
        texto = texto.toLowerCase();

        this.listadoEmpresasFiltradas = this.listadoEmpresas.filter(empresa => {
          return empresa.nombre.toLowerCase().includes(texto) || empresa.contacto.toLowerCase().includes(texto)
        });
      },
      async cargar(done = () => console.log("no has pasado cb")) {
        this.empresasCargadas = false;
        const respons = await this.$axiosJava.get("/admin/empresas");
        if (respons.status !== 200) {
          this.mostrarNotificacion("Ha habido un error al cargar el listado de empresas", "red-10")
        } else {
          this.listadoEmpresas = this.ordenarEmpresas(respons.data);
          this.listadoEmpresasFiltradas = this.listadoEmpresas;
          this.empresasCargadas = true;
          done()

        }
      },
      async saveNewCompany() {
        this.newCompany.direccion = this.direccionNewCompany.calle + ', ' + this.direccionNewCompany.numero + ', ' + this.direccionNewCompany.zip + ', ' + this.direccionNewCompany.ciudad + ', ' + this.direccionNewCompany.pais;

        const response = await this.$axiosJava.post('/admin/empresas', this.newCompany);
        if (response.status === 200) {
          this.mostrarNotificacion('Empresa creada correctamente', 'green');
          this.cargar();
          this.clearNewCompany();
        } else {
          this.mostrarNotificacion('Ha habido un error.', 'red-9')
        }
        this.$refs.popUpNewCompany.hide()
      },
      parserDirection(dir) {
        dir = dir.replace(/\s/g, '');
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
          direcction.ciudad = piezas[3];
        }
        if (piezas[4]) {
          direcction.pais = piezas[4];
        }
        return direcction;
      },
      mostrarNotificacion(texto, color = indigo) {
        this.$q.notify({
          color: color,
          message: texto,
          position: 'top-right',
          timeout: 5000
        })
      },
      clearNewCompany() {
        this.newCompany.nombre = '';
        this.newCompany.direccion = null;
        this.newCompany.fechaInicioPracticas = null;
        this.newCompany.contacto = '';
        this.direccionNewCompany = {
          calle: '',
          numero: null,
          zip: null,
          ciudad: '',
          pais: ''
        };

        this.completeValues = false;
      },
      comprobarCampos() {

        if (this.newCompany.nombre !== '' && this.newCompany.contacto !== '' && this.newCompany.fechaInicioPracticas != null && this.direccionNewCompany.calle !== '' &&
          this.direccionNewCompany.numero !== null && this.direccionNewCompany.zip !== null && this.direccionNewCompany.ciudad !== '' && this.direccionNewCompany.pais !== '') {
          this.completeValues = true;
        } else {
          this.completeValues = false;
        }
      }
    }
  }
</script>

<style scoped>


  .lg-card-item {
    flex-basis: 30%;
  }

  .md-card-item {
    flex-basis: 45%;
  }

</style>
