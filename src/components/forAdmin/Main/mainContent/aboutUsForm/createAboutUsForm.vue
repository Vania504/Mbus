<template>
  <v-card class="rounded-lg" v-if="!loader">
    <v-row no-gutters align="start" justify="start" class="pt-5 ml-5 pb-5">
      <v-col cols="6" style="text-align: left" class="px-0">
        <span class="formTitle">Опис перевезенняння</span>
        <vue-editor
          style="margin-top: 10px; max-height: 320px; overflow-y: scroll"
          :style="contentError.length ? 'border: 1px solid red;' : ''"
          heigth="500px"
          v-model="about_us.content"
        ></vue-editor>
        <span v-if="contentError.length" class="errorMessage">{{
          contentError[0]
        }}</span>
      </v-col>
      <v-col cols="4" style="margin-left: 40px; text-align: left">
        <span class="formTitle">Змінити зображення</span>
        <div
          class="imageForm"
          style="margin-top: 10px"
          @mouseover="isHover = true"
          @mouseleave="isHover = false"
        >
          <img
            v-if="about_us.image.length"
            style="width: 428px; height: 288px"
            :src="about_us.image[0].path"
          />
          <div class="newImage" v-if="isHover">
            <v-row
              no-gutters
              justify="center"
              align="center"
              class="pointer"
              @click="showImageModal = true"
            >
              <span class="newImageSpan">Нове зображення</span>
              <img src="@/assets/img/messageIcon/folderIcon.svg" />
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" align="center" class="mb-15 pb-10">
      <v-btn
        class="formAddNewSpan"
        text
        style="text-transform: none"
        @click="saveAboutUs"
        ><v-icon color="#085895">mdi-check</v-icon>
        <span class="formAddNewSpan">Зберегти</span></v-btn
      >
    </v-row>
    <recently-add-image-modal
      v-if="showImageModal"
      :visible="showImageModal"
      @close="showImageModal = false"
      @choseImage="choseImage"
      :type="'Content'"
    />
  </v-card>
</template>
  
  <script>
import recentlyAddImageModal from "@/components/UI/recentlyAddImageModal.vue";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import requestFormData from "@/requests/requestFormData";
import { VueEditor } from "vue2-editor";
import { mapActions, mapGetters } from "vuex";
export default {
  mixins: [validationMixin],
  components: {
    recentlyAddImageModal,
    VueEditor,
  },
  data: () => ({
    about_us: {
      image: [],
      status: "new",
    },
    isHover: false,
    showImageModal: false,
  }),
  props: {
    content: {
      require: true,
    },
  },
  validations: {
    about_us: {
      content: {
        required,
      },
    },
  },
  methods: {
    ...mapActions(["updateLoader"]),
    choseImage(image) {
      this.about_us.image.unshift(image);
      this.showImageModal = false;
    },
    saveAboutUs() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let images = [];
        this.about_us.image.forEach((image) => images.push(image.id));
        let data = {
          title: "About_us",
          text: this.about_us.content,
          section: "about_us",
          images: images,
        };
        let form = requestFormData.jsonToFormData(data);
        this.about_us.status
          ? this.$emit("create", form)
          : this.$emit("update", "about_us", this.about_us.id, form);
      }
    },
    setAboutUsContent() {
      this.about_us = { image: [] };
      if(this.content.length > 0){
      this.$set(this.about_us, "id", this.content[0].id);
      this.$set(this.about_us, "content", this.content[0].content);
      if (this.content[0].images.length > 0) {
        if (this.content[0].images[0].images) {
          this.about_us.image.push(this.content[0].images[0].images);
        }
      }
      }
      this.updateLoader(false);
    },
  },
  computed: {
    ...mapGetters(["loader"]),
    contentError() {
      const errors = [];
      if (!this.$v.about_us.content.$dirty) {
        return errors;
      }
      !this.$v.about_us.content.required &&
        errors.push("Поле опис обов'язкове");
      return errors;
    },
  },
  watch: {
    content: {
      deep: true,
      handler() {
        this.setAboutUsContent();
      },
    },
  },
};
</script>
  
  <style scoped>
.imageForm {
  width: 430px;
  height: 290px;
  border: 1px solid #085895;
  border-radius: 3px;
}
.newImage {
  background: rgba(3, 3, 3, 0.78);
  position: absolute;
  height: 59px;
  width: 428px;
  top: 285px;
  padding-top: 17px;
}
.newImageSpan {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin-right: 5px;
}
</style>
