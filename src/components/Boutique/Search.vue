<template>
    <div>
        <h1>Résultat de la recherche :</h1>
        <div class="grid_container">
            <div v-for="{ name, id, price, images, sale_price} of searchResults" :key="id" class="d-flex flex-row search">
                <div class="media-content d-flex flex-column">
                    <router-link class="is-tab nav-item article_link " :to="'/boutique/' + id">
                        <div class="article_img"
                             v-bind:style="{ backgroundImage: 'url(' + images[0].src + ')' }"></div>
                    </router-link>
                    <h3 class="article_title">{{name}}</h3>
                    <span class="article_price"
                          v-if="sale_price === ''">{{price}} €</span>
                    <span class="article_price" v-else>
                        <span class="regular_price">{{price}} € </span>{{sale_price}} €
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                search: {},
                searchResults: []
            }
        },
        mounted() {
            this.search = this.$store.getters["shop/getSearchItem"]
            this.$woocommerce.get("products?search=" + this.search)
                .then(response => {
                    for (let searchitem in response.data) {
                        this.searchResults.push(response.data[searchitem]);
                        console.log(this.searchResults);
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        }
    }
</script>

<style scoped>

    .grid_container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        grid-column-gap: 50px;
        grid-row-gap: 53px;
        padding: 50px;
    }

    .media-content{
        width: 100%;
    }

    .article_img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 360px;
        background-color: #FAFAFA;
    }

    .article_img img {
        width: 100%;
        max-height: 360px;
    }

    .article_title {
        margin-top: 20px;
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