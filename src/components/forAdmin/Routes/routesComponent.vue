<template>
  <div>
    <routes-list
      :routes="[{ id: 1 }]"
      :forAdmin="true"
      @addNew="showModal = true"
      @edit="getRoute"
      @delete="deleteRoute"
    />
    <add-new-routes-modal
      v-if="showModal"
      :visible="showModal"
      :isEdit="isEdit"
      :route="route"
      :busList="busList"
      @createRoute="createRoute"
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
    route: {},
  }),
  mounted(){
    this.getBuses();
  },
  methods: {
    async createRoute(route){
      let response = await routesService.createRoute(route);
      if(response.status == 'success'){
        this.showModal = false;
      }
    },
    async getRoutes() {
      let response = await routesService.getRoutes();
      this.routes = response.data;
    },
    async getRoute(id) {
      let response = await routesService.getRoute(id);
      this.route = response.data;
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