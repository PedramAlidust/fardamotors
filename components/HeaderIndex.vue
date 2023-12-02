<template>
    <div class="container-full MenuBkg py-3 d-flex align-items-center justify-content-between px-4">
      <div>
        <!-- 
      <nuxt-link to="/furtherinfo">
      </nuxt-link>
      -->
       <img @click="DspTheMenu" class="w-25 MenuIcon" src="~/assets/pictures/menu.png" >
      </div>
      <div v-if="this.DspMenu" class="DropDown text-start px-4 pt-2 text-white">
        <!-- Drop Down menu -->
         <nuxt-link to="/home">
           <p class="pt-2">خدمات</p>
         </nuxt-link>
         <nuxt-link to="/profile/furtherinfo">
           <p class="py-2">اطلاعات شخصي</p>
         </nuxt-link>
         <nuxt-link to="/profile/createpass" >
           <p>ثبت اسم رمز</p>
         </nuxt-link>
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
  methods: {
    DspTheMenu () {
      this.DspMenu = !this.DspMenu
    }, 
  }
}
</script>

<style scoped>

.MenuBkg {
  background: #0f3f63c9;
}

a {
  color: white !important;
}

.DropDown {
  position: absolute;
  top: 55px;
  right: 0;
  height: 100vh;
  width: 50%;
  background-color: #0f3f639d;
  z-index: 999;
}

.BtnStyle {
  background-color: #388dca !important;
}

.StepStyle {
  text-align: center;
  color: white;
  background-color: #bbbbbb;
}

p {
  margin: 0;
  padding: 0;
}

hr {
  color: #388dca !important;
  height: 2px !important;
  opacity: 1;
  width: 35%;
  margin: 0 auto;
}
</style>