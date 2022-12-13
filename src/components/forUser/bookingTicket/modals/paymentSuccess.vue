<template>
  <v-dialog v-model="visibility" width="307">
    <v-card>
      <v-col style="text-align: center; padding: 30px 30px 50px 30px">
        <img src="@/assets/img/bookingTicketIcon/successPay.svg" />
        <p class="title">Оплата Успішна</p>
        <p class="text">Квиток відправлено на Email</p>
        <br />
        <v-row no-gutters align="center" justify="center">
          <v-btn
            width="248px"
            height="40px"
            color="#164B78"
            style="border-radius: 5px"
            class="white--text"
            @click="$router.push('/')"
            >Повернутися на головну</v-btn
          >
        </v-row>
      </v-col>
    </v-card>
  </v-dialog>
</template>
  
  <script>
export default {
  props: {
    visible: {
      require: true,
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
    },
  },
};
</script>
  
  <style>
.title {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #122b3e;
}
.text {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #243949;
}
</style>