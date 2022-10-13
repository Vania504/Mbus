<template>
  <div style="padding: 0; margin: 0">
    <Loader v-if="showLoader" />
    <div v-else>
      <div v-if="$vuetify.breakpoint.xs">
        <v-col class="px-0 py-0">
          <div style="background-color: #243949; align-self: center; height: 40px">
            <v-row justify="start" align="center" no-gutters class="pt-2">
              <v-icon class="ml-2 mr-2" color="white" @click="$router.push('/routes')">mdi-arrow-left</v-icon>
              <span style="color: white; font-size: 18px">{{ route.departure }}–{{ route.destination }}</span>
            </v-row>
          </div>
          <route-map :start_point="{lat: route.cities[0].lat, lng: route.cities[0].lng}"
          :finish_point="{lat: route.cities[route.cities.length - 1].lat, lng: route.cities[route.cities.length - 1].lng}"/>
          <route-description :route="route" />
          <detail-route-info :route="route" />
        </v-col>
      </div>
      <div v-else>
        <routes-header :title="route.departure + '-' + route.destination"
          :image="route.images.length > 0 ? route.images[0].images.path : ''" />
        <v-row justify="center" align="start" no-gutters class="mt-15">
          <route-map :start_point="{lat: route.cities[0].lat, lng: route.cities[0].lng}"
            :finish_point="{lat: route.cities[route.cities.length - 1].lat, lng: route.cities[route.cities.length - 1].lng}" />
          <route-description :route="route" />
        </v-row>
        <v-col>
          <detail-route-info :route="route" />
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
import routesHeader from "@/components/UI/routesHeader.vue";
import routeMap from "./routeMap.vue";
import routeDescription from "./routeDescription.vue";
import detailRouteInfo from "./detailRouteInfo.vue";
import routesService from "@/requests/admin/routesService";
import Loader from "@/components/UI/Loader.vue";
export default {
  components: {
    routesHeader,
    routeMap,
    routeDescription,
    detailRouteInfo,
    Loader,
  },
  data: () => ({
    route: {},
    showLoader: true,
  }),
  mounted() {
    this.getRoute();
    window.scrollTo(0, 0);
  },
  methods: {
    async getRoute() {
      let response = await routesService.getRoute(this.$route.params.id);
      this.route = response.data;
      this.showLoader = false;
    },
  },
};
</script>

<style>

</style>