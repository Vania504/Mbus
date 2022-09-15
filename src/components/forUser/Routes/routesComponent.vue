<template>
  <v-row justify="center" no-gutters>
    <routes-header title="Маршрути" />
    <loader v-if="showLoader" />
    <v-col v-else class="px-0 py-0 mb-10">
      <routes-list :routes="routes" />
      <v-pagination v-model="page" :length="quantityPage" />
    </v-col>
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
    page: 1,
    quantityPage: 1,
  }),
  mounted() {
    this.$route.query.start_route ? this.searchRoutes() : this.getRoutes();
  },
  methods: {
    async getRoutes() {
      let response = await routesService.getRoutes(this.page);
      this.routes = response.data;
      this.quantityPage = response.data.total == 12 ? 1 : parseInt(response.data.total / 12 + 1)
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
  watch: {
    page: {
      deep: true,
      handler(){
        this.showLoader = true;
        this.getRoutes();
      }
    }
  }
};
</script>

<style>
</style>