<template>
  <transportation-rules-component />
</template>

<script>
import transportationRulesComponent from "@/components/forUser/forPassengers/transportationRulesComponents.vue";
export default {
  components: {
    transportationRulesComponent,
  },
  mounted(){
      window.scrollTo(0,0)
  }
};
</script>

<style>
</style>