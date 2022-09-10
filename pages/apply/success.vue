<script setup lang="ts">
import { CustomPageMeta } from '~~/types'
import lottie from 'lottie-web'
import party from 'party-js'
import { ConfettiConfiguration } from 'party-js/lib/templates/confetti'

definePageMeta({
  title: '报名成功',
  layout: 'blank',
  pageTransition: {
    name: 'fade',
  },
  navigationOptions: {
    fixed: false,
    theme: 'negative',
    bgColor: 'bg-section-primary',
  },
} as CustomPageMeta)

const animationContainer = ref<HTMLDivElement>(null)
const source1 = ref<HTMLDivElement>(null)
const source2 = ref<HTMLDivElement>(null)
const importAnimationData = () => import('~/assets/json/success.json')

onMounted(() => {
  importAnimationData().then((data) => {
    lottie.loadAnimation({
      container: animationContainer.value,
      animationData: data.default,
      renderer: 'svg',
      autoplay: true,
    })
    setTimeout(() => {
      const option: Partial<ConfettiConfiguration> = {
        spread: 30,
      }
      party.confetti(source1.value, option)
      party.confetti(source2.value, option)
    }, 300)
  })
})
</script>

<template>
  <div class="relative flex flex-col items-center h-full">
    <div class="flex-grow relative px-4 w-full sm:w-auto">
      <div
        ref="card"
        class="bg-white rounded-lg text-gray-700 text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 space-y-6 w-11/12 sm:w-auto sm:whitespace-nowrap shadow-md"
      >
        <div class="ribbon ribbon-top-left"><span>恭喜！</span></div>
        <div
          ref="source1"
          class="absolute left-0 top-0"
        ></div>
        <div
          ref="source2"
          class="absolute right-0 top-0"
        ></div>
        <div
          ref="animationContainer"
          class="aspect-[16/9]"
        ></div>
        <h3 class="text-section-primary text-2xl font-semibold">报名成功！</h3>
        <div>
          <p>我们已经收到了你的报名表，很高兴认识你！</p>
          <p>具体安排请等待后续通知。</p>
        </div>
        <div class="space-x-4 whitespace-nowrap">
          <BaseButton class="bg-section-primary text-white rounded-full">
            <nuxt-link
              to="/"
              class="flex items-center"
            >
              <span class="iconfont icon-home mr-1" />回到首页
            </nuxt-link>
          </BaseButton>
          <BaseButton class="bg-section-primary text-white rounded-full">
            <nuxt-link
              to="https://oj.dsstudio.tech/problem"
              class="flex items-center"
            >
              <span class="iconfont icon-link mr-1 text-[0.8rem]" />开始练习
            </nuxt-link>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style lang="postcss" scoped>
/* common */
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
  /* border: 5px solid #2980b9; */
  @apply border-[5px] border-primary;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  /* background-color: #3498db; */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 700 18px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
  @apply bg-section-primary;
}

/* top left*/
.ribbon-top-left {
  top: -10px;
  left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before {
  top: 0;
  right: 0;
}
.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}

/* bottom left*/
.ribbon-bottom-left {
  bottom: -10px;
  left: -10px;
}
.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.ribbon-bottom-left::before {
  bottom: 0;
  right: 0;
}
.ribbon-bottom-left::after {
  top: 0;
  left: 0;
}
.ribbon-bottom-left span {
  right: -25px;
  bottom: 30px;
  transform: rotate(225deg);
}

/* bottom right*/
.ribbon-bottom-right {
  bottom: -10px;
  right: -10px;
}
.ribbon-bottom-right::before,
.ribbon-bottom-right::after {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.ribbon-bottom-right::before {
  bottom: 0;
  left: 0;
}
.ribbon-bottom-right::after {
  top: 0;
  right: 0;
}
.ribbon-bottom-right span {
  left: -25px;
  bottom: 30px;
  transform: rotate(-225deg);
}
</style>
