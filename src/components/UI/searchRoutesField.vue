<template>
  <v-row justify="center" class="pt-2">
    <v-col cols="3" class="px-0">
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
      <img src="@/assets/img/reverseIcon.png" class="mt-2" />
    </div>
    <v-col cols="3" class="px-0">
      <v-autocomplete
        background-color="white"
        prepend-inner-icon="mdi-map-marker-outline"
        placeholder="Куди"
        outlined
        dense
        class="rounded-0"
        :items="Object.values(nextCities)"
        :item-text="'name'"
        :item-value="'name'"
        v-model="end_route"
        :disabled="!nextCities.length"
        :error-messages="endRouteError"
      />
    </v-col>
    <v-col cols="2" class="px-0">
      <v-menu ref="menu" v-model="menu" bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            background-color="white"
            prepend-inner-icon="mdi-calendar"
            placeholder="Сьогодні"
            outlined
            dense
            class="rounded-0"
            v-model="routeDate"
            v-bind="attrs"
            v-on="on"
            :error-messages="endRouteError"
          />
        </template>
        <v-date-picker
          v-model="date"
          color="#085895"
          no-title
          locale="uk"
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="1" class="px-0">
      <v-menu left offset-y width="261px" :close-on-content-click="isClose">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-bind="attrs"
            v-on="on"
            background-color="white"
            prepend-inner-icon="mdi-account-outline"
            placeholder="1"
            outlined
            dense
            class="rounded-l-0 rounded-r-lg"
            @click="isClose = false"
          />
        </template>
        <v-card width="261px" style="padding: 15px 30px 15px 30px;">
          <v-row no-gutters align="center" justify="start">
            <v-col cols="6" style="text-align: left"
              ><span class="peopleTypeStyle">Дорослий:</span></v-col
            >
            <v-icon
              @click="quantityAdult > 0 ? quantityAdult-- : (quantityAdult = 0)"
              >mdi-minus-circle-outline</v-icon
            >
            <output
              style="margin-left: 15px; margin-right: 15px"
              class="peopleTypeStyle"
              >{{ quantityAdult }}</output
            >
            <v-icon @click="quantityAdult++">mdi-plus-circle-outline</v-icon>
          </v-row>
          <v-row no-gutters align="center" justify="start" class="mt-5">
            <v-col cols="6" style="text-align: left"
              ><span class="peopleTypeStyle">Дитячий:</span></v-col
            >
            <v-icon @click="quantityKid > 0 ? quantityKid-- : (quantityKid = 0)"
              >mdi-minus-circle-outline</v-icon
            >
            <output
              style="margin-left: 15px; margin-right: 15px"
              class="peopleTypeStyle"
              >{{ quantityKid }}</output
            >
            <v-icon @click="quantityKid++">mdi-plus-circle-outline</v-icon>
          </v-row>
        </v-card>
      </v-menu>
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
    >
      <v-icon color="white">mdi-magnify</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import searchRoutesService from "@/requests/main/searchRoutesService";
export default {
  mixins: [validationMixin],
  data: () => ({
    start_route: "",
    end_route: "",
    routeDate: "",
    date: "",
    startCities: [],
    nextCities: [],
    quantityAdult: 0,
    quantityKid: 0,
    isClose: false,
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
.peopleTypeStyle {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #243949;
}
</style>