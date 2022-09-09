<template>
  <v-row justify="center" no-gutters>
    <routes-header title="Маршрути"/>
    <routes-list :routes="routes"/>
    </v-row
  >
</template>

<script>
import routesList from './routesList.vue';
import routesHeader from '@/components/UI/routesHeader.vue';
import routesService from '@/requests/admin/routesService';
export default {
  components: {
    routesList,
    routesHeader
  },
  data: () => ({
    routes: []
  }),
  mounted(){
    this.getRoutes();
  },
  methods: {
    async getRoutes(){
      let response = await routesService.getRoutes();
      this.routes = response.data;
    }
  }
}
</script>

<style>

</style>