<script
  setup
  lang="ts"
>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import '~/style/swiper.css'
import { Pagination, Mousewheel } from 'swiper'
import { Swiper as SwiperInstance } from 'swiper'
import { useSlideStore } from '~~/store'
import { CustomPageMeta, Maybe } from '~~/types'
import { SwiperKey } from '~~/types/symbol'
import Section1 from '~~/views/index/Section1.vue'
import Section2 from '../views/index/Section2.vue'

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
  patchSlideStore({
    activeIndex: swiper.activeIndex,
  })
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
      <swiper-slide>
        <Section1 />
      </swiper-slide>
      <swiper-slide>
        <Section2 />
      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
    </swiper>
  </div>
</template>

<style>
  .swiper-slide {
    @apply w-full grid place-content-center;
  }
</style>