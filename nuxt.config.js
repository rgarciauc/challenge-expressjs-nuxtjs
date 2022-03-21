export default {
  /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
  target: 'server',

  /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
  head: {
    title: process.env.npm_package_name || 'Challenge project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Challenge expressjs nuxtjs' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp' }
    ]
  },
  googleFonts: {
    families: {
      Montserrat: [400, 700, 800]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },

  /*
     ** Global CSS
     */
  css: [
    // './public/styles/output.css'
  ],

  /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
  plugins: [],

  /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
  components: true,

  /*
     ** Nuxt.js dev-modules
     */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  /*
     ** Nuxt.js modules
     */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'http://localhost:3000' // Used as fallback if no runtime config is provided
  },
  /*
     ** Server Middleware
     */
  serverMiddleware: {
    '/api': '~/api'
  },

  /*
     ** For deployment you might want to edit host and port
     */
  // server: {
  //  port: 8000, // default: 3000
  //  host: '0.0.0.0' // default: localhost
  // },

  /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
  build: {
    postcss: {
      plugins: {
        // 'postcss-import': {},
        // tailwindcss: {},
        // autoprefixer: {}
      }
    }
  }
}
