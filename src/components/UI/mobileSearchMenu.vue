<template>
  <v-menu left offset-y width="100%" :close-on-content-click="isClose">
    <template v-slot:activator="{ on, attrs }">
      <div
        style="
        width: 100%
          height: 60px;
          background: rgba(8, 88, 149, 0.1);
          border-radius: 10px;
          padding: 10px 20px 10px 20px;
        "
      >
        <v-row no-gutters align="center">
          <v-icon large style="margin-right: 20px">mdi-magnify</v-icon>
          <v-col cols="6">
            <span
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.1em;
                color: #243949;
              "
              >Гдиня - Чернівці</span
            ><br />
            <span
              style="
                font-weight: 500;
                font-size: 10px;
                line-height: 12px;
                letter-spacing: 0.1em;
                color: #4c5d6c;
              "
              >пн. 14 лист, 1 пасажир</span
            >
          </v-col>
          <v-row no-gutters justify="end" align="center">
            <v-icon v-bind="attrs" v-on="on" @click="isClose = false">
              mdi-pencil</v-icon
            >
          </v-row>
        </v-row>
      </div>
    </template>
    <v-card width="100%" style="padding: 30px">
      <search-routes-field-mobile />
    </v-card>
  </v-menu>
</template>

<script>
import searchRoutesFieldMobile from "../forUser/Main/mainMobile/searchRoutesFieldMobile.vue";
export default {
  components: { searchRoutesFieldMobile },
  data: () => ({
    isClose: false,
  }),
};
</script>

<style>
</style>