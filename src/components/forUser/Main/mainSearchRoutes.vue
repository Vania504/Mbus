<template>
  <div>
    <div
      class="mainBackground"
      :style="$vuetify.breakpoint.xs ? 'height: 300px' : ''"
    >
      <h1
        class="mainText"
        :style="
          $vuetify.breakpoint.xs
            ? 'padding-top: 20px; font-size: 18px;'
            : ' font-size: 40px;'
        "
      >
        Подорожуйте разом з нами!
      </h1>
      <v-row
        :justify="$vuetify.breakpoint.xs ? 'center' : 'start'"
        align="center"
      >
        <v-col cols="1" class="px-0" v-if="!$vuetify.breakpoint.xs">
          <!-- <v-row
          justify="start"
          no-gutters
          class="ml-5"
          v-for="item in socialNetworks"
          :key="item.id"
        >
          <a
            :href="item.value"
            target="_blank"
            :class="item.icon ? 'mb-2' : ''"
          >
            <v-icon v-if="item.social_network == 'Instagram'" color="black"
              >mdi-instagram</v-icon
            >
            <v-icon v-if="item.social_network == 'Facebook'" color="black"
              >mdi-facebook</v-icon
            >
            <v-icon v-if="item.social_network == 'Whatsapp'" color="black"
              >mdi-whatsapp</v-icon
            >
            <v-icon v-if="item.social_network == 'Twitter'" color="black"
              >mdi-twitter</v-icon
            >
            <img
              width="24px"
              height="20px"
              v-if="item.social_network == 'Viber'"
              src="@/assets/img/viberIconBlack.svg"
              alt="viber"
              class="mb-1 mt-1"
            />
            <img
              width="20px"
              height="18px"
              v-if="item.social_network == 'Telegram'"
              src="@/assets/img/telegramIconBlack.svg"
              alt="telegram"
              class="mb-1"
            />
          </a>
        </v-row> -->
        </v-col>
        <v-col
          cols="10"
          :style="
            $vuetify.breakpoint.xs ? 'margin-top: 50px;' : 'margin-top: 30px'
          "
        >
          <h4
            v-if="!$vuetify.breakpoint.xs"
            class="searchRoutes"
            :style="
              $vuetify.breakpoint.xs ? 'font-size: 16px;' : ' font-size: 20px;'
            "
          >
            Пошук автобусних рейсів:
          </h4>
          <search-routes-field-mobile
            v-if="$vuetify.breakpoint.xs"
            :startCities="startCities"
            :nextCities="nextCities"
            @nextCities="getNextCities"
            @reverseItem="reverseItem"
            @searchRoutes="searchRoutes"
          />
          <v-row v-else justify="center" no-gutters>
            <!-- :style="
              startRouteError.length || endRouteError.length
                ? 'height: 70px;'
                : 'height: 60px;'
            " -->
            <div class="backgroundSearchField">
              <div v-if="loader" class="d-flex align-center mt-3">
                <v-progress-circular
                  class="mx-auto"
                  indeterminate
                  color="#085895"
                ></v-progress-circular>
              </div>
              <search-routes-field />
            </div>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import searchRoutesFieldMobile from "./mainMobile/searchRoutesFieldMobile.vue";
import settingsService from "@/requests/admin/settingsService";
import searchRoutesService from "@/requests/main/searchRoutesService";
import { mapActions, mapGetters } from "vuex";
import searchRoutesField from "@/components/UI/searchRoutesField.vue";
export default {
  components: {
    searchRoutesFieldMobile,
    searchRoutesField,
  },
  data: () => ({
    socialNetworks: [],
    start_route: "",
    end_route: "",
    nextCities: [],
    startCities: [],
  }),
  mounted() {
    this.getSocialNetwork();
    this.getStartCities();
  },
  methods: {
    ...mapActions(["updateLoader"]),
    reverseItem(start_route, end_route) {
      if (start_route && end_route) {
        this.updateLoader(true);
        this.start_route = end_route;
        this.end_route = start_route;
      } else if (this.start_route && this.end_route) {
        this.updateLoader(true);
        let old_start_route = this.start_route;
        this.start_route = this.end_route;
        this.end_route = old_start_route;
      }
    },
    hideLoader() {
      this.updateLoader(false);
    },
    async getSocialNetwork() {
      let response = await settingsService.getSettingList("socials");
      this.socialNetworks = response.data;
    },
    async getStartCities() {
      let response = await searchRoutesService.getStartCities();
      this.startCities = response.data;
      this.hideLoader();
    },
    async getNextCities(start_route) {
      let response = await searchRoutesService.getNextCities(
        start_route ? start_route : this.start_route
      );
      this.nextCities = response.data;
      setTimeout(this.hideLoader, 1500);
    },
    async searchRoutes(isMobile, start_route, end_route) {
      this.$v.$touch();
      if (isMobile && typeof isMobile !== "object") {
        this.$router.push(
          `/routes?start_route=${start_route}&end_route=${end_route}`
        );
      } else if (!this.$v.$invalid) {
        this.$router.push(
          `/routes?start_route=${this.start_route}&end_route=${this.end_route}`
        );
        this.hideLoader();
      }
    },
  },
  computed: {
    ...mapGetters(["loader"]),
    startRouteError() {
      const errors = [];
      if (!this.$v.start_route.$dirty) {
        return errors;
      }
      !this.$v.start_route.required &&
        errors.push("Оберіть місце відправлення");
      return errors;
    },
    endRouteError() {
      const errors = [];
      if (!this.$v.end_route.$dirty) {
        return errors;
      }
      !this.$v.end_route.required && errors.push("Оберіть місце прибуття");
      return errors;
    },
  },
  watch: {
    start_route: {
      deep: true,
      handler() {
        if (this.start_route.length > 0) {
          this.getNextCities();
        }
      },
    },
  },
};
</script>

<style>
.mainBackground {
  height: 700px;
  background: linear-gradient(
      0deg,
      rgba(36, 57, 73, 0.5),
      rgba(36, 57, 73, 0.5)
    ),
    url("@/assets/img/mainBackground.JPG");
  text-align: center;
  object-fit: cover;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.mainText {
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #ffffff;
  padding-top: 180px;
}

.searchRoutes {
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin-bottom: 20px;
}

.backgroundSearchField {
  width: 800px;
  height: 80px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 0.5px solid #085895;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  text-align: center;
  align-self: center;
}
</style>