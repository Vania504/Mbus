<template>
  <div>
    <routes-list
      :routes="[{ id: 1 }]"
      :forAdmin="true"
      @addNew="showModal = true"
      @edit="(showModal = true), (isEdit = true)"
      @delete="deleteRoute"
    />
    <add-new-routes-modal
      v-if="showModal"
      :visible="showModal"
      :isEdit="isEdit"
      @close="(showModal = false), (isEdit = false)"
    />
  </div>
</template>

<script>
import routesList from "@/components/forUser/Routes/routesList.vue";
import addNewRoutesModal from "@/components/forAdmin/Routes/addNewRoutesModal";
export default {
  components: {
    routesList,
    addNewRoutesModal,
  },
  data: () => ({
    showModal: false,
    isEdit: false,
  }),
  methods: {
    deleteRoute() {
      alert('Function deleteRoute work success')
    },
  },
};
</script>

<style>
</style>