<template>
  <div class="h-screen">
    <swiper class="h-full w-full" :direction="'vertical'" :simulate-touch="false" :modules="modules"
      :mousewheel="(true as any)" :pagination="({
        clickable: true,
      } as any)">
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
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import '../style/index.css'
import { Pagination, Mousewheel, EffectCube, EffectFade } from 'swiper'
import Section1 from '~~/views/index/Section1.vue'

const modules = ref([Pagination, Mousewheel, EffectCube, EffectFade])
</script>

<style lang="postcss">
.swiper-slide {
  @apply bg-primary-background;
}

.swiper-wrapper {
  transition-duration: 700ms !important;
  transition-timing-function: ease;
}

.swiper-pagination {
  @apply fixed right-2 bottom-1/2 z-20 translate-y-1/2 flex flex-col items-center space-y-1.5;
}

.swiper-pagination-bullet {
  @apply w-[16px] h-[16px] opacity-70 cursor-pointer grid place-content-center after:transition-all after:block after:w-[8px] after:h-[8px] after:bg-primary-background after:rounded-full;
}

.swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active) {
  @apply opacity-100 after:h-[12px] after:w-[12px];
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply opacity-100 after:h-[16px] after:w-[16px];
}
</style>
