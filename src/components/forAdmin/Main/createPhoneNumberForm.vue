<template>
  <v-card class="rounded-lg">
    <v-col style="text-align: left">
      <p class="formTitle mb-10">Номер телефону водіїв:</p>
      <phone-numbers-field
        v-for="(item, index) in phoneNumbers"
        :key="index"
        :phone_number="item"
        @update="updatePhoneNumber"
        @create="addNewPhoneNumber"
        @delete="deleteSetting"
      />
      <v-row no-gutters justify="start" align="center" class="mt-2">
        <v-btn
          class="formAddNewSpan"
          text
          style="text-transform: none"
          @click="addNewField"
          ><v-icon color="#085895">mdi-plus</v-icon>
          <span class="formAddNewSpan">Додати номер</span></v-btn
        >
      </v-row>
    </v-col>
  </v-card>
</template>
  
  <script>
import phoneNumbersField from "./phoneNumbersField.vue";
export default {
  components: {
    phoneNumbersField,
  },
  data: () => ({
    showEditIcon: false,
    showDeleteIcon: false,
    phoneNumbers: [
      {
        name: "",
        phone_number: "",
        status: "new",
      },
    ],
  }),
  props: {
    list: {
      require: false,
    },
  },
  methods: {
    addNewField() {
      this.phoneNumbers.push({
        name: "",
        phone_number: "",
        status: "new",
      });
    },
    addNewPhoneNumber(phone_number) {
      let form = new FormData();
      form.append("type", "contact");
      form.append("key", phone_number.name);
      form.append("value", phone_number.phone_number);
      this.$emit("create", "contact", form);
    },
    async updatePhoneNumber(id, phone_number) {
      let form = new FormData();
      console.log("phone number", phone_number);
      form.append("type", "contact");
      form.append("key", phone_number.name);
      form.append("value", phone_number.phone_number);
      this.$emit("update", "contact", id, form);
    },
    setPhoneNumbers() {
      this.phoneNumbers = [];
      this.list.forEach((item) => {
        this.phoneNumbers.push({
          id: item.id,
          name: item.key,
          phone_number: item.value,
        });
      });
    },
    deleteSetting(type, id){
      this.$emit('delete', type, id)
    }
  },
  watch: {
    list: {
      deep: true,
      handler() {
        this.setPhoneNumbers();
      },
    },
  },
};
</script>
  
  <style>
</style>