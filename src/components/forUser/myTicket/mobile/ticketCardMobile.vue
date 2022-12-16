<template>
  <v-col class="py-0 px-0">
    <v-card class="ticketCard my-3 rounded-lg rounded-br-0">
      <v-col class="px-0 py-0">
        <v-row no-gutters justify="start" align="start">
          <div
            style="
              writing-mode: vertical-rl;
              text-orientation: mixed;
              transform: rotate(-180deg);
              height: 130px;
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
              ID: 00000{{ ticket.id }}
            </span>
          </div>
          <img height="180px" src="@/assets/img/dottedLine.svg" />
          <v-col
            cols="11"
            style="text-align: left; padding-top: 10px; padding-bottom: 10px"
            class="px-0"
          >
            <v-row no-gutters align="center">
              <v-col cols="3" class="py-0" style="text-align: right">
                <span
                  style="
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 12px;
                    letter-spacing: 0.1em;
                    color: #4c5d6c;
                  "
                  >пн. 14 лист.
                </span>
                <span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                  >10:30</span
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
                <span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                  >10:30</span
                ><br />
                <span
                  style="
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 12px;
                    letter-spacing: 0.1em;
                    color: #4c5d6c;
                  "
                  >пн. 14 лист.</span
                >
              </v-col>
              <v-col cols="1" class="px-5 py-0">
                <img src="@/assets/img/routeLine.svg" />
              </v-col>
              <v-col cols="7" class="px-0 py-0">
                <div
                  style="
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: 20px;
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
                <div
                  style="
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                >
                  <span
                    style="
                      font-weight: 500;
                      font-size: 14px;
                      line-height: 16px;
                      letter-spacing: 0.1em;
                      color: #243949;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
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
            </v-row>
            <v-row
              no-gutters
              align="center"
              justify="center"
              class="px-0 pl-2"
              style="padding-top: 10px;"
            >
              <v-btn
                width="25%"
                height="30px"
                @click="showQrCodeModal = true"
                text
                ><img src="@/assets/img/qrCodeIcon.svg" class="mr-1" /><span
                  ><span
                    style="
                      font-weight: 400;
                      font-size: 12px;
                      line-height: 14px;
                      letter-spacing: 0.1em;
                      color: #243949;
                      text-transfrom: none;
                    "
                    >E-tickets</span
                  ></span
                >
              </v-btn>
              <v-btn
                text
                width="50%"
                height="30px"
                @click="showConfirmModal = true"
                ><span
                  style="
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 14px;
                    letter-spacing: 0.1em;
                    color: #960909;
                    text-transfrom: none;
                  "
                  >Скасувати бронювання</span
                ></v-btn
              >
              <v-btn
                text
                style="
                  font-weight: 400;
                  font-size: 12px;
                  line-height: 14px;
                  letter-spacing: 0.1em;
                  color: #085895;
                  text-transfrom: none;
                "
                width="25%"
                height="30px"
                @click="showTicketDetail = !showTicketDetail"
                >Деталі<v-icon v-if="!showTicketDetail">mdi-chevron-down</v-icon
                ><v-icon v-else>mdi-chevron-up</v-icon></v-btn
              >
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
    <ticket-card-detail v-if="showTicketDetail" />
    <confirm-modal
      v-if="showConfirmModal"
      :visible="showConfirmModal"
      :refund="true"
      :modalText="refundText"
      modalTitle="Скасувати бронювання"
      modalSubtitle="Ви впевнені, що бажаєте скасувати бронювання квитка?"
      @close="showConfirmModal = false"
      @confirm="(showConfirmModal = false), (reservationCanceled = true)"
    />
    <success-modal
      v-if="reservationCanceled"
      :visible="reservationCanceled"
      modalTitle="Ваше бронювання скасовано!"
      modalText="Найближчим часом наш менеджер зв’яжиться з Вами для уточнення деталей."
      @close="reservationCanceled = false"
    />
    <qr-code-modal
      v-if="showQrCodeModal"
      :visible="showQrCodeModal"
      @close="showQrCodeModal = false"
    />
  </v-col>
</template>
  
  <script>
import successModal from "@/components/UI/modals/successModal.vue";
import ticketCardDetail from "../ticketCardDetail.vue";
import ConfirmModal from "@/components/UI/modals/confirmModal.vue";
import QrCodeModal from "@/components/UI/modals/qrCodeModal.vue";
export default {
  components: {
    ticketCardDetail,
    successModal,
    ConfirmModal,
    QrCodeModal,
  },
  data: () => ({
    showTicketDetail: false,
    reservationCanceled: false,
    showConfirmModal: false,
    showQrCodeModal: false,
    refundText:
      "<li>до 240 год. до від`їзду: 80%</li><li>від 240 год. до 72 год. до від`їзду: 50%</li><li>від 72 год. до 24 год. до від`їзду: 10%</li><li>менше 24 год. до від`їзду: квиток не повертається</li>",
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
  height: 180px;
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
.v-btn__content {
  text-transform: none;
}
</style>