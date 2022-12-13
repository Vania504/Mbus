<template>
  <div>
    <v-card class="my-3">
      <v-row no-gutters>
        <div style="width: 25px; text-align: right">
          <img src="@/assets/img/dottedLine.svg" height="100%" />
        </div>
        <v-col class="px-0">
          <div style="padding: 10px 15px 10px 15px">
            <span
              style="
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.1em;
                color: #243949;
              "
              >Ваша поїздка</span
            >
          </div>
          <v-divider style="border: 0.5px solid rgba(8, 88, 149, 0.53)" />
          <div style="width: 95%">
            <v-row no-gutters justify="start" align="start">
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
                    style="margin-top: 10px; position: absolute; right: 15px"
                  >
                    <v-col cols="12" style="text-align: right">
                      <!-- Price ticket -->
                      <p
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
                    </v-col>
                  </v-row>
                </v-row>
                <div style="margin-bottom: 15px">
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
                  padding-left: 5px;
                "
              >
                <v-row no-gutters align="center">
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
                      margin-right: 30px;
                    "
                    @click="showTicketDetail = !showTicketDetail"
                    >Деталі<v-icon v-if="!showTicketDetail"
                      >mdi-chevron-down</v-icon
                    ><v-icon v-else>mdi-chevron-up</v-icon></v-btn
                  >
                </v-row>
              </v-row>
            </v-card-actions>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <ticket-card-detail v-if="showTicketDetail" />
  </div>
</template>

<script>
import ticketCardDetail from "../../myTicket/ticketCardDetail.vue";
export default {
  components: {
    ticketCardDetail,
  },
  data: () => ({
    showTicketDetail: false,
  }),
};
</script>

<style>
</style>