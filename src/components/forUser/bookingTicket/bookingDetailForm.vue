<template>
  <v-col>
    <p class="titleLabel">Ваше бронювання</p>
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
    <v-card class="sesionTimeCard">
      <v-row no-gutters align="center" justify="center">
        <v-progress-circular
          size="24"
          indeterminate
          color="#085895"
          style="margin-right: 5px"
        />
        <span
          style="
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.1em;
            color: #000000;
          "
          >Час Вашої сесії сплине через
          <span
            v-if="
              minutes == 0 ||
              minutes == 1 ||
              minutes == 2 ||
              minutes == 3 ||
              minutes == 4 ||
              minutes == 5 ||
              minutes == 6 ||
              minutes == 7 ||
              minutes == 8 ||
              minutes == 9
            "
            >0</span
          >{{ minutes }}:<span
            v-if="
              seconds == 0 ||
              seconds == 1 ||
              seconds == 2 ||
              seconds == 3 ||
              seconds == 4 ||
              seconds == 5 ||
              seconds == 6 ||
              seconds == 7 ||
              seconds == 8 ||
              seconds == 9
            "
            >0</span
          >{{ seconds }} хв.</span
        >
      </v-row>
    </v-card>
    <booking-time-expired
      v-if="showTimeExpiredModal"
      :visible="showTimeExpiredModal"
      @close="showTimeExpiredModal = false"
    />
  </v-col>
</template>

<script>
import bookingTimeExpired from "./modals/bookingTimeExpired.vue";
export default {
  components: {
    bookingTimeExpired,
  },
  data: () => ({
    minutes: 15,
    seconds: 0,
    startDate: "",
    aggre: false,
    showTimeExpiredModal: false,
  }),
  mounted() {
    this.startDate = new Date();
    setInterval(this.setTime, 1000);
  },
  methods: {
    setTime() {
      if (this.seconds == 0) {
        if (this.minutes !== 0) {
          this.minutes--;
          this.seconds = 60;
        } else {
          this.showTimeExpiredModal = true;
        }
      } else {
        this.seconds--;
      }
    },
  },
  destroyed() {
    localStorage.setItem("minutes", this.minutes);
  },
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
.sesionTimeCard {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  width: 338px;
  height: 44px;
  margin-top: 25px;
  padding: 10px;
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