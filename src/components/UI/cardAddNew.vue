<template>
  <v-card :width="width" :height="height" class="pointer mx-1" @click="$emit('addNew')">
    <v-row justify="center" align="center">
      <v-col>
        <img src="@/assets/img/plusIcon.svg" style="margin-top: 98px;"/>
        <p style="font-size: 24px; color: #243949; margin-top: 20px;">{{title}}</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      require: true,
    },
    width: {
      require: true,
    },
    height: {
      require: true,
    }
  },
};
</script>

<style>
</style>