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
      @close="(showModal = false), (isEdit = false)"
    />
  </div>
</template>

<script>
import routesList from "@/components/forUser/Routes/routesList.vue";
import addNewRoutesModal from "@/components/forAdmin/Routes/addNewRoutesModal";
import routesService from "@/requests/admin/routesService";
export default {
  components: {
    routesList,
    addNewRoutesModal,
  },
  data: () => ({
    showModal: false,
    isEdit: false,
    routes: [],
    route: {},
  }),
  methods: {
    async getRoutes(){
      let response = await routesService.getRoutes();
      this.routes = response.result;
    },
    async getRoute(uuid){
      let response = await routesService.getRoute(uuid);
      this.route = response.result;
      this.showModal = true;
      this.isEdit = true;
    },
    async deleteRoute(uuid) {
      let response = await routesService.deleteRoute(uuid);
      console.log(response);
      alert('Function deleteRoute work success')
    },
  },
};
</script>

<style>
</style>