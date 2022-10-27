<template>
  <v-col>
    <v-row no-gutters :justify="forAdmin ? 'start' : 'center'" class="mb-10">
      <div v-if="!routes" style="margin-top: 10%; margin-bottom: 10%">
        <span style="font-size: 32px"
          >За вказаним маршрутом нічого не знайдено!</span
        >
      </div>
      <routes-card-mobile
        v-else-if="$vuetify.breakpoint.xs"
        v-for="(route,index) in routes.data"
        :key="index"
        class="mt-5 mb-5"
        :forAdmin="forAdmin"
        :route="route"
        @edit="$emit('edit', route.id)"
        @delete="$emit('delete', route.id)"
      />
      <routes-card
        v-else
        v-for="route in routes.data"
        :key="route.id"
        class="mt-5 mb-5"
        :forAdmin="forAdmin"
        :route="route"
        @edit="$emit('edit', route.id)"
        @delete="$emit('delete', route.id)"
      />    
      <card-add-new
        title="Новий маршрут"
        width="330px"
        height="328px"
        class="mt-5 mx-5"
        @addNew="$emit('addNew')"
        v-if="forAdmin"
      />
    </v-row>
  </v-col>
</template>

<script>
import routesCard from "./routesCard.vue";
import routesCardMobile from '@/components/forUser/Routes/routesMobile/routesCardMobile';
import cardAddNew from "@/components/UI/cardAddNew.vue";
export default {
  components: {
    routesCard,
    routesCardMobile,
    cardAddNew,
  },
  props: {
    routes: {
      require: true,
    },
    forAdmin: {
      require: true,
    },
  },
};
</script>

<style>
</style>