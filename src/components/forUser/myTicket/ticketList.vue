<template>
  <div>
    <v-col v-if="$vuetify.breakpoint.xs">
      <ticket-card-mobile
        v-for="ticket in ticketList"
        :key="ticket.id"
        :ticket="ticket"
      />
    </v-col>
    <v-col v-else>
      <ticket-card
        v-for="ticket in ticketList"
        :key="ticket.id"
        :ticket="ticket"
      />
      <v-row no-gutters justify="end" v-if="!$vuetify.breakpoint.xs">
        <search-route-btn />
      </v-row>
    </v-col>
  </div>
</template>

<script>
import SearchRouteBtn from "@/components/UI/searchRouteBtn.vue";
import ticketCard from "./ticketCard.vue";
import TicketCardMobile from "./mobile/ticketCardMobile.vue";
export default {
  components: { ticketCard, SearchRouteBtn, TicketCardMobile },
  props: {
    ticketList: {
      require: true,
    },
  },
};
</script>

<style>
</style>