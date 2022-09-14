<template>
  <div
    class="messageBox pointer"
    @mousemove="isHover = true"
    @mouseleave="
      {
        menu ? '' : (isHover = false);
      }
    "
  >
    <v-row align="center" class="mb-5 ml-5">
      <v-checkbox />
      <v-col cols="2" style="text-align: left" @click="detailMessage">
        <span class="messageTitle">{{ message.name }}</span>
      </v-col>
      <v-col cols="8" style="text-align: left" @click="detailMessage">
        <v-row no-gutters align="center">
          <span class="messageTitle">{{ message.type_text }}:&nbsp;</span>
          <span class="messageText pt-1">
            Ім'я та Прізвище: {{ message.name }}&nbsp;<span v-if="message.email"
              >Email: {{ message.email }}</span
            >
            Номер телефону: {{ message.phone_number }}
          </span>
        </v-row>
      </v-col>
      <v-col cols="1" style="text-align: right" class="px-0">
        <v-row justify="end" no-gutters align="center">
          <span v-if="!isHover">{{
            new Date(message.created_at)
              .toLocaleDateString("uk-UA", {
                month: "long",
                day: "numeric",
              })
              .substr(0, 5)
          }}</span>
          <v-row align="start" justify="end" v-else>
            <v-tooltip bottom color="rgba(0, 0, 0, 0.5)">
              <template v-slot:activator="{ on, attrs }">
                <div class="icon">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    src="@/assets/img/messageIcon/deleteIcon.svg"
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
                    @click="
                      updateStatus(message.id, message.type, 'Архівовані')
                    "
                    src="@/assets/img/messageIcon/archiveIcon.svg"
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
                        <img src="@/assets/img/messageIcon/leaveIcon.svg" />
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
                        @click="
                          updateStatus(message.id, message.type, 'Відповіли')
                        "
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
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    isHover: false,
    model: "",
    menu: "",
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
    detailMessage(){
      this.$emit('detailMessage', this.message.type, this.message.id)
    }
  },
};
</script>

<style scoped>
.messageBox {
  background: #f8f8f8;
  border: 1px solid #e5e5e5;
  height: 40px;
}

.messageBox:hover {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.icon {
  width: 30px;
  height: 30px;
  padding-top: 5px;
  text-align: center;
}
.icon:hover {
  background: #cdcdcd;
  border-radius: 50%;
}
.menuTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #243949;
  padding-top: 10px;
  padding-left: 10px;
  text-align: left;
}
.content {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #243949;
}
.contentActive {
  background: #f2f6fc;
  color: #243949;
}
.messageText {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #243949;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 55%;
  overflow: hidden;
}
.messageTitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #122b3e;
}
</style>