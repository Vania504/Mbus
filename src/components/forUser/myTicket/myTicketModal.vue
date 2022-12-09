<template>
  <v-dialog v-model="visibility" width="900px" height="393px">
    <v-card min-height="393px">
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
        v-if="myTicketsList.length == 0"
      >
        <v-col align-self="center">
          <p>Ваш список білетів порожній</p>
          <search-route-btn />
        </v-col>
      </div>
      <ticket-list :ticketList="myTicketsList" v-else />
    </v-card>
  </v-dialog>
</template>

<script>
import modalHeader from "@/components/UI/modalHeader.vue";
import TicketList from "./ticketList.vue";
import SearchRouteBtn from '@/components/UI/searchRouteBtn.vue';
export default {
  components: { modalHeader, TicketList, SearchRouteBtn },
  data: () => ({
    myTicketsList: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
    ],
  }),
  props: {
    visible: {
      require: true,
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
    },
  },
};
</script>

<style>
</style>