<template>
    <div class="container d-flex flex-column p-3 justify-content-center align-items-center">
        <h1>Signin</h1>
        <form @submit="trySubmit" class="text-left">
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" v-model="form.email" type="text">
            </div>
            <div class="form-group">
                <label>Mot de passe</label>
                <input class="form-control" v-model="form.password" type="password">
            </div>
            <ul v-if="errors.length">
                <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
            <button class="btn btn-primary">connexion</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Sigin",
        data() {
            return {
                errors: [],
                form: {
                    email: "",
                    password: "",
                }
            };
        },
        methods: {
            trySubmit(e) {
                e.preventDefault();
                if (this.isValid()) {
                    this.$store.dispatch("user/trySignin", this.form)
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