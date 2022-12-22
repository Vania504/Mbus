<template>
  <v-dialog v-model="visibility" width="100%" height="80%">
    <v-card>
      <v-row no-gutters align="center" style="padding: 20px">
        <v-icon
          class="pointer"
          @click="$emit('close')"
          small
          color="#243949"
          style="margin-right: 15px"
          >mdi-arrow-left</v-icon
        >
        <span class="peopleTypeStyle">Вибір дати</span>
      </v-row>
      <v-date-picker
        v-model="date"
        no-title
        color="#085895"
        locale="uk"
        width="100%"
        header-color="red"
        prev-icon=""
        next-icon=""
        :min="
          new Date(
            new Date().getTime() +
              1 * 60 * 60 * 1000 -
              new Date().getTimezoneOffset() * 60000
          )
            .toISOString()
            .substr(0, 10)
        "
      />
      <v-date-picker
        v-model="date1"
        no-title
        color="#085895"
        locale="uk"
        width="100%"
        class="mx-calendar-panel-year"
        :show-current="
          (new Date().getMonth() + 2 >= 12
            ? new Date().getFullYear() +
              1 +
              '-' +
              (new Date().getMonth() + 2 - 12)
            : new Date().getFullYear() + '-' + (new Date().getMonth() + 2)
          ).toString()
        "
        prev-icon=""
        next-icon=""
      />
      <v-date-picker
        v-model="date2"
        no-title
        color="#085895"
        locale="uk"
        width="100%"
        :show-current="
          (new Date().getMonth() + 3 >= 12
            ? new Date().getFullYear() +
              1 +
              '-' +
              (new Date().getMonth() + 3 - 12)
            : new Date().getFullYear() + '-' + (new Date().getMonth() + 3)
          ).toString()
        "
        prev-icon=""
        next-icon=""
      />
    </v-card>
  </v-dialog>
</template>

<script>
import modalMixin from "@/mixins/modalMixin";
export default {
  mixins: [modalMixin],
  data: () => ({
    date: "",
    date1: "",
    date2: "",
  }),
  methods: {
    closeModal(date) {
      this.$emit("setDate", date);
    },
  },
  watch: {
    date: {
      deep: true,
      handler() {
        if (this.date !== "") {
          setTimeout(() => {
            this.closeModal(this.date);
          }, 500);
        }
      },
    },
    date1: {
      deep: true,
      handler() {
        if (this.date1 !== "") {
          setTimeout(() => {
            this.closeModal(this.date1);
          }, 500);
        }
      },
    },
    date2: {
      deep: true,
      handler() {
        if (this.date2 !== "") {
          setTimeout(() => {
            this.closeModal(this.date2);
          }, 500);
        }
      },
    },
  },
};
</script>

<style>
</style>