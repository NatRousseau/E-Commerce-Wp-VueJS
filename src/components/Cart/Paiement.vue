<template>
    <div class="paiement d-flex flex-row">
        <div class="info d-flex flex-column" v-for="user in users" :key="user.id">
            <div class="billing_adress d-flex flex-column">
                <h2>Adresse de facturation</h2>
                <input type="text" v-model="user.billing.first_name">
                <input type="text" v-model="user.billing.last_name">
                <input type="text" v-model="user.billing.email">
                <input type="text" v-model="user.billing.phone">
                <input type="text" v-model="user.billing.address_1">
                <input type="text" v-model="user.billing.address_2">
                <input type="text" v-model="user.billing.city">
                <input type="text" v-model="user.billing.postcode">
                <input type="text" v-model="user.billing.country">
            </div>
            <div class="shipping_adress d-flex flex-column">
                <h2>Adresse de livraison</h2>
                <input type="text" v-model="user.shipping.first_name">
                <input type="text" v-model="user.shipping.last_name">
                <input type="text" v-model="user.shipping.address_1">
                <input type="text" v-model="user.shipping.address_2">
                <input type="text" v-model="user.shipping.city">
                <input type="text" v-model="user.shipping.postcode">
                <input type="text" v-model="user.shipping.country">
            </div>
        </div>
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
        </div>
        <div class='credit-card-inputs' :class='{ complete }'>
            <card-number class='stripe-element card-number'
                         ref='cardNumber'
                         :stripe='stripe'
                         :options='options'
                         @change='number = $event.complete'
            />
            <card-expiry class='stripe-element card-expiry'
                         ref='cardExpiry'
                         :stripe='stripe'
                         :options='options'
                         @change='expiry = $event.complete'
            />
            <card-cvc class='stripe-element card-cvc'
                      ref='cardCvc'
                      :stripe='stripe'
                      :options='options'
                      @change='cvc = $event.complete'
            />
        </div>
    </div>
</template>

<script>
    import { CardNumber, CardExpiry, CardCvc } from 'vue-stripe-elements'

    export default {
        name: "Paiement",
        props: [ 'stripe', 'options' ],
        data() {
            return {
                users: {},
                cart: [],
                cartArticles: [],
                loader: false,
                complete: false,
                number: false,
                expiry: false,
                cvc: false
            }
        },

        components: { CardNumber, CardExpiry, CardCvc },

        methods: {
            update () {
                this.complete = this.number && this.expiry && this.cvc

                // field completed, find field to focus next
                if (this.number) {
                    if (!this.expiry) {
                        this.$refs.cardExpiry.focus()
                    } else if (!this.cvc) {
                        this.$refs.cardCvc.focus()
                    }
                } else if (this.expiry) {
                    if (!this.cvc) {
                        this.$refs.cardCvc.focus()
                    } else if (!this.number) {
                        this.$refs.cardNumber.focus()
                    }
                }
                // no focus magic for the CVC field as it gets complete with three
                // numbers, but can also have four
            },
            calculSingleTotal(cartArticle) {
                // let stock = this.cartArticles
                cartArticle.forEach(price => {
                    if (price.sale_price === '') {
                        let quantity = price.meta_data[0].value
                        let singleprice = price.regular_price * quantity
                        // this.singleTotal.push(singleprice);
                        // this.$store.commit('addToCalculList', this.singleTotal)
                        price.meta_data[2].value = singleprice
                        // console.log(quantity);
                        // console.log(singleprice);
                    } else {
                        let quantity = price.meta_data[0].value
                        let singleprice = price.sale_price * quantity
                        // this.singleTotal.push(singleprice);
                        // this.$store.commit('addToCalculList', this.singleTotal)
                        price.meta_data[2].value = singleprice
                        // console.log(quantity);
                        // console.log(singleprice);
                    }
                    // console.log(this.singleTotal);
                })
            }
        },

        mounted() {
            this.users = this.$store.getters["user/currentUserData"]
            this.loader = true;
            this.cartArticles = this.$store.getters["shop/listToCart"]
            this.calculSingleTotal(this.cartArticles);
            this.loader = false;

        },
        computed: {
            totalProduct() {
                let singleTotal = [];
                this.cartArticles.forEach(total => {
                    singleTotal.push(total.meta_data[2].value)
                })
                console.log(singleTotal);

                return singleTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

            }
        },

        watch: {
            number () { this.update() },
            expiry () { this.update() },
            cvc () { this.update() }
        }

    }
</script>

<style scoped>



    .paiement {
        padding-top: 20px;
        padding-bottom: 30px;
    }

    .recap {
        background-color: #F6F6F6;
        margin-top: 150px;
        padding: 30px;
        height: max-content;
    }

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

    .info {
        margin-left: 20%;
        width: 40%;
    }

    .billing_adress {

    }

    input {
        background-color: #F6F6F6;
        margin: 10px;
        border: 1px solid #707070;
    }

</style>