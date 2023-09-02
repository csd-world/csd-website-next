<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import '~/style/swiper.css'
import { Pagination, Mousewheel } from 'swiper'
import { CustomPageMeta, NavigationTheme } from '~~/types'
import * as Sections from '~~/views/index/sections'

const sections = Object.values(Sections)

definePageMeta({
  layout: 'default',
  type: 'navigation',
  navigationOptions: {
    fixed: true,
    theme: NavigationTheme.PRIMARY
  },
} as CustomPageMeta)

const modules = [Pagination, Mousewheel]
</script>

<template>
  <div class="h-full text-white">
    <swiper
      wrapper-tag="main"
      class="w-full h-full"
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
