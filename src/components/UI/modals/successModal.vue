<template>
  <v-dialog v-model="visibility" width="429px" min-height="80px">
    <div class="successModalBackground">
      <v-card
        style="box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5); border-radius: 10px"
      >
        <v-col style="text-align: center; padding: 30px 30px 0px 30px">
          <p
            :style="deleted ? 'padding-top: 10px' : ''"
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
          <span
            style="
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;
              text-align: center;
              letter-spacing: 0.1em;
              color: #243949;
            "
          >
            {{ modalText }}
          </span>
        </v-col>
        <v-row
          no-gutters
          justify="end"
          :style="deleted ? 'padding-bottom: 10px;' : 'padding-bottom: 30px;'"
          style="padding-right: 10px"
        >
          <v-btn
            text
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.1em;
              color: #085895;
            "
            @click="$emit('close')"
            >ок</v-btn
          >
        </v-row>
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      require: true,
    },
    modalTitle: {
      require: true,
    },
    modalText: {
      require: true,
    },
    deleted: {
      require: false,
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
.successModalBackground {
  background: linear-gradient(268.56deg, #085895 16.3%, #583ba9 86.15%);
  padding: 3px;
  border-radius: 10px;
}
</style>