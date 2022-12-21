<template>
  <div style="text-align: center">
    <error-snackbar v-if="showErrorSnackbar" :snackbarText="snackbarText" />
    <v-col class="px-0">
      <v-row no-gutters align="center" justify="start">
        <v-icon color="#243949" style="margin-right: 5px" @click="$emit('back')"
          >mdi-menu-left</v-icon
        >
        <span
          @click="$emit('back')"
          style="
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.1em;
            color: #243949;
          "
          >Назад</span
        >
      </v-row>
      <p
        style="
          font-weight: 500;
          font-size: 20px;
          line-height: 23px;
          letter-spacing: 0.1em;
          margin-top: 50px;
          color: #085895;
        "
      >
        Відновлення паролю
      </p>
      <div v-if="successSendEmail" style="text-align: center">
        <h4
          style="
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            /* identical to box height */

            letter-spacing: 0.1em;

            color: #243949;
          "
        >
          Запит успішно прийнятий
        </h4>
        <br />
        <p
          class="mx-5"
          style="
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.1em;
            color: #243949;
            text-align: left;
          "
        >
          На пошту
          <strong
            >{{ email.substr(0, 3) }}***{{
              email.substr(email.length - 14, email.length - 1)
            }}</strong
          >, вказану під час реєстрації, зараз прийде лист. У ньому буде
          посилання, по якому слід перейти, щоб Ви змогли створити новий пароль.
          <strong>Дуже важливо</strong> не забути перевірити папку "СПАМ" у
          своїй поштовій скриньці, якщо лист довго не надходить!
        </p>
        <v-btn
          width="200px"
          height="35px"
          style="
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.1em;
            color: #ffffff; 
            margin-top: 40px;
          "
          color="#085895"
          @click="$router.go('/')"
          >На головну</v-btn
        >
      </div>
      <div v-else>
        <v-col>
          <v-text-field
            outlined
            dense
            color="#085895"
            v-model="email"
            :append-icon="emailError.length ? 'mdi-alert-circle-outline' : ''"
            label="Email"
            placeholder="Введіть тут.."
            :error-messages="emailError"
          />
        </v-col>
        <v-btn
          width="200px"
          height="35px"
          style="
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.1em;
            color: #ffffff;
          "
          color="#085895"
          @click="sendEmail"
          >Скинути пароль</v-btn
        >
        <br /><br />
        <v-btn
          width="200px"
          height="35px"
          text
          style="
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            text-transform: none;
            letter-spacing: 0.1em;
            color: #50616e;
          "
          @click="$emit('back')"
          >Скасувати</v-btn
        >
      </div>
    </v-col>
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
    email: "golinskijandrij416@gmail.com",
    showErrorSnackbar: false,
    successSendEmail: false,
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
            this.successSendEmail = true;
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