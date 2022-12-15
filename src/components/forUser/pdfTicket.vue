<template>
  <div style="min-height: 80vh; padding: 15px 50px 0px 50px">
    <div class="logo">
      <img src="@/assets/img/logoMbus.svg" alt="logo" />
    </div>
    <div class="content">
      <table style="table-layout: fixed; border-spacing: 0px">
        <tr class="tableHeader">
          <td style="width: 450px">Назва маршруту</td>
          <td style="width: 165px">Автобус</td>
          <td style="width: 350px"></td>
        </tr>
        <tr class="tdContent">
          <td>Гдиня - Чернівці</td>
          <td>Setra S 417 GT-HD</td>
          <td></td>
        </tr>
        <tr class="tableHeader">
          <td>Відправлення</td>
          <td>В дорозі</td>
          <td style="width: 65px !important">Прибуття</td>
        </tr>
        <tr class="tdContent">
          <td>14 листопада (понеділок) 10:30</td>
          <td>18г 30хв</td>
          <td>15 листопада (вівторок) 05:00</td>
        </tr>
        <tr class="tdContent" style="font-weight: 400">
          <td>Dworzec Autobusowy, pl. Grodnicki 1(platf.1)</td>
          <td></td>
          <td>Dworzec Autobusowy, pl. Grodnicki 1(platf.1)</td>
        </tr>
        <tr class="tableHeader">
          <td>Пасажир, №</td>
          <td style="width: 50px !important">Місце</td>
          <td style="width: 65px !important">Тип</td>
        </tr>
        <tr v-for="i in 2" :key="i" class="tdContent">
          <td>{{ i }}.Пасажир</td>
          <td>01</td>
          <td>Дорослий</td>
        </tr>
      </table>
      <div style="margin-left: 20px; text-align: left">
        <p
          style="
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;
            letter-spacing: 0.1em;
            color: #243949;
            margin-bottom: 15px;
          "
        >
          ID квитка: 000001
        </p>
        <div class="userInfo">
          <span class="userInfoTitle">Прізвище та ім’я: </span
          ><span class="userInfoText">Герцюк Ігор</span>
        </div>
        <div class="userInfo">
          <span class="userInfoTitle">Номер телефону: </span
          ><span class="userInfoText">38(098)-654-77-40</span>
        </div>
        <div class="userInfo">
          <span class="userInfoTitle">Email:</span
          ><span class="userInfoText">igorhertsyuk89@gmail.com</span>
        </div>
        <p
          style="
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.1em;
            color: #243949;
            margin-bottom: 10px;
          "
        >
          Вартість
        </p>
        <div style="display: flex">
          <span class="ticketPrice">1 Дорослий</span>
          <span class="ticketPrice">2500грн</span>
        </div>
        <div style="display: flex">
          <span class="ticketPrice">1 Дитячий</span>
          <span class="ticketPrice">2500грн</span>
        </div>
        <div style="display: flex">
          <span class="tdContent" style="font-weight: 400; width: 150px"
            >Усього</span
          >
          <span class="tdContent">2500грн</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 10px;
}
.tableHeader {
  font-family: "Roboto";
  font-style: normal;
  background: #dddddd;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #4c5d6c;
}
.content {
  display: flex;
  justify-content: center;
}
.tdContent {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #243949;
}
td {
  text-align: left;
  height: 35px;
  padding: 10px 0px 10px 15px;
  margin: 0;
}
table {
  background: #ffffff;
  border: 1px solid #6b7c8a;
}
.userInfo {
  display: flex;
}
.userInfoTitle {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #243949;
  width: 138px;
  text-align: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.userInfoText {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;

  color: #243949;
}
.ticketPrice {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  width: 150px;
  color: #4c5d6c;
  margin-bottom: 10px;
}
</style>