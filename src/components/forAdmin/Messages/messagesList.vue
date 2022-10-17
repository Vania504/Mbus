<template>
  <div>
    <v-col class="px-0 py-0">
      <messages-message
        v-for="(message, index) in messages.slice((20 * page - 20), (20 * page))"
        :key="index"
        :message="message"
        @updateStatus="updateStatus"
        @detailMessage="detailMessage"
        @deleteMessage="deleteMessage"
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
    page: {
      require: true,
    }
  },
  methods: {
    updateStatus(id, messageType, statusName){
      this.$emit('updateStatus', id, messageType, statusName)
    },
    detailMessage(type, id){
      this.$emit('detailMessage', type, id)
    },
    deleteMessage(id){
      this.$emit('deleteMessage', id)
    }
  },
};
</script>

<style>
</style>