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
    this.$vuetify.goTo(0);
  }
};
</script>

<style>
</style>