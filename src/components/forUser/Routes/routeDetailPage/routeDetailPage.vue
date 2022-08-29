<template>
  <div>
    <routes-header title="Гдиня–Чернівці"/>
    <v-row justify="center" align="start" no-gutters class="mt-15">
      <route-map />
    <route-description />
    </v-row>
    <v-col>
      <detail-route-info />
    </v-col>
  </div>
</template>

<script>
import routesHeader from '@/components/UI/routesHeader.vue';
import routeMap from './routeMap.vue';
import routeDescription from './routeDescription.vue';
import detailRouteInfo from './detailRouteInfo.vue';
export default {
    components: {
        routesHeader,
        routeMap,
        routeDescription,
        detailRouteInfo
    }
}
</script>

<style>

</style>