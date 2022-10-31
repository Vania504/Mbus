<template>
  <v-dialog v-model="visibility" height="630px">
    <v-card>
      <modal-header
        :title="bus.model"
        @close="$emit('close')"
        :showCloseIcon="true"
      />
      <v-row no-gutters class="mt-5">
        <v-col cols="7" class="py-0">
          <swiper
            class="d-none d-lg-block pt-5 pb-5"
            :style="{
              '--swiper-navigation-color': '#000000',
            }"
            :options="swiperOption"
          >
            <swiper-slide v-for="image in bus.images" :key="image.id">
              <img
                width="580px"
                height="400px;"
                :src="image.images.path"
                style="
                  object-fit: cover;
                  max-width: 100%;
                  max-height: 100%;
                  vertical-align: middle;
                "
              />
            </swiper-slide>
            <div
              class="swiper-button-prev ml-5"
              slot="button-prev"
              style="position: absolute; color: #4c5d6c"
            ></div>
            <div
              class="swiper-button-next mr-5"
              slot="button-next"
              style="position: absolute; color: #4c5d6c"
            ></div>
          </swiper>
        </v-col>
        <v-col cols="5" style="text-align: left">
          <span style="font-size: 20px" class="py-2">Сервіс</span>
          <v-divider style="color: #6b7c8a" class="mb-2" />
          <v-row no-gutters class="mb-5">
            <div v-for="item in service" :key="item.id">
              <v-tooltip bottom v-if="bus.options[item.key] == 1">
                <template v-slot:activator="{ on, attrs }">
                  <img
                    :src="require(`@/assets/img/busServiceIcon${item.img}`)"
                    class="mt-5 mr-5"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>{{ item.title }}</span>
              </v-tooltip>
            </div>
            <v-row align="center" class="mt-5 mr-5" no-gutters
              ><img src="@/assets/img/busServiceIcon/chairIcon.png" /><span
                class="ml-3"
                >{{ bus.seats }}<span class="drivingSeats">+2</span> місць</span
              ></v-row
            >
          </v-row>
          <v-divider style="color: #6b7c8a" class="mt-2 mb-2" />
          <p style="font-size: 16px">
            <span style="color: #085895">{{ bus.model }}</span>
            {{ bus.description }}
          </p>
        </v-col>
      </v-row>
    </v-card></v-dialog
  >
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import modalHeader from "@/components/UI/modalHeader";
export default {
  name: "swiper-example-loop-group",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
    modalHeader,
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    swiperMobileOption: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    swiperMediumOption: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    service: [
      {
        id: 1,
        img: "/toiletIcon.png",
        title: "Туалет",
        key: "toilet",
        enters: false,
      },
      {
        id: 2,
        img: "/coffeIcon.png",
        title: "Харчування",
        key: "supply",
        enters: false,
      },
      {
        id: 3,
        img: "/electricOutletIcon.png",
        title: "Розетки",
        key: "socket",
        enters: false,
      },
      {
        id: 4,
        img: "/coldIcon.png",
        title: "Клімат контроль",
        key: "climate",
        enters: true,
      },
      {
        id: 5,
        img: "/wifiIcon.png",
        title: "Wi-Fi",
        key: "wifi",
        enters: false,
      },
      {
        id: 6,
        img: "/seriesIcon.png",
        title: "Перегляд TV",
        key: "tv",
        enters: false,
      },
      {
        id: 7,
        img: "/vipIcon.png",
        title: "VIP",
        key: "vip",
        enters: false,
      },
      {
        id: 8,
        img: "/euro5Icon.png",
        title: "Екологічність",
        key: "ecology",
        enters: false,
      },
    ],
  }),
  props: {
    visible: {
      require: true,
    },
    bus: {
      require: true,
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
    },
  },
};
</script>

<style>
</style>