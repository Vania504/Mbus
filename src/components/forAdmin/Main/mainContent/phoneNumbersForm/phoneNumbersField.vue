<template>
  <v-row
    @mouseover="item.status ? '' : (showDeleteIcon = true)"
    @mouseleave="showDeleteIcon = false"
    @change="showEditIcon = true"
    align="center"
  >
    <v-col cols="3" class="py-0">
      <v-text-field
        color="#085895"
        class="rounded-lg"
        dense
        outlined
        label="Ім'я (обов'язково)"
        v-model="item.name"
        :error-messages="nameError"
      />
    </v-col>
    <v-col cols="4" class="py-0">
      <v-text-field
        color="#085895"
        class="rounded-lg"
        dense
        outlined
        label="Номер телефону (обов'язково)"
        v-model="item.phone_number"
        :error-messages="phoneNumberError"
      />
    </v-col>
    <v-icon
      v-if="showEditIcon"
      color="green"
      class="mb-7 mr-2 pointer"
      @click="savePhoneNumber(item.id)"
      >mdi-check</v-icon
    >
    <img
      v-if="showDeleteIcon"
      class="mb-7 pointer"
      width="20px"
      heigth="20px"
      src="@/assets/img/messageIcon/deleteIcon.png"
      @click="$emit('delete','contact', item.id)"
    />
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    showDeleteIcon: false,
    showEditIcon: false,
    item: {},
  }),
  props: {
    phone_number: {
      require: true,
    },
  },
  validations: {
    item: {
      name: {
        required,
      },
      phone_number: {
        required,
      },
    },
  },
  mounted() {
    this.item = this.phone_number;
  },
  methods: {
    savePhoneNumber(id) {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.item.status
          ? this.$emit("create", this.item)
          : this.$emit("update", id, this.item);
          this.showEditIcon = false;
      }
    },
  },
  computed: {
    nameError() {
      const errors = [];
      if (!this.$v.item.name.$dirty) {
        return errors;
      }
      !this.$v.item.name.required && errors.push("Поле ім'я обов'язкове");
      return errors;
    },
    phoneNumberError() {
      const errors = [];
      if (!this.$v.item.phone_number.$dirty) {
        return errors;
      }
      !this.$v.item.phone_number.required &&
        errors.push("Поле номер телефону обов'язкове");
      return errors;
    },
  },
  watch: {
    phone_number: {
      deep: true,
      handler() {
        this.item = this.phone_number;
      },
    },
  },
};
</script>

<style>
</style>