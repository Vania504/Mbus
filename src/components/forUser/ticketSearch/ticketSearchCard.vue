<template>
  <v-col class="py-0 px-0">
    <v-card
      class="ticketCard my-3 rounded-lg rounded-br-0"
      :style="$vuetify.breakpoint.xs ? 'border-bottom-right-radius: 10p;' : ''"
    >
      <v-row no-gutters justify="start" align="start">
        <div
          style="
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(-180deg);
            height: 150px;
            align-self: center;
          "
        >
          <span
            style="
              font-weight: 500;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.1em;
              color: #243949;
            "
          >
            &nbsp;
          </span>
        </div>
        <img src="@/assets/img/dottedLine.svg" />
        <div
          style="text-align: left; padding-bottom: 10px; padding-top: 10px"
          :style="$vuetify.breakpoint.xs ? 'width: 75%;' : '   width: 95%;'"
        >
          <v-row no-gutters align="start">
            <div style="text-align: right; width: 130px">
              <output
                style="
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 12px;
                  letter-spacing: 0.1em;
                  color: #4c5d6c;
                  padding-right: 5px;
                "
                >пн. 14 лист.<span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                  >10:30</span
                ></output
              ><br />
              <span
                style="
                  font-weight: 500;
                  font-size: 10px;
                  line-height: 12px;
                  letter-spacing: 0.1em;
                  color: #4c5d6c;
                "
                >18г 30хв</span
              ><br />
              <output
                style="
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 12px;
                  letter-spacing: 0.1em;
                  color: #4c5d6c;
                  padding-right: 5px;
                "
                >пн. 14 лист.<span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                  >10:30</span
                ></output
              >
            </div>
            <div style="width: 15px">
              <img
                height="62px"
                style="margin-top: 8px"
                src="@/assets/img/routeLine.svg"
              />
            </div>
            <v-col cols="5" xl="7" lg="7" md="7" sm="7" class="px-0 py-0">
              <div
                :style="
                  $vuetify.breakpoint.xs
                    ? 'width: 125%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 25px; margin-top: 2px;'
                    : ''
                "
              >
                <span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                >
                  Гдиня
                  <span
                    style="
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      letter-spacing: 0.1em;
                      color: #4c5d6c;
                    "
                    >Dworzec Autobusowy, pl. Grodnicki 1(platf.1)</span
                  >
                </span>
              </div>
              <!-- Space for only other screen -->
              <br v-if="!$vuetify.breakpoint.xs" /><br
                v-if="!$vuetify.breakpoint.xs"
              />
              <div
                :style="
                  $vuetify.breakpoint.xs
                    ? 'width: 125%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 20px;'
                    : ''
                "
              >
                <span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                >
                  Гдиня
                  <span
                    style="
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      letter-spacing: 0.1em;
                      color: #4c5d6c;
                    "
                    >Dworzec Autobusowy, pl. Grodnicki 1(platf.1)</span
                  >
                </span>
              </div>
            </v-col>
            <!-- Booking btn and price for other screen -->
            <v-row
              no-gutters
              justify="end"
              class="py-0"
              style="margin-top: 10px"
              v-if="!$vuetify.breakpoint.xs"
            >
              <v-col cols="10">
                <!-- Price ticket -->
                <p
                  v-if="price"
                  style="
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 14px;
                    letter-spacing: 0.1em;
                    color: #4c5d6c;
                  "
                >
                  Ціна:
                  <span
                    style="
                      font-weight: 500;
                      font-size: 16px;
                      line-height: 19px;
                      letter-spacing: 0.1em;
                      color: #085895;
                    "
                    >2 695 грн</span
                  >
                </p>
                <!-- Label do not seats -->
                <p
                  v-else
                  style="
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.1em;
                    color: #4c5d6c;
                    padding-left: 5px;
                  "
                >
                  Немає місць
                </p>
                <v-btn
                  width="122px"
                  height="32px"
                  :disabled="!price"
                  style="
                    background: #085895;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
                    border-radius: 5px;
                    text-transform: none;
                    color: white;
                  "
                  >Бронювати</v-btn
                >
              </v-col>
            </v-row>
          </v-row>
          <span
            v-if="!$vuetify.breakpoint.xs"
            style="
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.1em;
              text-decoration-line: underline;
              color: #6b7c8a;
              margin-left: 14px;
            "
            class="pointer"
          >
            Переглянути маршрут
          </span>
        </div>
      </v-row>
      <v-card-actions>
        <v-row
          no-gutters
          justify="start"
          align="center"
          :style="
            $vuetify.breakpoint.xs
              ? 'padding-left: 20px'
              : 'padding-left: 34px;'
          "
          style="position: absolute; bottom: 0px; width: 100%"
        >
          <!-- Bus for other screen -->
          <v-row no-gutters align="center" v-if="!$vuetify.breakpoint.xs">
            <span
              style="
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 0.1em;
                color: #243949;
              "
            >
              Автобус: &nbsp;
            </span>
            <img
              width="12px"
              height="12px;"
              src="@/assets/img/busServiceIcon/busIcon.png"
              style="margin-right: 5px"
            />
            <span
              style="
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 0.1em;
                color: #085895;
              "
              >Setra S 417 GT-HD</span
            >
          </v-row>
          <v-row no-gutters align="center" justify="end">
            <v-btn
              text
              style="
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 0.1em;
                color: #085895;
                margin-right: 8px;
              "
              @click="showTicketDetail = !showTicketDetail"
              >Деталі<v-icon v-if="!showTicketDetail">mdi-chevron-down</v-icon
              ><v-icon v-else>mdi-chevron-up</v-icon></v-btn
            >
          </v-row>
          <br />
          <!-- Booking btn and price for mobile screen -->
          <v-row
            v-if="$vuetify.breakpoint.xs"
            no-gutters
            class="px-2"
            align="center"
            style="border-top: 0.5px solid #dddddd; padding-left: 15px padding-right: 15px;"
          >
            <span class="textStyleInBtn" style="color: #4c5d6c">
              Ціна:
              <span
                style="
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 19px;
                  letter-spacing: 0.1em;
                  color: #085895;
                "
                >2 695 грн</span
              >
            </span>
            <v-row no-gutters justify="end">
              <v-btn
                width="175px"
                height="40px"
                color="#085895"
                class="rounded-0 rounded-br-lg white--text"
              >
                Бронювати
              </v-btn>
            </v-row>
          </v-row>
        </v-row>
      </v-card-actions>
    </v-card>
    <ticket-card-detail v-if="showTicketDetail" />
  </v-col>
</template>
  
  <script>
import ticketCardDetail from "../myTicket/ticketCardDetail.vue";
export default {
  components: {
    ticketCardDetail,
  },
  data: () => ({
    showTicketDetail: false,
    price: false,
  }),
  props: {
    ticket: {
      require: true,
    },
  },
};
</script>
  
  <style>
.ticketCard {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px 0px 10px;
  height: 150px;
}
.itemTicketTitle {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #243949;
}
.itemTicketText {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #243949;
}
.theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn-outlined) {
  color: white !important;
  background: #6b7c8a !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}
</style>