<script setup lang="ts">
import { CustomPageMeta } from '~~/types'

const bgColor = ref('')
const withFooter = ref(true)

const route = useRoute()
watch(
  route,
  () => {
    const pageMeta: CustomPageMeta = route.meta
    const layoutOptions = pageMeta.layoutOptions
    bgColor.value = layoutOptions?.bgColor ? layoutOptions.bgColor : ''
    withFooter.value = layoutOptions?.withFooter
      ? layoutOptions.withFooter
      : true
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <div
    class="page-layout"
    :class="bgColor ? bgColor : ''"
  >
    <Navigation />
    <div class="container mx-auto px-4 pb-8 flex flex-col">
      <slot />
      <Footer />
    </div>
  </div>
</template>
