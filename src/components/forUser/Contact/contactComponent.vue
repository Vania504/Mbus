<template>
  <div>
    <v-row justify="center" class="mt-15 mb-15" v-if="!$vuetify.breakpoint.xs">
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
    <div style="background-color: #243949; width: 100%; height: 31px"></div>
    <GmapMap
      :center="{ lat: 48.920551, lng: 24.706484 }"
      :zoom="10"
      map-type-id="roadmap"
      style="width: 100%; height: 545px"
    ></GmapMap>
  </div>
</template>

<script>
import contactUserForm from "./contactUserForm.vue";
import contactInfo from "./contactInfo.vue";
export default {
  components: {
    contactUserForm,
    contactInfo,
  },
};
</script>

<style>
</style>