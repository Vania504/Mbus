<template>
  <v-main
    ><v-container>
      <v-row justify="center">
        <v-col style="text-align: left">
          <h3
            :class="$vuetify.breakpoint.xs ? 'mainTitleMobile' : 'mainTitle'"
            style="text-align: left"
          >
            Про нас
          </h3>
          <v-row align="end" class="mt-2">
            <v-col cols="12" xl="6" lg="6" md="6" sm="" style="z-index: 10;">
              <span
                :class="
                  !$vuetify.breakpoint.xs
                    ? 'otherTextDescription'
                    : isMore
                    ? 'mobileTextDescription'
                    : 'mobileTextDescriptionOverflow'
                "
                >
                <div v-if="content.length" v-html="content[0].content"></div>
              </span>
              <v-row no-gutters align="start" justify="end" v-if="$vuetify.breakpoint.xs" class="mt-2">
                <v-btn
                  outlined
                  @click="isMore = !isMore"
                  color="#085895"
                  width="85px"
                  height="20px"
                  style="text-transform: none; font-size: 10px">
                  <span v-if="!isMore">Більше</span>
                  <span v-else>Менше</span>
                </v-btn>
              </v-row>
            </v-col>
            <img 
            v-if="content.length"
              height="346px"
              :width="$vuetify.breakpoint.xs ? '280px' : '454px'"
              class="ml-10"
              :src="content[0].images[0].images.path"
              style="opacity: 0.4;"
              :class="$vuetify.breakpoint.xs ? 'mobileLogo' : ''"
            />
          </v-row>
        </v-col>
      </v-row> </v-container
  ></v-main>
</template>

<script>
export default {
  data: () => ({
    isMore: false,
  }),
  props: {
    content: {
      require: true,
    }
  }
};
</script>

<style>
.mobileTextDescription {
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
  letter-spacing: 0.1em;
  color: #243949;
}
.mobileTextDescriptionOverflow {
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
  letter-spacing: 0.1em;
  color: #243949;
  overflow: hidden;
  max-height: 140px;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 8;
}
.otherTextDescription {
  font-size: 16px;
  color: #243949;
}
.mobileLogo {
  position: absolute;
  width: 305px;
  height: 233px; 
  padding-left: 10%;
  z-index: 0;
  padding-top: 20px;
}
</style>