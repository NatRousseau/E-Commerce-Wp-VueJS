<template>
    <footer class="d-flex">
        <div class="d-flex flex-column a_propos">
            <h3>A PROPOS</h3>
            <div class="d-flex flex-column info">
                <router-link class="is-tab nav-item" to="/contact">Contact</router-link>
                <router-link class="is-tab nav-item" to="/condition-genelales">Conditions générales</router-link>
                <router-link class="is-tab nav-item" to="/condition-utilisation">Conditions d'utilisation</router-link>
                <router-link class="is-tab nav-item" to="/politique-et-cookies">Politique de confidentialité et
                    cookies
                </router-link>
                <router-link class="is-tab nav-item" to="/mentions-legales">Mention légale</router-link>
                <router-link class="is-tab nav-item" to="/plan-du-site">Plan du site</router-link>
            </div>
        </div>

        <div class="d-flex flex-column newsletter">
            <h3>Newsletter</h3>
            <div class="d-flex flex-column info">
                <p>Abonnez-vous pour ne pas manquer nos promotions et conseils !</p>
                <div class="d-flex flex-row">
                    <input type="email" placeholder="Votre email">
                    <input class="post-button" type="submit">
                </div>
                <p>Nos réseaux sociaux :</p>
                <div class="d-flex flex-row">
                    <a class="social_logo" href="https://www.facebook.com/swarovski.france/" target="_blank"><img
                            src="../assets/facebook.png" alt="facebook logo"></a>
                    <a class="social_logo" href="https://www.instagram.com/swarovski/?hl=fr" target="_blank"><img
                            src="../assets/instagram.png" alt="instagram logo"></a>
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
        padding: 40px 20px;
        background-color: #000000;
        color: white;
        text-align: left;
        font-family: Spartan;
        flex-wrap: wrap;
        margin-bottom: 0;
    }

    a {
        font-weight: 100;
        color: white;
        /*margin-left: 10px;*/
    }

    h3 {
        font-weight: 600;
    }

    .a_propos{
        margin-bottom: 20px;
    }

    .info {
        border-left: 2px solid #ffffff;
        padding-left: 10px;
    }

    .social_logo {
        width: 10%;
    }

    .social_logo img {
        width: 50%;
    }

    @media (min-width: 992px) {
        footer{
            flex-wrap: nowrap;
            justify-content: space-around;
        }

        .newsletter{
            width: 50%;
        }

    }



</style>