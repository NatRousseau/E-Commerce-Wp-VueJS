<template>
    <div class="main d-flex">
        <div class="cart">
            <div class="d-flex justify-content-center loader visibility-hidden" v-if="loader">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <!--            <div v-if="this.$store.getters.listToCart.length === 0" class="no_article d-flex flex-column">-->
            <!--                <span>Votre panier est vide</span>-->
            <!--                <router-link class="is-tab nav-item article_link " to="/boutique">-->
            <!--                    <button class="voir_plus_button">ALLER A LA BOUTIQUE</button>-->
            <!--                </router-link>-->
            <!--            </div>-->
            <div v-else v-for="cartArticle in cartArticles" :key="cartArticle.id" class="d-flex flex-column cart_item">

                <div class="media-content d-flex flex-row">
                    <div class="cart_img">
                        <router-link class="is-tab nav-item article_link " :to="'/boutique/' + cartArticle.id">
                            <div class="article_img"
                                 v-bind:style="{ backgroundImage: 'url(' + cartArticle.images[0].src + ')' }"></div>
                        </router-link>
                    </div>
                    <div class="cart_info d-flex flex-column">
                        <div class="cart_txt d-flex flex-column">
                            <h3 class="article_title">{{cartArticle.name}}</h3>
                            <ul class="detail_list">
                                <li v-for="materialOption in cartArticle.attributes[0].options"
                                    :key="materialOption.id">
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
                                <button class="lessButton" @click="quantityLess(cartArticle)">-</button>
                                <span class="count">{{cartArticle.meta_data[0].value}}</span>
                                <button class="moreButton" @click="quantityMore(cartArticle)">+</button>
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
        <div class="recap">
            <CartRecap :cartArticles="cartArticles"></CartRecap>
        </div>
    </div>
</template>

<script>
    import {mdbIcon} from 'mdbvue';
    import CartRecap from "./CartRecap";

    export default {
        name: "Cart",
        components: {
            mdbIcon,
            CartRecap
        },
        data() {
            return {
                cart: [],
                cartArticles: [],
                loader: false,
                // singleTotal: [],
            }
        },

        methods: {
            deleteArticle(cartArticle) {
                // this.cartArticles.splice(this.cartArticles.indexOf(cartArticle), 1)
                this.$store.commit('shop/removeToCartList', cartArticle)
                // this.cart = this.$store.getters.quantityCart
                // console.log(cartArticle);
                // console.log(this.cartArticles.indexOf(cartArticle))
            },
            quantityLess(cartArticle) {
                cartArticle.meta_data[0].value -= 1
                this.calculSingleTotal(this.cartArticles)
            },

            quantityMore(cartArticle) {
                cartArticle.meta_data[0].value += 1
                this.calculSingleTotal(this.cartArticles)
            },

            calculSingleTotal(cartArticle) {
                cartArticle.forEach(price => {
                    if (price.sale_price === '') {
                        let quantity = price.meta_data[0].value
                        let singleprice = price.regular_price * quantity
                        // this.singleTotal.push(singleprice);
                        // this.$store.commit('addToCalculList', this.singleTotal)
                        price.meta_data[2].value = singleprice
                        // console.log(quantity);
                        // console.log(singleprice);
                    } else {
                        let quantity = price.meta_data[0].value
                        let singleprice = price.sale_price * quantity
                        // this.singleTotal.push(singleprice);
                        // this.$store.commit('addToCalculList', this.singleTotal)
                        price.meta_data[2].value = singleprice
                        // console.log(quantity);
                        // console.log(singleprice);
                    }
                    // console.log(this.singleTotal);
                })
            }

        },
        mounted() {
            this.loader = true;
            this.cartArticles = this.$store.getters["shop/listToCart"]
            // this.singleTotal = this.$store.getters.totalList
            this.calculSingleTotal(this.cartArticles);
            this.loader = false;
        },


    }
</script>

<style scoped>

    .main {
        flex-direction: column;
    }

    .cart {
        width: 100%;
    }

    .recap {
        width: 90%;
        background-color: #F6F6F6;
        margin: 20px;
        height: fit-content;
    }

    .loader {
        margin-top: 390px;
        margin-bottom: 390px;
    }

    .cart_item {
        border-bottom: 1px solid #707070;
        padding-bottom: 30px;
        padding-top: 30px;
        margin-left: 20px;
    }

    .cart_info {
        width: 100%;
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
        width: 152px;
        height: 130px;
        background-color: #FAFAFA;
    }

    .article_img img {
        width: 100%;
        max-height: 360px;
    }

    .article_title {
        margin-bottom: 40px;
        margin-left: 15px;
        width: 100px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 14px;
        text-align: left;
    }

    .article_price {
        font-family: 'Spartan';
        font-size: 14px;
        text-align: left;
        margin-right: 10px;
    }

    .regular_price {
        text-decoration: line-through;
        color: #707070;
    }

    .detail_list {
        padding: 0px 15px;
    }

    li {
        text-decoration: none;
        list-style: none;
        text-align: left;
    }

    .cart_option {
        width: 100%;
        position: relative;
    }

    .quantity {
        height: 70px;
        background-color: #F6F6F6;
        border: 1px solid #707070;
        margin: 0px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 14px;
    }

    .lessButton {
        border: none;
        height: 68px;
        width: 50px;
        background-color: #F6F6F6;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 14px;
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
        font-size: 14px;
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
        right: 110%;
    }

    @media (min-width: 576px) {
        .article_title {
            margin-bottom: 40px;
            margin-left: 15px;
            width: 300px;
            font-family: 'Spartan';
            font-weight: bold;
            font-size: 14px;
            text-align: left;
        }

        .recap {
            width: 94%;
        }
    }

    @media (min-width: 768px) {
        .article_img {
            width: 212px;
            height: 190px;
        }

        .quantity {
            margin: 10px 50px;
        }

        .delete {
            right: 0;
        }
    }

    @media (min-width: 992px) {
        .main {
            flex-direction: row;
        }

        .cart {
            width: 60%;
        }

        .recap {
            width: 35%;
            margin: 30px;
        }

        .cart_info {
            position: relative;
        }

        .article_img {
            width: 272px;
            height: 250px;
        }

        .quantity {
            margin: 10px 20px;
        }


    }

    @media (min-width: 1200px) {
        .cart_item {
            margin-left: 50px;
        }
    }

    @media (min-width: 1600px) {
        .recap {
            width: 30%;
            margin: 50px;
        }
    }
</style>