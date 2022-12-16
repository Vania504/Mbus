<template>
  <v-col>
    <p class="titleLabel">Ваше бронювання</p>
    <v-row no-gutters justify="center">
      <v-card class="bookingDetailForm">
        <div style="padding: 15px 15px 0px 15px">
          <v-row align="center" no-gutters>
            <span class="dateStyle" style="color: #243949">пн. 14 лист.</span>
            <img
              style="margin-left: 5px; margin-right: 5px"
              src="@/assets/img/arrowLong.svg"
            />
            <span class="dateStyle" style="color: #4c5d6c">вт. 15 лист.</span>
          </v-row>
          <!-- TIMELINE -->
          <v-row no-gutters align="center">
            <v-col cols="2" class="py-0" style="text-align: right">
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
              >
            </v-col>
            <v-col cols="1" class="px-3 py-0">
              <img src="@/assets/img/routeLine.svg" />
            </v-col>
            <v-col cols="8" class="px-0 ml-2 mt-5">
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
              <br />
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
          <!-- TIMELINE -->
          <v-row no-gutters align="center" style="margin-top: 15px">
            <span class="peopleTypeStyle">1 дорослий</span>
            <v-spacer />
            <span class="priceStyle">2500 грн</span>
          </v-row>
          <v-row
            no-gutters
            align="center"
            style="margin-top: 10px; margin-bottom: 10px"
          >
            <span class="peopleTypeStyle">1 дитячий</span>
            <v-spacer />
            <span class="priceStyle">2500 грн</span>
          </v-row>
        </div>
        <v-row no-gutters justify="center">
          <img src="@/assets/img/dottedLineHorizontal.svg" />
        </v-row>
        <v-card-actions>
          <v-col class="py-0 px-0">
            <v-row no-gutters align="center" style="padding: 10px 8px 0px 8px">
              <span
                style="
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 16px;
                  letter-spacing: 0.1em;
                  color: #122b3e;
                "
                >Усього</span
              >
              <v-row no-gutters justify="end">
                <span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                  >5000 грн</span
                >
              </v-row>
            </v-row>
            <v-row no-gutters justify="center" align="end">
              <v-checkbox color="#085895" v-model="aggre" />
              <v-col cols="10" class="px-0 py-0 mb-1">
                <span
                  style="
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 14px;
                    letter-spacing: 0.1em;
                    color: #50616e;
                  "
                  >Я підтверджую, що ознайомився(-лася)
                  <span style="text-decoration-line: underline; color: #085895"
                    >Умовами та правилами перевезення.</span
                  ></span
                >
              </v-col>
            </v-row>
            <br />
            <v-row no-gutters justify="center" style="padding-bottom: 36px">
              <v-btn
                width="308px"
                height="36px"
                :disabled="!aggre"
                color="#085895"
                class="white--text"
                @click="$emit('payTicket')"
                >Оплатити</v-btn
              >
            </v-row>
          </v-col>
        </v-card-actions>
      </v-card>
      <session-time-card
        style="margin-top: 25px"
        v-if="!$vuetify.breakpoint.xs"
      />
    </v-row>
    <booking-time-expired
      v-if="showTimeExpiredModal"
      :visible="showTimeExpiredModal"
      @close="showTimeExpiredModal = false"
    />
  </v-col>
</template>

<script>
import bookingTimeExpired from "./modals/bookingTimeExpired.vue";
import sessionTimeCard from "@/components/UI/cards/sessionTimeCard.vue";
export default {
  components: {
    bookingTimeExpired,
    sessionTimeCard,
  },
  data: () => ({
    startDate: "",
    aggre: false,
    showTimeExpiredModal: false,
  }),
};
</script>

<style>
.bookingDetailForm {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
  border-radius: 1px 1px 10px 10px;
  width: 338px;
}
.titleLabel {
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #ffffff;
}
.theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn-outlined) {
  color: white !important;
  background: #6b7c8a !important;
}
.dateStyle {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
}
.peopleTypeStyle {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #4c5d6c;
}
.priceStyle {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #243949;
}
</style>