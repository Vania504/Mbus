<template>
  <div>
    <v-col cols="12" lg="10" md="10" sm="10" xl="10" :class="$vuetify.breakpoint.xs ? 'px-0' : 'px-0 ml-15'">
      <p style="color: #243949; font-size: 32px; text-align: left">
        Контакти
      </p>
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
          <span style="color: #085895; font-size: 20px">Зателефонуйте нам:</span
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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>