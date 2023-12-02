<template>
  <section class="ContentHeight">
    <!-- page header -->
    <div class="container-full">
      <div class="bg-dark py-3">
        <div class="d-flex justify-content-between align-items-center px-5">
          <p class="text-white text-center">ثبت امداد</p>
          <img class="LogoWidth" src="~/assets/pictures/FardaLogoPages.png" alt="Logo" />
        </div>
      </div>
    </div>
    <!-- content wraper -->
    <div style="min-height: 100vh" class="px-4 pt-4">
      <!-- Home service forms -->
      <div class="container pt-4">
        <!-- Vin Number -->
        <select @change="SetProductSerialId" id="HomeService" class="form-select">
          <option>شماره شاسي</option>
          <option
            v-for="Pelak in DspCustomerProductInfo.Data"
            :key="Pelak.ProductSerialId"
            :value="Pelak.ProductSerialId"
          >
            {{ Pelak.VIN }}
          </option>
        </select>
        <!-- Kilometer -->
        <input
          v-model="mileagedelivery"
          placeholder="كيلومتر"
          type="tel"
          class="border mt-4 form-control"
          id="Kilumeter"
        />
        <!-- Province -->
        <select @change="UpdateCity" id="HomeService" class="form-select mt-4">
          <option>استان</option>
          <option
            v-for="Province in DspProvince.Data"
            :key="Province.Id"
            :value="Province.Id"
          >
            {{ Province.ProvinceName }}
          </option>
        </select>
        <!-- city -->
        <select @change="UpdateDealer" id="city" class="form-select mt-4">
          <option>شهر</option>
          <option v-for="City in DspCities.Data" :key="City.Id" :value="City.Id">
            {{ City.CityName }}
          </option>
        </select>
        <!-- reserver -->
        <label class="Recever pt-5" for="reserver">تحويل دهنده:</label>
        <div class="d-flex">
          <div>
            <label for="me" class="Person px-2 mt-3">خودم</label>
            <input @click="UpdateMyInfo" id="me" v-model="who" type="radio" value="me" />
          </div>
          <div @click="ClearMyInfo">
            <label for="other" class="Person px-2 mt-3">ديگران</label>
            <input id="other" v-model="who" type="radio" value="other" />
          </div>
        </div>
        <!-- form for others info -->
        <div v-if="who == 'other'">
          <!-- other name -->
          <input
            v-model="deliverername"
            placeholder="اسم"
            type="text"
            class="mt-3 form-control"
            id="name"
          />
          <!-- other mobile -->
          <input
            v-model="deliverermobile"
            placeholder="موبايل"
            type="tel"
            class="mt-3 form-control"
            id="mobile"
          />
          <!-- other mobile -->
          <input
            v-model="nationalId"
            placeholder="كد ملي"
            type="tel"
            class="mt-3 form-control"
            id="national"
          />
          <!-- Address -->
          <textarea
            v-model="Address"
            placeholder="آدرس"
            dir="rtl"
            class="border mt-3 form-control"
            id="Address"
          />
          <!-- Assist Description -->
          <textarea
            v-model="AssistDescription"
            placeholder="توضيحات امداد"
            dir="rtl"
            class="border mt-3 form-control"
            id="Address"
          />
        </div>
        <!-- form for me info -->
        <div v-if="who == 'me'">
          <!-- other name -->
          <input
            disabled
            v-model="deliverername"
            :placeholder="DspCustomerInfo.Data.CustomerName"
            type="text"
            class="mt-3 form-control"
            id="name"
          />
          <!-- other mobile -->
          <input
            disabled
            v-model="deliverermobile"
            :placeholder="DspCustomerInfo.Data.Phone"
            type="tel"
            class="mt-3 form-control"
            id="mobile"
          />
          <!-- other mobile -->
          <input
            disabled
            v-model="nationalId"
            :placeholder="DspCustomerInfo.Data.NationalityId"
            type="tel"
            class="mt-3 form-control"
            id="national"
          />
          <!-- Address -->
          <textarea
            placeholder="آدرس"
            dir="rtl"
            class="border mt-3 form-control"
            id="Address"
            v-model="Address"
          />
          <!-- Assist Description -->
          <textarea
            v-model="AssistDescription"
            placeholder="شرح خرابي"
            dir="rtl"
            class="border mt-3 form-control"
            id="Address"
          />
        </div>
      </div>
      <!-- terms and services text -->
      <div class="container">
        <div class="mt-3 TermsStyle overflow-auto mt-1">
          <div dir="rtl" class="TermsText py-3 px-3">
            <span class="TermsTitle">شرايط و قوانين</span>
            <p class="TermsTxt mt-2">
              مشتري محترم توجه به نكات زير مي‌تواند خدمت رساني ما به شما را موثر‌تر و
              پربارتر كند: 1- به علت محدوديت ظرفيت پذيرش اينترنتي، لازم است در زمان تعيين
              شده به تعميرگاه انتخاب شده مراجعه نماييد. حذف نمودن نوبت انتخاب شده يا عدم
              حضور در زمان مقرر، انتخاب بقيه مشتريان را با مشكل روبرو مي‌سازد. لذا
              خواهشمند است در زمان انتخاب شده مراجعه نماييد. انتخاب جديد، بعد از يك هفته
              از انتخاب قبلي ميسر خواهد بود. 2- قبل از تحويل خودرو به تعميرگاه، نسبت به
              خارج نمودن لوازم شخصي خود اقدام نماييد. 3- براي جلوگيري از مشكلات آتي،
              خواهشمند است هنگام تحويل خودرو به تعميرگاه و به منظور رويت بهتر، بدنه خودرو
              تميز و فاقد هرگونه آلودگي باشد تا امكان شناسايي ايرادات بدنه ميسر باشد. 4-
              براي اخذ خدمات گارانتي، همراه داشتن كارت گارانتي در هنگام تحويل خودرو الزامي
              است. در صورت عدم ارائه كارت گارانتي، كليه خدمات بصورت آزاد محاسبه خواهد شد.
              5- ترخيص خودرو فقط در ازا ارائه برگ ترخيص به دارنده برگه انجام خواهد شد. لذا
              در حفظ و نگهداري اين برگه كوشا و هنگام ترخيص خودرو، ارائه آن الزامي مي‌باشد.
              1-1- در ايام تعطيلات رسمي و جمعه ها نوبت دهي مسدود مي باشد . 2-1- در هنگام
              پذيرش ، پيش بيني هزينه خدمات تعميرگاهي ،‌ قطعات و زمان تحويل به اطلاع
              مشتريان محترم خواهد رسيد كه حتماً اين اطلاعات را از ايشان كسب نماييد . 3-1-
              چنانچه نقص فني مربوط به موارد ايمني و احتمال خطر براي سرنشين باشد ( سيستم
              ترمز ، ايربگ ، ‌باك و سيستم سوخت رساني و . . . ) ، ضروري است ضمن تماس با
              عامليت و با هماهنگي پذيرشگر و كارشناس فني جهت چگونگي انتقال خودرو به عامليت
              اقدام نماييد . بديهي است ، در اين شرايط خودرو بدون اخذ نوبت پذيرش خواهد شد .
            </p>
          </div>
        </div>
        <!-- form acception -->
        <div class="d-flex justify-content-start mt-3 align-items-center">
          <div>
            <input v-model="Terms" class="Box" id="condition" type="checkbox" />
          </div>
          <div>
            <label for="condition" class="AgreeTxt px-2"
              >شرايط و قوانين فوق را مي پذيرم</label
            >
          </div>
        </div>
        <!-- register request -->
        <button @click="InsertTheAssist" type="button" class="py-3 BtnRegStyle mt-5 btn">
          ثبت درخواست
        </button>
        <!-- HomeService Success Alert -->
        <div
          v-if="DspInfo && DspInsertAssist.ResultStatus == '200'"
          class="container alert alert-success ResultPopUp mt-4 shadow-lg text-center"
        >
          <!-- message content -->
          <p class="text-center">{{ DspInsertAssist.Message }}</p>
          <!-- End message content -->
          <button
            class="btn btn-sm btn-primary text-white mt-4 ViewStyle"
            @click="HideInfo"
          >
            بستن
          </button>
        </div>
        <!-- HomeService Error Alert -->
        <div
          v-if="DspInfo && DspInsertAssist.ResultStatus == '500'"
          class="container alert alert-success ResultPopUp mt-4 shadow-lg text-center"
        >
          <!-- message content -->
          <p class="text-center">{{ DspInsertAssist.Message }}</p>
          <!-- End message content -->
          <button
            class="btn btn-sm btn-primary text-white mt-4 ViewStyle"
            @click="HideInfo"
          >
            بستن
          </button>
        </div>
        <!-- Loading Message -->
        <div v-if="DapLoading" class="Loading">
          <img class="LoadingGif" src="~/assets/pictures/Loading.gif" alt="Loading" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "footer",
  data() {
    return {
      AssistDescription: "",
      Address: "",
      DspInfo: true,
      DapLoading: false,
      DealerDateId: "",
      who: "",
      ProvincId: "",
      CityId: "",
      ServiceTypeId: "",
      deliverername: "",
      deliverermobile: "",
      mileagedelivery: "",
      nationalId: "",
      DealerId: "",
      productSerialId: "شماره شاسي",
      PackagePartServiceId: "سرويس",
      Terms: false,
    };
  },
  computed: {
    ...mapGetters([
      "DspCustomerInfo",
      "DspCustomerProductInfo",
      "DspBookingType",
      "DspProvince",
      "DspCities",
      "DspBookingCapacities",
      "DspReserve",
      "DspInsertAssist",
    ]),
  },
  methods: {
    ...mapActions([
      "GetCustomerProductInfo",
      "GetCustomerInfo",
      "GetBookingType",
      "GetProvince",
      "GetCities",
      "GetBookingCapacity",
      "InsertAssist",
      "SetClearReservationStatus",
      "SetClearAssistStatus",
    ]),
    UpdateMyInfo() {
      /* set userinfo */
      if (this.DspCustomerInfo) {
        this.deliverername = this.DspCustomerInfo.Data.CustomerName;
        this.deliverermobile = this.DspCustomerInfo.Data.Phone;
        this.nationalId = this.DspCustomerInfo.Data.NationalityId;
        this.Address = this.DspCustomerInfo.Data.Address;
      }
    },
    InsertTheAssist() {
      /* check if all fields are filled */
      if (
        this.productSerialId &&
        this.deliverername &&
        this.deliverermobile &&
        this.mileagedelivery &&
        this.CityId &&
        this.Address &&
        this.AssistDescription
      ) {
        if (this.Terms) {
          /* Load loading */
          this.DapLoading = true;
          /* check if input is not empty */
          this.InsertAssist({
            token: this.$cookiz.get("jwt-token"),
            ProductSerialId: this.productSerialId,
            Caller: this.deliverername,
            CallerMobile: this.deliverermobile,
            KilometersOperation: this.mileagedelivery,
            CityId: this.CityId,
            Address: this.Address,
            CallerDescription: this.AssistDescription,
            latitudeCallerAddress: 0,
            longitudeCallerAddress: 0,
          });
        } else {
          alert("لطفا قوانين و شرايط را بپذيريد");
        }
      } else {
        alert("لطفا تمامي گزينه ها را پر كنيد");
      }
    },
    SetProductSerialId(event) {
      this.productSerialId = event.target.value;
    },
    SetServiceType(event) {
      this.ServiceTypeId = event.target.value;
    },
    UpdateDealer(event) {
      this.CityId = event.target.value;
      this.GetBookingCapacity({
        cookie: this.$cookiz.get("jwt-token"),
        CityId: this.CityId,
      });
    },
    UpdateCity(event) {
      this.ProvincId = event.target.value;
      this.GetCities({
        cookie: this.$cookiz.get("jwt-token"),
        provinceId: this.ProvincId,
        CompanyId: process.env.CompanyId,
      });
    },
    HideInfo() {
      this.DspInfo = false;
      this.SetClearAssistStatus();
      this.DspInfo = true;
      this.DapLoading = false;
    },
    ClearMyInfo() {
      this.deliverername = "";
      this.deliverermobile = "";
      this.nationalId = "";
      this.Address = "";
    },
    StoreDealerDateId(event) {
      this.DealerDateId = event.target.value;
    },
  },
  created() {
    /* get customer info */
    this.GetCustomerInfo({
      token: this.$cookiz.get("jwt-token"),
    });
    /* get province */
    this.GetProvince({
      cookie: this.$cookiz.get("jwt-token"),
      CompanyId: process.env.CompanyId,
    });
    /* get booking types */
    this.GetBookingType({
      cookie: this.$cookiz.get("jwt-token"),
      CompanyId: process.env.CompanyId,
    });
    /* get customer product info */
    this.GetCustomerProductInfo({
      token: this.$cookiz.get("jwt-token"),
    });
  },
};
</script>

<style scoped>
.LogoWidth {
  width: 50px;
}

.ErrorPodition {
  top: 40% !important;
  z-index: 50;
}

.LoadingGif {
  position: fixed;
  top: 40%;
  right: 50%;
}

.Loading {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

/* select section */
.TheStyle {
  outline: 0;
  font-size: 10pt;
  overflow: hidden;
  min-height: 35px;
  background: #fff;
  color: black;
  border: #2c343c;
  padding: 5px 3px 5px 10px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 10px;
}

/* choose txt */
.ChooseTxt {
  font-size: 10pt;
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

.TrackingCode {
  font-size: 10pt;
}

/* textarea  style*/
input#name {
  border: 1px solid rgba(43, 57, 206, 0.14902);
  padding-right: 0;
}

input#mobile {
  border: 1px solid rgba(43, 57, 206, 0.14902);
  padding-right: 0;
}

input#national {
  border: 1px solid rgba(43, 57, 206, 0.14902);
  padding-right: 0;
}

textarea#Address {
  border: 1px solid rgba(43, 57, 206, 0.14902);
}

input#national {
  border: 1px solid rgba(43, 57, 206, 0.14902);
}

/*end textarea style */

.MapTxt {
  cursor: pointer;
  font-size: 10pt;
}

.MapStyle {
  width: 50px;
  cursor: pointer;
}

.CloseBtn {
  width: 22px;
  cursor: pointer;
}

.ViewStyle {
  font-size: 10pt;
  cursor: pointer;
}

/* map section */
.DspMap {
  position: fixed;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
}

.HideMap {
  display: none;
}

#map {
  width: 100%;
  height: 100%;
}

.BtnMapStyle {
  font-size: 10pt;
  width: 100%;
  color: #fff;
  background-color: #1964e8;
  border-radius: 10px !important;
  border: none;
  padding: 5px 0px;
}

.CloseMapBtn {
  font-size: 10pt;
  width: 30%;
  color: #fff;
  background-color: #1964e8;
  border-radius: 5px !important;
  border: none;
  padding: 5px 0px;
}

/* insert message pupop */
.ResultPopUp {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  z-index: 50;
}

/* general */
.TermsTxt {
  font-size: 10pt;
}

.TermsTitle {
  color: #403362;
  font-weight: bold;
}

.Person {
  color: #403362;
  font-weight: bold;
  font-size: 9pt;
}

textarea {
  min-height: 80px;
  font-size: 10pt;
}

.ghost {
  height: 100px;
}

.TermsText {
  text-align: justify;
}

/* checkbox style */
input[type="checkbox"] {
  width: 20px !important;
  height: 20px !important;
  margin: 5px;
  font-size: 2em;
}

.AgreeTxt {
  color: #403362;
  font-weight: bold;
  font-size: 10pt;
}

.TermsText {
  font-size: 11pt;
}

.Recever {
  font-weight: bold;
  font-size: 10pt;
  color: #403362;
}

.form-control {
  border: 1px solid #2b39ce26;
  border-color: none;
  box-shadow: none;
  height: 50px;
  border-radius: 7px;
}

.form-control:focus {
  border-color: none;
  box-shadow: none;
  border: 1px solid #2b39ce26;
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

.BtnRegStyle {
  font-size: 10pt;
  width: 100%;
  color: #fff;
  background-image: linear-gradient(#0569a3, #1964e8, #005dff);
  border-radius: 10px !important;
}

input::placeholder {
  text-align: right;
  color: #403362;
  font-size: 10pt;
  font-weight: bold;
  padding-right: 20px;
}

textarea::placeholder {
  text-align: right;
  color: #403362;
  font-size: 10pt;
  font-weight: bold;
  padding-right: 10px;
}

.ContentHeight {
  background-image: url("~/assets/pictures/background.jpg");
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
}

.ReqTitle {
  font-size: 13pt;
  font-weight: bold;
  color: #043957;
}

.TermsStyle {
  height: 200px;
  background-color: #ffffff;
  border: 1px solid #2b39ce26;
  border-radius: 7px;
}

.TermsStyle::-webkit-scrollbar {
  width: 0 !important;
}
</style>
