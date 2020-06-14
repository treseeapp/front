import * as VueGoogleMaps from 'vue2-google-maps'

export default ({Vue}) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.API_KEY_GMAPS
    },
  });
};
