<template>
  <our-fleet-component />
</template>

<script>
import ourFleetComponent from '@/components/forUser/ourFleet/ourFleetComponent.vue';
export default {
    components: {
        ourFleetComponent,
    },
    mounted(){
      window.scrollTo(0,0)
    }
}
</script>

<style>

</style>