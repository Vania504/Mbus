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
        Реєстрація
      </p>
      <v-col>
        <v-text-field
          outlined
          dense
          color="#085895"
          v-model="user.username"
          :append-icon="usernameError.length ? 'mdi-alert-circle-outline' : ''"
          label="Ім'я користувача"
          placeholder="Введіть тут.."
          :error-messages="usernameError"
        />
        <v-text-field
          outlined
          dense
          color="#085895"
          v-model="user.email"
          :append-icon="emailError.length ? 'mdi-alert-circle-outline' : ''"
          label="Email"
          placeholder="Введіть тут.."
          :error-messages="emailError"
        />
        <v-text-field
          outlined
          dense
          color="#085895"
          v-model="user.password"
          :append-icon="passwordError.length ? 'mdi-alert-circle-outline' : ''"
          label="Пароль"
          type="password"
          placeholder="Введіть тут.."
          :error-messages="passwordError"
        />
        <v-text-field
          outlined
          dense
          color="#085895"
          v-model="user.confirm_password"
          :append-icon="
            confirmPasswordError.length ? 'mdi-alert-circle-outline' : ''
          "
          label="Пароль"
          type="password"
          placeholder="Введіть тут.."
          :error-messages="confirmPasswordError"
          hide-details
        />
        <v-row
          no-gutters
          align="start"
          justify="start"
          class="mb-5"
          style="margin-top: 10px"
        >
          <v-checkbox color="#085895" v-model="isAggre"/>
          <v-col cols="11" style="text-align: left" class="px-0 pt-4">
            <span
              style="
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 0.1em;
                color: #50616e;
                text-align: left;
              "
              >Згоден з <span class="linkColor">Угодою користувача</span>, з
              <span class="linkColor">Обробкою моїх пересональних</span> даних у
              відпповідніості з
              <span class="linkColor">Політикою конфіденційності</span></span
            >
          </v-col>
        </v-row>
      </v-col>
      <v-btn
        width="208px"
        height="39px"
        style="
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.1em;
          color: #ffffff;
        "
        color="#085895"
        @click="signUp"
        >Зареєструватись</v-btn
      >
      <v-row no-gutters justify="center">
        <div style="width: 243px; margin-top: 20px; margin-bottom: 15px">
          <v-row no-gutters align="center" justify="center">
            <v-divider
              width="100px"
              style="border: 0.5px solid rgba(8, 88, 149, 0.2)"
            />
            <output
              style="
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 0.1em;
                color: #50616e; 
                margin: 0px 10px 0px 10px;
              "
              >або</output
            >
            <v-divider
              width="100px"
              style="border: 0.5px solid rgba(8, 88, 149, 0.2)"
            />
          </v-row>
        </div>
      </v-row>
      <span
        style="
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.1em;
          color: #085895;
        "
        @click="$emit('goToSignIn')"
      >
        Увійти
      </span>
    </v-col>
  </div>
</template>
  
  <script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import authService from "@/requests/admin/authService";
import errorSnackbar from "../UI/errorSnackbar.vue";
export default {
  mixins: [validationMixin],
  components: {
    errorSnackbar,
  },
  data: () => ({
    user: {},
    showErrorSnackbar: false,
    isAggre: false,
    snackbarText: "",
  }),
  validations: {
    user: {
      username: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
        validUppercase: function (value) {
          const containsUppercase = /[A-Z]/.test(value);
          return containsUppercase;
        },
        validLowercase: function (value) {
          const containsLowercase = /[a-z]/.test(value);
          return containsLowercase;
        },
        validNumber: function (value) {
          const containsNumber = /[0-9]/.test(value);
          return containsNumber;
        },
        validSpecial: function (value) {
          const containsSpecial = /[#?!@$%^&*-]/.test(value);
          return containsSpecial;
        },
        valid: function (value) {
          const containsUppercase = /[A-Z]/.test(value);
          const containsLowercase = /[a-z]/.test(value);
          const containsNumber = /[0-9]/.test(value);
          const containsSpecial = /[#?!@$%^&*-]/.test(value);
          return (
            containsUppercase &&
            containsLowercase &&
            containsNumber &&
            containsSpecial &&
            minLength
          );
        },
      },
      confirm_password: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    ...mapActions(["updateInfo"]),
    async signUp() {
      this.$v.$touch();
      if (!this.$v.$invalid && this.isAggre) {
        let user = new FormData();
        user.append("first_name", this.user.username);
        user.append("email", this.user.email);
        user.append("password", this.user.password);
        let response = await authService.signUp(user);
        this.updateInfo({
          token: response.authorisation.token,
        });
        this.$emit("goToSignIn");
      }
    },
  },
  computed: {
    usernameError() {
      const errors = [];
      if (!this.$v.user.username.$dirty) {
        return errors;
      } else if (!this.$v.user.username.required) {
        errors.push("");
      }
      return errors;
    },
    emailError() {
      const errors = [];
      if (!this.$v.user.email.$dirty) {
        return errors;
      }
      !this.$v.user.email.required && errors.push("");
      if (!this.$v.user.email.email) {
        errors.push("");
        return errors;
      }
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.user.password.$dirty) {
        return errors;
      }
      if (!this.$v.user.password.required) {
        errors.push("");
        return errors;
      }
      if (
        (!this.$v.user.password.valid && this.$v.user.password.required) ||
        (!this.$v.user.password.minLength && this.$v.user.password.required)
      ) {
        errors.push("");
        return errors;
      }
      return errors;
    },
    confirmPasswordError() {
      const errors = [];
      if (!this.$v.user.confirm_password.$dirty) {
        return errors;
      }
      if (!this.$v.user.confirm_password.sameAsPassword) {
        errors.push("");
        return errors;
      }
      !this.$v.user.confirm_password.required && errors.push("");
      return errors;
    },
  },
};
</script>
  
  <style>
</style>