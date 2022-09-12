<template>
  <v-app>
    <v-idle
      v-if="loggedUser"
      @idle="onidle"
      hidden
      :events="['keydown', 'mousedown', 'touchstart']"
      :duration="$store.getters.loggedUser.timeout"
    />
    <Header :key="keyHeader" />
    <router-view @success="keyHeader++, keyFooter++" />
    <Footer :key="keyFooter" />
    <mobile-menu
      v-if="$vuetify.breakpoint.xs"
      @other="setShowNavigationDrawer"
    />
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
import { mapGetters, mapActions } from "vuex";
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
    keyHeader: 1,
    keyFooter: 2,
  }),
  methods: {
    ...mapActions(["updateInfoLogged"]),
    async onidle() {
      this.$store.commit("clearUserLogged");
      this.$router.push("/d");
    },
    setShowNavigationDrawer() {
      this.showNavigationDrawer = true;
    },
  },
  computed: {
    ...mapGetters(["loggedUser"]),
    ...mapGetters(["user"]),
  },
  created() {
    window.addEventListener("beforeunload", function () {
      localStorage.time = new Date();
    });
    if (localStorage.time) {
      let date = new Date();
      let diff = Math.abs(date - new Date(localStorage.time));
      console.log(diff * 0.001, this.loggedUser.timeout);
      if (diff * 0.001 > this.loggedUser.timeout) {
        this.$store.commit("clearUserLogged");
        this.$router.push("/d");
      }
      console.log(localStorage.time);
      localStorage.removeItem("time");
    }
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
