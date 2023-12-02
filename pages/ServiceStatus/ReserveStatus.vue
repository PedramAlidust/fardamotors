<template>
  <section class="ContentHeight">
      <!-- page header --> 
    <div class="container-full">
      <div class="bg-dark py-3">
        <div class="d-flex justify-content-between align-items-center px-5">
        <p class="text-white text-center">نوبت دهي تعميرگاه</p>
        <img class="LogoWidth" src="~/assets/pictures/FardaLogoPages.png" alt="Logo">
        </div>
      </div>
    </div>
    <!-- content wraper -->
    <div style="min-height: 100vh" class="px-4 pt-5">
      <!-- make request section -->
      <div class="container shadow px-4 ReqSection text-center py-4">
        <nuxt-link to="/theservices/thereserve">
        <img src="~/assets/pictures/AddIcon.svg" alt="AddIcon" />
        <p class="ReqTxt mt-2">درخواست نوبت دهي تعميرگاه</p>
        </nuxt-link>
      </div>
      <!-- requests report section -->
       <div v-for="Booking in DspBookingList.Data" :key="Booking.BookingId" class="container shadow-sm ReqStatus mt-5 py-3 ps-3">
        <p class="CarNoTxt text-muted">مدل خودرو</p>
        <!-- car no row -->
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <p class="CarNo" dir="ltr">{{ Booking.ProductModel}}</p>
          </div>
          <div>
            <p class="CarNoTxt">{{  Booking.BookingDate  }}</p>
          </div>
        </div>
        <!-- tracking code -->
        <div class="d-flex align-items-center">
         <p class="mt-2 CarNoTxt text-muted">نوع سرويس:</p>
         <p class="mt-2 TrackingCode px-1">{{ Booking.BookingType }}</p>
        </div>
        <!-- end car no row -->
        <hr />
        <!-- current service register status -->
        <div class="d-flex">
          <img src="~/assets/pictures/WorkingIcon.svg" alt="WorkingIcon" />
          <p class="CurrentServiceStatus px-2">{{ Booking.BookingState }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   layout: "footer",
   computed: {
    ...mapGetters(["DspBookingList"]),
  },
  methods: {
  ...mapActions(["GetBookingList"]),
  },
  mounted() {
    this.GetBookingList({
      token: this.$cookiz.get("jwt-token")
    })
  }
};
</script>

<style scoped>

.LogoWidth {
  width: 50px;
}

/* general */
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
  font-size: 10pt;
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

.LogoWidth {
  width: 50px;
}
</style>