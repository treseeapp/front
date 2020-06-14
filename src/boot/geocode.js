import Geocoder from "@pderas/vue2-geocoder";

export default ({Vue}) => {
  Vue.use(Geocoder, {
    defaultCountryCode: null, // e.g. 'CA'
    defaultLanguage: null, // e.g. 'en'
    defaultMode: 'address', // or 'lat-lng'
    googleMapsApiKey: process.env.API_KEY_GMAPS
  });
};
