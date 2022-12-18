<template>
  <v-app>
    <v-idle
      v-if="loggedUser"
      @idle="onidle"
      hidden
      :events="['keydown', 'mousedown', 'touchstart']"
      :duration="$store.getters.loggedUser.timeout"
    />
    <Loader v-if="showLoader" style="margin-top: 10%" />
    <div v-show="!showLoader">
      <Header :key="keyHeader" />
      <router-view
        @success="keyHeader++, keyFooter++"
        :filtersList="filtersList"
      />
      <Footer :key="keyFooter" />
      <mobile-menu
        v-if="$vuetify.breakpoint.xs"
        @other="setShowNavigationDrawer"
        @setFiltersList="setFiltersList"
      />
      <navigation-drawer-mobile
        v-if="$vuetify.breakpoint.xs && showNavigationDrawer"
        :showNavigationDrawer="showNavigationDrawer"
        @close="showNavigationDrawer = false"
      />
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import mobileMenu from "@/components/mobileMenu";
import Loader from "./components/UI/Loader.vue";
import navigationDrawerMobile from "./components/UI/navigationDrawerMobile.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    mobileMenu,
    navigationDrawerMobile,
    Loader,
  },
  data: () => ({
    showNavigationDrawer: false,
    showLoader: true,
    keyHeader: 1,
    keyFooter: 2,
    filtersList: [],
  }),
  mounted() {
    setTimeout(this.setShowLoader, 1000);
  },
  methods: {
    ...mapActions(["updateInfoLogged"]),
    async onidle() {
      this.$store.commit("clearUserLogged");
      this.$router.push("/");
    },
    setShowNavigationDrawer() {
      this.showNavigationDrawer = true;
    },
    setShowLoader() {
      this.showLoader = false;
    },
    setFiltersList(filtersList) {
      this.filtersList = filtersList;
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
      if (this.loggedUser) {
        if (diff * 0.001 > this.loggedUser.timeout) {
          this.$store.commit("clearUserLogged");
          this.$router.push("/");
        }
        localStorage.removeItem("time");
      }
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
