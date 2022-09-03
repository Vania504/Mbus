<template>
  <div>
    <v-row justify="center" no-gutters>
      <v-col style="text-align: justify; padding-top: 50px">
        <p class="mainTitleMobile mb-2">Нерегулярні перевезення</p>
        <v-container>
          <v-row justify="center" align="center">
            <div
              class="irregularTransportationBorderTopLeftMobile"
              style="margin-right: 90%; margin-bottom: 120px"
            ></div>
            <v-col cols="6" class="mr-5">
              <center>
                <div
                  style="
                    background: linear-gradient(
                      360deg,
                      rgba(1, 29, 51, 0.602) 35.16%,
                      rgba(91, 98, 104, 0.469) 45.62%
                    );
                    z-index: 10;
                    position: absolute;
                    width: 190px;
                    height: 127px;
                    margin-top: 7px;
                    text-align: center;
                  "
                >
                  <p
                    style="
                      color: #243949;
                      font-size: 10px;
                      color: white;
                      margin-top: 90px;
                    "
                  >
                    Шопінг-тур в Польщу
                  </p>
                </div>
                <img
                  style="border-radius: 3px"
                  src="@/assets/img/innregularTransporImg.svg"
                  :width="$vuetify.breakpoint.xs ? '190px' : ''"
                  :height="$vuetify.breakpoint.xs ? '140px' : ''"
                />
              </center>
            </v-col>

            <v-col cols="5" xl="5" lg="5" md="5" sm="5" class="mb-2 py-0">
              <p class="descriptionText">
                Шопінг у Польщі, є одним з найпопулярніших нерегулярних
                маршрутів в нашій компанії. Закупи в Польщі вже давно стали дуже
                популярними серед багатьох українців. При цьому зацікавленість
                ними постійно зростає, не лише серед мешканців прикордонних
                областей – в шопінг-тури до польських торгових центрів вирушають
                мешканці жителі всіх областей України.
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
};
</script>
  
  <style>
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
}
</style>