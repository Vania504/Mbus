<template>
  <v-main>
    <v-container>
      <ticket-search-component />
    </v-container>
  </v-main>
</template>

<script>
import ticketSearchComponent from "@/components/forUser/ticketSearch/ticketSearchComponent.vue";
export default {
  components: {
    ticketSearchComponent,
  },
};
</script>

<style>
</style>