<template>
  <v-col style="font-size: 16px">
    <span style="text-align: center; font-size: 32px; color: #243949"
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
    <v-row justify="center" align="center">
      <div class="tableHeader">
        <v-row align="center" no-gutters class="mt-5">
          <v-col cols="4">
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
          <v-col cols="8">
            <span class="textStyle">Місце зупинки/відправлення</span>
          </v-col>
        </v-row>
      </div>
      <br /><v-col cols="8" class="py-0">
        <center>
          <div
            v-for="i in 9"
            :key="i"
            style="
              border: 1px solid #acbdcb;
              border-top: 0px;
              width: 790px;
              margin-left: 2px;
            "
          >
            <v-row no-gutters justify="start" class="pt-2" align="center">
              <v-col cols="4" class="py-0">
                <span class="hoursTextStyle">10:30</span>
              </v-col>
              <v-col cols="6" class="ml-15">
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
  width: 790px;
  height: 80px;
  background-color: #243949;
  text-align: center;
}
.textStyle {
  font-size: 16px;
  color: white;
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