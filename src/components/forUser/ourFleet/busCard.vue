<template>
  <v-card class="mr-5 mb-10" width="405px">
    <div class="hover" v-if="isHover" @mouseleave="isHover = false">
      <v-row justify="center">
        <v-btn outlined style="margin-top: 130px" color="white" @click="$emit('detailInfo')"
          >Детальніше</v-btn
        >
      </v-row>
    </div>
    <div
      style="
        overflow: hidden;
        max-width: 405px;
        transition: all 0.3s ease-out;
        width: 100%;
      "
      @mousemove="isHover = true"
    >
      <img
        width="405px"
        height="300px"
        :class="isHover ? 'busImg' : ''"
        style="width: 100%; height: 100%; max-height: 300px; transition: 1s"
        src="@/assets/img/busImg.svg"
      />
    </div>

    <v-divider style="margin-left: 110px" color="#4C5D6C" width="200px" class="mt-2"/>
    <v-col class="px-5 py-5">
      <v-row align="center"
        ><img src="@/assets/img/busServiceIcon/busIcon.svg" /><span class="ml-3"
          >Setra S 417 GT-HD</span
        ></v-row
      >
      <v-row align="center" class="mt-5"
        ><img src="@/assets/img/busServiceIcon/chairIcon.svg" /><span class="ml-3"
          >60<span class="drivingSeats">+2</span> місць</span
        ></v-row
      >
    </v-col>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isHover: false,
  }),
};
</script>

<style>
.hover {
  background: linear-gradient(
    0deg,
    rgba(18, 43, 62, 0.4),
    rgba(18, 43, 62, 0.4)
  );
  height: 300px;
  width: 405px;
  position: absolute;
  z-index: 10;
}
.busImg {
  transform: scale(1.1);
  transition: 1s;
}
</style>