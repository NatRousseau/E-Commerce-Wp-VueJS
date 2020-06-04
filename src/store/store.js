import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [new VuexPersistence().plugin],
    state: {
        cartList: [],
        // totalList: []
    },
    getters: {
        listToCart: state => {
            return state.cartList
        },
    },

    actions: {},

    mutations: {
        addToCartList(state, addCart) {
            state.cartList.push(addCart)
        },

        // addToCalculList(state, addCalcul) {
        //     state.totalList.push(addCalcul)
        // },


        removeToCartList(state, removeCart) {
            let index = state.cartList.findIndex(c => c.id == removeCart.id);
            state.cartList.splice(index, 1);
            //     // let indexes = [], i;
            //     // for(i = 0; i < state.cartList.length; i++)
            //     //     if (state.cartList[i] === removeCart)
            //     //         indexes.push(i);
            //     // for (let j = 0; j < indexes; j++)
            //     // {
            //     //     state.cartList.slice(state.cartList.indexOf(j), 1)
            //     // }
            //
            //     state.cartList.slice(removeCart)
            //     console.log(state.cartList)
        },

        // calculSinglePrice(state) {
        //     this.cartArticles.forEach(price => {
        //         if (price.sale_price === '') {
        //             let singleprice = price.regular_price * price.meta_data[0].value
        //             this.singleTotal.push(singleprice);
        //             // console.log(singleprice);
        //         } else {
        //             let singleprice = price.sale_price * price.meta_data[0].value
        //             this.singleTotal.push(singleprice);
        //             // console.log(singleprice);
        //         }
        //         console.log(this.singleTotal);
        //     })
        // }

    },

})
