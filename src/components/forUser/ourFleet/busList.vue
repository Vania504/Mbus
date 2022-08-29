<template>
  <v-col class="mt-10">
    <v-row justify="center">
        <bus-card v-for="i in 9" :key="i" @detailInfo="visible = true"/>
    </v-row>
    <bus-detail-dialog :visible="visible" @close="visible = false"/>
  </v-col>
</template>

<script>
import busCard from './busCard.vue';
import busDetailDialog from '@/components/ourFleet/busDetailDialog'
export default {
    components: {
        busCard,
        busDetailDialog
    },
    data: () => ({
        visible: false,
    })
}
</script>

<style>

</style>