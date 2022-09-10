<script setup lang="ts">
import { CustomPageMeta } from '~~/types'

const bgColor = ref('')

const route = useRoute()
watch(
  route,
  () => {
    const pageMeta: CustomPageMeta = route.meta
    const layoutOptions = pageMeta.layoutOptions
    bgColor.value = layoutOptions?.bgColor ? layoutOptions.bgColor : ''
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
    <div class="container mx-auto px-4">
      <slot />
      <Footer />
    </div>
  </div>
</template>
