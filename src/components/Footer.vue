<template>
    <footer class="d-flex justify-content-around">
        <div class="d-flex flex-column">
            <h3>A PROPOS</h3>
            <div class="d-flex flex-column info">
                <router-link class="is-tab nav-item" to="/contact">Contact</router-link>
                <router-link class="is-tab nav-item" to="/condition-genelales">Conditions générales</router-link>
                <router-link class="is-tab nav-item" to="/condition-utilisation">Conditions d'utilisation</router-link>
                <router-link class="is-tab nav-item" to="/politique-et-cookies">Politique de confidentialité et cookies</router-link>
                <router-link class="is-tab nav-item" to="/mentions-legales">Mention légale</router-link>
                <router-link class="is-tab nav-item" to="/plan-du-site">Plan du site</router-link>
            </div>
        </div>

        <div class="d-flex flex-column">
            <h3>Newsletter</h3>
            <div class="d-flex flex-column info">
                <p>Abonnez-vous pour ne pas manquer nos promotions et conseils !</p>
                <div class="d-flex flex-row">
                    <input type="email" placeholder="Votre email">
                    <input class="post-button" type="submit">
                </div>

            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer {
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: #000000;
        color: white;
        text-align: left;
        font-family: Spartan;
    }

    a {
        font-weight: 100;
        color: white;
        /*margin-left: 10px;*/
    }

    h3 {
        font-weight: 600;
    }

    .info {
        border-left: 2px solid #ffffff;
        padding-left: 10px;
    }


</style>