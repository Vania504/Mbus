<template>
  <v-card class="mx-10" width="305px">
    <img width="305px" src="@/assets/img/test.svg" />
    <v-col class="px-0">
      <h3 style="font-weight: 500; font-size: 20px">
        Свіноуйсьце–Камінець-Подільський
      </h3>
    </v-col>
    <v-card-actions>
      <v-row justify="center" no-gutters>
        <v-btn
          :outlined="!isHover"
          @mousemove="isHover = true"
          @mouseleave="isHover = false"
          :class="!isHover ? '' : 'white--text'"
          color="#085895"
          width="144px"
          height="34px"
          @click="$router.push('/routes/' + 1)"
          >Детальніше</v-btn
        >
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isHover: false,
  })
};
</script>

<style>
</style>