<template>
  <v-card
    class="sessionTimeCard"
    :style="$vuetify.breakpoint.xs ? 'width: 100%;' : 'width: 338px;'"
  >
    <v-row no-gutters align="center" justify="center">
      <v-progress-circular
        size="24"
        indeterminate
        color="#085895"
        style="margin-right: 5px"
      />
      <span
        style="
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.1em;
          color: #000000;
        "
        >Час Вашої сесії сплине через
        <span
          v-if="
            minutes == 0 ||
            minutes == 1 ||
            minutes == 2 ||
            minutes == 3 ||
            minutes == 4 ||
            minutes == 5 ||
            minutes == 6 ||
            minutes == 7 ||
            minutes == 8 ||
            minutes == 9
          "
          >0</span
        >{{ minutes }}:<span
          v-if="
            seconds == 0 ||
            seconds == 1 ||
            seconds == 2 ||
            seconds == 3 ||
            seconds == 4 ||
            seconds == 5 ||
            seconds == 6 ||
            seconds == 7 ||
            seconds == 8 ||
            seconds == 9
          "
          >0</span
        >{{ seconds }} хв.</span
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  mounted() {
    this.startDate = new Date();
    setInterval(this.setTime, 1000);
  },
  data: () => ({
    minutes: 15,
    seconds: 0,
  }),
  methods: {
    setTime() {
      if (this.seconds == 0) {
        if (this.minutes !== 0) {
          this.minutes--;
          this.seconds = 60;
        } else {
          this.showTimeExpiredModal = true;
        }
      } else {
        this.seconds--;
      }
    },
  },
  destroyed() {
    localStorage.setItem("minutes", this.minutes);
  },
};
</script>

<style>
.sessionTimeCard {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  height: 44px;
  padding: 10px;
}
</style>