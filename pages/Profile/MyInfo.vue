<template>
  <section class="ContentHeight">
    <!-- content wraper -->
    <div style="min-height: 100vh" class="px-4">
      <!-- myinfo section -->
      <div class="container mt-5 shadow px-4 ReqSection text-center py-4">
        <p class="fw-bold">اطلاعات شخصي</p>
      </div>
      <!-- requests report section -->
      <div v-if="DspCustomerInfo.Data" class="container shadow-sm ReqStatus mt-5 py-3 ps-3">
        <!-- tracking code -->
        <div class="d-flex align-items-center">
         <p class="mt-2 CarNoTxt text-muted">نام و نام خانوادگي:</p>
         <p class="mt-2 TrackingCode ps-2">{{ DspCustomerInfo.Data.CustomerName }}</p>
        </div>
         <!-- dispatch time -->
        <div class="d-flex align-items-center">
         <p class="mt-2 CarNoTxt text-muted">آدرس:</p>
         <p class="mt-2 TrackingCode ps-2">{{ DspCustomerInfo.Data.Address }}</p>
        </div>
        
         <!-- dispatch time -->
        <div class="d-flex align-items-center">
         <p class="mt-2 CarNoTxt text-muted">شماره تماس:</p>
         <p class="mt-2 TrackingCode ps-2">{{ DspCustomerInfo.Data.Phone }}</p>
        </div>
        <!-- end car no row -->
        <hr />
      </div>
      <!-- If My Info was not available -->
      <div v-if="!DspCustomerInfo.Data" class="container shadow-sm ReqStatus mt-5 py-3 ps-3">
        <p class="Alert">اطلاعاتي از شما در سيستم وجود ندارد لطفا بررسي با پشتيباني تماس حاصل نماييد.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters} from "vuex";

export default {
  layout: "footer",
  data() {
    return {
      DspInfo: true,
      NationalId: '', 
      Password: '', 
      ConfirmPassword: ''
    }
  }, 
   computed: {
    ...mapGetters(["DspCustomerInfo"]),
  },
  methods: {
    ...mapActions(["GetCustomerInfo"]),
  },
  mounted() {
    /* Get DspCustomerInfo */
    this.GetCustomerInfo({
      token: this.$cookiz.get("jwt-token")
    })
  }
};
</script>

<style scoped>
/* general */

input#Kilumeter {
    border: 1px solid rgba(43,57,206,.14902);
}

.CloseBtn {
  width: 22px;
  cursor: pointer;
}

.ResultPopUp {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
}

.Alert {
  font-size: 10pt;
  text-align: justify;
  text-align-last: right;
}

input::placeholder {
  text-align: right;
  color: #403362;
  font-size: 10pt;
  font-weight: bold;
}

.BtnRegStyle {
  font-size: 10pt;
  width: 100%;
  color: #fff;
  background-image: linear-gradient(#0569A3, #1964E8, #005DFF);
  border-radius: 10px !important;
}


.BtnOutStyle {
  font-size: 10pt;
  width: 40%;
  color: #fff;
  background-image: linear-gradient(#0569A3, #1964E8, #005DFF);
  border-radius: 10px !important;
}

.form-control {
  border: 1px solid #2B39CE26;
  border-color: none;
  box-shadow: none;
  height: 50px;
  border-radius: 7px;
}

hr {
  background-color: #9f9f9f;
  height: 3px;
}

.TrackingCode {
  font-size: 10pt;
}

.ContentHeight {
  background-image: url("~/assets/pictures/background.jpg");
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
}

/* make req section  */
.ReqSection {
  background-color: #fff;
  border-radius: 8px;
}

.ReqTxt {
  font-size: 9pt;
  color: #403362 !important;
  font-weight: bold;
}

/* req status */
.ReqStatus {
  background-color: #f4f4f4;
  border-radius: 8px;
}

.CarNoTxt {
  font-size: 8pt;
}

.CarNo {
  margin-top: 5px;
  font-weight: bold;
  color: #3c3951;
  font-size: 10pt;
}

.CurrentServiceStatus {
  font-size: 10pt;
}

</style>