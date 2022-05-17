<template>
  <div class="h-screen">
    <swiper
      @slide-change-transition-start="handleSlideChangeStart"
      @slide-change-transition-end="handleSlideChangeEnd"
      @active-index-change="handleActiveIndexChange"
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
import { ref, provide } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import '~/style/swiper.css'
import { Pagination, Mousewheel } from 'swiper'
import { Swiper as SwiperInstance } from 'swiper'
import Section1 from '~~/views/index/Section1.vue'

const modules = [Pagination, Mousewheel]

function handleSlideChangeStart(swiper: SwiperInstance) {
  console.log('slide change start', swiper.activeIndex)
}

function handleSlideChangeEnd(swiper: SwiperInstance) {
  console.log('slide change end', swiper.activeIndex)
}

function handleActiveIndexChange() {}
</script>
