import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueMask from 'v-mask'
import Vuelidate from 'vuelidate'
import './assets/layouts/index.scss'
import store from './store';
import Vidle from 'v-idle';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDjv7izdGTG6V_5XF7VwqJOzbjEYYiJjKc',
    libraries: 'places',
    region: 'ES',
    language: 'UA',
  }
})
Vue.use(Vidle)
Vue.use(VueMask);
Vue.use(Vuelidate)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
