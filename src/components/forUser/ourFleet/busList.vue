<template>
  <v-col class="mt-10 mb-10">
    <v-row no-gutters :justify="forAdmin ? 'start' : 'center'">
      <div v-if="$vuetify.breakpoint.xs && $vuetify.breakpoint.sm"></div>
      <bus-card-mobile
        v-else-if="$vuetify.breakpoint.xs"
        v-for="i in 9"
        :key="i"
        @detailInfo="visible = true"
        @edit="$emit('edit', i)"
        @delete="$emit('delete', i)"
        :forAdmin="forAdmin"
      />
      <bus-card
        v-else
        v-for="index in 9"
        :key="index"
        @detailInfo="visible = true"
        @edit="$emit('edit', i)"
        @delete="$emit('delete', i)"
        :forAdmin="forAdmin"
      />
      <card-add-new
        title="Додати автобус"
        width="350px"
        height="350px"
        v-if="forAdmin"
        @addNew="$emit('addNew')"
      />
    </v-row>
    <bus-detail-dialog-mobile
      v-if="$vuetify.breakpoint.xs"
      :visible="visible"
      @close="visible = false"
    />
    <bus-detail-dialog v-else :visible="visible" @close="visible = false" />
  </v-col>
</template>

<script>
import busCard from "./busCard.vue";
import busDetailDialog from "@/components/forUser/ourFleet/busDetailDialog";
import cardAddNew from "@/components/UI/cardAddNew";
import busCardMobile from "./ourFleetMobile/busCardMobile.vue";
import busDetailDialogMobile from "@/components/forUser/ourFleet/ourFleetMobile/busDetailDialogMobile";
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
  }),
  props: {
    forAdmin: {
      require: false,
    },
  },
};
</script>

<style>
</style>