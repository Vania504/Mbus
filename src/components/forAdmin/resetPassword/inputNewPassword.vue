<template>
  <v-row no-gutters justify="center">
    <success-snackbar
      v-if="successChangePassword"
      snackbarText="Ваш пароль успішно змінено"
    />
    <v-card
      width="890px"
      height="460px"
      style="
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
        border-radius: 10px;
      "
    >
      <div class="resetPasswordHeader">
        <output class="resetPassword"> Відновлення паролю </output>
      </div>
      <div
        style="display: flex; justify-content: center"
        :style="
          $vuetify.breakpoint.xs ? 'padding-top: 20px' : 'padding-top: 55px'
        "
      >
        <v-col class="py-0" cols="12" xl="8" lg="6" md="6" sm="12">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="mt-5"
                dense
                outlined
                v-model.trim="password.password"
                label="Новий пароль"
                v-bind="attrs"
                type="password"
                v-on="on"
                :error-messages="passwordError"
              />
            </template>
            <span
              >Пароль повинен містити мінімум 8 символів , одну велику літеру,
              одну малу , <br />цифру та символ</span
            >
          </v-tooltip>
          <v-text-field
            dense
            outlined
            v-model.trim="password.confirm_password"
            label="Підтвердіть пароль"
            type="password"
            :error-messages="confirmPasswordError"
          />
          <v-row
            no-gutters
            align="center"
            justify="center"
            style="margin-top: 20px"
          >
            <v-btn
              width="150px"
              height="35px"
              color="#085895"
              dark
              style="margin-right: 30px"
              @click="sendPassword"
              >Зберегти</v-btn
            >
            <v-btn
              color="#6B7C8A"
              dark
              width="150px"
              height="35px"
              @click="$router.push('')"
              >Скасувати</v-btn
            >
          </v-row>
        </v-col>
      </div>
    </v-card>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import successSnackbar from "@/components/UI/successSnackbar.vue";
import authService from "@/requests/admin/authService";
export default {
  components: {
    successSnackbar,
  },
  data: () => ({
    password: {},
    successChangePassword: false,
  }),
  mixins: [validationMixin],
  validations: {
    password: {
      password: {
        required,
        minLength: minLength(8),
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
    sendPassword() {
      this.$v.$touch();
      if (!this.$v.password.$invalid) {
        let form = new FormData();
        console.log("Mbuskolomyia");
        form.append("token", this.$route.params.code);
        form.append("email", localStorage.getItem("userEmail"));
        form.append("password", this.password.password);
        form.append("password_confirmation", this.password.confirm_password);
        authService.changePassword(form).then(() => {
          this.successChangePassword = true;
          setTimeout(this.pushToLogin, 1000);
          localStorage.clear();
        });
      }
    },
    pushToLogin() {
      this.$router.push("/login");
    },
  },
  computed: {
    passwordError() {
      const errors = [];
      if (!this.$v.password.password.$dirty) {
        return errors;
      }

      if (
        !this.$v.password.password.valid &&
        !this.$v.password.password.minLength
      ) {
        errors.push(
          "Пароль повинен містити мінімум 8 символів , одну велику літеру, одну малу , цифру та символ"
        );
        return errors;
      }
      !this.$v.password.password.required &&
        errors.push("Поле пароль обов'язкове");
      return errors;
    },
    confirmPasswordError() {
      const errors = [];
      if (!this.$v.password.confirm_password.$dirty) {
        return errors;
      }
      if (!this.$v.password.confirm_password.required) {
        errors.push("Поле підтвердіть пароль обов'язкове");
        return errors;
      }
      !this.$v.password.confirm_password.sameAsPassword &&
        errors.push("Паролі не збігаються");
      return errors;
    },
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .resetPassword {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.1em;
    color: #243949;
  }
  .resetPasswordHeader {
    border-bottom: 1px solid rgba(8, 88, 149, 0.53);
    width: 100%;
    height: 54px;
    padding: 15px 10px 10px 10px;
    text-align: left;
  }
}
@media only screen and (min-width: 610px) {
  .resetPassword {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.1em;
    color: #243949;
  }
  .resetPasswordHeader {
    border-bottom: 1px solid rgba(8, 88, 149, 0.53);
    width: 100%;
    height: 68px;
    padding: 20px 30px 20px 30px;
    text-align: left;
  }
}
</style>