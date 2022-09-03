<template>
  <v-dialog v-model="visibility" height="630px" width="90%">
    <v-card>
      <modal-header title="Setra S 417 GT-HD" @close="$emit('close')" />
      <v-col class="px-0">
        <v-col class="py-0 px-0">
          <swiper
            :style="{
              '--swiper-navigation-color': '#000000',
            }"
            :options="swiperMobileOption"
          >
            <swiper-slide v-for="i in 9" :key="i">
              <img
                width="300px"
                height="210px"
                v-if="i !== 2"
                src="@/assets/img/busImg.svg"
              />
              <img
                width="300px"
                height="210px"
                v-else
                src="@/assets/img/logoMBus.svg"
              />
            </swiper-slide>
            <div
              class="swiper-button-prev ml-1"
              slot="button-prev"
              style="position: absolute; color: #4c5d6c"
            ></div>
            <div
              class="swiper-button-next mr-1"
              slot="button-next"
              style="position: absolute; color: #4c5d6c"
            ></div>
          </swiper>
        </v-col>
        <v-col style="text-align: left">
          <span style="font-size: 20px" class="py-2">Сервіс</span>
          <v-divider style="color: #6b7c8a" class="mb-2" />
          <v-row no-gutters class="mb-5" justify="center">
            <v-tooltip bottom v-for="item in service" :key="item.id">
              <template v-slot:activator="{ on, attrs }">
                <img
                  :src="require(`@/assets/img/busServiceIcon${item.img}`)"
                  class="mt-5 mr-3"
                  v-bind="attrs"
                  v-on="on"
                  width="25px"
                  height="30px"
                />
              </template>
              <span>{{ item.title }}</span>
            </v-tooltip>
            <v-row align="center" class="mt-5 mr-5" no-gutters
              ><img
                width="25px"
                height="30px"
                src="@/assets/img/busServiceIcon/chairIcon.svg"
              /><span class="ml-3"
                >60<span class="drivingSeats">+2</span> місць</span
              ></v-row
            >
          </v-row>
          <v-divider style="color: #6b7c8a" class="mt-2 mb-2" />
          <p
            style="
              font-size: 14px;
              line-height: 16px;
              text-align: justify;
              letter-spacing: 0.1em;
              color: black;
            "
          >
            <span style="color: #085895">Setra S 417 GT-HD.</span> Усі
            міжнародні маршрути компанії обслуговуються флагманськими автобусами
            марки Setra та Neoplan, які мають ергономічні регульовані крісла,
            систему кондиціонування, обладнані телевізорами і сучасною
            аудіосистемою.<br /><br />
            Все це дозволить провести поїздку максимально комфортно у приємній
            атмосфері. Також у розпорядженні пасажирів є містке багажне
            відділення.
          </p>
        </v-col>
      </v-col>
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
    service: [
      {
        id: 1,
        img: "/toiletIcon.svg",
        title: "Туалет",
        enters: false,
      },
      {
        id: 2,
        img: "/coffeIcon.svg",
        title: "Харчування",
        enters: false,
      },
      {
        id: 3,
        img: "/electricOutletIcon.svg",
        title: "Розетки",
        enters: false,
      },
      {
        id: 4,
        img: "/coldIcon.svg",
        title: "Клімат контроль",
        enters: true,
      },
      {
        id: 5,
        img: "/wifiIcon.svg",
        title: "Wi-Fi",
        enters: false,
      },
      {
        id: 6,
        img: "/seriesIcon.svg",
        title: "Перегляд TV",
        enters: false,
      },
      {
        id: 7,
        img: "/vipIcon.svg",
        title: "VIP",
        enters: false,
      },
      {
        id: 8,
        img: "/euro5Icon.svg",
        title: "Екологічність",
        enters: false,
      },
    ],
    swiperMobileOption: {
      slidesPerView: 1,
      spaceBetween: 50,
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
  }),
  props: {
    visible: {
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