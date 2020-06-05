import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "../App";
import Main from "../components/Main";
import Boutique from "../components/Boutique/Boutique";
import SingleProduct from "../components/Boutique/SingleProduct";
import Cart from "../components/Cart/Cart";
import Paiement from "../components/Cart/Paiement";
import Signup from "../components/Connection/Signup";
import Signin from "../components/Connection/Signin";
import Profile from "../components/Connection/Profile";


Vue.use(VueRouter);

export default new VueRouter({
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
            path: '/validation',
            component: Paiement
        },
        {
            path: '/compte',
            component: Profile
        },
        {
            path: '/inscription',
            component: Signup
        },
        {
            path: '/connexion',
            component: Signin
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

