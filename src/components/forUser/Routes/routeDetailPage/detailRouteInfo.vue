<template>
  <v-col
    :style="$vuetify.breakpoint.xs ? 'font-size: 14px;' : 'font-size: 16px;'"
  >
    <span
      style="text-align: center; color: #243949"
      :style="$vuetify.breakpoint.xs ? 'font-size: 18px;' : 'font-size: 32px;'"
      >Детальний маршрут</span
    >
    <p class="mt-2">
      <span
        ><span class="countryName">Україна:&nbsp;</span
        ><span v-for="(city, index) in ukraine_city" :key="city.id">
          <span v-if="index == 0">{{ city.name }}</span>
          <span v-if="index !== 0">&nbsp;— {{ city.name }}</span>
        </span>
      </span>
      <br />
      <span
        ><span class="countryName">Інша країна:&nbsp;</span>
        <span v-for="(city, index) in foreign_city" :key="city.id">
          <span v-if="index == 0">{{ city.name }}</span>
          <span v-if="index !== 0">&nbsp;— {{ city.name }}</span>
        </span>
      </span>
    </p>
    <v-row
      justify="center"
      align="center"
      :class="$vuetify.breakpoint.xs ? 'mt-5' : ''"
    >
      <div
        class="tableHeader"
        :style="
          $vuetify.breakpoint.xs
            ? 'width: 100%; height: 70px;'
            : 'width: 790px; height: 80px;'
        "
      >
        <v-row
          align="center"
          justify="center"
          no-gutters
          :class="$vuetify.breakpoint.xs ? 'mt-2' : 'mt-5'"
        >
          <v-col cols="6" xl="4" lg="4" md="4" sm="4">
            <span class="textStyle"
              >Час відправлення і прибуття з<v-row
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
            </span>
          </v-col>
          <v-col cols="6" xl="8" lg="8" md="8" sm="9">
            <span class="textStyle">Місце зупинки/відправлення</span>
          </v-col>
        </v-row>
      </div>
      <br /><v-col
        cols="12"
        xl="8"
        lg="8"
        md="8"
        sm="8"
        class="py-0"
        :class="$vuetify.breakpoint.xs ? 'px-0' : ''"
      >
        <center>
          <div
            v-for="time in route.route_time"
            :key="time.id"
            style="border: 1px solid #acbdcb; border-top: 0px"
            :style="
              $vuetify.breakpoint.xs
                ? 'width: 100%;'
                : 'width: 790px; margin-left: 2px;'
            "
          >
            <v-row
              no-gutters
              justify="start"
              class="pt-2"
              align="center"
              v-if="isUkraine && time.is_reverse == '0'"
            >
              <v-col
                cols="5"
                xl="4"
                lg="4"
                md="4"
                sm="4"
                class="py-0"
                :class="$vuetify.breakpoint.xs ? 'ml-3' : ''"
              >
                <span class="hoursTextStyle">{{ time.time }}</span>
              </v-col>
              <v-col
                cols="6"
                :class="$vuetify.breakpoint.xs ? 'ml-3' : 'ml-15'"
              >
                <span class="stopTextStyle">{{ time.city }}</span>
              </v-col>
            </v-row>
            <v-row
              no-gutters
              justify="start"
              class="pt-2"
              align="center"
              v-else-if="!isUkraine && time.is_reverse == '1'"
            >
              <v-col
                cols="5"
                xl="4"
                lg="4"
                md="4"
                sm="4"
                class="py-0"
                :class="$vuetify.breakpoint.xs ? 'ml-3' : ''"
              >
                <span class="hoursTextStyle">{{ time.time }}</span>
              </v-col>
              <v-col
                cols="6"
                :class="$vuetify.breakpoint.xs ? 'ml-3' : 'ml-15'"
              >
                <span class="stopTextStyle">{{ time.city }}</span>
              </v-col>
            </v-row>
          </div>
        </center>
        <span style="color: #6b7c8a; font-size: 10px; text-align: left"
          ><span class="requireColor">*</span>час прибуття вказаний приблизний і
          залежить від часу проходження кордону та інших обставин</span
        >
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    isUkraine: true,
    ukraine_city: [],
    foreign_city: [],
  }),
  props: {
    route: {
      require: true,
    },
  },
  mounted() {
    this.filterCity();
  },
  methods: {
    filterCity() {
      if (this.route.cities) {
        this.route.cities.forEach((city) => {
          city.type == "Ukraine"
            ? this.ukraine_city.push(city)
            : this.foreign_city.push(city);
        });
      }
    },
  },
};
</script>

<style>
.countryName {
  color: #960909;
}
.tableHeader {
  background-color: #243949;
  text-align: center;
}
@media only screen and (max-width: 760px) {
  .textStyle {
    font-size: 14px;
    color: white;
  }
}
@media only screen and (min-width: 760px) {
  .textStyle {
    font-size: 16px;
    color: white;
  }
}
.hoursTextStyle {
  color: #085895;
  font-size: 14px;
}
.stopTextStyle {
  color: #243949;
  font-size: 14px;
}
</style>