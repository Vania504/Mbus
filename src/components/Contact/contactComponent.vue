<template>
  <div>
    <v-row justify="center" class="mt-15 mb-15">
        <div
          style="width: 740px; height: 740px; position: absolute;  margin-right: 70%;"
          :style="{
            backgroundImage: `url(
      ${require('@/assets/img/contactBackgroundImg.svg')})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'norepeat',
          }"
        ></div>
      <v-col cols="4">
        <contact-info />
      </v-col>
      <v-col cols="7">
        <contact-user-form />
      </v-col>
    </v-row>
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