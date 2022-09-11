<template>
  <div style="padding: 0; margin: 0">
    <div v-if="$vuetify.breakpoint.xs">
      <v-col class="px-0 py-0">
        <div
          style="background-color: #243949; align-self: center; height: 40px"
        >
          <v-row justify="start" align="center" no-gutters class="pt-2">
            <v-icon class="ml-2 mr-2" color="white" @click="$router.push('/routes')">mdi-arrow-left</v-icon>
            <span style="color: white; font-size: 18px">{{route.departure}}–{{route.destination}}</span>
          </v-row>
        </div>
        <route-map />
        <route-description :route="route"/>
        <detail-route-info :route="route"/>
      </v-col>
    </div>
    <div v-else>
      <routes-header :title="route.departure + '-' + route.destination" />
      <v-row justify="center" align="start" no-gutters class="mt-15">
        <route-map />
        <route-description :route="route"/>
      </v-row>
      <v-col>
        <detail-route-info :route="route"/>
      </v-col>
    </div>
  </div>
</template>

<script>
import routesHeader from "@/components/UI/routesHeader.vue";
import routeMap from "./routeMap.vue";
import routeDescription from "./routeDescription.vue";
import detailRouteInfo from "./detailRouteInfo.vue";
import routesService from "@/requests/admin/routesService";
export default {
  components: {
    routesHeader,
    routeMap,
    routeDescription,
    detailRouteInfo,
  },
  data: () => ({
    route: {},
  }),
  mounted(){
    this.getRoute()
  },
  methods: {
    async getRoute(){
      let response = await routesService.getRoute(this.$route.params.id);
      this.route = response.data;
    }
  }
};
</script>

<style>
</style>