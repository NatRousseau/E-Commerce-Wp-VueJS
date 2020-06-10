<template>
    <div>
        <div class="category">
            <router-link class="is-tab nav-item" to="/boutique">BOUTIQUE</router-link>
            <div class="dropdown">
                <div class="logo_user"></div>
                <div class="dropdown-content">
                    <router-link to="/inscription">Inscription</router-link>
                    <router-link to="/connexion">Connexion</router-link>
                </div>
            </div>
        </div>
        <div class="boutique d-flex">
            <div class="sidebar_container d-flex">
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
                loader: false,
                filter: {}
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
            },
            setFilter() {
                this.$woocommerce.get("products?attribute=" + this.idCategorie + "&per_page=100")
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

    .logo_user {
        width: 15%;
        height: 70%;
        background-image: url("../../assets/filter.png");
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;
        display: inline-block;
        border: none;
        padding: 16px;
        background-color: #ffffff;
    }

    .dropdown {
        position: relative;
        display: inline-block;
        top: 3px;
        right: 50px;
        float: right;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #ffffff;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        right: 0;

    }

    .dropdown-content a {
        color: black !important;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
    }

    .signout{
        color: black !important;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
    }

    .dropdown-content a:hover {
        background-color: #F6F6F6;
    }

    .signout:hover {
        background-color: #F6F6F6;
    }

    .dropdown:hover .dropdown-content {
        display: block;
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
        flex-direction: column;
        padding-left: 10px;
        width: 60%;
        background-color: #F6F6F6;
        font-family: Spartan;
        font-size: 14px;
        font-weight: 900;
        color: #000000;
        padding-top: 30px;
    }

    .sidebar > p {
        text-align: center;
    }

    .container_article {
        width: 70%;
        margin: 50px;
    }

    .grid-container {
        height: 360px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 10px 10px;
        margin: 10px;
    }

    .article_img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 70%;
        height: 100px;
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
        font-size: 12px;
        text-align: left;
    }

    .article_price {
        font-family: 'Spartan';
        font-size: 12px;
        text-align: left;
    }

    .regular_price {
        text-decoration: line-through;
        color: #707070;
        margin-right: 10px;
    }

    @media (min-width: 576px) {
        .article_img {
            width: 70%;
            height: 150px;
        }

        .article_title {
            font-size: 16px;
        }

        .article_price {
            font-size: 16px;
        }

        .sidebar_container {
            width: 50%;
        }
    }

    @media (min-width: 768px) {
        .article_img {
            width: 70%;
            height: 200px;
        }

        .sidebar_container {
            width: 50%;
            font-size: 16px;
        }

    }

    @media (min-width: 992px) {

        .grid_container {
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 10px 10px;
            margin: 10px;
        }

        .article_img {
            width: 80%;
            height: 250px;
        }

        .article_title {
            font-size: 16px;
        }

        .article_price {
            font-size: 16px;
        }

        .sidebar_container {
            width: 30%;
        }
    }

    @media (min-width: 1200px) {
        .category {
            margin-top: 100px;
        }

        .grid_container {
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 10px 10px;
            margin: 10px;
        }

        .article_img {
            width: 80%;
            height: 250px;
        }

        .article_title {
            font-size: 18px;
        }

        .article_price {
            font-size: 18px;
        }

        .sidebar_container {
            width: 30%;
            font-size: 18px;
        }
    }

    @media (min-width: 1600px) {

        .category {
            margin-top: 110px;
        }

        .grid_container {
            gap: 50px 50px;
        }

        .article_img {
            width: 100%;
            height: 350px;
        }

        .article_title {
            font-size: 20px;
        }

        .article_price {
            font-size: 20px;
        }

        .sidebar_container {
            width: 25%;
            font-size: 24px;
        }

    }

</style>