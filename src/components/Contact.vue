<template>
    <div class="recrutement d-flex flex-row">
        <div class="recrutement-img">
            <img src="../assets/ALWAYSON-INSv4-CUST-LD.jpg">
        </div>
        <form class=" contact-form d-flex" id="form" @submit.prevent="submit">
            <label>Votre Nom</label>
            <input type="text" id="lastname" name="lastname" placeholder="">
            <label>Votre Prenom</label>
            <input type="text" id="firstname" name="firstname" placeholder="">
            <label>Votre Email</label>
            <input type="text" id="email" name="email" placeholder="">
            <label>Sujet</label>
            <input type="text" id="subject" name="subject" placeholder="">
            <label>Message</label>
            <textarea type="text" id="message" name="message" placeholder="" rows="5" cols="33"></textarea>
            <input class="post-button" type="submit">
        </form>
    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        name: "Contact",
        methods: {
            submit: function () {
                var form = document.getElementById('form');
                var formData = new FormData(form);
                axios.post('https://api.template.nathan-rousseau.fr/wp-json/contact-form-7/v1/contact-forms/897/feedback',
                    formData,)
                    .then(response => {
                        this.$fire({
                            title: "Contact",
                            text: "Votre message à bien été envoyée",
                            type: "success",
                            timer: 3000
                        })
                        console.log(response.data)
                    }).catch(error => {
                    this.$fire({
                        title: "Contact",
                        text: "Votre message n'a pas été envoyée, veuillez réesayer ultérieurement",
                        type: "warning",
                        timer: 3000
                    })
                    console.log(error.data)
                })
            }
        }
    }
</script>

<style scoped>
    .main {
        width: 100%;
        margin-top: 15%;
    }
    .head {
        width: 100%;
        height: 72px;
        background-image: url("http://api.duhamel-logistique.fr/wp-content/uploads/2020/03/22-scaled.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: 43%;
    }
    .title-container {
        vertical-align: middle;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .title {
        font-size: 16px;
    }
    .title::before, .title::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 1px;
        margin: 0 10px;
        background-color: #4d4e4f;
    }
    h2 {
        font-size: 12px;
    }
    .recrutement-img {
        width: 40%;
        display: none;
    }
    .contact-form {
        flex-direction: column;
        margin: 20px auto;
        width: 60%;
        text-align: left;
    }
    .post-button {
        font-family: 'Playfair display', 'serif';
        color: #fff;
        font-size: 24px;
        text-transform: none;
        margin-top: 10px;
        padding: 15px 20px;
        border: none;
        border-radius: 6px;
        background-color: #d5762c;
    }
    @media (min-width: 576px) {
        .main {
            width: 100%;
            margin-top: 11%;
        }
        .head {
            height: 92px;
        }
        .title-container {
            margin-top: 30px;
            margin-bottom: 30px;
        }
        .title {
            font-size: 18px;
        }
    }
    @media (min-width: 768px) {
        .main {
            width: 100%;
            margin-top: 9%;
        }
        .head {
            height: 112px;
        }
        .title-container {
            margin-top: 40px;
            margin-bottom: 40px;
        }
        .title {
            font-size: 20px;
        }
        .recrutement{
            margin: 20px;
        }
        .recrutement-img {
            width: 30%;
            display: flex;
            margin-left: 50px;
        }
        .recrutement-img img {
            width: 100%;
        }
        .contact-form {
            margin-left: 30px;
            width: 45%;
        }
    }
    @media (min-width: 992px) {
        .main {
            width: 100%;
            margin-top: 7%;
        }
        .head {
            height: 132px;
        }
        .title-container {
            margin-top: 50px;
            margin-bottom: 50px;
        }
        .title {
            font-size: 24px;
        }
        .recrutement{
            margin: 20px;
        }
        .recrutement-img {
            width: 30%;
            display: flex;
            margin-left: 50px;
        }
        .recrutement-img img {
            width: 100%;
        }
        .contact-form {
            margin-left: 30px;
            width: 45%;
        }
    }
    @media (min-width: 1200px) {
        .main {
            width: 100%;
            margin-top: -1%;
        }
        .head {
            height: 215px;
        }
        .title {
            font-size: 28px;
        }
        .recrutement{
            margin: 50px;
        }
        .recrutement-img {
            width: 40%;
            display: flex;
            margin-left: 50px;
        }
        .recrutement-img img {
            width: 100%;
        }
        .contact-form {
            margin-left: 30px;
            width: 45%;
        }
    }
    @media (min-width: 1600px) {
        .main {
            width: 100%;
            margin-top: -1%;
        }
        .head {
            height: 252px;
        }
        .title {
            font-size: 34px;
        }
        .recrutement{
            margin: 20px;
        }
        .recrutement-img {
            width: 36%;
            display: flex;
            margin-left: 225px;
        }
        .recrutement-img img {
            width: 60%;
        }
        .contact-form {
            margin-left: 0px;
            width: 20%;
        }
    }

</style>