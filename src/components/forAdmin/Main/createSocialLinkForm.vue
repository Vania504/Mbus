<template>
  <v-card class="rounded-lg">
    <v-col style="text-align: left">
      <p class="formTitle mb-10">Посилання на соціальні мережі:</p>
      <v-row
        align="center"
        v-for="(item, index) in socialLink"
        :key="index"
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
          @click="updateSocialLink(item.id, index)"
          >mdi-check</v-icon
        >
        <img
          v-if="showDeleteIcon"
          class="mb-7 pointer"
          width="20px"
          heigth="20px"
          src="@/assets/img/messageIcon/deleteIcon.svg"
        />
      </v-row>
      <v-row no-gutters justify="start" align="center" class="mt-2">
        <v-btn
          class="formAddNewSpan"
          text
          style="text-transform: none"
          @click="addNewLink"
        >
          <v-icon color="#085895">mdi-plus</v-icon>
          <span class="formAddNewSpan">Додати посилання</span></v-btn
        >
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    showEditIcon: false,
    showDeleteIcon: false,
    socialLink: [
      {
        name: "",
        url: "",
        social_network: "",
      },
    ],
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
    list: {
      require: true,
    },
  },
  methods: {
    addNewLink() {
      let form = new FormData();
      form.append("type", "socials");
      form.append("key", this.socialLink[this.socialLink.length - 1].name);
      form.append("value", this.socialLink[this.socialLink.length - 1].url);
      form.append(
        "social_network",
        this.socialLink[this.socialLink.length - 1].social_network
      );
      this.$emit("create", "socials", form);
      this.socialLink.push({
        name: "",
        url: "",
        social_network: "",
      });
    },
    updateSocialLink(id, index) {
      let form = new FormData();
      form.append("type", "socials");
      form.append("key", this.socialLink[index].name);
      form.append("value", this.socialLink[index].url);
      form.append("social_network", this.socialLink[index].social_network);
      this.$emit("update", "socials", id, form);
      this.showEditIcon = false;
    },
    setSocialLink() {
      this.socialLink = [];
      this.list.forEach((item) => {
        this.socialLink.push({
          id: item.id,
          name: item.key,
          url: item.value,
          social_network: item.social_network,
        });
      });
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        this.setSocialLink();
      },
    },
  },
};
</script>

<style>
</style>