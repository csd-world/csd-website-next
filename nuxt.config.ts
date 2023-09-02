import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/style/index.css', '~/assets/icon/iconfont.css'],
  components: ['~/views', '~/components'],
  runtimeConfig: {
    apiBase: '',
    apiToken: '',
  },
  build: {
    transpile: ['vue-toastification'],
  },
})
