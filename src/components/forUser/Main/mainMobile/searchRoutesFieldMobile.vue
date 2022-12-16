<template>
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
        :disabled="!nextCities"
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
            class="rounded-lb-lg rounded-rb-0 rounded-t-0"
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
              rounded-rb-lg rounded-lb-0 rounded-t-0
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
    <quantity-pasanger-mobile
      v-if="showQuantityPassangerModal"
      :visible="showQuantityPassangerModal"
      @close="setQuantityPassanger"
    />
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import quantityPasangerMobile from "@/components/UI/modals/quantityPasangerMobile.vue";
export default {
  components: {
    quantityPasangerMobile,
  },
  data: () => ({
    start_route: "",
    end_route: "",
    quantity_passanger: "",
    showQuantityPassangerModal: false,
  }),
  props: {
    startCities: {
      require: true,
    },
    nextCities: {
      require: false,
    },
  },
  methods: {
    reverseItem() {
      this.$emit("reverseItem", this.start_route, this.end_route);
      let old_start_route = this.start_route;
      this.start_route = this.end_route;
      this.end_route = old_start_route;
    },
    searchRoutes() {
      this.$emit("searchRoutes", true, this.start_route, this.end_route);
    },
    setQuantityPassanger(quantity_passanger) {
      this.quantity_passanger = quantity_passanger;
      this.showQuantityPassangerModal = false;
    },
  },
  computed: {
    ...mapGetters(["loader"]),
  },
  watch: {
    start_route: {
      handler() {
        if (this.start_route.length > 0) {
          this.$emit("nextCities", this.start_route);
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