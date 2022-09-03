<template>
  <v-footer color="#122B3E" :height="$vuetify.breakpoint.xs ? '' : '223px'">
    <v-row justify="start" v-if="!$vuetify.breakpoint.xs">
      <v-col style="text-align: left">
        <img
          width="136px"
          height="90px"
          src="@/assets/img/logoMBus.svg"
          alt="logo"
        />
      </v-col>
      <v-col class="white--text" style="text-align: left">
        <span>ТЕЛЕФОНИ ДИСПЕТЧЕРІВ</span>
        <v-row
          align="center"
          no-gutters
          v-for="item in phoneNumbers"
          :key="item.id"
          class="mt-2"
        >
          <v-icon small color="white" class="mr-2">mdi-phone</v-icon>
          <span>{{ item.number }}</span>
          <img
            v-if="item.type == 'UA'"
            src="@/assets/img/UA.svg"
            class="ml-2"
          />
          <img v-else src="@/assets/img/PL.svg" class="ml-2" />
        </v-row>
      </v-col>
      <v-col class="white--text" style="text-align: left">
        <span>КОНТАКТНА ІНФОРМАЦІЯ</span>
        <v-row no-gutters align="center" class="mt-2 mb-2"
          ><v-icon color="white" small class="mr-2">mdi-email</v-icon
          ><span>mbus@gmail.com</span></v-row
        >
        <v-row no-gutters align="center"
          ><v-icon color="white" small class="mr-2"
            >mdi-map-marker-radius</v-icon
          >
          <v-col cols="10">
            <span
              >Україна, Івано-Франківська обл., м. Коломия, вул. Якогось Там,
              11</span
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col style="text-align: left" class="white--text">
        <span>СОЦІАЛЬНІ МЕРЕЖІ</span>
        <v-row no-gutters class="mt-2" align="start">
          <a
            v-for="item in socialNetworks"
            :key="item.id"
            :href="item.link"
            class="mr-2"
            ><v-icon v-if="item.icon" color="white">{{ item.icon }}</v-icon>
            <img
              width="24px"
              height="24.84px"
              v-if="item.img == 'viber'"
              src="@/assets/img/viberIcon.svg"
              alt="viber"
            />
            <img
              width="24px"
              height="24.84px"
              v-if="item.img == 'telegram'"
              src="@/assets/img/telegramIcon.svg"
              alt="telegram"
            />
          </a>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="pt-2 pb-15">
      <v-col>
        <img
          width="80px"
          height="60px"
          src="@/assets/img/logoMBus.svg"
          alt="logo"
        />
        <v-col style="text-align: center" class="white--text">
          <span>СОЦІАЛЬНІ МЕРЕЖІ</span>
          <v-row no-gutters class="mt-2" align="start" justify="center">
            <a
              v-for="item in socialNetworks"
              :key="item.id"
              :href="item.link"
              class="mr-2"
              ><v-icon v-if="item.icon" color="white">{{ item.icon }}</v-icon>
              <img
                width="24px"
                height="24.84px"
                v-if="item.img == 'viber'"
                src="@/assets/img/viberIcon.svg"
                alt="viber"
              />
              <img
                width="24px"
                height="24.84px"
                v-if="item.img == 'telegram'"
                src="@/assets/img/telegramIcon.svg"
                alt="telegram"
              />
            </a>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "appFooter",
  data: () => ({
    phoneNumbers: [
      {
        id: 1,
        number: "38(098)000-00-00",
        type: "UA",
      },
      {
        id: 2,
        number: "38(098)000-00-00",
        type: "UA",
      },
      {
        id: 3,
        number: "48(098)000-00-00",
        type: "PL",
      },
      {
        id: 4,
        number: "48(098)000-00-00",
        type: "PL",
      },
    ],
    socialNetworks: [
      {
        id: 1,
        icon: "mdi-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        icon: "mdi-instagram",
        link: "https://www.instagram.com/",
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
a {
  text-decoration: none;
  color: black;
}
</style>