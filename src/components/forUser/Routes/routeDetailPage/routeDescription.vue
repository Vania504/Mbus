<template>
  <v-col
    cols="12"
    xl="4"
    lg="4"
    md="4"
    sm="4"
    :class="$vuetify.breakpoint.xs ? '' : 'px-10'"
  >
    <span
      style="color: #085895; font-size: 24px"
      v-if="!$vuetify.breakpoint.xs"
    >
      {{ route.departure }}–{{ route.destination }}
    </span>
    <div style="text-align: left">
      <div style="font-size: 16px; color: #085895" class="mt-1">
        <p :class="$vuetify.breakpoint.xs ? 'titleMobile' : 'title'">
          Телефони водіїв:
        </p>
        <div v-for="driver in route.driver_phones" :key="driver.id">
          <span :style="$vuetify.breakpoint.xs ? 'font-size: 14px' : ''"
            >{{driver.phone}}<span class="driverNameColor">–{{driver.name}}</span></span
          ><br />
        </div>
      </div>
      <div class="mt-2">
        <span :class="$vuetify.breakpoint.xs ? 'titleMobile' : 'title'"
          >Дні відправлення:</span
        >
        <v-row
          no-gutters
          class="py-0"
          :class="$vuetify.breakpoint.xs ? 'textMobile' : 'text'"
        >
          <span :style="route.departure_days.mon == '1' ? 'text-decoration: underline;' : ''">Пн</span>
          <span :style="route.departure_days.tue == '1' ? 'text-decoration: underline;' : ''" class="ml-2 mr-2">Вт</span>
          <span :style="route.departure_days.wed == '1' ? 'text-decoration: underline;' : ''">Ср</span>
          <span :style="route.departure_days.thu == '1' ? 'text-decoration: underline;' : ''" class="ml-2 mr-2">Чт</span>
          <span :style="route.departure_days.fri == '1' ? 'text-decoration: underline;' : ''">Пт</span>
          <span :style="route.departure_days.sat == '1' ? 'text-decoration: underline;' : ''" class="ml-2 mr-2">Сб</span>
          <span :style="route.departure_days.sun == '1' ? 'text-decoration: underline;' : ''">Нд</span>
        </v-row>
      </div>
      <div class="mt-2">
        <span :class="$vuetify.breakpoint.xs ? 'titleMobile' : 'title'"
          >Час відправлення:</span
        >
        <v-row
          no-gutters
          align="center"
          :class="$vuetify.breakpoint.xs ? 'textMobile' : 'text'"
          justify="start"
        >
          <v-icon color="#085895" v-if="$vuetify.breakpoint.xs"
            >mdi-clock-outline</v-icon
          >
          <v-icon color="#085895" large v-else>mdi-clock-outline</v-icon
          ><span class="ml-1">{{ route.departure_time }}</span></v-row
        >
      </div>
      <div class="mt-2">
        <span :class="$vuetify.breakpoint.xs ? 'titleMobile' : 'title'"
          >Автобус:</span
        >
        <v-row
          no-gutters
          align="center"
          :class="$vuetify.breakpoint.xs ? 'textMobile' : 'text'"
          ><img
            :width="$vuetify.breakpoint.xs ? '20px' : '30px'"
            :height="$vuetify.breakpoint.xs ? '20px' : '30px'"
            src="@/assets/img/busServiceIcon/busIcon.png"
          /><span class="ml-2">{{ route.bus.model }}</span></v-row
        >
      </div>
      <div class="mt-2">
        <span :class="$vuetify.breakpoint.xs ? 'titleMobile' : 'title'"
          >Кількість місць:</span
        >
        <v-row
          no-gutters
          align="center"
          :class="$vuetify.breakpoint.xs ? 'textMobile' : 'text'"
          ><img
            :width="$vuetify.breakpoint.xs ? '20px' : '30px'"
            :height="$vuetify.breakpoint.xs ? '20px' : '30px'"
            src="@/assets/img/busServiceIcon/chairIcon.png"
          />
          <span class="ml-2"
            >{{ route.bus.seats
            }}<span class="drivingSeats">+2</span> місць</span
          ></v-row
        >
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    route: {
      require: true,
    },
  },
};
</script>

<style>
.driverNameColor {
  color: #243949;
}
.title {
  color: #243949;
  font-size: 20px;
}
.titleMobile {
  color: #243949;
  font-size: 16px;
}
.text {
  font-size: 16px;
  color: #085895;
}
.textMobile {
  font-size: 14px;
  color: #085895;
}
</style>