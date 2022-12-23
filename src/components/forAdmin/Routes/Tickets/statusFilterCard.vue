<template>
  <v-card
    style="
      padding: 10px;
      text-align: left;
      margin-top: 10px;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    "
    width="340px"
  >
    <p class="titleTicketFilter">Статус</p>
    <v-btn-toggle v-model="status">
      <v-btn
        dense
        height="26px"
        width="80px"
        class="no-background-hover"
        :text="status !== 0"
        style="
          margin-right: 20px;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.1em;
          text-transform: none;
          border-radius: 30px;
        "
        :style="status == 0 ? 'background: #cbe0f0;' : ''"
        @click="$emit('getTripsByStatus', 'Active')"
      >
        Активні
      </v-btn>
      <v-btn
        outlined
        dense
        height="26px"
        width="95px"
        class="no-background-hover"
        style="
          margin-right: 20px;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.1em;
          text-transform: none;  
          border-radius: 30px;
        "
        :style="status == 1 ? 'background: #cbe0f0' : ''"
        @click="$emit('getTripsByStatus', 'Inactive')"
      >
        Неактивні
      </v-btn>
    </v-btn-toggle>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    status: "",
  }),
};
</script>

<style>
</style>