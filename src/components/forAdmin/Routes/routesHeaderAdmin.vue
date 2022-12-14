<template>
  <v-card height="60px" style="padding: 20px">
    <v-row no-gutters align="center">
      <span
        class="pointer"
        :class="activeCategory == 0 ? 'activeCategory' : 'inActiveCategory'"
        @click="(activeCategory = 0), $emit('setActiveCategory', 0)"
        >Маршрути</span
      >
      <span
        class="pointer"
        :class="activeCategory == 1 ? 'activeCategory' : 'inActiveCategory'"
        @click="(activeCategory = 1), $emit('setActiveCategory', 1)"
        >Квитки на маршрути</span
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    activeCategory: 0,
  }),
};
</script>

<style>
.inActiveCategory {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #243949;
  margin-right: 35px;
}
.activeCategory {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #085895;
  margin-right: 35px;
}
</style>