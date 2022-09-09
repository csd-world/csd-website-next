<template>
  <div
    class="grid gap-6 grid-cols-2 sm:grid-cols-4 sm:gap-12 mt-16 text-white text-sm pb-12 px-4 sm:px-0"
  >
    <div class="col-span-2 sm:col-auto">
      <div class="flex items-center">
        <Logo class="w-16" />
        <span class="ml-4 font-bold tracking-[0.25em]">软件部</span>
      </div>
      <p class="mt-2">
        滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。
      </p>
    </div>
    <div class="col-span-2 sm:col-auto">
      <h3 class="section-title">联系我们</h3>
      <ul class="space-y-1.5">
        <li>招新 QQ 群：123456789</li>
        <li>线下地址：大学生活动中心三楼 302 软件部</li>
      </ul>
    </div>
    <div>
      <h3 class="section-title">我们的站点</h3>
      <ul class="space-y-1.5">
        <li>软件部 OJ</li>
        <li>软件部 WiKi</li>
        <li>软件部 Git</li>
        <li>软件部网盘</li>
      </ul>
    </div>
    <div>
      <h3 class="section-title">友情链接</h3>
      <ul class="space-y-1.5">
        <li>软件部 OJ</li>
        <li>软件部 WiKi</li>
        <li>软件部 Git</li>
        <li>软件部网盘</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.section-title {
  @apply font-bold leading-7 mb-1.5 text-base;
}
</style>
