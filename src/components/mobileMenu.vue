<template>
  <div>
    <my-ticket-drawer
      v-if="showMyTicketDrawer"
      :showMyTicketDrawer="showMyTicketDrawer"
    />
    <div class="menu">
      <v-row no-gutters align="center" class="pt-3" justify="center">
        <div v-for="(item, index) in menuItems" :key="item.id">
          <router-link
            :to="item.path"
            v-if="$route.path !== item.path && index !== 4"
          >
            <img
              :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
              :style="index == 0 ? '' : 'margin-left: 25px;'"
          /></router-link>
          <img
            v-else-if="
              $route.path !== item.path &&
              $route.path !== '/transportation_rules'
            "
            :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
            :style="index == 0 ? '' : 'margin-left: 25px;'"
            @click="$emit('other')"
          />
          <div
            v-else-if="
              $route.path == '/transportation_rules' ||
              $route.path == '/irregular_transportation'
            "
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
              @click="index == 3 ? showMyTicketDrawer = true : ''"
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
                      ? 'width: 140px;'
                      : 'width: 125px;'
                  "
                ></div>
                <img
                  :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
                  style="margin-left: 10px"
                />
                <v-col class="py-0 ml-1" cols="1">
                  <div :style="index == 3 ? 'width: 90px' : ''">
                    <span>{{ item.title }}</span>
                  </div>
                </v-col>
              </v-row>
            </div>
          </router-link>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import myTicketDrawer from "./forUser/myTicket/myTicketDrawer.vue";
export default {
  components: { myTicketDrawer },
  data: () => ({
    showMyTicketDrawer: false,
    menuItems: [
      {
        id: 2,
        title: "Автопарк",
        icon: "busIcon.svg",
        path: "/our_fleet",
      },
      {
        id: 4,
        title: "Маршрути",
        icon: "routeIcon.svg",
        path: "/routes",
      },
      {
        id: 3,
        title: "Головна",
        icon: "mainIcon.svg",
        path: "/",
      },
      {
        id: 1,
        title: "Мої квитки",
        icon: "ticketIcon.svg",
        path: "/ticket",
      },
      {
        id: 5,
        title: "Інше",
        icon: "moreIcon.svg",
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
  z-index: 100;
  width: 100%;
}
</style>