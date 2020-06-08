<template>
    <div>
        <div class="category">
            <router-link class="is-tab nav-item" to="/boutique">BOUTIQUE</router-link>
        </div>
        <div class="boutique d-flex">
            <div class="sidebar_container d-flex flex-column">
                <p>PARCOURIR LES CATEGORIES</p>
                <a class="categorie_title" @click="getPopular">Les plus populaires</a>
                <Sidebar @get-id="selectionCategorie"></Sidebar>
            </div>
            <div class="container_article">
                <div class="d-flex justify-content-center loader visibility-hidden" v-if="loader">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="grid_container">
                    <div v-for="popular in populars" :key="popular.id" class="d-flex flex-column search">
                        <div class="media-content d-flex flex-column">
                            <router-link class="is-tab nav-item article_link " :to="'/boutique/' + popular.id">
                                <div class="article_img"
                                     v-bind:style="{ backgroundImage: 'url(' + popular.images[0].src + ')' }"></div>
                            </router-link>
                            <h3 class="article_title">{{popular.name}}</h3>
                            <span class="article_price"
                                  v-if="popular.sale_price === ''">{{popular.price}} €</span>
                            <span class="article_price" v-else>
                                <span class="regular_price">{{popular.price}} € </span>{{popular.sale_price}} €
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from "./Sidebar";

    export default {
        name: "Boutique",
        components: {
            Sidebar
        },
        data() {
            return {
                populars: [],
                idCategorie: '',
                loader: false
            }
        },
        methods: {
            getPopular() {
                this.populars = [];
                this.loader = true;
                this.$woocommerce.get("products?featured=true")
                    .then(response => {
                        for (let popular in response.data) {
                            this.populars.push(response.data[popular]);
                            this.loader = false;
                        }
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                        this.loader = true;
                    });
            },
            selectionCategorie(valeur) {
                this.idCategorie = valeur
                console.log(valeur)
                this.populars = [];
                this.loader = true;
                this.$woocommerce.get("products?category=" + this.idCategorie + "&per_page=100")
                    .then(response => {
                        for (let popular in response.data) {
                            this.populars.push(response.data[popular]);
                            this.loader = false;
                        }
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                        this.loader = true;
                    });
            }

        },
        created: function () {
            this.loader = true;
            this.$woocommerce.get("products?featured=true")
                .then(response => {
                    for (let popular in response.data) {
                        this.populars.push(response.data[popular]);
                        this.loader = false;
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                    this.loader = false;
                });
        }
    }
</script>

<style scoped>

    .loader {
        margin-top: 320px;
        margin-bottom: 360px;
    }

    .boutique {
        flex-wrap: nowrap;
        flex-direction: row;
    }

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

    .categorie_title {
        text-align: left;
        font-family: Spartan;
        font-weight: 900;
        color: #000000;
    }

    a:hover {
        color: #b7b7b7 !important;
    }

    .sidebar_container {
        padding-left: 20px;
        width: 30%;
        background-color: #F6F6F6;
        font-family: Spartan;
        font-size: 25px;
        font-weight: 900;
        color: #000000;
        padding-top: 100px;
    }

    .sidebar > p {
        text-align: center;
    }

    .container_article {
        width: 70%;
        margin: 50px;
    }

    .grid_container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        grid-column-gap: 20px;
        grid-row-gap: 53px;
    }

    .article_img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 404px;
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