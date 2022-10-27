<template>
  <v-col class="mt-10 mb-10">
    <v-row no-gutters :justify="forAdmin ? 'start' : 'center'">
      <div v-if="$vuetify.breakpoint.xs && $vuetify.breakpoint.sm"></div>
      <bus-card-mobile
        v-else-if="$vuetify.breakpoint.xs"
        v-for="(bus,index) in busList"
        :key="index"
        :bus="bus"
        @detailInfo="getBus"
        @edit="editBus"
        @delete="$emit('delete', i)"
        :forAdmin="forAdmin"
      />
      <bus-card
        v-else
        v-for="bus in busList"
        :key="bus.id"
        :bus="bus"
        @detailInfo="getBus"
        @edit="editBus"
        @delete="$emit('delete', i)"
        @archived="archivedBus(bus)"
        :forAdmin="forAdmin"
      />
      <card-add-new
        title="Додати автобус"
        width="350px"
        height="403px"
        v-if="forAdmin"
        @addNew="$emit('addNew')"
      />
    </v-row>
    <bus-detail-dialog-mobile
      v-if="$vuetify.breakpoint.xs && visible"
      :visible="visible"
      @close="visible = false"
      :bus="busDetailInfo"
    />
    <bus-detail-dialog
      v-else-if="visible"
      :visible="visible"
      @close="visible = false"
      :bus="busDetailInfo"
    />
  </v-col>
</template>

<script>
import busCard from "./busCard.vue";
import busDetailDialog from "@/components/forUser/ourFleet/busDetailDialog";
import cardAddNew from "@/components/UI/cardAddNew";
import busCardMobile from "./ourFleetMobile/busCardMobile.vue";
import busDetailDialogMobile from "@/components/forUser/ourFleet/ourFleetMobile/busDetailDialogMobile";
import ourFleetService from "@/requests/admin/ourFleetService";
export default {
  components: {
    busCard,
    busDetailDialog,
    cardAddNew,
    busCardMobile,
    busDetailDialogMobile,
  },
  data: () => ({
    visible: false,
    busDetailInfo: {},
  }),
  props: {
    forAdmin: {
      require: false,
    },
    busList: {
      require: true,
    },
  },
  methods: {
    async getBus(id) {
      let response = await ourFleetService.getBus(id);
      if (response.status == "success") {
        this.busDetailInfo = response.data;
        this.visible = true;
      }
    },
    editBus(id){
      this.$emit('edit', id)
    },
    archivedBus(bus){
      this.$emit('archived', bus);
    }
  },
};
</script>

<style>
</style>