<template>
  <div>
    <error-snackbar v-if="showErrorSnackbar" :snackbarText="snackbarText" />
    <v-card
      width="900px"
      height="350px"
      style="display: flex; justify-content: center; align-items: center"
    >
      <v-col class="px-0 py-0 mb-10" cols="6" >
        <v-text-field
          color="#085895"
          class="rounded-0"
          label="Введіть ваш Email"
          type="email"
          dense
          outlined
          v-model="email"
          :error-messages="emailError"
        />
        <v-row no-gutters justify="end" style="margin-top: 5px">
          <v-btn
            text
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              text-transform: none;
              letter-spacing: 0.1em;
              color: #50616e; 
            "
            @click="$emit('close')"
            >Скасувати</v-btn
          >
          <v-btn
            color="#085895"
            width="200px"
            height="35px"
            dark
            @click="sendEmail"
            >Скинути пароль</v-btn
          >
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>
  
  <script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import authService from "@/requests/admin/authService";
import errorSnackbar from "@/components/UI/errorSnackbar.vue";
export default {
  mixins: [validationMixin],
  components: {
    errorSnackbar,
  },
  data: () => ({
    email: "",
    showErrorSnackbar: false,
    snackbarText: "",
  }),
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    async sendEmail() {
      this.$v.$touch();
      this.showErrorSnackbar = false;
      if (!this.$v.$invalid) {
        let email = new FormData();
        email.append("email", this.email);
        await authService
          .resetPassword(email)
          .then(() => {
            localStorage.setItem("userEmail", this.email);
            this.$emit("successSendEmail");
          })
          .catch(() => {
            this.snackbarText = "Користувача з таким email не існує";
            this.showErrorSnackbar = true;
          });
      }
    },
  },
  computed: {
    emailError() {
      const errors = [];
      if (!this.$v.email.$dirty) {
        return errors;
      }
      !this.$v.email.required && errors.push("Поле email обов'язкове");
      if (!this.$v.email.email) {
        errors.push("Введено некоректний email");
        return errors;
      }
      return errors;
    },
  },
};
</script>
  
  <style>
</style>