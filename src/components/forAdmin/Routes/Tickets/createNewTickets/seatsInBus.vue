<template>
  <v-card class="sectionCard my-3">
    <p class="sectionName">Місця в автобусі</p>
    <v-row no-gutters>
      <v-col cols="3">
        <v-row no-gutters align="center">
          <div class="colorCube" style="background: #085895"></div>
          <span class="colorText">
            - Вільне ({{
              seats.length - quantityDisabledSeats - selectedSeats.length
            }})</span
          >
        </v-row>
        <v-row no-gutters align="center">
          <div class="colorCube" style="background: #243949"></div>
          <span class="colorText"> - Вибрано ({{ selectedSeats.length }})</span>
        </v-row>
        <v-row no-gutters align="center">
          <div class="colorCube" style="background: #6b7c8a"></div>
          <span class="colorText">
            - Недоступно ({{ quantityDisabledSeats }})</span
          >
        </v-row>
      </v-col>
      <v-col cols="9">
        <v-row no-gutters align="start">
          <div
            style="width: 100px; margin-right: 5px"
            v-for="index in quantityBlock"
            :key="index"
          >
            <v-item-group v-model="selectedSeats" multiple>
              <v-row no-gutters align="center">
                <v-item
                  v-for="seats in seats.slice(index * 10 - 10, index * 10)"
                  :key="seats.id"
                >
                  <div
                    style="
                      width: 40px;
                      height: 40px;
                      margin-right: 10px; 
                      margin-bottom: 10px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      color: white;
                    "
                    class="pointer"
                    :style="
                      seats.disabled
                        ? 'background: #6B7C8A; pointer-events: none;'
                        : selectedSeats.includes(seats.id)
                        ? 'background: #243949'
                        : 'background: #085895'
                    "
                    @click="
                      selectedSeats.includes(seats.id)
                        ? removeForSelectedList(seats.id)
                        : selectedSeats.push(seats.id)
                    "
                  >
                    {{ seats.number_seats }}
                  </div>
                </v-item>

                <!-- <v-col cols="6">
                <div
                  v-for="i in 10"
                  :key="i"
                  style="width: 40px; height: 40px; background: #6b7c8a; margin-top: 5px: margin-right: 5px;"
                ></div>
              </v-col> -->
              </v-row>
            </v-item-group>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedSeats: [],
    quantityBlock: 0,
    quantityDisabledSeats: 0,
    seats: [
      { id: 1, number_seats: 1, disabled: false },
      { id: 2, number_seats: 2, disabled: false },
      { id: 3, number_seats: 3, disabled: false },
      { id: 4, number_seats: 4, disabled: false },
      { id: 5, number_seats: 5, disabled: false },
      { id: 6, number_seats: 6, disabled: false },
      { id: 7, number_seats: 7, disabled: false },
      { id: 8, number_seats: 8, disabled: false },
      { id: 9, number_seats: 9, disabled: false },
      { id: 10, number_seats: 10, disabled: false },
      { id: 11, number_seats: 11, disabled: false },
      { id: 12, number_seats: 12, disabled: false },
      { id: 13, number_seats: 13, disabled: false },
      { id: 14, number_seats: 14, disabled: false },
      { id: 15, number_seats: 15, disabled: false },
      { id: 16, number_seats: 16, disabled: true },
      { id: 17, number_seats: 17, disabled: true },
      { id: 18, number_seats: 18, disabled: true },
      { id: 19, number_seats: 19, disabled: true },
      { id: 20, number_seats: 20, disabled: true },
      { id: 21, number_seats: 21, disabled: true },
      { id: 22, number_seats: 22, disabled: true },
      { id: 23, number_seats: 23, disabled: true },
      { id: 24, number_seats: 24, disabled: true },
      { id: 25, number_seats: 25, disabled: true },
      { id: 26, number_seats: 26, disabled: true },
      { id: 27, number_seats: 27, disabled: true },
      { id: 28, number_seats: 28, disabled: true },
      { id: 29, number_seats: 29, disabled: true },
      { id: 30, number_seats: 30, disabled: true },
      { id: 31, number_seats: 31, disabled: true },
      { id: 32, number_seats: 32, disabled: true },
      { id: 33, number_seats: 33, disabled: true },
      { id: 34, number_seats: 34, disabled: true },
      { id: 35, number_seats: 35, disabled: true },
      { id: 36, number_seats: 36, disabled: true },
      { id: 37, number_seats: 37, disabled: true },
      { id: 38, number_seats: 38, disabled: true },
      { id: 39, number_seats: 39, disabled: true },
      { id: 40, number_seats: 40, disabled: true },
      { id: 41, number_seats: 41, disabled: true },
      { id: 42, number_seats: 42, disabled: true },
      { id: 43, number_seats: 43, disabled: true },
      { id: 44, number_seats: 44, disabled: true },
      { id: 45, number_seats: 45, disabled: true },
      { id: 46, number_seats: 46, disabled: true },
      { id: 47, number_seats: 47, disabled: true },
      { id: 48, number_seats: 48, disabled: true },
      { id: 49, number_seats: 49, disabled: true },
      { id: 50, number_seats: 50, disabled: true },
      { id: 51, number_seats: 51, disabled: true },
      { id: 52, number_seats: 52, disabled: true },
      { id: 53, number_seats: 53, disabled: true },
      { id: 54, number_seats: 54, disabled: true },
      { id: 55, number_seats: 55, disabled: true },
    ],
  }),
  mounted() {
    this.quantityDisabledSeats = this.seats.filter(
      (seat) => seat.disabled == true
    ).length;
    this.quantityBlock = parseInt(this.seats.length / 10) + 1;
  },
  methods: {
    removeForSelectedList(id) {
      this.selectedSeats = this.selectedSeats.filter(
        (seatsId) => seatsId !== id
      );
    },
  },
};
</script>

<style>
.colorCube {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 10px;
}
.colorText {
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #243949;
}
</style>