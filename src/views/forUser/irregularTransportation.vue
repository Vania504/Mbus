<template>
  <irregularTransportationComponent />
</template>

<script>
import irregularTransportationComponent from '@/components/forUser/irregularTransportation/irregularTransportationComponent.vue';
export default {
    components: {
        irregularTransportationComponent
    },
    mounted(){
      window.scrollTo(0,0)
    }
}
</script>

<style>

</style>