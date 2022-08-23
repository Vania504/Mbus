<template>
<div>
    <main-search-routes />
    <about-us />
    <our-routes />
     <main-irregular-transportation />
    <about-us-description />
    <main-contact />
</div>
</template>

<script>
import mainSearchRoutes from './mainSearchRoutes.vue';
import aboutUs from './aboutUs.vue';
import mainIrregularTransportation from './mainIrregularTransportation.vue';
import ourRoutes from '@/components/Main/ourRoutes'
import aboutUsDescription from './aboutUsDescription.vue';
import mainContact from './mainContact.vue';
export default {
    name: 'mainComponent',
    components: {
        mainSearchRoutes,
        aboutUs,
        mainIrregularTransportation,
        ourRoutes,
        aboutUsDescription,
        mainContact
    }
};
</script>

<style>
</style>