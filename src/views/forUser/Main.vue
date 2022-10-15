<template>
  <main-component />
</template>

<script>
import mainComponent from "@/components/forUser/Main/mainComponent.vue";
export default {
  name: "mainView",
  components: {
    mainComponent,
  },
  mounted(){
    this.$vuetify.goTo(0);
    }
};
</script>

<style>
</style>