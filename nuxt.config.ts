import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  css: ['~/style/index.css', '~/assets/icon/iconfont.css'],
  components: ['~/views', '~/components'],
  runtimeConfig: {
   
    secretKey: '',
    public: {
      siteKey: '',
      apiBase: process.env.API_BASE || '',
      apiToken: process.env.API_TOKEN || '',
    },
  },
  build: {
    transpile: ['vue-toastification'],
    target: 'server', //build打包用server，generate用static 默认 server

  },
})
