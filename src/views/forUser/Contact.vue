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
      window.scrollTo(0,0)
    }
}
</script>

<style>

</style>