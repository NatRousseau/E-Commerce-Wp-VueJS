<template>
    <div class="Client-post d-flex flex-column">
        <carousel :per-page="1" :mouse-drag="false" :speed="3000" :autoplayTimeout="8000"
                  :direction="rigth" :autoplay=true :loop=true>
            <slide>
                <div class="promo">
                    <h2 class="promo_txt">OFFRE SPÉCIALE</h2>
                    <h2 class="promo_txt"><span class="promo_purple">1875€</span> D'ACHATS <span
                            class="promo_purple">=</span> 1
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
            <img src="../assets/cta.png" alt="">
        </div>

        <div class="voir_plus">
            <router-link class="is-tab nav-item voir_plus_button " to="/boutique">
                BOUTIQUE
            </router-link>
        </div>
        <h2 class="client_title">Les avis de nos clients :</h2>
        <div class="nos_client d-flex flex-row">
            <div v-for="review in reviews" :key="review.id" class="d-flex flex-column review_post">
                <img class="testimonial"
                     src="http://api.duhamel-logistique.fr/wp-content/uploads/2020/04/Testimonial.png">
                <div class="media-content d-flex flex-column">
                    <h3 class="review_title">Avis de : {{review.reviewer}}</h3>
                    <span class="review_note">note : {{review.rating}} sur 5</span>
                    <p class="review_content" v-html="review.review"></p>
                </div>
            </div>
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
                populars: [],
                reviews: []
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
                text: "Ce site est un projet étudiant et est en aucun cas un site officiel !",
                type: "info",
            }).then(r => {
                console.log(r.value);
            });
            this.$woocommerce.get("products/reviews")
                .then(response => {
                    for (let review in response.data) {
                        this.reviews.push(response.data[review]);
                        console.log(this.reviews);
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
        height: 150px;
        padding-top: 50px;
    }

    .promo_purple {
        color: #CC59DC;
    }

    .promo_txt {
        font-family: 'Spartan';
        font-weight: 900;
        font-size: 12px;
        color: #D6F3C3;
        line-height: 20px;
    }

    .fille {
        width: 100%;
        background-image: url("../assets/slider.png");
        background-size: cover;
        height: 150px;
    }

    .delivery {
        width: 100%;
        height: 100px;
        background-color: #000000;
        justify-content: center;
    }

    .icon {
        width: 25%;
        /*margin-top: 4px;*/
        margin: 9px 10px;
    }

    .icon img {
        width: 100%;
    }

    .delivery h3 {
        font-family: 'Spartan';
        font-weight: 900;
        font-size: 16px;
        margin-top: 15px;
        margin-left: 30px;
        margin-right: 30px;
        color: #ffffff;
    }

    .grid-container {
        height: 360px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 10px 10px;
        margin: 10px;
    }

    .square_2x2 {
        grid-area: 1 / 1 / 3 / 3;
        background-image: url("../assets/stylo.png");
        background-size: cover;
    }

    .square_txt {
        font-family: 'Spartan';
        font-weight: 800;
        font-size: 16px;
        text-align: left;
        color: white;
        margin-top: 85%;
        margin-left: 10px;
    }

    .popular_img {
        width: 70%;
    }

    .popular_img img {
        width: 100%;
    }

    .popular_title {
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 10px;
        text-align: left;
    }

    .regular_price {
        text-decoration: line-through;
        color: #707070;
        margin-right: 0px;
    }

    .popular_price {
        font-family: 'Spartan';
        font-size: 10px;
        text-align: left;
    }

    .offre {
        margin-top: 15%;
        width: 100%;
    }

    .offre img {
        width: 100%;
    }

    .voir_plus {
        margin-top: 10%;
        margin-bottom: 10%;
    }

    .voir_plus_button {
        font-family: 'Spartan';
        font-weight: 400;
        font-size: 16px;
        color: white;
        background-color: #000000;
        border: none;
        padding: 10px 50px;

    }

    .nos_client {
        background-color: #F6F6F6;
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 30px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .client_title {
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 18px;
        padding-top: 20px;
        padding-bottom: 17px;
        text-align: center;
        background-color: #F6F6F6;
        margin: 0;
    }

    .review_post {
        justify-content: space-around;
        width: 100%;
        padding: 10px 20px;
    }

    .review_title {
        text-align: right;
    }

    .testimonial {
        width: 40px;
        height: 40px;
        position: relative;
        top: 40px;
        left: -10px;
    }

    .review_content {
        font-size: 12px;
        text-align: justify;
        width: 100%;
        margin-bottom: 30px;
    }

    @media (min-width: 576px) {
        .promo {
            height: 250px;
            padding-top: 120px;
        }

        .promo_txt {
            font-size: 16px;
        }

        .fille {
            height: 250px;
        }

        .icon {
            width: 10%;
            margin: -4px 10px;
        }

        .grid-container {
            height: 450px;
            gap: 20px 20px;
            margin: 30px;
        }

        .popular_img {
            width: 80%;
        }

        .client_title {
            font-size: 20px;
        }

        .review_title {
            text-align: center;
        }

        .testimonial {
            width: 50px;
            height: 50px;
        }

    }

    @media (min-width: 768px) {
        .promo {
            height: 250px;
            padding-top: 95px;
        }

        .promo_txt {
            font-size: 20px;
            line-height: 30px;
        }

        .fille {
            height: 250px;
        }

        .icon {
            width: 7%;
        }

        .grid-container {
            height: 800px;
            gap: 30px 30px;
            margin: 30px;
        }

        .square_txt {
            margin-top: 100%;
            font-size: 20px;
        }

        .popular_img {
            width: 100%;
        }

        .popular_title {
            font-size: 16px;
        }

        .popular_price {
            font-size: 16px;
        }

        .client_title {
            font-size: 24px;
        }

        .review_post {
            width: 50%;
        }

        .testimonial {
            width: 50px;
            height: 50px;
        }

    }

    @media (min-width: 992px) {
        .promo {
            height: 350px;
            padding-top: 160px;
        }

        .promo_txt {
            font-size: 20px;
        }

        .fille {
            height: 350px;
        }

        .icon {
            width: 6%;
            margin: -4px 10px;
        }

        .grid-container {
            height: 900px;
            gap: 30px 30px;
            margin: 50px;
        }

        .square_txt {
            margin-top: 110%;
            font-size: 20px;
        }

        .popular_title {
            font-size: 18px;
        }

        .popular_price {
            font-size: 18px;
        }

        .client_title {
            font-size: 28px;
        }

        .review_post {
            width: 50%;
        }

        .testimonial {
            width: 50px;
            height: 50px;
        }

    }

    @media (min-width: 1200px) {
        .promo {
            height: 450px;
            padding-top: 200px;
        }

        .promo_txt {
            font-size: 24px;
        }

        .fille {
            height: 450px;
        }

        .icon {
            width: 5%;
            margin: -4px 10px;
        }

        .grid-container {
            gap: 30px 30px;
            margin: 50px 200px;
        }

        .square_txt {
            margin-top: 100%;
            font-size: 26px;
        }

        .popular_title {
            font-size: 18px;
        }

        .popular_price {
            font-size: 18px;
        }

        .voir_plus {
            margin-top: 5%;
            margin-bottom: 5%;
        }

        .voir_plus_button {
            font-size: 24px;
        }

    }

    @media (min-width: 1600px) {
        .promo {
            height: 650px;
            padding-top: 350px;
        }

        .promo_txt {
            font-size: 36px;
        }

        .fille {
            height: 650px;
        }

        .icon {
            width: 5%;
            margin: -4px 10px;
        }

        .grid-container {
            height: 1150px;
            gap: 30px 30px;
            margin: 50px 300px;
        }

        .square_txt {
            margin-top: 100%;
            font-size: 26px;
        }

        .voir_plus {
            margin-top: 5%;
            margin-bottom: 5%;
        }

        .voir_plus_button {
            font-size: 28px;
        }

        .popular_title {
            font-size: 18px;
        }

        .popular_price {
            font-size: 18px;
        }

        .review_post {
            width: 40%;
            margin: 30px;
        }
    }
</style>
