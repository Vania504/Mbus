<template>
  <v-col class="px-0 py-0">
    <messages-detail-message
      v-if="isDetail"
      :message="message"
      @back="isDetail = false"
      @updateStatus="updateStatus"
    />
    <v-col class="px-0 py-0" v-else>
      <messages-header
        @createStatus="createStatus"
        :statusList="statusList"
        :getMessage="getMessage"
        @getMessageForStatus="getMessages"
      />
      <messages-list
        :messages="messages"
        :statusList="statusList"
        @detailMessage="detailMessage"
        @updateStatus="updateStatus"
      />
    </v-col>
  </v-col>
</template>

<script>
import messagesHeader from "./messagesHeader.vue";
import messagesList from "./messagesList.vue";
import contactService from "@/requests/admin/contactService";
import irregularTransportationService from "@/requests/admin/irregularTransportationService";
import statusService from "@/requests/admin/statusService";
import messagesDetailMessage from "@/components/forAdmin/Messages/messagesDetailMessage";
export default {
  components: {
    messagesHeader,
    messagesList,
    messagesDetailMessage,
  },
  data: () => ({
    messages: [],
    statusList: [],
    message: [],
    getMessage: false,
    isDetail: false,
  }),
  mounted() {
    this.getMessages("1");
    this.getStatusList();
  },
  methods: {
    async updateStatus(id, messageType, statusName) {
      let temporaryStatusList = this.statusList;
      let status = temporaryStatusList.filter(
        (status) => status.name == statusName
      );
      let form = new FormData();
      form.append("status", parseInt(status[0].id));
      messageType == "contact"
        ? this.updateContactMessage(id, form)
        : this.updateIrregularMessage(id, form);
    },
    async updateContactMessage(id, form) {
      let response = await contactService.updateMessage(id, form);
      if (response.status == "success") {
        this.getMessage = true;
      }
    },
    async updateIrregularMessage(id, form) {
      let response = await irregularTransportationService.updateOrder(id, form);
      if (response.status == "success") {
        this.getMessage = true;
      }
    },
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
    async getContactMessage(id) {
      let response = await contactService.getMessage(id);
      if (response.status == "success") {
        this.message = {
          type_text: "Форма зворотнього зв'язку",
          ...response.data,
        };
        this.isDetail = true;
      }
    },
    async getirregularTransportationMessages(id) {
      let response = await irregularTransportationService.getOrder(id);
      if (response.status == "success") {
        this.message = {
          type_text: "Форма замовлення перевезень",
          ...response.data,
        };
        this.isDetail = true;
      }
    },
    async createStatus(status) {
      let response = await statusService.createStatus(status);
      this.statusList = response.data;
      if (response.status == "success") {
        this.getStatusList();
      }
    },
    async detailMessage(type, id) {
      type == "contact"
        ? this.getContactMessage(id)
        : this.getirregularTransportationMessages(id);
    },
  },
};
</script>

<style>
</style>