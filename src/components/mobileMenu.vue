<template>
  <div class="menu">
    <v-row no-gutters align="center" class="pt-3" justify="center">
      <div v-for="(item, index) in menuItems" :key="item.id">
        <router-link :to="item.path" v-if="$route.path !== item.path">
          <img
            :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
            :style="index == 0 ? '' : 'margin-left: 25px;'"
        /></router-link>
        <router-link :to="item.path" v-else>
          <div
            style="padding-bottom: 5px; text-align: left"
            :style="index == 0 ? '' : 'margin-left: 15px;'"
          >
            <v-row no-gutters align="center" justify="start">
              <div
                style="
                  border-radius: 20px;
                  background: #cbe0f0;
                  position: absolute;
                  height: 40px;
                  opacity: 0.4;
                  width: 125px
                "
              ></div>
              <img
                :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
                style="margin-left: 10px;"
              />
              <v-col class="py-0 ml-1" cols="1">
                <span>{{ item.title }}</span></v-col
              >
            </v-row>
          </div>
        </router-link>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuItems: [
      {
        id: 1,
        title: "Локація",
        icon: "locationIcon.svg",
        path: "/location",
      },
      {
        id: 2,
        title: "Автопарк",
        icon: "busIcon.svg",
        path: "/our_fleet",
      },
      {
        id: 3,
        title: "Головна",
        icon: "mainIcon.svg",
        path: "/",
      },
      {
        id: 4,
        title: "Маршрути",
        icon: "routeIcon.svg",
        path: "/routes",
      },
      {
        id: 5,
        title: "Локація",
        icon: "moreIcon.svg",
        path: "/other",
      },
    ],
  }),
};
</script>

<style>
.menu {
  height: 60px;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 20;
  width: 100%;
}
</style>