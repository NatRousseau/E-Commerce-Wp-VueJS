import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Slider from '@jeremyhamm/vue-slider'
import VueResouce from 'vue-resource';

Vue.use(Slider)

Vue.config.productionTip = false;
Vue.use(VueResouce);
Vue.http.options.root = 'http://api.template.nathan-rousseau.fr/wp-json';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
