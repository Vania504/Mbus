<template>
  <div>
    <div v-if="$vuetify.breakpoint.xs" style="overflow-x: hidden">
      <div
        style="
          height: 172px;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          padding-top: 61px;
        "
        :style="`background-image: linear-gradient(0deg, rgba(18, 43, 62, 0.64), rgba(18, 43, 62, 0.64)), url(${require('@/assets/img/irregularBackgroundBus.png')});`"
      >
        <span class="mobileTitle">Нерегулярні перевезення</span>
      </div>
      <irregular-transportation-description-mobile />
      <irregular-transportation-advantage />
      <irregular-transportation-rent-form />
    </div>
    <div v-else>
      <p class="mainTitle mt-5">Нерегулярні перевезення</p>
      <irregular-transportation-description />
      <irregular-transportation-advantage />
      <irregular-transportation-rent-form />
    </div>
  </div>
</template>

<script>
import irregularTransportationDescription from "./irregularTransportationDescription.vue";
import irregularTransportationAdvantage from "./irregularTransportationAdvantage.vue";
import irregularTransportationRentForm from "./irregularTransportationRentForm.vue";
import irregularTransportationDescriptionMobile from "./irregularTransportationDescriptionMobile.vue";
export default {
  components: {
    irregularTransportationDescription,
    irregularTransportationDescriptionMobile,
    irregularTransportationAdvantage,
    irregularTransportationRentForm,
  },
};
</script>

<style scoped>
.mobileTitle {
  font-family: "SeoulHangang";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-align: center;
}
</style>