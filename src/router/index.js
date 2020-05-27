import Vue from 'vue';
import App from "../App";
import Router from 'vue-router';
import Main from "../components/Main";
import Boutique from "../components/Boutique/Boutique";
import Cart from "../components/Cart";
import Account from "../components/Account";
import SingleProduct from "../components/Boutique/SingleProduct";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            component: App
        },
        {
            path: '/',
            component: Main
        },
        {
            path: '/boutique',
            component: Boutique
        },
        {
            path: '/boutique/:id',
            component: SingleProduct
        },
        {
            path: '/panier',
            component: Cart
        },
        {
            path: '/compte',
            component: Account
        },
    ],
    scrollBehavior () {
        return {x: 0, y: 0}
    }
});
