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
      <v-col cols="2" style="text-align: left">
        <span>{{ message.name }}</span>
      </v-col>
      <v-col cols="8" style="text-align: left">
        <span
          >{{ message.type_text }}: &nbsp; Ім'я та Прізвище: {{ message.name }}</span
        >
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
            <div class="icon">
              <img src="@/assets/img/messageIcon/deleteIcon.svg" />
            </div>
            <div class="icon">
              <img src="@/assets/img/messageIcon/archiveIcon.svg" />
            </div>
            <v-menu offset-y close-on-content-click v-model="menu">
              <template v-slot:activator="{ on, attrs }">
                <div class="icon" v-bind="attrs" v-on="on">
                  <img src="@/assets/img/messageIcon/leaveIcon.svg" />
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
                        @click="updateStatus(message.id,message.type, 'Відповіли')"
                      >
                        <span class="content">Відповіли</span>
                      </v-list-item>
                      <v-list-item
                        dense
                        class="py-0"
                        active-class="contentActive"
                        @click="updateStatus(message.id,message.type, 'Архівовані')"
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
    updateStatus(id, messageType, statusName){
      this.$emit('updateStatus',id, messageType, statusName);
      this.isHover = false;
    }
  }
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
</style>