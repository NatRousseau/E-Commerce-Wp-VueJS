<template>
    <div class="recap">
        <div class="recap_list">
            <ul v-for="cartArticle in cartArticles" :key="cartArticle.id" class="d-flex flex-row recap_item">
                <li class="recap_info d-flex flex-column">
                    <h3 class="recap_title">{{cartArticle.name}}</h3>
                    <span class="recap_count">Quantité : {{cartArticle.meta_data[0].value}}</span>
                </li>
                <li class="recap_price d-flex flex-row">
                    <!--                    <span class="article_price"-->
                    <!--                          v-if="cartArticle.sale_price === ''">{{cartArticle.regular_price * cartArticle.meta_data[0].value}} €</span>-->
                    <span class="article_price">{{cartArticle.meta_data[2].value}} €</span>

                </li>
            </ul>
        </div>
        <div class="shipping d-flex flex-row">
            <span class="shipping_info">Livraison :</span>
            <span class="shipping_price">GRATUIT</span>
        </div>
        <div class="shipping">
            <span class="shipping_info">TOTAL : </span>
            <span class="shipping_info">{{totalProduct}} €</span>
        </div>

        <router-link class="is-tab nav-item" to="/validation">
            <button class="procced">PROCÉDER À L'ACHAT</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CartRecap",
        props: ['cartArticles'],

        computed: {
            totalProduct() {
                let singleTotal = [];
                this.cartArticles.forEach(total => {
                    singleTotal.push(total.meta_data[2].value)
                })
                console.log(singleTotal);

                return singleTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

            }
        }
    }
</script>

<style scoped>
    .recap_info {
        width: 280px;
    }

    .recap_list {
        width: 97%;
        padding-bottom: 10px;
        border-bottom: 1px solid #707070;
        margin-bottom: 10px;
    }

    .recap_item {
        padding-left: 0;
    }

    .recap_title {
        width: max-content;
        text-align: left;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 14px;
    }

    .recap_count {
        text-align: left;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 12px;
    }

    .recap_price {
        margin-left: 20px;
    }

    .article_price {
        width: max-content;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 14px;
        text-align: right;
    }

    .shipping {
        width: 95%;
        padding-bottom: 10px;
        border-bottom: 1px solid #707070;
        margin-bottom: 10px;
    }

    .shipping_info {
        width: 100px;
        text-align: left;
    }

    .shipping_price {
        margin-left: 100px;
    }

    .procced {
        font-family: 'Spartan';
        font-weight: 400;
        font-size: 16px;
        color: white;
        background-color: #000000;
        border: none;
        padding: 10px 50px;

    }

    @media (min-width: 576px) {
        .recap_item {
            width: 550px;
        }

        .recap_price {
            margin-left: 150px;
        }
    }

    @media (min-width: 768px) {
        .recap_item {
            width: 100%;
        }

        .recap_info {
            width: 480px;
        }
    }

    @media (min-width: 992px) {
        .recap_list {
            width: 300px;
        }

        .recap_title {
            /*font-size: 18px;*/
        }

        .recap_count {
            /*font-size: 18px;*/
        }

        .recap_price {
            margin-left: 20px;
        }

        .article_price {
            /*font-size: 16px;*/
        }

        .shipping {
            width: 300px;
        }

        .shipping_info {
            width: 280px;
            margin-left: 30px;
        }

        .procced {
            width: 300px;
        }
    }

    @media (min-width: 1200px) {
        .recap_list {
            width: 450px;
        }

        .shipping {
            width: 450px;
        }

        .procced {
            width: 450px;
        }
    }

    @media (min-width: 1600px) {

    }
</style>