<template>
  <v-card>
    <v-navigation-drawer permanent expand-on-hover height="300px" width="210px">
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="#007ddc">
          <v-list-item link>
            <template v-slot:default="{ active }">
              <v-list-item-icon>
                <v-icon :color="active ? '#085895' : '#243949'"
                  >mdi-widgets</v-icon
                >
              </v-list-item-icon>
              <v-list-item-title
                style="text-align: left"
                :class="active ? 'blueSpan' : 'darkBlueSpan'"
                >Головна</v-list-item-title
              ></template
            >
          </v-list-item>

          <v-list-item link>
            <template v-slot:default="{ active }">
              <v-list-item-icon>
                <v-icon :color="active ? '#085895' : '#243949'">mdi-bus</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                style="text-align: left"
                :class="active ? 'blueSpan' : 'darkBlueSpan'"
                >Автопарк</v-list-item-title
              ></template
            >
          </v-list-item>
          <v-list-item link>
            <template v-slot:default="{ active }">
              <v-list-item-icon>
                <v-icon :color="active ? '#085895' : '#243949'">
                  mdi-map-marker-distance</v-icon
                >
              </v-list-item-icon>
              <v-list-item-title
                style="text-align: left"
                :class="active ? 'blueSpan' : 'darkBlueSpan'"
                >Маршрути</v-list-item-title
              ></template
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedItem: "",
  }),
  watch: {
    selectedItem: {
        deep: true,
        handler(){
            this.$emit('selectedItem', this.selectedItem)
        }
    }
  }
};
</script>

<style>
</style>