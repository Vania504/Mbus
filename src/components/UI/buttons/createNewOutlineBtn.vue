<template>
  <div
    class="border"
    :style="`width: ${parseInt(width) + 2}px; height: ${
      parseInt(height) + 2
    }px;`"
  >
    <v-btn
      class="styleBtn"
      :width="width"
      :height="height"
      outlined
      @click="$emit('click')"
    >
      {{ text }} <v-icon class="icon">mdi-plus </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      require: true,
    },
    height: {
      require: true,
    },
    text: {
      require: true,
    },
  },
};
</script>

<style scoped>
.styleBtn {
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 10px;
  text-transform: none;
  text-align: center;
}
.border {
  background: linear-gradient(268.56deg, #085895 16.3%, #583ba9 86.15%);
  padding-top: 1px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
i.v-icon.v-icon {
  background-image: linear-gradient(
    268.56deg,
    #085895 16.3%,
    #583ba9 86.15%
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>