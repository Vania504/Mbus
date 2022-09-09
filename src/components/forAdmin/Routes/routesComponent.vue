<template>
  <div>
    <routes-list
      :routes="routes"
      :forAdmin="true"
      @addNew="showModal = true"
      @edit="getRoute"
      @delete="deleteRoute"
    />
    <add-new-routes-modal
      v-if="showModal"
      :visible="showModal"
      :isEdit="isEdit"
      :routeDetailInfo="routeDetailInfo"
      :busList="busList"
      @createRoute="createRoute"
      @editRoute="editRoute"
      @close="(showModal = false), (isEdit = false)"
    />
  </div>
</template>

<script>
import routesList from "@/components/forUser/Routes/routesList.vue";
import addNewRoutesModal from "@/components/forAdmin/Routes/addNewRoutesModal";
import routesService from "@/requests/admin/routesService";
import ourFleetService from "@/requests/admin/ourFleetService";
export default {
  components: {
    routesList,
    addNewRoutesModal,
  },
  data: () => ({
    showModal: false,
    isEdit: false,
    busList: [],
    routes: [],
    routeDetailInfo: {},
  }),
  mounted(){
    this.getBuses();
    this.getRoutes();
  },
  methods: {
    async createRoute(route){
      let response = await routesService.createRoute(route);
      if(response.status == 'success'){
        this.showModal = false;
        this.getRoutes();
      }
    },
    async editRoute(id, route){
      let response = await routesService.updateRoute(id, route);
      if(response.status == 'success'){
        this.showModal = false;
        this.getRoutes();
      }
    },
    async getRoutes() {
      let response = await routesService.getRouteForAdmin();
      this.routes = response.data;
    },
    async getRoute(id) {
      let response = await routesService.getRoute(id);
      this.routeDetailInfo = response.data;
      this.showModal = true;
      this.isEdit = true;
    },
    async getBuses(){
      let response = await ourFleetService.getBuses();
      this.busList = response.data;
    },
    async deleteRoute(uuid) {
      let response = await routesService.deleteRoute(uuid);
      console.log(response);
      alert("Function deleteRoute work success");
    },
  },
};
</script>

<style>
</style>