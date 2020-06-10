import Vue from 'vue'
import Vuex from 'vuex'
import {instance, WooCommerce} from '../components/Connection/http'
import router from '../router/index'
import VuexPersistence from "vuex-persist";

Vue.use(Vuex)

const shop = {
    namespaced: true,

    state: {
        cartList: [],
        search: '',
    },

    getters: {
        listToCart: state => {
            return state.cartList
        },

        getSearchItem: state => {
            return state.search
        }
    },

    // actions: {},

    mutations: {
        addToCartList(state, addCart) {
            state.cartList.push(addCart)
        },

        removeToCartList(state, removeCart) {
            let index = state.cartList.findIndex(c => c.id == removeCart.id);
            state.cartList.splice(index, 1);
        },
        searchItems(state, addSearch) {
            state.search = addSearch
        }

    },

};

const user = {
    namespaced: true,
    state: {
        data: {},
        userData: [],
        isLoading: false,
        isLoggedIn: localStorage.getItem("jwtToken") ? null : false,
        jwtToken: localStorage.getItem("jwtToken"),
        errors: []
    },
    getters: {
        isLoading: state => state.isLoading,
        isLoggedIn: state => state.isLoggedIn,
        errors: state => state.errors,
        currentUser: state => state.data,
        jwtToken: state => state.jwtToken,
        currentUserData: state => state.userData,
    },
    actions: {

        async trySignin(context, credentials) {
            try {
                context.commit("updateIsLoading", true)
                const response = await instance.post("/wp-json/jwt-auth/v1/token?username=" + credentials.email + "&password=" + credentials.password)
                context.commit("signinSuccess", response.data)
                router.push("/compte")
            } catch (err) {
                context.commit("signError", err)
            }
        },
        async trySignup(context, user) {
            try {
                console.log(user)
                context.commit("updateIsLoading", true)
                // await instance.post("/?rest_route=/simple-jwt-login/v1/users&user_login=" + user.user_login + "&email=" + user.email + "&password=" + user.password + "&first_name=" + user.first_name + "&last_name=" + user.last_name)
                WooCommerce.post("customers", user)
                context.commit("signupSuccess")
                router.push("/")
            } catch (err) {
                context.commit("signError", err)
            }
        },
    },
    mutations: {

        addData(state, addUser) {
            state.userData = addUser
            console.log(state.userData)
        },

        updateIsLoading(state, isLoading) {
          state.isLoading = isLoading
        },
        signupSuccess(state) {
            state.isLoading = false
            state.errors = []
        },
        signError(state, errors) {
            console.log(errors)
            state.isLoading = false
            state.errors = errors.response.data
        },
        signinSuccess(state, data) {
            state.isLoading = false
            state.errors = []
            state.isLoggedIn = true
            state.data = data
            state.jwtToken = data.token
            localStorage.setItem("jwtToken", data.token)
        },
        signOut(state) {
            state.jwtToken = null
            state.data = null
            state.isLoggedIn = false
            state.userData = null
            localStorage.removeItem("jwtToken")
        },
    }
};


export default new Vuex.Store({
    modules: {
        shop,
        user
    },
    plugins: [new VuexPersistence().plugin]
},)
