<script setup lang="ts">
import { getRandomTheme, getThemeCSS } from './themes/utils'
import './style/index.css'
import { ThemeKey } from '~/types/symbol'

const currentTheme = ref(getRandomTheme())
const themeStyleChildren = computed(() => `:root ${getThemeCSS(currentTheme.value)}`)

provide(ThemeKey, currentTheme)

const route = useRoute()
const title = computed(() => route.meta.title)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - 软件部`
      : '软件部 - 大学生创新创业综合实践基地'
  },
  htmlAttrs: {
    lang: 'zh',
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0',
    },
    {
      hid: 'description',
      name: 'description',
      content: '桂林电子科技大学创新创业综合实践基地软件部宣传及报名网站',
    },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Style
      type="text/css"
      :children="themeStyleChildren"
    />
    <Link rel="icon" />
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
