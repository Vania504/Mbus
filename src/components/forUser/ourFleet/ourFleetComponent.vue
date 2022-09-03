<template>
  <v-row justify="start">
    <div
      style="width: 100%; height: 170px; text-align: start;"
      :style="$vuetify.breakpoint.xs ? {
        backgroundImage: `linear-gradient(
        0deg,
        rgba(18, 43, 62, 0.64),
        rgba(18, 43, 62, 0.64)
      ), url(
      ${require('@/assets/img/ourFleetMainBackground.svg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'norepeat',
        height: '170px',
      } : {
        backgroundImage: `linear-gradient(
        0deg,
        rgba(18, 43, 62, 0.64),
        rgba(18, 43, 62, 0.64)
      ), url(
      ${require('@/assets/img/ourFleetMainBackground.svg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'norepeat',
        height: '400px',
      }"
    >
      <span
        style="
          position: absolute;
          font-size: 40px;
          color: white;
          left: 0%;
          right: 0%;
          margin-top: 10%;
          text-align: center;
        "
        >Наш автопарк</span
      >
    </div>
    <bus-list />
    </v-row
  >
</template>

<script>
import busList from '@/components/forUser/ourFleet/busList'
export default {
  components: {
    busList
  },
  data: () => ({
    bgImg: {
      backgroundImage: `url(${require("@/assets/img/innregularTransporImg.svg")})`,
    },
  }),
};
</script>

<style>
</style>