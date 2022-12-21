<template>
  <v-navigation-drawer v-model="visible" absolute right temporary width="100%">
    <sign-in-mobile
      v-if="signIn"
      @back="signIn = false"
      @goToSignUp="(signIn = false), (signUp = true)"
    />
    <sign-up-mobile
      v-else-if="signUp"
      @back="signUp = false"
      @goToSignIn="(signUp = false), (signIn = true)"
    />
    <div v-else>
      <div
        style="
          background-color: #243949;
          height: 40px;
          padding: 10px 0px 10px 15px;
          border-radius: 0px;
        "
        class="white--text"
      >
        <v-row no-gutters align="center" justify="start"
          ><v-icon color="white" style="margin-right: 10px"
            >mdi-dots-horizontal-circle-outline</v-icon
          >
          <span
            style="font-size: 16px; line-height: 19px; letter-spacing: 0.1em"
            >Інше</span
          ></v-row
        >
      </div>
      <div style="padding: 20px 0px 20px 15px" v-if="!loggedUser">
        <v-row no-gutters justify="start" align="center">
          <v-icon color="black" class="mr-1">mdi-account</v-icon
          ><span
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.055em;
              color: #243949;
            "
            class="pointer"
            @click="signIn = true"
            >Увійти</span
          >/<span
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.055em;
              color: #243949;
            "
            @click="signUp = true"
            class="pointer"
            >Реєстрація</span
          >
        </v-row>
      </div>
      <div v-else style="padding: 20px 15px 20px 15px">
        <v-row no-gutters align="center" style="margin-bottom: 20px">
          <v-icon style="margin-right: 10px" color="black">mdi-account</v-icon>
          <span
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.055em;
              color: #243949;
            "
            >{{ loggedUser.first_name }} &nbsp; {{ loggedUser.last_name }}</span
          >
          <v-row
            no-gutters
            align="center"
            justify="end"
            class="pointer"
            @click="showConfirmModal = true"
          >
            <output class="logOutLabel"> Вихід </output
            ><img style="margin-left: 5px" src="@/assets/img/logoutIcon.svg" />
          </v-row>
        </v-row>
        <v-row
          no-gutters
          align="center"
          class="pointer"
          @click="$router.push('/edit_profile')"
        >
          <img
            width="20px"
            height="20px"
            style="margin-right: 10px; margin-left: 3px"
            src="@/assets/img/editProfileIcon.svg"
          />
          <span
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.055em;
              color: #243949;
            "
            >Налаштування</span
          >
        </v-row>
      </div>
      <v-divider />
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue-purple--text text--accent-4"
        >
          <router-link to="/irregular_transportation">
            <v-list-item active-class="activeItem">
              <v-row no-gutters justify="start" align="center">
                <span class="textStyleDrawer">Нерегулярні перевезення</span>
                <v-row no-gutters justify="end">
                  <v-icon color="#243949">mdi-chevron-right</v-icon>
                </v-row>
              </v-row>
            </v-list-item>
          </router-link>
          <router-link to="/transportation_rules">
            <v-list-item>
              <v-row no-gutters justify="start" align="center">
                <span class="textStyleDrawer">Правила перевезення</span>
                <v-row no-gutters justify="end">
                  <v-icon color="#243949">mdi-chevron-right</v-icon>
                </v-row>
              </v-row>
            </v-list-item>
          </router-link>
          <router-link to="/transportation_rules">
            <v-list-item>
              <v-row no-gutters justify="start" align="center">
                <span class="textStyleDrawer">Контакти</span>
                <v-row no-gutters justify="end">
                  <v-icon color="#243949">mdi-chevron-right</v-icon>
                </v-row>
              </v-row>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
      <confirmModal
        v-if="showConfirmModal"
        @close="showConfirmModal = false"
        :visible="showConfirmModal"
        modalText="Ви підтверджуєте вихід?"
        @confirm="logout"
      />
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import confirmModal from "./modals/confirmModal.vue";
import signUpMobile from "../forAdmin/Auth/mobile/signUpMobile.vue";
import signInMobile from "../forAdmin/Auth/mobile/signInMobile.vue";
export default {
  components: {
    confirmModal,
    signInMobile,
    signUpMobile,
  },
  data: () => ({
    group: "",
    visible: false,
    showConfirmModal: false,
    signIn: false,
    signUp: false,
  }),
  props: {
    showNavigationDrawer: {
      require: true,
    },
  },
  mounted() {
    this.visible = this.showNavigationDrawer;
    window.scrollTo(0, 0);
  },
  methods: {
    logout() {
      this.$store.commit("clearUserLogged");
      this.showConfirmModal = false;
    },
  },
  computed: {
    ...mapGetters(["loggedUser"]),
  },
  watch: {
    visible: {
      deep: true,
      handler() {
        if (this.visible == false) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>

<style>
.textStyleDrawer {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #4c5d6c;
}
.activeItem {
  background: rgba(8, 88, 149, 0.1);
  border-radius: 10px;
}
</style>