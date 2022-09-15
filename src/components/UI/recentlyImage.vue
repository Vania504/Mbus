<template>
  <v-col cols="1" class="px-0 py-0" @mouseleave="isHover = false">
    <v-icon
      v-if="isHover"
      class="pointer closeIcon"
      style="position: absolute"
      color="white"
      @click="$emit('deleteImage', image.id)"
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
</template>

<script>
export default {
  data: () => ({
    isHover: false,
  }),
  props: {
    image: {
      require: true,
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