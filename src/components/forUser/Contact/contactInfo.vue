<template>
  <div>
    <v-col
      cols="12"
      lg="10"
      md="10"
      sm="10"
      xl="10"
      :class="$vuetify.breakpoint.xs ? 'px-0' : 'px-0 ml-15'"
    >
      <p
        :class="$vuetify.breakpoint.xs ? 'mainTitleMobile' : 'mainTitle'"
        style="text-align: left;"
      >
        Контакти
      </p>
      <v-row no-gutters align="start" :class="$vuetify.breakpoint.xs ? 'mt-0' : 'mt-10'">
        <v-icon large color="#085895">mdi-email-outline</v-icon>
        <v-col cols="8" style="text-align: left" class="ml-2">
          <span
            :class="$vuetify.breakpoint.xs ? 'itemTitleMobile' : 'itemTitle'"
            >Email</span
          ><br />
          <span
            :class="
              $vuetify.breakpoint.xs
                ? 'itemDescriptionMobile'
                : 'itemDescription'
            "
            ><a :href="`mailto:mbus.kolomyia@gmail.com`"
            style="text-decoration: none; color: black">
            mbus.kolomyia@gmail.com
          </a></span
          >
        </v-col>
      </v-row>
      <v-row no-gutters align="start" class="mt-3 mb-3">
        <v-icon large color="#085895">mdi-headset</v-icon>
        <v-col cols="8" style="text-align: left" class="ml-2">
          <span
            :class="$vuetify.breakpoint.xs ? 'itemTitleMobile' : 'itemTitle'"
            >Зателефонуйте нам:</span
          ><br />
          <span
            :class="
              $vuetify.breakpoint.xs
                ? 'itemDescriptionMobile'
                : 'itemDescription'
            "
            > <a :href="`tel: +380660122000`" style="text-decoration: none;color:#000000;">
              +38 (066) 012-20-00</a></span
          >
        </v-col>
      </v-row>
      <v-row no-gutters align="start">
        <v-icon large color="#085895">mdi-map-marker-radius-outline</v-icon>
        <v-col cols="10" style="text-align: left" class="ml-2">
          <span
            :class="$vuetify.breakpoint.xs ? 'itemTitleMobile' : 'itemTitle'"
            >Місце розташування офісу:</span
          ><br />
          <span
            :class="
              $vuetify.breakpoint.xs
                ? 'itemDescriptionMobile'
                : 'itemDescription'
            "
            >Україна, Івано-Франківська обл., м. Коломия</span
          >
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {};
</script>

<style>
.itemTitle {
  color: #085895;
  font-size: 20px;
}
.itemTitleMobile {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #085895;
}
.itemDescriptionMobile {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
}
</style>