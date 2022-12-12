<template>
  <div style="padding: 0; margin: 0">
    <Loader v-if="showLoader" />
    <div v-else>
      <div v-if="$vuetify.breakpoint.xs">
        <v-col class="px-0 py-0">
          <div
            style="background-color: #243949; align-self: center; height: 40px"
          >
            <v-row justify="start" align="center" no-gutters class="pt-2">
              <v-icon
                class="ml-2 mr-2"
                color="white"
                @click="
                  $router.push(
                    $route.query.start_route
                      ? `/routes?start_route=${$route.query.start_route}&end_route=${$route.query.end_route}`
                      : '/routes'
                  )
                "
                >mdi-arrow-left</v-icon
              >
              <span style="color: white; font-size: 18px"
                >{{ route.departure }}–{{ route.destination }}</span
              >
            </v-row>
          </div>
          <div
            style="
              width: 1440px;
              height: 80px;
              background: rgba(255, 255, 255, 0.9);
              border-bottom: 0.5px solid #085895;
              box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
              text-align: center;
            "
          ></div>
          <route-map :start_point="start_point" :finish_point="finish_point" />
          <route-description :route="route" />
          <detail-route-info :route="route" />
          <searchRoutesField />
        </v-col>
      </div>
      <div v-else>
        <routes-header
          :title="route.departure + '-' + route.destination"
          :image="route.images.length > 0 ? route.images[0].images.path : ''"
        />
        <div
          style="
            width: 1440px;
            height: 80px;
            background: rgba(255, 255, 255, 0.9);
            border-bottom: 0.5px solid #085895;
            box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
            text-align: center;
          "
        >
          <v-row no-gutters justify="center" class="pt-3">
            <div style="width: 804px"><search-routes-field /></div>
          </v-row>
        </div>
        <v-row justify="center" align="start" no-gutters class="mt-15">
          <route-map :start_point="start_point" :finish_point="finish_point" />
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
import googleMapsService from "@/requests/googleMaps/googleMapsService";
import searchRoutesField from "@/components/UI/searchRoutesField.vue";
export default {
  components: {
    routesHeader,
    routeMap,
    routeDescription,
    detailRouteInfo,
    Loader,
    searchRoutesField,
  },
  data: () => ({
    route: {},
    showLoader: true,
    start_point: {},
    finish_point: {},
  }),
  mounted() {
    this.getRoute();
    window.scrollTo(0, 0);
  },
  methods: {
    async getRoute() {
      let response = await routesService.getRoute(this.$route.params.id);
      this.start_point = await this.getPoint(response.data.departure);
      this.finish_point = await this.getPoint(response.data.destination);
      this.route = response.data;
      this.showLoader = false;
    },
    async getPoint(city) {
      let response = await googleMapsService.getCoordinates(city);
      return response.results[0].geometry.location;
    },
  },
};
</script>

<style>
</style>