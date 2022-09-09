<template>
  <v-card
    :class="
      forAdmin && !$vuetify.breakpoint.xs
        ? 'mx-4'
        : !forAdmin && !$vuetify.breakpoint.xs
        ? 'mx-10'
        : 'mx-5'
    "
    :width="$vuetify.breakpoint.xs ? '180px' : '320px'"
    :height="$vuetify.breakpoint.xs ? '120px' : ''"
    :style="$vuetify.breakpoint.xs ? 'text-align: left;' : ''"
  >
    <div
      @click="$router.push('/routes/' + route.id)"
      v-if="$vuetify.breakpoint.xs"
      style="
        position: absolute;
        text-align: center;
        background: linear-gradient(360deg,rgba(1, 29, 51, 0.602) 35.16%,rgba(91, 98, 104, 0.469) 45.62%);
        width: 180px;
      "
    >
      <v-col cols="12">
        <h3
          style="
            font-weight: 400;
            font-size: 12px;
            color: white;
            margin-top: 80px;
            margin-right: 20px;
          "
        >
        {{route.departure}} - {{route.destination}}
        </h3>
      </v-col>
    </div>
    <img
      :width="$vuetify.breakpoint.xs ? '180px' : '320px'"
      :height="$vuetify.breakpoint.xs ? '120px' : ''"
      src="@/assets/img/test.svg"
    />
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
    <v-col class="px-0" v-if="!$vuetify.breakpoint.xs">
      <h3 style="font-weight: 500; font-size: 20px">
        {{route.departure}} - {{route.destination}}
      </h3>
    </v-col>
    <v-card-actions v-if="!$vuetify.breakpoint.xs">
      <v-row justify="center" no-gutters>
        <v-btn
          :outlined="!isHover"
          @mousemove="isHover = true"
          @mouseleave="isHover = false"
          :class="!isHover ? '' : 'white--text'"
          color="#085895"
          width="144px"
          height="34px"
          @click="$router.push('/routes/' + route.id)"
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
    route: {
      require: true,
    }
  },
};
</script>

<style>
</style>