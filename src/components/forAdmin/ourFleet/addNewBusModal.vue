<template>
  <v-dialog v-model="visibility" width="725px" persistent>
    <v-card style="overflow-x: hidden">
      <modal-header
        :title="isEdit ? 'Редагувати автобус' : 'Новий автобус'"
        @close="closeModal"
        :showCloseIcon="true"
      />
      <v-col style="margin: 20px">
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="2">
            <p class="itemTitle">Назва моделі</p>
          </v-col>
          <v-col cols="6" class="ml-2">
            <v-text-field
              class="rounded-lg"
              outlined
              dense
              placeholder="Введіть модель.."
              v-model="bus.model_name"
              color="#085895"
              :error-messages="modelNameError"
              @blur="$v.bus.model_name.$touch()"
            />
          </v-col>
        </v-row>
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="2">
            <p class="itemTitle" style="margin-top: 2px !important">Опис</p>
          </v-col>
          <v-col cols="6" class="ml-2">
            <v-textarea
              class="rounded-lg"
              outlined
              dense
              placeholder="Введіть текст.."
              v-model="bus.description"
              color="#085895"
              :error-messages="descriptionError"
              @blur="$v.bus.description.$touch()"
            />
          </v-col>
        </v-row>
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="2"><p class="itemTitle">Кількість місць</p></v-col>
          <v-col cols="1" class="px-2">
            <v-text-field
              class="rounded-lg centered-input"
              outlined
              dense
              placeholder="0"
              v-model="bus.quantity_seats"
              color="#085895"
              @keypress="isNumber($event)"
              inputmode="numeric"
              :error-messages="quantitySeatsError"
              @blur="$v.bus.quantity_seats.$touch()"
            />
          </v-col>
        </v-row>
        <v-row align="start" justify="start" no-gutters>
          <v-col cols="2">
            <p class="itemTitle">Статус:</p>
          </v-col>
          <v-col cols="3" class="px-2">
            <v-autocomplete
              class="rounded-lg"
              outlined
              dense
              :items="Object.values(busStatus)"
              :item-text="'text'"
              :item-value="'value'"
              v-model="bus.status"
              color="#085895"
            />
          </v-col>
        </v-row>
        <v-col class="px-0">
          <p class="itemTitle">Сервіс:</p>
          <v-col cols="12">
            <v-row align="center">
              <v-row
                v-for="item in service"
                :key="item.id"
                align="center"
                class="mr-5"
                no-gutters
              >
                <img
                  width="20px"
                  height="20px"
                  class="mr-1"
                  :src="require(`@/assets/img/busServiceIcon${item.img}`)"
                  style="text-align: left"
                /><span
                  style="font-size: 16px; color: #243949; text-align: left"
                  >{{ item.title }}</span
                >
                <v-checkbox
                  class="ml-2"
                  v-model="item.enters"
                  color="#243949"
                />
              </v-row>
            </v-row>
          </v-col>
        </v-col>
        <v-col class="px-0">
          <p class="itemTitle">Фотографії автобуса:</p>
          <v-row no-gutters>
            <small-item-image
              v-for="img in busImages"
              :key="img.id"
              :img="img"
              @delete="deleteImg"
            />
            <img
              src="@/assets/img/addImageIcon.svg"
              class="pointer"
              @click="showRecentlyImage = true"
            />
            <input type="file" ref="upload_img" style="display: none" />
          </v-row>
        </v-col>
      </v-col>
      <v-card-actions>
        <v-row justify="center" no-gutters class="mb-5">
          <v-btn
            v-if="isEdit"
            width="124px"
            height="39px"
            color="#085895"
            class="white--text"
            @click="editBus"
            >Редагувати</v-btn
          >
          <v-btn
            v-else
            width="124px"
            height="39px"
            color="#085895"
            class="white--text"
            @click="addNewBus"
            >Додати</v-btn
          >
        </v-row>
      </v-card-actions>
    </v-card>
    <RecentlyAddImageModal
      v-if="showRecentlyImage"
      :visible="showRecentlyImage"
      @close="showRecentlyImage = false"
      @choseImage="setImages"
      type="Bus"
    />
  </v-dialog>
</template>

<script>
import modalHeader from "@/components/UI/modalHeader";
import recentlyAddImageModal from "@/components/UI/recentlyAddImageModal";
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import RecentlyAddImageModal from "@/components/UI/recentlyAddImageModal.vue";
import requestFormData from "@/requests/requestFormData";
import smallItemImage from "@/components/UI/smallItemImage";
export default {
  mixins: [validationMixin],
  components: {
    modalHeader,
    recentlyAddImageModal,
    RecentlyAddImageModal,
    smallItemImage,
  },
  data: () => ({
    bus: {
      status: "Active",
    },
    service: [
      {
        id: 1,
        img: "/toiletIcon.svg",
        title: "Туалет",
        key: "toilet",
        enters: false,
      },
      {
        id: 2,
        img: "/coffeIcon.svg",
        title: "Харчування",
        key: "supply",
        enters: false,
      },
      {
        id: 3,
        img: "/electricOutletIcon.svg",
        title: "Розетки",
        key: "socket",
        enters: false,
      },
      {
        id: 4,
        img: "/coldIcon.svg",
        title: "Клімат контроль",
        key: "climate",
        enters: true,
      },
      {
        id: 5,
        img: "/wifiIcon.svg",
        title: "Wi-Fi",
        key: "wifi",
        enters: false,
      },
      {
        id: 6,
        img: "/seriesIcon.svg",
        title: "Перегляд TV",
        key: "tv",
        enters: false,
      },
      {
        id: 7,
        img: "/vipIcon.svg",
        title: "VIP",
        key: "vip",
        enters: false,
      },
      {
        id: 8,
        img: "/euro5Icon.svg",
        title: "Екологічність",
        key: "ecology",
        enters: false,
      },
    ],
    busImages: [],
    showRecentlyImage: false,
    busStatus: [
      {
        text: "Активний",
        value: "Active",
      },
      {
        text: "Архівований",
        value: "Archive",
      },
    ],
  }),
  validations: {
    bus: {
      model_name: {
        required,
      },
      description: {
        required,
        minLength: minLength(50),
      },
      quantity_seats: {
        required,
        maxLength: maxLength(2),
      },
    },
  },
  props: {
    visible: {
      require: true,
    },
    isEdit: {
      require: true,
    },
    detailInfoBus: {
      require: false,
    },
  },
  mounted() {
    this.setBus();
  },
  methods: {
    addNewBus() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let images = [];
        let options = [];
        this.busImages.forEach((image) => {
          images.push(image.id);
        });
        this.service.forEach((service) => {
          service.enters == false
            ? (options[`${service.key}`] = 0)
            : (options[`${service.key}`] = 1);
        });
        let data = {
          status: this.bus.status,
          model: this.bus.model_name,
          description: this.bus.description,
          seats: this.bus.quantity_seats,
          images: images,
          options: options,
        };
        let form = requestFormData.jsonToFormData(data);
        this.$emit("createBus", form);
      }
    },
    editBus() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let images = [];
        let options = [];
        this.busImages.forEach((image) => {
          images.push(image.id);
        });
        this.service.forEach((service) => {
          service.enters == false
            ? (options[`${service.key}`] = 0)
            : (options[`${service.key}`] = 1);
        });
        let data = {
          status: this.bus.status,
          model: this.bus.model_name,
          description: this.bus.description,
          seats: this.bus.quantity_seats,
          images: images,
          options: options,
        };
        let form = requestFormData.jsonToFormData(data);
        this.$emit("updateBus", this.bus.id, form);
      }
    },
    setBus() {
      if (this.detailInfoBus.options) {
        this.service.forEach((service) => {
          this.detailInfoBus.options[service.key] == 0
            ? (service.enters = false)
            : (service.enters = true);
        });
      }
      this.$set(this.bus, "id", this.detailInfoBus.id);
      this.$set(this.bus, "model_name", this.detailInfoBus.model);
      this.$set(this.bus, "description", this.detailInfoBus.description);
      this.$set(this.bus, "quantity_seats", this.detailInfoBus.seats);
      this.$set(this.bus, "status", this.detailInfoBus.status);
      if (this.detailInfoBus.images) {
        this.detailInfoBus.images.forEach((image) => {
          this.busImages.push(image.images);
        });
      }
    },
    setImages(image) {
      this.showRecentlyImage = false;
      this.busImages.push(image);
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      console.log(charCode);
      if (charCode > 31 && charCode >= 48 && charCode <= 57) {
        return true;
      } else {
        evt.preventDefault();
      }
    },
    closeModal() {
      let close = confirm(
        "Ви дійсно хочете закрити модальне вікно, внесені зміни не буде збережено?"
      );
      close ? this.$emit("close") : "";
    },
    deleteImg(id){
      this.busImages = this.busImages.filter((image) => image.id !== id);
    }
  },
  watch: {
    'bus.quantity_seats': {
      deep: true,
      handler(){
        console.log("quantity seats",this.bus.quantity_seats)
        if(this.bus.quantity_seats < 1 && this.bus.quantity_seats !== ''){
          this.bus.quantity_seats = 1;
        }
      }
    }
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
    },
    modelNameError() {
      const errors = [];
      if (!this.$v.bus.model_name.$dirty) {
        return errors;
      }
      !this.$v.bus.model_name.required &&
        errors.push("Поле назва моделі обов'язкове");
      return errors;
    },
    descriptionError() {
      const errors = [];
      if (!this.$v.bus.description.$dirty) {
        return errors;
      } else if (!this.$v.bus.description.required) {
        errors.push("Поле опис обов'язкове");
      }
      if (!this.$v.bus.description.minLength) {
        errors.push("Введіть більше тексту");
      }
      return errors;
    },
    quantitySeatsError() {
      const errors = [];
      if (!this.$v.bus.quantity_seats.$dirty) {
        return errors;
      } else if (!this.$v.bus.quantity_seats.required) {
        errors.push("");
      }
      if (!this.$v.bus.quantity_seats.maxLength) {
        errors.push("");
      }
      return errors;
    },
  },
};
</script>

<style scoped>
.itemTitle {
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  color: #243949;
  margin-top: 7px;
}
.centered-input >>> input {
  text-align: center;
}
</style>