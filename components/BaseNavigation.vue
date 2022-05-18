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

let observer: Maybe<IntersectionObserver> = null

const router = useRouter()
const routeName = computed(() => router.currentRoute.value.name)

const pages = usePages('navigation')
const activeRoute = useActiveRoute()
</script>
<template>
  <div
    class="flex items-center w-full p-6 fixed top-0 z-20 transition-colors duration-700"
    :class="
      +activeRoute.meta.key === 0 && slideActiveIndex === 0
        ? 'text-primary'
        : 'text-negative'
    "
  >
    <div class="flex-1 h-8">
      <Logo />
    </div>
    <ul class="flex space-x-8 font-bold">
      <nuxt-link
        v-for="route in pages"
        class="opacity-70 hover:opacity-100"
        :class="{ 'opacity-100': route.path === activeRoute.path }"
        :to="route.path"
      >
        <li>
          {{ route.meta.title }}
        </li>
      </nuxt-link>
    </ul>
    <div class="grow"></div>
  </div>
</template>
