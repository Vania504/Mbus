<template>
  <v-row no-gutters>
    <navigation-drawer @selectedItem="setSelectedItem" />
    <v-col
      cols="10"
      xl="10"
      lg="10"
      md="9"
      sm="12"
      :class="selectedItem ? 'px-0' : ''"
      :style="
        $vuetify.breakpoint.xl ? 'min-height: 1000px;' : 'min-height: 700px;'
      "
    >
      <loader v-if="loader" />
      <admin-main
        v-if="selectedItem == '0' || selectedItem == ''"
        v-show="!loader"
        @success="$emit('success')"
        @hideLoader="showLoader = false"
      />
      <our-fleet-component
        v-if="selectedItem == '1'"
        v-show="!loader"
        @hideLoader="showLoader = false"
      />
      <routes-component
        v-if="selectedItem == '2'"
        v-show="!loader"
        @hideLoader="showLoader = false"
      />
      <messages-component
        v-if="selectedItem == '3'"
        v-show="!loader"
        @hideLoader="showLoader = false"
      />
      <users-component
        v-if="selectedItem == '4'"
        v-show="!loader"
        @hideLoader="showLoader = false"
      />
    </v-col>
  </v-row>
</template>

<script>
import navigationDrawer from "@/components/forAdmin/Main/navigationDrawer";
import ourFleetComponent from "../ourFleet/ourFleetComponent.vue";
import routesComponent from "../Routes/routesComponent.vue";
import messagesComponent from "../Messages/messagesComponent.vue";
import adminMain from "./mainContent/adminMain.vue";
import Loader from "@/components/UI/Loader.vue";
import usersComponent from "../Users/usersComponent.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ourFleetComponent,
    navigationDrawer,
    routesComponent,
    messagesComponent,
    adminMain,
    Loader,
    usersComponent,
  },
  data: () => ({
    selectedItem: "",
    showLoader: true,
  }),
  methods: {
    ...mapActions(["updateLoader"]),
    setSelectedItem(selectedItem) {
      if (selectedItem !== undefined) {
        this.selectedItem = selectedItem;
        this.updateLoader(true);
      } else {
        this.selectedItem = "";
      }
    },
  },
  computed: {
    ...mapGetters(["loader"]),
  },
};
</script>

<style>
</style>