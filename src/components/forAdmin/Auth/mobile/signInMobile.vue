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
        Вхід
      </p>
      <v-col>
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
          hide-details
        />
        <v-row no-gutters align="center">
          <v-checkbox v-model="rememberMe" color="#085895" class="mr-1" />
          <span
            style="
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.1em;
              color: #50616e;
              margin-bottom: 2px;
            "
            >Запам’ятати мене</span
          >
          <v-row no-gutters justify="end">
            <span
              style="
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 0.1em;
                color: #085895;
              "
              @click="$emit('resetPassword')"
              >Забули пароль</span
            >
          </v-row>
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
        @click="signIn"
        >Увійти</v-btn
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
        @click="$emit('goToSignUp')"
      >
        Зареєструватись
      </span>
    </v-col>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import authService from "@/requests/admin/authService";
import errorSnackbar from "@/components/UI/errorSnackbar.vue";
export default {
  mixins: [validationMixin],
  components: {
    errorSnackbar,
  },
  data: () => ({
    user: {},
    showErrorSnackbar: false,
    rememberMe: false,
    snackbarText: "",
  }),
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...mapActions(["updateInfoLogged"]),
    async signIn() {
      this.showErrorSnackbar = false;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let user = new FormData();
        user.append("email", this.user.email);
        user.append("password", this.user.password);
        let response = await authService.signIn(user).catch(() => {
          this.snackbarText = "Email або пароль введено неправильно";
          this.showErrorSnackbar = true;
        });
        let timeout = 2 * 3600;
        if (this.rememberMe) {
          timeout = 12 * 3600;
        }
        if (response.status == "success") {
          this.updateInfoLogged({
            email: this.user.email,
            password: this.user.password,
            token: response.authorisation.token,
            role_id: response.user.role_id,
            first_name: response.user.first_name,
            last_name: response.user.last_name,
            timeout: timeout,
          });
          this.$emit("back");
        }
      }
    },
  },
  computed: {
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
      !this.$v.user.password.required && errors.push("");
      return errors;
    },
  },
};
</script>

<style>
</style>