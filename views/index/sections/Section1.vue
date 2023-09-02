<script setup lang="ts">
import 'atropos/css'
import Atropos from 'atropos/vue'

import { toRefs } from 'vue'
import { QQ_GROUP_LINK } from '~~/common'
import { ThemeKey } from '~~/types/symbol'
import { getBackgroundAssets } from '~~/themes/utils'
import { useNavigationStore } from '~~/stores/navigation'
import { NavigationTheme } from '~~/types'

const props = defineProps<{
  isActive: boolean
}>()

const { isActive } = toRefs(props)
const currentTheme = inject(ThemeKey)
const backgroundAssets = computed(() => getBackgroundAssets(currentTheme.value))

const { $patch } = useNavigationStore()

watch(isActive, (isActiveValue) => {
  if (isActiveValue) {
    $patch({
      options: {
        theme: NavigationTheme.PRIMARY
      }
    })
  } else {
    $patch({
      options: {
        theme: NavigationTheme.NEGATIVE
      }
    })
  }
})
</script>

<template>
  <Atropos
    :shadow-offset="0"
    :always-visible="true"
    :shadow-scale="1.15"
    :rotate-x-max="0.5"
    :rotate-y-max="0.5"
    class="h-full text-center relative overflow-hidden"
  >
    <div
      v-for="asset in backgroundAssets"
      :data-atropos-offset="asset.offset"
      class="bg"
      :class="asset.bgClass"
    />
    <div
      class="absolute text-primary inset-0 grid place-content-center space-y-6 px-6"
    >
      <h1 class="text-2xl md:text-3xl font-bold">和我们一起，探索这个世界</h1>
      <p class="md:text-lg">
        软件部致力于探索软件开发前沿，营造一个优秀的学习环境，助力个人技术能力的提升。
      </p>
      <div class="space-x-4">
        <BaseButton
          class="bg-primary hover:bg-primary-lighter text-white border-2 border-transparent"
          ><nuxt-link to="/apply">立即报名</nuxt-link></BaseButton
        >
        <BaseButton
          class="bg-transparent hover:bg-[rgba(0,0,0,0.025)] border-2 border-white text-white drop-shadow"
          ><a
            :href="QQ_GROUP_LINK"
            target="_blank"
          >
            <span class="iconfont icon-QQ mr-1"></span>加入群聊
          </a></BaseButton
        >
      </div>
      <div
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm"
      >
        <div class="animate-bounce flex flex-col items-center">
          <div class="mb-1">下拉了解更多</div>
          <span class="gg-chevron-down"></span>
        </div>
      </div>
    </div>
  </Atropos>
</template>

<style lang="postcss">
.bg {
  @apply absolute inset-0 h-full bg-no-repeat bg-cover bg-center;
}

/* ICONS */

.gg-chevron-down {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 100px;
}

.gg-chevron-down::after {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  left: 4px;
  top: 2px;
}
</style>
