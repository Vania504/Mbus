<template>
  <v-row justify="center" no-gutters class="mt-5">
    <div style="width: 1340px">
      <v-row justify="end" no-gutters class="mr-5" align="center">
        <v-row no-gutters justify="start" align="center">
          <div class="descriptionText">
            <div class="irregularTransportationBorderTopLeft ml-12" style="top: 10px;"></div>
            <v-row justify="center" align-content="center">
              <v-col cols="9" style="text-align: justify" class="mt-5">
                <p>
                  <span class="blueSpan">Компанія “MBUS”</span> має широкі
                  можливості для організації поїздок по Україні і Європі
                  автобусами найвищого рівня комфорту.
                </p>
                <p>
                  Ми гарантуємо безпеку пасажирів під час подорожі, це
                  забезпечується високою кваліфікацією наших водії, які
                  регулярно проходять атестацію на професійну придатність
                </p>
                <p>
                  Ми маємо великий стаж роботи, відмінно знають основні
                  туристичні маршрути України і Європи
                </p>
              </v-col>
            </v-row>
            <div
              class="irregularTransportationBorderBottomRight"
              style="margin-left: 80%; top: 80%"
            ></div>
          </div>
        </v-row>
        <img class="busImg" src="@/assets/img/irregularBackgroundBus.png" />
      </v-row></div
  ></v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.descriptionText {
  width: 556px;
  height: 404px;
  background-color: white;
  position: absolute;
  text-align: center;
  font-size: 20px;
  margin-left: 20px;
}
.busImg {
  height: 600px;
  width: 900px;
}
</style>