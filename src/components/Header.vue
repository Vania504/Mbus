<template>
  <div>
    <v-app-bar :height="$vuetify.breakpoint.xs ? '40px' : '98px'" color="white">
      <v-row
        align="center"
        no-gutters
        justify="center"
        v-if="!$vuetify.breakpoint.xs"
      >
        <v-col cols="2">
          <v-row no-gutters justify="start">
            <img src="@/assets/img/logoMBus.svg" />
          </v-row>
        </v-col>
        <v-col :cols="isAdmin ? '6' : '8'" style="align-self: center">
          <v-row justify="center" align="center">
            <router-link to="/">
              <span class="headerItems">Головна</span></router-link
            >
            <v-menu open-on-hover botoom offset-y v-model="isActiveMenu">
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  <span
                    style="cursor: pointer"
                    :class="isActiveMenu ? 'forPassenger' : ''"
                    >Для пасажирів</span
                  >
                  <v-icon
                    style="
                      margin-right: 24px;
                      cursor: pointer;
                      font-weight: 400;
                    "
                    :color="!isActiveMenu ? 'black' : '#085895'"
                    >mdi-chevron-down</v-icon
                  >
                </div>
              </template>
              <v-col
                style="text-align: left; border-top: 0.5px solid #ececec"
                class="px-0 py-0"
              >
                <div
                  class="forPassengerItem px-2"
                  v-for="item in forPassengerItems"
                  :key="item.id"
                  @click="$router.push(item.path)"
                >
                  <span>{{ item.title }}</span>
                </div>
              </v-col>
            </v-menu>
            <router-link to="/our_fleet"
              ><span class="headerItems">Автопарк</span></router-link
            >
            <router-link to="/contact"
              ><span class="headerItems">Контакти</span></router-link
            >
            <router-link to="/admin" v-if="loggedUser"
              ><span class="headerItems">Адмін</span></router-link
            >
          </v-row>
        </v-col>
        <v-col cols="2" style="align-self: center; align-items: center">
          <v-menu open-on-hover botoom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <v-row no-gutters align="center" justify="end">
                  <img src="@/assets/img/UA.svg" />
                  <span style="margin-left: 5px">+38(098)000-00-00</span>
                  <v-icon>mdi-chevron-down</v-icon>
                </v-row>
              </div>
            </template>
            <v-card>
              <v-row no-gutters justify="center">
                <v-list>
                  <v-col>
                    <v-row
                      no-gutters
                      v-for="number in phoneNumbers"
                      :key="number.id"
                      class="mb-1"
                    >
                      <img
                        v-if="number.type == 'UA'"
                        src="@/assets/img/UA.svg"
                        class="mr-2"
                      />
                      <img v-else src="@/assets/img/PL.svg" class="mr-2" />
                      <span>{{ number.number }}</span>
                    </v-row>
                  </v-col>
                </v-list>
              </v-row>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
      <v-row v-else align="center" justify="center" no-gutters>
        <img src="@/assets/img/logoMBus.svg" width="50px" height="30px"/>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "appHeader",
  data: () => ({
    phoneNumbers: [
      {
        id: 1,
        number: "+38(098)000-00-00",
        type: "UA",
      },
      {
        id: 2,
        number: "+48(098)000-00-00",
        type: "PL",
      },
      {
        id: 3,
        number: "+38(098)000-00-00",
        type: "UA",
      },
    ],
    forPassengerItems: [
      {
        id: 1,
        title: "Наші маршрути",
        path: "/routes",
      },
      {
        id: 2,
        title: "Нерегулярні перевезення",
        path: "/irregular_transportation",
      },
      {
        id: 3,
        title: "Правила перевезення",
        path: "/transportation_rules",
      },
    ],
    isActiveMenu: "",
    isAdmin: true,
    signInVisibleModal: false,
    signUpVisibleModal: false,
  }),
  computed: {
    ...mapGetters(['loggedUser'])
  }
};
</script>

<style>
.headerItems {
  margin-right: 28px;
  cursor: pointer;
  color: black;
}
.forPassengerItem {
  background: #ffffff;
  border: 0.5px solid #ececec;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 2px 2px;
  cursor: pointer;
}
.forPassenger {
  color: #085895;
}
a {
  text-decoration: none;
  color: black;
}
</style>