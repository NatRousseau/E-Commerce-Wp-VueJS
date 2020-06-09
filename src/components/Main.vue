<template>
    <div class="Client-post d-flex flex-column">
        <carousel :per-page="1" :mouse-drag="false" speed="3000" autoplayTimeout="8000"
                  direction="rigth" autoplay=true loop=true>
            <slide>
                <div class="promo">
                    <h2 class="promo_txt">OFFRE SPÉCIALE</h2>
                    <h2 class="promo_txt"><span class="promo_purple">1875€</span> D'ACHATS <span class="promo_purple">=</span> 1
                        MASQUE <span class="promo_purple">OFFERT</span></h2>
                </div>
            </slide>
            <slide>
                <div class="fille">
                </div>
            </slide>
        </carousel>

        <div class="delivery d-flex flex-row">
            <div class="icon">
                <img src="../assets/shipping-and-delivery.png" alt="delivery">
            </div>
            <h3>Livraison en 48h partout en France !</h3>
            <div class="icon">
                <img src="../assets/shipping-and-delivery.png" alt="delivery">
            </div>
        </div>

        <div class="grid-container">
            <div class="square_2x2">
                <h3 class="square_txt">Stylo exclusif trop beau</h3>
            </div>
            <div v-for="popular in populars" :key="popular.id" class="d-flex flex-column search">
                <div class="media-content d-flex flex-column">
                    <div class="popular_img">
                        <router-link class="is-tab nav-item job_title " :to="'/boutique/' + popular.id">
                            <img :src="popular.images[0].src">
                        </router-link>
                    </div>
                    <h3 class="popular_title">{{popular.name}}</h3>
                    <span class="popular_price"
                          v-if="popular.sale_price === ''">{{popular.regular_price}} €</span>
                    <span class="popular_price" v-else>
                                <span class="regular_price">{{popular.regular_price}} € </span>{{popular.sale_price}} €
                            </span>
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
    import {Carousel, Slide} from 'vue-carousel';
    export default {
        name: "Main",
        components: {
            Carousel,
            Slide,
        },
        data() {
            return {
                populars: []
            }
        },
        mounted: function () {
            this.$woocommerce.get("products?featured=true")
                .then(response => {
                    for (let popular in response.data) {
                        this.populars.push(response.data[popular]);
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
            this.$fire({
                title: "Information",
                text: "Confidentialité et cookies : ce site utilise des cookies. En cliquant sur OK, vous comprenez que nous en utilisions.",
                type: "info",
            }).then(r => {
                console.log(r.value);
            });
        }
    }
</script>

<style scoped>

    .example-slide {
        align-items: center;
        background-color: #666;
        color: #999;
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        min-height: 10rem;
    }
    .slide-img {
        width: auto;
        height: 400px;
    }

    p {
        font-family: 'Spartan';
        font-weight: 700;
    }

    .promo {
        width: 100%;
        background-image: url("../assets/OFFRE_SPECIALE.png");
        background-size: cover;
        height: 400px;
        padding-top: 48px;
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

    .fille {
        width: 100%;
        background-image: url("../assets/SS20-ALWAYSON-VISUAL-FW-PARIS-2-OF-GL-CS-L-LD.jpg");
        background-size: cover;
        height: 400px;
        padding-top: 118px;
    }

    .delivery{
        width: 100%;
        height: 100px;
        background-color: #000000;
        justify-content: center;
    }

    .icon {
        width: 4%;
        margin-top: 14px;
    }

    .icon img{
        width: 100%;
    }

    .delivery h3 {
        margin-top: 35px;
        margin-left: 10px;
        margin-right: 10px;
        color: #ffffff;
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

    .popular_img img {
        width: 100%;
    }

    .popular_title {
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 20px;
        text-align: left;
    }

    .regular_price {
        text-decoration: line-through;
        color: #707070;
        margin-right: 10px;
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