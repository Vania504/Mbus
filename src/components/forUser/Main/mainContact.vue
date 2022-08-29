<template>
  <v-container>
    <v-row justify="start" class="mt-15" no-gutters>
      <v-col cols="4">
        <contact-info />
      </v-col>
      <v-col cols="7">
        <contact-user-form />
      </v-col> </v-row
  ></v-container>
</template>

<script>
import contactUserForm from "../Contact/contactUserForm.vue";
import contactInfo from "../Contact/contactInfo.vue";
export default {
  components: {
    contactUserForm,
    contactInfo,
  },
};
</script>

<style>
</style>