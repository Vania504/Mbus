<template>
  <v-card class="sectionCard my-3">
    <v-col class="py-0 px-0">
      <v-row no-gutters align="center">
        <span class="sectionName">Основні дані</span>
        <v-row no-gutters justify="end">
          <span
            style="
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.1em;
            "
            :style="
              !ticket.route
                ? 'pointer-events: none;color: #4c5d6c;'
                : 'color: #085895;'
            "
            class="pointer"
            @click="editRoute(ticket.route)"
            >Редагування маршруту</span
          >
        </v-row>
      </v-row>
      <v-row no-gutters align="start" style="margin-top: 20px">
        <v-col cols="5" xl="4" lg="5" md="5" sm="12">
          <div style="width: 500px">
            <v-autocomplete
              dense
              outlined
              label="Маршрут"
              placeholder="Виберіть маршрут"
              color="#085895"
              :items="Object.values(routes)"
              :item-value="'id'"
              :item-text="''"
              v-model="ticket.route"
              style="margin-right: 40px"
              :error-messages="routeError"
              :append-icon="routeError.length ? 'mdi-alert-circle-outline' : ''"
            >
              <template slot="selection" slot-scope="{ item }">
                <span class="autocompleteSelectedItem"
                  >{{ item.departure }} - {{ item.destination }}</span
                >
              </template>
              <template slot="item" slot-scope="{ item }">
                <span class="autocompleteItem"
                  >{{ item.departure }} - {{ item.destination }}</span
                >
              </template>
            </v-autocomplete>
          </div>
        </v-col>
        <v-col
          cols="3"
          xl="3"
          lg="3"
          md="3"
          sm="9"
          :style="
            !$vuetify.breakpoint.xl
              ? 'padding-right: 50px; padding-left: 40px'
              : 'padding-right: 50px'
          "
        >
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="isClose"
            offset-y
            nudge-left="180"
            nudge-bottom="0"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                dense
                outlined
                label="Дата"
                color="#085895"
                v-bind="attrs"
                v-on="on"
                @click="isClose = false"
                hide-details
                v-model="ticket.dates"
                :error-messages="datesError"
                :append-icon="
                  datesError.length ? 'mdi-alert-circle-outline' : ''
                "
              >
                <template v-slot:prepend-inner>
                  <img
                    @click="(menu = true), (isClose = false)"
                    class="pointer"
                    style="padding-top: 2px"
                    src="@/assets/img/mobileMenu/calendarIcon.svg"
                  />
                </template>
              </v-text-field>
            </template>
            <v-row no-gutters align="center" justify="center">
              <v-date-picker
                v-model="ticket.dates[0]"
                color="#085895"
                locale="uk"
                no-title
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
              <v-date-picker
                v-model="ticket.dates[1]"
                color="#085895"
                locale="uk"
                no-title
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
            </v-row>
          </v-menu>
        </v-col>
        <v-col cols="1" xl="1" lg="1" md="1" sm="9">
          <v-text-field
            dense
            outlined
            label="Ціна"
            placeholder="0 грн"
            color="#085895"
            v-model="ticket.price"
            :error-messages="priceError"
            :append-icon="priceError.length ? 'mdi-alert-circle-outline' : ''"
          />
        </v-col>
      </v-row>
      <v-row no-gutters align="center">
        <v-col cols="4" xl="4" lg="4" md="4" sm="9" style="padding-right: 50px">
          <v-autocomplete
            dense
            outlined
            label="Автобус"
            placeholder="Виберіть автобус"
            color="#085895"
            :items="Object.values(buses.data)"
            :item-value="'id'"
            :item-text="'model'"
            v-model="ticket.bus"
            :error-messages="busError"
            :append-icon="busError.length ? 'mdi-alert-circle-outline' : ''"
          >
            <template slot="selection" slot-scope="{ item }">
              <span class="autocompleteSelectedItem">
                {{ item.model }}
              </span></template
            >
            <template slot="item" slot-scope="{ item }">
              <span class="autocompleteItem">{{ item.model }}</span>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col
          cols="2"
          xl="1"
          lg="2"
          md="2"
          sm="12"
          :style="$vuetify.breakpoint.xl ? 'margin-right: 50px' : ''"
        >
          <div style="width: 130px">
            <v-text-field
              dense
              outlined
              label="Час відправлення"
              placeholder="00:00"
              color="#085895"
              v-mask="'##:##'"
              v-model="ticket.start_time"
              :error-messages="startTimeError"
              :append-icon="
                startTimeError.length ? 'mdi-alert-circle-outline' : ''
              "
            />
          </div>
        </v-col>
        <v-col cols="2" style="text-align: left">
          <div style="width: 140px">
            <v-text-field
              dense
              outlined
              label="Час прибуття"
              placeholder="00:00"
              color="#085895"
              v-mask="'##:##'"
              v-model="ticket.end_time"
              :error-messages="endTimeError"
              :append-icon="
                endTimeError.length ? 'mdi-alert-circle-outline' : ''
              "
            />
          </div>
        </v-col>
      </v-row>
    </v-col>
    <add-new-routes-modal
      v-if="isEditRoute"
      :isEdit="true"
      :visible="isEditRoute"
      :routeDetailInfo="routeDetailInfo"
      :busList="buses"
      @close="isEditRoute = false"
    />
  </v-card>
</template>

<script>
import routesService from "@/requests/admin/routesService";
import ourFleetService from "@/requests/admin/ourFleetService";
import addNewRoutesModal from "../../addNewRoutesModal.vue";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  components: {
    addNewRoutesModal,
  },
  data: () => ({
    isClose: true,
    isEditRoute: false,
    minutes: ["00:00", "00:01"],
    routes: [],
    buses: [],
    ticket: {
      dates: [],
    },
    routeDetailInfo: {},
    menu: "",
  }),
  validations: {
    ticket: {
      route: {
        required,
      },
      dates: {
        required,
      },
      price: {
        required,
      },
      bus: {
        required,
      },
      start_time: {
        required,
      },
      end_time: {
        required,
      },
    },
  },
  props: {
    touch: {
      require: false,
    },
  },
  mounted() {
    this.getRoutes();
    this.getBuses();
  },
  methods: {
    async getRoutes() {
      let response = await routesService.getRouteForAdmin();
      this.routes = response.data.data;
    },
    async getBuses() {
      let response = await ourFleetService.getBuses();
      this.buses = response.data;
    },
    async editRoute(id) {
      let response = await routesService.getRoute(id);
      this.routeDetailInfo = response.data;
      console.log("detail", this.routeDetailInfo);
      this.isEditRoute = true;
    },
  },
  computed: {
    routeError() {
      const errors = [];
      if (!this.$v.ticket.route.$dirty) {
        return errors;
      }
      !this.$v.ticket.route.required && errors.push("");
      return errors;
    },
    datesError() {
      const errors = [];
      if (!this.$v.ticket.dates.$dirty) {
        return errors;
      }
      !this.$v.ticket.dates.required && errors.push("");
      return errors;
    },
    priceError() {
      const errors = [];
      if (!this.$v.ticket.price.$dirty) {
        return errors;
      }
      !this.$v.ticket.price.required && errors.push("");
      return errors;
    },
    busError() {
      const errors = [];
      if (!this.$v.ticket.bus.$dirty) {
        return errors;
      }
      !this.$v.ticket.bus.required && errors.push("");
      return errors;
    },
    startTimeError() {
      const errors = [];
      if (!this.$v.ticket.start_time.$dirty) {
        return errors;
      }
      !this.$v.ticket.start_time.required && errors.push("");
      return errors;
    },
    endTimeError() {
      const errors = [];
      if (!this.$v.ticket.end_time.$dirty) {
        return errors;
      }
      !this.$v.ticket.end_time.required && errors.push("");
      return errors;
    },
  },
  watch: {
    touch: {
      deep: true,
      handler() {
        this.$v.$touch();
        if (!this.$v.invalid) {
          this.$emit("setBasicData", this.ticket);
        }
      },
    },
    "ticket.bus": {
      deep: true,
      handler() {
        let bus = this.buses.data.filter((bus) => bus.id == this.ticket.bus);
        let seats = bus[0].seats;
        this.$emit("setQuantityBusSeats", seats);
      },
    },
  },
};
</script>

<style>
.autocompleteItem {
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #243949;
  text-transform: none;
}
.autocompleteSelectedItem {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #243949;
}
</style>