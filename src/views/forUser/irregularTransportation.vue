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
      this.$vuetify.goTo(0);
    }
}
</script>

<style>

</style>