<template>
  <main-component @success="$emit('success')"/>
</template>

<script>
import mainComponent from '@/components/forAdmin/Main/mainComponent.vue';
export default {
    name: 'mainView',
    components: {
        mainComponent,
    }
}
</script>

<style>

</style>