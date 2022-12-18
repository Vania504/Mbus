<template>
  <v-main>
    <v-container>
      <ticket-search-component :filtersListArray="filtersList" />
    </v-container>
  </v-main>
</template>

<script>
import ticketSearchComponent from "@/components/forUser/ticketSearch/ticketSearchComponent.vue";
export default {
  components: {
    ticketSearchComponent,
  },
  props: {
    filtersList: {
      require: false,
    },
  },
};
</script>

<style>
</style>