<template>
    <div id="app">
        <Header></Header>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import {mapGetters} from 'vuex'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },
        computed: {
            ...mapGetters("user", ["jwtToken"])
        },
    }
</script>

<style>
    #app {
        font-family: 'Spartan';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 23%;
        width: 100%;
    }

    .vue-simple-drawer {
        backdrop-filter: blur(10px);
        background: #1C1C1C !important;
        width: 50%;
        height: 100%;
    }

    .VueCarousel-dot-container {
        margin: 0 !important;
    }

    .vue-simple-drawer .close-btn .leftright, .vue-simple-drawer .close-btn .rightleft {
        background-color: #F6F6F6 !important;
    }

    .VueCarousel-pagination[data-v-438fd353] {
        background-color: #000000;
    }

    .VueCarousel-dot {
        background-color: #b7b7b7 !important;
    }

    .VueCarousel-dot--active {
        background-color: #ffffff !important;
        /*width: 15px !important;*/
        /*height: 15px !important;*/
    }

    @media (min-width: 576px) {
        #app {
            margin-top: 19%;
        }

    }

    @media (min-width: 768px) {
        #app {
            margin-top: 14%;
        }

    }

    @media (min-width: 992px) {
        #app {
            margin-top: 9%;
        }

        .vue-simple-drawer {
            width: 30%;
        }

    }

    @media (min-width: 1200px) {
        #app {
            margin-top: 7%;
        }

    }

    @media (min-width: 1600px) {
        #app {
            margin-top: 5%;
        }

    }
</style>
