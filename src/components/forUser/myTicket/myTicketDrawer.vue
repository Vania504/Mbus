<template>
  <v-navigation-drawer
    v-model="visible"
    absolute
    right
    temporary
    style="z-index: 50; border-radius: 0px"
    width="100%"
  >
    <sign-in-mobile v-if="signIn" @back="signIn = false" />
    <my-ticket-content v-else @signIn="signIn = true" />
  </v-navigation-drawer>
</template>

<script>
import myTicketContent from "./myTicketContent.vue";
import signInMobile from "@/components/forAdmin/signInMobile.vue";
export default {
  components: { myTicketContent, signInMobile },
  data: () => ({
    visible: false,
    signIn: false,
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