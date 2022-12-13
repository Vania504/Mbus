<template>
  <v-card class="userPaymentCard">
    <v-col class="px-0">
      <v-row no-gutters align="center" style="padding: 0px 15px 10px 15px">
        <img
          src="@/assets/img/bookingTicketIcon/walletIcon.svg"
          alt="contact"
          style="margin-right: 10px"
        />
        <span class="cardTitle">Оплата</span>
      </v-row>
      <v-divider style="border: 1px solid rgba(8, 88, 149, 0.53)" />
      <v-radio-group v-model="typePayment" style="padding: 5px 15px 0px 15px">
        <v-radio value="0" color="#085895">
          <template v-slot:label>
            <v-row no-gutters align="center">
              <img
                src="@/assets/img/bookingTicketIcon/debitCardsIcon.svg"
                class="mr-1"
              />
              <span class="typePaymentName"> Банківська карта</span>
            </v-row>
          </template>
        </v-radio>
        <credit-card-form
          v-if="typePayment == '0'"
          :touch="touch"
          @userInputValidCreditCardData="$emit('userInputValidCreditCardData')"
        />
        <v-radio value="1" color="#085895">
          <template v-slot:label>
            <v-row no-gutters align="center">
              <img
                src="@/assets/img/bookingTicketIcon/googlePayLogoIcon.svg"
                class="mr-1"
              />
              <span class="typePaymentName">Google Pay</span>
            </v-row>
          </template>
        </v-radio>
      </v-radio-group>
    </v-col>
  </v-card>
</template>
  
  <script>
import creditCardForm from "./creditCardForm.vue";
export default {
  components: { creditCardForm },
  data: () => ({
    typePayment: "",
  }),
  props: {
    touch: {
      require: false,
    },
  },
  watch: {
    typePayment: {
      deep: true,
      handler() {
        if (this.typePayment == "1") {
          this.$emit("userInputValidCreditCardData");
        }
      },
    },
  },
};
</script>
  
  <style>
.userPaymentCard {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
.typePaymentName {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  margin-left: 10px;
  color: #243949;
}
</style>