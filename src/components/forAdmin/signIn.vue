<template>
  <v-dialog
    v-model="visibility"
    :width="$vuetify.breakpoint.xs ? '90%' : '900px'"
    style="overflow: hidden"
  >
    <error-snackbar v-if="showErrorSnackbar" :snackbarText="snackbarText" />
    <v-card
      :width="$vuetify.breakpoint.xs ? '90%' : '900px'"
      height="390px"
      class="mb-15"
    >
      <modal-header
        title="Вхід користувача"
        @close="$emit('close')"
        :showCloseIcon="true"
      />
      <v-card style="overflow: hidden" height="390px">
        <v-row justify="center" class="pt-10">
          <v-col cols="10" lg="7" md="7" sm="7" xl="7">
            <v-text-field
              dense
              outlined
              v-model.trim="user.email"
              color="7B8892"
              placeholder="Email"
              :error-messages="emailError"
              @blur="$v.user.email.$touch()"
            />
            <v-text-field
              dense
              outlined
              v-model.trim="user.password"
              color="7B8892"
              placeholder="Пароль"
              :type="showPassword ? 'text' : 'password'"
              :error-messages="passwordError"
              @blur="$v.user.password.$touch()"
              :hide-details="!passwordError.length"
              :append-icon="
                showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
              "
              @click:append="showPassword = !showPassword"
            />
            <v-row no-gutters align="center" class="py-0">
              <v-row no-gutters align="center" justify="start" class="py-0">
                <v-checkbox color="#085895" v-model="rememberMe" />
                <span>Запам'ятати мене</span>
              </v-row>
              <v-row no-gutters align="center" justify="end" class="py-0">
                <span
                  @click="$emit('close'), $router.push('/reset_password')"
                  class="signInTextStyle pointer"
                  >Забули пароль</span
                >
              </v-row>
            </v-row>
            <v-btn
              style="text-transform: none; font-size: 16px"
              width="208px"
              height="39px"
              class="white--text"
              color="#085895"
              @click="signIn"
              >Увійти</v-btn
            >
            <v-row no-gutters align="center">
              <v-col>
                <v-divider class="mt-10 mb-5 mr-5 px-15 divider" />
              </v-col>
              <p class="mt-9">або</p>
              <v-col>
                <v-divider class="mt-10 mb-5 ml-5 px-15 divider" /> </v-col
            ></v-row>
            <div class="mb-5">
              <span class="signInTextStyle pointer" @click="$emit('goToSignUp')"
                >Зареєструватись</span
              >
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import modalHeader from "../UI/modalHeader.vue";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import authService from "@/requests/admin/authService";
import { mapActions } from "vuex";
import errorSnackbar from "@/components/UI/errorSnackbar";
export default {
  mixins: [validationMixin],
  components: {
    modalHeader,
    errorSnackbar,
  },
  data: () => ({
    user: {},
    rememberMe: false,
    snackbarText: "",
    showErrorSnackbar: false,
    showPassword: false,
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
  props: {
    visible: {
      require: true,
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
          this.$emit("close");
          this.$router.push({ name: "main" });
        }
      }
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
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
      !this.$v.user.password.required && errors.push("Поле пароль обов'язкове");
      return errors;
    },
  },
};
</script>

<style>
</style>