<script
  setup
  lang="ts"
>
import { DEFAULT_THEME } from './themes'
import { getThemeCSS } from './themes/utils'
import './style/index.css'

</script>

<template>

  <Head>
    <Style type="text/css" :children="`:root ${getThemeCSS(DEFAULT_THEME)}`" />
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
