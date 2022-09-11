<template>
  <v-card class="rounded-lg">
    <v-col style="text-align: left">
      <p class="formTitle mb-10">Номер телефону водіїв:</p>
      <v-row align="center" v-for="(item, index) in phoneNumbers" :key="index">
        <v-col cols="3" class="py-0">
          <v-text-field
            color="#085895"
            class="rounded-lg"
            dense
            outlined
            label="Ім'я (обов'язково)"
            v-model="item.name"
          />
        </v-col>
        <v-col cols="4" class="py-0">
          <v-text-field
            color="#085895"
            class="rounded-lg"
            dense
            outlined
            label="Номер телефону (обов'язково)"
            v-model="item.phone_number"
          />
        </v-col>
      </v-row>
      <v-row no-gutters justify="start" align="center" class="mt-2">
        <v-icon color="#085895">mdi-plus</v-icon>
        <span class="formAddNewSpan" @click="addNewPhoneNumber"
          >Додати номер</span
        >
        <v-btn
          :disabled="disabledSaveBtn"
          class="ml-5 formAddNewSpan"
          text
          style="text-transform: none"
          @click="saveChange"
          ><v-icon color="green">mdi-check</v-icon>
          <span :style="disabledSaveBtn ? 'color: silver' : 'color: green'"
            >Зберегти</span
          ></v-btn
        >
      </v-row>
    </v-col>
  </v-card>
</template>
  
  <script>
export default {
  data: () => ({
    disabledSaveBtn: true,
    phoneNumbers: [
      {
        name: "",
        phone_number: "",
      },
    ],
  }),
  props: {
    list: {
      require: false,
    }
  },
  methods: {
    addNewPhoneNumber() {
      let form = new FormData();
      form.append("type", "contact");
      form.append("key", this.phoneNumbers[this.phoneNumbers.length - 1].name);
      form.append("value", this.phoneNumbers[this.phoneNumbers.length - 1].phone_number);
      this.$emit("create", "contact", form);
      this.phoneNumbers.push({
        name: "",
        phone_number: "",
      });
    },
    saveChange() {
      console.log("work");
    },
    setPhoneNumbers(){
      this.phoneNumbers = [];
      this.list.forEach((item) => {
        this.phoneNumbers.push({id: item.id, name: item.key, phone_number: item.value})
      })
    }
  },
  watch: {
    phoneNumbers: {
      deep: true,
      handler() {
        this.disabledSaveBtn = false;
      },
    },
    list: {
      deep: true,
      handler(){
        this.setPhoneNumbers();
      }
    }
  },
};
</script>
  
  <style>
</style>