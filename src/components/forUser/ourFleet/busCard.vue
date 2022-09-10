<template>
  <v-card class="mx-1 mb-10" :width="forAdmin ? '350px' : '405px'">
    <div
      class="hover"
      :style="{
        width: +forAdmin ? '350px' : '405px',
        height: +forAdmin ? '265px' : '300px',
      }"
      v-if="isHover"
      @mouseleave="isHover = false"
    >
      <v-row justify="center">
        <v-btn
          v-if="!forAdmin"
          outlined
          style="margin-top: 130px"
          color="white"
          @click="$emit('detailInfo', bus.id)"
          >Детальніше</v-btn
        >
        <v-col v-else style="margin-top: 81px">
          <v-btn
            outlined
            color="white"
            width="156px"
            @click="$emit('edit', bus.id)"
            >Редагувати</v-btn
          >
          <br />
          <v-btn
            outlined
            class="mt-5 yellow--text"
            color="white"
            width="156px"
            @click="$emit('delete')"
            >Видалити</v-btn
          >
        </v-col>
      </v-row>
    </div>
    <div style="height: 300px; align-self: center">
      <div
        style="overflow: hidden; transition: all 0.3s ease-out; width: 100%"
        :style="'max-width: ' + forAdmin ? '350px' : '405px'"
        @mousemove="isHover = true"
      >
        <img
          v-if="bus.images"
          :width="forAdmin ? '350px' : '405px'"
          height="300px"
          :class="isHover ? 'busImg' : ''"
          style="
            width: 100%;
            height: 100%;
            max-height: 300px;
            transition: 1s;
            object-fit: cover;
          "
          :src="bus.images[0].images.path"
        />
        <img
          v-else
          :width="forAdmin ? '350px' : '405px'"
          height="300px"
          :class="isHover ? 'busImg' : ''"
          style="
            width: 100%;
            height: 100%;
            max-height: 300px;
            transition: 1s;
            object-fit: cover;
          "
          :src="''"
        />
      </div>
    </div>
    <v-divider
      style="margin-left: 80px"
      color="#4C5D6C"
      width="200px"
      class="mt-2"
    />
    <v-col class="px-5 py-5">
      <v-row align="center"
        ><img src="@/assets/img/busServiceIcon/busIcon.svg" /><span
          class="ml-3"
          >{{ bus.model }}</span
        ></v-row
      >
      <v-row align="center" class="mt-5"
        ><img src="@/assets/img/busServiceIcon/chairIcon.svg" /><span
          class="ml-3"
          >{{ bus.seats }}<span class="drivingSeats">+2</span> місць</span
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
  props: {
    forAdmin: {
      require: true,
    },
    bus: {
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
  border: thin solid white;
}
</style>