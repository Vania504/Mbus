<template>
  <div>
    <div class="tableHeader">
      <v-row align="center" no-gutters>
        <v-col cols="4">
          <p class="textStyle">
            Час відправлення і прибуття з<v-row align="center" justify="center" no-gutters><span style="color: #efc148"
                v-if="isUkraine">України</span>
              <span v-else style="color: #efc148">Інша країна</span>
              <v-icon color="#EFC148" small class="ml-1 pointer" @click="isUkraine = !isUkraine">mdi-sync mdi-rotate-135
              </v-icon>
            </v-row>
          </p>
        </v-col>
        <v-col cols="8">
          <p class="textStyle">Місце зупинки/відправлення</p>
        </v-col>
      </v-row>
    </div>
    <div style="border-bottom: 1px solid #a7b8c6" v-for="item in shedule" :key="item.time">
      <!-- Output shedule item for Ukraine -->
      <v-row no-gutters justify="center" class="pt-3 pb-3 pointer"
        v-if="isUkraine && item.is_reverse == '0' && !isEditItem" v-on:keyup.enter="isEditItem = false"
        @dblclick="editItem(item.id)">
        <v-col cols="3" class="ml-7">
          <span>{{ item.time }}</span>
        </v-col>
        <v-col cols="8">
          <span>{{ item.city }}</span>
        </v-col>
      </v-row>
      <!-- /Output shedule item for Ukraine -->
      <!-- Edit item field for Ukraine -->
      <v-row justify="center" class="mt-3" v-on:keyup.enter="isEditItem ? isEditItem = false : addNewItemInShedule"
        v-else-if="isUkraine && item.is_reverse == '0' && isEditItem && item.id == editItemId"
        v-click-outside="clickOutside">
        <v-col cols="3" class="ml-7">
          <v-text-field class="rounded-lg" dense outlined placeholder="Введіть годину" v-mask="'##:##'"
            v-model="item.time" :error-messages="timeError" />
        </v-col>
        <v-col cols="8">
          <v-text-field class="ml-15 rounded-lg" dense outlined placeholder="Введіть місце.." v-model="item.city"
            :error-messages="cityError" />
        </v-col>
      </v-row>
      <!-- /Edit item field for Ukraine -->
      <!-- Output shedule item for other country -->
      <v-row no-gutters justify="center" class="pt-3 pb-3"
        v-else-if="!isUkraine && item.is_reverse == '1' && !isEditItem" @dblclick="editItem(item.id)">
        <v-col cols="3" class="ml-7">
          <span>{{ item.time }}</span>
        </v-col>
        <v-col cols="8">
          <span>{{ item.city }}</span>
        </v-col>
      </v-row>
      <!-- /Output shedule item for other country -->
      <!-- Edit item field for Ukraine -->
      <v-row justify="center" class="mt-3" v-on:keyup.enter="isEditItem ? isEditItem = false : addNewItemInShedule"
        v-else-if="!isUkraine && item.is_reverse == '1' && isEditItem && item.id == editItemId"
        v-click-outside="clickOutside">
        <v-col cols="3" class="ml-7">
          <v-text-field class="rounded-lg" dense outlined placeholder="Введіть годину" v-mask="'##:##'"
            v-model="item.time" :error-messages="timeError" />
        </v-col>
        <v-col cols="8">
          <v-text-field class="ml-15 rounded-lg" dense outlined placeholder="Введіть місце.." v-model="item.city"
            :error-messages="cityError" />
        </v-col>
      </v-row>
      <!-- /Edit item field for Ukraine -->
    </div>


    <v-row justify="center" class="mt-3" v-on:keyup.enter="addNewItemInShedule">
      <v-col cols="3" class="ml-7">
        <v-text-field class="rounded-lg" dense outlined placeholder="Введіть годину" v-mask="'##:##'"
          v-model="sheduleItem.time" :error-messages="timeError" />
      </v-col>
      <v-col cols="8">
        <v-text-field class="ml-15 rounded-lg" dense outlined placeholder="Введіть місце.." v-model="sheduleItem.city"
          :error-messages="cityError" />
      </v-col>
    </v-row>
    <v-btn icon class="mt-2">
      <v-icon large color="#243949" @click="addNewItemInShedule">mdi-plus-circle</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { minLength, required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    isUkraine: true,
    isEditItem: false,
    editItemId: null,
    shedule: [],
    sheduleItem: {},
  }),
  props: {
    sheduleDetail: {
      require: false,
    },
    isEdit: {
      require: true,
    },
  },
  validations: {
    sheduleItem: {
      time: {
        required,
        minLength: minLength(5)
      },
      city: {
        required,
      },
    },
  },
  mounted() {
    if (this.isEdit) {
      this.shedule = this.sheduleDetail;
    }
  },
  methods: {
    addNewItemInShedule() {
      let id = 0;
      id++;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.shedule.push({
          id: id,
          time: this.sheduleItem.time,
          city: this.sheduleItem.city,
          is_reverse: this.isUkraine ? "0" : "1",
        });
        this.sheduleItem = {};
        this.$v.$reset();
        this.$emit("shedule", this.shedule);
      }
    },
    editItem(id) {
      this.editItemId = id;
      this.isEditItem = true;
    },
    clickOutside() {
      this.isEditItem = false;
    }
  },
  computed: {
    timeError() {
      const errors = [];
      if (!this.$v.sheduleItem.time.$dirty) {
        return errors;
      } else if (!this.$v.sheduleItem.time.required) {
        errors.push("Поле час обов'язкове");
      }
      if (!this.$v.sheduleItem.time.minLength) {
        errors.push("Введено некоректний час");
      }
      return errors;
    },
    cityError() {
      const errors = [];
      if (!this.$v.sheduleItem.city.$dirty) {
        return errors;
      }
      !this.$v.sheduleItem.city.required &&
        errors.push("Поле місто обов'язкове");
      return errors;
    },
  },
};
</script>

<style scoped>
.tableHeader {
  width: 100%;
  height: 80px;
  background-color: #243949;
  text-align: center;
  padding-top: 20px;
  padding-left: 20px;
}

.textStyle {
  font-size: 16px;
  color: white;
}
</style>