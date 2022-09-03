<template>
  <v-col class="mt-10 mb-10">
    <v-row :justify="forAdmin ? 'start' : 'center'">
      <div v-if="$vuetify.breakpoint.xs">
        <bus-card-mobile
        v-for="i in 9"
        :key="i"
        @detailInfo="visible = true"
        @edit="$emit('edit', i)"
        @delete="$emit('delete', i)"
        :forAdmin="forAdmin"
      />
      </div>
      <div v-else>
        <bus-card
        v-for="i in 9"
        :key="i"
        @detailInfo="visible = true"
        @edit="$emit('edit', i)"
        @delete="$emit('delete', i)"
        :forAdmin="forAdmin"
      />
      </div>
      <card-add-new
        title="Додати автобус"
        width="350px"
        height="350px"
        v-if="forAdmin"
        @addNew="$emit('addNew')"
      />
    </v-row>
    <bus-detail-dialog :visible="visible" @close="visible = false" />
  </v-col>
</template>

<script>
import busCard from "./busCard.vue";
import busDetailDialog from "@/components/forUser/ourFleet/busDetailDialog";
import cardAddNew from "@/components/UI/cardAddNew";
import busCardMobile from "./busCardMobile.vue";
export default {
  components: {
    busCard,
    busDetailDialog,
    cardAddNew,
    busCardMobile,
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