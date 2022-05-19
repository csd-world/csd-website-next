<script
  setup
  lang="ts"
>
import 'atropos/css'
import Atropos from 'atropos/vue'
</script>

<template>
  <Atropos
    :shadow-offset="0"
    :always-visible="true"
    :shadow-scale="1.15"
    :rotate-x-max="0.5"
    :rotate-y-max="0.5"
    class="h-full text-center relative"
  >
    <div
      data-atropos-offset="-2"
      class="bg bg-[url('assets/bg/mountain/sky.svg')]"
    />
    <div
      data-atropos-offset="-1"
      class="bg bg-[url('assets/bg/mountain/mountain.svg')]"
    />
    <div
      data-atropos-offset="0"
      class="bg bg-[url('assets/bg/mountain/hill.svg')]"
    />
    <div
      data-atropos-offset="2"
      class="bg bg-[url('assets/bg/mountain/foreground.svg')]"
    />
    <div
      class="absolute text-primary inset-0 grid place-content-center space-y-6 px-6"
    >
      <h1 class="text-2xl md:text-3xl font-bold">和我们一起，探索这个世界</h1>
      <p class="md:text-lg">
        滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。
      </p>
      <div>
        <BaseButton class="bg-primary hover:bg-primary-lighter text-white"
          >马上加入</BaseButton
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
