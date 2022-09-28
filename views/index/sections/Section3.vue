<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps<{
  isActive: boolean
}>()

const { isActive } = toRefs(props)
const importFn = () => import('~/assets/json/creative.json')
</script>

<template>
  <SectionContainer class="bg-section-background">
    <div class="triangle triangle1"></div>
    <div class="triangle triangle2"></div>
    <div class="triangle triangle3"></div>
    <div class="triangle triangle4"></div>
    <div class="flex-1 relative sm:mt-12">
      <div
        class="pb-full"
        style="padding-bottom: 100%"
      >
        <div
          class="absolute h-full w-5/6 bg-yellow-50 rounded-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
        <SectionAnimation
          v-slot="{ bindRef }"
          :import-fn="importFn"
          :is-active="isActive"
        >
          <div
            class="absolute h-[140%] w-[140%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center"
            :ref="bindRef"
          >
          </div>
        </SectionAnimation>
      </div>
    </div>
    <HeroText
      class="mt-6 sm:mt-0"
      title="一群充满创造力的人"
      content="软件部汇聚了一群精通技术又充满创造力的人，他们在自己专注的方向上大放异彩。"
    />
  </SectionContainer>
</template>

<style scoped lang="postcss">
/* TODO refactor with scss */
.triangle1 {
  transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
  @apply p-1/10 top-[90%] right-[60%] sm:right-[4%] sm:top-[15%];
}

.triangle2 {
  transform: rotate(-105deg) skewX(-30deg) scale(1, 0.866);
  padding: 10%;
  @apply p-1/10 right-[46%] top-[101%] sm:right-[-12%] sm:top-[50%];
}

.triangle3 {
  transform: rotate(-105deg) skewX(-30deg) scale(1, 0.866);
  padding: 5%;
  @apply right-[88%] top-[-8%] sm:right-[98%] sm:top-[-13%];
}

.triangle4 {
  padding: 5%;
  transform: rotate(-45deg) skewX(-30deg) scale(1, 0.866);
  @apply right-[73%] top-[-10%] sm:right-[81%] sm:top-[-21%];
}
</style>
