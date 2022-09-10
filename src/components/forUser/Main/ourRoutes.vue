<template>
  <v-container class="mt-8">
    <v-row no-gutters class="mb-2" justify="center">
      <v-col cols="9" class="pa-0"
        ><span :class="$vuetify.breakpoint.xs ? 'mainTitleMobile' : 'mainTitle'"
          >Наші маршрути</span
        ></v-col
      >
    </v-row>
    <v-row
      v-if="!$vuetify.breakpoint.xs"
      no-gutters
      class="mb-2 text-center"
      justify="center"
      style="font-weight: 500; font-size: 16px; color: #4c5d6c"
    >
      <v-col cols="9" class="pa-0"
        >Ми виконуємо регулярні автобусні перевезення пасажирві по наступних
        напрямках:</v-col
      >
    </v-row>
    <swiper
      v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
      class="pt-5 pb-5"
      :style="{
        '--swiper-navigation-color': '#000000',
      }"
      :options="swiperOption"
    >
      <swiper-slide v-for="route in routes" :key="route.id">
        <v-row no-gutters justify="center">
          <routes-card :route="route"/>
        </v-row>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <swiper
      v-if="$vuetify.breakpoint.sm"
      class="d-none d-lg-block pt-5 pb-5"
      :style="{
        '--swiper-navigation-color': '#000000',
      }"
      :options="swiperMediumOption"
    >
      <swiper-slide v-for="route in routes" :key="route.id">
        <routes-card :route="route"/>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <swiper
      class="swiper d-block d-md-none"
      :style="{
        '--swiper-navigation-color': '#000000',
      }"
      :options="swiperMobileOption"
    >
      <swiper-slide v-for="route in routes" :key="route.id">
        <routes-card :route="route" />
      </swiper-slide>
    </swiper>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import routesCard from "../Routes/routesCard.vue";
import routesService from "@/requests/admin/routesService";
export default {
  name: "swiper-example-loop-group",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
    routesCard,
  },
  data() {
    return {
      indexItem: 0,
      routes: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 3,
        loop: false,
        loopFillGroupWithBlank: false,
        lazy: true,
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
        slidesPerView: 2,
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
      swiperMediumOption: {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerGroup: 2,
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
    };
  },
  mounted() {
    this.getRoutes();
  },
  methods: {
    async getRoutes() {
      let response = await routesService.getRoutesForMain();
      this.routes = response.data;
    },
  },
};
</script>

<style scoped>
.swiper-slide {
  text-align: center;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 30px;
}
</style>