<template>
  <div class="px-2">
    <div class="relative max-w-xl lg:max-w-2xl mx-auto">
      <div
        class="absolute p-1/4 sm:p-1/6 bg-primary rounded-1/4 rotate-[33deg] right-0 top-0 translate-x-[33%] translate-y-[-33%]"
      />
      <div
        class="absolute p-1/4 sm:p-1/6 bg-primary rounded-full right-0 bottom-0 translate-x-[44%] translate-y-[33%]"
      />
      <div
        class="triangle p-1/6 sm:p-1/8 !bg-primary !opacity-100 top-1/2 -translate-y-1/2 translate-x-[-33%]"
      ></div>
      <div class="absolute inset-0 backdrop-blur-lg"></div>
      <div
        class="bg-white relative flex flex-col bg-opacity-40 py-8 px-6 rounded-[1.5rem]"
      >
        <div
          class="relative w-[110%] left-1/2 -translate-x-1/2 before:absolute before:px-1/2 before:py-1/4 sm:before:px-1/4 sm:before:py-1/6 before:rounded-1/2 before:bg-yellow-50 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2"
        >
          <img
            src="/assets/svg/welcome.svg"
            class="sm:w-3/5 mx-auto relative"
            alt=""
          />
        </div>
        <div class="mb-6">
          <h2 class="mb-4 text-shadow-md">期待你的到来</h2>
          <p class="text-shadow-md">
            无论你是初入大学校门，还是已经习惯了大学生活，都有机会在软件部获得一席之地。期待能与你一起学习，共同进步！
          </p>
        </div>
        <!-- <div class="flex-1" style="background-image: url('/welcome.svg')"></div> -->
        <!-- <div class="relative px-1/6 py-1/4 sm:px-1/8 sm:py-[0] !mt-8 !mb-6 bg-yellow-50 rounded-1/2">
          <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]" src="~/assets/svg/welcome.svg">
        </div> -->
        <BaseButton
          :color="'primary'"
          :icon="'QQ'"
          :link="'https://jq.qq.com/?_wv=1027&k=imP5b1Yu'"
        >
          <span>加入群聊</span>
        </BaseButton>
      </div>
    </div>
    <Footer />
  </div>
</template>
