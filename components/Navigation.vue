<script setup lang="ts">
import { ref } from 'vue'
import { Maybe } from '~~/types'
import { useNavigationStore } from '~~/stores/navigation'

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
    title: '报名',
    name: 'apply',
    path: '/apply',
  },
])

const navigation = ref<Maybe<HTMLElement>>(null)
defineExpose({ elRef: navigation })

const open = ref(false)

const { options } = useNavigationStore()
const { fixed, sticky, theme, bgColor } = toRefs(options)

</script>
<template>
  <div
    id="navigation"
    ref="navigation"
    :style="{
      '--color-navigation': `var(--color-${theme})`,
    }"
    class="py-4 sm:px-0 pr-5 w-full justify-end sm:justify-start flex z-[200] overflow-x-hidden"
    :class="{
      'fixed z-[200] sm:left-0': fixed,
      ' sm:self-stretch': !fixed,
      ' fixed top-0 sm:static sm:top-auto': sticky && !fixed,
      [bgColor ? `sm:${bgColor}` : '']: true,
      // sm:bg-section-primary
    }"
  >
    <div
      class="cursor-pointer sm:hidden relative z-[200]"
      @click="open = !open"
    >
      <!-- Menu Button Start -->
      <NavigationButton
        :active="open"
        class="text-navigation"
        :class="{
          'text-negative': open,
        }"
      />
      <!-- Menu Button End -->
    </div>
    <!-- Mobile Navigation Background Start -->
    <div
      @scroll.prevent=""
      class="inset-0 bg-primary h-0 transition-[height,opacity] opacity-0 sm:opacity-100 sm:h-auto sm:inset-auto sm:bg-transparent text-negative sm:text-navigation font-bold"
      :class="{
        '!h-full !opacity-100 overflow-hidden': open,
        'fixed sm:left-0': fixed,
        'fixed sm:static z-[100]': !fixed,
        [bgColor ? bgColor : '']: true,
      }"
    >
      <!-- Mobile Navigation Background End -->
      <div
        class="absolute top-1/2 transform -translate-y-1/2 w-screen text-shadow-md flex-col items-center space-y-12 hidden sm:flex sm:flex-row sm:space-y-0 sm:static sm:translate-y-0 sm:px-5"
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
          class="flex flex-col sm:flex-1 sm:flex-row sm:space-x-8 sm:justify-center space-y-4 sm:space-y-0"
        >
          <li v-for="item in items">
            <nuxt-link
              class="relative h-8 inline-block opacity-70 hover:opacity-100 whitespace-nowrap after:absolute after:-bottom-0.5 after:left-0 after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-navigation after:to-navigation after:bg-center after:bg-no-repeat after:bg-[length:0%_100%] hover:after:bg-[length:100%_100%] after:transition-all"
              :active-class="'!opacity-100'"
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
