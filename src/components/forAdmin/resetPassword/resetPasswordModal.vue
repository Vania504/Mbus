<template>
  <v-dialog v-model="visibility" width="900px" height="350px">
    <modal-header
      title="Відновлення паролю"
      @close="$emit('close')"
      :showCloseIcon="true"
    />
    <v-card
      height="350px"
      style="text-align: left; padding: 30px 20px 0px 20px"
      v-if="isSuccessSendEmail"
    >
      <h2
        style="
          font-weight: 500;
          font-size: 20px;
          line-height: 23px;
          letter-spacing: 0.1em;
          color: #243949;
        "
      >
        Запит успішно прийнятий
      </h2>
      <br />
      <p
        class="mx-auto"
        style="
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.1em;
          color: #243949;
        "
      >
        На пошту
        <strong
          >{{ email.substr(0, 3) }}***{{
            email.substr(email.length - 14, email.length - 1)
          }}</strong
        >, вказану під час реєстрації, зараз прийде лист. У ньому буде
        посилання, по якому слід перейти, щоб Ви змогли створити новий пароль.
        <strong>Дуже важливо</strong> не забути перевірити папку "СПАМ" у своїй
        поштовій скриньці, якщо лист довго не надходить!
      </p>
    </v-card>
    <div v-else>
      <input-email
        @close="$emit('close')"
        @successSendEmail="successSendEmail"
      />
    </div>
  </v-dialog>
</template>
  
  <script>
import inputEmail from "./inputEmail.vue";
import modalHeader from "@/components/UI/modalHeader.vue";
export default {
  components: {
    inputEmail,
    modalHeader,
  },
  data: () => ({
    isSuccessSendEmail: false,
    email: "golinskijandtij416@gmail.com",
  }),
  props: {
    visible: {
      require: true,
    },
  },
  methods: {
    successSendEmail(email) {
      this.email = email;
      this.issSuccessSendEmail = true;
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
    },
  },
};
</script>
  
  <style>
</style>