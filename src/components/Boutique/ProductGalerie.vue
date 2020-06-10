<template>
    <div>
        <div v-for="galerie in galerieImg" :key="galerie.id" class=" article_img_galerie d-flex">
            <div class="media-content d-flex">
                <img class="article_img_galerie_single" :src="galerie.src" @click="$emit('get-id', galerie.src)">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ProductGalerie",
        props: ['galerieImg'],
    }
</script>

<style scoped>

    .loader {
        margin-top: 320px;
        width: 480px;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 360px;
        z-index: 1000;
    }

    .article_img_galerie {
        flex-direction: row;
        margin-left: 10px;
        margin-right: 10px;
    }

    .article_img_galerie_single {
        cursor: pointer;
        width: 50px;
        margin-bottom: 10px;
        border: 1px solid #707070;
    }

    article_img_galerie_single img {
        width: 100%;
    }

    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        .article_img_galerie_single {
            width: 70px;
        }
    }

    @media (min-width: 1600px) {

    }

</style>