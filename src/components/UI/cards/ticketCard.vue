<template>
  <div :style="isAdmin ? 'width: 100%; padding-right: 15px;' : 'width: 95%'">
    <v-row no-gutters justify="start" align="start">
      <div
        style="text-align: left; padding-bottom: 10px; padding-top: 10px"
        :style="isAdmin ? 'width: 100%' : 'width: 95%'"
      >
        <v-row no-gutters align="start">
          <div style="text-align: right; width: 130px">
            <output
              style="
                font-weight: 400;
                font-size: 10px;
                line-height: 12px;
                letter-spacing: 0.1em;
                color: #4c5d6c;
                padding-right: 5px;
              "
              >пн. 14 лист.<span
                style="
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 16px;
                  letter-spacing: 0.1em;
                  color: #243949;
                "
                >10:30</span
              ></output
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
            <output
              style="
                font-weight: 400;
                font-size: 10px;
                line-height: 12px;
                letter-spacing: 0.1em;
                color: #4c5d6c;
                padding-right: 5px;
              "
              >пн. 14 лист.<span
                style="
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 16px;
                  letter-spacing: 0.1em;
                  color: #243949;
                "
                >10:30</span
              ></output
            >
          </div>
          <div style="width: 15px">
            <img
              height="62px"
              style="margin-top: 8px"
              src="@/assets/img/routeLine.svg"
            />
          </div>
          <v-col :cols="isAdmin ? '5' : '7'" class="px-0 py-0">
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
            <br /><br />
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
          <v-row
            no-gutters
            justify="end"
            class="py-0"
            style="margin-top: 10px"
            :style="isAdmin ? '' : 'position: absolute; right: 15px'"
          >
            <v-col cols="12" style="text-align: right">
              <p class="textStyleInBtn" style="color: #4c5d6c" v-if="isAdmin">
                Дійсний до: 14 листопада(Пн), 10:30
              </p>
              <!-- Price ticket -->
              <p class="textStyleInBtn" style="color: #4c5d6c">
                Ціна:
                <span
                  style="
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.1em;
                    color: #085895;
                  "
                  >2 695 грн</span
                >
              </p>
            </v-col>
          </v-row>
        </v-row>
        <div :style="isAdmin ? '' : 'margin-bottom: 25px'">
          <span
            style="
              text-decoration-line: underline;
              color: #6b7c8a;
              margin-left: 14px;
            "
            class="pointer textStyleInBtn"
          >
            Переглянути маршрут
          </span>
        </div>
      </div>
    </v-row>
    <v-row
      no-gutters
      justify="start"
      align="center"
      :style="
        isAdmin
          ? 'padding-left: 15px;'
          : 'position: absolute; bottom: 0px; width: 100%;padding-left: 15px;'
      "
    >
      <v-row no-gutters align="center">
        <span class="textStyleInBtn" style="color: #243949">
          Автобус: &nbsp;
        </span>
        <img
          width="12px"
          height="12px;"
          src="@/assets/img/busServiceIcon/busIcon.png"
          style="margin-right: 5px"
        />
        <span class="textStyleInBtn" style="color: #085895"
          >Setra S 417 GT-HD</span
        >
      </v-row>
      <v-row
        no-gutters
        align="center"
        justify="end"
        style="margin-left: 60px"
        class="px-0"
      >
        <v-btn
          text
          v-if="isAdmin && status == 'Active'"
          class="textStyleInBtn"
          style="color: #960909; text-transform: none; font-size: 12px"
          @click="showConfirmModal = true"
        >
          Скасувати маршрут
        </v-btn>
        <v-btn
          text
          v-if="isAdmin && status == 'Inactive'"
          class="textStyleInBtn"
          style="color: #960909; text-transform: none; font-size: 12px"
          @click="showConfirmModalDelete = true"
        >
          Видалити маршрут
        </v-btn>
        <v-btn
          text
          class="textStyleInBtn"
          style="color: #085895; text-transform: none"
          dense
          width="80px"
          :style="isAdmin ? 'font-size: 12px;' : 'margin-right: 30px; '"
          @click="
            (showTicketDetail = !showTicketDetail), $emit('setShowTicketDetail')
          "
          >Деталі
          <v-icon v-if="!showTicketDetail && !isAdmin">mdi-chevron-down</v-icon>
          <v-icon v-else-if="showTicketDetail && !isAdmin"
            >mdi-chevron-up</v-icon
          ></v-btn
        >
      </v-row>
    </v-row>
    <confirm-modal
      v-if="showConfirmModal"
      :visible="showConfirmModal"
      modalTitle="Скасувати маршрут"
      modalSubtitle="Квиток маршруту буде перенесено у неактивні"
      @confirm="cancelRoute"
      @close="showConfirmModal = false"
    />
    <confirm-modal
      v-if="showConfirmModalDelete"
      :visible="showConfirmModalDelete"
      modalTitle="Видалити маршрут"
      modalSubtitle="Квиток маршруту буде видалено остаточно"
      @confirm="deleteRoute"
      @close="showConfirmModal = false"
    />
    <success-modal
      v-if="successDeleteTicket"
      :visible="successDeleteTicket"
      :deleted="true"
      modalTitle="Квиток маршруту видалено"
      @close="successDeleteTicket = false"
    />
  </div>
</template>

<script>
import confirmModal from "../modals/confirmModal.vue";
import SuccessModal from "../modals/successModal.vue";
export default {
  components: { confirmModal, SuccessModal },
  data: () => ({
    status: "Inactive",
    showTicketDetail: false,
    showConfirmModal: false,
    showConfirmModalDelete: false,
    successDeleteTicket: false,
  }),
  props: {
    isAdmin: {
      require: false,
    },
  },
  methods: {
    cancelRoute() {
      this.showConfirmModal = false;
    },
    deleteRoute() {
      this.showConfirmModalDelete = false;
      this.successDeleteTicket = true;
    },
  },
};
</script>

<style>
.textStyleInBtn {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
}
</style>