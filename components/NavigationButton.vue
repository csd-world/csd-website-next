<script setup lang="ts">
const props = defineProps<{
  active: boolean
}>()

const { active } = toRefs(props)
</script>

<template>
  <div class="relative w-6 h-6">
    <span
      class="absolute top-1/2 left-1/2 w-12 -translate-x-1/2 -translate-y-1/2"
    >
      <svg
        class="ham hamRotate fill-current stroke-current"
        viewBox="0 0 100 100"
        :class="{ active }"
      >
        <path
          class="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path
          class="line middle"
          d="m 30,50 h 40"
        />
        <path
          class="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
    </span>
  </div>
</template>

<style scoped>
body {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.ham {
  cursor: default;
  transition: transform 400ms;
  -webkit-tap-highlight-color: transparent;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.ham:focus {
  outline: none;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke-width: 8;
  stroke-linecap: round;
}

.ham .top {
  stroke-dasharray: 40 160;
}
.ham .middle {
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 400ms;
}
.ham .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 400ms, stroke-dashoffset 400ms;
}
.ham.active .top {
  stroke-dashoffset: -64px;
}
.ham.active .middle {
  //stroke-dashoffset: -20px;
  transform: rotate(90deg);
}
.ham.active .bottom {
  stroke-dashoffset: -64px;
}
</style>
