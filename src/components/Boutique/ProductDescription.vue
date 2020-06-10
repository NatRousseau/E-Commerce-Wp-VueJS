<template>
    <div class="info_article d-flex flex-column">
        <div class="article_header d-flex flex-column">
            <h3 class="article_title">{{article.name}},</h3>
            <div class="article_composition d-flex flex-row">
                <h3 v-for="materialOption in materialOptions" :key="materialOption.id"
                    class="article_material">{{materialOption}}, </h3>
                <h3 v-for="stoneOption in stoneOptions" :key="stoneOption.id" class="article_material">
                    {{stoneOption}}, </h3>
            </div>
        </div>
        <span class="article_price" v-if="article.sale_price === ''">{{article.regular_price}} €</span>
        <span class="article_price" v-else>
            <span class="regular_price">{{article.regular_price}} € </span>{{article.sale_price}} €
        </span>
        <div class="quantity">
            <button class="lessButton" @click="article.meta_data[0].value -= 1">-</button>
            <span class="count">{{article.meta_data[0].value}}</span>
            <button class="moreButton" @click="article.meta_data[0].value += 1">+</button>
        </div>
        <button class="add_cart" @click="sentArticleToCart">AJOUTER AU PANIER</button>
        <div class="info_plus d-flex flex-column">
            <p id="dispo">Disponible en ligne</p>
            <p>Retours gratuits</p>
            <p>Jusqu'à 60 jours pour renvoyer le produit</p>
            <p>Livraison standard gratuite sur Swarovski.com</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ProductDescription",
        props: ['article', 'materialOptions', 'stoneOptions'],
        data() {
            return {
                addCart: '',
            }
        },
        methods: {
            sentArticleToCart() {
                this.addCart = this.article
                this.$store.commit('shop/addToCartList', this.addCart)
                this.$fire({
                    title: "Succès",
                    text: "Le produit a bien été ajouté au panier !",
                    type: "success",
                    timer: 3000
                }).then(r => {
                    console.log(r.value);
                });
            }
        }
    }
</script>

<style scoped>
    .info_article {
        margin: 150px 20px;
        width: 90%;
        height: 400px;
        background-color: #F6F6F6;
        text-align: left;
    }

    .article_title {
        margin-top: 10px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 16px;
        width: 100%;
    }

    .article_material {
        margin-top: 10px;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 16px;
    }

    .article_stone {
        margin-top:10px;
        margin-left: 5px;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 16px;
    }

    .regular_price {
        text-decoration: line-through;
        color: #707070;
        margin-right: 10px;
    }

    .article_price {
        font-family: 'Spartan';
        font-size: 16px;
        text-align: left;
    }

    .add_cart {
        margin-top: 10%;
        margin-bottom: 10%;
        font-family: 'Spartan';
        font-weight: 400;
        font-size: 12px;
        color: white;
        background-color: #000000;
        border: none;
        padding: 10px 10px;
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

    .quantity {
        width: fit-content;
        height: 30px;
        background-color: #F6F6F6;
        border: 1px solid #707070;
        margin: 10px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 16px;
    }

    .lessButton {
        border: none;
        height: 24px;
        width: 25px;
        background-color: #F6F6F6;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 16px;
    }

    .count {
        height: 34px;
        margin: 0 15px;
    }

    .moreButton {
        border: none;
        height: 24px;
        width: 25px;
        background-color: #F6F6F6;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 16px;
    }

    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {
        .info_article {
            margin: 100px 40px;
        }
        .add_cart {
            margin-top: 5%;
            margin-bottom: 5%;
            font-family: 'Spartan';
            font-weight: 400;
            font-size: 12px;
            color: white;
            background-color: #000000;
            border: none;
            padding: 10px 10px;
        }
    }

    @media (min-width: 992px) {
        .info_article {
            margin-right: 50px;
            margin-left: 0px;
            margin-top: 0;
            width: 800px;
            height: 400px;
            background-color: #F6F6F6;
            text-align: left;
        }
    }

    @media (min-width: 1200px) {

    }

    @media (min-width: 1600px) {

    }

</style>