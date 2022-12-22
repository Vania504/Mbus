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
            ID: 00000{{ ticket.id }}
          </span>
        </div>
        <img src="@/assets/img/dottedLine.svg" />
        <v-col
          cols="7"
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
                >пн. 14 лист.<span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                  >10:30</span
                ></span
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
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 12px;
                  letter-spacing: 0.1em;
                  color: #4c5d6c;
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
                ></span
              >
            </v-col>
            <v-col cols="1" class="px-5 py-0">
              <img src="@/assets/img/routeLine.svg" />
            </v-col>
            <v-col cols="8" class="px-0 py-0">
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
          </v-row>
          <br />
          <p
            style="
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.1em;
              text-decoration-line: underline;
              color: #6b7c8a;
              margin-left: 10px;
            "
          >
            Переглянути маршрут
          </p>
          <p
            style="
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.1em;
              color: #243949;
              margin-left: 10px;
              margin-top: 10px;
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
          </p>
        </v-col>
        <v-col
          class="px-0"
          cols="4"
          style="text-align: left; padding-top: 10px; padding-bottom: 10px"
        >
          <v-row no-gutters align="center">
            <v-col cols="6" class="py-0"
              ><span class="itemTicketTitle">Прізвище та ім’я:</span></v-col
            >
            <v-col cols="6" class="py-0"
              ><span class="itemTicketText">Герцюк Ігор</span></v-col
            >
          </v-row>
          <v-row no-gutters align="center">
            <v-col cols="6" class="py-0">
              <span class="itemTicketTitle">Номер телефону:</span></v-col
            >
            <v-col cols="6" class="py-0"
              ><span class="itemTicketText">38(098)-654-77-40</span></v-col
            >
          </v-row>
          <v-row no-gutters align="center">
            <v-col cols="6" class="py-0"
              ><span class="itemTicketTitle">Кількість місць:</span></v-col
            >
            <v-col cols="6" class="py-0"
              ><span class="itemTicketText">2 місця (1 дитячий)</span></v-col
            >
          </v-row>
          <v-row no-gutters align="center">
            <v-col cols="6" class="py-0"
              ><span class="itemTicketTitle">Місце:</span></v-col
            >
            <v-col cols="6" class="py-0"
              ><span class="itemTicketText">01, 02</span></v-col
            >
          </v-row>
        </v-col>
      </v-row>
      <v-card-actions class="pt-2">
        <v-row
          style="position: absolute; right: 0; bottom: 0px"
          no-gutters
          align="center"
          justify="end"
        >
          <v-btn
            style="
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.1em;
              color: #243949;
            "
            @click="showQrCodeModal = true"
            text
            ><img src="@/assets/img/qrCodeIcon.svg" class="mr-1" /><span
              >E-tickets</span
            >
          </v-btn>
          <v-btn
            text
            style="
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.1em;
              color: #960909;
            "
            @click="showConfirmModal = true"
            >Скасувати бронювання</v-btn
          >
          <v-btn
            text
            style="
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.1em;
              color: #085895;
            "
            @click="showTicketDetail = !showTicketDetail"
            >Деталі<v-icon v-if="!showTicketDetail">mdi-chevron-down</v-icon
            ><v-icon v-else>mdi-chevron-up</v-icon></v-btn
          >
        </v-row>
      </v-card-actions>
    </v-card>
    <v-expand-transition>
      <ticket-card-detail v-show="showTicketDetail" class="mb-3"/>
    </v-expand-transition>
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
import ticketCardDetail from "./ticketCardDetail.vue";
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
</style>