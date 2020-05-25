import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Slider from '@jeremyhamm/vue-slider'

Vue.use(Slider)

Vue.config.productionTip = false;

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;


const WooCommerce = new WooCommerceRestApi({
    url: 'http://api.template.nathan-rousseau.fr', // Your store URL
    consumerKey: 'ck_f2c18dbfe97c398456311a886f282266f572b102', // Your consumer key
    consumerSecret: 'cs_b9978dd6edf9242d3d0b1445eae862d6558f8a1a', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

Vue.prototype.$woocommerce = WooCommerce

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
