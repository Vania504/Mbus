<template>
  <div>
    <div class="menu">
      <div
        v-if="!showFilterList && $route.name == 'ticket_search_page'"
        style="
          position: fixed;
          bottom: 60px;
          display: flex;
          justify-content: center;
          width: 100%;
          height: 80px;
          align-items: center;
          z-index: 50;
        "
      >
        <v-btn
          color="#085895"
          width="189px"
          height="40px"
          class="white--text"
          dense
          @click="showFilterList = true"
        >
          Фільтрувати
        </v-btn>
      </div>
      <div
        v-if="!showFilterList && $route.name == 'ticket_search_page'"
        style="
          position: fixed;
          bottom: 60px;
          width: 100%;
          height: 70px;
          background: white;
          filter: blur(45px);
        "
      ></div>
      <v-row no-gutters align="center" class="pt-3" justify="center">
        <div v-for="(item, index) in menuItems" :key="item.id">
          <router-link
            :to="item.path"
            v-if="$route.path !== item.path && index !== 4"
          >
            <img
              :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
              :style="index == 0 ? '' : 'margin-left: 25px;'"
              style="z-index: 20"
          /></router-link>
          <img
            v-else-if="
              $route.path !== item.path &&
              $route.path !== '/transportation_rules'
            "
            :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
            :style="index == 0 ? '' : 'margin-left: 25px;'"
            style="z-index: 20"
            @click="$emit('other'), $router.push('/other')"
          />
          <div
            v-else-if="
              $route.path == '/transportation_rules' ||
              $route.path == '/irregular_transportation' ||
              $route.path == '/other'
            "
            style="padding-bottom: 5px; text-align: left; z-index: 20"
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
                style="margin-left: 10px; z-index: 20"
              />
              <v-col class="py-0 ml-1" cols="1" style="z-index: 20">
                <v-expand-x-transition>
                  <div style="color: #1976d2" v-if="showText">
                    {{ item.title }}
                  </div>
                </v-expand-x-transition>
              </v-col>
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
                      : index == 1
                      ? 'width: 130px;'
                      : index == 2
                      ? 'width: 120px;'
                      : index == 3
                      ? 'width: 140px;'
                      : 'width: 125px;'
                  "
                ></div>
                <img
                  :src="require(`@/assets/img/mobileMenu/${item.icon}`)"
                  style="margin-left: 10px; z-index: 20"
                />

                <v-col class="py-0 ml-1" cols="1" style="z-index: 20">
                  <div
                    :style="
                      index == 4
                        ? 'width: 50px;'
                        : index == 1
                        ? 'width: 90px;'
                        : index == 2
                        ? 'width: 70px;'
                        : index == 3
                        ? 'width: 90px'
                        : 'width: 85px;'
                    "
                  >
                    <v-expand-x-transition>
                      <div v-if="showText">{{ item.title }}</div>
                    </v-expand-x-transition>
                  </div>
                </v-col>
              </v-row>
            </div>
          </router-link>
        </div>
      </v-row>
    </div>
    <v-navigation-drawer
      v-if="showFilterList"
      v-model="showFilterList"
      width="100%"
      height="100%"
      absolute
      top
    >
      <v-row no-gutters justify="center">
        <v-col cols="11">
          <filters-list @setFilterList="setFilterList" />
        </v-col>
      </v-row>
      <div
        style="
          position: absolute;
          z-index: 100;
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 220px;
        "
      >
        <v-btn
          width="176px"
          height="36px"
          style="
            background: #085895;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            color: white;
            text-transform: none;
          "
          @click="applyFilters"
          >Застосувати</v-btn
        >
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import filtersList from "./forUser/ticketSearch/filtersList.vue";
export default {
  components: { filtersList },
  data: () => ({
    showFilterList: false,
    showText: true,
    filtersListId: [],
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
        path: "/other",
      },
    ],
  }),
  methods: {
    setFilterList(id) {
      this.filtersListId.push(id);
    },
    applyFilters() {
      this.$emit("setFiltersList", this.filtersListId);
      this.showFilterList = false;
    },
    setShowText() {
      this.showText = true;
    },
  },
  watch: {
    "$route.path": {
      deep: true,
      handler() {
        (this.showText = false),
          setTimeout(() => {
            this.setShowText();
          }, 10);
      },
    },
  },
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
.slide-fade-enter-active {
  transition: all 2s ease;
}
</style>