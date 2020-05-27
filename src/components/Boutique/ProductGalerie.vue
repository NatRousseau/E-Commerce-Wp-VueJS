<template>
    <div>
        <div class="d-flex justify-content-center loader visibility-hidden" v-if="loader">
            <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-for="galerie in galeries" :key="galerie.id" class=" article_img_galerie d-flex flex-row">
            <div class="media-content d-flex flex-column">
                <img class="article_img_galerie_single" :src="galerie" @click="$emit('get-id', galerie)">
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        name: "ProductGalerie",
        data() {
            return {
                galeries: [],
                loader: false
            }
        },
        created: function () {
            this.loader = true;
            this.$woocommerce.get("products/" + this.$route.params.id)
                .then(response => {
                    for (let i in response.data.images) {
                        this.galeries.push(response.data.images[i].src)
                        this.loader = false;
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                    this.loader = true;
                });
        }
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
        width: 100px;
        margin-bottom: 30px;
        border: 1px solid #707070;
    }

    article_img_galerie_single img {
        width: 100%;
    }

</style>