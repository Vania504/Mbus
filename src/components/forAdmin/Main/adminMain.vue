<template>
  <v-col class="px-0 py-0">
    <success-snackbar v-if="showSuccessSnackbar" :snackbarText="snackbarText" />
    <admin-main-header @activeCategory="setActiveCategory" />
    <v-col v-if="activeCategory == 'contact'" class="mb-10">
      <create-social-link-form
        @create="createSetting"
        @update="updateSetting"
        @delete="deleteSetting"
        :list="socialList"
      />
      <create-phone-number-form
        @create="createSetting"
        @update="updateSetting"
        @delete="deleteSetting"
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
import successSnackbar from "@/components/UI/successSnackbar";
export default {
  data: () => ({
    activeCategory: "contact",
    contactList: [],
    socialList: [],
    showSuccessSnackbar: false,
    snackbarText: "",
  }),
  components: {
    createSocialLinkForm,
    createPhoneNumberForm,
    adminMainHeader,
    successSnackbar,
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
        this.$emit("success");
      }
    },
    async updateSetting(type, id, form) {
      this.showSuccessSnackbar = false;
      let response = await settingsService.updateSetting(id, form);
      if (response.status == "success") {
        if (type == "contact") {
          this.snackbarText = "Номер телефону оновлено успішно";
          this.showSuccessSnackbar = true;
          this.getContactSetting();
        } else {
          this.snackbarText = "Соціальну мережу оновлено успішно";
          this.showSuccessSnackbar = true;
          this.getSocialSetting();
        }
        this.$emit("success");
      }
    },
    async deleteSetting(type, id) {
      await settingsService.deleteSetting(id).then((res) => {
        if (res.status == "success") {
          type == "contact"
            ? this.getContactSetting()
            : this.getSocialSetting();
          this.$emit("success");
        }
      });
    },
  },
};
</script>
  
  <style>
</style>