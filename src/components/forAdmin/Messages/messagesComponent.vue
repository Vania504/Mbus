<template>
  <v-col class="px-0 py-0">
    <messages-header
      @createStatus="createStatus"
      :statusList="statusList"
      :getMessage="getMessage"
      @getMessageForStatus="getMessages"
    />
    <messages-list
      :messages="messages"
      :statusList="statusList"
      @getMessage="getMessage = true"
    />
  </v-col>
</template>

<script>
import messagesHeader from "./messagesHeader.vue";
import messagesList from "./messagesList.vue";
import contactService from "@/requests/admin/contactService";
import irregularTransportationService from "@/requests/admin/irregularTransportationService";
import statusService from "@/requests/admin/statusService";
export default {
  components: {
    messagesHeader,
    messagesList,
  },
  data: () => ({
    messages: [],
    statusList: [],
    getMessage: false,
  }),
  mounted() {
    this.getMessages("1");
    this.getStatusList();
  },
  methods: {
    async getMessages(status_id) {
      this.messages = [];
      let contactMessages = await contactService.getMessages(status_id);
      contactMessages.data.forEach((message) => {
        this.messages.push({
          type: "contact",
          type_text: "Форма зворотнього зв'язку",
          ...message,
        });
      });
      let irregularTransportationMessages =
        await irregularTransportationService.getOrders(status_id);
      irregularTransportationMessages.data.forEach((message) => {
        this.messages.push({
          type: "irregular",
          type_text: "Форма замовлення перевезень",
          ...message,
        });
      });
      this.getMessage = false;
    },
    async getStatusList() {
      let response = await statusService.getStatusList("/message");
      this.statusList = response.data;
    },
    async createStatus(status) {
      let response = await statusService.createStatus(status);
      this.statusList = response.data;
      if (response.status == "success") {
        this.getStatusList();
      }
    },
  },
};
</script>

<style>
</style>