<template>
  <v-dialog v-model="visibility" width="725px" persistent>
    <error-snackbar :snackbarText="errorSnackbarText" v-if="errorSnackbar" />
    <modal-header
      :title="isEdit ? 'Редагувати маршрут' : 'Новий маршрут'"
      @close="closeModal"
      :showCloseIcon="true"
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
              :error-messages="routeNameStartError"
              @blur="$v.route.route_name_start.$touch()"
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
              :error-messages="routeNameEndError"
              @blur="$v.route.route_name_end.$touch()"
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
                class="mt-1"
                v-for="(item, index) in $v.route.driver_phone_number.$each
                  .$iter"
                :key="item.id"
              >
                <v-col cols="4" class="ml-2 py-0">
                  <v-text-field
                    class="rounded-lg"
                    outlined
                    dense
                    placeholder="Ім'я"
                    v-model="item.name.$model"
                    color="#085895"
                    :error-messages="nameError(index)"
                    @blur="item.name.$touch()"
                  />
                </v-col>
                <v-col cols="7" class="ml-5 py-0">
                  <v-text-field
                    v-mask="'+## (###) ###-##-##'"
                    class="rounded-lg"
                    outlined
                    dense
                    placeholder="Номер телефону"
                    v-model="item.phone.$model"
                    color="#085895"
                    :error-messages="phoneError(index)"
                    @blur="item.phone.$touch()"
                  /> </v-col
              ></v-row>
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
            v-model="route.daysOfDeparture"
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
              :items="Object.values(busList.data)"
              :item-value="'id'"
              :item-text="'model'"
              :error-messages="busError"
              @blur="$v.route.bus.$touch()"
            />
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
              :error-messages="quantitySeatsError"
              @blur="$v.route.quantity_seats.$touch()"
              disabled
            />
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
                :error-messages="departureTimeError"
                @blur="$v.route.departure_time.$touch()"
              />
            </v-col>
          </v-col>
        </v-row>
        <!-- /Departure time -->
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="3">
            <p class="itemTitle">Статус:</p>
          </v-col>
          <v-col cols="5" class="px-2">
            <v-col cols="8" class="py-0 px-0">
              <v-autocomplete
                class="rounded-lg"
                outlined
                dense
                :items="Object.values(routeStatus)"
                :item-text="'text'"
                :item-value="'value'"
                v-model="route.status"
                color="#085895"
              />
            </v-col>
          </v-col>
        </v-row>
        <!-- Detail route -->
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="12" class="px-0">
            <p class="itemTitle" style="text-align: center">
              Детальний маршрут:
            </p>
            <v-col class="px-0">
              <!-- Add Ukraine city -->
              <v-row no-gutters align="start">
                <v-col class="px-0" cols="2" align-self="start">
                  <p class="country mt-2">Україна:</p>
                </v-col>
                <v-col cols="10" class="px-0 py-0">
                  <v-row align="start" no-gutters class="mr-5">
                    <span
                      v-for="(city, index) in route.ukraine_city"
                      :key="city.id"
                      style="margin-right: 5px"
                    >
                      <div class="mt-2">
                        <v-icon
                          color="#960909"
                          v-if="index !== 0"
                          style="margin-right: 5px"
                          >mdi-minus</v-icon
                        >{{ city.name }}
                      </div></span
                    >
                    <v-col cols="3" class="px-1" align-self="center">
                      <v-text-field
                        class="rounded-lg"
                        outlined
                        dense
                        placeholder="Введіть місто.."
                        v-model="ukraineCity"
                        color="#085895"
                        :error-messages="ukraineCityError"
                        @input="ukraineCityError = ''"
                        v-on:keyup.enter="addNewUkraineCity"
                      />
                    </v-col>
                    <v-icon
                      class="mt-2 pointer"
                      color="#960909"
                      @click="addNewUkraineCity"
                      v-if="ukraineCity"
                      >mdi-plus-circle-outline</v-icon
                    >
                  </v-row>
                </v-col>
              </v-row>
              <!-- /Add Ukraine city -->
              <!-- Add other country city -->
              <v-row no-gutters align="start">
                <v-col class="px-0" cols="2">
                  <p class="country mt-2">Інша країна:</p>
                </v-col>
                <v-col cols="10" class="px-0">
                  <v-row align="start" no-gutters class="mr-5">
                    <span
                      v-for="(city, index) in route.other_country_city"
                      :key="city.id"
                      style="margin-right: 5px"
                    >
                      <div class="mt-2">
                        <v-icon
                          color="#960909"
                          v-if="index !== 0"
                          style="margin-right: 5px"
                          >mdi-minus</v-icon
                        >{{ city.name }}
                      </div>
                    </span>
                    <v-col cols="3" class="px-1" align-self="center">
                      <v-text-field
                        class="rounded-lg"
                        outlined
                        dense
                        placeholder="Введіть місто.."
                        v-model="otherCountryCity"
                        :error-messages="otherCountryCityError"
                        @input="otherCountryCityError = ''"
                        color="#085895"
                        v-on:keyup.enter="addNewOtherCountryCity"
                      />
                    </v-col>
                    <v-icon
                      class="mt-2 pointer"
                      color="#960909"
                      @click="addNewOtherCountryCity"
                      v-if="otherCountryCity"
                      >mdi-plus-circle-outline</v-icon
                    >
                  </v-row>
                </v-col>
              </v-row>
              <!-- /Add other country city -->
            </v-col>
          </v-col>
        </v-row>
        <!-- /Detail route -->
      </v-col>
      <v-col class="ml-5">
        <v-row no-gutters>
          <small-item-image
            v-for="img in routeImages"
            :key="img.id"
            :img="img"
            @delete="deleteImg"
          />
          <img
            src="@/assets/img/addImageIcon.svg"
            class="pointer"
            @click="showRecentlyImage = true"
          />
        </v-row>
      </v-col>
      <route-shedule
        @shedule="setShedule"
        :isEdit="isEdit"
        :sheduleDetail="shedule"
        :key="routesSheduleKey"
      />
      <v-card-actions>
        <v-row no-gutters justify="center" class="mt-8 mb-5">
          <v-btn
            style="text-transform: none; font-size: 16px; font-weight: 400"
            width="208px"
            height="39px"
            color="#085895"
            class="white--text"
            @click="editRoute"
            v-if="isEdit"
            >Зберегти зміни</v-btn
          >
          <v-btn
            v-else
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
    <recently-add-image-modal
      v-if="showRecentlyImage"
      :visible="showRecentlyImage"
      @close="showRecentlyImage = false"
      @choseImage="setImages"
      type="Route"
    />
  </v-dialog>
</template>

<script>
import modalHeader from "@/components/UI/modalHeader.vue";
import routeShedule from "./routeShedule.vue";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import googleMapsService from "@/requests/googleMaps/googleMapsService";
import requestFormData from "@/requests/requestFormData";
import recentlyAddImageModal from "@/components/UI/recentlyAddImageModal";
import smallItemImage from "@/components/UI/smallItemImage";
import ErrorSnackbar from "@/components/UI/errorSnackbar.vue";
export default {
  mixins: [validationMixin],
  components: {
    modalHeader,
    routeShedule,
    recentlyAddImageModal,
    smallItemImage,
    ErrorSnackbar,
  },
  data: () => ({
    route: {
      status: "Active",
      daysOfDeparture: [],
      driver_phone_number: [
        {
          name: "",
          phone: "",
        },
      ],
      ukraine_city: [],
      other_country_city: [],
    },
    daysOfDeparture: [
      {
        id: 0,
        day: "Пн",
        key: "mon",
      },
      {
        id: 1,
        day: "Вт",
        key: "tue",
      },
      {
        id: 2,
        day: "Ср",
        key: "wed",
      },
      {
        id: 3,
        day: "Чт",
        key: "thu",
      },
      {
        id: 4,
        day: "Пт",
        key: "fri",
      },
      {
        id: 5,
        day: "Сб",
        key: "sat",
      },
      {
        id: 6,
        day: "Нд",
        key: "sun",
      },
    ],
    ukraineCity: "",
    otherCountryCity: "",
    ukraineCityError: "",
    otherCountryCityError: "",
    shedule: [],
    routesSheduleKey: 0,
    showRecentlyImage: false,
    errorSnackbar: false,
    errorSnackbarText: "",
    routeImages: [],
    routeStatus: [
      {
        text: "Активний",
        value: "Active",
      },
      {
        text: "Архівований",
        value: "Archive",
      },
    ],
  }),
  validations: {
    route: {
      route_name_start: {
        required,
      },
      route_name_end: {
        required,
      },
      bus: {
        required,
      },
      quantity_seats: {
        required,
      },
      departure_time: {
        required,
      },
      driver_phone_number: {
        $each: {
          name: { required },
          phone: { required },
        },
      },
    },
  },
  props: {
    visible: {
      require: true,
    },
    isEdit: {
      require: true,
    },
    busList: {
      require: true,
    },
    routeDetailInfo: {
      require: false,
    },
  },
  mounted() {
    if (this.isEdit) {
      this.setRoute();
    }
  },
  methods: {
    createRoute() {
      this.errorSnackbar = false;
      this.$v.$touch();
      if (
        !this.$v.$invalid &&
        this.routeImages.length > 0 &&
        this.shedule.length > 0
      ) {
        let images = [];
        this.routeImages.forEach((image) => {
          images.push(image.id);
        });
        let daysOfDepartureFiltered = [];
        this.daysOfDeparture.forEach((day) => {
          if (this.route.daysOfDeparture.includes(day.id)) {
            daysOfDepartureFiltered[`${day.key}`] = "1";
          } else {
            daysOfDepartureFiltered[`${day.key}`] = "0";
          }
        });
        let data = {
          departure: this.route.route_name_start,
          destination: this.route.route_name_end,
          bus_id: this.route.bus,
          departure_time: this.route.departure_time,
          status: this.route.status,
          driver_phones: this.route.driver_phone_number,
          ukraine_city: this.route.ukraine_city,
          foreign_city: this.route.other_country_city,
          route_path_image_id: 1,
          departure_days: daysOfDepartureFiltered,
          route_time: this.shedule,
          images: images,
        };
        let route = requestFormData.jsonToFormData(data);
        this.$emit("createRoute", route);
      } else if (this.routeImages.length <= 0) {
        this.errorSnackbarText = "Потрібно додати хоча б одну фотографію";
        setTimeout(() => (this.errorSnackbar = true), 100);
      } else if (this.shedule.length <= 0) {
        this.errorSnackbarText = "Потрібно додати розклад руху ";
        setTimeout(() => (this.errorSnackbar = true), 100);
      }
    },
    editRoute() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let daysOfDepartureFiltered = [];
        let images = [];
        this.routeImages.forEach((image) => {
          images.push(image.id);
        });
        this.daysOfDeparture.forEach((day) => {
          if (this.route.daysOfDeparture.includes(day.id)) {
            daysOfDepartureFiltered[`${day.key}`] = "1";
          } else {
            daysOfDepartureFiltered[`${day.key}`] = "0";
          }
        });
        let data = {
          departure: this.route.route_name_start,
          destination: this.route.route_name_end,
          bus_id: this.route.bus,
          departure_time: this.route.departure_time,
          status: this.route.status,
          driver_phones: this.route.driver_phone_number,
          ukraine_city: this.route.ukraine_city,
          foreign_city: this.route.other_country_city,
          route_path_image_id: 1,
          departure_days: daysOfDepartureFiltered,
          route_time: this.shedule,
          images: images,
        };
        let route = requestFormData.jsonToFormData(data);
        this.$emit("editRoute", this.route.id, route);
      }
    },
    addNewDriverPhoneNumber() {
      this.$v.route.driver_phone_number.$touch();
      if (!this.$v.route.driver_phone_number.$each.$invalid) {
        this.route.driver_phone_number.push({
          name: "",
          phone: "",
        });
      }
    },
    async addNewUkraineCity() {
      let coordinates = await this.getCoordinates(this.ukraineCity);
      if (coordinates.length > 0) {
        this.route.ukraine_city.push({
          id: Date.now(),
          name: this.ukraineCity,
          lat: coordinates[0].geometry.location.lat,
          lng: coordinates[0].geometry.location.lng,
        });
        this.ukraineCity = "";
      } else {
        this.ukraineCityError = "Такого міста не існує";
      }
    },
    async addNewOtherCountryCity() {
      let coordinates = await this.getCoordinates(this.otherCountryCity);
      if (coordinates.length > 0) {
        this.route.other_country_city.push({
          id: Date.now(),
          name: this.otherCountryCity,
          lat: coordinates[0].geometry.location.lat,
          lng: coordinates[0].geometry.location.lng,
        });
        this.otherCountryCity = "";
      } else {
        this.otherCountryCityError = "Такого міста не існує";
      }
    },
    setShedule(shedule) {
      this.shedule = shedule;
    },
    setImages(image) {
      this.showRecentlyImage = false;
      this.routeImages.push(image);
    },
    setRoute() {
      this.$set(this.route, "id", this.routeDetailInfo.id);
      this.$set(this.route, "route_name_start", this.routeDetailInfo.departure);
      this.$set(this.route, "route_name_end", this.routeDetailInfo.destination);
      this.$set(this.route, "bus", this.routeDetailInfo.bus_id);
      this.$set(this.route, "quantity_seats", this.routeDetailInfo.bus.seats);
      this.$set(this.route, "status", this.routeDetailInfo.status);
      this.$set(
        this.route,
        "departure_time",
        this.routeDetailInfo.departure_time
      );
      this.$set(
        this.route,
        "driver_phone_number",
        this.routeDetailInfo.driver_phones
      );
      this.shedule = this.routeDetailInfo.route_time;
      this.routeDetailInfo.cities.forEach((city) => {
        if (city.type == "Ukraine") {
          this.route.ukraine_city.push(city);
        } else {
          this.route.other_country_city.push(city);
        }
      });
      this.routeDetailInfo.departure_days.mon == "1"
        ? this.route.daysOfDeparture.push(0)
        : "";
      this.routeDetailInfo.departure_days.tue == "1"
        ? this.route.daysOfDeparture.push(1)
        : "";
      this.routeDetailInfo.departure_days.wed == "1"
        ? this.route.daysOfDeparture.push(2)
        : "";
      this.routeDetailInfo.departure_days.thu == "1"
        ? this.route.daysOfDeparture.push(3)
        : "";
      this.routeDetailInfo.departure_days.fri == "1"
        ? this.route.daysOfDeparture.push(4)
        : "";
      this.routeDetailInfo.departure_days.sun == "1"
        ? this.route.daysOfDeparture.push(5)
        : "";
      this.routeDetailInfo.departure_days.sat == "1"
        ? this.route.daysOfDeparture.push(6)
        : "";
      this.routesSheduleKey++;
      this.routeDetailInfo.images.forEach((image) => {
        if (image.images !== null) {
          this.setImages(image.images);
        }
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
      let close = confirm(
        "Ви дійсно хочете закрити модальне вікно, внесені зміни не буде збережено?"
      );
      close ? this.$emit("close") : "";
    },
    async getCoordinates(cityname) {
      let response = await googleMapsService.getCoordinates(cityname);
      return response.results;
    },
    deleteImg(id) {
      this.routeImages = this.routeImages.filter((image) => image.id !== id);
    },
    nameError(i) {
      const errors = [];
      if (!this.$v.route.driver_phone_number.$each.$iter[i].name.$dirty) {
        return errors;
      }
      !this.$v.route.driver_phone_number.$each.$iter[i].name.required &&
        errors.push("");
      return errors;
    },
    phoneError(i) {
      const errors = [];
      if (!this.$v.route.driver_phone_number.$each.$iter[i].phone.$dirty) {
        return errors;
      }
      !this.$v.route.driver_phone_number.$each.$iter[i].phone.required &&
        errors.push("");
      return errors;
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
    },
    routeNameStartError() {
      const errors = [];
      if (!this.$v.route.route_name_start.$dirty) {
        return errors;
      }
      !this.$v.route.route_name_start.required &&
        errors.push("Поле звідки обов'язкове");
      return errors;
    },
    routeNameEndError() {
      const errors = [];
      if (!this.$v.route.route_name_end.$dirty) {
        return errors;
      }
      !this.$v.route.route_name_end.required &&
        errors.push("Поле куда обов'язкове");
      return errors;
    },
    busError() {
      const errors = [];
      if (!this.$v.route.bus.$dirty) {
        return errors;
      }
      !this.$v.route.bus.required && errors.push("Поле автобус обов'язкове");
      return errors;
    },
    quantitySeatsError() {
      const errors = [];
      if (!this.$v.route.quantity_seats.$dirty) {
        return errors;
      }
      !this.$v.route.quantity_seats.required && errors.push("");
      return errors;
    },
    departureTimeError() {
      const errors = [];
      if (!this.$v.route.departure_time.$dirty) {
        return errors;
      }
      !this.$v.route.departure_time.required && errors.push("");
      return errors;
    },
  },
  watch: {
    "route.bus": {
      deep: true,
      handler() {
        let bus = this.busList.data.filter((bus) => bus.id === this.route.bus);
        if (bus.length > 0) {
          this.route.quantity_seats = bus[0].seats;
        }
      },
    },
  },
};
</script>

<style scoped>
.centered-input input {
  text-align: center;
}
.country {
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  color: #960909;
}
.itemTitle {
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  color: #243949;
  margin-top: 7px;
}
</style>