<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import '~/style/swiper.css'
import { Pagination, Mousewheel } from 'swiper'
import { CustomPageMeta, Maybe } from '~~/types'
import * as Sections from '~~/views/index/sections'

const sections = Object.values(Sections)

definePageMeta({
  layout: 'default',
  type: 'navigation',
  navigationOptions: {
    fixed: true,
  },
} as CustomPageMeta)

const modules = [Pagination, Mousewheel]

const innerHeight = ref(0)

onMounted(() => {
  innerHeight.value = window.innerHeight
  window.addEventListener('resize', handleWindowResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize)
})

function handleWindowResize() {
  innerHeight.value = window.innerHeight
}
</script>

<template>
  <div class="h-full text-white">
    <swiper
      wrapper-tag="main"
      class="w-full h-full"
      :height="innerHeight"
      :direction="'vertical'"
      :simulate-touch="false"
      :modules="modules"
      :mousewheel="(true as any)"
      :pagination="({
        clickable: true,
      } as any)"
    >
      <swiper-slide
        v-for="section in sections"
        v-slot="{ isActive }"
        class="h-full"
      >
        <component
          :is="section"
          v-bind="{
            isActive,
          }"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
