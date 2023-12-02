<template>
  <div>
    <nuxt />
    <!-- hidden home section -->
    <div class="container-full HomeBkg mt-5 HomeVisibility">
      <div class="container px-5">
        <div class="row">
          <div class="col-4 text-center">
            <nuxt-link to="/profile/">
              <img
                class="mt-3"
                src="~/assets/pictures/Profile.svg"
                alt="Profile"
              />
              <p class="ProfileTxt">دوشنبه 14 آبان</p>
            </nuxt-link>
          </div>
          <div class="col-4">
            <!-- ghost element -->
            <nuxt-link to="/home">
              <div class="ghost"></div>
            </nuxt-link>
          </div>
          <div class="col-4 text-center">
              <img src="~/assets/pictures/emergency.svg" alt="emergency" />
              <p class="MenuTxt mt-2">امداد</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Home Section -->
    <div class="container-full HomeBkg mt-5 HomePosition">
      <div class="container px-5">
        <div class="row">
          <div class="col-4 text-center">
            <nuxt-link to="/profile/">
              <img
                class="mt-3"
                src="~/assets/pictures/Profile.svg"
                alt="Profile"
              />
              <p class="ProfileTxt">پروفايل</p>
            </nuxt-link>
          </div>
          <div class="col-4">
            <!-- ghost element -->
            <nuxt-link to="/home">
              <div class="ghost"></div>
            </nuxt-link>
          </div>
          <div class="col-4 text-center">          
              <nuxt-link to="/theservices/assist">
              <img class="mt-2" src="~/assets/pictures/car.png" alt="emergency" />
              <p class="mt-1 emergencyTxt MenuTxt">امداد</p>
              </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DspMenu: false
    }
  }, 
}
</script>

<style scoped>

.emergencyTxt{
  font-size: 10pt;
}

.MenuTxt {
  color: black;
}

/* req status */
.ReqStatus {
  background-color: #f4f4f4;
  border-radius: 8px;
}

.HomePosition {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.HomeVisibility {
  visibility: hidden;
}

.HomeBkg {
  background-image: url("~/assets/pictures/HSecBkg.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 14vh;
  max-width: 500px;
  margin: 0 auto;
}

.ghost {
  height: 100px;
}


.ProfileTxt {
  color: black;
  font-size: 10pt;
}

p {
  margin: 0;
  padding: 0; 
}

.AppFooter {
  font-size: 10pt;
}
</style>
