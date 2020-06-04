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

        <router-link class="is-tab nav-item" to="/validation"><button class="procced">PROCÉDER À L'ACHAT</button></router-link>
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
        width: 510px;
        padding-bottom: 10px;
        border-bottom: 1px solid #707070;
        margin-bottom: 10px;
    }

    .recap_title {
        width: max-content;
        text-align: left;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 18px;
    }

    .recap_count {
        text-align: left;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 16px;
    }

    .recap_price {
        margin-left: 100px;
        /*text-align: right;*/
        /*justify-content: flex-end;*/
    }

    .article_price {
        width: max-content;
        font-family: 'Spartan';
        font-weight: 500;
        font-size: 16px;
        text-align: right;
    }

    .shipping {
        width: 510px;
        padding-bottom: 10px;
        border-bottom: 1px solid #707070;
        margin-bottom: 10px;
    }

    .shipping_info {
        width: 280px;
        text-align: left;
        margin-left: 40px;
    }

    .shipping_price {
        margin-left: 100px;
    }

    /*.procced{*/
    /*    margin-top: 10%;*/
    /*    margin-bottom: 10%;*/
    /*    font-family: 'Spartan';*/
    /*    font-weight: 400;*/
    /*    font-size: 20px;*/
    /*    color: white;*/
    /*    background-color: #000000;*/
    /*    border: none;*/
    /*    padding: 23px 135px;*/
    /*}*/


</style>