<template>
  <v-row justify="center" no-gutters>
    <v-col style="text-align: left" class="mt-15 ml-5">
      <v-row align="center" justify="center">
        <img src="@/assets/img/dispatcherIcon.png" class="mt-1" />
        <v-col cols="10" class="ml-2 py-0">
          <p class="aboutUsMobileTitle">Служба підтримки 24/7</p>
          <span class="aboutUsMobileDescription"
            >Ми готові проконсультувати Вас в будь-який час доби.
          </span>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="pt-5 pb-5">
        <img src="@/assets/img/saveIcon.png" class="mt-1" />
        <v-col cols="10" class="ml-2 py-0">
          <p class="aboutUsMobileTitle">Якісний сервіс</p>
          <span class="aboutUsMobileDescription"
            >Ми завжди готові доступно та швидко забезпечити Вам комфортну
            подорож з надійним перевізником</span
          >
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <img src="@/assets/img/busServiceIcon/comfortIcon.png" class="mt-1" />
        <v-col cols="10" class="ml-2 py-0">
          <p class="aboutUsMobileTitle">Комфотна подорож</p>
          <span class="aboutUsMobileDescription"
            >Наші автобуси оснащені всім необхідним для Вашої зручної
            подорожі</span
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
  
  <script>
export default {};
</script>
  
<style scoped>
.aboutUsMobileTitle {
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 400px;
  color: black;
  margin-bottom: 0px!important;
}
.aboutUsMobileDescription {
  font-size: 14px;
  font-family: "Roboto";
  font-weight: 400px;
  color: #4c5d6c;
}
</style>