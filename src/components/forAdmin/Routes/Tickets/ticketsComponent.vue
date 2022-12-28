<template>
  <v-row no-gutters align="start" style="margin-top: 10px; padding-left: 10px">
    <v-col cols="8">
      <loader v-if="showLoader" />
      <div
        v-else
        class="my-3"
        style="
          background: #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          display: flex;
        "
        v-for="trip in tripsList"
        :key="trip.id"
      >
        <div style="width: 25px; text-align: right">
          <img src="@/assets/img/dottedLine.svg" />
        </div>
        <div style="width: 95%">
          <ticket-card
            :isAdmin="true"
            :trip="trip"
            @deleteTrip="deleteTrip"
            @cancelTrip="cancelTrip"
          />
        </div>
      </div>
    </v-col>
    <v-col cols="4">
      <v-row no-gutters justify="center">
        <create-new-outline-btn
          width="264px"
          height="39"
          text="Новий квиток"
          @click="$emit('createNewTicket')"
        />
        <status-filter-card @getTripsByStatus="getTripsByStatus" />
        <availabele-route-filter
          :availableRoutes="availableRoutes"
          @choosedRoutes="getTripsByRoutes"
        />
      </v-row>
    </v-col>
    <success-modal
      v-if="successDeleteTicket"
      :visible="successDeleteTicket"
      :deleted="true"
      modalTitle="Квиток маршруту видалено"
      @close="successDeleteTicket = false"
    />
  </v-row>
</template>

<script>
import createNewOutlineBtn from "@/components/UI/buttons/createNewOutlineBtn.vue";
import StatusFilterCard from "./statusFilterCard.vue";
import AvailabeleRouteFilter from "./availabeleRouteFilter.vue";
import TicketCard from "@/components/UI/cards/ticketCard.vue";
import tripsService from "@/requests/admin/tripsService";
import { mapGetters, mapActions } from "vuex";
import Loader from "@/components/UI/Loader.vue";
import successModal from "@/components/UI/modals/successModal.vue";
import routesService from "@/requests/admin/routesService";
export default {
  components: {
    createNewOutlineBtn,
    StatusFilterCard,
    AvailabeleRouteFilter,
    TicketCard,
    Loader,
    successModal,
  },
  data: () => ({
    status: "0",
    tripsList: [],
    availableRoutes: [],
    showLoader: false,
    successDeleteTicket: false,
  }),
  mounted() {
    this.getTripsByStatus("Active");
    this.getAvailableRoutes();
  },
  methods: {
    ...mapActions(["updateLoader"]),
    async getTripsByStatus(status) {
      this.showLoader = true;
      let response = await tripsService.getTripsByStatus(status);
      this.tripsList = response.data;
      this.showLoader = false;
    },
    async getTripsByRoutes() {
      console.log("getTripsByRoute work..")
    },
    async cancelTrip(trip) {
      let form = new FormData();
      form.append("route_id", trip.route.id);
      form.append("bus_id", trip.bus.id),
        form.append("price_adult", trip.price_adult),
        form.append("price_child", trip.price_child);
      form.append("seats", trip.seats);
      form.append("departure_date", trip.departure_date);
      form.append("arrival_date", trip.arrival_date);
      form.append("status", "Canceled");
      await tripsService.updateTrip(trip.id, form).then(() => {
        this.getTripsByStatus("Active");
      });
    },
    async deleteTrip(id) {
      await tripsService.deleteTrip(id).then(() => {
        this.successDeleteTicket = true;
        this.getTripsByStatus("Active");
      });
    },
    async getAvailableRoutes() {
      let response = await routesService.getRoutes();
      this.availableRoutes = response.data.data;
    },
  },
  computed: {
    ...mapGetters(["loader"]),
  },
};
</script>

<style>
.titleTicketFilter {
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #243949;
}
.no-background-hover::before {
  background-color: transparent !important;
}
</style>