import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: [],
    },
    getters: {
        listToCart: state => {
            return state.cartList
        }
    },

    mutations: {
        addToCartList(state, addCart) {
            state.cartList.push(addCart)
            console.log('store ' + this.state.cartList)
        }
    },
    actions: {

    }
})
