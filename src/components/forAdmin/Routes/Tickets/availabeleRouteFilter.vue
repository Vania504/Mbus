<template>
  <v-card
    style="
      margin-top: 10px;
      padding: 10px 0px 20px 10px;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    "
    width="340px"
  >
    <v-row no-gutters align="center" justify="start">
      <span class="titleTicketFilter">Наявні маршрути</span>
      <v-row no-gutters justify="end">
        <v-btn
          text
          style="
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.1em;
            color: #085895;
            text-transform: none;
          "
          @click="choosedRoutes = []"
          >Очистити все</v-btn
        >
      </v-row>
    </v-row>
    <v-radio-group style="margin-top: 5px" multiple v-model="choosedRoutes">
      <v-radio color="#085895" value="all" label="Всі">
        <template v-slot:label>
          <span
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.1em;
              color: #243949;
            "
            >Всі</span
          >
        </template>
      </v-radio>
      <v-radio
        color="#085895"
        v-for="route in availableRoutes"
        :key="route.id"
        :value="route.id"
      >
        <template v-slot:label>
          <span
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.1em;
              color: #243949;
            "
            >{{ route.departure }} - {{ route.destination }}</span
          >
        </template>
      </v-radio>
    </v-radio-group>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    choosedRoutes: [],
  }),
  props: {
    availableRoutes: {
      require: true,
    },
  },
  watch: {
    choosedRoutes: {
      deep: true,
      handler() {
        this.$emit("choosedRoutes", this.choosedRoutes);
      },
    },
  },
};
</script>

<style>
</style>