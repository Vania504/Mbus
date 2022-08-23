<template>
  <v-container>
    <v-row justify="start" class="mt-15" no-gutters>
      <v-col cols="4" class="px-0">
        <h2 style="color: #243949; font-size: 32px; text-align: left">
          Контакти
        </h2>
        <v-row no-gutters align="start" class="mt-10">
          <v-icon large color="#085895">mdi-email-outline</v-icon>
          <v-col cols="8" style="text-align: left" class="ml-2">
            <span style="color: #085895; font-size: 20px">Email</span><br />
            <span>mbus@gmail.com</span>
          </v-col>
        </v-row>
        <v-row no-gutters align="start" class="mt-3 mb-3">
          <v-icon large color="#085895">mdi-email-outline</v-icon>
          <v-col cols="8" style="text-align: left" class="ml-2">
            <span style="color: #085895; font-size: 20px"
              >Зателефонуйте нам:</span
            ><br />
            <span>+38 (098) 000-99-99</span>
          </v-col>
        </v-row>
        <v-row no-gutters align="start">
          <v-icon large color="#085895">mdi-map-marker-radius</v-icon>
          <v-col cols="10" style="text-align: left" class="ml-2">
            <span style="color: #085895; font-size: 20px"
              >Місце розташування офісу:</span
            ><br />
            <span
              >Україна, Івано-Франківська обл., м. Коломия, вул. Якогось Там,
              11</span
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="7">
        <main-contact-form />
      </v-col> </v-row
  ></v-container>
</template>

<script>
import mainContactForm from "./mainContactForm.vue";
export default {
  components: {
    mainContactForm,
  },
};
</script>

<style>
</style>