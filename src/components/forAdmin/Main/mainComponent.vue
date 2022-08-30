<template>
  <v-row no-gutters>
    <navigation-drawer @selectedItem="setSelectedItem" />
    <v-col cols="10" class="ml-2">
      <our-fleet-component v-if="selectedItem == '1'"/>
    </v-col>
  </v-row>
</template>

<script>
import navigationDrawer from "@/components/forAdmin/Main/navigationDrawer";
import ourFleetComponent from "../ourFleet/ourFleetComponent.vue";
export default {
  components: {
    ourFleetComponent,
    navigationDrawer,
  },
  data: () => ({
    selectedItem: "",
  }),
  methods: {
    setSelectedItem(selectedItem) {
      this.selectedItem = selectedItem;
    },
  },
};
</script>

<style>
</style>