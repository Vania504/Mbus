<template>
  <v-dialog v-model="visibility" width="80%">
    <v-card width="100%" style="overflow-x: hidden">
      <v-col class="px-0">
        <v-card-title>Нещодавно додані зображення</v-card-title>
        <Loader v-if="showLoader" />
        <v-row v-else no-gutters justify="start" class="ml-8">
          <div v-for="image in images.data" :key="image.id" class="mx-2">
            <v-col cols="1" class="px-0 py-0" @mouseleave="isHover = false">
              <v-icon
                v-if="isHover"
                class="pointer closeIcon"
                style="position: absolute"
                color="white"
                @click="deleteImage(image.id)"
                >mdi-close</v-icon
              >
              <v-col>
                <img
                  style="width: 240px; height: 140px; object-fit: cover"
                  :src="image.path"
                  class="pointer"
                  @click="$emit('choseImage', image)"
                  @mouseover="isHover = true"
                />
              </v-col>
            </v-col>
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
        ></v-pagination> </v-col
    ></v-card>
  </v-dialog>
</template>

<script>
import imageService from "@/requests/admin/imageService";
import Loader from "./Loader.vue";
export default {
  components: {
    Loader,
  },
  data: () => ({
    images: [],
    page: 1,
    paginationLength: 0,
    showLoader: true,
    isHover: false,
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
      let file = e.srcElement.files[0];
      let image = new FormData();
      image.append("name", file.name);
      image.append("type", this.type);
      image.append("image", e.srcElement.files[0]);
      await imageService.uploadImage(image);
      this.getImages();
    },
    async deleteImage(id){
      console.log(id)
    }
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
.closeIcon {
  z-index: 15;
  background: linear-gradient(
    0deg,
    rgba(18, 43, 62, 0.8),
    rgba(18, 43, 62, 0.8)
  );
  border-radius: 50%;
  margin-left: 230px;
}
</style>