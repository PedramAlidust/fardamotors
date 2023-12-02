<template>
  <section class="ContentHeight">
    <div class="Content">
        <!-- Profile name section  -->
        <div class="d-flex align-items-center justify-content-between">
        <nuxt-link to="/home">  
        <img class="ArrowWidth me-3" src="~/assets/pictures/ArrowRight.png">
        </nuxt-link>
        <p class="Profile">پروفايل</p>
        <img class="Arrow" src="~/assets/pictures/ArrowRight.png">
        </div>
        <!-- the account title -->
        <p class="mt-4 me-3 ProfileTitle text-muted">حساب كاربري</p>
        <!-- Menu -->
        <!-- first item -->
        <div class="d-flex align-items-center justify-content-between mt-4">   
          <!-- Right Side -->  
                <nuxt-link to="/profile/myinfo">
                  <div class="d-flex me-3 align-items-center">
                    <img src="~/assets/pictures/user.svg">
                    <p class="fw-bold TextStyle px-2">اطلاعات شخصي</p>
                  </div>
                </nuxt-link>
          <!-- Left Side -->
              <nuxt-link to="/profile/myinfo">
                <div class="ms-3">
                <img src="~/assets/pictures/LeftArrow.svg">
                </div>
              </nuxt-link>
        </div>
        <!-- second item -->
        <div class="d-flex align-items-center justify-content-between pb-4 mt-4">   
          <!-- Right Side -->  
          <nuxt-link to="/profile/password">
             <div class="d-flex me-3 align-items-center">
                <img src="~/assets/pictures/lock.svg">
                <p class="fw-bold TextStyle px-2">تغيير اسم رمز</p>
              </div>
          </nuxt-link>            
          <!-- Left Side -->
          <nuxt-link to="/profile/password">
              <div class="ms-3">
                <img src="~/assets/pictures/LeftArrow.svg">
              </div>
          </nuxt-link>
        </div>
          <hr>
          <!-- Activity Title -->
        <p class="mt-2 me-3 ProfileTitle text-muted">فعاليت ها</p>
          <div class="d-flex align-items-center justify-content-between mt-4 pb-4">   
          <!-- Right Side -->  
         <nuxt-link to="/profile/mycars">
              <div class="d-flex me-3 align-items-center">
                <img src="~/assets/pictures/car.svg">
                <p class="fw-bold TextStyle px-2">خودروهاي من</p>
              </div>
          </nuxt-link>
          <!-- Left Side -->
          <nuxt-link to="/profile/mycars">
              <div class="ms-3">
                <img src="~/assets/pictures/LeftArrow.svg">
              </div>
          </nuxt-link>
        </div>
        <hr>
        <!-- support title -->
         <p class="mt-2 me-3 ProfileTitle text-muted">فردا موتورز</p>
          <div class="d-flex align-items-center justify-content-between mt-4 pb-5">   
          <!-- Right Side -->  
          <nuxt-link to="/profile/support">
              <div class="d-flex me-3 align-items-center">
                <img src="~/assets/pictures/support.svg">
                <p class="fw-bold TextStyle px-2">پشتيباني</p>
              </div>
          </nuxt-link>
          <!-- Left Side -->
          <nuxt-link to="/profile/support">
              <div class="ms-3">
                <img src="~/assets/pictures/LeftArrow.svg">
              </div>
          </nuxt-link>   
          </div>
          <div class="text-center mt-4">
            <nuxt-link to="/home">
                <button>بستن</button>
            </nuxt-link>
          </div>
    </div>
  </section>
</template>

<script>
import { mapActions} from "vuex";

export default {
  methods: {
  ...mapActions(["SignOutUser"]),
    SignOut() {
      this.SignOutUser()
      /* navigate user to login */
      this.$router.push("/");
    },
  }
};
</script>

<style scoped>

P {
  margin: 0;
}

button {
  font-weight: bold;
  font-size: 9pt;
  background-color: transparent;
  border: 2px solid #FF4E6A;
  color: #FF4E6A;
  border-radius: 20px;
  padding: 8px 40px;
}

hr {
  width: 90%;
  height: 20px;
  margin: 0 auto;
  border-top: 1px solid #a3a3a3;
}

.ProfileTitle {
  font-size: 10pt;
}

.TextStyle {
  color: #403362;
  font-size: 10pt;
}

/* arrow */
.Arrow {
    visibility: hidden;
}

.ArrowWidth {
    width: 27px;
}

/* Profile section */
.Profile {
    font-weight: bold;
    font-size: 12pt;
    color: #043957;
}

/* background and content section */
.Content {
    min-height: 100vh;
}

.ContentHeight {
  background-image: url("~/assets/pictures/background.jpg");
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 40px;
}
</style>