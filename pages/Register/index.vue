<template>
  <section section class="ContentHeight">
    <!-- fardamotors logo -->
    <div class="container text-center">
      <img class="LogoWidth pt-5" src="~/assets/pictures/FardaLogo.png" alt="FardaLogo" />
      <p class="RegTxt pt-3 fw-bold">ثبت نام</p>
    </div>
    <!-- Register form -->
    <div class="container px-5 pt-5">
      <form @submit.prevent>
          <input class="form-control" placeholder="شماره موبايل" v-model="MobileNumber" type="number" id="typeText"/>
          <input v-model="ConfirmCode" v-if="SmsRes.ResultStatus == '200'" class="form-control mt-3" placeholder="كد تاييد را وارد كنيد"  type="text" id="typeText"/>
      </form>
      <!-- success res -->
      <div class="mt-5" v-if="SmsRes.ResultStatus == '200'">
            {{ SmsRes.Message }}
      </div>
      <!-- error res  -->
      <div class="mt-5" v-if="SmsRes.ResultStatus == '500'">
            {{ SmsRes.Message }}
      </div>
      <!-- success Register -->
      <div class="mt-2" v-if="RegisterRes.ResultStatus == '200'">
            {{ RegisterRes.Message }}
      </div>
      <!-- error Register -->
      <div class="mt-2" v-if="RegisterRes.ResultStatus == '500'">
        <div class="d-flex">
            {{ RegisterRes.Message }}
            <p @click="ResetPage" class="px-2 text-primary">
               امتحان دوباره     
            </p>
        </div>
      </div>
    </div>
    <!-- buttons container -->
    <div class="container px-5">
      <button v-if="DspRegister" @click="Register" type="button" class="py-3 BtnRegStyle mt-5 btn">
        ثبت نام
      </button>
      <button v-if="SmsRes.ResultStatus == '200'" @click="RegisterUser" type="button" class="py-3 BtnRegStyle mt-5 btn">
       تاييد كد
      </button>
      <button v-if="SmsRes.ResultStatus == '500'" @click="Register" type="button" class="py-3 BtnRegStyle mt-5 btn">
       ارسال مجدد
      </button>
      <nuxt-link to="/login/codelogin">
        <button type="button" class="py-3 BtnCancelStyle mt-3 btn">
          ورود با رمز
        </button>
      </nuxt-link>
    </div>
    <!-- register text -->
    <div class="container px-5 py-5 py-4">
      <!-- Dsp texts in two columns -->
      <div class="d-flex align-items-center justify-content-between">
        <!-- first -->
        <div>
            <p class="RegBotTxt">
              اگر عضو نيستيد؟
            <nuxt-link to="/register">
              <span class="EnterTxt"> ثبت نام كنيد.</span>
            </nuxt-link>
           </p>
        </div>
        <!-- second -->
        <a href="tel:02148641919">
        <div class="d-flex align-items-center">
          <p class="SupportTxt">پشتيباني</p>
          <img class="mx-1 CallImg" src="~/assets/pictures/SupportCall.png">
        </div> 
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      MobileNumber: "",
      ConfirmCode: "",
      DspRegister: true,
      SmsRes: {}, 
      RegisterRes: {}
    };
  },
  methods: {
   async Register() {
      /* request config */
      var ReqConfig = {
        method: "get",
        url: `${process.env.UrlApi}/IsRegisterUser?mobile=${this.MobileNumber}`,
        headers: {
          "Content-Type": "application/json",
        },
      };
      /* request section */
      await this.$axios(ReqConfig)
        .then((response) => {
          this.SmsRes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
        /* hide Register */
        this.DspRegister = false;
    },
    async RegisterUser() {
          /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/RegisterUser?mobile=${this.MobileNumber}&code=${this.ConfirmCode}`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            this.RegisterRes = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
        /* Remove Old JWT Cookie */
        if (this.RegisterRes.Data) {
          this.$cookiz.remove("jwt-token");
        }
        /* Set New Register Cookie */
        this.$cookiz.set("jwt-token", this.RegisterRes.Data);
        /* push to homepage if Register success*/
        if(this.RegisterRes.ResultStatus == '200') {
              this.$router.push("/home");
          }
    },
    ResetPage() {    
      this.DspRegister = true
      this.ConfirmCode = ''
      this.SmsRes = {}
      this.RegisterRes = {}
    },
  },
};
</script>

<style scoped>

p {
  margin: 0;
}

.SupportTxt {
  color: black;
  font-weight: bold;
  font-size: 10pt;
}

.CallImg {
  width: 20px;
}

/* general */
.form-control {
  border: 1px solid #2b39ce59;
  border-radius: 8px;
  padding: 12px;
  background-color: #fafafa;
  box-shadow: none;
}

input::placeholder {
  color: #212529 !important;
  font-weight: bold;
  font-size: 10pt;
}

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
  margin-top: 60px !important;
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


