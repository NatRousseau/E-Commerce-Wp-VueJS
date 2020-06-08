<template>
    <div class="main d-flex flex-row">
        <div class="sidebar d-flex flex-column">
            <router-link class="dashboard" to="/compte">Tableau de bord</router-link>
            <router-link class="orders" to="/compte/commandes">Mes commandes</router-link>
            <router-link class="adress" to="/compte/adresse">Mon adresse</router-link>
            <div class="signout" @click="signout">Déconnexion</div>
        </div>
        <div class="content d-flex flex-column">
            <h1>Bonjour {{this.user.user_display_name}}</h1>
            <p>A partir du tableau de bord de ton compte, tu peux visualiser tes commandes récentes, gérer tes adresses
                de livraison et de facturation.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                user: {},
                userData: [],
            }
        },

        methods: {
            signout() {
                this.$store.commit("user/signOut")
                this.$router.push("/")
            }
        },

        mounted() {
            this.user = this.$store.getters["user/currentUser"]
            // console.log(this.user);
            this.$woocommerce.get("customers?email=" + this.user.user_email)
                .then((response) => {
                    this.userData = response.data
                    console.log(this.userData);
                    this.$store.commit('user/addData', this.userData)
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