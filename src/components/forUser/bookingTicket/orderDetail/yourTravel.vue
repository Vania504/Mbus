<template>
  <div>
    <v-card
      class="my-3"
      :style="$vuetify.breakpoint.xs ? 'border-bottom-right-radius: 10px;' : ''"
    >
      <v-row no-gutters>
        <div style="width: 25px; text-align: right">
          <img src="@/assets/img/dottedLine.svg" height="100%" />
        </div>
        <v-col class="px-0">
          <div style="padding: 10px 15px 10px 15px">
            <span
              style="
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.1em;
                color: #243949;
              "
              >Ваша поїздка</span
            >
          </div>
          <v-divider style="border: 0.5px solid rgba(8, 88, 149, 0.53)" />
          <ticket-card
            @setShowTicketDetail="showTicketDetail = !showTicketDetail"
          />
        </v-col>
      </v-row>
    </v-card>
    <ticket-card-detail v-if="showTicketDetail" />
  </div>
</template>

<script>
import TicketCard from "@/components/UI/cards/ticketCard.vue";
import ticketCardDetail from "../../myTicket/ticketCardDetail.vue";
export default {
  components: {
    ticketCardDetail,
    TicketCard,
  },
  data: () => ({
    showTicketDetail: false,
  }),
};
</script>

<style>
</style>