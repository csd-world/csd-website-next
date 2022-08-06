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
import Section3 from '../views/index/Section3.vue'
import Section4 from '~~/views/index/Section4.vue'
import Section5 from '~~/views/index/Section5.vue'

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
  // patchSlideStore({
  //   activeIndex: swiper.activeIndex,
  //   navigationStyle: 'default'
  // })
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
      <swiper-slide>
        <Section3 />
      </swiper-slide>
      <swiper-slide><Section4 /></swiper-slide>
      <swiper-slide><Section5 /></swiper-slide>
    </swiper>
  </div>
</template>
