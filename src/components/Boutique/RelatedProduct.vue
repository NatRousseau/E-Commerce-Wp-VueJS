<template>
    <div>
        <div v-for="product in products" :key="product.id" class="d-flex flex-column search">
            <div class="media-content d-flex flex-column">
                <div class="article_img">
                    <router-link class="is-tab nav-item job_title " :to="'/boutique/' + product.id">
                        <img :src="product.images[0].src">
                    </router-link>
                </div>
                <h3 class="article_title">{{product.name}}</h3>
                <span class="article_price">{{product.price}} €</span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "RelatedProduct",
        props: ['relatedid'],
        data() {
            return {
                relateds: this.relatedid,
                products: [],
                loader: false
            }
        },
        mounted: function () {
            this.relateds.forEach(id => {
            this.$woocommerce.get("products/" + id)
                .then(response => {
                    this.products = [...this.products, response.data];
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
            })
        }
    }
</script>

<style scoped>

    .loader {
        margin-top: 320px;
        width: 480px;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 360px;
        z-index: 1000;
    }

    .article_img_galerie {
        margin-left: 200px;
        margin-right: 50px;
    }

    .article_img_galerie_single {
        width: 100px;
        margin-bottom: 30px;
        border: 1px solid #707070;
    }

    article_img_galerie_single img {
        width: 100%;
    }

</style>