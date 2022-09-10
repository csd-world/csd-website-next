<script setup lang="ts">
import { CustomPageMeta } from '~~/types'
import FormOne from '~~/views/apply/FormOne.vue'
import FormTwo from '~~/views/apply/FormTwo.vue'

definePageMeta({
  title: '报名',
  layout: 'blank',
  navigationOptions: {
    fixed: false,
    theme: 'negative',
    bgColor: 'bg-section-primary',
  },
  layoutOptions: {
    bgColor: 'bg-section-primary',
  },
} as CustomPageMeta)

const tabs = {
  'grade-one': {
    label: '大一',
    component: FormOne,
  },
  'grade-two': {
    label: '大二',
    component: FormTwo,
  },
}

type TabKey = keyof typeof tabs

const activeTabKey = ref<TabKey>('grade-two')

function handleTabClick(key: TabKey) {
  activeTabKey.value = key
}
</script>

<template>
  <div class="relative bg-gray-200 flex flex-col items-center text-white">
    <div class="flex flex-col items-center bg-section-primary w-full">
      <Navigation />
      <div class="container">
        <div class="w-full px-8 sm:px-0">
          <div class="flex">
            <div
              v-for="(tab, key) in tabs"
              :key="key"
              class="tab"
              :class="{ active: key === activeTabKey }"
              @click="handleTabClick(key)"
            >
              {{ tab.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-black bg-opacity-[0.25]">
        <div
          class="container mx-auto py-10 grid grid-cols-3 relative px-4 sm:px-0"
        >
          <div class="col-span-3 sm:col-span-2">
            <h3>加入软件部</h3>
            <p>test<span class="whitespace-nowrap">( •̀ ω •́ )✧</span></p>
          </div>
          <div class="sm:col-span-1 relative hidden sm:block">
            <img
              src="~/assets/svg/join.svg"
              class="absolute left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </div>
    <component :is="tabs[activeTabKey].component" />
    <div class="container px-4 sm:px-0">
      <Footer bg-style="bg-section-primary" />
    </div>
  </div>
</template>

<style lang="postcss">
body {
  @apply !bg-gray-200;
}
</style>

<style lang="postcss" scoped>
.tab {
  @apply flex-grow text-center py-2 sm:py-3 bg-black bg-opacity-40 rounded-t-lg text-sm cursor-pointer hover:bg-white hover:text-primary transition;
}

.tab.active {
  @apply bg-black bg-opacity-[0.25] hover:bg-white;
}
</style>
