<template>
  <v-dialog v-model="visibility" width="308px" height="431px">
    <v-card style="padding: 30px">
      <v-col class="px-0 py-0" style="text-align: center">
        <p
          style="
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.1em;
            color: #122b3e;
          "
        >
          Ваш електронний білет
        </p>
        <p
          style="
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #243949;
            font-weight: 400;
          "
        >
          Відскануйте QR-код
        </p>
        <v-row no-gutters justify="center">
          <div style="width: 200px; height: 200px">
            <VueQRCodeComponent text="testQrCode" size="200" color="#583CA9" />
          </div>
        </v-row>
        <v-row
          no-gutters
          align="center"
          justify="center"
          style="margin-top: 5px; margin-bottom: 5px"
          class="px-5"
        >
          <v-divider class="mr-2" style="width: 80px" />
          <span
            style="
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.1em;
              color: #50616e;
            "
            >або</span
          >
          <v-divider class="ml-2" style="width: 80px" />
        </v-row>
        <v-btn
          style="
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.1em;
            color: #243949;
            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 10px;
            text-transform: none;
            border: 1px solid #085895;
          "
          :style="
            sendEmail
              ? 'background: linear-gradient(90deg, rgba(88,60,169,1) 12%, rgba(8,88,149,1) 98%); color: white;'
              : ''
          "
          width="247px"
          height="36px"
          @click="sendQrToEmail"
        >
          <span v-if="!sendEmail">Надіслати на Email</span>
          <span v-else>Надіслано</span></v-btn
        >
        <v-btn
          style="
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.1em;
            color: #243949;
            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 10px;
            text-transform: none;
            margin-top: 10px;
            border: 1px solid #085895;
          "
          :style="
            downloadPDF
              ? 'background: linear-gradient(90deg, rgba(88,60,169,1) 12%, rgba(8,88,149,1) 98%); color: white;'
              : ''
          "
          width="247px"
          height="36px"
          @click="downloadQrToPDF"
        >
          <v-row v-if="!downloadPDF" no-gutters align="center">
            <span>Завантажити PDF квиток </span>
            <img
              src="@/assets/img/downloadIcon.svg"
              alt="download"
              style="margin-left: 10px"
            />
          </v-row>
          <span v-else>Завантажено</span></v-btn
        >
      </v-col>
    </v-card>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="ticket"
      :pdf-quality="1"
      :manual-pagination="false"
      pdf-format="a4"
      :pdf-margin="50"
      pdf-orientation="landscape"
      pdf-content-width="1146px"
      @progress="onProgress($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <pdf-ticket />
      </section>
    </vue-html2pdf>
  </v-dialog>
</template>

<script>
import VueQRCodeComponent from "vue-qrcode-component";
import VueHtml2pdf from "vue-html2pdf";
import PdfTicket from "@/components/forUser/pdfTicket.vue";
export default {
  components: {
    VueQRCodeComponent,
    VueHtml2pdf,
    PdfTicket,
  },
  data: () => ({
    downloadPDF: false,
    sendEmail: false,
  }),
  props: {
    visible: {
      require: true,
    },
  },
  methods: {
    sendQrToEmail() {
      this.sendEmail = true;
    },
    downloadQrToPDF() {
      this.downloadPDF = true;
      this.$refs.html2Pdf.generatePdf();
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