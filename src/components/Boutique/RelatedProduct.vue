<template>
    <div>
        <div class="related_product">
            <div v-for="related in relateds" :key="related.id" class="d-flex flex-column search">
                <div class="media-content d-flex flex-column">
                    <div class="related_img" v-bind:style="{ backgroundImage: 'url(' + related.images[0].src + ')' }"
                         @click="$emit('get-id', related.id)">
                    </div>
                    <h3 class="related_title">{{related.name}}</h3>
                    <span class="related_price">{{related.price}} €</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "RelatedProduct",
        props: ['relateds'],
    }
</script>

<style scoped>

    .related_product {
        margin: 10px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: auto;
        grid-column-gap: 10px;
    }

    .related_img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        width: 100%;
        height: 100px;
        background-color: #FAFAFA;
    }

    .related_img img {
        width: 100%;
    }

    .related_title {
        margin-top: 10px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 14px;
        text-align: left;
    }

    .related_price {
        font-family: 'Spartan';
        font-size: 14px;
        text-align: left;
    }

    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {
        .related_product {
            margin: 10px 40px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-auto-rows: auto;
            grid-column-gap: 10px;
        }
    }

    @media (min-width: 992px) {
        .related_product {
            margin: 10px 40px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-auto-rows: auto;
            grid-column-gap: 20px;
        }

        .related_img {
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            width: 100%;
            height: 150px;
            background-color: #FAFAFA;
        }
    }

    @media (min-width: 1200px) {
        .related_product {
            margin: 10px 40px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-auto-rows: auto;
            grid-column-gap: 50px;
        }
    }

    @media (min-width: 1600px) {
        .related_img {
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            width: 100%;
            height: 250px;
            background-color: #FAFAFA;
        }
    }

</style>