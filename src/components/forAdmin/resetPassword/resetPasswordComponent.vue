<template>
  <div style="min-height: 60vh;">
    <div
      v-if="successSendEmail"
      class="d-flex align-center"
      style="text-align: center; min-height: 60vh"
    >
      <v-row justify="center">
        <p class="mx-auto darkBlueSpan">
          Ми надіслали вам електронний лист, щоб змінити ваш пароль.
        </p>
      </v-row>
    </div>
    <input-email v-else @successSendEmail="successSendEmail = true"/>
  </div>
</template>
  
  <script>
import inputEmail from "./inputEmail.vue";
export default {
  components: {
    inputEmail,
  },
  data: () => ({
    successSendEmail: false,
  }),
};
</script>
  
  <style>
</style>