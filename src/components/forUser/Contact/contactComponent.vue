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
      <v-row no-gutters justify="center">
        <span
          style="
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.1em;
            color: #085895;
            margin-top: 20px;
          "
          >Напишіть нам!</span
        >
      </v-row>
      <v-col>
        <contact-user-form />
      </v-col>
    </v-col>
    <div style="background-color: #243949; width: 100%; height: 31px"></div>
    <GmapMap
      :center="{ lat: 48.53115, lng: 25.03649 }"
      :zoom="10"
      map-type-id="roadmap"
      style="width: 100%; height: 545px"
    >
      <GmapMarker :position="{ lat: 48.53115, lng: 25.03649 }" />
    </GmapMap>
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