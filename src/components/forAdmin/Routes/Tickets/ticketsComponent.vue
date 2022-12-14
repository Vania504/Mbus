<template>
  <v-row no-gutters align="start" style="margin-top: 10px; padding-left: 10px">
    <v-col cols="8">
      <div
        class="my-3"
        style="
          background: #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          display: flex;
        "
        v-for="i in 9" :key="i"
      >
        <div style="width: 25px; text-align: right">
          <img src="@/assets/img/dottedLine.svg" />
        </div>
        <div style="width: 95%">
          <ticket-card :isAdmin="true" />
        </div>
      </div>
    </v-col>
    <v-col cols="4">
      <v-row no-gutters justify="center">
        <create-new-outline-btn width="264px" height="39" text="Новий квиток" />
        <status-filter-card />
        <availabele-route-filter />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import createNewOutlineBtn from "@/components/UI/buttons/createNewOutlineBtn.vue";
import StatusFilterCard from "./statusFilterCard.vue";
import AvailabeleRouteFilter from "./availabeleRouteFilter.vue";
import TicketCard from "@/components/UI/cards/ticketCard.vue";
export default {
  components: {
    createNewOutlineBtn,
    StatusFilterCard,
    AvailabeleRouteFilter,
    TicketCard,
  },
  data: () => ({
    status: "0",
  }),
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