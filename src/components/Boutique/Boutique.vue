<template>
    <div>
        <div class="category">
            <h2>BOUTIQUE</h2>
        </div>
        <div class="boutique d-flex flex-row">
            <div class="sidebar d-flex flex-column">
                <p>COMMADER PAR CATEGORIES</p>
                <Sidebar @get-id="selectionCategorie"></Sidebar>
            </div>
            <div v-for="popular in populars" :key="popular.id" class="d-flex flex-column search">
                <div class="media-content d-flex flex-column">
                    <img class="popular_img" :src="popular.images[0].src">
                    <h3 class="popular_title">{{popular.name}}</h3>
                    <span class="popular_price">{{popular.price}} €</span>
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
                idCategorie: ''
            }
        },
        methods: {
            selectionCategorie(valeur) {
                this.idCategorie = valeur
                console.log(valeur)
                this.populars = [];
                this.$woocommerce.get("products?category=" + this.idCategorie + "&per_page=100")
                    .then(response => {
                        for (let popular in response.data) {
                            this.populars.push(response.data[popular]);
                            console.log(response)
                        }
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
            }

        },
    }
</script>

<style scoped>

    .category {
        border-bottom: 2px solid #000000;
        border-top: 2px solid #000000;
        text-align: left;
    }

    .category > h2 {
        margin-top: 10px;
        margin-bottom: 5px;
        margin-left: 20px;
        margin-right: 10px;
        font-family: Spartan;
        font-size: 25px;
        font-weight: 300;
        color: #000000;
    }

    .sidebar {
        width: 500px;
        background-color: #F6F6F6;
        font-family: Spartan;
        font-size: 25px;
        font-weight: 900;
        color: #000000;
        padding-top: 100px;
        height: 100%;
    }

    .sidebar > p {
        text-align: center;
    }

    .search {
        margin-left: ;
    }

</style>