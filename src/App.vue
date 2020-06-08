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
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 10%;
        width: 100%;
    }

    .vue-simple-drawer {
        backdrop-filter: blur(10px);
        background: #1C1C1C !important;
        width: 15%;
        height: 100%;
    }

    .credit-card-inputs.complete {
        border: 2px solid green;
    }

    .btn-default {
        background-color: black !important;
    }

    @media (min-width: 576px) {
        #app {
            margin-top: 8%;
        }

    }

    @media (min-width: 768px) {
        #app {
            margin-top: 7%;
        }

    }

    @media (min-width: 992px) {
        #app {
            margin-top: 6%;
        }

    }

    @media (min-width: 1200px) {
        #app {
            margin-top: 5%;
        }

    }

    @media (min-width: 1600px) {
        #app {
            margin-top: 5%;
        }

    }
</style>
