<template>
  <div style="height: 100vh;">
    <v-row>
      <v-col cols="4">
        <filters-list />
      </v-col>
      <v-col cols="8">
        
      </v-col>
    </v-row>
  </div>
</template>

<script>
import filtersList from "./filtersList.vue";
export default {
  components: { filtersList },
};
</script>

<style>
</style>