<template>
  <v-col>
    <user-field
      v-for="user in usersList"
      :key="user.id"
      :user="user"
      @saveUser="saveUser"
    />
    <v-row no-gutters align="center">
      <span
        style="
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-transform: none;
          letter-spacing: 0.1em;
          text-align: left;
        "
        :style="
          disabledAddNewUserBtn
            ? 'color: #4C5D6C; pointer-events: none;'
            : 'color: #085895; '
        "
        class="pointer"
        @click="addNewUser"
      >
        <v-icon
          :color="disabledAddNewUserBtn ? '#4C5D6C' : '#085895'"
          class="mr-2"
          >mdi-plus</v-icon
        >
        <span>Додати користувача</span>
      </span>
    </v-row>
  </v-col>
</template>

<script>
import userField from "./userField.vue";
import authService from "@/requests/admin/authService";
export default {
  components: { userField },
  data: () => ({
    usersList: [],
    disabledAddNewUserBtn: false,
  }),
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      await authService.getUsers().then((response) => {
        this.usersList = response.data.data;
      });
    },
    async createNewUser(user) {
      let form = new FormData();
      form.append("first_name", user.first_name);
      form.append("last_name", user.last_name);
      form.append("role_id", user.role.role_id);
      form.append("phone_numbers", user.phone_number);
      form.append("email", user.email);
      await authService.createUser(form).then(() => {
        this.getUsers();
      });
    },
    async updateUser(user) {
      let form = new FormData();
      form.append("first_name", user.first_name);
      form.append("last_name", user.last_name);
      form.append("role_id", user.role.role_id);
      form.append("phone_numbers", user.phone_number);
      form.append("email", user.email);
      await authService.updateUser(user.id, form).then(() => {
        this.getUsers();
      });
    },
    addNewUser() {
      this.usersList.push({
        id: this.usersList.length + 1,
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        role: { role_id: 3 },
        status: "newUser",
      });
      this.disabledAddNewUserBtn = true;
    },
    saveUser(id, userData) {
      this.usersList.forEach((user) => {
        if (user.id == id) {
          user = userData;
          if (userData.status && userData.status == "newUser") {
            this.createNewUser(userData);
          } else {
            this.updateUser(userData);
          }
        }
      });
      this.disabledAddNewUserBtn = false;
    },
    // isEmpty() {
    //   let validObjects = [];
    //   this.usersList.forEach((user) => {
    //     if (
    //       user.first_name !== "" &&
    //       user.email !== "" &&
    //       user.phone_number !== ""
    //     ) {
    //       validObjects.push(true);
    //     }
    //   });
    //   validObjects.length == this.usersList.length
    //     ? (this.disabledAddNewUserBtn = false)
    //     : (this.disabledAddNewUserBtn = true);
    // },
  },
};
</script>

<style>
</style>