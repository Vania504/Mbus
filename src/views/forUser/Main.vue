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
      window.scrollTo(0,0)
    }
};
</script>

<style>
</style>