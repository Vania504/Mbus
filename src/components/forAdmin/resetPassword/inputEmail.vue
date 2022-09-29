<template>
  <div>
    <v-row justify="center" no-gutters class="mt-15 mb-15">
      <v-card width="600px">
        <v-col class="px-0 py-0">
          <modal-header
            title="Зміна паролю"
            @close="$emit('close')"
            :showCloseIcon="false"
          />
          <v-card width="600px">
            <v-col class="pt-5">
              <v-text-field
                color="#085895"
                class="mt-5"
                label="Email"
                dense
                outlined
                v-model="email"
                :error-messages="emailError"
              />
              <v-btn color="#085895" dark @click="sendEmail">Надіслати</v-btn>
            </v-col>
          </v-card>
        </v-col>
      </v-card>
    </v-row>
  </div>
</template>
  
  <script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import modalHeader from "@/components/UI/modalHeader";
export default {
  mixins: [validationMixin],
  components: {
    modalHeader,
  },
  data: () => ({
    email: "",
  }),
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    sendEmail() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("sendEmail");
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