<template>
  <v-dialog v-model="visibility" height="630px" width="80%">
    <v-card>
      <div style="height: 58px; background-color: #243949; align-self: center">
        <v-row justify="start" align="center" no-gutters class="pt-1 px-5"
          ><span style="font-size: 32px; color: white">Setra S 417 GT-HD</span>
          <v-row justify="end"
            ><v-icon large color="white" class="pointer" @click="$emit('close')"
              >mdi-close</v-icon
            ></v-row
          ></v-row
        >
      </div>
      <v-row no-gutters class="mt-5">
        <v-col cols="7" class="py-0">
          <swiper
            class="d-none d-lg-block pt-5 pb-5"
            :style="{
              '--swiper-navigation-color': '#000000',
            }"
            :options="swiperOption"
          >
            <swiper-slide v-for="i in 9" :key="i">
              <img width="580px" v-if="i !== 2" src="@/assets/img/busImg.svg" />
              <img width="580px" v-else src="@/assets/img/logoMBus.svg" />
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
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  src="@/assets/img/busServiceIcon/toiletIcon.svg"
                  class="mt-5 mr-5"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>Туалет</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  src="@/assets/img/busServiceIcon/coldIcon.svg"
                  class="mt-5 mr-5"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>Кондиціонер</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  src="@/assets/img/busServiceIcon/vipIcon.svg"
                  class="mt-5 mr-5"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>VIP місця</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  src="@/assets/img/busServiceIcon/coffeIcon.svg"
                  class="mt-5 mr-5"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>Кава</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  src="@/assets/img/busServiceIcon/seriesIcon.svg"
                  class="mt-5 mr-5"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>Телевізор</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  src="@/assets/img/busServiceIcon/electricOutletIcon.svg"
                  class="mt-5 mr-5"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>Електророзетки</span>
            </v-tooltip>
             <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  src="@/assets/img/busServiceIcon/wifiIcon.svg"
                  class="mt-5 mr-5"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>Wi-Fi</span>
            </v-tooltip>
             <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  src="@/assets/img/busServiceIcon/euro5Icon.svg"
                  class="mt-5 mr-5"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <span>Євро-5</span>
            </v-tooltip>
            <v-row align="center" class="mt-5 mr-5" no-gutters
              ><img src="@/assets/img/busServiceIcon/chairIcon.svg" /><span
                class="ml-3"
                >60<span class="drivingSeats">+2</span> місць</span
              ></v-row
            >
          </v-row>
          <v-divider style="color: #6b7c8a" class="mt-2 mb-2" />
          <p style="font-size: 16px">
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
      </v-row>
    </v-card></v-dialog
  >
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-loop-group",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
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