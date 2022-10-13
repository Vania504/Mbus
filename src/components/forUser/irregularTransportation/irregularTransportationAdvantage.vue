<template>
  <v-row align="center" justify="center">
    <v-col v-if="$vuetify.breakpoint.xs" cols="6">
      <v-col cols="12" v-for="item in advantageList" :key="item.id">
        <img :src="require(`@/assets/img/busServiceIcon/${item.icon}`)" />
        <p>{{ item.title }}</p>
      </v-col>
    </v-col>
    <v-col v-else cols="2" v-for="item in advantageList" :key="item.id">
      <img :src="require(`@/assets/img/busServiceIcon/${item.icon}`)" />
      <p>{{ item.title }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    advantageList: [
      {
        id: 1,
        title: "Комфотна подорож",
        icon: "comfortIcon.png",
      },
      {
        id: 2,
        title: "Сучасні автобуси",
        icon: "irregularTransportationBusIcon.png",
      },
      {
        id: 3,
        title: "Індивідуальний підхід",
        icon: "individualIcon.png",
      },
      {
        id: 4,
        title: "Привітні та досвідчені водії",
        icon: "driverIcon.png",
      },
    ],
  }),
};
</script>

<style>
</style>