<template>
    <div>
        <div class="d-flex justify-content-center loader visibility-hidden" v-if="loader">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-for="cartArticle in cartArticles" :key="cartArticle.id" class="d-flex flex-column cart_item">
            <div class="media-content d-flex flex-row">
                <div class="cart_img">
                    <router-link class="is-tab nav-item article_link " :to="'/boutique/' + cartArticles.id">
                        <div class="article_img"
                             v-bind:style="{ backgroundImage: 'url(' + cartArticle.images[0].src + ')' }"></div>
                    </router-link>
                </div>
                <div class="cart_info d-flex">
                    <div class="cart_txt d-flex flex-column">
                        <h3 class="article_title">{{cartArticle.name}}</h3>
                        <ul>
                            <li>N° de l'article : {{cartArticle.id}}</li>
                            <li>Poids de l'article : {{cartArticle.weight}} Kg</li>
                            <li>Slug de l'article : {{cartArticle.slug}}</li>
                            <!--                        <li v-for="materialOption in materialOptions" :key="materialOption.id">{{materialOption}}</li>-->
                            <!--                        <li v-for="stoneOption in stoneOptions" :key="stoneOption.id">{{stoneOption}}</li>-->
                        </ul>
                    </div>
                    <div class="cart_price d-flex flex-column">
                        <span class="article_price"
                              v-if="cartArticle.sale_price === ''">{{cartArticle.regular_price}} €</span>
                        <span class="article_price" v-else>
                    <span class="regular_price">{{cartArticle.regular_price}} € </span>{{cartArticle.sale_price}} €</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",

        data() {
            return {
                cart: [],
                cartArticles: [],
                loader: false,
            }
        },

        created() {
            this.loader = true;
            this.cart = this.$store.getters.listToCart

            console.log('panier ' + this.cart);

            // this.loader = true;
            this.cart.forEach(article => {
                this.$woocommerce.get("products/" + article)
                    .then(response => {
                        this.cartArticles.push(response.data)
                        console.log(this.cartArticles);
                    })

                // let galeries = response.data.images
                // galeries.forEach(img => {
                //     this.galerieImg.push(img)
                // })
                // this.image = response.data.images[0].src
                // this.atribute = response.data.attributes
                // let material = this.atribute[0].options
                // material.forEach(metaux => {
                //     this.materialOptions.push(metaux);
                // })
                // let stone = this.atribute[1].options
                // stone.forEach(pierre => {
                //     this.stoneOptions.push(pierre);
                // })
                // this.relatedid = response.data.related_ids
                // this.relatedid.forEach(id => {
                //     this.$woocommerce.get("products/" + id)
                //         .then(response => {
                //             this.relateds = [...this.relateds, response.data];
                //         })
                //         .catch((error) => {
                //             console.log(error.response.data);
                //         });
                // })
                this.loader = false;
            }, error => {
                alert(error)
                this.loader = false;
            });
        },
    }
</script>

<style scoped>

    .loader {
        margin-top: 390px;
        margin-bottom: 390px;
    }

    .cart_item {
        width: 60%;
        background-color: antiquewhite;
        border-bottom: 1px solid #707070;
        padding-bottom: 30px;
        padding-top: 30px;
        margin-left: 20px;
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
        /*margin-top: 20px;*/
        margin-bottom: 50px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 20px;
        text-align: left;
    }

    .article_price {
        font-family: 'Spartan';
        font-size: 20px;
        text-align: left;
    }

    .regular_price {
        text-decoration: line-through;
        color: #707070;
        margin-right: 10px;
    }
</style>