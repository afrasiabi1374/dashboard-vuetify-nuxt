<template>
  <v-container >

    <h1>this is indexTwo.vue page</h1>
    <h2>{{ $store.getters.getMode }}</h2>
  </v-container>
</template>

<script>
export default {

    data(){
        return {
            themeMode: this.$store.getters.getMode,
        }
    },


}
</script>

<style>

</style>