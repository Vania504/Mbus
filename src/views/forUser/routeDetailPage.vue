<template>
  <route-detail-page />
</template>

<script>
import routeDetailPage from '@/components/forUser/Routes/routeDetailPage/routeDetailPage.vue';
export default {
    components: {
        routeDetailPage
    },
    mounted(){
      this.$vuetify.goTo(0);
    }
}
</script>

<style>

</style>