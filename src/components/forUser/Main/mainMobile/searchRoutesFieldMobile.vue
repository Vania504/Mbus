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
      />
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
export default {};
</script>

<style>
</style>