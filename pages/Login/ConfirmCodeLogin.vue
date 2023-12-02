<template>
  <section section class="ContentHeight">
    <!-- fardamotors logo -->
    <div class="container text-center">
      <img
        class="LogoWidth pt-5"
        src="~/assets/pictures/FardaLogo.png"
        alt="FardaLogo"
      />
      <p class="RegTxt pt-3 fw-bold">دريافت كد فعال سازي</p>
    </div>
    <!-- Login form -->
    <div class="container px-5 pt-5">
      <form @submit.prevent>
        <div class="form-outline">
          <input
            v-model="ConfirmCode"
            type="number"
            id="typeText"
            class="form-control"
          />
          <label class="form-label" for="typeText">كد تایید را وارد كنيد</label>
        </div>
      </form>
    </div>
    <!-- buttons container -->
    <div class="container px-5">
      <button
        @click="Login"
        type="button"
        class="py-3 BtnRegStyle btn btn-sm mt-4"
      >
        تایید کد
      </button>
    </div>
    <!-- message text -->
    <div v-if="DspMobileLoginSmsInfo" class="container px-5 pt-5">
      {{ DspMobileLoginSmsInfo.Message }}
    </div>
    <!-- register and login text -->
    <div class="container px-5 my-4 py-4">
      <p class="RegBotTxt">
        بازگشت به
        <nuxt-link to="/">
          <span class="EnterTxt">ثبت نام</span>
        </nuxt-link>
        یا
        <nuxt-link to="/login/mobilelogin">
          <span class="EnterTxt">ورود</span>
        </nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      ConfirmCode: "",
    };
  },
  computed: {
    ...mapGetters(["DspMobileLoginSmsInfo"]),
  },
  methods: {
    ...mapActions(["LoginByMobile"]),
    /* register user */
    Login() {
      if (this.DspMobileLoginSmsInfo.Data !== null) {
        this.LoginByMobile({
          mobile: this.DspMobileLoginSmsInfo.Data.Mobile,
          code: this.ConfirmCode,
        });
        /* Navigate to complete login */
        this.$router.push("/login/completemobilelogin");
      }
    },
  },
};
</script>

<style scoped>
/* enter button txt */
.RegBotTxt {
  font-weight: bold;
  font-size: 10pt;
  text-decoration: underline;
  text-decoration-color: #1266d0;
  text-underline-offset: 6px;
}

.EnterTxt {
  color: #1266d0;
}

/* btn style */
.BtnRegStyle {
  width: 100%;
  font-weight: 100;
  color: #fff;
  background-image: linear-gradient(#0569a3, #1964e8, #005dff);
  border-radius: 10px !important;
}

.BtnCancelStyle {
  width: 100%;
  font-weight: 100;
  color: #1266d0;
  background-color: #fafafa;
  border-radius: 10px !important;
  border: 1px solid #1266d0;
}

/* checkbox style */
input[type="checkbox"] {
  width: 23px !important;
  height: 23px !important;
  margin: 5px;
  border: none;
  font-size: 2em;
}

.form-check {
  margin-bottom: -0.2rem;
}

/* form style */
.form-label {
  font-size: 12pt;
}

.form-outline .form-control ~ .form-label {
  top: 8px;
  left: auto;
  right: 1rem;
  color: #403362;
  font-weight: bold;
  font-size: 10pt;
  transform-origin: top right;
}

.form-control:focus ~ .form-label {
  top: 0;
  background-color: #fafafa;
  padding-right: 10px;
  padding-left: 13px;
}

.form-outline .form-control {
  border: 1px solid #2b39ce59;
  border-radius: 8px;
  padding: 12px;
  background-color: #fafafa;
}

/* Register txt style */
.RegTxt {
  font-size: 13pt;
}

/* Low txt */
.TermsTxt {
  font-size: 10pt;
  font-weight: bold;
}

.BlueTermsTxt {
  color: #2b39ce;
  font-weight: bold;
  font-size: 10pt;
}

/* Logo Style */
.LogoWidth {
  width: 17%;
}

.ContentHeight {
  min-height: 100vh;
  background-color: #fafafa;
}

hr {
  color: #388dca !important;
  height: 2px !important;
  opacity: 1;
  width: 35%;
  margin: 0 auto;
}
</style>

