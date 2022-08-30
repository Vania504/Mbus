<template>
  <v-col class="mt-10 mb-10">
    <v-row :justify="forAdmin ? 'start' : 'center'">
      <bus-card
        v-for="i in 9"
        :key="i"
        @detailInfo="visible = true"
        @edit="$emit('edit')"
        @delete="$emit('delete')"
        :forAdmin="forAdmin"
      />
      <card-add-new title="Додати автобус" width="350px" height="350px" v-if="forAdmin" @addNew="$emit('addNew')"/>
    </v-row>
    <bus-detail-dialog :visible="visible" @close="visible = false" />
  </v-col>
</template>

<script>
import busCard from "./busCard.vue";
import busDetailDialog from "@/components/forUser/ourFleet/busDetailDialog";
import cardAddNew from "@/components/UI/cardAddNew";
export default {
  components: {
    busCard,
    busDetailDialog,
    cardAddNew,
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