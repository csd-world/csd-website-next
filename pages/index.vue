<template>
  <div class="h-screen">
    <swiper
      class="h-full w-full"
      :direction="'vertical'"
      :simulate-touch="false"
      :modules="modules"
      :mousewheel="(true as any)"
      :pagination="({
        clickable: true,
      } as any)"
    >
      <swiper-slide><Section1 /></swiper-slide
      ><swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide
      ><swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide
      ><swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide
      ><swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import '../style/index.css'
import { Pagination, Mousewheel, EffectCube, EffectFade } from 'swiper'
import Section1 from '~~/views/index/Section1.vue'

const modules = ref([Pagination, Mousewheel, EffectCube, EffectFade])
</script>

<style>
  .swiper-wrapper {
    transition-duration: 700ms !important;
    transition-timing-function: ease;
  }
</style>