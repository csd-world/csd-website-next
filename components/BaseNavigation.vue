<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import { useSlideStore } from '~~/store'
import { Maybe } from '~~/types'

const slideStore = useSlideStore()
const slideActiveIndex = computed(() => slideStore.$state.activeIndex)

const props = defineProps({
  fixed: {
    default: false,
    required: false,
  },
  color: {
    default: 'white',
    required: false,
  },
  hoverClasses: {
    default: ' hover:bg-black hover:bg-opacity-40',
    required: false,
  },
  currentClasses: {
    default: ' bg-black bg-opacity-30 hover:bg-opacity-40',
    required: false,
  },
})

const navigation = ref<Maybe<HTMLElement>>(null)
const open = ref(false)
const nav = ref(null)
const sticking = ref(false)
const items = [
  {
    title: '首页',
    name: 'index',
    path: '/',
  },
  {
    title: '方向',
    name: 'directions',
    path: '/directions',
  },
  {
    title: '朋友',
    name: 'friends',
    path: '/friends',
  },
  {
    title: '报名',
    name: 'apply',
    path: '/apply',
  },
]

let observer: Maybe<IntersectionObserver> = null

const router = useRouter()
const routeName = computed(() => router.currentRoute.value.name)
</script>
<template>
  <div
    class="flex items-center w-full p-6 fixed top-0 z-20 transition-colors duration-700"
    :class="{
      'text-primary': slideActiveIndex === 0,
      'text-white': slideActiveIndex !== 0,
    }"
  >
    <div class="flex-1 h-8">
      <Logo />
    </div>
    <ul class="flex space-x-8 font-bold">
      <nuxt-link
        class="opacity-70 hover:opacity-100"
        :key="item.name"
        v-for="item in items"
        :to="item.path"
      >
        <li>
          {{ item.title }}
        </li>
      </nuxt-link>
    </ul>
    <div class="grow"></div>
  </div>
</template>
