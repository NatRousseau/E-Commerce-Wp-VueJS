<template>
    <div class="main d-flex flex-row">
        <div class="sidebar d-flex flex-column">
            <router-link class="dashboard" to="/compte">Tableau de bord</router-link>
            <router-link class="orders" to="/compte/commandes">Mes commandes</router-link>
            <router-link class="adress" to="/compte/adresse">Mon adresse</router-link>
            <div class="signout"  @click="signout">Déconnexion</div>
        </div>
        <div class="content d-flex flex-column" v-for=" order in orders" :key="order.id">
            <h1>Commande n°{{order.id}}</h1>
            <p>Statut : {{order.status}}</p>
            <div class="info d-flex flex-row">
                <div class="billing">
                    <h2>Adresse de facturation</h2>
                    <p>{{order.billing.first_name}}</p>
                    <p>{{order.billing.last_name}}</p>
                    <p>{{order.billing.email}}</p>
                    <p>{{order.billing.phone}}</p>
                    <br>
                    <p>{{order.billing.address_1}}</p>
                    <p>{{order.billing.address_2}}</p>
                    <p>{{order.billing.city}}</p>
                    <p>{{order.billing.postcode}}</p>
                    <p>{{order.billing.country}}</p>
                </div>
                <div class="shipping">
                    <h2>Adresse de livraison</h2>
                    <p>{{order.shipping.first_name}}</p>
                    <p>{{order.shipping.last_name}}</p>
                    <p>{{order.shipping.address_1}}</p>
                    <p>{{order.shipping.address_2}}</p>
                    <p>{{order.shipping.city}}</p>
                    <p>{{order.shipping.postcode}}</p>
                    <p>{{order.shipping.country}}</p>
                </div>
            </div>
            <div class="details" v-for=" product in products" :key="product.id">
                <p>{{product.name}}</p>
                <p>Quantité : {{product.quantity}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileOrders",
        data() {
            return {
                user: [],
                orders: [],
                products: []
            }
        },

        methods: {
            signout() {
                this.$store.commit("user/signOut")
                this.$router.push("/")
            }
        },

        mounted() {
            this.user = this.$store.getters["user/currentUserData"]
            this.$woocommerce.get("orders?customer=" + this.user[0].id)
                .then((response) => {
                    this.orders = response.data
                    this.orders.forEach(id => {
                        let listItems = id.line_items
                        listItems.forEach(product => {
                            this.products.push(product);
                        })
                    })
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        },
    }
</script>

<style scoped>

    .main{
        padding-top: 20px;
        padding-bottom: 30px;
    }

    .content{
        text-align: left;
        border: 1px solid #707070;
        width: 50%;
        padding: 20px;
        margin-bottom: 30px;
    }

    .details{
        border-top: 1px solid #707070;
    }

    .shipping{
        padding: 20px;
    }

    .shipping p{
        margin: 0;
    }

    .billing{
        padding: 20px;
    }

    .billing p{
        margin: 0;
    }

    .sidebar{
        margin: 20px 200px;
        width: 9%;
    }

    .dashboard{
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
        border-bottom: 1px solid #000000;
        border-top: 1px solid #000000;
    }

    .orders{
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
        border-bottom: 1px solid #000000;
    }

    .adress{
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
        border-bottom: 1px solid #000000;
    }

    .signout{
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
        border-bottom: 1px solid #000000;
    }

</style>