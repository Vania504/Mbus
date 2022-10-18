<template>
  <v-card :height="nameError.length ? '75px' : '60px'" class="rounded-0">
    <v-row no-gutters align="center">
      <v-row
        no-gutters
        justify="start"
        :align="showNewStatusField ? 'start' : 'center'"
        class="ml-5 pointer"
        :class="showNewStatusField ? 'pt-2' : 'pt-4'"
        v-click-outside="clickOutside"
      >
        <div
          v-for="status in statusList"
          :key="status.id"
          :style="showNewStatusField ? 'padding-top: 8px;' : ''"
        >
          <span
            v-if="status.id == activeStatus && !isEdit"
            class="statusStyleActive"
            @dblclick="editStatus(status.id)"
            >{{ status.name }}</span
          >
          <span
            v-else-if="!isEdit"
            class="statusStyle"
            @click="changeStatus(status.id)"
            @dblclick="editStatus(status.id)"
            >{{ status.name }}</span
          >
        </div>
        <v-col cols="3" v-if="showNewStatusField" class="py-0">
          <v-text-field
            dense
            outlined
            class="rounded-lg"
            placeholder="Введіть категорію"
            v-model="status.name"
            v-on:keyup.enter="isEdit ? updateStatus() : newStatus()"
            :error-messages="nameError"
          />
        </v-col>
        <v-icon
          v-if="!isEdit"
          color="#085895"
          :style="
            showNewStatusField ? 'margin-top: 8px; margin-left: 5px;' : ''
          "
          @click="
            {
              !showNewStatusField
                ? (showNewStatusField = true)
                : isEdit
                ? updateStatus()
                : newStatus();
            }
          "
          >mdi-plus-circle-outline</v-icon
        >
        <v-icon
          v-else
          color="#085895"
          :style="
            showNewStatusField ? 'margin-top: 8px; margin-left: 5px;' : ''
          "
          @click="updateStatus"
          >mdi-pencil-outline</v-icon
        >
      </v-row>
      <v-row no-gutters justify="end" align="center" class="ml-5 pt-4 pointer">
        <span class="quantityPageStyle">{{ page }} з {{ quantity_page }}</span>
        <v-icon color="#7B8892" @click="page > 1 ? page-- : ''"
          >mdi-chevron-left</v-icon
        >
        <v-icon color="#243949" @click="page < quantity_page ? page++ : ''"
          >mdi-chevron-right</v-icon
        >
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    status: {},
    showNewStatusField: false,
    activeStatus: "1",
    isEdit: false,
    page: 1,
  }),
  validations: {
    status: {
      name: {
        required,
      },
    },
  },
  props: {
    statusList: {
      require: true,
    },
    getMessage: {
      require: false,
    },
    quantity_page: {
      require: true,
    },
  },
  methods: {
    newStatus() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let status = new FormData();
        status.append("name", this.status.name);
        status.append("type", "message");
        status.append("is_default", this.statusList.length > 0 ? "0" : "1");
        this.$emit("createStatus", status);
        this.showNewStatusField = false;
        this.status = {};
      }
    },
    updateStatus() {
      let status = new FormData();
      status.append("name", this.status.name);
      status.append("type", "message");
      status.append("is_default", this.statusList.length > 0 ? "0" : "1");
      this.$emit("updateStatus", this.status.id, status);
      this.showNewStatusField = false;
      this.isEdit = false;
      this.status = {};
    },
    changeStatus(id) {
      this.activeStatus = id;
      this.$emit("showLoader");
      this.$emit("getMessageForStatus", id);
    },
    editStatus(id) {
      this.isEdit = true;
      this.showNewStatusField = true;
      this.status = {
        ...this.statusList.filter((status) => status.id == id)[0],
      };
    },
    clickOutside() {
      this.isEdit = false;
      this.showNewStatusField = false;
      this.$v.$reset();
    },
  },
  computed: {
    nameError() {
      const errors = [];
      if (!this.$v.status.name.$dirty) {
        return errors;
      }
      !this.$v.status.name.required && errors.push("Поле ім'я обов'язкове");
      return errors;
    },
  },
  watch: {
    getMessage: {
      deep: true,
      handler() {
        if (this.getMessage == true) {
          this.changeStatus(this.activeStatus);
        }
      },
    },
    page: {
      deep: true,
      handler() {
        this.$emit("page", this.page);
      },
    },
  },
};
</script>

<style scoped>
.statusStyle {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #243949;
  margin-right: 30px;
}
.statusStyleActive {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #085895;
  margin-right: 30px;
}
.quantityPageStyle {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #243949;
}
</style>