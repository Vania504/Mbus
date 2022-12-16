<template>
  <v-col>
    <your-travel />
    <user-data
      style="margin-top: 20px; margin-bottom: 20px"
      :touch="touch"
      @userInputValidUserData="$emit('userInputValidUsetData')"
    />
    <payment-data
      :touch="touch"
      @setTouch="$emit('setTouch')"
      @userInputValidCreditCardData="$emit('userInputValidCreditCardData')"
    />
  </v-col>
</template>

<script>
import PaymentData from "./payment/paymentData.vue";
import userData from "./userData.vue";
import YourTravel from "./yourTravel.vue";
export default {
  components: { userData, PaymentData, YourTravel },
  props: {
    touch: {
      require: true,
    },
  },
};
</script>

<style>
.cardTitle {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #243949;
}
</style>