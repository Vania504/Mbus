<template>
  <v-col cols="4" class="px-10">
    <span style="color: #085895; font-size: 24px"> Гдиня–Чернівці </span>
    <div style="text-align: left">
      <div style="font-size: 16px; color: #085895" class="mt-1">
        <p class="title">Телефони водіїв:</p>
        <span
          >+38(098)000-00-00<span class="driverNameColor">–Андрій</span></span
        ><br />
        <span
          >+38(098)000-00-00<span class="driverNameColor">–Андрій</span></span
        ><br />
        <span
          >+38(098)000-00-00<span class="driverNameColor">–Андрій</span></span
        >
      </div>
      <div class="mt-2">
        <span class="title">Дні відправлення:</span>
        <v-row no-gutters class="py-0">
          <span>Пн</span>
          <span class="ml-2 mr-2">Вт</span>
          <span>Ср</span>
          <span class="ml-2 mr-2">Чт</span>
          <span>Пт</span>
          <span class="ml-2 mr-2">Сб</span>
          <span>Нд</span>
        </v-row>
      </div>
      <div class="mt-2">
        <span class="title">Час відправлення:</span>
        <v-row no-gutters align="center" class="text" justify="start"
          ><v-icon color="#085895" large>mdi-clock-outline</v-icon
          ><span class="ml-1">12:30</span></v-row
        >
      </div>
      <div class="mt-2">
        <span class="title">Автобус:</span>
        <v-row no-gutters align="center" class="text"
          ><img
            width="30px"
            height="30px"
            src="@/assets/img/busServiceIcon/busIcon.svg"
          /><span class="ml-2">Setra S 417 GT-HD</span></v-row
        >
      </div>
      <div class="mt-2">
        <span class="title">Кількість місць:</span>
        <v-row no-gutters align="center" class="text"
          ><img
            width="30px"
            height="30px"
            src="@/assets/img/busServiceIcon/chairIcon.svg"
          />
          <span class="ml-2"
            >60<span class="drivingSeats">+2</span> місць</span
          ></v-row
        >
      </div>
    </div>
  </v-col>
</template>

<script>
export default {};
</script>

<style>
.driverNameColor {
  color: #243949;
}
.title {
  color: #243949;
  font-size: 20px;
}
.text {
  font-size: 16px;
  color: #085895;
}
</style>