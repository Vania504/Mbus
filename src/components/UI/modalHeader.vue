<template>
  <div
    style="background-color: #243949; align-self: center"
    :style="$vuetify.breakpoint.xs ? 'height: 40px;' : 'height: 58px;'"
  >
    <v-row
      :justify="$vuetify.breakpoint.xs ? 'center' : 'start'"
      align="center"
      no-gutters
      class="pt-1 px-5"
    >
      <img v-if="showTicketIcon" width="30px" height="30px" src="@/assets/img/ticketIconWhite.svg" class="mr-3" />
      <span
        style="color: white"
        :style="$vuetify.breakpoint.xs ? 'font-size: 18px;' : 'font-size: 32px'"
        >{{ title }}</span
      >
      <v-row justify="end" v-if="showCloseIcon">
        <v-icon
          v-if="$vuetify.breakpoint.xs"
          color="white"
          class="pointer"
          @click="$emit('close')"
          >mdi-close</v-icon
        ><v-icon
          v-else
          large
          color="white"
          class="pointer"
          @click="$emit('close')"
          >mdi-close</v-icon
        ></v-row
      ></v-row
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true,
    },
    showCloseIcon: {
      require: false,
    },
    showTicketIcon: {
      require: false,
    },
  },
};
</script>

<style>
</style>