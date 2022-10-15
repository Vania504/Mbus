<template>
  <contact-component />
</template>

<script>
import contactComponent from '@/components/forUser/Contact/contactComponent.vue';
export default {
    name: 'contactView',
    components: {
        contactComponent,
    },
    mounted(){
      this.$vuetify.goTo(0);
    }
}
</script>

<style>

</style>