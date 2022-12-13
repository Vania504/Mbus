<template>
  <div>
    <v-app-bar
      :height="
        $vuetify.breakpoint.xs
          ? '40px'
          : $route.name == 'ticket_search_page'
          ? '178px'
          : '98px'
      "
      color="white"
    >
      <v-col class="py-0 px-0">
        <v-row
          align="center"
          no-gutters
          justify="start"
          v-if="!$vuetify.breakpoint.xs"
        >
          <v-col :cols="isAdmin ? '3' : '1'" style="text-align: left">
            <v-row no-gutters justify="start">
              <router-link to="/">
                <img class="pt-2" src="@/assets/img/logoMbus.png" />
              </router-link>
            </v-row>
          </v-col>
          <v-col :cols="isAdmin ? '5' : '8'" style="align-self: center">
            <v-row justify="end" align="center">
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
          <v-col cols="2" class="px-0">
            <v-row no-gutters justify="end" v-if="loggedUser">
              <v-icon color="black" class="mr-1">mdi-account</v-icon
              ><span class="pointer" @click="showSignInModal = true"
                >Увійти</span
              >/<span @click="showSignUpModal = true" class="pointer"
                >Реєстрація</span
              >
            </v-row>
            <v-row no-gutters justify="end" align="center" v-else>
              <v-menu open-on-hover botoom offset-y max-width="200px">
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">
                    <v-row no-gutters align="center" justify="end">
                      <img class="mr-1" src="@/assets/img/profileIcon.svg" />
                      <span class="pointer myCabinet">Мій кабінет</span>
                      <v-icon small class="pointer ml-1" style="color: black"
                        >mdi-chevron-down</v-icon
                      >
                    </v-row>
                  </div>
                </template>
                <v-card>
                  <v-row no-gutters justify="center">
                    <v-col>
                      <v-row
                        no-gutters
                        align="center"
                        style="padding: 10px 10px 10px 10px"
                      >
                        <v-icon style="margin-right: 5px" color="black"
                          >mdi-account</v-icon
                        >
                        <span>Герцюк Ігор</span>
                      </v-row>
                      <v-divider />
                      <v-col class="py-0 px-0" style="text-align: left">
                        <v-list dense>
                          <v-list-item-group
                            v-model="selectedItem"
                            active-class="activeMenu"
                          >
                            <v-list-item
                              style="height: 26px"
                              @click="showMyTicketModal = true"
                            >
                              <p class="myTicketLabel">Мої квитки</p>
                            </v-list-item>
                            <v-list-item style="height: 26px">
                              <p>
                                <v-row no-gutters align="center" class="pt-4">
                                  <output
                                    class="logOutLabel"
                                    @click="showConfirmModal = true"
                                  >
                                    Вихід </output
                                  ><img
                                    style="margin-left: 5px"
                                    src="@/assets/img/logoutIcon.svg"
                                  />
                                </v-row>
                              </p>
                            </v-list-item> </v-list-item-group
                        ></v-list>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-card>
              </v-menu>
            </v-row>
          </v-col>
          <v-col
            :cols="isAdmin ? '2' : '1'"
            style="align-self: center; align-items: center"
          >
            <v-row no-gutters align="center" justify="end">
              <v-menu open-on-hover botoom offset-y max-width="200px">
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">
                    <v-row no-gutters align="center" justify="end">
                      <img
                        v-if="phoneNumbers[0].type == 'UA'"
                        src="@/assets/img/UA.png"
                      />
                      <img
                        v-if="phoneNumbers[0].type == 'PL'"
                        src="@/assets/img/PL.png"
                      />
                      <span style="margin-left: 5px">{{
                        phoneNumbers[0].number
                      }}</span>
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
                          align="center"
                        >
                          <img
                            v-if="number.type == 'UA'"
                            width="15px"
                            height="15px"
                            src="@/assets/img/UA.png"
                            class="mr-2"
                          />
                          <img
                            v-if="number.type == 'PL'"
                            width="15px"
                            height="15px"
                            src="@/assets/img/PL.png"
                            class="mr-2"
                          />
                          <span class="pointer">
                            <a
                              :href="`tel: ${number.number}`"
                              style="text-decoration: none; color: black"
                            >
                              {{ number.number }}</a
                            ></span
                          >
                        </v-row>
                      </v-col>
                    </v-list>
                  </v-row>
                </v-card>
              </v-menu></v-row
            >
          </v-col>
        </v-row>
        <v-row v-else align="center" justify="center" no-gutters>
          <img src="@/assets/img/logoMbus.png" width="60px" height="40px" />
        </v-row>
        <v-row
          no-gutters
          justify="center"
          class="pt-7"
          v-if="$route.name == 'ticket_search_page'"
        >
          <div style="width: 800px">
            <search-routes-field />
          </div>
        </v-row>
      </v-col>
    </v-app-bar>
    <sign-up-modal
      v-if="showSignUpModal"
      :visible="showSignUpModal"
      @close="showSignUpModal = false"
    />
    <sign-in
      v-if="showSignInModal"
      :visible="showSignInModal"
      @close="showSignInModal = false"
    />
    <confirm-modal
      v-if="showConfirmModal"
      @close="showConfirmModal = false"
      :visible="showConfirmModal"
      modalText="Ви підтверджуєте вихід?"
      @confirm="logout"
    />
    <my-ticket-modal
      v-if="showMyTicketModal"
      :visible="showMyTicketModal"
      @close="showConfirmModal = false"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SignIn from "./forAdmin/signIn.vue";
import signUpModal from "./forAdmin/signUpModal.vue";
import MyTicketModal from "./forUser/myTicket/myTicketModal.vue";
import ConfirmModal from "./UI/modals/confirmModal.vue";
import searchRoutesField from "./UI/searchRoutesField.vue";
export default {
  components: {
    signUpModal,
    SignIn,
    ConfirmModal,
    MyTicketModal,
    searchRoutesField,
  },
  name: "appHeader",
  data: () => ({
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
    showSignInModal: false,
    showSignUpModal: false,
    showConfirmModal: false,
    showMyTicketModal: false,
    selectedItem: 0,
  }),
  methods: {
    logout() {
      console.log("WORK LOGOUT");
      this.showConfirmModal = false;
    },
  },
  computed: {
    ...mapGetters(["loggedUser"]),
    ...mapGetters(["phoneNumbers"]),
  },
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
.myCabinet {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
}
.myTicketLabel {
  padding-left: 15px;
  padding-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #243949;
}
.logOutLabel {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #960909;
  padding-left: 15px;
}
.activeMenu {
  background: rgba(8, 88, 149, 0.1);
  border-radius: 10px;
  height: 26px !important;
}
</style>