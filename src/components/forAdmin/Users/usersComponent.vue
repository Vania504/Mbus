<template>
  <v-card>
    <v-col style="text-align: left; padding: 20px">
      <p class="sectionName" style="padding: 0px; margin: 0px">Користувачі</p>
    </v-col>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    this.updateLoader(false);
  },
  methods: {
    ...mapActions(["updateLoader"]),
  },
};
</script>

<style>
</style>