<template>
  <div>
    <v-row justify="center">
      <p style="font-size: 16px; color: #243949; text-align: justify">
        Щоб орендувати автобус, запоніть заявку нижче, ми зателефонуємо Вам ,
        щоб уточнити деталі і розрахувати вартість Вашого замовлення
      </p>
      <v-card width="1160px" class="mb-10">
        <v-row justify="center">
          <v-col style="text-align: left" class="mt-10" cols="11">
            <v-row justify="center">
              <v-col cols="4">
                <span>Контактна особа<span class="requireColor">*</span></span>
                <v-text-field
                  dense
                  outlined
                  v-model="userData.name"
                  :error-messages="nameError"
                  @blur="$v.userData.name.$touch()"
                  color="rgba(8, 88, 149, 0.73)"
              /></v-col>
              <v-col cols="4"
                ><span>Номер телефону<span class="requireColor">*</span></span
                ><v-text-field
                  dense
                  outlined
                  v-model="userData.phone_number"
                  :error-messages="phoneNumberError"
                  @blur="$v.userData.phone_number.$touch()"
                  v-mask="'+38 (###) ####-###'"
                  color="rgba(8, 88, 149, 0.73)"
              /></v-col>
              <v-col cols="4"
                ><span>Кількість персон<span class="requireColor">*</span></span
                ><v-text-field
                  dense
                  outlined
                  v-model="userData.quantity_people"
                  :error-messages="quantityPeopleError"
                  @blur="$v.userData.quantity_people.$touch()"
                  color="rgba(8, 88, 149, 0.73)"
                  @keypress="isNumber($event)"
                  inputmode="numeric"
                  type="number"
              /></v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="4"
                ><span
                  >Пункт відправлення<span class="requireColor">*</span></span
                ><v-text-field
                  dense
                  outlined
                  v-model="userData.departure_point"
                  :error-messages="departurePointError"
                  @blur="$v.userData.departure_point.$touch()"
                  color="rgba(8, 88, 149, 0.73)"
              /></v-col>
              <v-col cols="4"
                ><span>Вибір автобуса<span class="requireColor">*</span></span
                ><v-autocomplete
                  dense
                  outlined
                  v-model="userData.bus"
                  :error-messages="busError"
                  @blur="$v.userData.bus.$touch()"
                  color="rgba(8, 88, 149, 0.73)"
              /></v-col>
              <v-col cols="4"
                ><span>Маршрут</span
                ><v-text-field
                  dense
                  outlined
                  color="rgba(8, 88, 149, 0.73)"
                  v-model="userData.route"
              /></v-col>
            </v-row>
            <v-card-actions class="mb-15 mt-3">
              <v-row justify="center"
                ><v-btn
                  @click="sendOrder"
                  color="#085895"
                  height="43px"
                  class="white--text"
                  style="
                    text-transform: none;
                    font-size: 20px;
                    font-weight: 400;
                  "
                  >Надіслати замовлення</v-btn
                ></v-row
              >
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    userData: {},
  }),
  validations: {
    userData: {
      name: {
        required,
      },
      phone_number: {
        required,
        minLength: minLength(18),
      },
      quantity_people: {
        required,
      },
      departure_point: {
        required,
      },
      bus: {
        required,
      },
    },
  },
  methods: {
    sendOrder() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("Success send message");
      }
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
  },
  computed: {
    nameError() {
      const errors = [];
      if (!this.$v.userData.name.$dirty) {
        return errors;
      }
      !this.$v.userData.name.required &&
        errors.push("Контактні дані обов'язкові");
      return errors;
    },
    phoneNumberError() {
      const errors = [];
      if (!this.$v.userData.phone_number.$dirty) {
        return errors;
      } else if (!this.$v.userData.phone_number.required) {
        errors.push("Номер телефону обов'язквовий");
        return errors;
      }
      if (!this.$v.userData.phone_number.minLength) {
        errors.push("Некорректно введено номер телефону");
      }
      return errors;
    },
    quantityPeopleError() {
      const errors = [];
      if (!this.$v.userData.quantity_people.$dirty) {
        return errors;
      } else if (!this.$v.userData.quantity_people.required) {
        errors.push("Кількість персон обов'язково");
        return errors;
      }
      return errors;
    },
    departurePointError() {
      const errors = [];
      if (!this.$v.userData.departure_point.$dirty) {
        return errors;
      } else if (!this.$v.userData.departure_point.required) {
        errors.push("Пункт відправлення обов'язковий");
        return errors;
      }
      return errors;
    },
    busError() {
      const errors = [];
      if (!this.$v.userData.bus.$dirty) {
        return errors;
      } else if (!this.$v.userData.bus.required) {
        errors.push("Автобус обов'язковий");
        return errors;
      }
      return errors;
    },
  },
};
</script>

<style>
</style>