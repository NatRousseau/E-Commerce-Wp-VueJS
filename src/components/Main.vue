<template>
    <div class="Client-post d-flex flex-row">
<!--        <div v-for="client in clients" :key="client.id" class="d-flex flex-row">-->
<!--            <div class="media-content d-flex flex-column">-->
<!--&lt;!&ndash;                <img class="client-img" :src="client.source_url">&ndash;&gt;-->
<!--            </div>-->
<!--        </div>-->
    </div>

</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                clients: []
            }
        },
        // created: function () {
        //     this.$http.get('wc/v3/products?categories=21').then(response => {
        //         for (let client in response.data) {
        //             this.clients.push(response.data[client]);
        //         }
        //     }, error => {
        //         alert(error)
        //     });
        // }
    }
</script>

<style scoped>

</style>