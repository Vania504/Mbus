<template>
  <div class="menu">
    <v-row no-gutters align="center" class="pt-3" justify="center">
      <div v-for="(item, index) in menuItems" :key="item.id">
        <router-link :to="item.path" v-if="$route.path !== item.path && index !== 4">
          <img
            :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
            :style="index == 0 ? '' : 'margin-left: 25px;'"
        /></router-link>
        <img
        v-else-if="$route.path !== item.path && $route.path !== '/transportation_rules'"
            :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
            :style="index == 0 ? '' : 'margin-left: 25px;'"
            @click="$emit('other')"
        />
        <div  v-else-if="$route.path == '/transportation_rules' || $route.path == '/irregular_transportation'"
            style="padding-bottom: 5px; text-align: left"
            :style="index == 0 ? '' : 'margin-left: 15px;'"
            @click="$emit('other')"
          >
            <v-row no-gutters align="center" justify="start">
              <div
                style="
                  border-radius: 20px;
                  background: #cbe0f0;
                  position: absolute;
                  height: 40px;
                  opacity: 0.4;
                  width: 90px;
                "
              ></div>
              <img
                :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
                style="margin-left: 10px"
              />
              <v-col class="py-0 ml-1" cols="1">
                <span>{{ item.title }}</span></v-col
              >
            </v-row>
          </div>
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
                "
                :style="
                  index == 4
                    ? 'width: 90px;'
                    : index == 2
                    ? 'width: 120px;'
                    : index == 3
                    ? 'width: 130px;'
                    : 'width: 125px;'
                "
              ></div>
              <img
                :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
                style="margin-left: 10px"
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
        title: "Контакти",
        icon: "locationIcon.png",
        path: "/contact",
      },
      {
        id: 2,
        title: "Автопарк",
        icon: "busIcon.png",
        path: "/our_fleet",
      },
      {
        id: 3,
        title: "Головна",
        icon: "mainIcon.png",
        path: "/",
      },
      {
        id: 4,
        title: "Маршрути",
        icon: "routeIcon.png",
        path: "/routes",
      },
      {
        id: 5,
        title: "Інше",
        icon: "moreIcon.png",
        path: "/irregular_transportation",
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