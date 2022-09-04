<template>
  <v-row justify="center" no-gutters>
    <routes-header title="Маршрути"/>
    <routes-list :routes="[{id: 1}]"/>
    </v-row
  >
</template>

<script>
import routesList from './routesList.vue';
import routesHeader from '@/components/UI/routesHeader.vue';
export default {
  components: {
    routesList,
    routesHeader
  },
}
</script>

<style>

</style>