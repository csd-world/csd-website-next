<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import { useSlideStore } from '~~/store'
import { Maybe } from '~~/types'

const slideStore = useSlideStore()
const slideActiveIndex = computed(() => slideStore.$state.activeIndex)

const items = shallowRef([
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
])

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
  <nav
    class="flex items-center w-full p-6 fixed top-0 z-20 transition-colors duration-700 _respontive_start_ inset-0 sm:inset-auto bg-primary sm:bg-transparent text-negative sm:text-current flex-col sm:flex-row"
    :class="
      +activeRoute.meta.key === 0 && slideActiveIndex === 0
        ? 'sm:text-primary'
        : 'text-negative'
    "
  >
    <div
      class="sm:flex-1 sm:h-8 flex items-center flex-col sm:flex-row mt-32 sm:mt-0"
    >
      <Logo class="w-16" />
      <span class="sm:ml-4 mt-2 sm:mt-0 font-bold tracking-[0.25em]"
        >软件部</span
      >
    </div>
    <ul
      class="flex mt-10 sm:mt-0 sm:space-x-8 space-y-8 font-bold flex-col sm:flex-row"
    >
      <nuxt-link
        v-for="route in pages"
        class="relative opacity-70 hover:opacity-100"
        :class="{ 'opacity-100': route.path === activeRoute.path }"
        :to="route.path"
      >
        <li
          class="after:absolute after:-bottom-2 after:left-0 after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-primary after:to-primary after:bg-center after:bg-no-repeat after:bg-[length:0%_100%] hover:after:bg-[length:100%_100%] after:transition-all"
        >
          {{ route.meta.title }}
        </li>
      </nuxt-link>
    </ul>
    <div class="grow hidden sm:block"></div>
    <span class="absolute top-4 right-4">
      <i class="gg-close" />
    </span>
  </nav>
</template>

<style>
.gg-close {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;
}

.gg-close::after,
.gg-close::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
  border-radius: 5px;
  top: 8px;
  left: 1px;
}

.gg-close::after {
  transform: rotate(-45deg);
}
</style>
