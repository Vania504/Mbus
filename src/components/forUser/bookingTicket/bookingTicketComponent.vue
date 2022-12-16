<template>
  <div style="min-height: 80vh">
    <v-col class="px-0" v-if="$vuetify.breakpoint.xs">
      <v-row no-gutters justify="center">
        <v-col class="px-3">
          <session-time-card />
        </v-col>
      </v-row>
      <order-detail-component
        :touch="touch"
        @setTouch="touch = false"
        @userInputValidUsetData="userInputValidUsetData = true"
        @userInputValidCreditCardData="userInputValidCreditCardData = true"
      />
      <v-row no-gutters justify="center">
        <booking-detail-form @payTicket="payTicket" />
      </v-row>
    </v-col>
    <v-row v-else no-gutters align="start">
      <v-col cols="8" style="text-align: left">
        <v-row no-gutters align="center">
          <v-icon color="white">mdi-chevron-left</v-icon>
          <span
            style="
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.1em;
              color: #ffffff;
            "
            >Назад</span
          ></v-row
        >
        <order-detail-component
          :touch="touch"
          @setTouch="touch = false"
          @userInputValidUsetData="userInputValidUsetData = true"
          @userInputValidCreditCardData="userInputValidCreditCardData = true"
        />
      </v-col>
      <v-col cols="4" style="text-align: left">
        <booking-detail-form @payTicket="payTicket" />
      </v-col>
    </v-row>
    <payment-success
      v-if="showPaymentSuccessModal"
      :visible="showPaymentSuccessModal"
      @close="showPaymentSuccessModal = false"
    />
  </div>
</template>

<script>
import SessionTimeCard from "@/components/UI/cards/sessionTimeCard.vue";
import bookingDetailForm from "./bookingDetailForm.vue";
import PaymentSuccess from "./modals/paymentSuccess.vue";
import OrderDetailComponent from "./orderDetail/orderDetailComponent.vue";
export default {
  components: {
    bookingDetailForm,
    OrderDetailComponent,
    PaymentSuccess,
    SessionTimeCard,
  },
  data: () => ({
    showPaymentSuccessModal: false,
    userInputValidUsetData: false,
    userInputValidCreditCardData: false,
    touch: false,
  }),
  methods: {
    payTicket() {
      console.log(
        "work",
        this.userInputValidUsetData,
        this.userInputValidCreditCardData
      );
      if (this.userInputValidUsetData && this.userInputValidCreditCardData) {
        this.showPaymentSuccessModal = true;
      } else {
        this.touch = true;
      }
    },
  },
};
</script>

<style>
</style>