<template>
  <div>
    <v-row justify="center" no-gutters>
      <v-col style="text-align: left; padding-top: 50px">
        <p class="mainTitle mb-10">Нерегулярні перевезення</p>
        <v-container>
          <v-row justify="center" align="center">
             <div
            style="
              position: absolute;
              width: 60px;
              height: 70px;
              border-top: 2px solid #085895;
              border-left: 2px solid #085895;
              margin-right: 80%;
              margin-bottom: 350px;
            "
          ></div>
            <v-col cols="5">
              <p style="color: #243949; font-size: 24px">Шопінг-тур в Польщу</p>
              <p style="color: #243949; font-size: 20px">
                Шопінг у Польщі, є одним з найпопулярніших нерегулярних
                маршрутів в нашій компанії. <br />Закупи в Польщі вже давно
                стали дуже популярними серед багатьох українців. При цьому
                зацікавленість ними постійно зростає, не лише серед мешканців
                прикордонних областей – в шопінг-тури до польських торгових
                центрів вирушають мешканці жителі всіх областей України.
              </p>
              <br />
              <v-btn
                :outlined="!isHover"
                @mousemove="isHover = true"
                @mouseleave="isHover = false"
                :class="!isHover ? '' : 'white--text'"
                color="#085895"
                width="144px"
                height="34px"
                >Детальніше</v-btn
              >
            </v-col>
            <img src="@/assets/img/innregularTransporImg.svg" />
            <div
            style="
              position: absolute;
              width: 60px;
              height: 70px;
              border-bottom: 2px solid #085895;
              border-right: 2px solid #085895;
              margin-left: 82%;
              margin-top: 380px;
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
};
</script>

<style>
</style>