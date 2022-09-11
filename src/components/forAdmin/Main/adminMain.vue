<template>
  <v-col class="px-0 py-0">
    <admin-main-header @activeCategory="setActiveCategory" />
    <v-col v-if="activeCategory == 'contact'">
      <create-social-link-form @create="createSetting" :list="socialList" />
      <create-phone-number-form
        @create="createSetting"
        class="mt-5"
        :list="contactList"
      />
    </v-col>
  </v-col>
</template>
  
  <script>
import createSocialLinkForm from "./createSocialLinkForm.vue";
import adminMainHeader from "./adminMainHeader.vue";
import createPhoneNumberForm from "@/components/forAdmin/Main/createPhoneNumberForm";
import settingsService from "@/requests/admin/settingsService";
export default {
  data: () => ({
    activeCategory: "contact",
    contactList: [],
    socialList: [],
  }),
  components: {
    createSocialLinkForm,
    createPhoneNumberForm,
    adminMainHeader,
  },
  mounted() {
    this.getContactSetting();
    this.getSocialSetting();
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category;
    },
    getContactSetting() {
      this.getSettings("contact").then((res) => (this.contactList = res));
    },
    getSocialSetting() {
      this.getSettings("socials").then((res) => (this.socialList = res));
    },
    async getSettings(type) {
      let response = await settingsService.getSettingListForAdmin(type);
      return response.data;
    },
    async createSetting(type, form) {
      let response = await settingsService.createSetting(form);
      if (response.status == "success") {
        type == "contact" ? this.getContactSetting() : this.getSocialSetting();
      }
    },
  },
};
</script>
  
  <style>
</style>