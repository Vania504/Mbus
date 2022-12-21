<template>
  <div
    style="
      background: #122b3e;
      height: 100%;
      padding-top: 70px;
    "
  >
    <input-new-password />
  </div>
</template>

<script>
import inputNewPassword from "@/components/forAdmin/resetPassword/inputNewPassword.vue";
export default {
  components: {
    inputNewPassword,
  },
};
</script>

<style>
</style>