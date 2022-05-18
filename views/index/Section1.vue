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
      class="absolute text-primary inset-0 grid place-content-center space-y-6"
    >
      <h1 class="text-3xl font-bold">和我们一起，探索这个世界</h1>
      <p class="text-lg">
        滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。
      </p>
      <div>
        <BaseButton class="bg-primary hover:bg-primary-lighter text-white"
          >马上加入</BaseButton
        >
      </div>
    </div>
  </Atropos>
</template>

<style lang="postcss">
.bg {
  @apply absolute inset-0 h-full bg-no-repeat bg-cover bg-center;
}
</style>
