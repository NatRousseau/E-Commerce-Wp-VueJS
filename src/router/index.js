import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "../App";
import Main from "../components/Main";
import Search from "../components/Boutique/Search";
import Boutique from "../components/Boutique/Boutique";
import SingleProduct from "../components/Boutique/SingleProduct";
import Cart from "../components/Cart/Cart";
import Paiement from "../components/Cart/Paiement";
import Signup from "../components/Connection/Signup";
import Signin from "../components/Connection/Signin";
import Profile from "../components/Connection/Profile";
import ProfileOrders from "../components/Connection/ProfileOrders";
import ProfileAdress from "../components/Connection/ProfileAdress";
import Contact from "../components/Contact";
import CondiGeneral from "../components/CondiGeneral";
import CondiUtil from "../components/CondiUtil";
import Mentions from "../components/Mentions";
import Politique from "../components/Politique";

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
            path: '/recherche',
            component: Search
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
            path: '/compte/commandes',
            component: ProfileOrders
        },
        {
            path: '/compte/adresse',
            component: ProfileAdress
        },
        {
            path: '/inscription',
            component: Signup
        },
        {
            path: '/connexion',
            component: Signin
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/condition-genelales',
            component: CondiGeneral
        },
        {
            path: '/condition-utilisation',
            component: CondiUtil
        },
        {
            path: '/mentions-legales',
            component: Mentions
        },
        {
            path: '/politique-et-cookies',
            component: Politique
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

