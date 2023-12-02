<template>
  <section class="ContentHeight">
    <!-- Notificationa -->
     <div class="container-full">
      <div class="bg-dark py-3">
        <div class="d-flex justify-content-between align-items-center px-5">
        <p class="text-white text-center">درباره نرم افزار</p>
        <img class="LogoWidth" src="~/assets/pictures/FardaLogoPages.png" alt="Logo">
        </div>
      </div>
    </div>
    <!-- content wraper -->
    <div style="min-height: 100vh">
      <!-- Application Logo -->
      <div class="text-center mt-5">
        <img class="AboutLogo" src="~/assets/pictures/FardaLogoPages.png" alt="AboutLogo">
      </div>
      <!-- Application Name -->
      <p class="AppNameTxt fw-bold text-center mt-3">اپليكيشن فردا موتورز</p>
      <p class="fw-bold text-center mt-1">FARDAMOTORS</p>
      <!-- App version -->
      <div class="AppVersionBg mt-4 py-2">
        <p class="text-center text-white">نسخه 1.0.0</p>
      </div>
      <!-- CopyRight text -->
      <div class="container text-center mt-4">
        <p class="CopyRightTxt fw-bold"> حقوق برنامه متعلق به خودرو سازي فردا مي باشد</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
   layout: "footer",
};
</script>

<style scoped>

/* CopyRight */
.CopyRightTxt {
  font-size: 10pt;
}

/* AppVersionBg */
.AppVersionBg {
  border-radius: 10px;
  background-color: rgb(218, 42, 42);
  width: 30%;
  margin: 0 auto;
}

/* App Name */
.AppNameTxt {
  font-size: 14pt;
}

/* general */
p {
  margin: 0; 
  padding: 0;
}

.AboutLogo {
  width: 150px;
}

.LogoWidth {
  width: 50px;
}

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