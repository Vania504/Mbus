<template>
  <v-card height="60px" class="rounded-0">
    <v-row no-gutters align="center" class="pt-4 ml-5">
      <div>
        <span
          :class="
            activeCategory == 'contact'
              ? 'statusStyleActive'
              : 'statusStyle'
          "
          @click="setActiveCategory('contact')"
          >Контакти</span
        >
      </div>
      <div>
        <span
          :class="
            activeCategory == 'irregular_transportation'
              ? 'statusStyleActive'
              : 'statusStyle'
          "
          @click="setActiveCategory('irregular_transportation')"
          >Нерегулярні перевезення</span
        >
      </div>
      <div>
        <span
          :class="
            activeCategory == 'about_as'
              ? 'statusStyleActive'
              : 'statusStyle'
          "
          @click="setActiveCategory('about_as')"
          >Про нас</span
        >
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    activeCategory: "contact",
  }),
  methods: {
    setActiveCategory(category){
        this.activeCategory = category;
        this.$emit('activeCategory', this.activeCategory);
    }
  }
};
</script>

<style scoped>
.statusStyle {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #243949;
  margin-right: 30px;
  cursor: pointer;
}
.statusStyleActive {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #085895;
  margin-right: 30px;
  cursor: pointer;
}
</style>