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
        },

        removeToCartList(state, removeCart){
            let index = state.cartList.findIndex(c => c.id == removeCart.id);
            state.cartList.splice(index, 1);
            // let indexes = [], i;
            // for(i = 0; i < state.cartList.length; i++)
            //     if (state.cartList[i] === removeCart)
            //         indexes.push(i);
            // for (let j = 0; j < indexes; j++)
            // {
            //     state.cartList.slice(state.cartList.indexOf(j), 1)
            // }

            state.cartList.slice(removeCart)
            console.log(state.cartList)
        }
    },
    actions: {

    }
})
