<template>
<div>
    <main-search-routes />
    <about-us />
    <our-routes />
    <about-us-description />
    <contact-form />
</div>
</template>

<script>
import mainSearchRoutes from './mainSearchRoutes.vue';
import aboutUs from './aboutUs.vue';
import ourRoutes from '@/components/Main/ourRoutes'
import aboutUsDescription from './aboutUsDescription.vue';
import contactForm from './contactForm.vue';
export default {
    name: 'mainComponent',
    components: {
        mainSearchRoutes,
        aboutUs,
        ourRoutes,
        aboutUsDescription,
        contactForm
    }
};
</script>

<style>
</style>