<template>
  <section class="ContentHeight">
    <!-- Notificationa -->
     <div class="container-full">
      <div class="bg-dark py-3">
        <div class="d-flex justify-content-between align-items-center px-5">
        <p class="text-white text-center">عامليت ها</p>
        <img class="LogoWidth" src="~/assets/pictures/FardaLogoPages.png" alt="Logo">
        </div>
      </div>
    </div>
    <!-- content wraper -->
    <div style="min-height: 100vh" class="px-4">
      <!-- make request section -->
      <div class="container shadow px-4 ReqSection text-center py-4 mt-5">
        <p class="ReqTxt mt-2">جهت مشاهده عامليت شهر و استان انتخاب كنيد</p>
      </div>
       <!-- Province -->
        <select @change="UpdateCity"
          id="HomeService"
          class="form-select mt-5">
          <option>استان</option>
          <option v-for="Province in DspProvince.Data" 
          :key="Province.Id" 
          :value="Province.Id">
            {{ Province.ProvinceName }}  
          </option>
        </select>
        <!-- city -->
        <select 
          @change="UpdateDealer"
          id="city" class="form-select mt-4">
          <option>شهر</option>
          <option v-for="City in DspCities.Data" :key="City.Id" :value="City.Id">
            {{ City.CityName }}
          </option>
        </select>
      <!-- dealers list according to city -->
      <div v-for="Dealer in DspBookingCapacities.Data" :key="Dealer.Id" class="container shadow ReqStatus mt-4 py-3 ps-3">
        <p class="CarNoTxt text-muted">{{ Dealer.DealerName }}</p>
        <!-- Dealer Address -->
        <div class="d-flex align-items-center">
         <p class="CarNoTxt text-muted">آدرس:</p>
         <p class="TrackingCode px-1">{{ Dealer.WorkshopAddress }}</p>
        </div>
        <!-- Dealer Address -->
         <div class="d-flex align-items-center">
         <p class="CarNoTxt text-muted">تلفن:</p>
         <a :href="'tel:' + Dealer.WorkshopTel">
          <p class="TrackingCode px-1">{{ Dealer.WorkshopTel }}</p>
         </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   data() {
    return {
      ProvincId: '',
      CityId: ''
    }
   }, 
   layout: "footer",
   computed: {
    ...mapGetters(["DspProvince", "DspCities", "DspBookingCapacities"]),
  },
  methods: {
  ...mapActions(["GetProvince", "GetCities", "GetBookingCapacity"]),
   UpdateCity(event) {
      this.ProvincId = event.target.value;
      this.GetCities({
      cookie: this.$cookiz.get("jwt-token"),
      provinceId: this.ProvincId,
      CompanyId: process.env.CompanyId
      });
    },
    UpdateDealer(event) {
     this.CityId = event.target.value
     this.GetBookingCapacity({
           cookie: this.$cookiz.get("jwt-token"),  
           CityId: this.CityId,
     })
    },
  },
  mounted() {
      /* get province */
    this.GetProvince({
        cookie: this.$cookiz.get("jwt-token"),
        CompanyId: process.env.CompanyId
    })
  }
};
</script>

<style scoped>

/* form select */
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

.LogoWidth {
  width: 50px;
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