<template>
  <div style="overflow-x: hidden">
    <main-search-routes />
    <about-us v-if="!$vuetify.breakpoint.xs" />
    <about-us-mobile v-else />
    <our-routes />
    <irregular-transportation-mobile v-if="$vuetify.breakpoint.xs" :content="irregularTransportationContent"/>
    <main-irregular-transportation v-else :content="irregularTransportationContent"/>
    <about-us-description :content="aboutUsContent"/>
    <main-contact />
  </div>
</template>

<script>
import mainSearchRoutes from "./mainSearchRoutes.vue";
import aboutUs from "./aboutUs.vue";
import aboutUsMobile from "./mainMobile/aboutUsMobile.vue";
import mainIrregularTransportation from "./mainIrregularTransportation.vue";
import irregularTransportationMobile from "./mainMobile/irregularTransportationMobile.vue";
import ourRoutes from "@/components/forUser/Main/ourRoutes";
import aboutUsDescription from "./aboutUsDescription.vue";
import mainContact from "./mainContact.vue";
import contentService from "@/requests/admin/contentService";
export default {
  name: "mainComponent",
  components: {
    mainSearchRoutes,
    aboutUs,
    aboutUsMobile,
    mainIrregularTransportation,
    irregularTransportationMobile,
    ourRoutes,
    aboutUsDescription,
    mainContact,
  },
  data: () => ({
    aboutUsContent: [],
    irregularTransportationContent: [],
  }),
  mounted() {
    this.getContent();
  },
  methods: {
    async getContent() {
      let response = await contentService.getContents();
      response.data.forEach((content) => {
        content.section == "irregular_transportation"
          ? this.irregularTransportationContent.push(content)
          : content.section == "about_us" ? this.aboutUsContent.push(content) : '';
      });
    },
  },
};
</script>

<style>
</style>