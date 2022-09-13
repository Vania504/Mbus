<template>
    <v-card class="rounded-lg">
      <v-row no-gutters align="start" justify="start" class="pt-5 ml-5 pb-5">
        <v-col cols="5" style="text-align: left">
          <span class="formTitle">Опис перевезенняння</span>
          <v-textarea
            style="margin-top: 10px"
            dense
            outlined
            color="#085895"
            v-model="irregular.description"
            :error-messages="descriptionError"
          />
        </v-col>
        <v-col cols="4" style="margin-left: 115px; text-align: left">
          <span class="formTitle">Змінити зображення</span>
          <div
            class="imageForm"
            style="margin-top: 10px"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
          >
            <img
              v-if="irregular.image.length"
              style="width: 428px; height: 288px"
              :src="irregular.image[0].path"
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
          @click="saveIrregularTransportation"
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
  export default {
    mixins: [validationMixin],
    components: {
      recentlyAddImageModal,
    },
    data: () => ({
      irregular: {
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
      irregular: {
        name: {
          required,
        },
        description: {
          required,
        },
      },
    },
    methods: {
      choseImage(image) {
        this.irregular.image.push(image);
        this.showImageModal = false;
      },
      saveIrregularTransportation() {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          let images = [];
          this.irregular.image.forEach((image) => images.push(image.id));
          let data = {
            title: this.irregular.name,
            text: this.irregular.description,
            section: "irregular_transportation",
            images: images,
          };
          let form = requestFormData.jsonToFormData(data);
          this.irregular.status
            ? this.$emit("create", "irregular_transportation", form)
            : this.$emit(
                "update",
                "irregular_transportation",
                this.irregular.id,
                form
              );
        }
      },
      setIrregularContent() {
        this.irregular = {image: []};
        this.$set(this.irregular, "id", this.content[0].id);
        this.$set(this.irregular, "name", this.content[0].title);
        this.$set(this.irregular, "description", this.content[0].content);
        this.irregular.image.push(this.content[0].images[0].images);
      },
    },
    computed: {
      nameError() {
        const errors = [];
        if (!this.$v.irregular.name.$dirty) {
          return errors;
        }
        !this.$v.irregular.name.required && errors.push("Поле ім'я обов'язкове");
        return errors;
      },
      descriptionError() {
        const errors = [];
        if (!this.$v.irregular.description.$dirty) {
          return errors;
        }
        !this.$v.irregular.description.required &&
          errors.push("Поле опис обов'язкове");
        return errors;
      },
    },
    watch: {
      content: {
        deep: true,
        handler() {
          this.setIrregularContent();
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