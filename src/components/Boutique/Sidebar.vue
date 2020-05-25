<template>
    <div class="sidebar">
        <div v-for="categorie in categories" :key="categorie.id" class="d-flex flex-row">
            <div class="media-content d-flex flex-column">
                <h3 class="categorie_title" @click="$emit('get-id', categorie.id)" >{{categorie.name}} ({{categorie.count}})</h3>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        name: "Sidebar",
        data() {
            return {
                categories: [],
            }
        },
        created: function () {
            this.$woocommerce.get("products/categories")
                .then(response => {
                    for (let categorie in response.data) {
                        this.categories.push(response.data[categorie]);
                        console.log(response)
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        }
    }
</script>

<style scoped>

    .categorie_title {
        padding-left: 20px;
        font-family: Spartan;
        font-weight: 400;
    }

</style>