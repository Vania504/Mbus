<template>
  <v-col>
    <v-row :justify="forAdmin ? 'start' : 'center'" class="mb-10">
      <div v-if="!routes" style="margin-top: 10%; margin-bottom: 10%">
        <span style="font-size: 32px"
          >За вказаним маршрутом нічого не знайдено!</span
        >
      </div>
      <routes-card
        v-else
        v-for="i in 9"
        :key="i"
        class="mt-5 mb-5"
        :forAdmin="forAdmin"
        @edit="$emit('edit')"
        @delete="$emit('delete')"
      />
      <card-add-new
        title="Новий маршрут"
        width="305px"
        height="305px"
        class="mt-5 mx-5"
        @addNew="$emit('addNew')"
      />
    </v-row>
  </v-col>
</template>

<script>
import routesCard from "./routesCard.vue";
import cardAddNew from "@/components/UI/cardAddNew.vue";
export default {
  components: {
    routesCard,
    cardAddNew,
  },
  props: {
    routes: {
      require: true,
    },
    forAdmin: {
      require: true,
    },
  },
};
</script>

<style>
</style>