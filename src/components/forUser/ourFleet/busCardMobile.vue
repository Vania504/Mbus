<template>
  <v-card
    class="mx-5 mb-10"
    :max-width="forAdmin ? '350px' : '401px'"
    style="background-color: #f8f8f8"
  >
    <v-row no-gutters align="start">
      <v-col cols="6" class="py-0">
        <img
          :width="forAdmin ? '180px' : '180px'"
          height="160px"
          :class="isHover ? 'busImg' : ''"
          src="@/assets/img/busImg.svg"
        />
      </v-col>
      <v-col cols="5" class="ml-1">
        <v-divider
          style="margin-left: 40px"
          color="#4C5D6C"
          width="100px"
          class="mt-2"
        />
        <v-col>
          <v-row align="center" no-gutters
            ><img
              src="@/assets/img/busServiceIcon/busIcon.svg"
              width="20px"
              height="20px"
            />
            <v-col cols="10" class="py-0">
              <span style="font-size: 16px; text-align: left"
                >Setra S 417 GT-HD</span
              >
            </v-col>
          </v-row>
          <v-row align="center" class="mt-1" no-gutters
            ><img
              src="@/assets/img/busServiceIcon/chairIcon.svg"
              width="20px"
              height="20px"
            />
            <v-col cols="10" class="py-0">
              <span class="ml-1" style="font-size: 16px"
                >60<span class="drivingSeats">+2</span> місць</span
              >
            </v-col>
          </v-row>
          <v-btn
            class="mt-5"
            height="25px"
            width="150px"
            outlined
            dense
            color="black"
            @click="$emit('detailInfo')"
            >Детальніше</v-btn
          >
        </v-col>
      </v-col>
    </v-row>
  </v-card>
</template>
  
  <script>
export default {
  data: () => ({
    isHover: false,
  }),
  props: {
    forAdmin: {
      require: true,
    },
  },
};
</script>
  
  <style scoped>
.hover {
  background: linear-gradient(
    0deg,
    rgba(18, 43, 62, 0.4),
    rgba(18, 43, 62, 0.4)
  );
  height: 300px;
  position: absolute;
  z-index: 10;
}
.busImg {
  transform: scale(1.1);
  transition: 1s;
}
.v-btn--outlined {
  border: thin solid #085895;
  background-color: white;
}
</style>