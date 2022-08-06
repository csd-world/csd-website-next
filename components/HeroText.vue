<script
  setup
  lang="ts"
>
const props = defineProps<{
  title: string
  content: string
}>()

const { title, content } = toRefs(props)
</script>

<template>
  <div class="flex-1 flex flex-col justify-center items-start">
    <h2
      class="mb-6 text-2xl font-bold relative z-10 inline-block text-shadow-md before:-z-10 before:w-full before:absolute before:h-4 before:-bottom-1 before:bg-primary-lighter"
    >
      {{ title }}
    </h2>
    <p class="text-shadow-md">
      {{ content }}
    </p>
  </div>
</template>
