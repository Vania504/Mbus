<template>
  <v-row no-gutters justify="center" class="mt-15 mb-15">
    <success-snackbar
      v-if="successChangePassword"
      snackbarText="Ваш пароль успішно змінено"
    />
    <v-card width="600px">
      <v-col class="px-0 py-0">
        <modal-header
          title="Зміна паролю"
          @close="$emit('close')"
          :showCloseIcon="false"
        />
        <v-card width="600px" @keypress.enter="sendPassword">
          <v-col class="pt-5">
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
            <v-btn color="#085895" dark @click="sendPassword">Змінити</v-btn>
          </v-col>
        </v-card>
      </v-col>
    </v-card>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import successSnackbar from "@/components/UI/successSnackbar.vue";
import modalHeader from "@/components/UI/modalHeader";
import authService from "@/requests/admin/authService";
export default {
  components: {
    successSnackbar,
    modalHeader,
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
        console.log("Mbuskolomyia")
        form.append("token", this.$route.params.code);
        form.append("email", localStorage.getItem("userEmail"));
        form.append("password", this.password.password);
        form.append("password_confirmation", this.password.confirm_password);
        authService.changePassword(form).then(() => {
          this.successChangePassword = true;
          setTimeout(this.pushToLogin, 1000);
          localStorage.clear();
        })
      }
    },
    pushToLogin(){
      this.$router.push("/login");
    }
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
</style>