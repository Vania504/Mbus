<template>
  <div style="background: #122B3E;">
    <v-main>
        <v-container>
            <booking-ticket-component />
        </v-container>
    </v-main>
  </div>
</template>

<script>
import bookingTicketComponent from '@/components/forUser/bookingTicket/bookingTicketComponent.vue';
export default {
    components: {
        bookingTicketComponent
    }
}
</script>

<style>

</style>