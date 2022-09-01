<template>
  <v-dialog v-model="visibility" :width="$vuetify.breakpoint.xs ? '90%' : '900px'">
    <modal-header title="Вхід користувача" @close="$emit('close')" />
    <v-card style="overflow: hidden">
      <v-row justify="center" class="pt-10">
        <v-col cols="10" lg="7" md="7" sm="7" xl="7">
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
            :hide-details="!passwordError.length"
          />
          <v-row no-gutters align="center" class="py-0">
            <v-row no-gutters align="center" justify="start" class="py-0">
              <v-checkbox color="#085895" />
              <span>Запам'ятати мене</span>
            </v-row>
            <v-row no-gutters align="center" justify="end" class="py-0">
              <span class="signInTextStyle pointer">Забули пароль</span>
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
            <v-col> <v-divider class="mt-10 mb-5 ml-5 px-15 divider" /> </v-col
          ></v-row>
          <div class="mb-5">
            <span class="signInTextStyle pointer" @click="$emit('goToSignUp')">Зареєструватись</span>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import modalHeader from "../UI/modalHeader.vue";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  components: {
    modalHeader,
  },
  data: () => ({
    user: {},
  }),
  validations: {
    user: {
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
    },
  },
  props: {
    visible: {
      require: true,
    },
  },
  methods: {
    async signIn(){
      this.$v.$touch();
      if(!this.$v.$invalid){
        alert("Function signIn success work")
      }
    }
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
      if (
        (!this.$v.user.password.valid && this.$v.user.password.required) ||
        (!this.$v.user.password.minLength && this.$v.user.password.required)
      ) {
        errors.push(
          "Пароль повинен містити мінімум 8 символів, 1 малу літеру , 1 велику літеру,  символ та цифру"
        );
        return errors;
      }
      !this.$v.user.password.required &&
        errors.push("Поле пароль обов'язкове");
      return errors;
    },
  },
};
</script>

<style>
</style>