<template>
  <v-col cols="12" xl="5" lg="5" md="5" sm="12">
    <span
      class="creditCardFieldLabelStyle"
      :style="cardNumberError.length ? 'color: #FF5252' : ''"
    >
      Номер картки
    </span>
    <v-row no-gutters align="start">
      <v-text-field
        outlined
        dense
        v-model="userCard.card_number"
        color="#085895"
        class="rounded-lg"
        :error-messages="cardNumberError"
        v-mask="'#### #### #### ####'"
      >
        <template v-slot:append>
          <img
            src="@/assets/img/bookingTicketIcon/creditCardIcon.svg"
            class="pt-1"
          /> </template
      ></v-text-field>
      <v-icon
        v-if="cardNumberError.length"
        class="mt-2"
        style="margin-left: 10px"
        color="#FF5252"
        >mdi-alert-circle-outline</v-icon
      >
    </v-row>
    <v-row no-gutters align="center">
      <v-col cols="6" style="padding-right: 10px">
        <span
          class="creditCardFieldLabelStyle"
          :style="expiredDayError.length ? 'color: #FF5252' : ''"
          >Термін дії</span
        >
        <v-row no-gutters align="start">
          <v-col :cols="expiredDayError.length ? '9' : '12'">
            <v-text-field
              outlined
              dense
              class="rounded-lg"
              v-model="userCard.expired_day"
              color="#085895"
              :error-messages="expiredDayError"
              v-mask="'##/##'"
            ></v-text-field>
          </v-col>
          <v-icon
            v-if="expiredDayError.length"
            class="mt-2"
            style="padding-left: 8px"
            color="#FF5252"
            >mdi-alert-circle-outline</v-icon
          >
        </v-row>
      </v-col>
      <v-col cols="6" style="padding-left: 10px">
        <span
          class="creditCardFieldLabelStyle"
          :style="cvvError.length ? 'color: #FF5252' : ''"
          >CVV
        </span>
        <v-row no-gutters align="start">
          <v-col :cols="cvvError.length ? '9' : '12'">
            <v-text-field
              outlined
              dense
              class="rounded-lg"
              v-model="userCard.cvv"
              color="#085895"
              :error-messages="cvvError"
              v-mask="'###'"
            >
              <template v-slot:append>
                <img
                  src="@/assets/img/bookingTicketIcon/cardCvv.svg"
                  class="pt-1"
                /> </template
            ></v-text-field>
          </v-col>
          <v-icon
            v-if="cvvError.length"
            class="mt-2"
            style="padding-left: 8px"
            color="#FF5252"
            >mdi-alert-circle-outline</v-icon
          >
        </v-row>
      </v-col>
    </v-row>
    <span
      class="creditCardFieldLabelStyle"
      :style="ownerNameError.length ? 'color: #FF5252' : ''"
    >
      Власник картки
    </span>
    <v-row no-gutters align="start">
      <v-text-field
        outlined
        dense
        class="rounded-lg"
        v-model="userCard.owner_name"
        color="#085895"
        :error-messages="ownerNameError"
      ></v-text-field>
      <v-icon
        v-if="ownerNameError.length"
        class="mt-2"
        style="padding-left: 10px"
        color="#FF5252"
        >mdi-alert-circle-outline</v-icon
      >
    </v-row>
  </v-col>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    userCard: {},
  }),
  props: {
    touch: {
      require: false,
    },
  },
  watch: {
    touch: {
      deep: true,
      handler() {
        this.$v.$touch();
      },
    },
    "$v.userCard.$invalid": {
      deep: true,
      handler() {
        this.$emit("userInputValidCreditCardData");
      },
    },
  },
  validations: {
    userCard: {
      card_number: {
        required,
        minLength: minLength(17),
      },
      expired_day: {
        required,
        minLength: minLength(5),
      },
      cvv: {
        required,
        minLength: minLength(3),
      },
      owner_name: {
        required,
      },
    },
  },
  computed: {
    cardNumberError() {
      const errors = [];
      if (!this.$v.userCard.card_number.$dirty) {
        return errors;
      } else if (!this.$v.userCard.card_number.required) {
        errors.push("");
      }
      if (!this.$v.userCard.card_number.minLength) {
        errors.push("");
      }
      return errors;
    },
    expiredDayError() {
      const errors = [];
      if (!this.$v.userCard.expired_day.$dirty) {
        return errors;
      } else if (!this.$v.userCard.expired_day.required) {
        errors.push("");
      }
      if (!this.$v.userCard.expired_day.minLength) {
        errors.push("");
      }
      return errors;
    },
    cvvError() {
      const errors = [];
      if (!this.$v.userCard.cvv.$dirty) {
        return errors;
      } else if (!this.$v.userCard.cvv.required) {
        errors.push("");
      }
      if (!this.$v.userCard.cvv.minLength) {
        errors.push("");
      }
      return errors;
    },
    ownerNameError() {
      const errors = [];
      if (!this.$v.userCard.owner_name.$dirty) {
        return errors;
      } else if (!this.$v.userCard.owner_name.required) {
        errors.push("");
      }
      return errors;
    },
  },
};
</script>

<style>
.creditCardFieldLabelStyle {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
}
</style>