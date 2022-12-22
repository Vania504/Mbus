<template>
  <v-dialog v-model="visibility" width="400px">
    <v-card style="padding-top: 30px; padding-bottom: 30px">
      <v-row no-gutters justify="center">
        <v-col cols="10" style="text-align: center">
          <p
            style="
              font-weight: 500;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.1em;
              color: #122b3e;
            "
          >
            {{ modalTitle }}
          </p>
          <p
            style="
              font-weight: 500;
              font-size: 14px;
              line-height: 16px;
              text-align: center;
              letter-spacing: 0.1em;

              color: #243949;
            "
          >
            {{ modalSubtitle }}
          </p>
          <v-col v-if="refund" class="px-0 py-0" style="text-align: left">
            <span
              style="
                font-weight: 500;
                font-size: 10px;
                line-height: 15px;
                letter-spacing: 0.1em;
                color: #243949;
              "
              >Умови повернення коштів</span
            >
            <p
              style="
                font-weight: 400;
                font-size: 10px;
                line-height: 15px;
                letter-spacing: 0.1em;
                color: #4c5d6c;
              "
              v-html="modalText"
            ></p>
          </v-col>

          <p
            v-else
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              text-align: center;
              letter-spacing: 0.1em;
              color: #243949;
              margin-bottom: 30px;
            "
          >
            {{ modalText }}
          </p>
          <v-btn
            color="#960909"
            style="
              background: radial-gradient(
                2654.82% 540.28% at 54.66% 50%,
                #960909 0%,
                rgba(150, 9, 9, 0.078125) 99.99%,
                rgba(150, 9, 9, 0.71) 100%
              );
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
              border-radius: 30px;
              text-transform: none;
            "
            width="247px"
            height="46px"
            class="white--text"
            @click="$emit('confirm')"
          >
            Підтвердити
          </v-btn>
          <v-btn
            text
            color="#085895"
            style="
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: 0.1em;
              text-transform: none;
              margin-top: 20px;
            "
            @click="$emit('close')"
            width="247px"
          >
            Скасувати
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import modalMixin from "@/mixins/modalMixin";
export default {
  mixins: [modalMixin],
  props: {
    modalText: {
      require: true,
    },
    modalTitle: {
      require: false,
    },
    modalSubtitle: {
      require: true,
    },
    refund: {
      require: true,
    },
  },
};
</script>

<style>
</style>