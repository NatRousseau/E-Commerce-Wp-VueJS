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
        margin: 50px;
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
        width: 300px;
        height: 340px;
        background-color: #FAFAFA;
    }

    .related_img img {
        width: 100%;
    }

    .related_title {
        margin-top: 10px;
        font-family: 'Spartan';
        font-weight: bold;
        font-size: 16px;
        text-align: left;
    }

    .related_price {
        font-family: 'Spartan';
        font-size: 18px;
        text-align: left;
    }

</style>