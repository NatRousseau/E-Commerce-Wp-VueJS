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
        <button class="add_cart">AJOUTER AU PANIER</button>
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
    }
</script>

<style scoped>
    .info_article {
        margin-right: 50px;
        margin-left: 50px;
        width: 500px;
        height: 623px;
        background-color: #F6F6F6;
        text-align: left;
    }

    .article_title {
        margin-top: 20px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 20px;
        width: 100%;
    }

    .article_material {
        margin-top: 20px;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 20px;
    }

    .article_stone {
        margin-top: 20px;
        margin-left: 10px;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 20px;
    }

    .regular_price {
        text-decoration: line-through;
        color: #707070;
        margin-right: 10px;
    }

    .article_price {
        font-family: 'Spartan';
        font-size: 20px;
        text-align: left;
    }

    .add_cart {
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

    .info_plus {
        text-align: center;
    }

    p {
        margin: 0;
    }

    #dispo {
        font-weight: 700;
    }

</style>