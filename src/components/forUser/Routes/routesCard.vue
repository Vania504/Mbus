<template>
  <v-card :class="forAdmin ? 'mx-5' : 'mx-10'" width="330px">
    <img width="330px" src="@/assets/img/test.svg" max-width />
    <v-row no-gutters justify="end" v-if="forAdmin">
      <v-menu offset-y max-width="150px" left close-to-click>
        <template v-slot:activator="{ on, attrs }">
          <v-icon color="#243949" v-bind="attrs" v-on="on" class="pointer"
            >mdi-dots-vertical</v-icon
          >
        </template>
        <v-list>
          <v-list-item class="pointer">
            <v-list-item-title class="darkBlueSpan" @click="$emit('edit')"
              >Редагувати</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="pointer">
            <v-list-item-title class="red--text" @click="$emit('delete')"
              >Видалити</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
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
  }),
  props: {
    forAdmin: {
      require: true,
    },
  },
};
</script>

<style>
</style>