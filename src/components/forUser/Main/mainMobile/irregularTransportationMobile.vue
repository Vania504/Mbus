<template>
  <div>
    <v-row justify="center" no-gutters>
      <v-col style="text-align: justify; padding-top: 50px">
        <p class="mainTitleMobile mb-2">Нерегулярні перевезення</p>
        <v-container>
          <v-row justify="center" align="start" class="mb-15">
            <div
              class="irregularTransportationBorderTopLeftMobile"
              style="margin-right: 90%; margin-bottom: 120px"
            ></div>
            <v-col cols="6" class="mr-5">
              <center>
                <div
                  style="
                    z-index: 10;
                    position: absolute;
                    width: 190px;
                    height: 127px;              
                    border-radius: 3px;
                  "
                  :style="{
                    backgroundImage: `linear-gradient(
                      360deg,
                      rgba(1, 29, 51, 0.602) 35.16%,
                      rgba(91, 98, 104, 0.469) 45.62%
                    ), url(
      ${content[0].images[0].images.path})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'norepeat',
                  }"
                >
                  <p
                    style="
                      color: #243949;
                      font-size: 10px;
                      color: white;
                      margin-top: 90px;
                    "
                  >
                    {{ content[0].title }}
                  </p>
                </div>
                <!-- <img
                  style="border-radius: 3px"
                  :src="content[0].images[0].images.path"
                  :width="$vuetify.breakpoint.xs ? '190px' : ''"
                  :height="$vuetify.breakpoint.xs ? '130px' : ''"
                /> -->
              </center>
            </v-col>

            <v-col cols="5" xl="5" lg="5" md="5" sm="5" class="py-0">
              <p class="descriptionText">
                {{ content[0].content }}
              </p>
              <v-row
                :justify="$vuetify.breakpoint.xs ? 'center' : 'start'"
                no-gutters
              >
                <v-btn
                  :outlined="!isHover"
                  @mousemove="isHover = true"
                  @mouseleave="isHover = false"
                  :class="!isHover ? '' : 'white--text'"
                  color="#085895"
                  width="85px"
                  height="20px"
                  style="text-transform: none; font-size: 10px"
                  @click="$router.push('/irregular_transportation')"
                  >Детальніше</v-btn
                >
              </v-row>
            </v-col>
            <div
              class="irregularTransportationBorderBottomRightMobile"
              style="margin-left: 90%; margin-top: 100px"
            ></div>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
export default {
  data: () => ({
    isHover: false,
  }),
  props: {
    content: {
      require: true,
    },
  },
};
</script>
  
  <style scoped>
.descriptionText {
  text-align: left;
  color: #243949;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  overflow: hidden;
  max-height: 140px;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  padding-top: 12px;
}
</style>