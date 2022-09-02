<template>
  <div>
    <bus-list
      :forAdmin="true"
      @addNew="showModal = true"
      @edit="(showModal = true), (isEdit = true)"
      @delete="deleteBus"
    />
    <add-new-bus-modal
      v-if="showModal"
      :visible="showModal"
      :isEdit="isEdit"
      @close="(showModal = false), (isEdit = false)"
    />
  </div>
</template>

<script>
import busList from "@/components/forUser/ourFleet/busList.vue";
import addNewBusModal from "@/components/forAdmin/ourFleet/addNewBusModal";
import ourFleetService from "@/requests/admin/ourFleetService";
export default {
  components: {
    busList,
    addNewBusModal,
  },
  data: () => ({
    showModal: false,
    isEdit: false,
  }),
  methods: {

    async deleteBus(uuid) {
      await ourFleetService.deleteBus(uuid)
      alert("Function deleteBus work success");
    },
  },
};
</script>

<style>
</style>