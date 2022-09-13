<template>
  <v-row
    align="center"
    @mouseover="showDeleteIcon = true"
    @mouseleave="showDeleteIcon = false"
    @change="showEditIcon = true"
  >
    <v-col cols="3" class="py-0">
      <v-text-field
        color="#085895"
        class="rounded-lg"
        dense
        outlined
        label="Назва посилання (обов'язково)"
        v-model="item.name"
      />
    </v-col>
    <v-col cols="4" class="py-0">
      <v-text-field
        color="#085895"
        class="rounded-lg"
        dense
        outlined
        label="URL-адреса (обов'язково)"
        v-model="item.url"
        type="url"
      />
    </v-col>
    <v-col cols="2" class="py-0">
      <v-autocomplete
        color="#085895"
        class="rounded-lg"
        dense
        outlined
        :items="Object.values(socialNetworks)"
        :item-text="'title'"
        :item-value="'key'"
        label="Соціальна мережа (обов'язково)"
        v-model="item.social_network"
      >
        <template slot="item" slot-scope="{ item }">
          <span style="text-align: left">{{ item.title }}</span>
        </template>
      </v-autocomplete>
    </v-col>
    <v-icon
      v-if="showEditIcon"
      color="green"
      class="mb-7 mr-2 pointer"
      @click="saveSocialLink(item.id)"
      >mdi-check</v-icon
    >
    <img
      v-if="showDeleteIcon"
      class="mb-7 pointer"
      width="20px"
      heigth="20px"
      src="@/assets/img/messageIcon/deleteIcon.svg"
      @click="$emit('delete', 'socials', item.id)"
    />
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    showDeleteIcon: false,
    showEditIcon: false,
    item: {},
    socialNetworks: [
      {
        id: 1,
        title: "Вайбер",
        key: "Viber",
      },
      {
        id: 2,
        title: "Телеграм",
        key: "Telegram",
      },
      {
        id: 3,
        title: "Ватсап",
        key: "Whatsapp",
      },
      {
        id: 4,
        title: "Фейсбук",
        key: "Facebook",
      },
      {
        id: 5,
        title: "Інстаграм",
        key: "Instagram",
      },
      {
        id: 6,
        title: "Твіттер",
        key: "Twitter",
      },
    ],
  }),
  props: {
    social: {
      require: true,
    },
  },
  validations: {
    item: {
      name: {
        required,
      },
      url: {
        required,
      },
      social_network: {
        required,
      },
    },
  },
  mounted() {
    this.item = this.social;
  },
  methods: {
    saveSocialLink(id) {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.item.status
          ? this.$emit("create", this.item)
          : this.$emit("update", id, this.item);
          this.showEditIcon = false;
      }
    },
  },
  watch: {
    social: {
      deep: true,
      handler() {
        this.item = this.social;
      },
    },
  },
};
</script>

<style>
</style>