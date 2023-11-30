<script setup lang="ts">
import { useNavigationStore } from '~~/stores/navigation'
import { CustomPageMeta, Maybe, NavigationTheme } from '~~/types'
import FormOne from '~~/views/apply/FormOne.vue'
import FormTwo from '~~/views/apply/FormTwo.vue'

definePageMeta({
  title: '报名',
  layout: 'blank',
  navigationOptions: {
    fixed: false,
    sticky: true,
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
    introduction: `加入软件部的一般流程是：填写报名表 → 参加机试 → 参加面试 → 获得入部资格。在一切都没到来之前，先填个表吧！让我们认识一下你`,
  },
  'grade-two': {
    label: '大二',
    component: FormTwo,
    introduction: `经这条途径加入软件部的流程是：填写表格 → 得到面试通知→ 参加面试 → 得到面试结果 → 获得入部资格。那么下面请坐和放宽，认真填写下面这份表格吧`,
  },
}

const { $patch } = useNavigationStore()
const headerRef = ref<Maybe<HTMLElement>>(null)

let observer: Maybe<IntersectionObserver> = null
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      const { isIntersecting } = entry
      $patch({
        options: {
          theme: isIntersecting
            ? NavigationTheme.NEGATIVE
            : NavigationTheme.SECTION_PRIMARY,
        },
      })
    },
    { threshold: 0.1 }
  )
  if (headerRef.value) {
    observer.observe(headerRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

type TabKey = keyof typeof tabs

const activeTabKey = ref<TabKey>('grade-one')

function handleTabClick(key: TabKey) {
  activeTabKey.value = key
}
</script>

<template>
  <div
    class="relative bg-gray-200 flex flex-col items-center text-white pb-8 min-h-screen"
  >
    <Navigation />
    <div
      ref="headerRef"
      class="flex flex-col items-center bg-section-primary w-full pt-14 sm:pt-0"
    >
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
            <p>
              {{ tabs[activeTabKey].introduction }}&nbsp;<span
                class="whitespace-nowrap"
                >( •̀ ω •́ )✧</span
              >
            </p>
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

<style lang="postcss" scoped>
.tab {
  @apply flex-grow text-center py-2 sm:py-3 bg-black bg-opacity-40 rounded-t-lg text-sm cursor-pointer hover:bg-opacity-[0.3]  transition;
}

.tab.active {
  @apply bg-black bg-opacity-[0.25];
}
</style>
