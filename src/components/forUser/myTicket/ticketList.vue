<template>
  <v-col>
    <ticket-card
      v-for="ticket in ticketList"
      :key="ticket.id"
      :ticket="ticket"
    />
    <v-row no-gutters justify="end">
      <search-route-btn />
    </v-row>
  </v-col>
</template>

<script>
import SearchRouteBtn from "@/components/UI/searchRouteBtn.vue";
import ticketCard from "./ticketCard.vue";
export default {
  components: { ticketCard, SearchRouteBtn },
  props: {
    ticketList: {
      require: true,
    },
  },
};
</script>

<style>
</style>