<template>
    <div class="main">
        <div class="d-flex justify-content-center loader visibility-hidden" v-if="loader">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-if="this.$store.getters.listToCart.length === 0" class="no_article d-flex flex-column">
            <span>Votre panier est vide</span>
            <router-link class="is-tab nav-item article_link " to="/boutique">
                <button class="voir_plus_button">ALLER A LA BOUTIQUE</button>
            </router-link>
        </div>

        <div v-else v-for="cartArticle in cartArticles" :key="cartArticle.id" class="d-flex flex-column cart_item">

            <div class="media-content d-flex flex-row">
                <div class="cart_img">
                    <router-link class="is-tab nav-item article_link " :to="'/boutique/' + cartArticles.id">
                        <div class="article_img"
                             v-bind:style="{ backgroundImage: 'url(' + cartArticle.images[0].src + ')' }"></div>
                    </router-link>
                </div>
                <div class="cart_info d-flex flex-column">
                    <div class="cart_txt d-flex flex-column">
                        <h3 class="article_title">{{cartArticle.name}}</h3>
                        <ul>
                            <li v-for="materialOption in cartArticle.attributes[0].options" :key="materialOption.id">
                                {{materialOption}}
                            </li>
                            <li v-for="stoneOption in cartArticle.attributes[1].options" :key="stoneOption.id">
                                {{stoneOption}}
                            </li>
                            <li>N° de l'article : {{cartArticle.id}}</li>
                            <li>Poids de l'article : {{cartArticle.weight}} Kg</li>
                            <li>Slug de l'article : {{cartArticle.slug}}</li>
                        </ul>
                    </div>
                    <div class="cart_price d-flex flex-column">
                        <span class="article_price"
                              v-if="cartArticle.sale_price === ''">{{cartArticle.regular_price}} €</span>
                        <span class="article_price d-flex flex-column" v-else>
                    <span class="regular_price">{{cartArticle.regular_price}} € </span>{{cartArticle.sale_price}} €</span>
                    </div>
                    <div class="cart_option d-flex">
                        <div class="quantity">
                            <button class="lessButton" @click="cartArticle.qty -= 1">-</button>
                            <span class="count">{{cartArticle.qty}}</span>
                            <button class="moreButton" @click="cartArticle.qty += 1">+</button>
                        </div>
                        <div>
                            <button class="delete" @click="deleteArticle(cartArticle)">
                                <mdb-icon far icon="trash-alt"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mdbIcon} from 'mdbvue';

    export default {
        name: "Cart",
        components: {
            mdbIcon
        },
        data() {
            return {
                cart: [],
                cartArticles: [],
                dico: [],
                loader: false,
            }
        },

        methods: {
            deleteArticle(cartArticle){
                // this.cartArticles.splice(this.cartArticles.indexOf(cartArticle), 1)
                this.$store.commit('removeToCartList', cartArticle)
                // console.log(cartArticle);
                // console.log(this.cartArticles.indexOf(cartArticle))
            },
        },
        mounted() {
            this.loader = true;
            this.cart = this.$store.getters.listToCart
            if (this.cart.length !== 0) {
                let sorted_arr = this.cart.slice().sort();
                var dico = new Map();
                for (let i = 0;
                     i < sorted_arr.length;
                     i++
                ) {
                    if (dico.has(sorted_arr [i])) {
                        var newQte = dico.get(sorted_arr[i]);
                        newQte += 1;
                        dico.set(sorted_arr[i], newQte);
                    } else {
                        dico.set(sorted_arr[i], 1);
                    }
                }
                this.dico = dico
                let sansDouble = []
                let sorted_tab = this.cart.slice().sort();
                for (let i = 0; i < sorted_tab.length; i++) {
                    if (sorted_tab[i + 1] !== sorted_tab[i]) {
                        sansDouble.push(sorted_tab[i]);
                    }
                }
                sansDouble.forEach(article => {
                    this.$woocommerce.get("products/" + article)
                        .then(response => {
                            let articleResponse = response.data
                            articleResponse["qty"] = this.dico.get(article)
                            this.cartArticles.push(articleResponse)
                        })
                    this.loader = false;
                }, error => {
                    alert(error)
                    this.loader = false;
                });
            } else {
                this.loader = false
            }

        }
        ,
    }
</script>

<style scoped>

    .main{
        margin-top: 150px;
    }

    .loader {
        margin-top: 390px;
        margin-bottom: 390px;
    }

    .no_article {
        text-align: center;
        margin-top: 10%;
        font-family: 'Spartan';
        font-weight: 400;
        font-size: 20px;
    }

    .voir_plus_button {
        margin-top: 50px;
        margin-bottom: 50px;
        font-family: 'Spartan';
        font-weight: 400;
        font-size: 20px;
        color: white;
        background-color: #000000;
        border: none;
        padding: 23px 135px;
    }

    .cart_item {
        width: 60%;
        border-bottom: 1px solid #707070;
        padding-bottom: 30px;
        padding-top: 30px;
        margin-left: 20px;
    }

    .cart_info {
        width: 100%;
        position: relative;
    }

    .cart_price {
        position: absolute;
        right: 0;
        color: red;
    }

    .article_img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 372px;
        height: 350px;
        background-color: #FAFAFA;
    }

    .article_img img {
        width: 100%;
        max-height: 360px;
    }

    .article_title {
        margin-bottom: 40px;
        margin-left: 20px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 20px;
        text-align: left;
    }

    .article_price {
        font-family: 'Spartan';
        font-size: 20px;
        text-align: left;
        margin-right: 10px;
    }

    .regular_price {
        text-decoration: line-through;
        color: #707070;
        /*margin-right: 10px;*/
    }

    li {
        text-decoration: none;
        list-style: none;
        text-align: left;
    }

    .cart_option{
        width: 100%;
        position: relative;
    }

    .quantity {
        /*width: 254px;*/
        height: 70px;
        background-color: #F6F6F6;
        border: 1px solid #707070;
        margin: 30px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 20px;
    }

    .lessButton {
        border: none;
        height: 68px;
        width: 50px;
        background-color: #F6F6F6;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 20px;
    }

    .count {
        height: 68px;
        margin: 0 30px;
    }

    .moreButton {
        border: none;
        height: 68px;
        width: 50px;
        background-color: #F6F6F6;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 20px;
    }

    .delete {
        margin: 30px;
        border: none;
        border-top: 1px solid #707070;
        border-bottom: 1px solid #707070;
        background-color: #ffffff;
        width: 60px;
        height: 40px;
        position: absolute;
        right: 20px;
    }
</style>