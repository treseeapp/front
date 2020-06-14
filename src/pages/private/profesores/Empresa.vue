<template>

  <q-page class="row q-pa-lg">

    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12 q-pa-sm">

      <q-card class="q-pa-sm">
        <q-card-section class="flex">
          <div class="text-h5">Información de la empresa</div>
          <q-space/>
          <q-icon name="info" color="secondary" class="cursor-pointer" style="font-size: 2em;">
            <q-tooltip content-class="bg-purple" content-style="font-size: 13px" :offset="[10, 10]">
              Aquí puede ver toda la información referente a la emrpesa.
            </q-tooltip>
          </q-icon>
        </q-card-section>

        <q-separator/>

        <q-card-section>
          <div class="text-h6 text-grey-6 q-ml-md">Informacion</div>
          <div class="row wrap justify-center">
            <div class="q-mt-lg column col-lg-6 col-md-6 col-sm-10 col-xs-12">
              <q-input :readonly="!editarEmpresa" outlined v-model="empresa.nombre" label="Nombre empresa" type="text"
                       color="secondary"
                       class="col-lg-3 col-md-3 col-sm-3 col-xs-3 q-pa-sm">
              </q-input>

              <q-input :readonly="!editarEmpresa" outlined v-model="empresa.contacto" label="Contacto" type="text"
                       color="secondary"
                       class="col-lg-3 col-md-3 col-sm-3 col-xs-3 q-pa-sm q-mt-lg">
              </q-input>

              <q-input :readonly="!editarEmpresa" outlined v-model="empresa.fechaInicioPracticas"
                       @click="()=> $refs.qDateProxy.show()"
                       label="Fecha inicio prácticas"
                       mask="date"
                       class="col-lg-3 col-md-3 col-sm-3 col-xs-3 q-pa-sm q-mt-lg" color="secondary">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy">
                      <q-date :readonly="!editarEmpresa" color="accent" v-model="empresa.fechaInicioPracticas"
                              first-day-of-week="1"
                              @input="()=>$refs.qDateProxy.hide()"/>
                    </q-popup-proxy>
                  </q-icon>
                </template>
                <q-tooltip anchor="bottom right" self="bottom right" :offset="[-10, 35]" content-class="bg-accent"
                           content-style="font-size: 12px">
                  Pulsa el icono
                  <q-icon name="fas fa-level-up-alt"></q-icon>
                </q-tooltip>
              </q-input>

            </div>
            <q-card class="column content-center q-ma-sm q-ml-auto q-mr-auto" style="width: 250px">
              <q-card-section class="q-ml-autoflex flex-center">
                <div class="text-h6 text-grey-6 text-center">Fotografia</div>
              </q-card-section>
              <q-card-section class="flex flex-center" style="width: 250px">

                <q-img
                  :src="empresa.fotoEmpresa"
                  placeholder-src="~/assets/skyline.png"
                  spinner-color="primary"
                  :ratio="16/9"/>

                <q-btn flat class="q-mt-md" color="secondary" @click="upload=true" label="Cambiar foto"
                       icon="far fa-edit"/>

              </q-card-section>
            </q-card>
          </div>

        </q-card-section>

        <q-card-section class="q-mt-md">
          <div class="text-h6 text-grey-6 q-ml-md">Dirección</div>

          <div class="row q-mt-md">
            <q-input :readonly="!editarEmpresa" outlined v-model="direccion.calle" label="Calle" type="text"
                     color="secondary"
                     class="col-lg-8 col-md-7 col-sm-7 col-12 q-pa-sm">
              <template v-slot:prepend>
                <q-icon name="fas fa-road"/>
              </template>
            </q-input>
            <q-input :readonly="!editarEmpresa" outlined v-model="direccion.numero" label="Número piso" type="number"
                     color="secondary"
                     class=" col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm q-ml-auto q-mr-auto">
            </q-input>
          </div>

          <div class="row">
            <q-input :readonly="!editarEmpresa" outlined v-model="direccion.zip" label="Código postal" type="number"
                     color="secondary"
                     class="col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm">
            </q-input>

            <q-input :readonly="!editarEmpresa" outlined v-model="direccion.ciudad" label="Ciudad" type="text"
                     color="secondary"
                     class="col-lg-5 col-md-4 col-sm-4 col-12 q-pa-sm">
              <template v-slot:prepend>
                <q-icon name="fas fa-city"/>
              </template>
            </q-input>

            <q-input :readonly="!editarEmpresa" outlined v-model="direccion.pais" label="País" type="text"
                     color="secondary"
                     class="col-lg-3 col-md-3 col-sm-3 col-12 q-pa-sm q-ml-auto q-mr-auto">
              <template v-slot:prepend>
                <q-icon name="fas fa-globe-americas"/>
              </template>
            </q-input>
          </div>

        </q-card-section>

        <q-card-actions>

          <div class="row full-width q-pl-lg q-pr-lg q-mb-lg q-mt-md justify-center">
            <q-btn v-if="!editarEmpresa" label="Modificar"
                   class="q-mb-md q-pt-xs q-pb-xs col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ml-lg q-mr-lg"
                   color="secondary"
                   @click="editarEmpresa = true" cladense/>
            <q-btn label="Eliminar" v-if="!editarEmpresa"
                   class="q-mb-md q-pt-xs q-pb-xs col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ml-lg q-mr-lg"
                   color="negative"
                   @click="eliminarEmpresa=true" outline/>

            <q-btn v-if="editarEmpresa" label="Guardar"
                   class="q-mb-md q-pt-xs q-pb-xs col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ml-lg q-mr-lg"
                   color="green"
                   @click="guardarInformacionEmpresa" cladense/>
            <q-btn label="Cancelar" v-if="editarEmpresa"
                   class="q-mb-md q-pt-xs q-pb-xs col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ml-lg q-mr-lg"
                   color="negative"
                   @click="cancelEdit"
                   flat/>
          </div>

        </q-card-actions>
      </q-card>


      <q-card class="q-mt-lg q-pa-sm">
        <q-card-section class="flex items-center">
          <div class="text-h5">Horario de la empresa</div>
          <q-space/>

          <q-btn dense color="green" outline icon-right="far fa-plus-square" no-caps label="Añadir horario"
                 class="q-mr-md" @click="anadirHorario=true"/>

          <q-icon name="info" color="secondary" class="cursor-pointer" style="font-size: 2em;">
            <q-tooltip content-class="bg-purple text-justify" content-style="font-size: 11px" :offset="[10, 10]">
              Para modificar un horario, selecciona el dia que quieres modificar, <br>
              y despues haz click en la hora, modificala y pulsa enter para guardar los cambios
            </q-tooltip>
          </q-icon>
        </q-card-section>
        <q-card-section>
          <q-tabs
            v-model="tabHorario"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >

            <q-tab v-for="horario in empresa.horarios" :name="horario.dia.dia" :label="horario.dia.dia"/>
          </q-tabs>

          <q-separator/>

          <q-tab-panels v-model="tabHorario" animated>
            <q-tab-panel class="" v-for="horario in empresa.horarios" :name="horario.dia.dia">
              <div class="row">
                <div class="col-4 flex justify-end">
                  Entrada
                </div>
                <div class="col-1">
                </div>
                <div class="col-4 flex">
                  Salida
                </div>
              </div>
              <div class="row ">
                <div class="text-h6 flex justify-end text-weight-regular cursor-pointer col-4">
                  {{horario.horaEntrada | filtroQuitarSegundoHoras}}
                  <q-popup-edit v-model="horario.horaEntrada">
                    <q-input outlined color="secondary" v-model="horario.horaEntrada" dense autofocus
                             @keyup.enter="saveCahngesHorario(horario)" maxlength="5" mask="##:##"
                             :rules="[v =>   /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v) || 'Ha de ser una hora real']">
                      <template v-slot:append>
                        <q-icon name="far fa-question-circle" color="accent" class="cursor-pointer">
                          <q-tooltip>
                            Para guardar, pulsa enter
                          </q-tooltip>
                        </q-icon>
                      </template>
                    </q-input>
                  </q-popup-edit>
                </div>
                <div class="text-h6 text-weight-regular col-1 flex flex-center">-</div>
                <div class="text-h6 text-weight-regular cursor-pointer col-4 flex">
                  {{horario.horaSalida | filtroQuitarSegundoHoras}}
                  <q-popup-edit v-model="horario.horaSalida">
                    <q-input outlined color="secondary" v-model="horario.horaSalida" dense autofocus
                             @keyup.enter="saveCahngesHorario(horario)" maxlength="5" mask="##:##"
                             :rules="[v =>   /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v) || 'Ha de ser una hora real']">
                      <template v-slot:append>
                        <q-icon name="far fa-question-circle" color="accent" class="cursor-pointer">
                          <q-tooltip>
                            Para guardar, pulsa enter
                          </q-tooltip>
                        </q-icon>
                      </template>
                    </q-input>
                  </q-popup-edit>
                </div>
                <q-space/>
                <q-btn flat rounded icon="fas fa-times" text-color="red-9" label="Eliminar horario"
                       @click="borrarHorario(horario)"/>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog v-model="anadirHorario">
      <q-stepper
        v-model="createHorarioStep"
        vertical
        color="primary"
        animated
        :style="$q.screen.lt.md?'width: 100vw; max-width: 100vw':'width: 20vw; max-width: 20vw'"
      >
        <q-step
          :name="1"
          title="Seleccionar día"
          icon="settings"
          :done="createHorarioStep > 1"
          class="flex column wrap"
        >
          <div class="text-h6" v-if="allPosibleDias.length===0">Todos los dias posibles ya tienen horario</div>
          <q-chip clickable
                  text-color="white"
                  color="blue-7"
                  v-for="dia in allPosibleDias"
                  @click="seleccionarDiaNewHorario(dia)"
                  v-if="allPosibleDias.length>0">{{dia.dia}}
          </q-chip>

        </q-step>

        <q-step
          :name="2"
          title="Seleccionar hora de entrada a la empresa"
          icon="far fa-id-badge"
          :done="createHorarioStep > 2"
        >

          <q-input autofocus maxlength="5" style="max-width: 130px" v-model="newHorario.horaEntrada" mask="##:##" dense
                   label="Hora entrada" outlined hint="Solo numeros"
                   :rules="[v =>   /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v) || 'Ha de ser una hora real']"/>

          <q-stepper-navigation>
            <q-btn @click="createHorarioStep = 3" color="secondary" label="Continue" disable
                   v-if="!/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(newHorario.horaEntrada)"/>
            <q-btn @click="createHorarioStep = 3" color="secondary" label="Continue"
                   v-if="/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(newHorario.horaEntrada)"/>
            <q-btn flat @click="createHorarioStep = 1" color="primary" label="Back" class="q-ml-sm"/>
          </q-stepper-navigation>
        </q-step>


        <q-step
          :name="3"
          title="Seleccionar hora de salida de la empresa"
          icon="far fa-id-badge"
        >
          <q-input autofocus maxlength="5" style="max-width: 130px"
                   v-model="newHorario.horaSalida"
                   mask="##:##" dense
                   label="Hora salida"
                   outlined hint="Solo numeros"
                   :rules="[v =>   /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v) || 'Ha de ser una hora real']"/>


          <q-stepper-navigation>
            <q-btn color="green" label="Finish" v-close-popup outline disable
                   v-if="!/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(newHorario.horaSalida)"/>
            <q-btn color="green" label="Finish" v-close-popup outline @click="saveNewHorario"
                   v-if="/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(newHorario.horaSalida)"/>
            <q-btn flat @click="createHorarioStep = 2" color="primary" label="Back" class="q-ml-sm"/>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </q-dialog>


    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 q-pr-md q-pl-md column">
      <q-card class="column content-center q-ma-sm q-mb-lg">
        <div id="mapa" class="column full-width full-height">
          <gmap-map
            :center="center"
            :zoom="zoom"
            style="width: 100%; height: 350px;">

            <gmap-circle
              v-if="precisionMaps===true"
              :radius="3000"
              :visible="true"
              :options="{ strokeColor: 'black',
              strokeWeight: 1,
              strokeOpacity: 0.8,
              fillColor:'blue',
              fillOpacity:0.1}"
              :position="marker"
              :center="marker"

            >
            </gmap-circle>

            <gmap-marker :icon="icon" :position="marker"></gmap-marker>

          </gmap-map>

        </div>
      </q-card>

      <div class="q-pl-sm q-pr-sm">
        <q-card>
          <q-card-section>
            <div class="text-h5 flex flex-center">Estudiantes vinculados</div>
          </q-card-section>
          <q-separator inset=""/>
          <q-card-section>
            <q-list>
              <q-item v-if="empresa.estudiantes.length===0">
                <q-item-section class="flex flex-center">No hay ningun estudiante vinculado</q-item-section>
              </q-item>
              <q-item v-for="estudiante in empresa.estudiantes" @right="" right-color="red">

                <q-item-section avatar>
                  <q-avatar>
                    <q-img :src="estudiante.fotoPerfil"
                           placeholder-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr1v58ICPpgv8t4zeWFfmJqBre8Xedi8agxMpKEHR-G5L06sic"
                           :ratio="1" spinner-color="primary"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  {{estudiante.nombre}} {{estudiante.apellidos}}
                </q-item-section>
                <q-item-section align="right">
                  <q-btn flat round icon="fas fa-times" text-color="red-9"
                         @click="desvincularEstudiante(estudiante.idusuario)"/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>


          <q-card-actions class="row full-width q-mt-lg">

            <div class="col-12 text-center">

              <q-select outlined v-model="estudianteSeleccionado"
                        use-input input-debounce="0" label="Vincula un usuario"
                        :options="estudiantesOpciones" @filter="filtrarEstudianteInput"
                        class="col-12 text-center q-ml-xs q-mr-sm" behavior="menu" value="code"

                        @input="vincularEstudiante">
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No hay resultados
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

            </div>

          </q-card-actions>
        </q-card>

      </div>

    </div>

    <q-dialog v-model="upload" position="top">
      <q-uploader
        color="indigo"
        label="Arrastra o selecciona tu foto (MAX 10MB)"
        auto-upload
        :url="urlUploadEmpresaFoto+'/admin/empresas/'+this.empresa.idempresa+'/foto'"
        :headers="[{name: 'Authorization', value: tokenToUploadFoto}]"
        @uploaded="fotoSubida"
        method="PUT"
        :with-credentials="booleano"
        style="max-width: 240px"
        fieldName="file"
        :max-file-size="10485760"

      />
    </q-dialog>

    <q-dialog v-model="eliminarEmpresa">
      <q-card class="my-card">

        <q-card-section class="q-pt-sm">
          <div class="text-h6">
            Eliminar empresa
          </div>
          <div class="text-subtitle2">
            Introduce el nombre de la empresa a eliminar.
          </div>
          <div class="text-grey-7">
            Para verificar que esta acción es voluntaria te pedimos que
            nos escribas el nombre de la empresa que quieres eliminar.
          </div>
        </q-card-section>
        <q-separator/>

        <q-card-section class="">
          <q-input outlined dense color="secondary" :placeholder="empresa.nombre" v-model="empresaDelete"
                   :rules="[
                     val => empresaDelete!=null || 'Campo requerido',
                     val => empresaDelete!=='' || 'Campo requerido'
                     ]" lazy-rules/>

          <div class="q-pt-md">
            ¿Estas seguro de borrar la empresa?
            Esta acción <span class="text-negative text-weight-bolder">no se puede deshacer</span>.
            Si en el futuro quieres volver a utilizar esta empresa, tendrás que volver a crearla.

          </div>
        </q-card-section>
        <q-separator/>
        <q-card-actions align="right">
          <q-btn v-close-popup color="accent" label="Cancelar"/>

          <q-btn v-close-popup flat disable color="negative" label="Borrar empresa"
                 v-if="empresa.nombre !== empresaDelete"/>
          <q-btn v-close-popup color="negative" label="Borrar empresa" v-if="empresa.nombre === empresaDelete"
                 @click="borrarEmpresa"/>

        </q-card-actions>
      </q-card>
    </q-dialog>


  </q-page>

</template>

<script>

  export default {
    name: "Empresa",
    data() {
      return {
        newHorario: {
          idempresa: null,
          horaEntrada: '',
          horaSalida: '',
          iddia: null
        },
        allPosibleDias: [],
        createHorarioStep: 1,
        tabHorario: '',
        anadirHorario: false,
        estudianteSeleccionado: null,
        estudiantesOpciones: [],
        estudiantes: [],
        estudiantesFilter: [],
        empresa: {
          idempresa: null,
          nombre: '',
          contacto: '',
          fechaInicioPracticas: null,
          direccion: null,
          fotoEmpresa: null,
          estudiantes: [],
          horarios: []
        },
        direccion: {
          calle: '',
          numero: null,
          zip: null,
          ciudad: '',
          pais: ''
        },

        empresaDelete: '',
        center: {
          lat: 39.601720, // Por defecto son las cordenadas de Es Liceu
          lng: 2.689314   // Por defecto son las cordenadas de Es Liceu
        },
        zoom: 12,
        marker: {
          lat: 39.601720,   // Por defecto son las cordenadas de Es Liceu
          lng: 2.689314     // Por defecto son las cordenadas de Es Liceu
        },
        options: {
          zoomControl: true,         // Establece el control de zoom del mapa
          mapTypeControl: false,     // Oculta el control de tipos de mapas
          scaleControl: false,       // Oculta el control de escala del mapa
          streetViewControl: true,   // Oculta el control de StreeView del mapa
          fullscreenControl: true    // Establce el control full screen para ver el mapa a pantalla completa
        },
        icon: {
          url: 'statics/marker.svg',
          scaledSize: {width: 50, height: 50},
          anchor: {x: 20, y: 24}
        },
        editarEmpresa: false,
        eliminarEmpresa: false,
        upload: false,
        booleano: true,
        urlUploadEmpresaFoto: process.env.API_JAVA,
        tokenToUploadFoto: localStorage.getItem("refreshToken"),
        estudiante: '',
        precisionMaps: false
      }
    },
    methods: {
      cancelEdit() {
        this.editarEmpresa = false;
        this.cargarInfoEmpresa(this.empresa.idempresa)
      },
      async fotoSubida() {
        this.upload = false;
        await this.cargarInfoEmpresa(this.empresa.idempresa);
        this.mostrarNotificacion("Se ha modificado la foto correctamente", "green");
      },

      async vincularEstudiante() {

        const objectSend = {
          idempresa: this.empresa.idempresa,
          idusuario: this.estudianteSeleccionado.value,
        };

        const response = await this.$axiosJava.post('/admin/empresas/vincular/user', objectSend);

        if (response.status === 200) {
          this.mostrarNotificacion("El estudiante " + this.estudianteSeleccionado.label + " ha sido vinculado correctamente.", "green");
          this.cargarInfoEmpresa(this.empresa.idempresa);
          this.estudianteSeleccionado = null;
        } else {
          this.mostrarNotificacion("El estudiante " + this.estudianteSeleccionado.label + " no ha podido ser vinculado.", "red-9");
        }

      },
      async desvincularEstudiante(id) {
        const usuario = {
          idusuario: id
        };
        const response = await this.$axiosJava.delete('/admin/empresas/vincular/user', {
          data: usuario
        });

        if (response.status === 200) {
          this.mostrarNotificacion("Se ha desnvinculado la empresa correctamente.", "green");
          await this.cargarInfoEmpresa(this.empresa.idempresa);
        } else {
          this.mostrarNotificacion("Ha ocurrido un error al desvincular el usuario", "red-9");
          this.cargarInfoEmpresa(this.empresa.idempresa);
        }
      },
      filtrarEstudianteInput(val, update) {
        if (val === '') {
          update(() => {
            this.estudiantesOpciones = this.estudiantesFilter;
          });
          return
        }
        update(() => {
          const needle = val.toLowerCase();
          this.estudiantesOpciones = this.estudiantesFilter.filter(estudiante => estudiante.label.toLowerCase().indexOf(needle) > -1)
        })
      },
      parserDirection(dir) {

        const piezas = dir.split(',');

        this.direccion.calle = piezas[0];
        this.direccion.numero = parseInt(piezas[1]);
        this.direccion.zip = parseInt(piezas[2]);
        if (piezas[3]) {
          this.direccion.ciudad = piezas[3].replace(/\s/g, '');
        }
        if (piezas[4]) {
          this.direccion.pais = piezas[4].replace(/\s/g, '');
        }
      },

      async guardarInformacionEmpresa() {

        this.empresa.direccion = this.direccion.calle + ', ' + this.direccion.numero + ', ' + this.direccion.zip + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;

        const response = await this.$axiosJava.put('/admin/empresas', this.empresa);
        if (response.status === 200) {
          this.mostrarNotificacion("Se ha guardado la informacion correctamente", "secondary");
          this.editarEmpresa = false;
        } else {
          this.mostrarNotificacion(response.data, "red-9")
        }
      },
      async borrarEmpresa() {
        const response = await this.$axiosJava.delete('/admin/empresas', {
          data: {idempresa: this.empresa.idempresa}
        });

        if (response.status === 200) {
          this.mostrarNotificacion("Se ha borrado la empresa correctamente.", "secondary");
          await this.$router.push("/profesor/empresas");
        } else {
          this.mostrarNotificacion(response.data, "red-9")
        }
      },
      mostrarNotificacion(texto, color = 'indigo', position = 'top-right') {
        this.$q.notify({
          color: color,
          message: texto,
          position: position,
          timeout: 5000
        })
      },
      async cargarEstudiantes() {
        const response = await this.$axiosJava.get('/admin/estudiantes');
        if (response.status === 200) {
          this.estudiantes = response.data;
          const filterEstudiantes = this.estudiantes.filter(usuario => {
            return this.empresa.estudiantes.findIndex(estudianteEnEmpresa => estudianteEnEmpresa.idusuario === usuario.idusuario) === -1
          });
          filterEstudiantes.forEach(usuario => {
            this.estudiantesFilter.push({
              label: usuario.nombre + " " + usuario.apellidos,
              value: usuario.idusuario
            });
          });
        }
      },
      async geocodeEmpresa() {

        var addressObj = {
          address_line_1: this.direccion.numero + ' ' + this.direccion.calle,
          city: this.direccion.ciudad,
          state: this.direccion.ciudad,
          zip_code: this.direccion.zip,
          country: this.direccion.pais
        };

        this.$geocoder.send(addressObj, response => {

          console.log(response)
          if (response.status === "OK") {

            if (response.results[0].partial_match) this.precisionMaps = true;

            this.marker.lat = response.results[0].geometry.location.lat;
            this.marker.lng = response.results[0].geometry.location.lng;
            this.center.lat = response.results[0].geometry.location.lat;
            this.center.lng = response.results[0].geometry.location.lng;

          } else {
            this.mostrarNotificacion('Ha habido un problema al cargar la ubicación', 'red-9')
          }
        });
      },
      async cargarInfoEmpresa(id) {
        this.estudiantesFilter = [];
        this.estudiantesOpciones = [];
        const response = await this.$axiosJava.get('/admin/empresas/' + id);
        if (response.status === 200) {
          this.empresa.idempresa = response.data.idempresa;
          this.empresa.nombre = response.data.nombre;
          this.empresa.contacto = response.data.contacto;
          this.empresa.fechaInicioPracticas = (response.data.inicioPracticas).replace(/-/g, "/");
          this.empresa.direccion = response.data.direccion;
          this.empresa.estudiantes = response.data.estudiantes;
          this.empresa.fotoEmpresa = response.data.fotoEmpresa;
          this.empresa.horarios = response.data.empresaTieneDias.sort((a, b) => {
            return a.dia.iddia - b.dia.iddia
          });

          if (this.empresa.horarios.length > 0) {
            this.tabHorario = this.empresa.horarios[0].dia.dia;
          }

          await this.parserDirection(response.data.direccion);
          await this.cargarEstudiantes();
          await this.geocodeEmpresa();
        } else {
          this.mostrarNotificacion('No se ha podido recuperar la empresa', 'red-9')
        }
      },

      /*
      * HORARIOS STUFF
      * */
      seleccionarDiaNewHorario(dia) {
        this.newHorario.idempresa = this.empresa.idempresa;
        this.newHorario.iddia = dia.iddia;
        this.createHorarioStep = 2;
      },
      async saveCahngesHorario(horario) {
        horario.idempresa = this.empresa.idempresa;
        horario.iddia = horario.dia.iddia;
        horario.horaEntrada = this.filtroQuitarSegundoHoras(horario.horaEntrada);
        horario.horaSalida = this.filtroQuitarSegundoHoras(horario.horaSalida);

        const response = await this.$axiosJava.put("/admin/horario", horario);
        if (response.status === 200) {
          this.mostrarNotificacion("Horario guardado correctamente", 'secondary', 'bottom-left');
          await this.cargarInfoEmpresa(this.empresa.idempresa);
          await this.cargarTodosLosDias();
        } else {
          this.mostrarNotificacion(response.data, 'red-9', 'bottom-left')
        }
      },
      async cargarTodosLosDias() {
        const response = await this.$axiosJava.get("/admin/dias");
        console.log(response)
        if (response.status === 200) {
          if (this.empresa.horarios.length === 0) {
            this.allPosibleDias = response.data;
          } else {
            this.allPosibleDias = response.data.filter(dia => {
              return this.empresa.horarios.findIndex(horario => horario.dia.iddia === dia.iddia) === -1
            });
          }
        }
      },
      async saveNewHorario() {
        const response = await this.$axiosJava.post("/admin/horario", this.newHorario);
        if (response.status === 200) {
          this.mostrarNotificacion("Horario guardado correctamente", 'secondary', 'bottom-left');
          await this.cargarInfoEmpresa(this.empresa.idempresa);
          await this.cargarTodosLosDias();
        } else {
          this.mostrarNotificacion(response.data, 'red-9', 'bottom-left')
        }
        this.newHorario.horaSalida = '';
        this.newHorario.horaEntrada = '';
        this.newHorario.iddia = null;
        this.createHorarioStep = 1;
      },
      async borrarHorario(horario) {
        horario.idempresa = this.empresa.idempresa;
        horario.iddia = horario.dia.iddia;
        const response = await this.$axiosJava.delete("/admin/horario", {
          data: horario
        });
        if (response.status === 200) {
          this.mostrarNotificacion("Horario eliminado correctamente", 'secondary', 'bottom-left');
          await this.cargarInfoEmpresa(this.empresa.idempresa);
          await this.cargarTodosLosDias();
        } else {
          this.mostrarNotificacion(response.data, 'red-9', 'bottom-left')
          await this.cargarInfoEmpresa(this.empresa.idempresa);
          await this.cargarTodosLosDias();
        }
      },
      filtroQuitarSegundoHoras(hora) {
        return hora.substring(0, 5)
      }
    }
    ,
    async created() {

      const id = this.$route.params.id;
      await this.cargarInfoEmpresa(id);
      await this.cargarTodosLosDias();
    },
    filters: {
      filtroQuitarSegundoHoras(hora) {
        return hora.substring(0, 5)
      }
    }
  }

</script>

<style scoped>

</style>
