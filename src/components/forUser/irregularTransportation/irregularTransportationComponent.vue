<template>
  <div>
    <p class="mainTitle mt-5">Нерегулярні перевезення</p>
    <irregular-transportation-description />
    <irregular-transportation-advantage />
    <irregular-transportation-rent-form />
  </div>
</template>

<script>
import irregularTransportationDescription from './irregularTransportationDescription.vue';
import irregularTransportationAdvantage from './irregularTransportationAdvantage.vue';
import irregularTransportationRentForm from './irregularTransportationRentForm.vue';
export default {
    components: {
        irregularTransportationDescription,
        irregularTransportationAdvantage,
        irregularTransportationRentForm,
    }
}
</script>

<style>

</style>