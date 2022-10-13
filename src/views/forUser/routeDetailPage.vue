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
      window.scrollTo(0,0)
    }
}
</script>

<style>

</style>