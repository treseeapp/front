
const routes = [
  /*
  * PATHS PUBLICOS
  * */
  {
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: '', component: () => import('pages/LandingPage.vue')},
      {path: 'ayuda', component: () => import('pages/Index.vue')},
      {path: 'terminos', component: () => import('pages/Terminos.vue')},
      {path: 'forgot', component: () => import('pages/Forgot.vue')},
      {
        path: 'change/password', component: () => import('pages/Password.vue'),
        beforeEnter: (to, from, next) => {
          const url = new URL(location);
          const token = url.searchParams.get('tokenUserModify');
          sessionStorage.setItem('tokenUserModify', token);
          /*
          * Limpiar url de params
          * */
          window.history.pushState({}, document.title, "/change/password");
          next()
        }
      },
      {
        path: 'login/callback',
        beforeEnter: (to, from, next) => {
          const url = new URL(location);
          const accessToken = url.searchParams.get('accessToken');
          const refreshToken = url.searchParams.get('refreshToken');
          const rol = url.searchParams.get('rol');

          /*
          * Save tokens
          * */
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('rol', rol);

          /*
          * Limpiar url de params
          * */
          window.history.pushState({}, document.title, "/");

          if (rol === 'PROFESOR') {
            next('/profesor/')
          } else if (rol === 'ESTUDIANTE') {
            next('/estudiante/')
          }
        }
      },
    ]
  },
  {
    path: '',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {path: 'register', component: () => import('pages/Register.vue')},
    ]
  },
  /*
  * PATHS PRIVADOS
  * */
  {
    path: '/',
    component: () => import('layouts/PrivateLayout.vue'),
    children: [
      {path: 'account', component: () => import('pages/private/Account.vue')},
    ],
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        next('/');
      } else {
        next();
      }
    }
  },
  {
    path: '/estudiante',
    component: () => import('layouts/PrivateLayout.vue'),
    children: [
      {path: "", redirect: 'dashboard'},
      {path: "dashboard", component: () => import('pages/private/estudiantes/Dashboard.vue')}, // Esto es para que sea mas visual que la raiz de estudiante, es un dashboard de toda la info
      {path: "fichajes", component: () => import('pages/private/estudiantes/Fichajes.vue')},
    ],
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('accessToken');
      const rol = localStorage.getItem('rol');
      if (!rol) {
        next('/');
      }

      if (!token || rol.toLowerCase() !== 'estudiante') {
        next('/');
      } else {
        next();
      }
    }
  },
  {
    path: '/profesor',
    component: () => import('layouts/PrivateLayout.vue'),
    children: [

      {path: "", redirect: 'dashboard'},
      {path: "dashboard", component: () => import('pages/private/profesores/Dashboard.vue')}, // Esto es para que sea mas visual que la raiz de profesor, es un dashboard de toda la info
      {path: "estudiantes", component: () => import('pages/private/profesores/Estudiantes.vue')}, // Mostrara listado estudiantes de la app
      {path: "estudiante/:id", component: () => import('pages/private/profesores/Estudiante.vue')}, // Mostrara un unico estudiante y su informacion
      {path: "empresas", component: () => import('pages/private/profesores/Empresas.vue')}, // Mostrara listado empresas de la app
      {path: "empresa/:id", component: () => import('pages/private/profesores/Empresa.vue')}, // Mostrara una unica empresa de la app
    ],
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('accessToken');
      const rol = localStorage.getItem('rol');
      if (!rol) {
        next('/');
      }

      if (!token || rol.toLowerCase() !== 'profesor') {
        next('/');
      } else {
        next();
      }
    }
  },
  {
    path: '/DEMO',
    component: () => import('layouts/DemoLayout.vue'),
    children: [
      {path: "account", component: () => import('pages/public/Account.vue')},
      {path: 'estudiante/dashboard', component: () => import('pages/public/estudiantes/Dashboard.vue')},
      {path: 'estudiante/fichajes', component: () => import('pages/public/estudiantes/Fichajes.vue')},
      {path: 'profesor/dashboard', component: () => import('pages/public/profesores/Dashboard.vue')},
      {path: 'profesor/estudiantes', component: () => import('pages/public/profesores/Estudiantes.vue')},
      {path: 'profesor/empresas', component: () => import('pages/public/profesores/Empresas.vue')},
      {path: 'profesor/estudiante/:id', component: () => import('pages/public/profesores/Estudiante.vue')},
      {path: 'profesor/empresa/:id', component: () => import('pages/public/profesores/Empresa.vue')}
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/errors/Error404.vue')
  })
}

export default routes
