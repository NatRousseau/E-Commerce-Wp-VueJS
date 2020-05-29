<template>
    <div>
        <div v-for="galerie in galerieImg" :key="galerie.id" class=" article_img_galerie d-flex flex-row">
            <div class="media-content d-flex flex-column">
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
        margin-left: 200px;
        margin-right: 50px;
    }

    .article_img_galerie_single {
        cursor: pointer;
        width: 100px;
        margin-bottom: 30px;
        border: 1px solid #707070;
    }

    article_img_galerie_single img {
        width: 100%;
    }

</style>