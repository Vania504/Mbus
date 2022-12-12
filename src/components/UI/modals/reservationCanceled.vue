<template>
  <v-dialog v-model="visibility" width="429px" height="165px">
    <v-card
      style="box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5); border-radius: 10px"
    >
      <v-col style="text-align: center; padding: 30px 30px 0px 30px">
        <p
          style="
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.1em;
            color: #122b3e;
          "
        >
          Ваше бронювання скасовано!
        </p>
        <span
          style="
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #243949;
          "
        >
          Найближчим часом наш менеджер зв’яжиться з Вами для уточнення деталей.
        </span>
      </v-col>
      <v-row
        no-gutters
        justify="end"
        style="padding-bottom: 30px; padding-right: 10px"
      >
        <v-btn
          text
          style="
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.1em;
            color: #085895;
          "
          @click="$emit('close')"
          >ок</v-btn
        >
      </v-row>
    </v-card>
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
        this.$emit("close");
      },
    },
  },
};
</script>

<style>
</style>