<template>
  <v-row justify="center">
    <v-col style="margin-left: 40px" class="px-0">
      <v-autocomplete
        background-color="white"
        prepend-inner-icon="mdi-map-marker-outline"
        placeholder="Звідки"
        outlined
        dense
        class="rounded-t-lg"
        hide-details
        :items="['Коломия', 'Івано-Франківськ']"
        v-model="start_route"
      />
      <v-autocomplete
        background-color="white"
        prepend-inner-icon="mdi-map-marker-outline"
        placeholder="Куди"
        outlined
        dense
        class="rounded-b-lg"
        :items="['Коломия', 'Івано-Франківськ']"
        v-model="end_route"
      />
      <v-btn
        style="margin-top: 13px"
        width="150px"
        height="30px"
        color="#085895"
        class="rounded-lg"
        ><v-icon color="white mr-2">mdi-magnify</v-icon
        ><span
          style="
            text-transform: none;
            color: white;
            font-weight: 400;
            font-size: 14px;
          "
          >Пошук</span
        ></v-btn
      >
    </v-col>
    <div
      style="
        background-color: transparent;
        width: 40px;
        height: 35px;
        margin-top: 0px !important;
        margin-top: 35px;
        cursor: pointer;
      "
      @click="reverseItem"
    >
      <img
        src="@/assets/img/reverseIcon.svg"
        style="transform: rotate(90deg)"
        class="mt-2"
      />
    </div>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    start_route: "",
    end_route: "",
  }),
  methods: {
    reverseItem() {
      let start_route = this.start_route;
      this.start_route = this.end_route;
      this.end_route = start_route;
    },
  },
};
</script>

<style>
</style>