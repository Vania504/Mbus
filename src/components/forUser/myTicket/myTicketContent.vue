<template>
  <v-card :min-height="$vuetify.breakpoint.xs ? '100%' : '393px'">
    <modal-header
      :showTicketIcon="true"
      :showCloseIcon="true"
      title="Мої квитки"
      @close="$emit('close')"
    />
    <div
      style="
        dispay: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
      " 
      v-if="!loggedUser"
    >
      <v-col align-self="center">
        <p class="ticketListEmpty">Увійдіть, щоб переглянути</p>
        <v-btn
          width="214px"
          height="40px"
          class="rounded-lg"
          color="#085895"
          style="
            text-transform: none; 
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.1em;
            color: #ffffff;
          "
          dark
          @click="$emit('signIn')"
        >
          Увійти
        </v-btn>
      </v-col>
    </div>
    <div
      style="
        dispay: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px; 
      "
      v-else-if="myTicketsList.length == 0 && loggedUser"
    >
      <v-col align-self="center">
        <p class="ticketListEmpty">Ваш список білетів порожній</p>
        <search-route-btn />
      </v-col>
    </div>
    <ticket-list :ticketList="myTicketsList" v-else />
  </v-card>
</template>
  
  <script>
import modalHeader from "@/components/UI/modalHeader.vue";
import TicketList from "./ticketList.vue";
import SearchRouteBtn from "@/components/UI/searchRouteBtn.vue";
import { mapGetters } from "vuex";
export default {
  components: { modalHeader, TicketList, SearchRouteBtn },
  data: () => ({
    myTicketsList: [
      {id: 1}
    ],
  }),
  computed: {
    ...mapGetters(["loggedUser"]),
  },
};
</script>
  
  <style>
@media only screen and (max-width: 600px) {
  .ticketListEmpty {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.1em;
    color: rgba(18, 43, 62, 0.7);
    padding-bottom: 40px;
  }
}
</style>