<template>
  <v-dialog v-model="visibility" width="725px" persistent>
    <modal-header
      :title="isEdit ? 'Редагувати маршрут' : 'Новий маршрут'"
      @close="closeModal"
    />
    <v-card style="overflow: hidden">
      <v-col class="mx-5 mt-5">
        <!-- Route name -->
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="3">
            <p class="itemTitle">Назва маршруту</p>
          </v-col>
          <v-col cols="3" class="ml-2">
            <v-text-field
              class="rounded-lg"
              outlined
              dense
              placeholder="Звідки"
              v-model="route.route_name_start"
              color="#085895"
            />
            <!-- :error-messages="modelNameError"
              @blur="$v.bus.model_name.$touch()" -->
          </v-col>
          <v-icon large>mdi-minus</v-icon>
          <v-col cols="3">
            <v-text-field
              class="rounded-lg"
              outlined
              dense
              placeholder="Куди"
              v-model="route.route_name_end"
              color="#085895"
            />
            <!-- :error-messages="modelNameError"
              @blur="$v.bus.model_name.$touch()" -->
          </v-col>
        </v-row>
        <!-- /Route name -->
        <!-- Driver phone number -->
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="3">
            <p class="itemTitle">Телефони водіїв</p>
          </v-col>
          <v-row no-gutters align="end">
            <v-col cols="8">
              <v-row
                align="center"
                v-for="item in route.driver_phone_number"
                :key="item.id"
                class="mt-1"
              >
                <v-col cols="4" class="ml-2 py-0">
                  <v-text-field
                    class="rounded-lg"
                    outlined
                    dense
                    placeholder="Ім'я"
                    v-model="item.name"
                    color="#085895"
                  />
                  <!-- :error-messages="modelNameError"
              @blur="$v.bus.model_name.$touch()" -->
                </v-col>
                <v-col cols="7" class="ml-5 py-0">
                  <v-text-field
                    class="rounded-lg"
                    outlined
                    dense
                    placeholder="Номер телефону"
                    v-mask="'+38 (###) ####-###'"
                    v-model="route.phone_number"
                    color="#085895"
                  />
                  <!-- :error-messages="modelNameError"
              @blur="$v.bus.model_name.$touch()" -->
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" class="mt-1 mb-4">
              <v-icon
                class="pointer"
                color="#243949"
                large
                @click="addNewDriverPhoneNumber"
                >mdi-plus-circle-outline</v-icon
              >
            </v-col>
          </v-row>
        </v-row>
        <!-- /Driver phone number -->
        <!-- Days of departure -->
        <v-row align="start" justify="start" no-gutters class="mt-2">
          <v-col cols="3">
            <p class="itemTitle">Дні відправлення</p>
          </v-col>
          <v-chip-group
            active-class="darkBlue--text"
            column
            multiple
            class="ml-2"
            v-model="route.daysOfDepartute"
          >
            <v-chip
              v-for="day in daysOfDeparture"
              :key="day.id"
              color="#085895"
              outlined
              style="color: $darkBlue; font-size: 16px"
              class="rounded-lg"
            >
              {{ day.day }}
            </v-chip>
          </v-chip-group>
        </v-row>
        <!-- /Days of departure -->
        <!-- Bus -->
        <v-row align="start" justify="start" no-gutters class="mt-5">
          <v-col cols="3">
            <p class="itemTitle">Автобус</p>
          </v-col>
          <v-col cols="4" class="ml-2">
            <v-autocomplete
              class="rounded-lg"
              outlined
              dense
              placeholder="Setra S 417 GT-HD"
              v-model="route.bus"
              color="#085895"
            />
            <!-- :error-messages="modelNameError"
              @blur="$v.bus.model_name.$touch()" -->
          </v-col>
        </v-row>
        <!-- /Bus  -->
        <!-- Quantity seats -->
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="3">
            <p class="itemTitle">Кількість місць:</p>
          </v-col>
          <v-col cols="1" class="px-2">
            <v-text-field
              class="rounded-lg centered-input"
              outlined
              dense
              placeholder="0"
              v-model="route.quantity_seats"
              color="#085895"
              @keypress="isNumber($event)"
              inputmode="numeric"
              v-mask="'##'"
            />
            <!-- :error-messages="modelNameError"
              @blur="$v.bus.model_name.$touch()" -->
          </v-col>
        </v-row>
        <!-- /Quantity seats  -->
        <!-- Departure time -->
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="3">
            <p class="itemTitle">Час відправлення:</p>
          </v-col>
          <v-col cols="2" class="px-2">
            <v-col cols="8" class="py-0 px-0">
              <v-text-field
                class="rounded-lg"
                outlined
                dense
                placeholder="00:00"
                v-mask="'##:##'"
                v-model="route.departure_time"
                color="#085895"
              />
            </v-col>
            <!-- :error-messages="modelNameError"
              @blur="$v.bus.model_name.$touch()" -->
          </v-col>
        </v-row>
        <!-- /Departure time -->
        <!-- Detail route -->
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="12" class="px-0">
            <p class="itemTitle">Детальний маршрут:</p>
            <v-col class="px-0">
              <!-- Add Ukraine city -->
              <v-row no-gutters align="start">
                <v-col class="px-0" cols="2">
                  <p class="country">Україна:</p>
                </v-col>
                <v-col cols="10" class="px-0">
                  <v-row align="center" no-gutters class="mr-5">
                    <v-col
                      cols="3"
                      v-for="city in route.ukraine_city"
                      :key="city.id"
                      class="px-1"
                    >
                      <v-text-field
                        class="rounded-lg"
                        outlined
                        dense
                        placeholder="Введіть місто.."
                        v-model="city.name"
                        color="#085895"
                      />
                    </v-col>
                    <v-icon
                      class="mb-7 pointer"
                      color="#960909"
                      @click="addNewUkraineCity"
                      >mdi-plus-circle-outline</v-icon
                    >
                  </v-row>
                </v-col>
              </v-row>
              <!-- /Add Ukraine city -->
              <!-- Add other country city -->
              <v-row no-gutters align="start">
                <v-col class="px-0" cols="2">
                  <p class="country">Інша країна:</p>
                </v-col>
                <v-col cols="10" class="px-0">
                  <v-row align="center" no-gutters class="mr-5">
                    <v-col
                      cols="3"
                      v-for="city in route.other_country_city"
                      :key="city.id"
                      class="px-1"
                    >
                      <v-text-field
                        class="rounded-lg"
                        outlined
                        dense
                        placeholder="Введіть місто.."
                        v-model="city.name"
                        color="#085895"
                      />
                    </v-col>
                    <v-icon
                      class="mb-7 pointer"
                      color="#960909"
                      @click="addNewOtherCountryCity"
                      >mdi-plus-circle-outline</v-icon
                    >
                  </v-row>
                </v-col>
              </v-row>
              <!-- /Add other country city -->
              <!-- :error-messages="modelNameError"
              @blur="$v.bus.model_name.$touch()" -->
            </v-col>
          </v-col>
        </v-row>
        <!-- /Detail route -->
      </v-col>
      <route-shedule />
      <v-card-actions>
        <v-row no-gutters justify="center" class="mt-8 mb-5">
          <v-btn
            style="text-transform: none; font-size: 16px; font-weight: 400"
            width="208px"
            height="39px"
            color="#085895"
            class="white--text"
            @click="createRoute"
            >Додати маршрут</v-btn
          >
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import modalHeader from "@/components/UI/modalHeader.vue";
import routeShedule from "./routeShedule.vue";
export default {
  components: {
    modalHeader,
    routeShedule,
  },
  data: () => ({
    route: {
      daysOfDeparture: [],
      driver_phone_number: [
        {
          id: 1,
          name: "",
          phone_number: "",
        },
      ],
      ukraine_city: [
        {
          id: 1,
          name: "",
        },
      ],
      other_country_city: [
        {
          id: 1,
          name: "",
        },
      ],
    },
    daysOfDeparture: [
      {
        id: 1,
        day: "Пн",
      },
      {
        id: 2,
        day: "Вт",
      },
      {
        id: 3,
        day: "Ср",
      },
      {
        id: 4,
        day: "Чт",
      },
      {
        id: 5,
        day: "Пт",
      },
      {
        id: 6,
        day: "Сб",
      },
      {
        id: 7,
        day: "Нд",
      },
    ],
  }),
  props: {
    visible: {
      require: true,
    },
    isEdit: {
      require: true,
    },
  },
  methods: {
    createRoute() {
      alert("Function creatRoute work success");
      this.$emit("close");
    },
    addNewDriverPhoneNumber() {
      this.route.driver_phone_number.push({
        id: Date.now(),
        name: "",
        phone_number: "",
      });
    },
    addNewUkraineCity() {
      this.route.ukraine_city.push({
        id: Date.now(),
        name: "",
      });
    },
    addNewOtherCountryCity() {
      this.route.other_country_city.push({
        id: Date.now(),
        name: "",
      });
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      console.log(charCode);
      if (charCode > 31 && charCode >= 48 && charCode <= 57) {
        return true;
      } else {
        evt.preventDefault();
      }
    },
    closeModal() {
      let close = confirm("Ви дійсно хочете закрити модальне вікно?");
      close ? this.$emit("close") : "";
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
    },
  },
};
</script>

<style>
.centered-input input {
  text-align: center;
}
.country {
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  color: #960909;
}
</style>