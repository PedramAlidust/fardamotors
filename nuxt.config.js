const pkg = require("./package");

export default {
  ssr: true,
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {rel: 'stylesheet', type: 'text/css', href: 'https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.css'},
      {rel: "https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css", body: true }, 
      {rel: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css", body: true }
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", body: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.js", body: true }, 
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3B8070" },

  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/style.css",
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    //Axios for requests
    "@nuxtjs/axios",

    //Cookies With options
    ["cookie-universal-nuxt", { alias: "cookiz" }],

    //make pwa
    '@nuxtjs/pwa',
  ],
  /*
   ** Build configuration
   */
   buildModules: [
    '@nuxtjs/pwa',
  ],

  /* run app in subdirectory  */     
  router: {      
    base: '/app/'
  },

  /* loading indicator */
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  
  /* Set envirement variable if needed */
  env: {
    UrlApi: "https://dmsapi.fardaco.com/",
    CompanyId: 3
  },

  /* pwa config */
  pwa: {
    manifest: {
      start_url: "https://service.fardaco.com/app/",
      "orientation": "portrait"
    },
  },
};
