import Vue from 'vue';
import App from "../App";
import Router from 'vue-router';
import HelloWorld from "../components/HelloWorld";
import Main from "../components/Main";

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
            path: '/coucou',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
});
