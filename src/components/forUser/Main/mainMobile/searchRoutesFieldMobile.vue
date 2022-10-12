<template>
  <v-row justify="center">
    <div class="d-flex align-center" style="min-height: 20vh" v-if="loader">
      <v-progress-circular class="mx-auto" indeterminate color="#085895"></v-progress-circular>
    </div>
    <v-col style="margin-left: 40px" class="px-0" v-else>
      <v-autocomplete background-color="white" prepend-inner-icon="mdi-map-marker-outline" placeholder="Звідки" outlined
        dense class="rounded-t-lg" hide-details :items="Object.values(startCities)" :item-text="'name'"
        :item-value="'name'" v-model="start_route" />
      <v-autocomplete background-color="white" prepend-inner-icon="mdi-map-marker-outline" placeholder="Куди" outlined
        dense class="rounded-b-lg" :items="Object.values(nextCities)" :item-text="'name'" :item-value="'name'"
        v-model="end_route" :disabled="!nextCities.length" />
      <v-btn style="margin-top: 13px" width="150px" height="30px" color="#085895" class="rounded-lg">
        <v-icon color="white mr-2">mdi-magnify</v-icon><span style="
            text-transform: none;
            color: white;
            font-weight: 400;
            font-size: 14px;
          ">Пошук</span>
      </v-btn>
    </v-col>
    <div style="
        background-color: white;
        width: 40px;
        height: 35px;
        margin-top: 0px !important;
        margin-top: 35px;
        cursor: pointer;
      " @click="reverseItem" v-if="!loader">
      <img src="@/assets/img/reverseIcon.svg" style="transform: rotate(90deg)" class="mt-2" />
    </div>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    start_route: "",
    end_route: "",
  }),
  props: {
    startCities: {
      require: true,
    },
    nextCities: {
      require: false,
    },
  },
  methods: {
    reverseItem() {
      this.$emit('reverseItem', this.start_route, this.end_route)
      let old_start_route = this.start_route;
      this.start_route = this.end_route;
      this.end_route = old_start_route;
    },
  },
  computed: {
    ...mapGetters(["loader"]),
  },
  watch: {
    start_route: {
      handler() {
        if (this.start_route.length > 0) {
          this.$emit('nextCities', this.start_route)
        }
      }
    },
    newEndRoute: {
      handler() {
        console.log(this.end_route)
        this.end_route = this.newEndRoute
      }
    }
  }
};
</script>

<style>

</style>