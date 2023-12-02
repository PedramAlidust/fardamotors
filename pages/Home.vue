<template>
  <section class="ContentHeight">
    <!-- right menu hamberger icon -->
    <div class="container-full px-4">
      <img
        @click="OpenMenu"
        class="MenuIcon py-2"
        src="~/assets/pictures/MenuIcon.png"
        alt="humberger"
      />
    </div>
    <!-- content wraper -->
    <div style="min-height: 100vh" class="px-4">
      <!-- reservation text -->
      <div class="container-full text-center">
        <img
          class="shadow BanerBorder w-100"
          src="~/assets/pictures/HomeServiceBaner.jpg"
          alt="baner"
        />
      </div>
      <!-- HomeService Button -->
      <div class="container-full text-center">
        <nuxt-link to="/servicestatus/HomeServiceStatus">
          <img
            class="shadow BanerButton w-100"
            src="~/assets/pictures/HomeServiceButton.jpg"
            alt="baner"
          />
        </nuxt-link>
      </div>

      <!-- first container -->
      <div class="container-full mt-3">
        <div class="row">
          <!-- left icon -->
          <div class="col-6 text-center">
            <div class="IconBkg mt-4 shadow">
              <nuxt-link to="/servicestatus/reservestatus">
                <img
                  class="mt-3"
                  width="35"
                  height="35"
                  src="~/assets/pictures/reserve.svg"
                  alt="reserve"
                />
                <p class="MenuTxt">نوبت تعميرگاه</p>
              </nuxt-link>
            </div>
          </div>
          <!-- right icon -->
          <div class="col-6 text-center">
            <div class="IconBkg mt-4 shadow">
              <nuxt-link to="/thereports/acceptions">
                <img
                  class="mt-3"
                  width="35"
                  height="35"
                  src="~/assets/pictures/office-building.png"
                  alt="Acception"
                />
                <p class="AcceptionTxt">پذيرش</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- second container -->
      <div class="container-full">
        <div class="row">
          <!-- right icon -->
          <div class="col-6 text-center">
            <div class="IconBkg shadow">
              <nuxt-link to="/thereports/ocasionalservice">
                <img
                  class="mt-3"
                  width="35"
                  height="35"
                  src="~/assets/pictures/services.svg"
                  alt="services"
                />
                <p class="MenuTxt">سرويس ادواري</p>
              </nuxt-link>
            </div>
          </div>
          <!-- left icon -->
          <div class="col-6 text-center">
            <nuxt-link to="/thecontracts">
              <div class="IconBkg shadow">
                <img
                  class="mt-3"
                  width="35"
                  height="35"
                  src="~/assets/pictures/contracts.svg"
                  alt="contracts"
                />
                <p class="MenuTxt">قراردادها</p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- third container -->
      <div class="container-full">
        <div class="row">
          <!-- right icon -->
          <div class="col-6 text-center">
            <div class="IconBkg mt-1 shadow">
              <nuxt-link to="/info/dealers">
                <img
                  class="mt-3"
                  width="35"
                  height="35"
                  src="~/assets/pictures/Reports.svg"
                  alt="services"
                />
                <p class="MenuTxt">عامليت ها</p>
              </nuxt-link>
            </div>
          </div>
          <!-- left icon -->
          <div class="col-6 text-center">
            <div class="IconBkg mt-1 shadow">
              <nuxt-link to="/recalls">
                <img
                  class="mt-3"
                  width="35"
                  height="35"
                  src="~/assets/pictures/speaker.svg"
                  alt="contracts"
                />
                <p class="MenuTxt">فراخوان ها</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- menu popup -->
    <div v-if="DspMenu" class="HumbergerMenu">
      <div class="d-flex align-items-center justify-content-between px-4">
        <nuxt-link to="/info/aboutus">
          <p class="text-white pt-4">درباره ما</p>
        </nuxt-link>
        <img
          class="CloseWidth"
          src="~/assets/pictures/CloseMenu.png"
          @click="CloseMenu"
        />
      </div>
      <nuxt-link to="/notifications">
        <p class="text-white pt-2 pe-4">اطلاعيه ها</p>
      </nuxt-link>
      <nuxt-link to="/info/aboutapp">
        <p class="text-white pt-2 pe-4">درباره نرم افزار</p>
      </nuxt-link>
      <!-- exit button -->
      <div class="text-center mt-4">
        <button @click="SignOut">خروج از برنامه</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "footer",
  /* check if User is not authenticated */
  data() {
    return {
      DspMenu: false,
    };
  },
  methods: {
    ...mapActions(["SignOutUser", "GetCustomerInfo", "GetCustomerProductInfo"]),

    SignOut() {
      this.SignOutUser();
      /* navigate user to login */
      this.$router.push("/");
    },

    OpenMenu() {
      this.DspMenu = true;
    },
    CloseMenu() {
      this.DspMenu = false;
    },
  },
  created() {
    this.GetCustomerProductInfo({
      token: this.$cookiz.get("jwt-token"),
    });
  },
  middleware({ redirect, app }) {
    if (!app.$cookiz.get("jwt-token")) {
      redirect("/");
    }
  },
};
</script>

<style scoped>
button {
  font-weight: bold;
  font-size: 9pt;
  background-color: transparent;
  border: 2px solid #ff4e6a;
  color: #fff;
  border-radius: 20px;
  padding: 8px 40px;
}

.MenuTxt {
  color: black;
  font-size: 10pt;
}

.AcceptionTxt {
  color: black;
  font-size: 10pt;
}

/* Humburger menu */
.CloseWidth {
  width: 30px;
  cursor: pointer;
}

.HumbergerMenu {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 50%;
  z-index: 100;
  margin: 0 auto;
  max-width: 500px;
}

/* baner */
.MenuIcon {
  width: 40px;
  cursor: pointer;
}

.BanerBorder {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.BanerButton {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.HomePosition {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.ProfileTxt {
  color: black;
}

.ContentHeight {
  background-image: url("~/assets/pictures/background.jpg");
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
}

.ghost {
  height: 100px;
}

.IconBkg {
  background-color: #fff;
  border-radius: 10px;
}

/* Home section */
.HomeBkg {
  background-image: url("~/assets/pictures/HSecBkg.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 14vh;
}

/* HomeService Description section */
.HsPic {
  border: 1px solid #d3d3d3;
  border-radius: 16px;
  width: 70px;
}

.HsInfoBkg {
  background-color: #eaf3fe;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

/* HomeServiceTxt */
.HomeServiceTxt {
  color: #08050f;
  font-size: 15pt;
}

.HomeServiceDesc {
  font-size: 10pt;
}

/* Home Picture */
.HomePicBkg {
  background-image: url("~/assets/pictures/HomeServiceBaner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.ServiceTitle {
  padding-top: 100px;
}
</style>
