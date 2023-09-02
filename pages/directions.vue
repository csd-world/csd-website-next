<script setup lang="ts">
import { CustomPageMeta, NavigationTheme } from '~~/types'

definePageMeta({
  title: '方向',
  layout: 'page',
  navigationOptions: {
    fixed: false,
    theme: NavigationTheme.NEGATIVE,
    bgColor: 'bg-primary'
  },
} as CustomPageMeta)

const directions = [
  {
    color: 'yellow',
    titleColor: 'text-yellow-600',
    icon: 'game',
    iconColor: 'bg-yellow-600',
    name: '游戏开发',
    desc: '在这个组里，你将学习如何运用引擎进行游戏开发。你可以学习游戏引擎开发/复刻自己心仪游戏，参加很多游戏设计比赛，制作独立游戏，去 BAT 大厂制作游戏。',
  },
  {
    color: 'blue',
    titleColor: 'text-blue-600',
    icon: 'web',
    iconColor: 'bg-blue-600',
    name: 'Web 开发',
    desc: 'Web 应用遍布于我们的生活当中，是目前火热的学习方向。在这里你可以跟随经验丰富的前辈们学习前后端开发，并有机会组成一个团队承接企业项目、比赛项目。',
  },
  {
    color: 'green',
    titleColor: 'text-green-600',
    icon: 'android',
    iconColor: 'bg-green-600',
    name: '移动开发',
    desc: '精通移动设备的应用开发，具有很强的实用性。在这里，你可以学到主流的移动开发技术并用来解决很多日常需求，快来一起开发你的专属应用，一起把技术装进口袋吧。',
  },
  {
    color: 'red',
    titleColor: 'text-red-600',
    icon: 'ai',
    iconColor: 'bg-red-600',
    name: '人工智能',
    desc: '学习自然语言处理(NLP)、计算机视觉(OpenCV，Object detection，Image segmentation，Matting)等方向。在这里有学长们引导你入门人工智能技术，动手实践人工智能demo。',
  },
]
</script>

<template>
  <div>
    <div class="flex mb-4 text-white">
      <div class="flex flex-col justify-center space-y-4">
        <h1 class="font-semibold text-shadow-md text-2xl">方向介绍</h1>
        <p class="text-shadow-sm">
          软件部内的学习方向都是当前的热门方向，但我们学习内容很自由，在软件部里你也可以学习到除这些方向之外的东西。在这里你可以得到相关方向学长学姐的细心指导，教会你如何学有所成~
        </p>
      </div>
      <img
        class="sm:block hidden aspect-[4/3]"
        src="~/assets/svg/discovery.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="grid sm:grid-cols-2 gap-4">
      <div
        v-for="dir in directions"
        :key="dir.name"
        class="rounded-3xl bg-white space-y-4 p-8"
      >
        <h3
          :class="dir.titleColor"
          class="text-xl"
        >
          <span
            class="text-white iconfont p-2 rounded-full mr-2 font-normal"
            :class="['icon-' + dir.icon, `bg-${dir.color}-600`]"
          /><span class="font-semibold">{{ dir.name }}</span>
        </h3>
        <p class="text-gray-600">{{ dir.desc }}</p>
        <!-- <button 
            :class="[`bg-${dir.color}-600`, `hover:bg-${dir.color}-700`]"
            class=" px-3 py-2 rounded-lg">了解更多</button> -->
      </div>
    </div>
  </div>
</template>
