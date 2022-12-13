<template>
  <v-card class="userDataCard">
    <v-col class="px-0">
      <v-row no-gutters align="center" style="padding: 0px 15px 10px 15px">
        <img
          src="@/assets/img/contactIcon.svg"
          alt="contact"
          style="margin-right: 10px"
        />
        <span class="cardTitle">Контактні дані</span>
      </v-row>
      <v-divider style="border: 1px solid rgba(8, 88, 149, 0.53)" />
      <v-row no-gutters align="center" style="padding: 15px 15px 0px 15px">
        <v-col cols="6" style="padding-right: 20px">
          <v-text-field
            v-model="userData.first_name"
            class="rounded-lg"
            outlined
            dense
            label="Прізвище"
            color="#085895"
            :error-messages="firstNameError"
            :append-icon="
              firstNameError.length ? 'mdi-alert-circle-outline' : ''
            "
        /></v-col>
        <v-col cols="6" style="padding-left: 20px">
          <v-text-field
            v-model="userData.last_name"
            class="rounded-lg"
            outlined
            dense
            label="Ім'я"
            color="#085895"
            :error-messages="lastNameError"
            :append-icon="
              lastNameError.length ? 'mdi-alert-circle-outline' : ''
            "
          />
        </v-col>
      </v-row>
      <v-row no-gutters align="center" style="padding: 0px 15px 0px 15px">
        <v-col cols="6" style="padding-right: 20px">
          <v-text-field
            v-model="userData.phone_number"
            class="rounded-lg"
            outlined
            dense
            label="Номер телефону"
            color="#085895"
            :error-messages="phoneNumberError"
            :append-icon="
              phoneNumberError.length ? 'mdi-alert-circle-outline' : ''
            "
        /></v-col>
        <v-col cols="6" style="padding-left: 20px">
          <v-text-field
            v-model="userData.email"
            class="rounded-lg"
            outlined
            dense
            label="Email"
            color="#085895"
            :error-messages="emailError"
            err
            :append-icon="emailError.length ? 'mdi-alert-circle-outline' : ''"
          />
        </v-col>
      </v-row>
      <p
        style="
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.1em;
          color: #243949;
          padding-left: 15px;
        "
      >
        <span style="font-weight: 500">Багаж</span><br />
        1 од. 25 кг 90x40x30 см безкоштовно, кожна наступна 10% ціни квитка
      </p>
    </v-col>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    userData: {},
  }),
  props: {
    touch: {
      require: false,
    },
  },
  validations: {
    userData: {
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      phone_number: {
        required,
        minLength: minLength(15),
      },
      email: {
        required,
        email,
      },
    },
  },
  watch: {
    touch: {
      deep: true,
      handler() {
        this.$v.$touch();
      },
    },
    '$v.userData.$invalid': {
      deep: true,
      handler(){
        if(this.$v.userData.$invalid == false){
          this.$emit('userInputValidUserData')
        }
      }
    }
  },
  computed: {
    firstNameError() {
      const errors = [];
      if (!this.$v.userData.first_name.$dirty) {
        return errors;
      }
      !this.$v.userData.first_name.required && errors.push("");
      return errors;
    },
    lastNameError() {
      const errors = [];
      if (!this.$v.userData.last_name.$dirty) {
        return errors;
      }
      !this.$v.userData.last_name.required && errors.push("");
      return errors;
    },
    phoneNumberError() {
      const errors = [];
      if (!this.$v.userData.phone_number.$dirty) {
        return errors;
      } else if (!this.$v.userData.phone_number.required) {
        errors.push("");
      }
      if (!this.$v.userData.phone_number.minLength) {
        errors.push("");
      }
      return errors;
    },
    emailError() {
      const errors = [];
      if (!this.$v.userData.email.$dirty) {
        return errors;
      } else if (!this.$v.userData.email.required) {
        errors.push("");
      }
      if (!this.$v.userData.email.email) {
        errors.push("");
      }
      return errors;
    },
  },
};
</script>

<style>
.userDataCard {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
</style>