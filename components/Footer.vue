<script setup lang="ts">
import { QQ_GROUP_LINK, csdWebsites, friendLinks } from '~~/common'

const props = defineProps<{
  textStyle?: `text-${string}`
  bgStyle?: `bg-${string}`
}>()

const { textStyle, bgStyle } = props
</script>

<template>
  <div
    class="grid gap-6 grid-cols-2 sm:grid-cols-4 sm:gap-12 mt-2 sm:mt-16 text-white text-sm py-8 px-8 rounded-2xl"
    :class="[textStyle, bgStyle]"
  >
    <div class="col-span-2 sm:col-auto">
      <div class="flex items-center">
        <Logo class="w-16" />
        <span class="ml-4 font-bold tracking-[0.25em]">软件部</span>
      </div>
      <p class="mt-2">
        软件部致力于探索软件开发前沿，营造一个优秀的学习环境，助力个人技术能力的提升。
      </p>
    </div>
    <div class="col-span-2 sm:col-auto">
      <h3 class="section-title">联系我们</h3>
      <ul class="space-y-1.5">
        <li>
          招新 QQ 群：<a
            class="underline"
            :href="QQ_GROUP_LINK"
            target="_blank"
            >155315316</a
          >
        </li>
        <li>线下地址：大学生活动中心三楼 302 软件部/花江慧谷6号楼人工智能学院208</li>
      </ul>
    </div>
    <div>
      <h3 class="section-title">我们的站点</h3>
      <ul class="space-y-1.5">
        <li v-for="(link, title) in csdWebsites">
          <a
            class="underline"
            :href="link"
            target="_blank"
            >{{ title }}</a
          >
        </li>
      </ul>
    </div>
    <div>
      <h3 class="section-title">友情链接</h3>
      <ul class="space-y-1.5">
        <li v-for="(link, title) in friendLinks">
          <a
            class="underline"
            :href="link"
            target="_blank"
            >{{ title }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.section-title {
  @apply font-bold leading-7 mb-1.5 text-base;
}
</style>
