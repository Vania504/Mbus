<template>
  <div style="padding: 0; margin: 0">
    <div v-if="$vuetify.breakpoint.xs">
      <v-col class="px-0 py-0">
        <div
          style="background-color: #243949; align-self: center; height: 40px"
        >
          <v-row justify="start" align="center" no-gutters class="pt-2">
            <v-icon class="ml-2 mr-2" color="white" @click="$router.push('/routes')">mdi-arrow-left</v-icon>
            <span style="color: white; font-size: 18px">Гдиня–Чернівці</span>
          </v-row>
        </div>
        <route-map />
        <route-description />
        <detail-route-info />
      </v-col>
    </div>
    <div v-else>
      <routes-header title="Гдиня–Чернівці" />
      <v-row justify="center" align="start" no-gutters class="mt-15">
        <route-map />
        <route-description />
      </v-row>
      <v-col>
        <detail-route-info />
      </v-col>
    </div>
  </div>
</template>

<script>
import routesHeader from "@/components/UI/routesHeader.vue";
import routeMap from "./routeMap.vue";
import routeDescription from "./routeDescription.vue";
import detailRouteInfo from "./detailRouteInfo.vue";
export default {
  components: {
    routesHeader,
    routeMap,
    routeDescription,
    detailRouteInfo,
  },
};
</script>

<style>
</style>