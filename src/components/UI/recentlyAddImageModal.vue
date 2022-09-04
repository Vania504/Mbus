<template>
  <v-dialog v-model="visibility">
    <v-card>
      <v-col class="px-0">
        <v-card-title>Нещодавно додані зображення</v-card-title>
        <v-row>
          <div v-for="i in 10" :key="i" style="width: 200px; height: 200px" class="px-5">
            <img
              src="@/assets/img/irregularBackgroundBusImg.svg"
            />
          </div>
          <img
            width="200px"
            height="200px"
            src="@/assets/img/addImageIcon.svg"
            class="pointer mx-5"
            @click="$refs.upload_img.click()"
          />
          <input
            type="file"
            ref="upload_img"
            style="display: none"
            @change="uploadImg"
          />
        </v-row> </v-col
    ></v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      require: true,
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        alert("set");
        this.$emit("close");
      },
    },
  },
};
</script>

<style>
</style>