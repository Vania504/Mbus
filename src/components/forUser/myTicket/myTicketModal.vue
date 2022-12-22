<template>
  <v-dialog v-model="visibility" width="900px" height="393px">
    <my-ticket-content @close="$emit('close')" />
  </v-dialog>
</template>

<script>
import MyTicketContent from "./myTicketContent.vue";
import modalMixin from "@/mixins/modalMixin";
export default {
  mixins: [modalMixin],
  components: { MyTicketContent },
  data: () => ({
    myTicketsList: [],
  }),
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