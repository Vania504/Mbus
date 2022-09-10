<template>
  <div>
    <v-col class="px-0 py-0">
      <messages-message
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
        @updateStatus="updateStatus"
        @detailMessage="detailMessage"
      />
    </v-col>
  </div>
</template>

<script>
import messagesMessage from "./messagesMessage.vue";
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
    },
  },
  methods: {
    updateStatus(id, messageType, statusName){
      this.$emit('updateStatus', id, messageType, statusName)
    },
    detailMessage(type, id){
      this.$emit('detailMessage', type, id)
    }
  },
};
</script>

<style>
</style>