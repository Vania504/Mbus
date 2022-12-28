<template>
  <div>
    <div
      :style="
        isAdmin
          ? 'width: 100%; padding-right: 15px;'
          : $vuetify.breakpoint.xs
          ? 'width: 100%;'
          : 'width: 95%;'
      "
    >
      <v-row no-gutters justify="start" align="start">
        <div
          style="text-align: left; padding-bottom: 10px; padding-top: 10px"
          :style="
            isAdmin || $vuetify.breakpoint.xs ? 'width: 100%' : 'width: 95%;'
          "
        >
          <v-row
            no-gutters
            :align="$vuetify.breakpoint.xs ? 'center' : 'start'"
          >
            <div
              style="text-align: right"
              :style="$vuetify.breakpoint.xs ? 'width: 80px' : 'width: 130px'"
            >
              <output
                style="
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 12px;
                  letter-spacing: 0.1em;
                  color: #4c5d6c;
                  padding-right: 5px;
                "
                >{{
                  new Date(
                    trip.departure_date.substr(0, 10)
                  ).toLocaleDateString("uk-UA", {
                    month: "short",
                    day: "numeric",
                    weekday: "short",
                  })
                }}</output
              >
              <br v-if="$vuetify.breakpoint.xs" />
              <span
                style="
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 16px;
                  letter-spacing: 0.1em;
                  color: #243949;
                "
                >{{
                  new Date(trip.departure_date).toLocaleTimeString("uk-UA", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                }}&nbsp;</span
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
                v-if="$vuetify.breakpoint.xs"
                style="
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 16px;
                  letter-spacing: 0.1em;
                  color: #243949;
                "
                >{{
                  new Date(trip.arrival_date).toLocaleTimeString("uk-UA", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                }}</span
              >
              <br v-if="$vuetify.breakpoint.xs" />
              <output
                style="
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 12px;
                  letter-spacing: 0.1em;
                  color: #4c5d6c;
                  padding-right: 5px;
                "
                >{{
                  new Date(trip.arrival_date.substr(0, 10)).toLocaleDateString(
                    "uk-UA",
                    {
                      month: "short",
                      day: "numeric",
                      weekday: "short",
                    }
                  )
                }}<span
                  v-if="!$vuetify.breakpoint.xs"
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
            <div
              style="width: 15px"
              :class="$vuetify.breakpoint.xs ? 'mx-2' : ''"
            >
              <img
                height="62px"
                style="margin-top: 8px"
                src="@/assets/img/routeLine.svg"
              />
            </div>
            <v-col
              cols="6"
              :xl="isAdmin ? '5' : '7'"
              :lg="isAdmin ? '5' : '7'"
              :md="isAdmin ? '5' : '7'"
              class="px-0 py-0"
            >
              <div
                :style="
                  $vuetify.breakpoint.xs
                    ? 'width: 125%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 20px; margin-top: 17px;'
                    : ''
                "
              >
                <span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                >
                  {{ trip.route.departure }}
                  <!-- <span
                  style="
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 12px;
                    letter-spacing: 0.1em;
                    color: #4c5d6c;
                  "
                  >Dworzec Autobusowy, pl. Grodnicki 1(platf.1)</span
                > -->
                </span>
              </div>
              <br v-if="!$vuetify.breakpoint.xs && !isAdmin" /><br
                v-if="!$vuetify.breakpoint.xs"
              />
              <div
                :style="
                  $vuetify.breakpoint.xs
                    ? 'width: 125%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 20px;'
                    : ''
                "
              >
                <span
                  style="
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.1em;
                    color: #243949;
                  "
                >
                  {{ trip.route.destination }}
                  <!-- <span
                  style="
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 12px;
                    letter-spacing: 0.1em;
                    color: #4c5d6c;
                  "
                  >Dworzec Autobusowy, pl. Grodnicki 1(platf.1)</span
                > -->
                </span>
              </div>
            </v-col>
            <v-row
              no-gutters
              justify="end"
              class="py-0"
              style="margin-top: 10px; border-bottom-right-radius: 10px"
              :style="isAdmin ? '' : 'position: absolute; right: 15px'"
              v-if="!$vuetify.breakpoint.xs"
            >
              <v-col
                cols="12"
                xl="12"
                lg="12"
                md="12"
                sm="10"
                style="text-align: right"
              >
                <p
                  class="textStyleInBtn"
                  style="color: #4c5d6c"
                  v-if="isAdmin && trip.status == 'Active'"
                >
                  Дійсний до:
                  {{
                    new Date(
                      trip.departure_date.substr(0, 10)
                    ).toLocaleDateString("uk-UA", {
                      month: "short",
                      day: "numeric",
                    })
                  }}({{
                    new Date(
                      trip.departure_date.substr(0, 10)
                    ).toLocaleDateString("uk-UA", {
                      weekday: "short",
                    })
                  }}),
                  {{
                    new Date(trip.departure_date).toLocaleTimeString("uk-UA", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  }}
                </p>
                <p
                  style="
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.1em;
                    color: #4c5d6c;
                  "
                  v-if="isAdmin && trip.status == 'Canceled'"
                >
                  Неактивний
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
                    >{{ trip.price_adult }} грн</span
                  >
                </p>
              </v-col>
            </v-row>
          </v-row>
          <div
            :style="isAdmin ? '' : 'margin-bottom: 25px'"
            v-if="!$vuetify.breakpoint.xs"
          >
            <span
              style="
                text-decoration-line: underline;
                color: #6b7c8a;
                margin-left: 14px;
              "
              class="pointer textStyleInBtn"
              @click="$router.push(`/routes/${trip.route.id}`)"
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
        class="px-0"
        :style="
          isAdmin
            ? 'margin-left: 15px;width: 100%;'
            : $vuetify.breakpoint.xs
            ? 'width: 100%; padding-left: 15px;'
            : 'position: absolute; bottom: 0px; width: 100%; margin-left: 15px;'
        "
      >
        <v-row no-gutters align="center" v-if="!$vuetify.breakpoint.xs">
          <span class="textStyleInBtn" style="color: #243949">
            Автобус: &nbsp;
          </span>
          <img
            width="12px"
            height="12px;"
            src="@/assets/img/busServiceIcon/busIcon.png"
            style="margin-right: 5px"
          />
          <span class="textStyleInBtn" style="color: #085895">{{
            trip.bus.model
          }}</span>
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
            v-if="isAdmin && trip.status == 'Active'"
            class="textStyleInBtn"
            style="color: #960909; text-transform: none; font-size: 12px"
            @click="showConfirmModal = true"
          >
            Скасувати маршрут
          </v-btn>
          <v-btn
            text
            v-if="isAdmin && trip.status == 'Canceled'"
            class="textStyleInBtn"
            style="color: #960909; text-transform: none; font-size: 12px"
            @click="(showConfirmModalDelete = true), (tripId = 1)"
          >
            Видалити маршрут
          </v-btn>
          <v-btn
            text
            class="textStyleInBtn"
            style="color: #085895; text-transform: none"
            dense
            width="80px"
            :style="
              isAdmin
                ? 'font-size: 12px;'
                : $vuetify.breakpoint.xs
                ? 'margin-right: 5px;'
                : 'margin-right: 50px;'
            "
            @click="
              (showTicketDetail = !showTicketDetail),
                $emit('setShowTicketDetail')
            "
            >Деталі
            <v-icon v-if="!showTicketDetail && !isAdmin"
              >mdi-chevron-down</v-icon
            >
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
    </div>
    <v-expand-transition>
      <ticket-card-detail v-show="showTicketDetail" class="mb-3" />
    </v-expand-transition>
  </div>
</template>

<script>
import confirmModal from "../modals/confirmModal.vue";
import ticketCardDetail from "@/components/forUser/myTicket/ticketCardDetail.vue";
export default {
  components: { confirmModal, ticketCardDetail },
  data: () => ({
    status: "Inactive",
    showTicketDetail: false,
    showConfirmModal: false,
    showConfirmModalDelete: false,
    tripId: 0,
  }),
  props: {
    isAdmin: {
      require: false,
    },
    trip: {
      require: true,
    },
  },
  methods: {
    cancelRoute() {
      this.showConfirmModal = false;
      this.$emit("cancelTrip", this.trip);
    },
    deleteRoute() {
      this.showConfirmModalDelete = false;
      this.$emit("deleteTrip", this.tripId);
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