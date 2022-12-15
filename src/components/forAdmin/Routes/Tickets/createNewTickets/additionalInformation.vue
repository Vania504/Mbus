<template>
  <v-card class="sectionCard my-3">
    <p class="sectionName">Додаткова інформація</p>
    <v-col cols="6" class="px-0">
      <span class="subsectionName">Умови повернення</span>
      <p>
        <vue-editor
          style="margin-top: 10px; max-height: 320px; overflow-y: scroll"
          heigth="300px"
          placeholder="Введіть тут.."
        ></vue-editor>
      </p>
      <span class="subsectionName">Умови перевезення багажу</span>
      <p>
        <vue-editor
          style="margin-top: 10px; max-height: 320px; overflow-y: scroll"
          heigth="300px"
          placeholder="Введіть тут.."
        ></vue-editor>
      </p>
      <span class="subsectionName">Додаткові умови</span>
      <p>
        <vue-editor
          style="margin-top: 10px; max-height: 320px; overflow-y: scroll"
          heigth="300px"
          placeholder="Введіть тут.."
        ></vue-editor>
      </p>
    </v-col>
  </v-card>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
};
</script>

<style>
.subsectionName {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #085895;
}
</style>