<template>
  <div>
    <v-row justify="center">
      <div class="d-flex align-center" style="min-height: 20vh" v-if="loader">
        <v-progress-circular
          class="mx-auto"
          indeterminate
          color="#085895"
        ></v-progress-circular>
      </div>
      <v-col style="margin-left: 40px" class="px-0" v-else>
        <v-autocomplete
          background-color="white"
          prepend-inner-icon="mdi-map-marker-outline"
          placeholder="Звідки"
          outlined
          dense
          class="rounded-t-lg rounded-b-0"
          hide-details
          :items="Object.values(startCities)"
          :item-text="'name'"
          :item-value="'name'"
          v-model="start_route"
        />
        <v-autocomplete
          background-color="white"
          prepend-inner-icon="mdi-map-marker-outline"
          placeholder="Куди"
          outlined
          dense
          class="rounded-b-0 rounded-t-0"
          :items="Object.values(nextCities)"
          :item-text="'name'"
          :item-value="'name'"
          v-model="end_route"
          :disabled="nextCities.length == 0"
          hide-details
        />
        <v-row no-gutters align="center">
          <v-col class="px-0 py-0">
            <v-text-field
              background-color="white"
              prepend-inner-icon="mdi-calendar"
              placeholder="Сьогодні"
              outlined
              dense
              class="rounded-lb-lg rounded-br-0 rounded-t-0"
            />
          </v-col>
          <v-col class="px-0 py-0" style="text-align: center"
            ><v-text-field
              background-color="white"
              prepend-inner-icon="mdi-account-outline"
              placeholder="1"
              outlined
              v-model="quantity_passanger"
              dense
              @click="showQuantityPassangerModal = true"
              class="
                rounded-rb-lg rounded-bl-0 rounded-t-0
                quantityPeopleTextField
              "
          /></v-col>
        </v-row>
        <v-btn
          width="150px"
          height="30px"
          color="#085895"
          class="rounded-lg"
          @click="searchRoutes"
        >
          <v-icon color="white mr-2">mdi-magnify</v-icon
          ><span
            style="
              text-transform: none;
              color: white;
              font-weight: 400;
              font-size: 14px;
            "
            >Пошук</span
          >
        </v-btn>
      </v-col>
      <div
        style="width: 40px; height: 30px; margin-top: 55px; cursor: pointer"
        @click="reverseItem"
        v-if="!loader"
      >
        <img src="@/assets/img/reverseIcon.svg" class="mt-2" />
      </div>
    </v-row>
    <quantity-pasanger-mobile
      v-if="showQuantityPassangerModal"
      :visible="showQuantityPassangerModal"
      @close="setQuantityPassanger"
    />
  </div>
</template>

<script>
import quantityPasangerMobile from "@/components/UI/modals/quantityPasangerMobile.vue";
import searchRoutesService from "@/requests/main/searchRoutesService";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    quantityPasangerMobile,
  },
  data: () => ({
    start_route: "",
    end_route: "",
    quantity_passanger: "",
    showQuantityPassangerModal: false,
    startCities: [],
    nextCities: [],
  }),
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
    setQuantityPassanger(quantity_passanger) {
      this.quantity_passanger = quantity_passanger;
      this.showQuantityPassangerModal = false;
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
      this.updateLoader(true);
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
      handler() {
        if (this.start_route.length > 0) {
          this.getNextCities(this.start_route);
        }
      },
    },
    newEndRoute: {
      handler() {
        console.log(this.end_route);
        this.end_route = this.newEndRoute;
      },
    },
  },
};
</script>

<style scoped>
.quantityPeopleTextField >>> input {
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #6b7c8a;
}
</style>