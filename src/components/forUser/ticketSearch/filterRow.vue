<template>
  <div style="min-width: 326px; height: 40px;">
    <v-row no-gutters align="center">
      <img
        width="20px"
        height="20px"
        :src="require(`@/assets/img/busServiceIcon${service.img}`)"
        style="margin-right: 10px"
      />
      <span
        style="
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.1em;
          color: #243949;
        "
        >{{ service.title }}</span
      >
      <v-row no-gutters justify="end">
        <v-checkbox color="#085895" @click="$emit('chose', service.id)"/>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "filterRow",
  props: {
    service: {
      require: true,
    },
  },
};
</script>

<style>
</style>