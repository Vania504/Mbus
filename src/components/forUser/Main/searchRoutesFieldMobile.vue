<template>
  <v-row justify="center">
    <v-col>
      <v-autocomplete
        background-color="white"
        prepend-inner-icon="mdi-map-marker-outline"
        placeholder="Звідки"
        outlined
        dense
        class="rounded-t-lg"
        hide-details
      />
      <div
        style="
          background-color: white;
          width: 295px;
          height: 38px;
          margin-top: 0px!important;
          cursor: pointer;
          border-left: 2px solid silver;
          border-right: 2px solid silver;
        "
      >
        <img src="@/assets/img/reverseIcon.svg" style="transform: rotate(90deg);" class="mt-2" />
      </div>
      <v-autocomplete
        background-color="white"
        prepend-inner-icon="mdi-map-marker-outline"
        placeholder="Куди"
        outlined
        dense
        class="rounded-b-lg"
      />
      <v-btn
        style="margin-top: 13px"
        width="150px"
        height="38px"
        color="#085895"
        ><v-icon color="white">mdi-magnify</v-icon></v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>