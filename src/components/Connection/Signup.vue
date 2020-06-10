<template>
    <div class="container d-flex flex-column p-3 justify-content-center align-items-center">
        <h1>Signup</h1>
        <form @submit="trySubmit" class="text-left">
            <div class="form-group">
                <label>Votre Pseudo</label>
                <input class="form-control" v-model="form.user_login" type="text">
            </div>
            <div class="form-group">
                <label>Votre email</label>
                <input class="form-control" v-model="form.email" type="text">
            </div>
            <div class="form-group">
                <label>Votre prenom</label>
                <input class="form-control" v-model="form.first_name" type="text">
            </div>
            <div class="form-group">
                <label>Votre nom</label>
                <input class="form-control" v-model="form.last_name" type="text">
            </div>
            <div class="form-group">
                <label>Mot de passe</label>
                <input class="form-control" v-model="form.password" type="password">
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