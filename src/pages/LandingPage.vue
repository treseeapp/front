<template>

  <q-page class="page-principal">
    <div v-if="!$q.screen.lt.sm" class="row" style="height: 100px"></div>
   <div v-if="$q.screen.lt.sm"  class="row" style="height: 20px"></div>
    <!-- Sección principal de la web -->
    <div id="hero" class="q-mt-lg">
      <div class="row justify-center">
        <div class="col-lg-4 col-md-5 col-sm-10 col-xs-12 q-pa-lg">
          <h1 :class="$q.screen.lt.md?'text-center':'text-left'" data-aos="fade-up">Mejora las prácticas de tus
            estudiantes con Tresee</h1>
          <h2 :class="$q.screen.lt.md?'text-center':'text-left'" data-aos="fade-up" data-aos-delay="400">Podrás realizar
            un seguimiento de forma sencilla</h2>
          <div data-aos="fade-up" data-aos-delay="800" :class="$q.screen.lt.md?'text-center':'text-left'">
            <a @click="registerDialog=true" class="btn-get-started scrollto cursor-pointer q-mr-md q-ml-md q-mb-md">Empezar</a>
            <a @click="$router.push('/DEMO/profesor/dashboard')" class="btn-get-started scrollto cursor-pointer q-mr-md q-ml-md q-mt-md">Ver Demo</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-10 col-xs-12 q-ml-lg q-mr-lg margin-top-image q-pa-lg" data-aos="fade-left"
             data-aos-delay="200">
          <q-img
            src="./assets/hero-img.png"
            :ratio="4/3"
            class="img-fluid animated"
          />
        </div>
      </div>
    </div>
    <!-- Final Sección Principal -->

    <main id="main">

      <!--Inicio Sección Nosotros-->
      <div id="about" class="row justify-center q-mt-lg">
        <div class="col-12 section-title" data-aos="fade-up">
          <h2>Nosotros</h2>
        </div>
        <div class="row justify-center col-lg-8 col-md-10 col-sm-12 col-xs-12 q-pa-lg" data-aos="fade-up"
             data-aos-delay="200">
          <template>
            <div class="q-px-lg q-pb-md">
              <q-timeline :layout="layout" color="secondary">
                <q-timeline-entry
                  title="¿Que es Tresee?"
                  side="left"
                >
                  <div>
                    Tresee es una aplicación tanto para web como para dispotivio móvil. Que facilita tanto al profesor
                    como al estudiante todo el perído de prácticas en una empresa. Ya que nos permite de una manera
                    sencilla realizar todos aquellos controles que deben seguirse en las prácticas.
                  </div>
                </q-timeline-entry>

                <q-timeline-entry
                  title="¿Quienes somos?"
                  side="right"
                >
                  <div>
                    Somos una pequeña empresa con gran experiencia en el ámbito tanto escolar como laboral
                    y conocemos muy bien todo el el prceso que debe seguir un estudiante y un tutor de prácticas.
                  </div>
                </q-timeline-entry>
                <q-timeline-entry
                  title="¿Que ofrecemos?"
                  side="left"
                >
                  <div>
                    Lo que ofrecemos en tresee es rápidez y sencillez a la hora de poder realizar todas aquellas
                    gestiones correspondientes a la evaluación de un estudiante en prácticas.

                  </div>
                </q-timeline-entry>

                <q-timeline-entry
                  title="¿Como empezamos?"
                  side="right"
                >
                  <div>
                    Este aplicación tuvo su inicio como un proyecto de final de grado, mientras a su vez realizabamos
                    las prácticas correspondientes en una empresa. Es por eso que conocemos bien lo útil que puede ser
                    facilitar las tareas de seguimiento y fichajes en el periodo de prácticas.
                  </div>
                </q-timeline-entry>
              </q-timeline>
            </div>
          </template>
        </div>
      </div>
      <!-- Inicio Sección Servicios -->
      <div id="services" class="services">
        <div class="row wrap section-title" data-aos="fade-up">
          <h2 class="col-12">Servicios</h2>
          <p class="col-12 q-pl-md q-pr-md">Estas son las facilidades que nos brinda Tresse para los estudiantes y
            docentes.</p>
        </div>

        <div class="row justify-center items-center">
          <div class="q-ma-lg col-lg-2 col-md-4 col-sm-4 col-xs-10 q-pa-md icon-box text-center" data-aos="fade-up"
               data-aos-delay="100">
            <div class="icon"><i class="fas fa-user-graduate"></i></div>
            <h4 class="title">Estudiantes</h4>
            <p class="description">Con gran rapidez y facilidad el profesor podrá obtener información
              detallada de los estudiantes en prácticas.</p>
          </div>

          <div class="q-ma-lg col-lg-2 col-md-4 col-sm-4 col-xs-10 q-pa-md icon-box text-center" data-aos="fade-up"
               data-aos-delay="200">
            <div class="icon"><i class="fas fa-city"></i></div>
            <h4 class="title">Empresas</h4>
            <p class="description">Podrán asignarsele a los estudiantes las empresas donde van a
              realizar las prácticas.</p>
          </div>

          <div class="q-ma-lg col-lg-2 col-md-4 col-sm-4 col-xs-10 q-pa-md icon-box text-center" data-aos="fade-up"
               data-aos-delay="300">
            <div class="icon"><i class="fas fa-clipboard-check"></i></div>
            <h4 class="title">Fichajes</h4>
            <p class="description">El estudiante podrá realizar de manera sencilla los fichajes, tanto
              los de entrada como los de salida.</p>
          </div>

          <div class="q-ma-lg col-lg-2 col-md-4 col-sm-4 col-xs-10 q-pa-md icon-box text-center" data-aos="fade-up"
               data-aos-delay="400">
            <div class="icon"><i class="fas fa-chart-pie"></i></div>
            <h4 class="title">Informes</h4>
            <p class="description">Los usuarios tendrán a su disposición un panel con información
              totalmente personalizada y detallada.</p>
          </div>
        </div>
      </div>
      <!-- Fin Sección Servicios -->

      <!-- Inicio Sección Tecnologias-->
      <div id="features" class="features row justify-center q-mb-lg">
        <div class="row col-12 justify-center">
          <div class="section-title" data-aos="fade-up">
            <h2>Tecnologias</h2>
            <p class="q-pl-md q-pr-md">En Tresse utilizamos siempre las tecnologias más vanguardistas.</p>
          </div>
        </div>
        <div class="row wrap col-lg-7 col-md-11 col-sm-12 col-xs-12 justify-center q-pl-lg q-pr-lg"
             data-aos="fade-up" data-aos-delay="300">
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://www.javascript.com/">
              <div class="icon-box justify-center row">
                <i class="fab fa-js-square" style="color: #0a0a0a;"></i>
                <h3>Java Script</h3>
              </div>
            </a>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://www.java.com/es/">
              <div class="icon-box justify-center">
                <i class="fab fa-java" style="color: #5578ff;"></i>
                <h3>Java</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://vuejs.org/">
              <div class="icon-box justify-center">
                <i class="fab fa-vuejs" style="color: #215732;"></i>
                <h3>Vue</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://nodejs.org/es/">
              <div class="icon-box justify-center">
                <i class="fab fa-node-js" style="color: #44883e;"></i>
                <h3>Node JS</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://spring.io/projects/spring-boot">
              <div class="icon-box justify-center">
                <q-icon name="img:statics/icons/spring-logo.png"
                        class="q-mr-sm"
                        size="32px"/>
                <h3>Spring Boot</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://www.docker.com/">
              <div class="icon-box justify-center">
                <i class="fab fa-docker" style="color: #0db7ed;"></i>
                <h3>Docker</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://quasar.dev/">
              <div class="icon-box justify-center">
                <q-icon name="img:statics/icons/quasar-logo.svg"
                        class="q-mr-sm"
                        size="32px"/>
                <h3>Quasar</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://www.jenkins.io/">
              <div class="icon-box justify-center">
                <q-icon name="fab fa-jenkins"
                        class="q-mr-sm"
                        size="32px"/>
                <h3>Jenkins</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://expressjs.com/es/">
              <div class="icon-box justify-center">
                <q-icon name="fas fa-cog"
                        color="grey"
                        class="q-mr-sm"
                        size="32px"/>
                <h3>Express JS</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://www.npmjs.com/package/@overnightjs/core">
              <div class="icon-box justify-center">
                <q-icon name="far fa-moon"
                        class="q-mr-sm"
                        size="32px"/>
                <h3>Overnight</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://www.jenkins.io/">
              <div class="icon-box justify-center">
                <q-icon name="img:statics/icons/mysql-logo.svg"
                        class="q-mr-sm"
                        size="32px"/>
                <h3>MySQL</h3>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 q-pa-md text-center">
            <a href="https://www.electronjs.org/">
              <div class="icon-box justify-center">
                <q-icon name="img:statics/icons/electron-logo.png"
                        class="q-mr-sm"
                        size="32px"/>
                <h3>Electron</h3>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Fin Sección Tecnologias -->


      <!-- Inicio Sección Equipo -->
      <div id="team" class="team section-bg q-pa-lg">
        <div class="row">
          <div class="section-title col-12" data-aos="fade-up">
            <h2>Equipo</h2>
            <p>Este es el equipo que forma Tresee.</p>
          </div>
        </div>
        <div class="row col-12 justify-center">
          <q-card @mouseenter="iconosSocialesEntryM" @mouseleave="iconosSocialesOutM"
                  data-aos="fade-up" data-aos-delay="100"
                  class="my-card q-mr-md q-ml-md q-mb-lg q-mt-lg col-lg-2 col-md-3 col-sm-5 col-xs-10 social">
            <q-img src="./assets/team/miguelmonteiro.jpg">
              <div v-if="socialIconsM" class="absolute-bottom text-subtitle2 text-center social">
                <a href="https://www.linkedin.com/in/mmonteiroc/">
                  <i class="q-ml-sm q-mr-sm fab fab fa-linkedin"/>
                </a>
                <a href="https://github.com/mmonteiroc">
                  <i class="q-ml-sm q-mr-sm fab fa-github-square"/>
                </a>
                <a href="https://bitbucket.org/mmonteiroc/">
                  <i class="q-ml-sm q-mr-sm fab fab fa-bitbucket"/>
                </a>
              </div>
            </q-img>
            <q-card-section>
              <div class="row no-wrap justify-center text-center">
                <div class="col text-h6 ellipsis justify-center">
                  Miguel Monteiro
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none text-center">
              <div class="text-grey-7">
                Desarrollador Web
              </div>
            </q-card-section>
          </q-card>

          <q-card class="my-card q-ml-md q-mr-md q-mb-lg q-mt-lg col-lg-2 col-md-3 col-sm-5 col-xs-10"
                  data-aos="fade-up" data-aos-delay="200"
                  @mouseenter="iconosSocialesEntryP" @mouseleave="iconosSocialesOutP">
            <q-img src="./assets/team/joanpacheco.jpg">
              <div v-if="socialIconsP" class="absolute-bottom text-subtitle2 text-center social">
                <a href="https://www.linkedin.com/in/joan-antoni-5ab1271a5/">
                  <i class="q-ml-sm q-mr-sm fab fab fa-linkedin"/>
                </a>
                <a href="https://github.com/joanpacheco">
                  <i class="q-ml-sm q-mr-sm fab fa-github-square"/>
                </a>
                <a href="https://bitbucket.org/joanpacheco/">
                  <i class="q-ml-sm q-mr-sm fab fab fa-bitbucket"/>
                </a>
              </div>
            </q-img>
            <q-card-section>
              <div class="row no-wrap justify-center text-center">
                <div class="col text-h6 ellipsis justify-center">
                  Joan Pacheco
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none text-center">
              <div class="text-grey-7">
                Desarrollador Web
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <!-- Fin Sección Equipo -->


      <!-- Inicio F.A.Q Sección -->
      <div id="faq" class="faq">
        <div class="row justify-center">
          <div class="section-title section-title-faq" data-aos="fade-up">
            <h2>F.A.Q.</h2>
          </div>
        </div>
        <div class="row q-pl-lg q-pb-lg q-pr-lg">
          <div class="row col-12 faq-item justify-center text-justify" data-aos="fade-up" data-aos-delay="100">
            <div class="row col-lg-3 col-md-5 q-mb-lg q-ml-lg q-mr-lg">
              <h4>¿Que puedo hacer con Tresse?</h4>
            </div>
            <div class="col-lg-5 col-md-5 q-ml-lg q-mr-lg">
              <p>
                Con Tresee, como profesor, podrás agilizar y realizar de una manera mucho más sencilla las tareas
                de control de un estudiante en el periodo de prácticas en una empresa. Podrás acceder a todos los datos
                necesarios, así como también un historial completo de los fichaje del estudiante en la empresa.
              </p>
            </div>
          </div>

          <div class="row col-12 faq-item justify-center text-justify" data-aos="fade-up" data-aos-delay="100">
            <div class="row col-lg-3 col-md-5 q-mb-lg q-ml-lg q-mr-lg">
              <h4>¿Dispotivos donde utilizar Tresee?</h4>
            </div>
            <div class="col-lg-5 col-md-5 q-ml-lg q-mr-lg">
              <p>
                La aplicación Tresee está preparada para ser funcional y visible desde cualquier dispositivo,
                tanto a nivel web como en aplicación android o de escritorio.
              </p>
            </div>
          </div>

          <div class="row col-12 faq-item justify-center text-justify" data-aos="fade-up" data-aos-delay="200">
            <div class="row col-lg-3 col-md-5 q-mb-lg q-ml-lg q-mr-lg">
              <h4>¿Por que elegir Tresee?</h4>
            </div>
            <div class="col-lg-5 col-md-5 q-ml-lg q-mr-lg">
              <p>
                Todo el equipo de Tresee ha realizado prácticas en alguna empresa después de cursar sus estudios,
                así que contamos con experiencia a la hora de determinar los comportamientos de los estudiantes con la
                aplicación, así como también las herramientas que necesita el profesor para realizar un correcto
                seguimiento
                del alumno.
              </p>
            </div>
          </div>

          <div class="row col-12 faq-item justify-center text-justify" data-aos="fade-up" data-aos-delay="300">
            <div class="row col-lg-3 col-md-5 q-mb-lg q-ml-lg q-mr-lg">
              <h4>¿Como se utiliza la aplicación?</h4>
            </div>
            <div class="col-lg-5 col-md-5 q-ml-lg q-mr-lg">
              <p>
                La web es muy intuitiva y diseñada con el proposito de que el sistema sea muy sencillo de utilizar
                pero para cualquier duda no dudes en ponerte en contacto con nosotros.
              </p>
            </div>
          </div>

          <div class="row col-12 faq-item justify-center text-justify" data-aos="fade-up" data-aos-delay="400">
            <div class="row col-lg-3 col-md-5 q-mb-lg q-ml-lg q-mr-lg text-center text-h4">
              <h4>¿Puede tener más de un profesor?</h4>
            </div>
            <div class="col-lg-5 col-md-5 q-ml-lg q-mr-lg">
              <p>
                La aplicación nos permite como profesor convertir a otros usuarios en profesores, así cualquier
                usaurio puede registrarse y después un profesor asignarle el rol de profesor.
              </p>
            </div>
          </div>

          <div class="row col-12 faq-item justify-center text-justify" data-aos="fade-up" data-aos-delay="500">
            <div class="row col-lg-3 col-md-5 q-mb-lg q-ml-lg q-mr-lg">
              <h4>¿Las horas fichadas son alterables?</h4>
            </div>
            <div class="col-lg-5 col-md-5 q-ml-lg q-mr-lg">
              <p>
                En Tresee nos preocupa mucho que los datos no sean alterados por parte de los estudiantes
                así que contamos con el mejor control de los fichaes para que las horas fichadas sea las
                horas reales realizadas por el estudiante.

              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Fin Sección F.A.Q -->


      <!-- Inicio Sección Contacto -->
      <div id="contact" class="contact q-mb-lg">
        <div class="row">
          <div class="section-title col-12" data-aos="fade-up">
            <h2>Contactanos</h2>
          </div>
        </div>
        <div class="row justify-center q-pa-lg">
          <div class="col-lg-2 col-md-5 col-sm-8 col-xs-10 justify-center text-justify q-mb-lg" data-aos="fade-up"
               data-aos-delay="100">
            <div class="contact-about q-ml-lg q-mr-lg">
              <h3>Tresee</h3>
              <p>En Tresee nos preocupamos mucho de la relación con nuestros clientes por eso
                contamos con diferentes canáles con los cuales resolver todas tus dudas y preguntas.</p>
              <div class="social-links">
                <a href="https://www.facebook.com/treseeApp" class="facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="" class="twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/tresee/" class="linkedin"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-5 col-sm-8 col-xs-10 q-mt-lg q-ml-lg q-mr-lg" data-aos="fade-up"
               data-aos-delay="200">
            <div class="row info justify-center wrap">
              <div class="row full-width justify-center">
                <i class="fas fa-map-marker-alt q-mb-md"></i>
                <p class="">Carrer Cabana, 45</p>
              </div>

              <div class="row full-width justify-center">
                <i class="far fa-envelope"></i>
                <p>info@tresee.app</p>
              </div>

              <div class="row full-width justify-center">
                <i class="fas fa-phone"></i>
                <p class="">654 - 12 - 12 - 43</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-8 col-sm-10 col-xs-12 q-ml-lg q-mr-lg" data-aos="fade-up" data-aos-delay="300">
            <q-card class="q-pa-lg q-mb-lg shadow-0 ">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form col-12">
                <q-input color="blue-5" class="q-mt-md q-mb-md" outlined v-model="text" label="Tu nombre"/>
                <q-input color="blue-5" class="q-mt-md q-mb-md" outlined v-model="text" label="Tu email"/>
                <q-input color="blue-5" class="q-mt-md q-mb-md" outlined v-model="text" label="Asunto"/>
                <q-input
                  v-model="text"
                  outlined
                  color="blue-5"
                  label="Mensaje"
                  type="textarea"
                />
                <div class="text-center q-mt-lg q-mb-sm">
                  <button type="submit" class="cursor-pointer">Enviar Mensaje</button>
                </div>
              </form>
            </q-card>
          </div>
        </div>
      </div>
      <!-- Fin Sección Contacto-->
    </main>

    <q-dialog class="justify-center row" v-model="registerDialog">
      <q-card outlined class="q-pt-md q-pl-md q-pr-md" style="width: 440px">
        <q-card-section class="q-mb-md items-center q-pb-none text-center">
          <q-card-section>
            <div class="text-h5">Registrarse</div>
          </q-card-section>
          <div class="text-center row justify-center">
            <q-btn class="q-mt-md q-mb-lg col-12" to="/register" type="submit" color="secondary"
                   label="Crear una cuenta"/>
          </div>
          <div class="text-center row justify-center">
            <div :class="$q.screen.lt.sm?'col-10':'col-6'" class="text-center q-pa-sm q-mt-md q-mb-sm">
              <a :href="authGoogleURL" style="text-decoration: none">
                <q-btn color="red-8" class="text-center full-width" label="Con Google" icon="fab fa-google"/>
              </a>
            </div>
            <div :class="$q.screen.lt.sm?'col-10':'col-6'" class="text-center q-pa-sm q-mt-md">
              <a :href="authFacebookURL" style="text-decoration: none">
                <q-btn style="background: #3b5998;" class="text-white full-width" icon="fab fa-facebook-square"
                       label="Con Facebook"/>
              </a>
            </div>
          </div>
          <q-separator class="q-mt-lg" inset/>
          <div class="row q-mt-lg justify-center">
            <p class="text-bold q-ml-md q-mr-md col-12" style="font-size: 15px">
              ¿ Ya tienes una cuenta ?
            </p>
            <p class="text-bold cursor-pointer text-grey-9" style="font-size: 15px" @click="openDialog">
              Iniciar Sesión
            </p>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog class="justify-center" v-model="loginDialogMail" position="right">
      <q-card outlined>
        <q-card-section class="q-mb-md items-center q-pb-none text-center" style="min-width: 360px">
          <q-card-section>
            <div class="text-h5">Iniciar sesión</div>
          </q-card-section>
          <q-form
            @submit="login"
            class="q-gutter-md q-mt-lg"
          >

            <q-input outlined v-model="usuarioLogin.email" label="Email" type="email" color="secondary"
                     class="q-mb-md"
                     lazy-rules
                     :rules="[val => val && val.length > 0 || '']">
              <template v-slot:prepend>
                <q-icon name="alternate_email"/>
              </template>
            </q-input>

            <q-input outlined v-model="usuarioLogin.password" label="Contraseña" color="secondary"
                     :type="isPwd1 ? 'password' : 'text'" class="q-mb-md"
                     lazy-rules
                     :rules="[val => val && val.length > 0 || '']"
            >
              <template v-slot:prepend>
                <q-icon name="fas fa-key"/>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd1 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd1 = !isPwd1"
                />
              </template>
            </q-input>

            <div class="text-center ">
              <q-btn class="q-mt-md full-width q-mb-lg" type="submit" color="secondary" label="Iniciar sesión"/>

            </div>
            <div class="row">
              <div class="text-center q-pa-sm col-6">
                <a :href="authGoogleURL" style="text-decoration: none">
                  <q-btn color="red-8" class="full-width">
                    <q-icon name="fab fa-google" class="q-mr-md q-mt-xs" size="1.4rem"/>
                    GOOGLE
                  </q-btn>
                </a>
              </div>
              <div class="text-center q-pa-sm col-6">
                <a :href="authFacebookURL" style="text-decoration: none">
                  <q-btn style="background: #3b5998; color: white" class="full-width">
                    <q-icon name="fab fa-facebook-square" class="q-mr-md q-mt-xs" size="1.4rem"/>
                    FACEBOOK
                  </q-btn>
                </a>
              </div>
            </div>
            <q-separator inset/>
            <div class="column">
              <p class="text-bold" style="font-size: 15px" @click="$router.push('/register')"
                 :style="{ cursor: 'pointer'}">¿ No tienes cuenta ?</p>
              <p class="text-bold text-grey-9" style="font-size: 15px" @click="$router.push('/forgot')"
                 :style="{ cursor: 'pointer'}">¿
                Has olvidado tu contraseña ?</p>
            </div>
          </q-form>

        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>

  import AOS from 'aos';
  import 'aos/dist/aos.css';

  export default {
    name: "LandingPage",
    created() {
      AOS.init();

    },
    computed: {
      layout() {
        return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.sm ? 'comfortable' : 'loose')
      }
    },
    data() {
      return {
        text: '',
        socialIconsM: false,
        socialIconsP: false,
        registerDialog: false,
        model: 'home',
        tab: 'mails',
        usuarioLogged: {
          nombre: '',
          foto: '',
          rol: null
        },
        isLoged: false,
        authGoogleURL: process.env.API_NODE + '/auth/google',
        authFacebookURL: process.env.API_NODE + '/auth/facebook',
        loginDialogMail: false,
        usuarioLogin: {
          email: '',
          password: ''
        },
        isPwd1: true,
      }
    },
    methods: {
      iconosSocialesEntryM() {
        this.socialIconsM = true;
      },
      iconosSocialesOutM() {
        this.socialIconsM = false;

      },
      iconosSocialesEntryP() {
        this.socialIconsP = true;
      },
      iconosSocialesOutP() {
        this.socialIconsP = false;

      },
      openDialog() {
        this.registerDialog = false;
        this.loginDialogMail = true;
      },
      async login() {

        const response = await this.$axiosNode.post('/auth/login', this.usuarioLogin);

        if (response.status === 401) {
          this.showNotification("El email o la contraseña es incorrecta.", "error", "negative");
        } else if (response.status === 200) {
          const token = response.data.accessToken;
          const refresh = response.data.refreshToken;
          const rol = response.data.rol;

          localStorage.setItem("accessToken", token);
          localStorage.setItem("refreshToken", refresh);
          localStorage.setItem("rol", rol);

          if (rol.toLowerCase() === 'estudiante') {
            await this.$router.push('/estudiante')
          } else {
            await this.$router.push('/profesor')
          }
        }
      },
    }
  }
</script>

<style>

  /*--------------------------------------------------------------
  # Hero Section
  --------------------------------------------------------------*/
  #hero {
    width: 100%;
    height: 70vh;
    margin-top: 70px;
  }

  #hero h1 {
    margin: 0 0 20px 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: black;
  }

  #hero h2 {
    color: #484848;
    margin-bottom: 50px;
    font-size: 24px;
    line-height: 35px;
  }

  #hero .btn-get-started {
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 50px;
    transition: 0.5s;
    color: #3498db;
    border: 2px solid #3498db;
    text-decoration: none
  }

  #hero .btn-get-started:hover {
    background: #3498db;
    color: #fff;
  }

  #hero .animated {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }

  @media (max-width: 1024px) {
    .margin-top-image {
      margin-top: 60px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 520px) {
    .margin-top-image {
      margin-top: 40px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 991px) {
    #hero {
      height: 100vh;
    }

    #hero .animated {
      -webkit-animation: none;
      animation: none;
    }

    #hero .hero-img img {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    #hero {
      margin-top: 20px;
    }

    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }

    #hero h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }

    #hero .hero-img img {
      width: 70%;
    }
  }

  @media (max-width: 575px) {
    #hero .hero-img img {
      width: 80%;
    }
  }

  @-webkit-keyframes up-down {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @keyframes up-down {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  /*--------------------------------------------------------------
  # Sections General
  --------------------------------------------------------------*/
  section {
    padding: 60px 0;
    overflow: hidden;
  }

  .section-bg {
    background-color: #f7fbfe;
  }

  .section-title {
    text-align: center;
    padding-bottom: 30px;
  }

  .section-title-faq {
    padding-bottom: 0;

  }

  .section-title h2 {
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    color: #222222;
  }

  .section-title h2::before, .section-title h2::after {
    content: '';
    width: 50px;
    height: 2px;
    background: #3498db;
    display: inline-block;
  }

  .section-title h2::before {
    margin: 0 15px 10px 0;
  }

  .section-title h2::after {
    margin: 0 0 10px 15px;
  }

  .section-title p {
    margin: 15px 0 0 0;
  }

  /*--------------------------------------------------------------
  # Services
  --------------------------------------------------------------*/
  .services .icon-box {
    padding: 30px;
    position: relative;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
    transition: all 0.3s ease-in-out;
    border-radius: 8px;
    z-index: 1;
    width: 250px;
  }

  .services .icon-box::before {
    content: '';
    position: absolute;
    background: #e1f0fa;
    right: -60px;
    top: -40px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    transition: all 0.3s;
    z-index: -1;
  }

  .services .icon-box:hover::before {
    background: #3498db;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  .services .icon {
    margin: 0 auto 20px auto;
    padding-top: 10px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: #3498db;
    transition: all 0.3s ease-in-out;
  }

  .services .icon i {
    font-size: 28px;
    margin-top: 6px;
    line-height: 1;
    color: #fff;
    margin-left: 2px;
  }

  .services .title {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
  }

  .services .title a {
    color: #111;
  }

  .services .description {
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 0;
  }

  .services .icon-box:hover .title a, .services .icon-box:hover .description {
    color: #fff;
  }

  .services .icon-box:hover .icon {
    background: #fff;
  }

  .services .icon-box:hover .icon i {
    color: #3498db;
  }

  /*--------------------------------------------------------------
  # Features
  --------------------------------------------------------------*/
  .features .icon-box {
    display: flex;
    align-items: center;
    padding: 20px;
    background: #f6f6f6;
    transition: ease-in-out 0.3s;
  }

  .features .icon-box i {
    font-size: 32px;
    padding-right: 10px;
  }

  .features .icon-box h3 {
    font-weight: 700;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-size: 16px;
  }

  .features a {
    color: #222222;
    transition: ease-in-out 0.3s;
    text-decoration: none;
    margin-left: 8px;
  }

  .features a:hover {
    color: #3498db;
  }

  .features .icon-box:hover {
    background: #eef7fc;
  }

  /*--------------------------------------------------------------
  # Team
  --------------------------------------------------------------*/
  .team .social {
    background: rgba(255, 255, 255, 0.5);
  }

  .team a {
    text-decoration: none;
  }

  .team i {
    color: black;
    font-size: 24px;

  }

  .team i:hover {
    color: #283592;
  }

  /*--------------------------------------------------------------
  # F.A.Q
  --------------------------------------------------------------*/
  .faq .faq-item {
    margin: 20px 0;
    padding: 20px 0;
    border-bottom: 1px solid #eeeeee;
  }

  .faq .faq-item i {
    color: #8bc4ea;
    font-size: 24px;
    float: left;
    line-height: 0;
    padding: 13px 0 0 0;
    margin: 0;
  }

  .faq .faq-item h4 {
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }

  .faq .faq-item p {
    font-size: 15px;
  }

  /*--------------------------------------------------------------
  # Contact
  --------------------------------------------------------------*/
  .contact .contact-about h3 {
    font-size: 28px;
    margin: 0 0 20px 0;
    padding: 0;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 1px;
    color: #222222;
  }

  .contact .contact-about p {
    font-size: 15px;
    line-height: 24px;
    font-family: "Raleway", sans-serif;
    color: #888;
    margin-bottom: 20px;
  }

  .contact .social-links {
    padding-bottom: 20px;
  }

  .contact .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #fff;
    color: #3498db;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    border: 1px solid #3498db;
  }

  .contact .social-links a:hover {
    background: #3498db;
    color: #fff;
  }

  .contact .info {
    color: #444444;
  }

  .contact .info i {
    font-size: 32px;
    color: #3498db;
    line-height: 1;
  }

  .contact .info p {
    padding: 0 0 10px 42px;
    line-height: 28px;
    font-size: 16px;
  }

  .contact .php-email-form button[type="submit"] {
    background: #3498db;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 20px;
    font-weight: bold;
  }

  .contact .php-email-form button[type="submit"]:hover {
    background: #2383c4;
  }


</style>
