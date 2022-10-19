<template>
  <v-dialog v-model="visibility" width="80%">
    <errorSnackbar v-if="showErrorSnackbar" :snackbarText="errorSnackbarText" />
    <v-card width="100%" style="overflow-x: hidden">
      <v-col class="px-0">
        <v-card-title>Нещодавно додані зображення</v-card-title>
        <Loader v-if="showLoader" />
        <v-row v-else no-gutters justify="start" class="ml-8">
          <div v-for="image in images.data" :key="image.id" class="mx-2">
            <recently-image
              :image="image"
              @choseImage="choseImage"
              @deleteImage="deleteImage"
            />
          </div>
          <v-col cols="1" class="pt-3">
            <img
              width="140px"
              height="140px"
              src="@/assets/img/addImageIcon.svg"
              class="pointer mx-2"
              @click="$refs.upload_img.click()"
            />
          </v-col>
          <input
            type="file"
            ref="upload_img"
            style="display: none"
            @change="uploadImg"
          />
        </v-row>
        <v-pagination
          v-if="!showLoader"
          v-model="page"
          :length="paginationLength"
        ></v-pagination>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
import imageService from "@/requests/admin/imageService";
import Loader from "./Loader.vue";
import recentlyImage from "@/components/UI/recentlyImage";
import errorSnackbar from "@/components/UI/errorSnackbar.vue";
export default {
  components: {
    Loader,
    recentlyImage,
    errorSnackbar,
  },
  data: () => ({
    images: [],
    page: 1,
    paginationLength: 0,
    showLoader: true,
    showErrorSnackbar: false,
    errorSnackbarText: "",
    isHover: false,
    maxImageSize: 2097152,
  }),
  props: {
    visible: {
      require: true,
    },
    type: {
      require: true,
    },
  },
  mounted() {
    this.getImages();
  },
  methods: {
    async getImages() {
      let response = await imageService.getImages(this.type, this.page);
      this.images = response.data;
      this.paginationLength =
        parseInt(response.data.total / response.data.per_page) + 1;
      this.showLoader = false;
    },
    async uploadImg(e) {
      this.errorSnackbarText = "";
      this.showErrorSnackbar = false;
      let file = e.srcElement.files[0];
      console.log(e.srcElement.files[0]);
      if (e.srcElement.files[0].size < this.maxImageSize) {
        let image = new FormData();
        image.append("name", file.name);
        image.append("type", this.type);
        image.append("image", e.srcElement.files[0]);
        await imageService.uploadImage(image);
        this.getImages();
      } else {
        this.errorSnackbarText = `Розмір зображення не повинен перевищувати ${parseInt(
          this.maxImageSize / (1000 * 1000)
        )}МБ`;
        this.showErrorSnackbar = true;
      }
    },
    async deleteImage(id) {
      let response = await imageService.deleteImage(id);
      if (response.status == "success") {
        this.showLoader = true;
        this.getImages();
      }
    },
    choseImage(image) {
      this.$emit("choseImage", image);
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
    },
  },
  watch: {
    page: {
      deep: true,
      handler() {
        this.getImages();
      },
    },
  },
};
</script>

<style>
</style>