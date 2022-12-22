<template>
  <v-main>
    <v-container>
      <v-dialog v-model="visibility" width="100%">
        <v-card width="100%" class="rounded-lg">
          <v-row no-gutters align="center" style="padding: 20px">
            <v-icon
              class="pointer"
              @click="closeModal"
              small
              color="#243949"
              style="margin-right: 15px"
              >mdi-arrow-left</v-icon
            >
            <span class="peopleTypeStyle">Кількість пасажирів</span>
          </v-row>
          <v-row
            no-gutters
            align="center"
            justify="center"
            style="margin-bottom: 15px"
          >
            <v-icon color="#085895" style="margin-right: 15px"
              >mdi-account-outline</v-icon
            >
            <span
              style="
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.1em;
                color: #6b7c8a;
              "
              >{{ quantityAdult + quantityKid }}</span
            >
          </v-row>
          <v-divider style="border: 1px solid rgba(173, 197, 217, 0.4)" />
          <div style="padding: 20px 50px 30px 50px">
            <v-row no-gutters align="center" justify="center">
              <v-col cols="6" style="text-align: left"
                ><span class="peopleTypeStyle">Дорослий:</span></v-col
              >
              <v-icon
                :color="quantityAdult == 0 ? '' : '#085895'"
                @click="
                  quantityAdult > 0 ? quantityAdult-- : (quantityAdult = 0)
                "
                >mdi-minus-circle-outline</v-icon
              >
              <output
                style="margin-left: 15px; margin-right: 15px"
                class="peopleTypeStyle"
                >{{ quantityAdult }}</output
              >
              <v-icon color="#085895" @click="quantityAdult++"
                >mdi-plus-circle-outline</v-icon
              >
            </v-row>
            <v-row no-gutters align="center" justify="center" class="mt-5">
              <v-col cols="6" style="text-align: left"
                ><span class="peopleTypeStyle">Дитячий:</span></v-col
              >
              <v-icon
                :color="quantityKid == 0 ? '' : '#085895'"
                @click="quantityKid > 0 ? quantityKid-- : (quantityKid = 0)"
                >mdi-minus-circle-outline</v-icon
              >
              <output
                style="margin-left: 15px; margin-right: 15px"
                class="peopleTypeStyle"
                >{{ quantityKid }}</output
              >
              <v-icon color="#085895" @click="quantityKid++"
                >mdi-plus-circle-outline</v-icon
              >
            </v-row>
          </div>
        </v-card>
      </v-dialog>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    quantityAdult: 0,
    quantityKid: 0,
  }),
  props: {
    visible: {
      require: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close", this.quantityAdult + this.quantityKid);
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.closeModal();
      },
    },
  },
};
</script>

<style>
</style>