<template>
  <routes-component />
</template>

<script>
import routesComponent from '@/components/forUser/Routes/routesComponent.vue';
export default {
    name: 'RoutesView',
    components: {
        routesComponent
    },
    mounted(){
      window.scrollTo(0,0)
    }
}
</script>

<style>

</style>