<template>
  <v-footer color="#122B3E" :height="$vuetify.breakpoint.xs ? '' : '223px'">
    <v-row justify="start" v-if="!$vuetify.breakpoint.xs">
      <v-col style="text-align: left">
        <img width="136px" height="90px" src="@/assets/img/logoMBus.svg" alt="logo" />
      </v-col>
      <v-col class="white--text" style="text-align: left">
        <span>ТЕЛЕФОНИ ДИСПЕТЧЕРІВ</span>
        <v-row align="center" no-gutters v-for="item in phoneNumbers" :key="item.id" class="mt-2">
          <v-icon small color="white" class="mr-2">mdi-phone</v-icon>
          <span> <a :href="`tel: ${item.number}`" style="text-decoration: none; color: white">
              {{ item.number }}</a></span>
          <img v-if="item.type == 'UA'" src="@/assets/img/UA.svg" class="ml-2" />
          <img v-if="item.type == 'PL'" src="@/assets/img/PL.svg" class="ml-2" />
        </v-row>
      </v-col>
      <v-col class="white--text" style="text-align: left">
        <span>КОНТАКТНА ІНФОРМАЦІЯ</span>
        <v-row no-gutters align="center" class="mt-2 mb-2">
          <v-icon color="white" small class="mr-2">mdi-email</v-icon><span> <a :href="`mailto:mbus.kolomyia@gmail.com`"
              style="text-decoration: none; color: white">
              mbus.kolomyia@gmail.com
            </a></span>
        </v-row>
        <v-row no-gutters align="center">
          <v-icon color="white" small class="mr-2">mdi-map-marker-radius</v-icon>
          <v-col cols="10">
            <span>Україна, Івано-Франківська обл., м. Коломия</span>
          </v-col>
        </v-row>
      </v-col>
      <v-col style="text-align: left" class="white--text">
        <span>СОЦІАЛЬНІ МЕРЕЖІ</span>
        <v-row no-gutters class="mt-2" align="start">
          <a v-for="item in socialNetworks" :key="item.id" :href="item.value" target="_blank" class="mr-2">
            <v-icon v-if="item.social_network == 'Instagram'" color="white">mdi-instagram</v-icon>
            <v-icon v-if="item.social_network == 'Facebook'" color="white">mdi-facebook</v-icon>
            <v-icon v-if="item.social_network == 'Whatsapp'" color="white">mdi-whatsapp</v-icon>
            <v-icon v-if="item.social_network == 'Twitter'" color="white">mdi-twitter</v-icon>
            <img width="24px" height="20px" v-if="item.social_network == 'Viber'" src="@/assets/img/viberIcon.svg"
              alt="viber" class="mb-1 mt-1" />
            <img width="24px" height="18px" v-if="item.social_network == 'Telegram'" src="@/assets/img/telegramIcon.svg"
              alt="telegram" class="mt-1" />
          </a>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="pt-2 pb-15" v-else>
      <v-col>
        <img width="80px" height="60px" src="@/assets/img/logoMBus.svg" alt="logo" />
        <v-col style="text-align: center" class="white--text">
          <span>СОЦІАЛЬНІ МЕРЕЖІ</span>
          <v-row no-gutters class="mt-2" align="start" justify="center">
            <a v-for="item in socialNetworks" :key="item.id" :href="item.value" target="_blank" class="mr-2">
              <v-icon v-if="item.social_network == 'Instagram'" color="white">mdi-instagram</v-icon>
              <v-icon v-if="item.social_network == 'Facebook'" color="white">mdi-facebook</v-icon>
              <v-icon v-if="item.social_network == 'Whatsapp'" color="white">mdi-whatsapp</v-icon>
              <v-icon v-if="item.social_network == 'Twitter'" color="white">mdi-twitter</v-icon>
              <img width="24px" height="20px" v-if="item.social_network == 'Viber'" src="@/assets/img/viberIcon.svg"
                alt="viber" class="mb-1 mt-1" />
              <img width="24px" height="18px" v-if="item.social_network == 'Telegram'"
                src="@/assets/img/telegramIcon.svg" alt="telegram" class="mt-1" />
            </a>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import settingsService from "@/requests/admin/settingsService";
import parsePhoneNumber from 'libphonenumber-js';
import { mapActions } from "vuex";
export default {
  name: "appFooter",
  data: () => ({
    phoneNumbers: [],
    socialNetworks: [],
  }),
  mounted() {
    this.getSocialNetwork();
    this.getPhoneNumbers();
  },
  methods: {
    ...mapActions(['updatePhoneNumbers']),
    async getSocialNetwork() {
      let response = await settingsService.getSettingList("socials");
      this.socialNetworks = response.data;
    },
    async getPhoneNumbers() {
      let response = await settingsService.getSettingList("contact");
      response.data.forEach((number) => {
        this.phoneNumbers.push({
          id: number.id,
          number: number.value,
          type: parsePhoneNumber(number.value, 'US').country
        })
      })
      this.updatePhoneNumbers(this.phoneNumbers);
    }
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
</style>