import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      province: {},
      Cities: {},
      BookingType: {},
      BookingCapacities: {},
      MobileLoginSmsInfo: null,
      MobileLoginInfo: null,
      RegisterInfo: null,
      ConfirmCode: null,
      HomeServiceList: {},
      CustomerInfo: {},
      CustomerProductInfo: {},
      CarDealerpackagePartService: {},
      HomeServiceProvince: {},
      HomeServiceCity: {},
      HomeServiceZone: {},
      DealerCarDateFree: {},
      DealerCarTimeFree: {},
      InsertHomeServiceRes: {},
      ChangePassRes: {},
      SetNationalityRes: {},
      ClientLocation: {},
      RecalRes: {},
      ReserveRes: {},
      BookingList: {},
      Acceptions: {},
      OcasionalServices: {},
      AssistRes: {},
      UserInfoByQrRes: {}
    },
    mutations: {
      /* Mobile Login */
      async MobileLogin(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/CustomerLoginByMobile?mobile=${payload.mobile}&code=${payload.code}`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.MobileLoginInfo = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
        /* Remove Old JWT Cookie */
        if (state.MobileLoginInfo.Data) {
          this.$cookiz.remove("jwt-token");
        }
        /* Set New Login Cookie */
        this.$cookiz.set("jwt-token", state.MobileLoginInfo.Data, {
          maxAge: 60 * 60 * 24 * 7,
        });
      },

      /* sign out */
      SignOut() {
        this.$cookiz.remove("jwt-token", { maxAge: 1 });
        this.$cookiz.remove("vin", { maxAge: 1 });
        this.$cookiz.remove("jwt-token");
        this.$cookiz.remove("vin");
      },

      /* login by mobile */
      async MobileLoginSms(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/CustomerSendCodeForLoginByMobile?mobile=${payload.MobileNumber}`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.MobileLoginSmsInfo = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
        /* set cookie after login */
      },

      /* Confirm sms Code */
      async ConfirmCode(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/IsRegisterUser?mobile=${payload.MobileNumber}`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.ConfirmCode = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Register User */
      async Register(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/RegisterUser?mobile=${payload.mobile}&Code=${payload.code}`,
          headers: {
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.RegisterInfo = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
        /* Remove Old JWT Cookie */
        if (state.RegisterInfo.Data) {
          this.$cookiz.remove("jwt-token");
        }
        /* Set New Login Cookie */
        this.$cookiz.set("jwt-token", state.RegisterInfo.Data, {
          maxAge: 60 * 60 * 24 * 7,
        });
      },

      /* Get Province function */
      async Province(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetProvinceByCompanyId?companyId=${payload.CompanyId}`,
          headers: {
            Authorization: "Bearer " + payload.cookie,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.province = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get cities function */
      async Cities(state, payload) {
        /* empty last cities */
        state.Cities = {};
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetCityInfoByProvinceId?companyId=${payload.CompanyId}&provinceId=${payload.provinceId}`,
          headers: {
            Authorization: "Bearer " + payload.cookie,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.Cities = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get services function */
      async BookingType(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetBookingType?companyId=${payload.CompanyId}`,
          headers: {
            Authorization: "Bearer " + payload.cookie,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.BookingType = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get Booking Capacity */
      async BookingCapacity(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetBookingCapecityDealer?companyId=${process.env.CompanyId}&cityid=${payload.CityId}`,
          headers: {
            Authorization: "Bearer " + payload.cookie,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.BookingCapacities = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get HomeServices List */
      async HomeServiceList(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetListHomeService`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.HomeServiceList = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get CustomerInfo List */
      async CustomerInfo(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetCustomerInfo`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.CustomerInfo = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get Customer ProductInfo */
      async CustomerProductInfo(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetCustomerProductInfo`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.CustomerProductInfo = response.data;
          })
          .catch((error) => {
            console.log(error);
            if(error.response.status == 401) {
              this.$cookiz.remove("jwt-token")
              this.$router.push(`/login/codelogin`)
            }
          });
        /* Remove Old JWT Cookie */
        if (state.CustomerProductInfo.Data) {
          this.$cookiz.remove("vin");
        }
        /* Set New Login Cookie */
        this.$cookiz.set("vin", state.CustomerProductInfo.Data[0].VIN, {
          maxAge: 60 * 60 * 24 * 7,
        });
      },

      /* Car Dealer Package Services */
      async CarDealerPackageServices(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetCarDealerpackagePartService?ProductSerialId=${payload.ProductSerialId}&Receptionmillage=${payload.Receptionmillage}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.CarDealerpackagePartService = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* HomeServiceProvince */
      async HomeServiceProvince(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetHomeServiceProvince?companyId=${process.env.CompanyId}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.HomeServiceProvince = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get HomeService city */
      async HomeServiceCity(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetHomeServiceCity?companyId=${process.env.CompanyId}&ProvinceId=${payload.ProvinceId}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.HomeServiceCity = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get HomeService zone */
      async HomeServiceZone(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetHomeServiceZone?companyId=${process.env.CompanyId}&cityid=${payload.CityId}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.HomeServiceZone = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get DealerCarDate Free */
      async HomeServiceDateFree(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetCarDealerDateFree?companyId=${process.env.CompanyId}&zonid=${payload.ZoneId}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.DealerCarDateFree = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /*Get DealerCarTime Free */
      async HomeServiceTimeFree(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetCarDealerTimeFree?companyId=${process.env.CompanyId}&zonid=${payload.ZoneId}&dateId=${payload.DateID}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.DealerCarTimeFree = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Insert HomeService */
      async HomeService(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "post",
          url: `${process.env.UrlApi}/InsertHomeService?companyId=${process.env.CompanyId}&productSerialId=${payload.productSerialId}&zoneid=${payload.zoneid}&HomeServiceScheduleDateId=${payload.HomeServiceScheduleDateId}&HomeServiceScheduleTimeId=${payload.HomeServiceScheduleTimeId}&PackagePartServiceId=${payload.PackagePartServiceId}&mileagedelivery=${payload.mileagedelivery}&deliverername=${payload.deliverername}&deliverermobile=${payload.deliverermobile}&deliverernationalId=${payload.deliverernationalId}&deliverersddress=${payload.deliverersddress}&latitudedelivereraddress=${payload.latitudedelivereraddress}&longitudedelivereraddress=${payload.longitudedelivereraddress}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.InsertHomeServiceRes = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Change pawsword */
      async ChangePassword(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "post",
          url: `${process.env.UrlApi}/CustomerChangePassword?password=${payload.password}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.ChangePassRes = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* CustomerNationality */
      async CustomerNationality(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetCustomerInfoByNationalityId?nationalityId=${payload.nationalityId}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.ChangePassRes = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Get Recals */
      async Recals(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/api/Recall?vin=${payload.vin}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.RecalRes = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Reserve */
      async Reserve(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "post",
          url: `${process.env.UrlApi}/InsertReservBooking?CompanyId=${process.env.CompanyId}&DealerId=${payload.DealerId}&BookingCapacityPortTypeId=${payload.BookingCapacityPortTypeId}&CustomerName=${payload.CustomerName}&CustomerFamily=${payload.CustomerFamily}&VIN=${payload.VIN}&NationalityID=${payload.NationalityID}&LawTypeId=${payload.LawTypeId}&MobileNo=${payload.MobileNo}&BookingTypeId=${payload.BookingTypeId}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.ReserveRes = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Booking List */
      async BookingList(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/api/ReceptionBookingController/GetBookingList`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.BookingList = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Acceptions */
      async Acceptions(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetReceptionList?productSerialId=${payload.productSerialId}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.Acceptions = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* OcasionalServices */
      async OcasionalServices(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/GetPeriodicServiceList?productSerialId=${payload.productSerialId}`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.OcasionalServices = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* assist */
      async assist(state, payload) {
        /* request data */
        var data = JSON.stringify({
            CompanyId: process.env.CompanyId,
            ProductSerialId: payload.ProductSerialId,
            Caller: payload.Caller,
            CallerMobile: payload.CallerMobile, 
            KilometersOperation: payload.KilometersOperation,
            CityId: payload.CityId,
            Address: payload.Address,
            CallerDescription: payload.CallerDescription,
            latitudeCallerAddress: payload.latitudeCallerAddress, 
            longitudeCallerAddress: payload.longitudeCallerAddress,
        })
        /* request config */
        var ReqConfig = {
          method: "post",
          url: `${process.env.UrlApi}api/Relief/InsertRelif`,
          headers: {
            Authorization: "Bearer " + payload.token,
            "Content-Type": "application/json",
          },
          data: data
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.AssistRes = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* UserInfoByQr Request */
      async UserInfoByQr(state, payload) {

        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}api/HomeServiceUserEncryptController/userEncrypt?userEncrypt=${payload.userEncrypt}`,
          headers: {
            "Content-Type": "application/json",
          },
        }
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {

            state.UserInfoByQrRes = response.data;

            if(state.UserInfoByQrRes.ResultStatus == '200') {
              /* Remove Old JWT Cookie */
              this.$cookiz.remove("jwt-token"), {maxAge: 60 * 60 * 24 * 7};
              
              /* Set New Login Cookie */
              this.$cookiz.set("jwt-token", state.UserInfoByQrRes.Data);

              /* push to home page */
              this.$router.push("/home");

            } 
          })
          .catch((error) => {
            console.log(error);
          });

      },

      /* Client Location */
      ClientLocation(state, payload) {
        state.ClientLocation = payload.location;
      },

      /* ClearHomeServiceInfo */
      ClearHomeserviceStatus(state) {
        state.InsertHomeServiceRes = {};
      },

      /* ClearHomeServiceInfo */
      ClearReserveRes(state) {
        state.ReserveRes = {};
      },

      ClearAssistRes(state) {
        state.AssistRes = {};
      }, 

      /* ClearChangePassStatus */
      ClearChangePassStatus(state) {
        state.ChangePassRes = {};
      },
    },
    actions: {
      /* Get cities */
      GetCities({ commit }, payload) {
        commit("Cities", payload);
      },
      /* Get Provnce */
      GetProvince({ commit }, payload) {
        commit("Province", payload);
      },
      /* Get Booking Type */
      GetBookingType({ commit }, payload) {
        commit("BookingType", payload);
      },
      /* Get token */
      RegisterUser({ commit }, payload) {
        commit("Register", payload);
      },
      /* Get Booking Capacity */
      GetBookingCapacity({ commit }, payload) {
        commit("BookingCapacity", payload);
      },
      /* Login By Mobile */
      LoginByMobile({ commit }, payload) {
        commit("MobileLogin", payload);
      },
      /* Get Confirm Code */
      GetConfirmCode({ commit }, payload) {
        commit("ConfirmCode", payload);
      },
      /* LoginByMobile */
      GetMobileLoginSms({ commit }, payload) {
        commit("MobileLoginSms", payload);
      },
      /* Sign Out User */
      SignOutUser({ commit }, payload) {
        commit("SignOut", payload);
      },
      /* Get HomeService List */
      GetHomeServiceList({ commit }, payload) {
        commit("HomeServiceList", payload);
      },
      /* Get Customer Info */
      GetCustomerInfo({ commit }, payload) {
        commit("CustomerInfo", payload);
      },
      /* Get Customer ProductInfo */
      GetCustomerProductInfo({ commit }, payload) {
        commit("CustomerProductInfo", payload);
      },
      /* Get CarDealerPackageServices */
      GetCarDealerPackageServices({ commit }, payload) {
        commit("CarDealerPackageServices", payload);
      },
      /* Get CarDealerPackageServices */
      GetHomeServiceProvince({ commit }, payload) {
        commit("HomeServiceProvince", payload);
      },
      /* Get HomeServiceCity */
      GetHomeServiceCity({ commit }, payload) {
        commit("HomeServiceCity", payload);
      },
      /* Get HomeServiceZone */
      GetHomeServiceZone({ commit }, payload) {
        commit("HomeServiceZone", payload);
      },
      /* GetHomeServiceDateFree */
      GetHomeServiceDateFree({ commit }, payload) {
        commit("HomeServiceDateFree", payload);
      },
      /* GetHomeServiceTimeFree */
      GetHomeServiceTimeFree({ commit }, payload) {
        commit("HomeServiceTimeFree", payload);
      },
      GetBookingList({ commit }, payload) {
        commit("BookingList", payload);
      },
      GetAcceptions({ commit }, payload) {
        commit("Acceptions", payload);
      },
      GetOcasionalServices({ commit }, payload) {
        commit("OcasionalServices", payload);
      },
       GetUserInfoByQr({ commit }, payload) {
        commit("UserInfoByQr", payload)    
      },
      /* Insert HomeService */
      InsertHomeService({ commit }, payload) {
        commit("HomeService", payload);
      },
      /* Insert reserve */
      InsertReserve({ commit }, payload) {
        commit("Reserve", payload);
      },
      /* Insert assist */
      InsertAssist({ commit }, payload) {
        commit("assist", payload);
      },
      /* Call ChangePassword */
      CallChangePassword({ commit }, payload) {
        commit("ChangePassword", payload);
      },
      /* GetRecalls */
      GetRecalls({ commit }, payload) {
        commit("Recals", payload);
      },
      /* Set CustomerNationality */
      SetCustomerNationality({ commit }, payload) {
        commit("CustomerNationality", payload);
      },
      /* Set Client Location */
      SetClientLocation({ commit }, payload) {
        commit("ClientLocation", payload);
      },
      /* set clear ClearHomeserviceStatus */
      SetClearHomeserviceStatus({ commit }, payload) {
        commit("ClearHomeserviceStatus", payload);
      },
      /* set clear Reservation status */
      SetClearReservationStatus({ commit }, payload) {
        commit("ClearReserveRes", payload);
      },
      /* set clear Reservation status */
      SetClearAssistStatus({ commit }, payload) {
        commit("ClearAssistRes", payload);
      },
      /* set clear ClearHomeserviceStatus */
      SetClearChangePassStatus({ commit }, payload) {
        commit("ClearChangePassStatus", payload);
      },
    },
    getters: {
      /* Dsp cities */
      DspCities(state) {
        return state.Cities;
      },
      /* Dsp Province */
      DspProvince(state) {
        return state.province;
      },
      /* Dsp Booking Type */
      DspBookingType(state) {
        return state.BookingType;
      },
      /* Dsp Booking Capacities */
      DspBookingCapacities(state) {
        return state.BookingCapacities;
      },
      /* Dsp Confirm Code */
      DspConfirmCode(state) {
        return state.ConfirmCode;
      },
      /* Dsp Token */
      DspRegisterInfo(state) {
        return state.RegisterInfo;
      },
      /* Dsp Sms MobileLogin Info */
      DspMobileLoginSmsInfo(state) {
        return state.MobileLoginSmsInfo;
      },
      /* Dsp MobileLogin Info */
      DspMobileLoginInfo(state) {
        return state.MobileLoginInfo;
      },
      /* Dsp HomeServiceList */
      DspHomeServiceList(state) {
        return state.HomeServiceList;
      },
      /* Dsp CustomerInfo */
      DspCustomerInfo(state) {
        return state.CustomerInfo;
      },
      /* Dsp CustomerProductInfo */
      DspCustomerProductInfo(state) {
        return state.CustomerProductInfo;
      },
      /* Dsp DealerPackageServices */
      DspCarDealerpackagePartService(state) {
        return state.CarDealerpackagePartService;
      },
      /* Dsp HomeServiceProvince */
      DspHomeServiceProvince(state) {
        return state.HomeServiceProvince;
      },
      /* Dsp HomeServiceCity */
      DspHomeServiceCity(state) {
        return state.HomeServiceCity;
      },
      /* Dsp HomeServiceZone */
      DspHomeServiceZone(state) {
        return state.HomeServiceZone;
      },
      /* Dsp HomeServiceDate Free */
      DspDealerCarDateFree(state) {
        return state.DealerCarDateFree;
      },
      /* Dsp HomeServiceTime Free */
      DspHomeServiceTimeFree(state) {
        return state.DealerCarTimeFree;
      },
      /* Dsp InsertHomeServiceRes */
      DspInsertHomeServiceRes(state) {
        return state.InsertHomeServiceRes;
      },
      /* Dsp Insert Assist */
      DspInsertAssist(state) {
        return state.AssistRes;
      },
      /* Dsp ChangePass Result  */
      DspChangePassRes(state) {
        return state.ChangePassRes;
      },
      /* Dsp SetNationalityRes */
      DspSetNationalityRes(state) {
        return state.SetNationalityRes;
      },
      /* Dsp Client Location */
      DspClientLocation(state) {
        return state.ClientLocation;
      },
      /* Dsp recals */
      DspRecals(state) {
        return state.RecalRes;
      },
      /* Dsp Reserves */
      DspReserve(state) {
        return state.ReserveRes;
      },
      DspBookingList(state) {
        return state.BookingList;
      },
      DspAcceptions(state) {
        return state.Acceptions;
      },
      DspOcasionalServices(state) {
        return state.OcasionalServices;
      },
      DspUserInfoByQr(state) {
        return state.UserInfoByQrRes
      }
    },
  });
};

export default createStore;
