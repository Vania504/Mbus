<template>
  <v-row justify="center" class="pt-2">
    <v-col cols="3" class="px-0">
      <v-autocomplete
        background-color="white"
        prepend-inner-icon="mdi-map-marker-outline"
        placeholder="Звідки"
        outlined
        dense
        class="rounded-l-lg rounded-r-0"
        :items="Object.values(startCities)"
        :item-text="'name'"
        :item-value="'name'"
        v-model="start_route"
        :error-messages="startRouteError"
      >
        <template v-slot:prepend-inner>
          <img class="pt-1" src="@/assets/img/mobileMenu/placeIcon.svg" />
        </template>
      </v-autocomplete>
    </v-col>
    <div
      style="
        background-color: white;
        width: 34px;
        height: 40px;
        margin-top: 12px;
        cursor: pointer;
        border-top: 1px solid #085895;
        border-bottom: 1px solid #085895;
      "
      @click="reverseItem"
    >
      <img src="@/assets/img/reverseIconHorizontal.svg" class="mt-2" />
    </div>
    <v-col cols="3" class="px-0">
      <v-autocomplete
        background-color="white"
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
      >
        <template v-slot:prepend-inner>
          <img class="pt-1" src="@/assets/img/mobileMenu/placeIcon.svg" />
        </template>
      </v-autocomplete>
    </v-col>
    <v-col cols="2" class="px-0">
      <v-menu
        ref="menu"
        v-model="showChooseDateMenu"
        bottom
        offset-y
        nudge-left="70px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            background-color="white"
            prepend-inner-icon="mdi-calendar"
            placeholder="Сьогодні"
            outlined
            dense
            class="rounded-0"
            :value="
              date
                ? new Date(date).toLocaleDateString('uk-UA', {
                    month: 'short',
                    day: 'numeric',
                  })
                : ''
            "
            v-bind="attrs"
            v-on="on"
            hide-details
            :error-messages="dateError"
          >
            <template v-slot:prepend-inner>
              <img
                @click="showChooseDateMenu = true"
                class="pointer"
                style="padding-top: 2px"
                src="@/assets/img/mobileMenu/calendarIcon.svg"
              /> </template
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          color="#085895"
          no-title
          locale="uk"
          :min="
            new Date(
              new Date().getTime() +
                1 * 60 * 60 * 1000 -
                new Date().getTimezoneOffset() * 60000
            )
              .toISOString()
              .substr(0, 10)
          "
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="1" class="px-0">
      <v-menu
        v-model="showQuantityPeopleMenu"
        left
        offset-y
        width="261px"
        :close-on-content-click="isClose"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-bind="attrs"
            v-on="on"
            background-color="white"
            placeholder="1"
            outlined
            dense
            v-model="quantity_people"
            class="rounded-l-0 rounded-r-lg"
            @click="isClose = false"
            hide-details
            :error-messages="quantityPeopleError"
          >
            <template v-slot:prepend-inner>
              <v-icon
                @click="showQuantityPeopleMenu = true"
                class="pointer"
                color="#085895"
                >mdi-account-outline</v-icon
              ></template
            ></v-text-field
          >
        </template>
        <v-card width="261px" style="padding: 15px 30px 15px 30px">
          <v-row no-gutters align="center" justify="start">
            <v-col cols="6" style="text-align: left"
              ><span class="peopleTypeStyle">Дорослий:</span></v-col
            >
            <v-icon
              :color="quantityAdult == 0 ? '' : '#085895'"
              @click="quantityAdult > 0 ? quantityAdult-- : (quantityAdult = 0)"
              >mdi-minus-circle-outline</v-icon
            >
            <output
              style="margin-left: 15px; margin-right: 15px"
              class="peopleTypeStyle"
              >{{ quantityAdult }}</output
            >
            <v-icon color="#085895" @click="quantityAdult++"
              >mdi-plus-circle-outline</v-icon
            >
          </v-row>
          <v-row no-gutters align="center" justify="start" class="mt-5">
            <v-col cols="6" style="text-align: left"
              ><span class="peopleTypeStyle">Дитячий:</span></v-col
            >
            <v-icon
              :color="quantityKid == 0 ? '' : '#085895'"
              @click="quantityKid > 0 ? quantityKid-- : (quantityKid = 0)"
              >mdi-minus-circle-outline</v-icon
            >
            <output
              style="margin-left: 15px; margin-right: 15px"
              class="peopleTypeStyle"
              >{{ quantityKid }}</output
            >
            <v-icon color="#085895" @click="quantityKid++"
              >mdi-plus-circle-outline</v-icon
            >
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
    quantity_people: "",
    startCities: [],
    nextCities: [],
    quantityAdult: 0,
    quantityKid: 0,
    isClose: false,
    showQuantityPeopleMenu: false,
    showChooseDateMenu: false,
  }),
  validations: {
    start_route: {
      required,
    },
    end_route: {
      required,
    },
    date: {
      required,
    },
    quantity_people: {
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
    setQuantityPeople() {
      this.quantity_people =
        this.quantityAdult + this.quantityKid == 0
          ? ""
          : this.quantityAdult + this.quantityKid;
    },
  },
  computed: {
    startRouteError() {
      const errors = [];
      if (!this.$v.start_route.$dirty) {
        return errors;
      }
      !this.$v.start_route.required && errors.push("");
      return errors;
    },
    endRouteError() {
      const errors = [];
      if (!this.$v.end_route.$dirty) {
        return errors;
      }
      !this.$v.end_route.required && errors.push("");
      return errors;
    },
    dateError() {
      const errors = [];
      if (!this.$v.date.$dirty) {
        return errors;
      }
      !this.$v.date.required && errors.push("");
      return errors;
    },
    quantityPeopleError() {
      const errors = [];
      if (!this.$v.quantity_people.$dirty) {
        return errors;
      }
      !this.$v.quantity_people.required &&
        errors.push("Оберіть місце прибуття");
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
    quantityAdult: {
      deep: true,
      handler() {
        this.setQuantityPeople();
      },
    },
    quantityKid: {
      deep: true,
      handler() {
        this.setQuantityPeople();
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