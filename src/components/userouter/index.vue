<template>
    <div>home1</div>
</template>


<script>
export default {
    computed: {
        username() {
            console.log(this.$router)
            return this.$route.params
        }
    }
}
</script>

<style>

</style>