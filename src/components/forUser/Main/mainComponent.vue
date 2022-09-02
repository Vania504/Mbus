<template>
<div style="overflow-x: hidden;">
    <main-search-routes />
    <about-us v-if="!$vuetify.breakpoint.xs" />
    <about-us-mobile v-else/>
    <our-routes />
    <irregular-transportation-mobile v-if="$vuetify.breakpoint.xs"/>
     <main-irregular-transportation v-else/>
    <about-us-description />
    <main-contact />
</div>
</template>

<script>
import mainSearchRoutes from './mainSearchRoutes.vue';
import aboutUs from './aboutUs.vue';
import aboutUsMobile from './mainMobile/aboutUsMobile.vue';
import mainIrregularTransportation from './mainIrregularTransportation.vue';
import irregularTransportationMobile from './mainMobile/irregularTransportationMobile.vue';
import ourRoutes from '@/components/forUser/Main/ourRoutes'
import aboutUsDescription from './aboutUsDescription.vue';
import mainContact from './mainContact.vue';
export default {
    name: 'mainComponent',
    components: {
        mainSearchRoutes,
        aboutUs,
        aboutUsMobile,
        mainIrregularTransportation,
        irregularTransportationMobile,
        ourRoutes,
        aboutUsDescription,
        mainContact
    }
};
</script>

<style>
</style>