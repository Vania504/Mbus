<template>
  <v-row no-gutters align="start">
    <v-text-field
      outlined
      dense
      color="#085895"
      label="Прізвище"
      placeholder="Введіть тут.."
      class="pr-3"
      v-model="userData.first_name"
      :error-messages="firstNameError"
      :append-icon="firstNameError.length ? 'mdi-alert-circle-outline' : ''"
    />
    <v-text-field
      outlined
      dense
      color="#085895"
      label="Ім’я"
      placeholder="Введіть тут.."
      class="pr-3"
      v-model="userData.last_name"
      :error-messages="lastNameError"
      :append-icon="lastNameError.length ? 'mdi-alert-circle-outline' : ''"
    />
    <v-text-field
      outlined
      dense
      color="#085895"
      label="Email"
      placeholder="Введіть тут.."
      class="pr-3"
      v-model="userData.email"
      :error-messages="emailError"
      :append-icon="emailError.length ? 'mdi-alert-circle-outline' : ''"
    />
    <v-text-field
      outlined
      dense
      color="#085895"
      label="Телефон"
      placeholder="Введіть тут.."
      v-mask="'+##(###) ###-##-##'"
      class="pr-3"
      v-model="userData.phone_number"
      :error-messages="phoneNumberError"
      :append-icon="phoneNumberError.length ? 'mdi-alert-circle-outline' : ''"
    />
    <v-autocomplete
      outlined
      dense
      color="#085895"
      label="Посада"
      placeholder="Введіть тут.."
      class="pr-3"
      :items="Object.values(roles)"
      :item-value="'id'"
      :item-text="'role_name'"
      v-model="userData.role.role_id"
      :error-messages="roleIdError"
      :append-icon="roleIdError.length ? 'mdi-alert-circle-outline' : ''"
    />
    <v-icon
      v-if="editedField"
      color="green"
      class="pt-2 mr-2 pointer"
      @click="saveUser"
      >mdi-check</v-icon
    >
    <v-icon color="#BE2828" class="pt-2"> mdi-delete-outline </v-icon>
  </v-row>
</template>

<script>
import roleService from "@/requests/admin/roleService";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    userData: {},
    roles: [],
    editedField: false,
  }),
  props: {
    user: {
      require: true,
    },
  },
  validations: {
    userData: {
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
      phone_number: {
        required,
        minLength: minLength(18),
      },
      role: {
        role_id: {
            required
        }
      },
    },
  },
  mounted() {
    this.userData = this.user;
    setTimeout(() => {
      this.editedField = false;
    }, 10);
    this.getRoles();
  },
  methods: {
    async getRoles() {
      let response = await roleService.getRoles();
      this.roles = response.data;
    },
    saveUser() {
      this.$v.$touch();
      if (!this.$v.userData.$invalid) {
        this.$emit("saveUser", this.userData.id, this.userData);
        this.editedField = false;
      }
    },
  },
  computed: {
    firstNameError() {
      const errors = [];
      if (!this.$v.userData.first_name.$dirty) {
        return errors;
      }
      !this.$v.userData.first_name.required && errors.push("");
      return errors;
    },
    lastNameError() {
      const errors = [];
      if (!this.$v.userData.last_name.$dirty) {
        return errors;
      }
      !this.$v.userData.last_name.required && errors.push("");
      return errors;
    },
    emailError() {
      const errors = [];
      if (!this.$v.userData.email.$dirty) {
        return errors;
      } else if (!this.$v.userData.email.required) {
        errors.push("");
      }
      !this.$v.userData.email.email && errors.push("");
      return errors;
    },
    phoneNumberError() {
      const errors = [];
      if (!this.$v.userData.phone_number.$dirty) {
        return errors;
      } else if (!this.$v.userData.phone_number.required) {
        errors.push("");
      }
      !this.$v.userData.phone_number.minLength && errors.push("");
      return errors;
    },
    roleIdError() {
      const errors = [];
      if (!this.$v.userData.role.role_id.$dirty) {
        return errors;
      }
      !this.$v.userData.role.role_id.required && errors.push("");
      return errors;
    },
  },
  watch: {
    userData: {
      deep: true,
      handler() {
        this.editedField = true;
      },
    },
  },
};
</script>

<style>
</style>