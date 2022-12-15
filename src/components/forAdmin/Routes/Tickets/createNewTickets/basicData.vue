<template>
  <v-card class="sectionCard my-3">
    <v-col class="py-0 px-0">
      <v-row no-gutters align="center">
        <span class="sectionName">Основні дані</span>
        <v-row no-gutters justify="end">
          <span
            style="
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.1em;
            "
            :style="
              !ticket.route
                ? 'pointer-events: none;color: #4c5d6c;'
                : 'color: #085895;'
            "
            class="pointer"
            >Редагування маршруту</span
          >
        </v-row>
      </v-row>
      <v-row no-gutters align="start" style="margin-top: 20px">
        <v-col cols="5">
          <div style="width: 500px">
            <v-autocomplete
              dense
              outlined
              label="Маршрут"
              placeholder="Виберіть маршрут"
              color="#085895"
              :items="Object.values(routes)"
              :item-value="'id'"
              :item-text="''"
              v-model="ticket.route"
              style="margin-right: 40px"
            >
              <template slot="selection" slot-scope="{ item }">
                <span class="autocompleteSelectedItem"
                  >{{ item.departure }} - {{ item.destination }}</span
                >
              </template>
              <template slot="item" slot-scope="{ item }">
                <span class="autocompleteItem"
                  >{{ item.departure }} - {{ item.destination }}</span
                >
              </template>
            </v-autocomplete>
          </div>
        </v-col>
        <v-col cols="3" style="padding-right: 50px; padding-left: 40px">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="isClose"
            offset-y
            nudge-left="180"
            nudge-bottom="0"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                dense
                outlined
                label="Дата"
                color="#085895"
                prepend-inner-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                @click="isClose = false"
                @click:prepend-inner="on.click"
                hide-details
                v-model="dates"
              >
              </v-text-field>
            </template>
            <v-row no-gutters align="center" justify="center">
              <v-date-picker
                v-model="dates[0]"
                color="#085895"
                locale="uk"
                no-title
                :min="
                  new Date(
                    new Date().getTime() +
                      1 * 60 * 60 * 1000 -
                      new Date().getTimezoneOffset() * 60000
                  )
                    .toISOString()
                    .substr(0, 10)
                "
              ></v-date-picker>
              <v-date-picker
                v-model="dates[1]"
                color="#085895"
                locale="uk"
                no-title
                :min="
                  new Date(
                    new Date().getTime() +
                      1 * 60 * 60 * 1000 -
                      new Date().getTimezoneOffset() * 60000
                  )
                    .toISOString()
                    .substr(0, 10)
                "
              ></v-date-picker>
            </v-row>
          </v-menu>
        </v-col>
        <v-col cols="1">
          <v-text-field
            dense
            outlined
            label="Ціна"
            placeholder="0 грн"
            color="#085895"
          />
        </v-col>
      </v-row>
      <v-row no-gutters align="center">
        <v-col cols="4" style="padding-right: 50px">
          <v-autocomplete
            dense
            outlined
            label="Автобус"
            placeholder="Виберіть автобус"
            color="#085895"
            :items="Object.values(buses)"
            :item-value="'id'"
            :item-text="'model'"
          >
            <template slot="selection" slot-scope="{ item }">
              <span class="autocompleteSelectedItem">
                {{ item.model }}
              </span></template
            >
            <template slot="item" slot-scope="{ item }">
              <span class="autocompleteItem">{{ item.model }}</span>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="2">
          <div style="width: 130px">
            <v-text-field
              dense
              outlined
              label="Час відправлення"
              placeholder="00:00"
              color="#085895"
              v-mask="'##:##'"
              v-model="ticket.start_time"
            />
          </div>
        </v-col>
        <v-col cols="2" style="text-align: left">
          <div style="width: 140px">
            <v-text-field
              dense
              outlined
              label="Час прибуття"
              placeholder="00:00"
              color="#085895"
              v-mask="'##:##'"
              v-model="ticket.end_time"
            />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
import routesService from "@/requests/admin/routesService";
import ourFleetService from "@/requests/admin/ourFleetService";
export default {
  data: () => ({
    disableEditRoute: true,
    isClose: true,
    dates: [],
    minutes: ["00:00", "00:01"],
    routes: [],
    buses: [],
    ticket: {},
    menu: "",
  }),
  mounted() {
    this.getRoutes();
    this.getBuses();
  },
  methods: {
    async getRoutes() {
      let response = await routesService.getRouteForAdmin();
      this.routes = response.data.data;
    },
    async getBuses() {
      let response = await ourFleetService.getBusesForAdmin();
      this.buses = response.data;
    },
  },
};
</script>

<style>
.autocompleteItem {
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #243949;
  text-transform: none;
}
.autocompleteSelectedItem {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #243949;
}
</style>