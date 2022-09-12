<template>
  <v-card class="rounded-lg">
    <v-col style="text-align: left">
      <p class="formTitle mb-10">Посилання на соціальні мережі:</p>
      <social-link-field
        v-for="(item, index) in socialLink"
        :key="index"
        :social="item"
        @create="createSocialLink"
        @update="updateSocialLink"
        @delete="deleteSocialLink"
      />
      <v-row no-gutters justify="start" align="center" class="mt-2">
        <v-btn
          class="formAddNewSpan"
          text
          style="text-transform: none"
          @click="addNewField"
        >
          <v-icon color="#085895">mdi-plus</v-icon>
          <span class="formAddNewSpan">Додати посилання</span></v-btn
        >
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
import socialLinkField from "@/components/forAdmin/Main/socialLinkField";
export default {
  components: {
    socialLinkField,
  },
  data: () => ({
    socialLink: [
      {
        name: "",
        url: "",
        social_network: "",
        status: "new",
      },
    ],
  }),
  props: {
    list: {
      require: true,
    },
  },
  methods: {
    addNewField() {
      this.socialLink.push({
        name: "",
        url: "",
        social_network: "",
        status: "new",
      });
    },
    createSocialLink(item) {
      let form = new FormData();
      form.append("type", "socials");
      form.append("key", item.name);
      form.append("value", item.url);
      form.append("social_network", item.social_network);
      this.$emit("create", "socials", form);
    },
    updateSocialLink(id, item) {
      let form = new FormData();
      form.append("type", "socials");
      form.append("key", item.name);
      form.append("value", item.url);
      form.append("social_network", item.social_network);
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
    deleteSocialLink(type, id) {
      this.$emit("delete", type, id);
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