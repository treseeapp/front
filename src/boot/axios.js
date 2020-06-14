import Vue from 'vue'
import axios from 'axios'

/*
* Para hacer una peticion axios ya sea java o node se hara:
*
* this.$axiosJava.get( AQUI IRÁ EL ENDPOINT [SIN AÑADIR LA URL BASE, YA QUE LA AÑADIMOS AQUI])
* */
const axiosJava = axios.create({
  baseURL: process.env.API_JAVA
});
const axiosNode = axios.create({
  baseURL: process.env.API_NODE
});

export default async ({Vue, router}) => {

  axiosJava.interceptors.request.use(config => {
    config.withCredentials = true;
    const token = localStorage.getItem('accessToken');
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  }, function (error) {

    return Promise.reject(error);
  });

  axiosJava.interceptors.response.use(function (response) {
    return response;
  }, async function (error) {

    const originalRequest = error.config;

    if (error.response.status === 401) {
      // UNAUTORIZED, token no valido o token caducado.

      /*
      * Step 1- Intentar renovar token
      * */
      let response = await axiosNode.post('/auth/refresh/token');

      /*
      * Guardar token
      * */
      const token = response.data.accessToken;
      const refresh = response.data.refreshToken;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("refreshToken", refresh);

      /*
      * OK - token renovado
      * */

      if (response.status === 200) {

        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        return axiosJava(originalRequest);
      } else {
        router.push("/")
      }

    }

    if (error.response.status === 403) {
      // FORBIDEN - NO tienes permisos, loggeate con usuario que si tenga permisos
      router.push('/')
    }

    return error.response;
  });


  /*
  * Estos son los axios de node con sus interceptors
  * */
  axiosNode.interceptors.request.use(function (config) {
    config.withCredentials = true;

    /*
    * Aqui es lo que me referia de por que lo pasas por el
    * body el refresh token cuando lo podemos pasar aqui por el header
    * */
    const refresh = localStorage.getItem('refreshToken');
    config.headers.Authorization = `${refresh}`;

    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  axiosNode.interceptors.response.use(function (response) {
    return response;
  }, async function (error) {
    return error.response;
  })
}

Vue.prototype.$axiosJava = axiosJava;
Vue.prototype.$axiosNode = axiosNode;
