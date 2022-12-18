<template>
  <div style="min-height: 100vh">
    <v-row no-gutters v-if="!$vuetify.breakpoint.xs">
      <v-col cols="4">
        <filters-list />
      </v-col>
      <v-col cols="8" style="text-align: left">
        <v-row no-gutters justify="center" v-if="tickets.length == 0">
          <p
            style="
              font-weight: 500;
              font-size: 20px;
              line-height: 23px;
              letter-spacing: 0.1em;
              color: #243949;
              padding-top: 20px;
            "
          >
            На заданий Вами день квитків
            <span style="color: #085895">не знайдено</span>
          </p></v-row
        >
        <div v-else>
          <p class="ticketTitle">Знайдено 3 квитка:</p>
          <ticket-search-card v-for="i in 3" :key="i" :ticket="i" />
        </div>
        <p class="ticketTitle">Квитки на інші дні:</p>
        <ticket-search-card v-for="i in quantityTicket" :key="i" :ticket="i" />
        <v-row no-gutters justify="center">
          <v-btn
            style="
              background: #085895;
              border-radius: 15px;
              text-transform: none;
              color: white;
            "
            @click="quantityTicket += 4"
            >Завантажити ще</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
    <v-col v-else>
      <v-col class="px-0" cols="12" style="text-align: left">
        <v-row no-gutters justify="center" v-if="tickets.length == 0">
          <p
            style="
              font-weight: 500;
              font-size: 20px;
              line-height: 23px;
              letter-spacing: 0.1em;
              color: #243949;
              padding-top: 20px;
              text-align: center;
            "
          >
            На заданий Вами день квитків
            <span style="color: #085895">не знайдено</span>
          </p></v-row
        >
        <div v-else>
          <p class="ticketTitle">Знайдено 3 квитка:</p>
          <ticket-search-card v-for="i in 3" :key="i" :ticket="i" />
        </div>
        <p class="ticketTitle">Квитки на інші дні:</p>
        <ticket-search-card v-for="i in quantityTicket" :key="i" :ticket="i" />
        <v-row no-gutters justify="center">
          <v-btn
            style="
              background: #085895;
              border-radius: 15px;
              text-transform: none;
              color: white;
            "
            @click="quantityTicket += 4"
            >Завантажити ще</v-btn
          >
        </v-row>
      </v-col>
    </v-col>
  </div>
</template>

<script>
import ticketSearchCard from "@/components/forUser/ticketSearch/ticketSearchCard";
import filtersList from "./filtersList.vue";
export default {
  components: { filtersList, ticketSearchCard },
  data: () => ({
    quantityTicket: 4,
    tickets: [],
  }),
  props: {
    filtersListArray: {
      require: false,
    },
  },
  watch: {
    filtersListArray: {
      deep: true,
      handler() {
        console.log("work", this.filtersListArray);
      },
    },
  },
};
</script>

<style>
.ticketTitle {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.1em;
  color: #243949;
  margin-top: 20px;
}
</style>