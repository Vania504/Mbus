<template>
  <v-dialog
    v-model="visibility"
    :width="$vuetify.breakpoint.xs ? '90%' : '900px'"
    style="overflow: hidden"
  >
    <modal-header
      title="Реєстрація користувача"
      @close="$emit('close')"
      :showCloseIcon="true"
    />
    <v-card style="overflow: hidden">
      <v-row justify="center" class="pt-10">
        <v-col cols="10" lg="7" md="7" sm="7" xl="7">
          <v-text-field
            dense
            outlined
            v-model="user.username"
            color="7B8892"
            placeholder="Прізвище"
            :error-messages="usernameError"
            @blur="$v.user.username.$touch()"
          />
          <v-text-field
            dense
            outlined
            v-model="user.email"
            color="7B8892"
            placeholder="Email"
            :error-messages="emailError"
            @blur="$v.user.email.$touch()"
          />
          <v-text-field
            dense
            outlined
            v-model="user.password"
            color="7B8892"
            placeholder="Пароль"
            type="password"
            :error-messages="passwordError"
            @blur="$v.user.password.$touch()"
          />
          <v-text-field
            dense
            outlined
            v-model="user.password_confirm"
            color="7B8892"
            placeholder="Повторити пароль"
            type="password"
            :error-messages="passwordConfirmError"
            @blur="$v.user.password_confirm.$touch()"
          />
          <v-row
            no-gutters
            :align="$vuetify.breakpoint.xs ? 'start' : 'end'"
            justify="start"
            class="py-0 mb-5"
          >
            <v-checkbox color="#085895" />
            <v-col
              cols="10"
              lg="11"
              md="11"
              sm="11"
              xl="11"
              style="text-align: left"
              class="mb-1"
            >
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
                <span class="linkColor">Обробкою моїх пересональних</span> даних
                у відпповідніості з
                <span class="linkColor">Політикою конфіденційності</span></span
              >
            </v-col>
          </v-row>
          <v-btn
            style="text-transform: none; font-size: 16px"
            width="208px"
            height="39px"
            class="white--text"
            color="#085895"
            @click="signUp"
            >Зареєструватися</v-btn
          >
          <v-row no-gutters align="center">
            <v-col>
              <v-divider class="mt-10 mb-5 mr-5 px-15 divider" />
            </v-col>
            <span>або</span>
            <v-col> <v-divider class="mt-10 mb-5 ml-5 px-15 divider" /> </v-col
          ></v-row>
          <div class="mb-5">
            <span class="signInTextStyle pointer" @click="$emit('goToSignIn')"
              >Увійти</span
            >
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import modalHeader from "@/components/UI/modalHeader.vue";
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import authService from "@/requests/admin/authService";
import { mapActions } from "vuex";
import modalMixin from "@/mixins/modalMixin";
export default {
  mixins: [validationMixin, modalMixin],
  components: {
    modalHeader,
  },
  data: () => ({
    user: {},
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
      password_confirm: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    ...mapActions(["updateInfo"]),
    async signUp() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let user = new FormData();
        user.append("first_name", this.user.username);
        user.append("email", this.user.email);
        user.append("password", this.user.password);
        let response = await authService.signUp(user);
        this.updateInfo({
          token: response.authorisation.token,
        });
      }
    },
  },
  computed: {
    usernameError() {
      const errors = [];
      if (!this.$v.user.username.$dirty) {
        return errors;
      }
      !this.$v.user.username.required &&
        errors.push("Поле прізвище обов'язкове");
      return errors;
    },
    emailError() {
      const errors = [];
      if (!this.$v.user.email.$dirty) {
        return errors;
      }
      !this.$v.user.email.required && errors.push("Поле email обов'язкове");
      if (!this.$v.user.email.email) {
        errors.push("Введено некоректний email");
        return errors;
      }
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.user.password.$dirty) {
        return errors;
      }
      if (
        (!this.$v.user.password.valid && this.$v.user.password.required) ||
        (!this.$v.user.password.minLength && this.$v.user.password.required)
      ) {
        errors.push(
          "Пароль повинен містити мінімум 8 символів, 1 малу літеру , 1 велику літеру,  символ та цифру"
        );
        return errors;
      }
      !this.$v.user.password.required && errors.push("Поле пароль обов'язкове");
      return errors;
    },
    passwordConfirmError() {
      const errors = [];
      if (!this.$v.user.password_confirm.$dirty) {
        return errors;
      }
      if (!this.$v.user.password_confirm.sameAsPassword) {
        errors.push("Паролі не збігаються");
        return errors;
      }
      !this.$v.user.password_confirm.required &&
        errors.push("Поле повторити пароль обов'язкове");
      return errors;
    },
  },
};
</script>

<style>
</style>