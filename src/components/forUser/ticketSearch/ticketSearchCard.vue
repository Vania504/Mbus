<template>
  <v-col class="py-0 px-0">
    <v-card class="ticketCard my-3 rounded-lg rounded-br-0">
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
          style="
            text-align: left;
            padding-bottom: 10px;
            padding-top: 10px;
            width: 95%;
          "
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
            <v-col cols="7" class="px-0 py-0">
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
              <br /><br />
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
            </v-col>
            <v-row
              no-gutters
              justify="end"
              class="py-0"
              style="margin-top: 10px"
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
          style="
            position: absolute;
            bottom: 0px;
            width: 100%;
            padding-left: 34px;
          "
        >
          <span
            style="
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.1em;
              color: #243949;
            "
          >
            Автобус:
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
          </span>
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