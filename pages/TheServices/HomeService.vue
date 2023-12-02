<template>
  <section class="ContentHeight">
     <div class="container-full">
      <div class="bg-dark py-3">
        <div class="d-flex justify-content-between align-items-center px-5">
        <p class="text-white text-center">ثبت سرويس در محل</p>
        <img class="LogoWidth" src="~/assets/pictures/FardaLogoPages.png" alt="Logo">
        </div>
      </div>
    </div>
    <!-- content wraper -->
    <div style="min-height: 100vh" class="px-4 ">
      <!-- Home service forms -->
      <div class="container pt-4">
        <!-- Vin Number -->
        <select
          @change="SetProductSerialId"
          id="HomeService"
          class="form-select mt-4">
          <option>شماره شاسي</option>
          <option
            v-for="Pelak in DspCustomerProductInfo.Data"
            :key="Pelak.ProductSerialId"
            :value="Pelak.ProductSerialId">
            {{ Pelak.VIN }}
          </option>
        </select>
        <!-- Nationality Code -->
        <input
          @input="UpdatePackegesByKilumeter"
          v-model="mileagedelivery"
          placeholder="كيلومتر"
          type="tel"
          class="border mt-4 form-control"
          id="Kilumeter"
        />
        <!-- choose service -->
        <select
          @change="SetPackagePartServiceId($event)"
          id="ChooseService"
          class="form-select mt-4">
          <option>سرويس</option>
          <option
            v-for="ServicePackage in DspCarDealerpackagePartService.Data"
            :key="ServicePackage.PackagePartServiceId"
            :value="ServicePackage.PackagePartServiceId">
            {{ ServicePackage.Tittle }}
          </option>
        </select>
        <!-- Province -->
        <select
          @change="UpdateCity($event)"
          id="HomeService"
          class="form-select mt-4"
        >
          <option>استان</option>
          <option
            v-for="Province in DspHomeServiceProvince.Data"
            :key="Province.PackagePartServiceId"
            :value="Province.Id"
          >
            {{ Province.ProvinceName }}
          </option>
        </select>
        <!-- city -->
        <select @change="UpdateZone($event)" id="city" class="form-select mt-4">
          <option>شهر</option>
          <option
            v-for="City in DspHomeServiceCity.Data"
            :key="City.Id"
            :value="City.Id"
          >
            {{ City.CityName }}
          </option>
        </select>
        <!-- distric -->
        <select
          @change="StoreZoneId($event)"
          id="distric"
          class="form-select mt-4"
        >
          <option>منطقه</option>
          <option
            v-for="Zone in DspHomeServiceZone.Data"
            :key="Zone.ZoneId"
            :value="Zone.ZoneId"
          >
            {{ Zone.ZoneName }}
          </option>
        </select>
        <!-- Date -->
        <select @change="UpdateTime($event)" id="Date" class="form-select mt-4">
          <option>تاريخ</option>
          <option
            v-for="TheDate in DspDealerCarDateFree.Data"
            :key="TheDate.Id"
            :value="TheDate.Id"
          >
            {{ TheDate.FreeDate }}
          </option>
        </select>
        <!-- Time -->
        <select @change="GetTimeId($event)" id="Time" class="form-select mt-4">
          <option>ساعت</option>
          <option
            v-for="Time in DspHomeServiceTimeFree.Data"
            :key="Time.Id"
            :value="Time.Id"
          >
            {{ Time.FreeTime }}
          </option>
        </select>
        <!-- reserver -->
        <label class="Recever pt-3" for="reserver">تحويل دهنده:</label>
        <div class="d-flex">
          <div>
            <label for="me" class="Person px-2 mt-3">خودم</label>
            <input
              @click="UpdateMyInfo"
              id="me"
              v-model="who"
              type="radio"
              value="me"/>
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
            placeholder="آدرس"
            dir="rtl"
            class="border mt-3 form-control"
            id="Address"
            v-model="Address"
          />
          <div @click="DspTheMap" class="mt-4">
            <div class="d-flex align-items-center">
            <img class="MapStyle" title="انتخاب آدرس از روي نقشه" src="~/assets/pictures/MapIcon.png">
            <p class="MapTxt">انتخاب آدرس</p>
            </div>
          </div>
        </div>
        <!-- form for me info -->
        <div v-if="who == 'me'">
          <!-- other name -->
          <input
            disabled
            :placeholder="
              DspCustomerInfo.Data.CustomerName"
            type="text"
            class="mt-3 form-control"
            id="name"
          />
          <!-- other mobile -->
          <input
            disabled
            :placeholder="DspCustomerInfo.Data.Phone"
            type="tel"
            class="mt-3 form-control"
            id="mobile"
          />
          <!-- other mobile -->
          <input
            disabled
            :placeholder="DspCustomerInfo.Data.NationalityId"
            type="tel"
            class="mt-3 form-control"
            id="national"
          />
          <!-- Address -->
          <textarea
            :placeholder="DspCustomerInfo.Data.Address"
            dir="rtl"
            class="mt-3 form-control"
            id="Address"
            v-model="Address"
          />
          <div @click="DspTheMap" class="mt-4">
            <div class="d-flex align-items-center">
            <p class="MapTxt">انتخاب آدرس</p>
            <img class="MapStyle" title="انتخاب آدرس از روي نقشه" src="~/assets/pictures/MapIcon.png">
            </div>
          </div>
        </div>
      </div>
      <!-- terms and services text -->
      <div class="container">
        <div class="mt-3 TermsStyle overflow-auto mt-1">
          <div dir="rtl" class="TermsText py-3 px-3">
            <span class="TermsTitle">شرايط و قوانين</span>
            <p class="TermsTxt mt-2">
              مشتري محترم توجه به نكات زير مي‌تواند خدمت رساني ما به شما را
              موثر‌تر و پربارتر كند: 1- به علت محدوديت ظرفيت پذيرش اينترنتي،
              لازم است در زمان تعيين شده به تعميرگاه انتخاب شده مراجعه نماييد.
              حذف نمودن نوبت انتخاب شده يا عدم حضور در زمان مقرر، انتخاب بقيه
              مشتريان را با مشكل روبرو مي‌سازد. لذا خواهشمند است در زمان انتخاب
              شده مراجعه نماييد. انتخاب جديد، بعد از يك هفته از انتخاب قبلي ميسر
              خواهد بود. 2- قبل از تحويل خودرو به تعميرگاه، نسبت به خارج نمودن
              لوازم شخصي خود اقدام نماييد. 3- براي جلوگيري از مشكلات آتي،
              خواهشمند است هنگام تحويل خودرو به تعميرگاه و به منظور رويت بهتر،
              بدنه خودرو تميز و فاقد هرگونه آلودگي باشد تا امكان شناسايي ايرادات
              بدنه ميسر باشد. 4- براي اخذ خدمات گارانتي، همراه داشتن كارت
              گارانتي در هنگام تحويل خودرو الزامي است. در صورت عدم ارائه كارت
              گارانتي، كليه خدمات بصورت آزاد محاسبه خواهد شد. 5- ترخيص خودرو فقط
              در ازا ارائه برگ ترخيص به دارنده برگه انجام خواهد شد. لذا در حفظ و
              نگهداري اين برگه كوشا و هنگام ترخيص خودرو، ارائه آن الزامي
              مي‌باشد. 1-1- در ايام تعطيلات رسمي و جمعه ها نوبت دهي مسدود مي
              باشد . 2-1- در هنگام پذيرش ، پيش بيني هزينه خدمات تعميرگاهي ،‌
              قطعات و زمان تحويل به اطلاع مشتريان محترم خواهد رسيد كه حتماً اين
              اطلاعات را از ايشان كسب نماييد . 3-1- چنانچه نقص فني مربوط به
              موارد ايمني و احتمال خطر براي سرنشين باشد ( سيستم ترمز ، ايربگ ،
              ‌باك و سيستم سوخت رساني و . . . ) ، ضروري است ضمن تماس با عامليت و
              با هماهنگي پذيرشگر و كارشناس فني جهت چگونگي انتقال خودرو به عامليت
              اقدام نماييد . بديهي است ، در اين شرايط خودرو بدون اخذ نوبت پذيرش
              خواهد شد .
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
        <button
          @click="InsertService"
          type="button"
          class="py-3 BtnRegStyle mt-5 btn">
          ثبت درخواست
        </button>

          <!-- HomeService Success Alert -->
        <div v-if="DspInfo && DspInsertHomeServiceRes.ResultStatus == '200'" class="container alert alert-success ResultPopUp mt-4 shadow-lg text-center">
          <!-- message content -->
          <p class="text-center">{{ DspInsertHomeServiceRes.Message }}</p>
          <!-- End message content -->
          <button class="btn btn-sm btn-primary text-white mt-4 ViewStyle" @click="HideInfo">
            بستن
          </button>
        </div>
        <!-- HomeService Error Alert -->
          <div v-if="DspInfo && DspInsertHomeServiceRes.ResultStatus == '500'" class="container alert alert-success ResultPopUp mt-4 shadow-lg text-center">
          <!-- message content -->
          <p class="text-center">{{ DspInsertHomeServiceRes.Message }}</p>
          <!-- End message content -->
          <button class="btn btn-sm btn-primary text-white mt-4 ViewStyle" @click="HideInfo">
            بستن
          </button>
        </div>
        <!-- Loading Message -->
        <div v-if="
        DapLoading && ProvincId && 
        CityId && ZoneId && DateId &&
        TimeId && Address &&mileagedelivery && 
        productSerialId && PackagePartServiceId && Terms" class="Loading">
            <img class="LoadingGif" src="~/assets/pictures/Loading.gif" alt="Loading">
        </div> 
         <!-- Map PopUp -->
        <div :class="DspCondition" class="container">
          <div style="height: 60vh;">
          <button @click="CloseTheMap" class="CloseMapBtn">انتخاب و بستن</button>
            <div id="map" class="mapboxgl-map"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "footer",
  data() {
    return {
      DspInfo: true,
      DapLoading: false,
      DspMap: false,
      MapRtl: 0, 
      who: "",
      ProvincId: "",
      CityId: "",
      ZoneId: "",
      DateId: "",
      TimeId: "",
      Address: "",
      mileagedelivery: "",
      deliverername: "",
      deliverermobile: "",
      nationalId: "",
      productSerialId: "شماره شاسي",
      PackagePartServiceId: "سرويس",
      Terms: false,
      MarkerLng: 0,
      MarkerLat: 0,
    };
  },
  computed: {
    ...mapGetters([
      "DspCustomerInfo",
      "DspCustomerProductInfo",
      "DspCarDealerpackagePartService",
      "DspHomeServiceProvince",
      "DspHomeServiceCity",
      "DspHomeServiceZone",
      "DspDealerCarDateFree",
      "DspHomeServiceTimeFree",
      "InsertHomeServiceRes",
      "DspInsertHomeServiceRes",
    ]),
    DspCondition() {
        return this.DspMap ? 'DspMap' : 'HideMap';
    }
  },
  methods: {
    ...mapActions([
      "GetCustomerProductInfo",
      "GetCustomerInfo",
      "GetCarDealerPackageServices",
      "GetHomeServiceProvince",
      "GetHomeServiceCity",
      "GetHomeServiceZone",
      "GetHomeServiceDateFree",
      "GetHomeServiceTimeFree",
      "InsertHomeService",
      "SetClearHomeserviceStatus",
    ]),
    UpdateCity(event) {
      this.ProvincId = event.target.value;
      this.GetHomeServiceCity({
        token: this.$cookiz.get("jwt-token"),
        ProvinceId: this.ProvincId,
      });
    },
    UpdateZone(event) {
      this.CityId = event.target.value;
      this.GetHomeServiceZone({
        token: this.$cookiz.get("jwt-token"),
        CityId: this.CityId,
      });
    },
    StoreZoneId(event) {
      this.ZoneId = event.target.value;
      this.GetHomeServiceDateFree({
        token: this.$cookiz.get("jwt-token"),
        ZoneId: this.ZoneId,
      });
    },
    UpdateTime(event) {
      this.DateId = event.target.value;
      this.GetHomeServiceTimeFree({
        token: this.$cookiz.get("jwt-token"),
        DateID: this.DateId,
        ZoneId: this.ZoneId,
      });
    },
    GetTimeId(event) {
      this.TimeId = event.target.value;
    },
    UpdateMyInfo() {
      /* set userinfo */
      if (this.DspCustomerInfo) {
        this.deliverername = this.DspCustomerInfo.Data.CustomerName;
        this.deliverermobile = this.DspCustomerInfo.Data.Phone;
        this.nationalId = this.DspCustomerInfo.Data.NationalityId;
        this.Address = this.DspCustomerInfo.Data.Address;
      }
    },
    SetPackagePartServiceId(event) {
      this.PackagePartServiceId = event.target.value;
    },
    SetProductSerialId(event) {
        this.productSerialId = event.target.value;
        /* get car dealer package */
        this.GetCarDealerPackageServices({
          token: this.$cookiz.get("jwt-token"),
          ProductSerialId: this.productSerialId, 
          Receptionmillage: this.mileagedelivery
        });
    },
    UpdatePackegesByKilumeter() {
       /* get car dealer packages */
        this.GetCarDealerPackageServices({
          token: this.$cookiz.get("jwt-token"),
          ProductSerialId: this.productSerialId, 
          Receptionmillage: this.mileagedelivery
        });
    },
    InsertService() {
      /* check if input is not empty */
      if (
        this.ProvincId &&
        this.CityId &&
        this.ZoneId &&
        this.DateId &&
        this.TimeId &&
        this.Address &&
        this.mileagedelivery &&
        this.productSerialId &&
        this.PackagePartServiceId
      ) {
        if (this.Terms) {
          /* load loading */ 
          this.DapLoading = true,
          this.InsertHomeService({
            token: this.$cookiz.get("jwt-token"),
            productSerialId: this.productSerialId,
            zoneid: this.ZoneId,
            HomeServiceScheduleDateId: this.DateId,
            HomeServiceScheduleTimeId: this.TimeId,
            PackagePartServiceId: this.PackagePartServiceId,
            mileagedelivery: this.mileagedelivery,
            deliverername: this.deliverername,
            deliverermobile: this.deliverermobile,
            deliverernationalId: this.nationalId,
            deliverersddress: this.Address,
            latitudedelivereraddress: this.MarkerLng,
            longitudedelivereraddress: this.MarkerLat,
          });
        } else {
          alert("لطفا قوانين و شرايط را بپذيريد");
        }
      } else {
        alert("لطفا تمامي فيلد ها را پر كنيد");
      }
    },
    HideInfo() {
      this.DspInfo = false;
      this.SetClearHomeserviceStatus();
      this.$router.push("/servicestatus/homeservicestatus");
    },
    DspTheMap() {
      this.DspMap = true;
      // start mapbox
      mapboxgl.accessToken =
        "pk.eyJ1IjoicGVkcmFtYWxpZHVzdCIsImEiOiJja29hNHM4eDEwYWlsMzBveWNhaDlyenRqIn0.ftTSzZXEYdQ4ncFj2gObDA";
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [49.8152253, 33.4863121], // starting position [lng, lat]
        zoom: 5, // starting zoom
        projection: "globe", // display the map as a 3D globe
      });
      //Load geolocate
      var geolocate = new mapboxgl.GeolocateControl();
      map.on("style.load", () => {
        map.setFog({}); // Set the default atmosphere style
      });

       if(this.MapRtl == 0) {
       /* set mapbox rtl */
        mapboxgl.setRTLTextPlugin(
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
          );
        } 
      this.MapRtl = this.MapRtl + 1

      map.addControl(
        new MapboxLanguage({
          defaultLanguage: "fa",
        })
      );

      //creat marker instans
      var marker = new mapboxgl.Marker({draggable: true})

      // Add the control to the map.
      var SetMarkerCordinate = this.SetMarkerCordinate
      map.addControl(geolocate);
      geolocate.on('geolocate', function(e) {
        var lon = e.coords.longitude;
        var lat = e.coords.latitude;
        //* add marker to map */
        // Create a new marker.
        marker.setLngLat([lon, lat])
        .addTo(map);
      });

      var SetMarkerCordinate = this.SetMarkerCordinate;
      function onDragEnd() {
        const lngLat = marker.getLngLat();
        SetMarkerCordinate(lngLat);
      }
      marker.on("dragend", onDragEnd);

    },
    CloseTheMap() {
      this.DspMap = false;
    },
    SetMarkerCordinate(lngLat) {
      this.MarkerLng = lngLat.lng;
      this.MarkerLat = lngLat.lat;
    },
    ClearMyInfo() {
      this.deliverername = ""
      this.deliverermobile = ""
      this.nationalId = ""
      this.Address = ""

    }, 
  },
  created() {
    /* get customer info */
    this.GetCustomerInfo({
      token: this.$cookiz.get("jwt-token"),
    });
    /* get customer product info */
    this.GetCustomerProductInfo({
      token: this.$cookiz.get("jwt-token"),
    });
    /* get homeservice province */
    this.GetHomeServiceProvince({
      token: this.$cookiz.get("jwt-token"),
    });
  },
};
</script>

<style scoped>


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
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
}


.LogoWidth {
  width: 50px;
}

/* textarea  style*/
input#name {
  border: 1px solid rgba(43,57,206,.14902);
  padding-right: 0;
}

input#mobile {
  border: 1px solid rgba(43,57,206,.14902);
  padding-right: 0;
}

input#national {
  border: 1px solid rgba(43,57,206,.14902);
  padding-right: 0;
}

textarea#Address {
  border: 1px solid rgba(43,57,206,.14902);
}

input#national {
    border: 1px solid rgba(43,57,206,.14902);
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
}

.HideMap {
  display: none;
}

#map {
  width: 100%;
  height: 85%;
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
  z-index: 50;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
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