<template>
  <section class="ContentHeight">
    <!-- content wraper -->
    <div style="min-height: 100vh" class="px-4">
       <!-- myinfo section -->
      <div class="container shadow px-4 ReqSection text-center py-4">
        <p class="fw-bold">خودروهاي من</p>
      </div>
       <!-- requests report section -->
       <div v-if="DspCustomerProductInfo.Data">
           <div v-for="CarInfo in DspCustomerProductInfo.Data" :key="CarInfo" class="container shadow-sm ReqStatus mt-5 py-3 ps-3">
              <!-- tracking code -->
              <div class="d-flex align-items-center">
              <p class="mt-2 CarNoTxt text-muted"> مدل خودرو:</p>
              <p class="mt-2 TrackingCode ps-2">{{CarInfo.ModelName}}</p>
              </div>
              <!-- dispatch time -->
              <div class="d-flex align-items-center">
              <p class="mt-2 CarNoTxt text-muted">شماره شاسي:</p>
              <p class="mt-2 TrackingCode ps-2">{{CarInfo.VIN}}</p>
              </div>
              <!-- dispatch time -->
              <div class="d-flex align-items-center">
              <p class="mt-2 CarNoTxt text-muted">شماره پلاك:</p>
              <p v-if="!CarInfo.PlaqueNumberParsedText" class="mt-2 TrackingCode ps-2">ناموجود</p>
              <p v-if="CarInfo.PlaqueNumberParsedText" class="mt-2 TrackingCode ps-2">{{CarInfo.PlaqueNumberParsedText}}</p>
              </div>
              <!-- dispatch time -->
              <div class="d-flex align-items-center">
               <p class="mt-2 CarNoTxt text-muted">تاريخ تحويل:</p>
               <p v-if="!CarInfo.DeliveryDate" class="mt-2 TrackingCode ps-2">ناموجود</p>
               <p v-if="CarInfo.DeliveryDate" class="mt-2 TrackingCode ps-2">{{CarInfo.DeliveryDate}}</p>
              </div>
              <!-- end car no row -->
              <hr />
            </div>
       </div>
        <!-- If My Info was not available -->
      <div v-if="!DspCustomerProductInfo.Data" class="container shadow-sm ReqStatus mt-5 py-3 ps-3">
        <p class="Alert">اطلاعاتي از شما در سيستم وجود ندارد لطفا روي دكمه آپديت پروفايل كليك كرده و كد ملي خود را وارد كنيد.</p>
      </div>
      <!-- myinfo section -->
      <div class="container mt-5 shadow px-4 ReqSection text-center py-4">
        <p class="fw-bold">اطلاعات من</p>
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
          <!-- dispatch time -->
        <div class="d-flex align-items-center">
         <p class="mt-2 CarNoTxt text-muted">مالك خودرو:</p>
         <p class="mt-2 TrackingCode ps-2">{{ DspCustomerInfo.Data.CarOwner }}</p>
        </div>
        <!-- end car no row -->
        <hr />
      </div>
      <!-- If My Info was not available -->
      <div v-if="!DspCustomerInfo.Data" class="container shadow-sm ReqStatus mt-5 py-3 ps-3">
        <p class="Alert">اطلاعاتي از شما در سيستم وجود ندارد لطفا روي دكمه آپديت پروفايل كليك كرده و كد ملي خود را وارد كنيد.</p>
      </div>
      <div class="text-end">
        <button @click="SignOut" type="button" class="py-2 BtnOutStyle mt-4 btn">خروج از پروفايل</button>
      </div>
      <!-- pass info section -->
      <div class="container mt-5 shadow px-4 ReqSection text-center py-4">
        <p class="fw-bold">اسم رمز</p>
      </div>
      <!-- pass section -->
      <div class="container">
        <!-- Nationality Code -->   
        <input v-model="Password" placeholder="رمز" type="password" class="mt-5 form-control" id="Kilumeter">
        <input v-model="ConfirmPassword" placeholder="تكرار رمز" type="password" class="mt-2 form-control" id="Kilumeter">
        <button @click="ChangePass" type="button" class="py-3 BtnRegStyle mt-4 btn">ايجاد اسم رمز</button>
      </div>
      <!-- pass change message -->
       <div v-if="DspChangePassRes" class="container pt-4">
        {{ DspChangePassRes.Message }}
       </div>
    </div>

        <!-- ChangePass Alert -->
        <div class="container alert alert-success ResultPopUp mt-4"
          v-if="DspChangePassRes.Message && DspInfo">
          <div class="d-flex justify-content-between">
            <p>
              {{ DspChangePassRes.Message }}
            </p>
            <img @click="HideInfo" class="CloseBtn" src="~/assets/pictures/close.png" alt="CloseButton">
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
    ...mapGetters(["DspCustomerInfo", "DspCustomerProductInfo", "DspChangePassRes", "DspSetNationalityRes"]),
  },
  methods: {
    ...mapActions(["SignOutUser", "GetCustomerProductInfo", "GetCustomerInfo", "CallChangePassword", "SetCustomerNationality", "SetClearChangePassStatus"]),
    SignOut() {
      this.SignOutUser()
      /* navigate user to login */
      this.$router.push("/");
    },
    UpdateProfile(){
      if(!this.NationalId) {
        alert('لطفا كد ملي را وارد كنيد')
      } else {
        this.SetCustomerNationality({
          token: this.$cookiz.get("jwt-token"), 
          nationalityId: this.NationalId
        })
      }
    }, 
    ChangePass() {
      if(this.Password == this.ConfirmPassword) {
        this.CallChangePassword({
          token: this.$cookiz.get("jwt-token"),
          password: this.Password
        })
      } else {
        alert('پسورد ها يكسان نيست')
      }
    }, 
     HideInfo() {
      this.DspInfo = false;
      this.SetClearChangePassStatus()
    }
  },
  mounted() {
    /* Get ProductInfo */
    this.GetCustomerProductInfo({
      token: this.$cookiz.get("jwt-token")
    })
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