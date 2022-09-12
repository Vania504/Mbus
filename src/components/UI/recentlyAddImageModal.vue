<template>
  <v-dialog v-model="visibility" width="80%">
    <v-card width="100%" style="overflow-x: hidden">
      <v-col class="px-0">
        <v-card-title>Нещодавно додані зображення</v-card-title>
        <v-row no-gutters justify="start" class="ml-8">
          <div v-for="image in images.data" :key="image.id" class="mx-2">
            <img
              style="width: 240px; height: 140px; object-fit: cover"
              :src="image.path"
              class="pointer"
              @click="$emit('choseImage', image)"
            />
          </div>
          <img
            width="140px"
            height="140px"
            src="@/assets/img/addImageIcon.svg"
            class="pointer mx-2"
            @click="$refs.upload_img.click()"
          />
          <input
            type="file"
            ref="upload_img"
            style="display: none"
            @change="uploadImg"
          />
        </v-row>
        <v-pagination v-model="page" :length="paginationLength"></v-pagination> </v-col
    ></v-card>
  </v-dialog>
</template>

<script>
import imageService from "@/requests/admin/imageService";
export default {
  data: () => ({
    images: [],
    page: 1,
    paginationLength: 0,
  }),
  props: {
    visible: {
      require: true,
    },
    type: {
      require: true,
    }
  },
  mounted() {
    this.getImages();
  },
  methods: {
    async getImages() {
      let response = await imageService.getImages(this.type, this.page);
      this.images = response.data;
      this.paginationLength = parseInt(response.data.total / response.data.per_page) + 1;
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
      handler(){
        this.getImages();
      }
    }
  }
};
</script>

<style>
</style>