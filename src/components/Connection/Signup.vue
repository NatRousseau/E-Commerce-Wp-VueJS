<template>
    <div class="container d-flex flex-column p-3 justify-content-center align-items-center">
        <h1>Signup</h1>
        <form @submit="trySubmit" class="text-left">
            <div class="form-group">
                <label>User_login</label>
                <input class="form-control" v-model="form.user_login" type="text">
            </div>
            <div class="form-group">
                <label>email</label>
                <input class="form-control" v-model="form.email" type="text">
            </div>
            <div class="form-group">
                <label>firstname</label>
                <input class="form-control" v-model="form.first_name" type="text">
            </div>
            <div class="form-group">
                <label>lastname</label>
                <input class="form-control" v-model="form.last_name" type="text">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input class="form-control" v-model="form.password" type="password">
            </div>
            <div>
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
                <h2>Facturation</h2>
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
            <ul v-if="errors.length">
                <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
            <button class="btn btn-primary">signup</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return {
                errors: [],
                form: {
                    user_login: "",
                    email: "",
                    password: "",
                    first_name: "",
                    last_name: "",
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
            };
        },
        methods: {
            trySubmit(e) {
                e.preventDefault();
                if (this.isValid()) {
                    this.$store.dispatch("user/trySignup", this.form)
                }
            },
            isValid() {
                return true;
            }
        }
    }
</script>

<style scoped>

</style>