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
    <h2 class="mb-6">{{ title }}</h2>
    <p class="text-shadow-md">
      {{ content }}
    </p>
  </div>
</template>
