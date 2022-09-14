<template>
  <div>
    <Loader v-if="loader" />
    <div
      v-else
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
          <search-routes-field-mobile v-if="$vuetify.breakpoint.xs" />
          <v-row v-else justify="center" no-gutters>
            <div
              class="backgroundSearchField"
              :style="
                startRouteError.length || endRouteError.length
                  ? 'height: 70px;'
                  : 'height: 60px;'
              "
            >
              <v-row justify="center" class="pt-2">
                <v-col cols="4" class="px-0">
                  <v-autocomplete
                    background-color="white"
                    prepend-inner-icon="mdi-map-marker-outline"
                    placeholder="Звідки"
                    outlined
                    dense
                    class="rounded-l-lg"
                    :items="Object.values(startCities)"
                    :item-text="'name'"
                    :item-value="'name'"
                    v-model="start_route"
                    :error-messages="startRouteError"
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
                  @click="reverseItem"
                >
                  <img src="@/assets/img/reverseIcon.svg" class="mt-2" />
                </div>
                <v-col cols="4" class="px-0">
                  <v-autocomplete
                    background-color="white"
                    prepend-inner-icon="mdi-map-marker-outline"
                    placeholder="Куди"
                    outlined
                    dense
                    class="rounded-r-lg"
                    :items="Object.values(nextCities)"
                    :item-text="'name'"
                    :item-value="'name'"
                    v-model="end_route"
                    :error-messages="endRouteError"
                  />
                </v-col>
                <v-btn
                  style="
                    margin-left: 20px;
                    margin-top: 13px;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
                    border-radius: 10px;
                  "
                  width="80px"
                  height="38px"
                  color="#085895"
                  @click="searchRoutes"
                  ><v-icon color="white">mdi-magnify</v-icon></v-btn
                >
              </v-row>
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
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
import Loader from "@/components/UI/Loader.vue";
export default {
  mixins: [validationMixin],
  components: {
    searchRoutesFieldMobile,
    Loader,
  },
  data: () => ({
    start_route: "",
    end_route: "",
    socialNetworks: [],
    startCities: [],
    nextCities: [],
  }),
  validations: {
    start_route: {
      required,
    },
    end_route: {
      required,
    },
  },
  mounted() {
    this.getSocialNetwork();
    this.getStartCities();
  },
  methods: {
    ...mapActions(["updateLoader"]),
    reverseItem() {
      if (this.start_route && this.end_route) {
        this.updateLoader(true);
        let start_route = this.start_route;
        this.start_route = this.end_route;
        this.end_route = start_route;
      }
    },
    async getSocialNetwork() {
      let response = await settingsService.getSettingList("socials");
      this.socialNetworks = response.data;
    },
    async getStartCities() {
      let response = await searchRoutesService.getStartCities();
      this.startCities = response.data;
      this.updateLoader(false);
    },
    async getNextCities() {
      let response = await searchRoutesService.getNextCities(this.start_route);
      this.nextCities = response.data;
      this.updateLoader(false);
    },
    async searchRoutes() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$router.push(
          `/routes?start_route=${this.start_route}&end_route=${this.end_route}`
        );
        this.updateLoader(false);
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
  width: 600px;
  background: rgba(255, 255, 255, 0.9);
  border: 0.5px solid #085895;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  text-align: center;
  align-self: center;
}
</style>