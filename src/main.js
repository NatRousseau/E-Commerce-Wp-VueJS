import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import VueResouce from 'vue-resource';
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueSimpleAlert from "vue-simple-alert";
import "./components/Connection/http"

Vue.config.productionTip = false;



Vue.use(VueResouce);
Vue.use(VueSimpleAlert);
Vue.http.options.root = 'https://api.template.nathan-rousseau.fr/wp-json';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
