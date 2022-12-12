<template>
  <v-col>
    <v-row no-gutters align="center">
      <span
        style="
          font-weight: 500;
          font-size: 20px;
          line-height: 23px;
          letter-spacing: 0.1em;
          color: #243949;
        "
      >
        Зручності
      </span>
      <v-row no-gutters justify="end">
        <v-btn
          text
          style="
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.1em;
            color: #085895;
            text-transform: none;
          "
          @click="clearAll"
          >Очистити все</v-btn
        >
      </v-row>
    </v-row>
    <div :key="key">
      <filterRow
        v-for="service in services"
        :key="service.id"
        :service="service"
        @chose="setEntersForService"
      />
    </div>
  </v-col>
</template>

<script>
import filterRow from "./filterRow.vue";
export default {
  components: { filterRow },
  data: () => ({
    key: 0,
    services: [
      {
        id: 3,
        img: "/electricOutletIcon.png",
        title: "Розетки для пасажирів",
        key: "socket",
        enters: false,
      },
      {
        id: 1,
        img: "/toiletIcon.png",
        title: "Обладнані туалетами",
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
        id: 6,
        img: "/seriesIcon.png",
        title: "Перегляд TV",
        key: "tv",
        enters: false,
      },
      {
        id: 8,
        img: "/euro5Icon.png",
        title: "Екологічність",
        key: "ecology",
        enters: false,
      },
      {
        id: 5,
        img: "/wifiIcon.png",
        title: "Безкоштовний Wi-Fi",
        key: "wifi",
        enters: false,
      },
      {
        id: 4,
        img: "/coldIcon.png",
        title: "Кондиціонер",
        key: "climate",
        enters: true,
      },
    ],
  }),
  methods: {
    setEntersForService(id) {
      let serviceIndex = this.services.findIndex((service) => service.id == id);
      this.services[serviceIndex].enters = true;
    },
    clearAll() {
      this.services.forEach((service) => (service.enters = false));
      this.key++;
    },
  },
};
</script>

<style>
</style>