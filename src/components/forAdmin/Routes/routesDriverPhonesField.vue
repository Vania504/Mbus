<template>
  <v-row align="center" class="mt-1">
    <v-col cols="4" class="ml-2 py-0">
      <v-text-field
        class="rounded-lg"
        outlined
        dense
        placeholder="Ім'я"
        v-model="driverPhone.name"
        color="#085895"
        :error-messages="nameError"
        @blur="$v.$touch()"
      />
    </v-col>
    <v-col cols="7" class="ml-5 py-0">
      <v-text-field
        class="rounded-lg"
        outlined
        dense
        placeholder="Номер телефону"
        v-mask="'+38 (###) ####-###'"
        v-model="driverPhone.phone"
        color="#085895"
        :error-messages="phoneError"
      /> </v-col
  ></v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  data: () => ({
    mixins: [validationMixin],
    driverPhone: {},
  }),
  props: {
    phone: {
      require: true,
    },
    touch: {
      require: true,
    },
  },
  validations: {
    driverPhone: {
      name: {
        required,
      },
      phone: {
        required,
      },
    },
  },
  mounted() {
    this.driverPhone = this.phone;
  },
  computed: {
    nameError() {
      const errors = [];
      if (!this.$v.driverPhone.name.$dirty) {
        return errors;
      }
      !this.$v.driverPhone.name.required && errors.push("");
      return errors;
    },
    phoneError() {
      const errors = [];
      if (!this.$v.driverPhone.phone.$dirty) {
        return errors;
      }
      !this.$v.driverPhone.phone.required && errors.push("");
      return errors;
    },
  },
  watch: {
    phone: {
      deep: true,
      handler() {
        this.driverPhone = this.phone;
      },
    },
    touch: {
      deep: true,
      handler() {
        if ((this.touch == true)) {
          this.$v.$touch();
          console.log("$v", this.$v);
          if (!this.$v.$invalid) {
            console.log("validData")
            this.$emit("validData");
          }
        }
      },
    },
  },
};
</script>

<style>
</style>