<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps<{
  isActive: boolean
}>()

const { isActive } = toRefs(props)
const importFn = () => import('~/assets/json/growth.json')
</script>

<template>
  <SectionContainer class="bg-section-background">
    <div
      class="absolute p-1/6 bg-white bg-opacity-20 rounded-full top-[-18%] sm:left-[-12%] sm:top-[-8%]"
    ></div>
    <div
      class="absolute p-1/4 bg-white bg-opacity-20 rounded-full left-[-23%] top-[-6%] sm:left-[-37%] sm:top-[20%]"
    />
    <div
      class="absolute p-1/12 bg-white bg-opacity-20 rounded-full left-[15%] top-[107%] sm:left-[20%] sm:top-[85%]"
    />
    <div
      class="absolute p-1/12 bg-white bg-opacity-20 rounded-full left-[25%] top-[110%] sm:left-[30%] sm:top-[100%]"
    />
    <HeroText
      title="你也可以成为技术达人"
      content="软件部每个方向都有相应的培养方案和学习资源，助你赢在大学生活的起跑线上。"
    />
    <div class="flex-1 relative mt-0 sm:mt-16">
      <div
        class="pb-full"
        style="padding-bottom: 100%"
      >
        <div
          class="absolute w-full h-4/6 bg-yellow-50 rounded-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
        <SectionAnimation
          :import-fn="importFn"
          v-slot="{ bindRef }"
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
  </SectionContainer>
</template>
