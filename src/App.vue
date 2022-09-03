<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
    <mobile-menu v-if="$vuetify.breakpoint.xs"/>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import mobileMenu from '@/components/mobileMenu';
export default {
  name: "App",
  components: {
    Header,
    Footer,
    mobileMenu,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
