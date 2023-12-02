<template>
  <section section class="ContentHeight">
    <!-- fardamotors logo -->
    <div class="container text-center">
      <img class="LogoWidth pt-5" src="~/assets/pictures/FardaLogo.png" alt="FardaLogo" />

      <p class="RegTxt pt-3 fw-bold">ورود با اسم رمز</p>
    </div>
    <!-- Login form -->
    <div class="container px-5 pt-5">
      <form @submit.prevent>
          <input class="form-control" placeholder="شماره موبايل" v-model="MobileNumber" type="number" id="typeText"/>
          <input v-model="Password" class="form-control mt-3" placeholder="رمز خود را وارد كنيد"  type="password" id="typeText"/>
      </form>

      <!-- Loading status -->
      <div v-if="DspLoading" class="text-center mt-5">
        <img src="~/assets/pictures/Loading.gif" alt="Loading">
      </div>

      <!-- success login -->
      <div class="mt-2" v-if="LoginRes.ResultStatus == '200'">
            {{ LoginRes.Message }}
      </div>
      <!-- error login -->
      <div class="mt-2" v-if="LoginRes.ResultStatus == '500'">
        <div class="d-flex">
            {{ LoginRes.Message }}
            <p @click="ResetPage" class="px-2 text-primary">
               امتحان دوباره     
            </p>
        </div>
      </div>
    </div>
    <!-- buttons container -->
    <div class="container px-5">
      <button @click="LoginUser" type="button" class="py-3 BtnRegStyle mt-5 btn">
        ورود
      </button>
      <nuxt-link to="/">
        <button type="button" class="py-3 BtnCancelStyle mt-3 btn">
          ورود با موبايل
        </button>
      </nuxt-link>
    </div>
    <!-- register text -->
    <div class="container px-5 py-5">
      <!-- Dsp texts in two columns -->
      <div class="d-flex align-items-center justify-content-between pt-5">
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
      Password: "",
      DspLoading: false,
      LoginRes: {}
    };
  },
  methods: {
    async LoginUser() {
        /* Loading */
        this.DspLoading = true
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/CustomerLoginByPassword?mobile=${this.MobileNumber}&password=${this.Password}`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            this.DspLoading = false
            this.LoginRes = response.data;
          })
          .catch((error) => {
            this.DspLoading = false
            console.log(error);
          });
        /* Remove Old JWT Cookie */
        if (this.LoginRes.Data) {
          this.$cookiz.remove("jwt-token");
        }
        /* Set New Login Cookie */
        this.$cookiz.set("jwt-token", this.LoginRes.Data, {maxAge: 60 * 60 * 24 * 7});
        /* push to homepage if login success*/
        if(this.LoginRes.ResultStatus == '200') {
              this.$router.push("/home");
          }
    },
    ResetPage() {    
      this.DspLogin = true
      this.Password = ''
      this.LoginRes = {}
    },
  },
};
</script>

<style scoped>

p {
  margin: 0;
}

.CallImg {
  width: 20px;
}


.SupportTxt {
  color: black;
  font-weight: bold;
  font-size: 10pt;
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