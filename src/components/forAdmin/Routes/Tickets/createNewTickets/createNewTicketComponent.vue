<template>
  <v-col style="text-align: left">
    <v-row no-gutters align="center" class="pointer" @click="$emit('back')">
      <v-icon color="black">mdi-menu-left</v-icon>&nbsp;<span
        style="
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.1em;
          color: #243949;
        "
        >Назад</span
      >
    </v-row>
    <basic-data />
    <seats-in-bus />
    <additional-information />
    <v-row no-gutters justify="center">
      <v-btn
        width="200px"
        height="43px"
        dense
        color="#085895"
        style="
          border-radius: 10px;
          color: white;
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          letter-spacing: 0.1em;
          text-transform: none;
        "
      >
        Створити
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
import basicData from "./basicData.vue";
import SeatsInBus from "./seatsInBus.vue";
import additionalInformation from "./additionalInformation.vue";
export default {
  components: { basicData, SeatsInBus, additionalInformation },
};
</script>

<style>
.sectionName {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #085895;
}
.sectionCard {
  padding: 20px;
}
</style>