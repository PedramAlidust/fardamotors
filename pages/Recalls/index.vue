<template>
  <section class="ContentHeight">
    <!-- page header -->
    <div class="container-full">
      <div class="bg-dark py-3">
        <div class="d-flex justify-content-between align-items-center px-5">
          <p class="text-white text-center">فراخوان ها</p>
          <img class="LogoWidth" src="~/assets/pictures/FardaLogoPages.png" alt="Logo" />
        </div>
      </div>
    </div>
    <!-- content wraper -->
    <div style="min-height: 100vh" class="px-4">
      <!-- make request section -->
      <div class="container shadow px-4 ReqSection text-center py-4 mt-5">
        <p class="ReqTxt mt-2">مشاهده فراخوان ها</p>
      </div>
      <!-- request unsuccess recall section -->
      <div
        v-if="DspRecals.ResultStatus == 500"
        class="container shadow-sm ReqStatus mt-5 py-3 ps-3"
      >
        <div class="ReqStatus text-center Contracts">
          <p>در حال حاضر فراخواني وجود ندارد</p>
        </div>
      </div>
      <!-- request success recall section -->
      <div v-if="DspRecals.ResultStatus == 200" class="container">
        <div
          v-for="recal in DspRecals.Data"
          :key="recal"
          class="shadow-sm ReqStatus mt-5 py-3 pe-3 text-center Contracts"
        >
          <div class="d-flex">
            <p>موضوع فراخوان:</p>
            <p class="px-2">{{ recal.ServiceCallSubject }}</p>
          </div>
          <div class="d-flex mt-1">
            <p>تاريخ شروع:</p>
            <p class="px-2">
              {{ recal.StarrDate }}
            </p>
          </div>
          <div class="d-flex mt-1">
            <p>تاريخ پايان</p>
            <p class="px-2">
              {{ recal.FinishDate }}
            </p>
          </div>
          <div class="d-flex mt-1">
            <p>متن پيام:</p>
            <p class="px-2">
              {{ recal.Note }}
            </p>
          </div>
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
    ...mapGetters(["DspRecals"]),
  },
  methods: {
    ...mapActions(["GetRecalls"]),
  },
  mounted() {
    this.GetRecalls({
      token: this.$cookiz.get("jwt-token"),
      vin: this.$cookiz.get("vin"),
    });
  },
};
</script>

<style scoped>
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
