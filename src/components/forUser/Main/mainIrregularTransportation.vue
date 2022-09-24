<template>
  <div>
    <v-row justify="center" no-gutters>
      <v-col style="text-align: justify; padding-top: 50px">
        <p class="mainTitle mb-10">Нерегулярні перевезення</p>
        <v-container>
          <v-row justify="center" align="center">
            <div
              class="irregularTransportationBorderTopLeft"
              :style="
                $vuetify.breakpoint.xs
                  ? 'margin-right: 75%; margin-bottom: 720px'
                  : 'margin-right: 80%; margin-bottom: 350px'
              "
            ></div>
            <v-col cols="10" xl="5" lg="5" md="5" sm="5">
              <p style="color: #243949; font-size: 24px" v-if="content.length">
                {{ content[0].title }}
              </p>
              <p style="color: #243949; font-size: 20px" v-if="content.length">
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
                  @click="$router.push('/irregular_transportation')"
                  color="#085895"
                  width="144px"
                  height="34px"
                  >Детальніше</v-btn
                >
              </v-row>
            </v-col>
            <div v-if="content.length">
              <img
                v-if="content[0].images[0].images"
                :src="
                  content[0].images[0].images.path
                "
                :width="$vuetify.breakpoint.xs ? '280px' : '600px'"
                :height="$vuetify.breakpoint.xs ? '140px' : '400px'"
              />
            </div>
            <div
              class="irregularTransportationBorderBottomRight"
              :style="
                $vuetify.breakpoint.xs
                  ? 'margin-left: 75%; margin-top: 760px'
                  : 'margin-left: 82%; margin-top: 380px'
              "
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

<style>
</style>