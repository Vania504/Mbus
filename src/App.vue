<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
    <mobile-menu v-if="$vuetify.breakpoint.xs" @other="setShowNavigationDrawer"/>
    <navigation-drawer-mobile
      v-if="$vuetify.breakpoint.xs && showNavigationDrawer"
      :showNavigationDrawer="showNavigationDrawer"
      @close="showNavigationDrawer = false"
    />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import mobileMenu from "@/components/mobileMenu";
import navigationDrawerMobile from "./components/UI/navigationDrawerMobile.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    mobileMenu,
    navigationDrawerMobile,
  },
  data: () => ({
    showNavigationDrawer: false,
  }),
  methods: {
    setShowNavigationDrawer(){
      this.showNavigationDrawer = true;
    }
  }
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
