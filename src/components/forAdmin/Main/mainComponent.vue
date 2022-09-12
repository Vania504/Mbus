<template>
  <v-row no-gutters>
    <navigation-drawer @selectedItem="setSelectedItem" />
    <v-col cols="10" :class="selectedItem ? 'px-0' : ''">
      <admin-main v-if="selectedItem == '0' || selectedItem == ''" @success="$emit('success')"/>
      <our-fleet-component v-if="selectedItem == '1'"/>
      <routes-component v-if="selectedItem == '2'"/>
      <messages-component  v-if="selectedItem == '3'"/>
    </v-col>
  </v-row>
</template>

<script>
import navigationDrawer from "@/components/forAdmin/Main/navigationDrawer";
import ourFleetComponent from "../ourFleet/ourFleetComponent.vue";
import routesComponent from "../Routes/routesComponent.vue";
import messagesComponent from "../Messages/messagesComponent.vue";
import adminMain from "./adminMain.vue";
export default {
  components: {
    ourFleetComponent,
    navigationDrawer,
    routesComponent,
    messagesComponent,
    adminMain,
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