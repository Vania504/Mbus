<template>
  <v-col style="text-align: left" class="px-0">
    <v-snackbar top v-model="successSnackbar" color="success">
      <v-row align="center">
        <v-icon class="mx-3">mdi-check</v-icon>
        <v-col>
          <span>Ваше повідомлення успішно надіслано</span>
        </v-col>
      </v-row>
    </v-snackbar>
    <v-col cols="12" lg="12" md="11" sm="12" xl="12" class="py-0 px-0">
      <span class="blackSpan"
        >Ім'я та прізвище<span class="requireColor">*</span></span
      >
      <v-text-field
        dense
        outlined
        color="#085895"
        placeholder="Введіть ім’я та прізвище..."
        v-model="userMessage.name"
        :error-messages="nameError"
        @blur="$v.userMessage.name.$touch()"
    /></v-col>
    <v-row no-gutters align="start">
      <v-col cols="12" lg="6" md="5" sm="12" xl="6"
        ><span class="blackSpan">Email<span class="requireColor">*</span></span>
        <v-text-field
          dense
          outlined
          color="#085895"
          placeholder="Введіть Email..."
          v-model="userMessage.email"
          :error-messages="emailError"
          @blur="$v.userMessage.email.$touch()"
      /></v-col>
      <v-col
        cols="12"
        lg="5"
        md="5"
        sm="12"
        xl="6"
        :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : 'pl-13'"
        ><span class="blackSpan"
          >Номер телефону<span class="requireColor">*</span></span
        >
        <v-text-field
          dense
          outlined
          color="#085895"
          placeholder="Введіть номер телефону..."
          v-model="userMessage.phone_number"
          :error-messages="phoneNumberError"
          v-mask="'+38 (###) ####-###'"
          @blur="$v.userMessage.phone_number.$touch()"
      /></v-col>
    </v-row>
    <span class="blackSpan"
      >Повідомлення<span class="requireColor">*</span></span
    >
    <v-textarea
      dense
      outlined
      color="#085895"
      placeholder="Введіть повідомлення..."
      v-model="userMessage.message"
      :error-messages="messageError"
      @blur="$v.userMessage.message.$touch()"
    />
    <v-row justify="center">
      <v-btn
        width="262px"
        height="36px"
        color="#085895"
        class="mt-2 white--text"
        style="text-transform: none"
        @click="sendMessage"
        >Надіслати повідомлення</v-btn
      >
    </v-row>
  </v-col>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import contactService from "@/requests/admin/contactService";
export default {
  mixins: [validationMixin],
  data: () => ({
    userMessage: {},
    successSnackbar: false,
  }),
  validations: {
    userMessage: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone_number: {
        required,
        minLength: minLength(18),
      },
      message: {
        required,
      },
    },
  },
  methods: {
    async sendMessage() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let message = new FormData();
        message.append("name", this.userMessage.name);
        message.append("email", this.userMessage.email);
        message.append(
          "phone_number",
          this.userMessage.phone_number.replace(/\D+/g, "")
        );
        message.append("message", this.userMessage.message);
        let response = await contactService.sendMessage(message);
        if (response.status == "success") {
          this.successSnackbar = true;
          this.userMessage = {};
          this.$v.$reset();
        }
      }
    },
  },
  computed: {
    nameError() {
      const errors = [];
      if (!this.$v.userMessage.name.$dirty) {
        return errors;
      }
      !this.$v.userMessage.name.required &&
        errors.push("Ім'я та прізвище обов'язкове");
      return errors;
    },
    emailError() {
      const errors = [];
      if (!this.$v.userMessage.email.$dirty) {
        return errors;
      }
      !this.$v.userMessage.email.required && errors.push("Email обов'язковий");
      !this.$v.userMessage.email.email &&
        errors.push("Email введений некорректно");
      return errors;
    },
    phoneNumberError() {
      const errors = [];
      if (!this.$v.userMessage.phone_number.$dirty) {
        return errors;
      } else if (!this.$v.userMessage.phone_number.required) {
        errors.push("Номер телефону обов'язквовий");
        return errors;
      }
      if (!this.$v.userMessage.phone_number.minLength) {
        errors.push("Некорректно введено номер телефону");
      }
      return errors;
    },
    messageError() {
      const errors = [];
      if (!this.$v.userMessage.message.$dirty) {
        return errors;
      } else if (!this.$v.userMessage.message.required) {
        errors.push("Повідомлення обов'язкове");
        return errors;
      }
      return errors;
    },
  },
};
</script>

<style>
</style>