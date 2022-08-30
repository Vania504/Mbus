<template>
  <v-card width="350px" height="350px" class="pointer" @click="$emit('addNew')">
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
  },
};
</script>

<style>
</style>