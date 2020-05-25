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

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
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

    .rightleft{
        background-color: white !important;
    }

    .leftright{
        background-color: white !important;
    }

    .wp-block-group {
        width: 45%;
    }

    .gauche {
        width: 100%;
        background-color: white;
        padding: 80px;
    }

    .droite {
        background-color: #F6F6F6;
        padding: 80px;
        margin-bottom: 40px;
        width: 100%;
    }

    .missions {
        font-size: 18px;
        font-weight: 900;
        color: #4d4e4f;
        text-transform: uppercase;
        margin-top: 30px;
        margin-bottom: 20px;
        text-align: left;
    }

    .qualites {
        font-size: 18px;
        font-weight: 900;
        color: #4d4e4f;
        text-transform: uppercase;
        margin-top: 30px;
        margin-bottom: 20px;
        text-align: left;
    }

    .prise_post {
        font-size: 18px;
        font-weight: 900;
        color: #4d4e4f;
        text-transform: uppercase;
        margin-top: 30px;
        margin-bottom: 20px;
        text-align: center;
    }

    .wp-block-image {
        width: 100%;
        display: flex;
        float: left;
    }

    .wp-block-image img {
        width: 100%;
    }

    ul {
        text-decoration: none;
        padding-left: 0px;
    }

    li {
        background: url("http://localhost/Api-DL/wp-content/uploads/2020/03/arrow.png") no-repeat left center;
        background-size: 10px;
        padding-left: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid #ccbfa9;
        list-style: none;
    }

    .images_job {
        width: 100%;
        position: relative;
    }

    @media (min-width: 576px) {
        #app {
            margin-top: 8%;
        }

        li {
            background-size: 12px;
        }
    }

    @media (min-width: 768px) {
        #app {
            margin-top: 7%;
        }

        li {
            background-size: 16px;
        }

        h2 {
            font-size: 16px;
        }

        .gauche {
            float: left;
            width: 50%;
        }

        .droite {
            margin-left: 50%;
            width: 50%;
        }

        .wp-block-image {
            width: 50%;
        }

        .page1 {
            width: 100%;
        }

        .page2 {
            width: 100%;
        }
    }

    @media (min-width: 992px) {
        #app {
            margin-top: 6%;
        }

        li {
            background-size: 18px;
        }

        .gauche {
            float: left;
            width: 35%;
            margin-left: 15%;
        }

        .droite {
            margin-left: 50%;
            width: 35%;
            margin-right: 15%;
        }

        .wp-block-image {
            width: 50%;
        }

        .page1 {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
        }

        .page2 {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
        }
    }

    @media (min-width: 1200px) {
        #app {
            margin-top: 5%;
        }

        .page1 {
            width: 60%;
            margin-left: 20%;
            margin-right: 20%;
        }

        .page2 {
            width: 60%;
            margin-left: 20%;
            margin-right: 20%;
        }
    }

    @media (min-width: 1600px) {
        #app {
            margin-top: 5%;
        }

        .page1 {
            width: 40%;
            margin-left: 30%;
            margin-right: 30%;
        }

        .page2 {
            width: 40%;
            margin-left: 30%;
            margin-right: 30%;
        }
    }
</style>
