<template>
  <v-row no-gutters justify="start">
    <div
      style="width: 100%;"
      :style="
        $vuetify.breakpoint.xs
          ? {
              backgroundImage: `linear-gradient(
        0deg,
        rgba(18, 43, 62, 0.64),
        rgba(18, 43, 62, 0.64)
      ), url(
      ${require('@/assets/img/test.svg')})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'norepeat',
              height: '170px',
            }
          : {
              backgroundImage: `linear-gradient(
        0deg,
        rgba(18, 43, 62, 0.64),
        rgba(18, 43, 62, 0.64)
      ), url(
      ${require('@/assets/img/ourFleetMainBackground.svg')})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'norepeat',
              height: '400px',
            }
      "
    >
    </div>
    <span :class="$vuetify.breakpoint.xs ? 'mobileTitle' : 'otherTitle'"
        >Наш автопарк</span
      >
    <bus-list :busList="busList"/>
  </v-row>
</template>

<script>
import busList from "@/components/forUser/ourFleet/busList";
import ourFleetService from "@/requests/admin/ourFleetService";
export default {
  components: {
    busList,
  },
  data: () => ({
    bgImg: {
      backgroundImage: `url(${require("@/assets/img/innregularTransporImg.svg")})`,
    },
    busList: [],
  }),
  mounted(){
    this.getBuses();
  },
  methods: {
    async getBuses(){
      let response = await ourFleetService.getBuses();
      this.busList = response.data.data;
    }
  }
};
</script>

<style scoped>
.otherTitle {
  position: absolute;
  font-size: 40px;
  color: white;
  left: 0%;
  right: 0%;
  margin-top: 10%;
  text-align: center;
}
.mobileTitle {
  position: absolute;
  font-family: "SeoulHangang";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin-top: 60px;
  text-align: center;
  width: 100%;
}
</style>