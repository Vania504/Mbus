<template>
  <v-col>
    <v-row justify="center" class="mb-10">
      <div v-if="!routes" style="margin-top: 10%; margin-bottom: 10%">
        <span style="font-size: 32px"
          >За вказаним маршрутом нічого не знайдено!</span
        >
      </div>
      <routes-card v-else v-for="i in 9" :key="i" class="mt-10" />
    </v-row>
  </v-col>
</template>

<script>
import routesCard from "./routesCard.vue";
export default {
  components: {
    routesCard,
  },
  props: {
    routes: {
      require: true,
    },
  },
};
</script>

<style>
</style>