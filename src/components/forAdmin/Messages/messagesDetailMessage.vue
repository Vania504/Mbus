<template>
  <v-card>
    <v-col>
      <v-row no-gutters align="center">
        <v-tooltip bottom color="rgba(0, 0, 0, 0.5)">
          <template v-slot:activator="{ on, attrs }">
            <div class="icon">
              <img
                v-bind="attrs"
                v-on="on"
                @click="$emit('back')"
                src="@/assets/img/messageIcon/arrowIcon.png"
              />
            </div>
          </template>
          <span>Назад</span>
        </v-tooltip>
        <v-tooltip bottom color="rgba(0, 0, 0, 0.5)">
          <template v-slot:activator="{ on, attrs }">
            <div class="icon">
              <img
                v-bind="attrs"
                v-on="on"
                src="@/assets/img/messageIcon/deleteIcon.png"
              />
            </div>
          </template>
          <span>Видалити</span>
        </v-tooltip>
        <v-tooltip bottom color="rgba(0, 0, 0, 0.5)">
          <template v-slot:activator="{ on, attrs }">
            <div class="icon">
              <img
                v-bind="attrs"
                v-on="on"
                @click="updateStatus(message.id, message.type, 'Архівовані')"
                src="@/assets/img/messageIcon/archiveIcon.png"
              />
            </div>
          </template>
          <span>Архівувати</span>
        </v-tooltip>
        <v-menu offset-y close-on-content-click v-model="menu">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-tooltip bottom color="rgba(0, 0, 0, 0.5)">
                <template v-slot:activator="{ on, attrs }">
                  <div class="icon" v-bind="attrs" v-on="on">
                    <img src="@/assets/img/messageIcon/leaveIcon.png" />
                  </div>
                </template>
                <span>Перемістити у..</span>
              </v-tooltip>
            </div>
          </template>
          <v-card width="200px">
            <v-col class="px-0">
              <p class="menuTitle">Перемістити у...</p>
              <v-divider />
              <v-list shaped width="96px">
                <v-list-item-group v-model="model">
                  <v-list-item
                    dense
                    class="py-0"
                    active-class="contentActive"
                    @click="updateStatus(message.id, message.type, 'Відповіли')"
                  >
                    <span class="content">Відповіли</span>
                  </v-list-item>
                  <v-list-item
                    dense
                    class="py-0"
                    active-class="contentActive"
                    @click="
                      updateStatus(message.id, message.type, 'Архівовані')
                    "
                  >
                    <span class="content">Архівовані</span>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
          </v-card>
        </v-menu>
      </v-row>
      <v-row>
        <v-col cols="9" style="text-align: left" class="ml-10">
          <span class="formType">{{ message.type_text }}</span
          ><br /><br />
          <p class="formText" v-if="message.email">
            Від: <span class="email">{{ message.email }}</span>
          </p>
          <br />
          <p
            style="
              font-weight: 500;
              font-size: 20px;
              line-height: 23px;
              letter-spacing: 0.1em;
              color: #243949;
            "
          >
            Дані з форми зворотнього зв’язку:
          </p>
          <p class="itemTitleStyle">
            Ім’я та прізвище: <span class="formText">{{ message.name }}</span>
          </p>
          <p class="itemTitleStyle" v-if="message.email">
            Email: <span class="formText">{{ message.email }}</span>
          </p>
          <p class="itemTitleStyle">
            Номер телефону:
            <span class="formText">+{{ message.phone_number }}</span>
          </p>
          <p class="itemTitleStyle" v-if="message.message">
            Повідомлення: <span class="formText">{{ message.message }}</span>
          </p>
          <p class="itemTitleStyle" v-if="message.count">
            Кількість персон: <span class="formText">{{ message.count }}</span>
          </p>
          <p class="itemTitleStyle" v-if="message.departure">
            Пункт відправлення:
            <span class="formText">{{ message.departure }}</span>
          </p>
          <p class="itemTitleStyle" v-if="message.bus">
            Модель автобуса:
            <span class="formText">{{ message.bus.model }}</span>
          </p>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
            target="_blank"
            style="text-decoration: none; color: black"
          >
            <v-btn
              width="165px"
              outlined
              class="rounded-xl mt-10 mb-15"
              style="
                text-transform: none;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.1em;
                color: #000000;
              "
              ><img
                style="margin-right: 10px"
                src="@/assets/img/messageIcon/answerArrowIcon.png"
              />Відповісти</v-btn
            ></a
          >
        </v-col>
        <v-col cols="2">
          <v-row no-gutters align="center" justify="end">
            <span
              >{{
                new Date(message.created_at)
                  .toLocaleDateString("uk-UA", {
                    month: "long",
                    day: "numeric",
                  })
                  .substr(0, 5)
              }}&nbsp;{{
                new Date(message.created_at).toLocaleDateString("uk-UA", {
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })
              }}&nbsp;&nbsp;&nbsp;</span
            >
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
              target="_blank"
              style="text-decoration: none; color: black"
            >
              <img
                src="@/assets/img/messageIcon/answerArrowIcon.png"
                class="pointer"
            /></a>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    model: false,
    menu: false,
  }),
  props: {
    message: {
      require: true,
    },
  },
  methods: {
    updateStatus(id, messageType, statusName) {
      this.$emit("updateStatus", id, messageType, statusName);
      this.isHover = false;
    },
  }
};
</script>

<style scoped>
.icon {
  width: 30px;
  height: 30px;
  padding-top: 5px;
  text-align: center;
  cursor: pointer;
}
.icon:hover {
  background: #cdcdcd;
  border-radius: 50%;
}
.formType {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.1em;
  color: #122b3e;
}
.formText {
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.1em;
  color: #243949;
  font-weight: 400;
}
.email {
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.1em;
  color: #085895;
}
.itemTitleStyle {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.1em;
  color: #122b3e;
}
</style>