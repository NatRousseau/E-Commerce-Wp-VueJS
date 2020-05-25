<template>
    <div class="Client-post d-flex flex-column">
        <div class="promo">
            <h2 class="promo_txt">OFFRE SPÉCIALE</h2>
            <h2 class="promo_txt"><span class="promo_purple">1875€</span> D'ACHATS <span class="promo_purple">=</span> 1
                MASQUE <span class="promo_purple">OFFERT</span></h2>
        </div>
        <div class="grid-container">
            <div class="square_2x2">
                <h3 class="square_txt">Stylo exclusif trop beau</h3>
            </div>
            <div v-for="popular in populars" :key="popular.id" class="d-flex flex-row">
                <div class="media-content d-flex flex-column">
                    <img class="popular_img" :src="popular.images[0].src">
                    <h3 class="popular_title">{{popular.name}}</h3>
                    <span class="popular_price">{{popular.price}} €</span>
                </div>
            </div>
        </div>
        <div class="offre">
            <img src="../assets/promo.png" alt="">
        </div>

        <div class="voir_plus">
            <button class="voir_plus_button">VOIR PLUS</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                populars: []
            }
        },
        created: function () {
            this.$woocommerce.get("products?featured=true")
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
    }
</script>

<style scoped>

    p {
        font-family: 'Spartan';
        font-weight: 700;
    }

    .promo {
        width: 100%;
        background-image: url("../assets/OFFRE_SPECIALE.png");
        background-size: cover;
        height: 533px;
        padding-top: 118px;
    }

    .promo_purple {
        color: #CC59DC;
    }

    .promo_txt {
        font-family: 'Spartan';
        font-weight: 900;
        font-size: 50px;
        color: #D6F3C3;
        line-height: 150px;
    }

    .grid-container {
        height: 1200px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 60px 60px;

        margin: 5% 15%;
    }

    .square_2x2 {
        grid-area: 1 / 1 / 3 / 3;
        background-image: url("../assets/stylo.png");
        background-size: cover;
    }

    .square_txt {
        font-family: 'Spartan';
        font-weight: 800;
        font-size: 55px;
        text-align: left;
        color: white;
        margin-top: 880px;
        margin-left: 20px;
    }

    .popular_img {
        width: 100%;
    }

    .popular_title {
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 20px;
        text-align: left;
    }

    .popular_price {
        font-family: 'Spartan';
        font-size: 20px;
        text-align: left;
    }

    .offre {
        margin-top: 15%;
        width: 100%;
    }

    .offre img {
        width: 100%;
    }

    .voir_plus_button {
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

</style>