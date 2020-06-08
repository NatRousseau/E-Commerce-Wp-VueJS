import Vue from "vue"
import axios from "axios"
// import store from "../../store/store";

// axios.interceptors.request.use(request => {
//     const jwtToken = store.getters["user/jwtToken"]
//     if (jwtToken) {
//         request.headers["Authorization"] = 'Bearer' +  jwtToken
//     }
//     return request
// })


const instance = axios.create({
    baseURL: 'https://api.template.nathan-rousseau.fr'
})

Vue.prototype.$axios = instance

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;


const WooCommerce = new WooCommerceRestApi({
    url: 'https://api.template.nathan-rousseau.fr', // Your store URL
    consumerKey: 'ck_f2c18dbfe97c398456311a886f282266f572b102', // Your consumer key
    consumerSecret: 'cs_b9978dd6edf9242d3d0b1445eae862d6558f8a1a', // Your consumer secret
    version: 'wc/v3', // WooCommerce WP REST API version
    queryStringAuth: true,
});

Vue.prototype.$woocommerce = WooCommerce

export {
    instance,
    WooCommerce
}