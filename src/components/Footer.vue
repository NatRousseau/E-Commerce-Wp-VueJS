<template>
    <footer class="d-flex justify-content-around">

        <div class="d-flex flex-column">
            <h3>MENTIONS LÉGALES</h3>
            <div class="d-flex flex-column info">
                <router-link class="is-tab nav-item" to="/nous-trouver">Conditions générales</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Conditions d'utilisation</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Mention légale</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Plan du site</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Lutte contre l'esclavage moderne</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Indicateur Égalité F/H</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Gestion des cookies</router-link>
            </div>
        </div>

        <div class="d-flex flex-column">
            <h3>A PROPOS</h3>
            <div class="d-flex flex-column info">
                <router-link class="is-tab nav-item" to="/nous-trouver">Newsletter</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">FAQ</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Les autres sites Swarovsk!</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Contactez-nous</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">COVID-19</router-link>
            </div>
        </div>

        <div class="d-flex flex-column">
            <h3>ENTREPRISE</h3>
            <div class="d-flex flex-column info">
                <router-link class="is-tab nav-item" to="/nous-trouver">Carrières</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Become a Partner</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Affiliation</router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Pierres fines & précieuses pour professionnels
                </router-link>
                <router-link class="is-tab nav-item" to="/nous-trouver">Cristaux pour professionnels</router-link>
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
        margin-left: 10px;
    }

    h3 {
        font-weight: 600;
    }

    .info {
        border-left: 2px solid #ffffff;
    }


</style>