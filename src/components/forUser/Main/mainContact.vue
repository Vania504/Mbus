<template>
  <v-container>
    <v-row justify="start" class="mt-15" v-if="!$vuetify.breakpoint.xs">
      <v-col cols="7">
        <contact-user-form />
      </v-col>
      <v-col cols="4">
        <contact-info />
      </v-col>
    </v-row>
    <v-col v-else class="px-0">
      <v-col>
        <contact-info />
      </v-col>
      <v-col>
        <contact-user-form />
      </v-col>
    </v-col>
  </v-container>
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