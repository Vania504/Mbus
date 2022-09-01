<template>
  <div class="mainBackground">
    <h1 class="mainText" :style="$vuetify.breakpoint.xs ? 'padding-top: 80px;' : ''">Подорожуйте разом з нами!</h1>
    <v-row :justify="$vuetify.breakpoint.xs ? 'center' : 'start'" align="center">
      <v-col cols="1" class="px-0" v-if="!$vuetify.breakpoint.xs">
        <v-row
          justify="start"
          no-gutters
          class="ml-5"
          v-for="item in socialNetworks"
          :key="item.id"
        >
          <a :href="item.link" :class="item.icon ? 'mb-2' : ''"
            ><v-icon v-if="item.icon" color="black">{{ item.icon }}</v-icon>
            <img
              width="24px"
              height="20px"
              v-if="item.img == 'viber'"
              src="@/assets/img/viberIconBlack.svg"
              alt="viber"
              class="mb-1 mt-1"
            />
            <img
              width="20px"
              height="18px"
              v-if="item.img == 'telegram'"
              src="@/assets/img/telegramIconBlack.svg"
              alt="telegram"
              class="mb-1"
            />
          </a>
        </v-row>
      </v-col>
      <v-col cols="10" style="margin-top: 30px">
        <h4 class="searchRoutes">Пошук автобусних рейсів:</h4>
        <search-routes-field-mobile v-if="$vuetify.breakpoint.xs" />
        <v-row justify="center" v-else>
          <v-col cols="2" class="px-0">
            <v-autocomplete
              background-color="white"
              prepend-inner-icon="mdi-map-marker-outline"
              placeholder="Звідки"
              outlined
              dense
              class="rounded-l-lg"
            />
          </v-col>
          <div
            style="
              background-color: white;
              width: 34px;
              height: 38px;
              margin-top: 13px;
              cursor: pointer;
            "
          >
            <img src="@/assets/img/reverseIcon.svg" class="mt-2" />
          </div>
          <v-col cols="2" class="px-0">
            <v-autocomplete
              background-color="white"
              prepend-inner-icon="mdi-map-marker-outline"
              placeholder="Куди"
              outlined
              dense
              class="rounded-r-lg"
            />
          </v-col>
          <v-btn
            style="margin-left: 20px; margin-top: 13px"
            width="80px"
            height="38px"
            color="#085895"
            ><v-icon color="white">mdi-magnify</v-icon></v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import searchRoutesFieldMobile from "./searchRoutesFieldMobile.vue";
export default {
  components: {
    searchRoutesFieldMobile,
  },
  data: () => ({
    socialNetworks: [
      {
        id: 1,
        icon: "mdi-instagram",
        link: "https://www.instagram.com/",
      },
      {
        id: 2,
        icon: "mdi-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: 3,
        img: "viber",
        link: "https://www.viber.com/ua/",
      },
      {
        id: 4,
        img: "telegram",
        link: "https://web.telegram.org/k/",
      },
      {
        id: 5,
        icon: "mdi-whatsapp",
        link: "https://www.whatsapp.com/?lang=uk",
      },
    ],
  }),
};
</script>

<style>
.mainBackground {
  height: 700px;
  background-image: url("@/assets/img/temporaryBackground.svg");
  text-align: center;
  width: 100%;
}
.mainText {
  font-weight: 400;
  font-size: 40px;
  letter-spacing: 0.1em;
  color: #243949;
  padding-top: 180px;
}
.searchRoutes {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.1em;
  color: #243949;
  margin-bottom: 20px;
}
</style>