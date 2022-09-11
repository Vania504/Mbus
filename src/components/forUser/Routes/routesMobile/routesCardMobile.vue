<template>
  <div
    class="routeCard mx-1"
    :style="{
      backgroundImage: `linear-gradient(360deg, rgba(1, 29, 51, 0.602) 35.16%, rgba(91, 98, 104, 0.469) 45.62%),url(
      ${require('@/assets/img/routesBackgroundImg.svg')})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'norepeat',
    }"
  >
    <v-col style="margin-top: 60px" class="px-0">
      <span class="routeTitle">Долина—Варшава</span>
      <v-btn outlined dense color="white" @click="$router.push('/routes/' + 1)"
        >Детальніше</v-btn
      >
    </v-col>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.routeCard {
  width: 170px;
  height: 180px;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
}
.routeTitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #ffffff;
}
.v-btn--outlined {
  border: thin solid #085895;
  background-color: transparent;
  text-transform: none;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #dddddd;
  margin-top: 20px;
}
</style>