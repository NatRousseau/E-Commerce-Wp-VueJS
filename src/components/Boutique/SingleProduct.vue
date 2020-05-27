<template>
    <div>
        <div class="category">
            <router-link class="is-tab nav-item" to="/boutique">BOUTIQUE</router-link>
            <router-link class="is-tab nav-item article_select" to="/boutique">{{article.name}}</router-link>
        </div>
        <div class="article_single">
            <div class="d-flex justify-content-center loader visibility-hidden" v-if="loader">
                <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div class="media-content d-flex flex-row">
                <ProductGalerie @get-id="selectionImage"></ProductGalerie>

                <div class="article_img">
                    <img :src="image">
                </div>

                <div class="info_article d-flex flex-column">
                    <div class="article_header d-flex flex-column">
                        <h3 class="article_title">{{article.name}},</h3>
                        <div class="article_composition d-flex flex-row">
<!--                            <h3 class="article_material">{{article.attributes[0].options[0]}}, </h3>-->
<!--                            <h3 class="article_stone">{{article.attributes[1].options[0]}}</h3>-->
                        </div>
                    </div>
                    <span class="article_price">{{article.price}} €</span>
                    <!--                    <span class="article_price">{{article.sale_price}} €</span>-->
                    <button class="add_cart">AJOUTER AU PANIER</button>
                    <div class="info_plus d-flex flex-column">
                        <p id="dispo">Disponible en ligne</p>
                        <p>Retours gratuits</p>
                        <p>Jusqu'à 60 jours pour renvoyer le produit</p>
                        <p>Livraison standard gratuite sur Swarovski.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="related_product">
            <RelatedProduct :relatedid = "relatedid"></RelatedProduct>
        </div>
    </div>

</template>

<script>
    import ProductGalerie from "./ProductGalerie";
    import RelatedProduct from "./RelatedProduct";

    export default {
        name: "SingleProduct",
        components: {
            ProductGalerie,
            RelatedProduct
        },
        data() {
            return {
                article: {},
                image: '',
                relatedid: [],
                loader: false
            }
        },
        methods: {
            selectionImage(valeur) {
                this.image = valeur
            }
        },
        mounted: function () {
            this.loader = true;
            this.$woocommerce.get("products/" + this.$route.params.id)
                .then(response => {
                    this.article = response.data
                    this.image = response.data.images[0].src
                    this.loader = false;
                    this.relatedid = response.data.related_ids
                }, error => {
                    alert(error)
                    this.loader = true;
                });
        }
    }
</script>

<style scoped>

    .category {
        border-bottom: 2px solid #000000;
        border-top: 2px solid #000000;
        text-align: left;
    }

    .category > a {
        margin-top: 10px;
        margin-bottom: 5px;
        margin-left: 20px;
        margin-right: 10px;
        font-family: Spartan;
        font-size: 25px;
        font-weight: 300;
        color: #000000;
    }

    .article_select::before {
        content: '>';
        margin-right: 10px;
    }

    .loader {
        margin-top: 390px;
        margin-bottom: 390px;
    }

    .article_single {
        margin-top: 80px;
    }

    .article_img {
        width: 663px;
        height: 600px;
        margin-right: 50px;
        margin-left: 50px;
        background-color: #F6F6F6;
    }

    .article_img img {
        width: 100%;
    }

    .info_article {
        margin-right: 50px;
        margin-left: 50px;
        width: 500px;
        height: 623px;
        background-color: #F6F6F6;
        text-align: left;
    }

    .article_title {
        margin-top: 20px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 20px;
        width: 100%;
    }

    .article_material {
        margin-top: 20px;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 20px;
    }

    .article_stone {
        margin-top: 20px;
        margin-left: 10px;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 20px;
    }

    .article_price {
        font-family: 'Spartan';
        font-size: 20px;
        text-align: left;
    }

    .add_cart {
        margin-top: 10%;
        margin-bottom: 10%;
        font-family: 'Spartan';
        font-weight: 400;
        font-size: 20px;
        color: white;
        background-color: #000000;
        border: none;
        padding: 23px 135px;
    }

    .info_plus {
        text-align: center;
    }

    p {
        margin: 0;
    }

    #dispo {
        font-weight: 700;
    }

</style>