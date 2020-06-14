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
                  <q-icon name="fas fa-city" color="blue"/>
                </template>
              </q-input>
            </div>

          </div>


          <div class="row q-mt-sm q-pa-sm col-12"
               v-if=" (listadoEmpresas.length!==0 && listadoEmpresasFiltradas.length!==0 ) && vistaListado===true">
            <q-list bordered class="rounded-borders col-12 ">
              <q-item-label header>Empresas</q-item-label>

              <q-item v-for="empresa in listadoEmpresasFiltradas" :key="empresa.idusuario">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img :src="empresa.fotoEmpresa"
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

          <div :class="$q.screen.gt.md?'flex justify-between full-width':'flex flex-center full-width'"
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
      this.vistaCuadricula = true;
      console.log("HOLA")
      /*
      * Cogemos el listado de empresas
      * */
      this.listadoEmpresasFiltradas = this.listadoEmpresas
    },
    data() {
      return {
        vistaCuadricula: false,
        vistaListado: false,
        busquedaEmpresa: '',
        empresasCargadas: false,
        listadoEmpresas: [
          {
            idempresa: 1,
            nombre: 'iajoo',
            contacto: 'iajooo@tresee.app',
            fotoEmpresa: require("./assets/demo/iajoo.jpg")
          },
          {
            idempresa: 2,
            nombre: 'tuitah',
            contacto: 'tuitah@tresee.app',
            fotoEmpresa: require("./assets/demo/tuitah.jpg")
          },
          {
            idempresa: 3,
            nombre: 'Gogle sle',
            contacto: 'gogle@tresee.app',
            fotoEmpresa: require("./assets/demo/googl.jpg")
          },
          {
            idempresa: 4,
            nombre: 'Fasebuk',
            contacto: 'fasebuk@tresee.app',
            fotoEmpresa: require("./assets/demo/fase.jpg")
          },
          {
            idempresa: 5,
            nombre: 'telejrom',
            contacto: 'telejrom@tresee.app',
            fotoEmpresa: require("./assets/demo/telejrom.jpg")
          },
          {
            idempresa: 6,
            nombre: 'shaome',
            contacto: 'shaome@tresee.app',
            fotoEmpresa: require("./assets/demo/shaome.jpg")
          },
        ], // Listado de todas las empresas
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
      async recargarFotoEmpresas() {
      },
      changeLocalVista(obj) {
      },
      filtrarCompanys(texto) {
        texto = texto.toLowerCase();

        this.listadoEmpresasFiltradas = this.listadoEmpresas.filter(empresa => {
          return empresa.nombre.toLowerCase().includes(texto) || empresa.contacto.toLowerCase().includes(texto)
        });
      },
      async cargar(done = () => console.log("no has pasado cb")) {
        this.empresasCargadas = false;
        this.empresasCargadas = true;
        done()
      },
      async saveNewCompany() {

        this.mostrarNotificacion('Empresa creada correctamente', 'green');

        this.clearNewCompany();

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
