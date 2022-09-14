<template>
  <div>
    <v-icon
      v-if="isHover"
      class="pointer closeIcon"
      x-small
      color="white"
      @click="$emit('delete', img.id)"
      >mdi-close</v-icon
    >
    <v-col cols="1" class="px-0 py-0" style="margin-top: 7px">
      <div
        v-if="isHover"
        @mouseleave="isHover = false"
        class="imageHover"
      ></div>
      <img
        :src="`${img.path}`"
        class="mr-2"
        width="50px"
        height="50px"
        style="object-fit: cover"
        @mouseover="isHover = true"
      />
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    isHover: false,
  }),
  props: {
    img: {
      require: true,
    },
  },
};
</script>

<style scoped>
.imageHover {
  height: 50px;
  width: 50px;
  background: linear-gradient(
    0deg,
    rgba(18, 43, 62, 0.4),
    rgba(18, 43, 62, 0.4)
  );
  position: absolute;
  z-index: 10;
}
.closeIcon {
  position: absolute;
  z-index: 15;
  background: linear-gradient(
    0deg,
    rgba(18, 43, 62, 0.8),
    rgba(18, 43, 62, 0.8)
  );
  border-radius: 50%;
  margin-left: 14px;
  margin-top: 1px;
}
</style>