<template>
    <nav class="header">
        <div class="menu-button" @click="toggle">
            <img src="../assets/buger-menu.png">
        </div>
        <Drawer @close="toggle" align="left" :closeable="true">
            <div v-if="open">
                <div class="menu">
                    <div class="menu-column">
                        <router-link class="is-tab nav-item" to="/boutique">Boutique</router-link>
                        <hr>
                        <router-link class="is-tab nav-item" to="/compte">Compte</router-link>
                        <hr>
                        <router-link class="is-tab nav-item" to="/contact">Contact</router-link>
                        <hr>
                        <!--                        <router-link class="is-tab nav-item" to="/nos-atouts">Recherche</router-link>-->
                        <!--                        <hr>-->
                    </div>
                </div>
            </div>
        </Drawer>
        <div class="d-flex flex-row">
            <div class="div_logo">
                <router-link to="/" class="logo">
                    <img src="../assets/autruchesamere.png" id="vwp-logo"
                         alt="Logo autruche"/>
                </router-link>
            </div>
            <div class="icon d-flex flex-row">
                <span class="count_cart">{{cartNb}}</span>
                <router-link to="/panier" class="logo_bag">
                    <img src="../assets/business.png" id="shopping_bag"
                         alt="icone panier"/>
                </router-link>
                <div class="dropdown">
                    <div class="logo_user"></div>
                    <div class="dropdown-content" v-if="!jwtToken && isLoggedIn === false">
                        <router-link to="/inscription">Inscription</router-link>
                        <router-link to="/connexion">Connexion</router-link>
                    </div>
                    <div class="dropdown-content" v-if="isLoggedIn">
                        <router-link to="/compte">Mon Compte</router-link>
                        <div class="signout"  @click="signout">Déconnexion</div>
                    </div>
                </div>
                <form class="form-inline ">
                    <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                           aria-label="Search">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    import Drawer from "vue-simple-drawer"
    import {mapGetters} from "vuex"

    export default {
        name: 'Header',
        data() {
            return {
                open: false,
            }
        },
        components: {
            Drawer
        },
        props: {
            msg: String
        },
        methods: {
            toggle() {
                this.open = !this.open
            },
            signout() {
                this.$store.commit("user/signOut")
                this.$router.push("/")
            }
        },
        computed: {
            cartNb() {
                let list = this.$store.getters["shop/listToCart"]
                let singleTotal = [];
                list.forEach(total => {
                    singleTotal.push(total.meta_data[0].value)
                })
                return singleTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            },
            ...mapGetters("user", ["isLoggedIn", "jwtToken"])
        },
        watch: {
            $route() {
                this.open = false
            },
        }
    }
</script>

<style scoped>

    .header {
        background-color: #ffffff;
        position: fixed;
        top: 0;
        height: 10vh;
        z-index: 100;
        width: 100%;
    }

    .div_logo {
        text-align: center;
        line-height: 74px;
        width: 80%;
    }

    .icon {
        text-align: center;
        width: 20%;
        float: right;
        margin-top: 2%;
    }


    a {
        color: #ffffff !important;
        width: 15%;
    }

    a:hover {
        color: #b7b7b7 !important;
        text-decoration: none;
    }

    .menu-button {
        position: inherit;
        left: 20px;
        top: 25px;
        color: white;
    }

    .menu-button span {
        display: none;
    }

    .menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .menu-column {
        display: flex;
        flex-direction: column;
        width: 60%;
        margin-bottom: 30px;
        text-align: center;
    }

    .nav-item {
        padding-top: 3px;
        padding-bottom: 3px;
        width: 100%;
    }

    hr {
        width: 35px;
        border-bottom: 1px solid #ffffff;
        margin-top: 0;
    }

    #vwp-logo {
        width: 28%;
    }

    #shopping_bag {
        width: 60%;
    }

    #user {
        width: 60%;
    }

    .fa-search {
        color: #212121;
    }

    .menu-button img {
        width: 40%;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    .count_cart {
        position: relative;
        border: 1px solid #000000;
        border-radius: 100%;
        padding: 1px 5px;
        height: fit-content;
        font-size: 10px;
        top: 20px;
        left: 48px;
        background-color: #ffffff;
    }

    .logo_user {
        width: 15%;
        height: 70%;
        background-image: url("../assets/social.png");
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;
        display: inline-block;
        border: none;
        padding: 16px;
        background-color: #ffffff;
    }


    /*.logo_user {*/
    /*    background-color: #4CAF50;*/
    /*    color: white;*/
    /*    padding: 16px;*/
    /*    font-size: 16px;*/
    /*    border: none;*/
    /*}*/

    .dropdown {
        position: relative;
        display: inline-block;
        margin-right: 10px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #ffffff;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;

    }

    .dropdown-content a {
        color: black !important;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
    }

    .signout{
        color: black !important;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 160px;
        cursor: pointer;
    }

    .dropdown-content a:hover {
        background-color: #F6F6F6;
    }

    .signout:hover {
        background-color: #F6F6F6;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    /*.dropdown:hover .logo_user {background-color: #3e8e41;}*/

    @media (min-width: 576px) {
        #vwp-logo {
            width: 19%;
        }

        .div_logo {
            line-height: 85px;
        }

        /*.title-menu {*/
        /*    width: 57vw;*/
        /*}*/
    }

    @media (min-width: 768px) {
        .div_logo {
            line-height: 85px;
        }

        #vwp-logo {
            width: 15%;
        }

        /*.menu-button {*/
        /*    top: 28px;*/
        /*}*/
        /*.menu-column {*/
        /*    margin-top: 30px;*/
        /*    width: 40%;*/
        /*}*/
        /*.title-menu {*/
        /*    width: 38vw;*/
        /*}*/
    }

    @media (min-width: 992px) {
        .menu-button {
            top: 15px;
        }

        .menu-button span {
            display: block;
            width: 80px;
            font-size: 12px;
        }

        /*.menu-column {*/
        /*    width: 20%;*/
        /*}*/
        /*.title-menu {*/
        /*    width: 14vw;*/
        /*    margin-left: 3vw;*/
        /*}*/
        #vwp-logo {
            width: 13%;
        }
    }

    @media (min-width: 1200px) {
        .menu-button {
            top: 10px;
        }

        .menu-button span {
            font-size: 1rem;
        }

        /*.title-menu {*/
        /*    width: 14vw;*/
        /*    margin-left: 3vw;*/
        /*}*/
        #vwp-logo {
            width: 10%;
        }
    }

    @media (min-width: 1600px) {
        .menu-button {
            top: 30px;
        }

        .menu-button span {
            font-size: 1rem;
        }

        #vwp-logo {
            width: 6%;
            margin-left: 26%;
        }
    }

</style>