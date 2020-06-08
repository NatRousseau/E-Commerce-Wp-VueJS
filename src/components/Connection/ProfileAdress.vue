<template>
    <div class="main d-flex flex-row">
        <div class="sidebar d-flex flex-column">
            <router-link class="dashboard" to="/compte">Tableau de bord</router-link>
            <router-link class="orders" to="/compte/commandes">Mes commandes</router-link>
            <router-link class="adress" to="/compte/adresse">Mon adresse</router-link>
            <div class="signout" @click="signout">Déconnexion</div>
        </div>
        <div class="content d-flex flex-column">
            <div class="info_general">
                <h1>Information général :</h1>
                <p>Pseudo : {{this.customer.username}}</p>
                <p>Nom : {{this.customer.last_name}}</p>
                <p>Prenom : {{this.customer.first_name}}</p>
                <p>Email : {{this.customer.email}}</p>
            </div>
            <div class="info d-flex flex-row">
                <div class="billing">
                    <h2>Adresse de facturation</h2>
                    <p>{{this.customer.billing.first_name}}</p>
                    <p>{{this.customer.billing.last_name}}</p>
                    <p>{{this.customer.billing.email}}</p>
                    <p>{{this.customer.billing.phone}}</p>
                    <br>
                    <p>{{this.customer.billing.address_1}}</p>
                    <p>{{this.customer.billing.address_2}}</p>
                    <p>{{this.customer.billing.city}}</p>
                    <p>{{this.customer.billing.postcode}}</p>
                    <p>{{this.customer.billing.country}}</p>
                </div>
                <div class="shipping">
                    <h2>Adresse de livraison</h2>
                    <p>{{this.customer.shipping.first_name}}</p>
                    <p>{{this.customer.shipping.last_name}}</p>
                    <p>{{this.customer.shipping.address_1}}</p>
                    <p>{{this.customer.shipping.address_2}}</p>
                    <p>{{this.customer.shipping.city}}</p>
                    <p>{{this.customer.shipping.postcode}}</p>
                    <p>{{this.customer.shipping.country}}</p>
                </div>
            </div>
        </div>
        <div>
            <mdb-btn @click.native="modal = true">Modifier les informations</mdb-btn>
            <mdb-modal :show="modal" @close="modal = false" scrollable>
                <mdb-modal-header>
                    <mdb-modal-title>Modifier mes informations</mdb-modal-title>
                </mdb-modal-header>
                <mdb-modal-body>
                    <div>
                        <h2>Général</h2>
                        <div class="form-group">
                            <label>first name</label>
                            <input class="form-control" v-model="form.first_name" type="text">
                        </div>
                        <div class="form-group">
                            <label>last name</label>
                            <input class="form-control" v-model="form.last_name" type="text">
                        </div>
                        <div class="form-group">
                            <label>pseudo</label>
                            <input class="form-control" v-model="form.username" type="text">
                        </div>
                        <div class="form-group">
                            <label>email</label>
                            <input class="form-control" v-model="form.email" type="text">
                        </div>
                        <h2>Facturation</h2>
                        <div class="form-group">
                            <label>first name</label>
                            <input class="form-control" v-model="form.billing.first_name" type="text">
                        </div>
                        <div class="form-group">
                            <label>last name</label>
                            <input class="form-control" v-model="form.billing.last_name" type="text">
                        </div>
                        <div class="form-group">
                            <label>company</label>
                            <input class="form-control" v-model="form.billing.company" type="text">
                        </div>
                        <div class="form-group">
                            <label>adress 1 </label>
                            <input class="form-control" v-model="form.billing.address_1" type="text">
                        </div>
                        <div class="form-group">
                            <label>adress 2</label>
                            <input class="form-control" v-model="form.billing.address_2" type="text">
                        </div>
                        <div class="form-group">
                            <label>city</label>
                            <input class="form-control" v-model="form.billing.city" type="text">
                        </div>
                        <div class="form-group">
                            <label>state</label>
                            <input class="form-control" v-model="form.billing.state" type="text">
                        </div>
                        <div class="form-group">
                            <label>postcode</label>
                            <input class="form-control" v-model="form.billing.postcode" type="number">
                        </div>
                        <div class="form-group">
                            <label>country</label>
                            <input class="form-control" v-model="form.billing.country" type="text">
                        </div>
                        <div class="form-group">
                            <label>email</label>
                            <input class="form-control" v-model="form.billing.email" type="email">
                        </div>
                        <div class="form-group">
                            <label>phone</label>
                            <input class="form-control" v-model="form.billing.phone" type="tel">
                        </div>
                    </div>
                    <div>
                        <h2>Livraison</h2>
                        <div class="form-group">
                            <label>first name</label>
                            <input class="form-control" v-model="form.shipping.first_name" type="text">
                        </div>
                        <div class="form-group">
                            <label>last name</label>
                            <input class="form-control" v-model="form.shipping.last_name" type="text">
                        </div>
                        <div class="form-group">
                            <label>company</label>
                            <input class="form-control" v-model="form.shipping.company" type="text">
                        </div>
                        <div class="form-group">
                            <label>adress 1 </label>
                            <input class="form-control" v-model="form.shipping.address_1" type="text">
                        </div>
                        <div class="form-group">
                            <label>adress 2</label>
                            <input class="form-control" v-model="form.shipping.address_2" type="text">
                        </div>
                        <div class="form-group">
                            <label>city</label>
                            <input class="form-control" v-model="form.shipping.city" type="text">
                        </div>
                        <div class="form-group">
                            <label>state</label>
                            <input class="form-control" v-model="form.shipping.state" type="text">
                        </div>
                        <div class="form-group">
                            <label>postcode</label>
                            <input class="form-control" v-model="form.shipping.postcode" type="number">
                        </div>
                        <div class="form-group">
                            <label>country</label>
                            <input class="form-control" v-model="form.shipping.country" type="text">
                        </div>
                    </div>
                </mdb-modal-body>
                <mdb-modal-footer>
                    <mdb-btn color="secondary" @click.native="modal = false">Close</mdb-btn>
                    <mdb-btn color="primary" @click="updateInfo">Save changes</mdb-btn>
                </mdb-modal-footer>
            </mdb-modal>
        </div>
    </div>
</template>

<script>
    import {mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn} from 'mdbvue';

    export default {
        name: "ProfileAdress",
        components: {
            mdbModal,
            mdbModalHeader,
            mdbModalTitle,
            mdbModalBody,
            mdbModalFooter,
            mdbBtn
        },
        data() {
            return {
                modal: false,
                user: {},
                customer: [],
                form: {
                    email: "",
                    fisrt_name: "",
                    last_name: "",
                    username: "",
                    billing: {
                        first_name: "",
                        last_name: "",
                        company: "",
                        address_1: "",
                        address_2: "",
                        city: "",
                        state: "",
                        postcode: "",
                        country: "",
                        email: "",
                        phone: ""
                    },
                    shipping: {
                        first_name: "",
                        last_name: "",
                        company: "",
                        address_1: "",
                        address_2: "",
                        city: "",
                        state: "",
                        postcode: "",
                        country: ""
                    }
                }
            }
        },
        methods: {
            signout() {
                this.$store.commit("user/signOut")
                this.$router.push("/")
            },

            updateInfo() {
                let payload = Object.keys(this.form.billing).reduce((acc, el) => {
                    if (this.form.billing[el] !== '') {
                        acc[el] = this.form.billing[el]
                    }
                    return acc
                }, {})
                let payloadShipping = Object.keys(this.form.shipping).reduce((acc, el) => {
                    if (this.form.shipping[el] !== '') {
                        acc[el] = this.form.shipping[el]
                    }
                    return acc
                }, {})
                this.$woocommerce.put("customers/" + this.user[0].id, {billing: payload, shipping: payloadShipping})
                    .then((response) => {
                        console.log(response.data);
                        this.customer = response.data
                        this.$store.commit('user/addData', response.data)
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
                this.modal = false
            }
        },
        mounted() {
            this.user = this.$store.getters["user/currentUserData"]
            this.$woocommerce.get("customers/" + this.user[0].id)
                .then((response) => {
                    this.customer = response.data
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        },
    }
</script>

<style scoped>

    .content {
        text-align: left;
        /*border: 1px solid #707070;*/
        width: 50%;
        padding: 20px;
        margin-bottom: 30px;
    }

    .shipping {
        padding: 20px;
    }

    .shipping p {
        margin: 0;
    }

    .billing {
        padding: 20px;
    }

    .billing p {
        margin: 0;
    }

    .sidebar {
        margin: 20px 200px;
        width: 9%;
    }

    .dashboard {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
        border-bottom: 1px solid #000000;
        border-top: 1px solid #000000;
    }

    .orders {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
        border-bottom: 1px solid #000000;
    }

    .adress {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
        border-bottom: 1px solid #000000;
    }

    .signout {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
        border-bottom: 1px solid #000000;
    }

</style>