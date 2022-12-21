<template>
  <div class="pageBackground">
    <v-main>
      <v-container>
        <v-row no-gutters justify="center">
          <v-card width="890px">
            <v-col class="px-0">
              <div class="editProfileHeader">
                <v-row no-gutters align="center">
                  <img
                    src="@/assets/img/contactIcon.svg"
                    style="margin-right: 10px"
                  />
                  <span class="editProfileTitle">Налаштування профілю</span>
                </v-row>
              </div>
              <div class="editProfileContent">
                <p class="sectionName">Користувач</p>
                <v-col class="px-0 py-0">
                  <v-row no-gutters align="center">
                    <v-text-field
                      dense
                      outlined
                      placeholder="Введіть тут.."
                      label="Ім'я"
                      color="#085895"
                      v-model="user.last_name"
                      style="padding-rigth: 15px"
                      class="rounded-lg"
                      :error-messages="lastNameError"
                    />
                    <v-text-field
                      dense
                      outlined
                      placeholder="Введіть тут.."
                      label="Прізвище"
                      color="#085895"
                      v-model="user.first_name"
                      :style="
                        $vuetify.breakpoint.xs ? '' : 'padding-left: 15px'
                      "
                      class="rounded-lg"
                      :error-messages="firstNameError"
                    />
                  </v-row>
                  <v-row no-gutters align="center">
                    <v-text-field
                      dense
                      outlined
                      placeholder="Введіть тут.."
                      label="Номер телефону"
                      v-mask="'+##(###) ###-##-##'"
                      color="#085895"
                      v-model="user.phone_number"
                      style="padding-rigth: 15px"
                      class="rounded-lg"
                    />
                    <v-text-field
                      dense
                      outlined
                      placeholder="Введіть тут.."
                      label="Email"
                      color="#085895"
                      v-model="user.email"
                      :style="
                        $vuetify.breakpoint.xs ? '' : 'padding-left: 15px'
                      "
                      class="rounded-lg"
                      :error-messages="emailError"
                    />
                  </v-row>
                </v-col>
                <p class="sectionName">Пароль</p>
                <v-row no-gutters align="start">
                  <v-col
                    cols="12"
                    xl="6"
                    lg="6"
                    md="6"
                    sm="12"
                    class="px-0 py-0"
                  >
                    <v-text-field
                      outlined
                      dense
                      color="#164B78"
                      placeholder="Введіть тут.."
                      label="Старий пароль"
                      class="rounded-lg"
                      v-model="password.current_password"
                      :type="showCurrentPassword ? 'text' : 'password'"
                      :append-icon="
                        showCurrentPassword ? 'mdi-eye' : 'mdi-eye-off'
                      "
                      :hide-details="
                        !isChangePassword && $vuetify.breakpoint.xs
                      "
                      @click:append="showCurrentPassword = !showCurrentPassword"
                    />
                    <v-text-field
                      outlined
                      dense
                      color="#164B78"
                      placeholder="Введіть тут.."
                      label="Новий пароль"
                      class="rounded-lg"
                      v-model="password.password"
                      :type="showNewPassword ? 'text' : 'password'"
                      :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showNewPassword = !showNewPassword"
                      v-if="isChangePassword"
                    />
                    <v-text-field
                      outlined
                      dense
                      color="#164B78"
                      placeholder="Введіть тут.."
                      label="Повторіть пароль"
                      class="rounded-lg"
                      v-model="password.confirm_password"
                      :type="showConfirmPassword ? 'text' : 'password'"
                      :append-icon="
                        showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                      "
                      @click:append="showConfirmPassword = !showConfirmPassword"
                      v-if="isChangePassword"
                    />
                  </v-col>
                  <span
                    class="changePasswordText"
                    @click="isChangePassword = true"
                    v-if="!isChangePassword && !$vuetify.breakpoint.xs"
                    >Змінити пароль</span
                  >
                </v-row>
                <v-row
                  no-gutters
                  justify="end"
                  v-if="!isChangePassword && $vuetify.breakpoint.xs"
                >
                  <span
                    class="changePasswordText"
                    @click="isChangePassword = true"
                    >Змінити пароль</span
                  >
                </v-row>
                <v-row
                  no-gutters
                  align="center"
                  justify="center"
                  style="margin-top: 40px"
                >
                  <v-btn
                    width="150px"
                    height="35px"
                    :disabled="
                      isChangePassword
                        ? $v.password.$invalid && $v.user.$invalid
                        : $v.user.$invalid
                    "
                    color="#164B78"
                    style="
                      margin-right: 30px;
                      font-weight: 400;
                      font-size: 16px;
                      line-height: 19px;
                      letter-spacing: 0.1em;
                      color: #ffffff;
                      text-transform: none;
                    "
                  >
                    Зберегти
                  </v-btn>
                  <v-btn
                    width="150px"
                    height="35px"
                    disabled
                    color="#164B78"
                    style="
                      font-weight: 400;
                      font-size: 16px;
                      line-height: 19px;
                      letter-spacing: 0.1em;
                      color: #ffffff;
                      text-transform: none;
                    "
                  >
                    Скасувати
                  </v-btn> </v-row
                >`
              </div>
            </v-col>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { email, required, minLength, sameAs } from "vuelidate/lib/validators";
import profileService from "@/requests/main/profileService";
export default {
  mixins: [validationMixin],
  data: () => ({
    user: {},
    password: {},
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
    isChangePassword: false,
  }),
  validations: {
    user: {
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      email: {
        required,
        email,
      },
    },
    password: {
      current_password: {
        required,
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
  mounted() {
    this.getUserProfile();
  },
  methods: {
    async getUserProfile() {
      let response = await profileService.getUserProfile();
      console.log("user Profile: ", response);
      this.user = response.data;
    },
    async updateUserData() {
      this.$v.user.$touch();
      if (!this.$v.user.$invalid) {
        let user = new FormData();
        user.append("first_name", this.user.first_name);
        user.append("last_name", this.user.last_name);
        user.append("phone_number", this.user.phone_number);
        user.append("email", this.user.email);
        await profileService.updateUserProfile(user).then(() => {
          this.getUserProfile();
        });
        if (this.isChangePassword) {
          this.updateUserPassword();
        }
      }
    },
    async updateUserPassword() {
      this.$v.password.$touch();
      if (!this.$v.password.$invalid) {
        let password = new FormData();
        password.append("password", this.password.password);
        await profileService.updateUserPassword(password);
      }
    },
  },
  computed: {
    firstNameError() {
      const errors = [];
      if (!this.$v.user.first_name.$dirty) {
        return errors;
      } else if (!this.$v.user.first_name.required) {
        errors.push("");
      }
      return errors;
    },
    lastNameError() {
      const errors = [];
      if (!this.$v.user.last_name.$dirty) {
        return errors;
      } else if (!this.$v.user.last_name.required) {
        errors.push("");
      }
      return errors;
    },
    emailError() {
      const errors = [];
      if (!this.$v.user.email.$dirty) {
        return errors;
      } else if (!this.$v.user.email.required) {
        errors.push("");
      }
      if (!this.$v.user.email.email) {
        errors.push("");
      }
      return errors;
    },
    currentPasswordError() {
      const errors = [];
      if (!this.$v.password.current_password.$dirty) {
        return errors;
      }
      if (!this.$v.password.current_password.required) {
        errors.push("");
        return errors;
      }
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.password.password.$dirty) {
        return errors;
      }
      if (!this.$v.password.password.required) {
        errors.push("");
        return errors;
      }
      if (
        (!this.$v.password.password.valid &&
          this.$v.password.password.required) ||
        (!this.$v.password.password.minLength &&
          this.$v.password.password.required)
      ) {
        errors.push("");
        return errors;
      }
      return errors;
    },
    confirmPasswordError() {
      const errors = [];
      if (!this.$v.password.confirm_password.$dirty) {
        return errors;
      }
      if (!this.$v.password.confirm_password.sameAsPassword) {
        errors.push("");
        return errors;
      }
      !this.$v.password.confirm_password.required && errors.push("");
      return errors;
    },
  },
};
</script>

<style>
.editProfileHeader {
  padding: 10px 20px 10px 20px;
  border-bottom: 1px solid rgba(8, 88, 149, 0.53);
}
.editProfileHeader {
  padding: 10px 20px 10px 20px;
  border-bottom: 1px solid rgba(8, 88, 149, 0.53);
}
.editProfileContent {
  padding: 20px 30px 10px 30px;
  text-align: left;
}
.sectionName {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.1em;
  color: #243949;
}
.changePasswordText {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #085895;
  margin-left: 20px;
  margin-top: 12px;
  cursor: pointer;
}
.theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn-outlined) {
  color: white !important;
  background: #6b7c8a !important;
}
@media only screen and (min-width: 600px) {
  .pageBackground {
    background: #122b3e;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    min-height: 80vh;
    padding: 100px 0px 50px 0px;
  }
}
@media only screen and (max-width: 600px) {
  .pageBackground {
    background: #122b3e;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    min-height: 80vh;
    padding: 20px 0px 30px 0px;
  }
}
</style>