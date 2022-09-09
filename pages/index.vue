<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import '~/style/swiper.css'
import { Pagination, Mousewheel } from 'swiper'
import { Swiper as SwiperInstance } from 'swiper'
import { useSlideStore } from '~~/store'
import { CustomPageMeta, Maybe } from '~~/types'
import { SwiperKey } from '~~/types/symbol'
import * as Sections from '~~/views/index/sections'
import { AnimationItem } from 'lottie-web'

const sections = Object.values(Sections)

definePageMeta({
  title: '首页',
  type: 'navigation',
  key: 0,
} as CustomPageMeta)

const modules = [Pagination, Mousewheel]

const swiperInstance = shallowRef<Maybe<SwiperInstance>>(null)

provide(SwiperKey, swiperInstance)

const slideStore = useSlideStore()
const patchSlideStore = (value: typeof slideStore['$state']) =>
  slideStore.$patch(value)

function handleSlideChangeStart(swiper: SwiperInstance) {
  const activeIndex = swiper.activeIndex
  if (activeIndex > 0) {
    slideStore.changeNavigationStyle('negative')
  } else {
    slideStore.changeNavigationStyle('primary')
  }
}

function handleSectionLottieLoaded(animation: AnimationItem) {
  console.log(animation)
}
</script>

<template>
  <div class="h-screen text-white">
    <swiper
      wrapper-tag="main"
      @slide-change-transition-start="handleSlideChangeStart"
      class="h-full w-full"
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
      >
        <component :is="section" v-bind="{
          isActive
        }" />
      </swiper-slide>
    </swiper>
  </div>
</template>
