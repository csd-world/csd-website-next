<template>
  <div class="h-screen">
    <swiper
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
        <p class="text-white">Slide 2</p>
      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
    </swiper>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import '~/style/swiper.css'
import { Pagination, Mousewheel } from 'swiper'
import { Swiper as SwiperInstance } from 'swiper'
import Section1 from '~~/views/index/Section1.vue'
import { useSlideStore } from '~~/store'

const modules = [Pagination, Mousewheel]

const slideStore = useSlideStore()
const patchSlideStore = (value: typeof slideStore['$state']) =>
  slideStore.$patch(value)

function handleSlideChangeStart(swiper: SwiperInstance) {
  patchSlideStore({
    activeIndex: swiper.activeIndex,
  })
}
</script>
