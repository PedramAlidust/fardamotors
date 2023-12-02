<template>
  <section class="ContentHeight">
      <!-- Notificationa -->
     <div class="container-full">
      <div class="bg-dark py-3">
        <div class="d-flex justify-content-between align-items-center px-5">
        <p class="text-white text-center">سرويس هاي ادواري</p>
        <img class="LogoWidth" src="~/assets/pictures/FardaLogoPages.png" alt="Logo">
        </div>
      </div>
    </div>
    <!-- content wraper -->
    <div style="min-height: 100vh" class="px-4">
      <!-- make request section -->
      <div class="container shadow px-4 ReqSection text-center py-4 mt-5">
        <p class="ReqTxt mt-2">جهت مشاهده سرويس هاي دوره اي شماره شاسي انتخاب كنيد</p>
      </div>
      <!-- select a vin -->
      <div class="container mt-3 py-3 px-0">
        <select
          @change="SetProductSerialId"
          id="HomeService"
          class="form-select">
          <option>شماره شاسي</option>
          <option v-for="Pelak in DspCustomerProductInfo.Data"
            :key="Pelak.ProductSerialId"
            :value="Pelak.ProductSerialId">
            {{ Pelak.VIN }}
          </option>
        </select>
      </div>
      <!-- Dsp Error if date is not avalable -->
      <div v-if="DspOcasionalServices.ResultStatus == '500'" class="container shadow-sm ReqStatus mt-5 py-3 ps-3">
        <div class="ReqStatus text-center Contracts">
                <p>{{ DspOcasionalServices.Message }}</p>
        </div>
      </div>
       <!-- Acception lists -->
       <div v-for="OcasionalService in DspOcasionalServices.Data" :key="OcasionalService.ReceptionCode" class="container shadow-sm ReqStatus mt-5 py-3 ps-3">
        <div class="d-flex align-items-center justify-content-between">
        <p class="CarNoTxt text-muted">مدل خودرو</p>
        <p class="CarNoTxt text-muted">نوع سرويس</p>
        </div>
        <!-- car no row -->
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <p class="CarNo" dir="ltr">{{  OcasionalService.ModelName }}</p>
          </div>
          <div>
            <p class="CarNo">{{ OcasionalService.ReceptionTypeName }}</p>
          </div>
        </div>
        <!-- tracking code -->
        <div class="d-flex align-items-center">
         <p class="mt-2 CarNoTxt text-muted">تاريخ و ساعت پذيرش:</p>
         <p class="mt-2 TrackingCode px-1">{{ OcasionalService.PersianReceptionDate }}</p>
        </div>
        <!-- end car no row -->
        <hr />
        <!-- current service register status -->
        <div class="d-flex align-items-center">
          <p class="CarNoTxt">كد پذيرش:</p>
          <p class="CurrentServiceStatus px-2">{{ OcasionalService.ReceptionCode  }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   layout: "footer",
   data() {
    return {
      productSerialId: ''
    }
   },
   computed: {
    ...mapGetters(["DspOcasionalServices", "DspCustomerProductInfo"]),
  },
  methods: {
  ...mapActions(["GetOcasionalServices", "GetCustomerProductInfo"]),
  SetProductSerialId(event) {
    this.productSerialId = event.target.value;
    this.GetOcasionalServices({
      productSerialId: this.productSerialId,
      token: this.$cookiz.get("jwt-token")
    })
  }
  },
  mounted() {
     this.GetCustomerProductInfo({
      token: this.$cookiz.get("jwt-token")
    })
  }
};
</script>

<style scoped>

.LogoWidth {
  width: 50px;
}

.form-select:focus {
  border-color: none;
  box-shadow: none;
}

.form-select {
  height: 50px;
  border-radius: 7px;
  color: #403362;
  font-size: 10pt;
  font-weight: bold;
  border: 1px solid #2b39ce26;
  box-shadow: none;
}

/* general */
.Contracts {
  font-size: 11pt;
}

.ReqStatus {
  background-color: #f4f4f4;
  border-radius: 8px;
}

.HomePosition {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.ghost {
  height: 100px;
}

.ProfileTxt {
  color: black;
}

input::placeholder {
  text-align: right;
  color: #403362;
  font-size: 10pt;
  font-weight: bold;
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
}

/* make req section  */
.ReqSection {
  background-color: #fff;
  border-radius: 8px;
}

.ReqTxt {
  font-size: 10pt;
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

/* Home section */
.HomeBkg {
  background-image: url("~/assets/pictures/HSecBkg.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 14vh;
}
</style>