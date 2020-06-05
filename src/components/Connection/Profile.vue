<template>
    <div>
        <h1>Bonjour {{this.user.user_nicename}}</h1>
        <div>{{this.user.user_email}}</div>

    </div>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                user: {}
            }
        },
        mounted() {
            this.user = this.$store.getters["user/currentUser"]
            console.log(this.user)
        },
    }
</script>

<style scoped>

</style>