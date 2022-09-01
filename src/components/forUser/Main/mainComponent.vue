<template>
<div style="overflow-x: hidden;">
    <main-search-routes />
    <about-us v-if="!$vuetify.breakpoint.xs" />
    <about-us-mobile v-else/>
    <our-routes />
     <main-irregular-transportation />
    <about-us-description />
    <main-contact />
</div>
</template>

<script>
import mainSearchRoutes from './mainSearchRoutes.vue';
import aboutUs from './aboutUs.vue';
import aboutUsMobile from './aboutUsMobile.vue';
import mainIrregularTransportation from './mainIrregularTransportation.vue';
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
        ourRoutes,
        aboutUsDescription,
        mainContact
    }
};
</script>

<style>
</style>