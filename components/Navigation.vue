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
    default: true,
    required: true,
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

console.log({ pages })
</script>
<template>
  <div
    id="navigation"
    ref="navigation"
    class="py-4 sm:pl-5 pr-5 sm:pr-0 w-full justify-end sm:justify-start flex z-[200]"
    :class="{
      'fixed z-[200] sm:left-0': fixed,
      ' sm:self-stretch': !fixed,
      ' sticky top-0 sm:static sm:top-auto': sticking && !fixed,
    }"
  >
    <div
      class="w-6 cursor-pointer sm:hidden relative z-[200]"
      @click="open = !open"
    >
      <!-- Menu Button Start -->
      <div
        class="bg-primary text-primary h-1 py-2 box-content bg-clip-content w-full relative opacity-100 before:block before:h-1 before:w-full before:absolute before:top-0 before:bg-current after:block after:h-1 after:w-full after:absolute after:bottom-0 after:bg-current before:transition-transform after:transition-transform transition-transform"
        :class="{
          ['before:translate-y-[8.5px] before:translate-x-0 before:rotate-45  ' +
          'after:translate-y-[-8.5px] after:translate-x-0 after:-rotate-45  ' +
          'bg-transparent !text-white z-10 opacity-100']: open,
          ['!bg-transparent']: open,
        }"
      />

      <!-- Menu Button End -->
    </div>
    <!-- Mobile Navigation Background Start -->
    <div
      class="inset-0 bg-primary h-0 transition-[height,opacity] opacity-0 sm:opacity-100 sm:h-auto sm:inset-auto sm:bg-transparent text-negative sm:text-primary font-bold"
      :class="{
        '!h-full !opacity-100': open,
        fixed: fixed,
        'fixed sm:static z-[100]': !fixed,
      }"
    >
      <!-- Mobile Navigation Background End -->
      <div
        class="absolute top-1/2 transform -translate-y-1/2 w-screen text-shadow-md flex-col items-center space-y-4 hidden sm:flex sm:flex-row sm:space-y-0 sm:static sm:translate-y-0"
        :class="{ '!flex': open }"
      >
        <div class="sm:flex-1 sm:h-8 flex items-center flex-col sm:flex-row">
          <Logo class="w-16" />
          <span class="sm:ml-4 mt-2 sm:mt-0 font-bold tracking-[0.25em]"
            >软件部</span
          >
        </div>
        <!-- Navigation Items Start -->
        <ul
          class="flex flex-col sm:flex-1 sm:flex-row sm:space-x-8 sm:justify-center"
        >
          <li
            v-for="item in items"
            class="relative h-8 inline-block opacity-70 hover:opacity-100 whitespace-nowrap"
            :class="{ 'opacity-100': routeName === item.name }"
          >
            <nuxt-link
              class="after:absolute after:-bottom-0.5 after:left-0 after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-primary after:to-primary after:bg-center after:bg-no-repeat after:bg-[length:0%_100%] hover:after:bg-[length:100%_100%] after:transition-all"
              :key="item.name"
              :to="item.path"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
        <!-- Navigation Items End -->
        <div class="grow"></div>
      </div>
    </div>
  </div>
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
