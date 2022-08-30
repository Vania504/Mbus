<template>
  <div>
    <div class="tableHeader">
      <v-row align="center" no-gutters>
        <v-col cols="4">
          <p class="textStyle">
            Час відправлення і прибуття з<v-row
              align="center"
              justify="center"
              no-gutters
              ><span style="color: #efc148" v-if="isUkraine">України</span>
              <span v-else style="color: #efc148">Польщі</span>
              <v-icon
                color="#EFC148"
                small
                class="ml-1 pointer"
                @click="isUkraine = !isUkraine"
                >mdi-sync mdi-rotate-135</v-icon
              ></v-row
            >
          </p>
        </v-col>
        <v-col cols="8">
          <p class="textStyle">Місце зупинки/відправлення</p>
        </v-col>
      </v-row>
    </div>
    <div
      style="border-bottom: 1px solid #a7b8c6"
      v-for="item in shedule"
      :key="item.id"
    >
      <v-row justify="center" class="mt-3">
        <v-col cols="3" class="ml-7">
          <v-text-field
            class="rounded-lg"
            dense
            outlined
            placeholder="Введіть годину"
            v-model="item.departure_time"
          />
        </v-col>
        <v-col cols="8">
          <v-text-field
            class="ml-15 rounded-lg"
            dense
            outlined
            placeholder="Введіть місце.."
            v-model="item.departure_stop"
          />
        </v-col>
      </v-row>
    </div>
    <v-btn icon class="mt-2"
      ><v-icon large color="#243949" @click="addNewItemInShedule"
        >mdi-plus-circle</v-icon
      ></v-btn
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    isUkraine: true,
    shedule: [
      {
        id: 1,
        departure_time: "",
        departure_stop: "",
      },
    ],
  }),
  methods: {
    addNewItemInShedule() {
      this.shedule.push({
        id: Date.now(),
        departure_time: "",
        departure_stop: "",
      });
    },
  },
};
</script>

<style scoped>
.tableHeader {
  width: 100%;
  height: 80px;
  background-color: #243949;
  text-align: center;
  padding-top: 20px;
  padding-left: 20px;
}
.textStyle {
  font-size: 16px;
  color: white;
}
</style>