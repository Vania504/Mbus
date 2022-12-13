<template>
  <v-dialog v-model="visibility" width="600px">
    <v-card>
      <v-col style="text-align: center; padding: 15px;">
        <img
          src="@/assets/img/bookingTicketIcon/timeIcon.svg"
          alt="time icon"
        />
        <p class="title">Час відведений на бронювання, сплинув.</p>
        <p class="text px-10">
          Квитки було видалено з вашого кошика, оскільки 15 хвилин, відведені на
          бронювання, сплинули.
        </p>
        <br />
        <v-row no-gutters justify="center" align="center">
          <v-btn
            width="186px"
            height="35px"
            color="#164B78"
            style="border-radius: 5px"
            class="white--text"
            @click="$router.push('/tickets')"
            >Повторити пошук</v-btn
          >
          <v-btn
            width="127px"
            height="35px"
            color="#085895"
            style="border-radius: 5px; margin-left: 20px;"
            class="white--text"
            @click="$router.push('/')"
          >На головну
          </v-btn>
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