<template>
  <div>
    <v-col class="px-0 py-0">
        <messages-message v-for="(message, index) in messages" :key="index" :message="message"  @updateStatus="updateStatus"/>
    </v-col>
  </div>
</template>

<script>
import messagesMessage from "./messagesMessage.vue";
import contactService from "@/requests/admin/contactService";
import irregularTransportationService from '@/requests/admin/irregularTransportationService';
export default {
  components: {
    messagesMessage,
  },
  props: {
    messages: {
      require: true,
    },
    statusList: {
      require: false,
    }
  },
  methods: {
    async updateStatus(id,messageType, statusName){
      let temporaryStatusList = this.statusList;
      let status = temporaryStatusList.filter((status) => status.name == statusName);
      let form = new FormData();
      form.append('status', parseInt(status[0].id));
      messageType == 'contact' ? this.updateContactMessage(id,form) : this.updateIrregularMessage(id,form);
    },
    async updateContactMessage(id,form){
      let response = await contactService.updateMessage(id,form);
      if(response.status == 'success'){
        this.$emit('getMessage')
      }
    },
    async updateIrregularMessage(id,form){
      let response = await irregularTransportationService.updateOrder(id,form);
      if(response.status == 'success'){
        this.$emit('getMessage')
      }
    },
  }
};
</script>

<style>
</style>