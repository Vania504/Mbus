<template>
  <v-col style="text-align: left">
    <success-snackbar
      v-if="showSuccessSnackbar"
      snackbarText="Рейс успішно створений"
    />
    <v-row no-gutters align="center">
      <v-icon color="black" @click="$emit('back')" class="pointer"
        >mdi-menu-left</v-icon
      >&nbsp;<span
        @click="$emit('back')"
        style="
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.1em;
          color: #243949;
        "
        class="pointer"
        >Назад</span
      >
    </v-row>
    <basic-data
      :touch="touch"
      @setBasicData="setBasicData"
      @setQuantityBusSeats="setQuantityBusSeats"
    />
    <seats-in-bus
      :touch="touch"
      @setSeats="setSeats"
      :quantityBusSeats="quantityBusSeats"
    />
    <additional-information
      :touch="touch"
      @setAdditionalInformation="setAdditionalInformation"
    />
    <v-row no-gutters justify="center">
      <v-btn
        width="200px"
        height="43px"
        dense
        color="#085895"
        style="
          border-radius: 10px;
          color: white;
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          letter-spacing: 0.1em;
          text-transform: none;
        "
        @click="setTouch"
      >
        Створити
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
import basicData from "./basicData.vue";
import SeatsInBus from "./seatsInBus.vue";
import additionalInformation from "./additionalInformation.vue";
import tripsService from "@/requests/admin/tripsService";
import SuccessSnackbar from "@/components/UI/successSnackbar.vue";
export default {
  components: { basicData, SeatsInBus, additionalInformation, SuccessSnackbar },
  data: () => ({
    touch: false,
    showSuccessSnackbar: false,
    tripBasicData: {},
    tripSeats: 0,
    quantityBusSeats: 0,
    tripAdditionalInformation: {},
  }),
  methods: {
    setTouch() {
      this.touch = true;
      setTimeout(this.createNewTicket, 1000);
    },
    async createNewTicket() {
      let form = new FormData();
      let start_date = new Date(this.tripBasicData.dates[0]);
      let end_date = new Date(this.tripBasicData.dates[1]);
      let departure_date = `${start_date.getFullYear()}-${
        start_date.getMonth() + 1
      }-${start_date.getDate()} ${this.tripBasicData.start_time}:00`;
      let arrival_date = `${end_date.getFullYear()}-${
        end_date.getMonth() + 1
      }-${end_date.getDate()} ${this.tripBasicData.end_time}:00`;
      form.append("route_id", this.tripBasicData.route);
      form.append("bus_id", this.tripBasicData.bus),
        form.append("price_adult", this.tripBasicData.price),
        form.append("price_child", this.tripBasicData.price);
      form.append("seats", this.tripSeats);
      form.append("departure_date", departure_date);
      form.append("arrival_date", arrival_date);
      form.append("status", "Active");
      await tripsService.createTrip(form).then(() => {
        this.showSuccessSnackbar = true;
        this.$emit("back");
      });
    },
    setBasicData(data) {
      console.log("setBasicData", data);
      this.tripBasicData = data;
    },
    setSeats(data) {
      this.tripSeats = data;
    },
    setQuantityBusSeats(seats) {
      this.quantityBusSeats = seats;
    },
    setAdditionalInformation(data) {
      this.tripAdditionalInformation = data;
    },
  },
};
</script>

<style>
.sectionName {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #085895;
}
.sectionCard {
  padding: 20px;
}
</style>