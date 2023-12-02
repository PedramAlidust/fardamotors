import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c2c93be = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "pages/Home" */))
const _770f1f5c = () => interopDefault(import('../pages/Notifications/index.vue' /* webpackChunkName: "pages/Notifications/index" */))
const _54aa0d9d = () => interopDefault(import('../pages/Profile/index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _5bfb1794 = () => interopDefault(import('../pages/Recalls/index.vue' /* webpackChunkName: "pages/Recalls/index" */))
const _702d0d05 = () => interopDefault(import('../pages/Register/index.vue' /* webpackChunkName: "pages/Register/index" */))
const _d8a62a9c = () => interopDefault(import('../pages/theContracts/index.vue' /* webpackChunkName: "pages/theContracts/index" */))
const _cb5cf034 = () => interopDefault(import('../pages/Info/AboutApp.vue' /* webpackChunkName: "pages/Info/AboutApp" */))
const _79bd44e9 = () => interopDefault(import('../pages/Info/AboutUs.vue' /* webpackChunkName: "pages/Info/AboutUs" */))
const _6a9e1bd8 = () => interopDefault(import('../pages/Info/Dealers.vue' /* webpackChunkName: "pages/Info/Dealers" */))
const _7eedf3e7 = () => interopDefault(import('../pages/Login/codelogin.vue' /* webpackChunkName: "pages/Login/codelogin" */))
const _b45e737e = () => interopDefault(import('../pages/Login/ConfirmCodeLogin.vue' /* webpackChunkName: "pages/Login/ConfirmCodeLogin" */))
const _6b5b9544 = () => interopDefault(import('../pages/Login/ConfirmSms.vue' /* webpackChunkName: "pages/Login/ConfirmSms" */))
const _1feb6d46 = () => interopDefault(import('../pages/map/themap.vue' /* webpackChunkName: "pages/map/themap" */))
const _77dab946 = () => interopDefault(import('../pages/Profile/FurtherInfo.vue' /* webpackChunkName: "pages/Profile/FurtherInfo" */))
const _ad623960 = () => interopDefault(import('../pages/Profile/MyCars.vue' /* webpackChunkName: "pages/Profile/MyCars" */))
const _98d72542 = () => interopDefault(import('../pages/Profile/MyInfo.vue' /* webpackChunkName: "pages/Profile/MyInfo" */))
const _d7d54080 = () => interopDefault(import('../pages/Profile/Password.vue' /* webpackChunkName: "pages/Profile/Password" */))
const _9361758c = () => interopDefault(import('../pages/Profile/Support.vue' /* webpackChunkName: "pages/Profile/Support" */))
const _09e655b1 = () => interopDefault(import('../pages/ServiceStatus/HomeServiceStatus.vue' /* webpackChunkName: "pages/ServiceStatus/HomeServiceStatus" */))
const _3c693a97 = () => interopDefault(import('../pages/ServiceStatus/ReserveStatus.vue' /* webpackChunkName: "pages/ServiceStatus/ReserveStatus" */))
const _06d0c6e5 = () => interopDefault(import('../pages/TheReports/Acceptions.vue' /* webpackChunkName: "pages/TheReports/Acceptions" */))
const _7447977a = () => interopDefault(import('../pages/TheReports/OcasionalService.vue' /* webpackChunkName: "pages/TheReports/OcasionalService" */))
const _fc3a73b0 = () => interopDefault(import('../pages/TheServices/assist.vue' /* webpackChunkName: "pages/TheServices/assist" */))
const _78289307 = () => interopDefault(import('../pages/TheServices/HomeService.vue' /* webpackChunkName: "pages/TheServices/HomeService" */))
const _9733132c = () => interopDefault(import('../pages/TheServices/TheReserve.vue' /* webpackChunkName: "pages/TheServices/TheReserve" */))
const _339df0ba = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/app/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Home",
    component: _7c2c93be,
    name: "Home"
  }, {
    path: "/Notifications",
    component: _770f1f5c,
    name: "Notifications"
  }, {
    path: "/Profile",
    component: _54aa0d9d,
    name: "Profile"
  }, {
    path: "/Recalls",
    component: _5bfb1794,
    name: "Recalls"
  }, {
    path: "/Register",
    component: _702d0d05,
    name: "Register"
  }, {
    path: "/theContracts",
    component: _d8a62a9c,
    name: "theContracts"
  }, {
    path: "/Info/AboutApp",
    component: _cb5cf034,
    name: "Info-AboutApp"
  }, {
    path: "/Info/AboutUs",
    component: _79bd44e9,
    name: "Info-AboutUs"
  }, {
    path: "/Info/Dealers",
    component: _6a9e1bd8,
    name: "Info-Dealers"
  }, {
    path: "/Login/codelogin",
    component: _7eedf3e7,
    name: "Login-codelogin"
  }, {
    path: "/Login/ConfirmCodeLogin",
    component: _b45e737e,
    name: "Login-ConfirmCodeLogin"
  }, {
    path: "/Login/ConfirmSms",
    component: _6b5b9544,
    name: "Login-ConfirmSms"
  }, {
    path: "/map/themap",
    component: _1feb6d46,
    name: "map-themap"
  }, {
    path: "/Profile/FurtherInfo",
    component: _77dab946,
    name: "Profile-FurtherInfo"
  }, {
    path: "/Profile/MyCars",
    component: _ad623960,
    name: "Profile-MyCars"
  }, {
    path: "/Profile/MyInfo",
    component: _98d72542,
    name: "Profile-MyInfo"
  }, {
    path: "/Profile/Password",
    component: _d7d54080,
    name: "Profile-Password"
  }, {
    path: "/Profile/Support",
    component: _9361758c,
    name: "Profile-Support"
  }, {
    path: "/ServiceStatus/HomeServiceStatus",
    component: _09e655b1,
    name: "ServiceStatus-HomeServiceStatus"
  }, {
    path: "/ServiceStatus/ReserveStatus",
    component: _3c693a97,
    name: "ServiceStatus-ReserveStatus"
  }, {
    path: "/TheReports/Acceptions",
    component: _06d0c6e5,
    name: "TheReports-Acceptions"
  }, {
    path: "/TheReports/OcasionalService",
    component: _7447977a,
    name: "TheReports-OcasionalService"
  }, {
    path: "/TheServices/assist",
    component: _fc3a73b0,
    name: "TheServices-assist"
  }, {
    path: "/TheServices/HomeService",
    component: _78289307,
    name: "TheServices-HomeService"
  }, {
    path: "/TheServices/TheReserve",
    component: _9733132c,
    name: "TheServices-TheReserve"
  }, {
    path: "/",
    component: _339df0ba,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
