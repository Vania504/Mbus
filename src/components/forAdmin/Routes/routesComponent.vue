<template>
  <div v-if="!loader">
    <routes-header-admin @setActiveCategory="setActiveCategory" />
    <div v-if="activeCategory == 0">
      <div style="padding: 15px 0px 0px 25px">
        <create-new-outline-btn
          width="380px"
          height="45px"
          text="Новий маршрут"
          @click="showCreateRouteModal = true"
        />
      </div>
      <routes-list
        :routes="routes"
        :forAdmin="true"
        @addNew="showCreateRouteModal = true"
        @edit="getRoute"
        @delete="deleteRoute"
      />
    </div>
    <div v-if="activeCategory == 1">
      <create-new-ticket-component
        v-if="createNewTicket"
        @back="createNewTicket = false"
      />
      <tickets-component v-else @createNewTicket="createNewTicket = true" />
    </div>
    <add-new-routes-modal
      v-if="showCreateRouteModal"
      :visible="showCreateRouteModal"
      :isEdit="isEdit"
      :routeDetailInfo="routeDetailInfo"
      :busList="busList"
      @createRoute="createRoute"
      @editRoute="editRoute"
      @close="(showCreateRouteModal = false), (isEdit = false)"
    />
  </div>
</template>

<script>
import routesList from "@/components/forUser/Routes/routesList.vue";
import addNewRoutesModal from "@/components/forAdmin/Routes/addNewRoutesModal";
import routesService from "@/requests/admin/routesService";
import ourFleetService from "@/requests/admin/ourFleetService";
import { mapGetters, mapActions } from "vuex";
import RoutesHeaderAdmin from "./routesHeaderAdmin.vue";
import CreateNewOutlineBtn from "@/components/UI/buttons/createNewOutlineBtn.vue";
import TicketsComponent from "./Tickets/ticketsComponent.vue";
import CreateNewTicketComponent from "./Tickets/createNewTickets/createNewTicketComponent.vue";
export default {
  components: {
    routesList,
    addNewRoutesModal,
    RoutesHeaderAdmin,
    CreateNewOutlineBtn,
    TicketsComponent,
    CreateNewTicketComponent,
  },
  data: () => ({
    showCreateRouteModal: false,
    isEdit: false,
    createNewTicket: false,
    busList: [],
    routes: [],
    routeDetailInfo: {},
    activeCategory: 0,
  }),
  mounted() {
    this.getBuses();
    this.getRoutes();
  },
  methods: {
    ...mapActions(["updateLoader"]),
    async createRoute(route) {
      let response = await routesService.createRoute(route);
      if (response.status == "success") {
        this.showModal = false;
        this.getRoutes();
      }
    },
    async editRoute(id, route) {
      let response = await routesService.updateRoute(id, route);
      if (response.status == "success") {
        this.showModal = false;
        this.getRoutes();
      }
    },
    async getRoutes() {
      let response = await routesService.getRouteForAdmin();
      this.routes = response.data;
      this.updateLoader(false);
    },
    async getRoute(id) {
      let response = await routesService.getRoute(id);
      this.routeDetailInfo = response.data;
      this.showCreateRouteModal = true;
      this.isEdit = true;
    },
    async getBuses() {
      let response = await ourFleetService.getBuses();
      this.busList = response.data;
    },
    async deleteRoute(uuid) {
      let response = await routesService.deleteRoute(uuid);
      if (response.status == "success") {
        this.getRoutes();
      }
    },
    setActiveCategory(activeCategory) {
      this.activeCategory = activeCategory;
      this.createNewTicket = false;
    },
  },
  computed: {
    ...mapGetters(["loader"]),
  },
};
</script>

<style>
</style>