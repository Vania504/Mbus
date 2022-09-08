<template>
  <div>
    <bus-list
      :forAdmin="true"
      @addNew="showModal = true"
      @edit="getBus"
      @delete="deleteBus"
      :busList="busList"
    />
    <add-new-bus-modal
      v-if="showModal"
      :visible="showModal"
      :isEdit="isEdit"
      :detailInfoBus="detailInfoBus"
      @close="(showModal = false), (isEdit = false)"
      @createBus="createBus"
      @updateBus="updateBus"
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
    detailInfoBus: {},
    busList: [],
  }),
  mounted() {
    this.getBuses();
  },
  methods: {
    async createBus(bus) {
      let response = await ourFleetService.createBus(bus);
      if (response.status == "success") {
        this.showModal = false;
        this.getBuses();
      }
    },
    async updateBus(id, bus) {
      alert(id);
      let response = await ourFleetService.updateBus(id, bus);
      if (response.status == "success") {
        this.showModal = false;
        this.isEdit = false;
        this.getBuses();
      }
    },
    async getBus(id) {
      let response = await ourFleetService.getBus(id);
      if (response.status == "success") {
        this.detailInfoBus = response.data;
        this.showModal = true;
        this.isEdit = true;
      }
    },
    async getBuses() {
      let response = await ourFleetService.getBusesForAdmin();
      if (response.status == "success") {
        this.busList = response.data;
      }
    },
    async deleteBus(uuid) {
      await ourFleetService.deleteBus(uuid);
      alert("Function deleteBus work success");
    },
  },
};
</script>

<style>
</style>