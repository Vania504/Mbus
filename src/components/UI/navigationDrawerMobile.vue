<template>
  <v-navigation-drawer v-model="visible" absolute right temporary style="z-index: 50">
    <div style="background-color: #243949; height: 30px" class="white--text">
      <v-row no-gutters align="center" justify="start"
        ><v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
        <span style="font-size: 16px; line-height: 19px; letter-spacing: 0.1em"
          >Інше</span
        ></v-row
      >
    </div>
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="blue-purple--text text--accent-4"
      >
        <router-link to="/irregular_transportation">
          <v-list-item>
            <v-row no-gutters justify="start" align="center">
              <v-icon color="#243949">mdi-minus</v-icon>
              <span class="textStyle">Нерегулярні перевезення</span>
            </v-row>
          </v-list-item>
        </router-link>
        <router-link to="/transportation_rules">
          <v-list-item>
            <v-row no-gutters justify="start" align="center">
              <v-icon color="#243949">mdi-minus</v-icon>
              <span class="textStyle">Правила перевезення</span>
            </v-row>
          </v-list-item>
          </router-link>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    group: "",
    visible: false,
  }),
  props: {
    showNavigationDrawer: {
      require: true,
    },
  },
  mounted() {
    this.visible = this.showNavigationDrawer;
    window.scrollTo(0,0);
  },
  watch: {
    visible: {
      deep: true,
      handler(){
        if(this.visible == false){
           this.$emit('close')
        }
      }
    }
  }
};
</script>

<style>
.textStyle {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.055em;
  color: #243949;
}
</style>