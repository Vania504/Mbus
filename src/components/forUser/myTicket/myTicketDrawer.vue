<template>
  <v-navigation-drawer
    v-model="visible"
    absolute
    right
    temporary
    style="z-index: 50; border-radius: 0px"
    width="100%"
  >
    <sign-in-mobile
      v-if="signIn"
      @back="signIn = false"
      @goToSignUp="(signIn = false), (signUp = true)"
    />
    <sign-up-mobile
      v-else-if="signUp"
      @back="signUp = false"
      @goToSignIn="(signUp = false), (signIn = true)"
    />
    <my-ticket-content v-else @signIn="signIn = true" />
  </v-navigation-drawer>
</template>

<script>
import myTicketContent from "./myTicketContent.vue";
import signInMobile from "@/components/forAdmin/signInMobile.vue";
import signUpMobile from "@/components/forAdmin/signUpMobile.vue";
export default {
  components: { myTicketContent, signInMobile, signUpMobile },
  data: () => ({
    visible: true,
    signIn: false,
    signUp: false,
  }),
  props: {
    showMyTicketDrawer: {
      require: true,
    },
  },
  mounted() {
    this.visible = this.showMyTicketDrawer;
  },
};
</script>

<style>
</style>