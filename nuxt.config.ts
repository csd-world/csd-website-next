import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/style/index.css', '~/assets/icon/iconfont.css'],
  autoImports: {
    dirs: ['views/**'],
  },
})
