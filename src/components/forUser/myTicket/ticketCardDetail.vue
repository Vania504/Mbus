<template>
  <v-card class="detailTicketCard rounded-lg">
    <div v-if="$vuetify.breakpoint.xs">
      <v-row no-gutters align="center" style="padding: 10px;">
        <span style="
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.1em;  
        color: #243949;">Автобус:</span>&nbsp;
        <img width="12px" height="12px" src="@/assets/img/busServiceIcon/busIcon.png"/>
        &nbsp;
        <v-col cols="4" class="px-0 py-0">
          <span style="
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.1em;
        color: #085895;">Setra S 417 GT-HD</span>
      </v-col>
      
        <v-row no-gutters justify="end">
          <span style="
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.1em;
          text-decoration-line: underline;
          color: #6B7C8A;
          ">
          Переглянути маршрут
        </span>
        </v-row>
      </v-row>
      <v-divider style="border: 0.5px solid rgba(173, 197, 217, 0.4);"/>
      <v-col
      class="px-0 py-0"
      cols="8"
      style="text-align: left; margin: 10px"
    >
      <v-row no-gutters align="center">
        <v-col cols="6" class="py-0"
          ><span class="itemTicketTitleMobile">Прізвище та ім’я:</span></v-col
        >
        <v-col cols="6" class="py-0"
          ><span class="itemTicketTextMobile">Герцюк Ігор</span></v-col
        >
      </v-row>
      <v-row no-gutters align="center">
        <v-col cols="6" class="py-0">
          <span class="itemTicketTitleMobile">Номер телефону:</span></v-col
        >
        <v-col cols="6" class="py-0"
          ><span class="itemTicketTextMobile">38(098)-654-77-40</span></v-col
        >
      </v-row>
      <v-row no-gutters align="center">
        <v-col cols="6" class="py-0"
          ><span class="itemTicketTitleMobile">Кількість місць:</span></v-col
        >
        <v-col cols="6" class="py-0"
          ><span class="itemTicketTextMobile">2 місця (1 дитячий)</span></v-col
        >
      </v-row>
      <v-row no-gutters align="center">
        <v-col cols="6" class="py-0"
          ><span class="itemTicketTitleMobile">Місце:</span></v-col
        >
        <v-col cols="6" class="py-0"
          ><span class="itemTicketTextMobile">01, 02</span></v-col
        >
      </v-row>
    </v-col>
    <v-divider style="border: 0.5px solid rgba(173, 197, 217, 0.4);"/>
    </div>
    <v-col style="text-align: center;">
      <p class="heading">
        Умови перевізника
      </p>
      <v-row no-gutters justify="center">
        <v-col cols="12" xl="4" lg="4" md="4" sm="12" style="text-align: left;">
          <p style="
          font-weight: 500;
          font-size: 12px;
          line-height: 150%;
          letter-spacing: 0.1em;
          color: #243949;">
            Умови повернення: 
            <ul style="font-weight: 400;
            font-size: 10px;
            line-height: 150%;
            letter-spacing: 0.1em;
            color: #4C5D6C;">
                <li>до 240 год. до від'їзду: 80%</li>
                <li>від 240 год. до 72 год. до від'їзду: 50%</li>
            <li>від 72 год. до 24 год. до від'їзду: 10%</li>
            <li> менше 24 год. до від'їзду: квиток не повертається</li>
            </ul>  
          </p>
        </v-col>
        <v-col cols="12" xl="4" lg="4" md="4" sm="12" style="text-align: left;">
            <p style="
            font-weight: 500;
            font-size: 12px;
            line-height: 150%;
            letter-spacing: 0.1em;
            color: #243949;">
            Багаж: <br />
              <span style="font-weight: 400;
              font-size: 10px;
              line-height: 150%;
              letter-spacing: 0.1em;
              color: #4C5D6C;">
              1 од. до 30 кг. і розміром (Д + Ш + В) не більше 170 см - безкоштовно,
              кожен наст. кг. - 1 PLN / 5 UAH. Ручна поклажа до 5 кг. - безкоштовно. Можливе перевезення велосипедів, в розібраному стані - ціну уточнюйте у водія.
               
            </span>
        </p>
          </v-col>
          <v-col cols="12" xl="4" lg="4" md="4" sm="12" style="text-align: left;">
            <p style="
            font-weight: 500;
            font-size: 12px;
            line-height: 150%;
            letter-spacing: 0.1em;
            color: #243949;">
            Додаткова умова:
            <span style="font-weight: 400;
              font-size: 10px;
              line-height: 150%;
              letter-spacing: 0.1em;
              color: #4C5D6C;">
             <br />
              Квиток дійсний для посадки в електронному вигляді. Зміна дати поїздки - не менше ніж за 24 години до від'їзду, за додаткову плату - 100 UAH.
              </span>
              </p>
          </v-col>
      </v-row>
        <v-col style="text-align: center;">
        <span class="heading">Доступні сервіси</span>
        <v-row no-gutters justify="center">
<div v-for="item in service" :key="item.id">
          <v-tooltip bottom>
            <!--v-if="bus.options[item.key] == 1"-->
            <template v-slot:activator="{ on, attrs }">
              <img
                :src="require(`@/assets/img/busServiceIcon${item.img}`)"
                class="mt-5 mr-5"
                width="30px"
                height="30px"
                style="objcet-for: cover;"
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>
        </div>
        </v-row>     
    </v-col>
    </v-col>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    service: [
      {
        id: 1,
        img: "/toiletIcon.png",
        title: "Туалет",
        key: "toilet",
        enters: false,
      },
      {
        id: 2,
        img: "/coffeIcon.png",
        title: "Харчування",
        key: "supply",
        enters: false,
      },
      {
        id: 3,
        img: "/electricOutletIcon.png",
        title: "Розетки",
        key: "socket",
        enters: false,
      },
      {
        id: 4,
        img: "/coldIcon.png",
        title: "Клімат контроль",
        key: "climate",
        enters: true,
      },
      {
        id: 5,
        img: "/wifiIcon.png",
        title: "Wi-Fi",
        key: "wifi",
        enters: false,
      },
      {
        id: 6,
        img: "/seriesIcon.png",
        title: "Перегляд TV",
        key: "tv",
        enters: false,
      },
      {
        id: 7,
        img: "/vipIcon.png",
        title: "VIP",
        key: "vip",
        enters: false,
      },
      {
        id: 8,
        img: "/euro5Icon.png",
        title: "Екологічність",
        key: "ecology",
        enters: false,
      },
    ],
  }),
};
</script>

<style>
.detailTicketCard {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.heading {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #243949;
}
.itemTicketTitleMobile {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #243949;
  margin-right: 3px;
}
.itemTicketTextMobile {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #243949;
}
</style>