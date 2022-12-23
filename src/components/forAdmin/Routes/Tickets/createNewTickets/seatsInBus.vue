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
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%; 
          "
          v-if="seats.length == 0 || showLoader"
          no-gutters
          justify="center"
          align="center"
        >
          <v-progress-circular
            v-if="showLoader"
            class="mx-auto"
            indeterminate
            color="#085895"
          ></v-progress-circular>
          <p v-else-if="seats.length == 0" class="sectionName">
            Оберіть будь ласка автобус
          </p>
        </div>
        <v-row v-show="!showLoader" no-gutters align="start">
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
    seats: [],
    showLoader: false,
  }),
  props: {
    touch: {
      require: true,
    },
    quantityBusSeats: {
      require: true,
    },
  },
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
    setSeats() {
      for (let index = 0; index < this.quantityBusSeats; index++) {
        this.seats.push({
          id: index + 1,
          number_seats: index + 1,
          disabled: false,
        });
        setTimeout(() => {
          this.showLoader = false;
        }, 1000);
      }
    },
  },
  watch: {
    touch: {
      deep: true,
      handler() {
        this.$emit("setSeats", this.selectedSeats.length);
      },
    },
    quantityBusSeats: {
      deep: true,
      handler() {
        this.seats = [];
        this.showLoader = true;
        this.setSeats();
      },
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