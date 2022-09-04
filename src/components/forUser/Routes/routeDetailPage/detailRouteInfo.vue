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
        ><span class="countryName">Україна:</span> Кам’янець - Подільський —
        Хотин — Чернівці — Снятин — Коломия — Івано - Франківськ — Калуш —
        Долина — Стрий — Львів — КПП Рава Руська </span
      ><br />
      <span
        ><span class="countryName">Польща:</span> КПП Гребенне — Люблін —
        Варшава — Плоцк — Торунь — Бидгощ — Гданськ — Гдиня</span
      >
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
            v-for="i in 9"
            :key="i"
            style="border: 1px solid #acbdcb; border-top: 0px"
            :style="
              $vuetify.breakpoint.xs
                ? 'width: 100%;'
                : 'width: 790px; margin-left: 2px;'
            "
          >
            <v-row no-gutters justify="start" class="pt-2" align="center">
              <v-col
                cols="5"
                xl="4"
                lg="4"
                md="4"
                sm="4"
                class="py-0"
                :class="$vuetify.breakpoint.xs ? 'ml-3' : ''"
              >
                <span class="hoursTextStyle">10:30</span>
              </v-col>
              <v-col
                cols="6"
                :class="$vuetify.breakpoint.xs ? 'ml-3' : 'ml-15'"
              >
                <span class="stopTextStyle"
                  >Гдиня, Dworzec Autobusowy, pl. Grodnicki 1(platf.1) (якщо
                  більше тексту)</span
                >
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
  }),
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