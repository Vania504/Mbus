<template>
  <v-row justify="center" no-gutters>
    <routes-header title="Маршрути" />
    <loader v-if="showLoader"/>
    <routes-list v-else :routes="routes" />
  </v-row>
</template>

<script>
import routesList from "./routesList.vue";
import routesHeader from "@/components/UI/routesHeader.vue";
import routesService from "@/requests/admin/routesService";
import searchRoutesService from "@/requests/main/searchRoutesService";
import Loader from "@/components/UI/Loader.vue";
export default {
  components: {
    routesList,
    routesHeader,
    Loader,
  },
  data: () => ({
    routes: [],
    showLoader: true,
  }),
  mounted() {
    this.$route.query.start_route ? this.searchRoutes() : this.getRoutes();
  },
  methods: {
    async getRoutes() {
      let response = await routesService.getRoutes();
      this.routes = response.data;
      this.showLoader = false;
    },
    async searchRoutes() {
      let response = await searchRoutesService.searchRoute(
        this.$route.query.start_route,
        this.$route.query.end_route
      );
      this.routes = response;
      this.showLoader = false;
    },
  },
};
</script>

<style>
</style>