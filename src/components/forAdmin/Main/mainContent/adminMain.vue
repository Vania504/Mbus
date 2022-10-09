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
        @hideLoader="hideLoader"
      />
      <create-phone-number-form
        @create="createSetting"
        @update="updateSetting"
        @delete="deleteSetting"
        class="mt-5"
        :list="contactList"
        @hideLoader="hideLoader"
      />
    </v-col>
    <v-col v-if="activeCategory == 'irregular_transportation'">
      <create-irregular-transportation-form
        @create="createContent"
        @update="updateContent"
        :content="irregularTransportationContent"
      />
    </v-col>
    <v-col v-if="activeCategory == 'about_us'">
      <create-about-us-form
        @create="createContent"
        @update="updateContent"
        :content="aboutUsContent"
      />
    </v-col>
  </v-col>
</template>
  
  <script>
import createSocialLinkForm from "@/components/forAdmin/Main/mainContent/socialLinkForm/createSocialLinkForm";
import adminMainHeader from "./adminMainHeader.vue";
import createPhoneNumberForm from "@/components/forAdmin/Main/mainContent/phoneNumbersForm/createPhoneNumberForm";
import settingsService from "@/requests/admin/settingsService";
import successSnackbar from "@/components/UI/successSnackbar";
import { mapActions } from "vuex";
import createIrregularTransportationForm from "@/components/forAdmin/Main/mainContent/irregularTransportationForm/createIrregularTransportationForm";
import contentService from "@/requests/admin/contentService";
import createAboutUsForm from "@/components/forAdmin/Main/mainContent/aboutUsForm/createAboutUsForm";
export default {
  data: () => ({
    activeCategory: "contact",
    contactList: [],
    socialList: [],
    showSuccessSnackbar: false,
    snackbarText: "",
    irregularTransportationContent: [],
    aboutUsContent: [],
  }),
  components: {
    createSocialLinkForm,
    createPhoneNumberForm,
    adminMainHeader,
    successSnackbar,
    createIrregularTransportationForm,
    createAboutUsForm,
  },
  mounted() {
    this.updateLoader(true);
    if (this.activeCategory == "contact") {
      this.getContactSetting();
      this.getSocialSetting();
    } else {
      this.getContent();
    }
  },
  methods: {
    ...mapActions(["updateLoader"]),
    hideLoader() {
      this.updateLoader(false);
    },
    setActiveCategory(category) {
      this.activeCategory = category;
    },
    getContactSetting() {
      this.getSettings("contact").then(
        (res) => ((this.contactList = res), this.hideLoader())
      );
    },
    getSocialSetting() {
      this.getSettings("socials").then(
        (res) => ((this.socialList = res), this.hideLoader())
      );
    },
    async getSettings(type) {
      let response = await settingsService.getSettingListForAdmin(type);
      return response.data;
    },
    async getContent() {
      this.irregularTransportationContent = [];
      this.aboutUsContent = [];
      let response = await contentService.getContentForAdmin();
      console.log("response: " ,response);
      if(response.data.length > 0){
         response.data.forEach((content) => {
        if (content.section == "irregular_transportation") {
          this.irregularTransportationContent.push(content);
        } else if (content.section == "about_us") {
          this.aboutUsContent.push(content);
        }
      });
      }else {
        this.irregularTransportationContent = [];
        this.aboutUsContent = [];
      }
     
    },
    async createSetting(type, form) {
      let response = await settingsService.createSetting(form);
      if (response.status == "success") {
        type == "contact" ? this.getContactSetting() : this.getSocialSetting();
        this.$emit("success");
      }
    },
    async createContent(form) {
      let response = await contentService.createContent(form);
      if (response.status == "success") {
        this.updateLoader(true);
        this.getContent();
      }
    },
    async updateSetting(type, id, form) {
      this.showSuccessSnackbar = false;
      let response = await settingsService.updateSetting(id, form);
      if (response.status == "success") {
        this.updateLoader(true);
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
    async updateContent(type, id, form) {
      let response = await contentService.updateContent(id, form);
      if (response.status == "success") {
        this.updateLoader(true);
        if (type == "irregular_transportation") {
          this.snackbarText = "Нерегулярне перевезення оновлено успішно";
          this.showSuccessSnackbar = true;
        } else {
          this.snackbarText = "Про нас оновлено успішно";
          this.showSuccessSnackbar = true;
        }
        this.getContent();
      }
    },
    async deleteSetting(type, id) {
      await settingsService.deleteSetting(id).then((res) => {
        if (res.status == "success") {
          this.updateLoader(true);
          type == "contact"
            ? this.getContactSetting()
            : this.getSocialSetting();
          this.$emit("success");
        }
      });
    },
  },
  watch: {
    activeCategory: {
      deep: true,
      handler() {
        this.updateLoader(true);
        if (this.activeCategory == "contact") {
          this.getContactSetting();
          this.getSocialSetting();
        } else {
          this.getContent();
        }
      },
    },
  },
};
</script>
  
  <style>
</style>