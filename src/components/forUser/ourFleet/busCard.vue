<template>
  <div>
    <v-card class="mx-1 mb-10" :width="forAdmin ? '350px' : '405px'">
      <div
        @mousemove="isHover = true"
        v-if="forAdmin && bus.status == 'Archive'"
        class="archiveBus"
      ></div>
      <div
        class="hover"
        :style="{
          width: forAdmin ? '350px' : '405px',
          height: forAdmin ? '287px' : '287px',
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
              v-if="bus.status == 'Active'"
              outlined
              class="mt-5 yellow--text"
              color="white"
              width="156px"
              @click="changeStatusBus('Archive')"
              >Архівувати</v-btn
            >
            <v-btn
              v-if="bus.status == 'Archive'"
              outlined
              class="mt-5 yellow--text"
              color="white"
              width="156px"
              @click="changeStatusBus('Active')"
              >Розархівувати</v-btn
            >
          </v-col>
        </v-row>
      </div>
      <div
        style="height: 300px; align-self: center"
        @mousemove="isHover = true"
      >
        <div
          style="overflow: hidden; transition: all 0.3s ease-out; width: 100%"
          :style="'max-width: ' + forAdmin ? '350px' : '405px'"
        >
          <div v-if="bus.images">
            <img
              v-if="bus.images.length > 0 && bus.images[0].images"
              :width="forAdmin ? '350px' : '405px'"
              height="280px"
              :class="isHover ? 'busImg' : ''"
              style="
                width: 100%;
                height: 100%;
                max-height: 280px;
                min-height: 280px;
                transition: 1s;
                object-fit: cover;   
              "
              :src="bus.images[0].images.path"
            />
            <img
              v-else
              :width="forAdmin ? '350px' : '405px'"
              height="280px"
              :class="isHover ? 'busImg' : ''"
              style="
                width: 100%;
                height: 100%;
                min-height: 280px;
                max-height: 280px; 
                transition: 1s; 
                object-fit: cover;
              "
              src="@/assets/img/defaulBusImg.jpg"
            />
          </div>
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
          ><img src="@/assets/img/busServiceIcon/busIcon.png" /><span
            class="ml-3"
            >{{ bus.model }}</span
          ></v-row
        >
        <v-row align="center" class="mt-5"
          ><img src="@/assets/img/busServiceIcon/chairIcon.png" /><span
            class="ml-3"
            >{{ bus.seats }}<span class="drivingSeats">+2</span> місць</span
          ></v-row
        >
      </v-col>
    </v-card>
  </div>
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
  methods: {
    changeStatusBus(status) {
      this.$emit("changeStatusBus", this.bus, status);
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
.archiveBus {
  background-color: rgb(200, 200, 200, 0.3);
  position: absolute;
  z-index: 10;
  width: 351px;
  height: 405px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>