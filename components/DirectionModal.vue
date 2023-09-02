<template>
  <div class="fixed inset-0 bg-black opacity-50"></div>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div
      class="flex flex-col w-3/4 h-3/5 max-h-full bg-white p-4 rounded-2xl shadow-lg overflow-y-auto"
    >
      <h2 class="text-lg font-bold mb-4">{{ title }}</h2>

      <div
        class="flex-grow"
        v-html="marked.parse(content)"
      ></div>

      <button
        @click="closeModal"
        :class="iconColor"
        class="text-white py-2 px-4 rounded mt-4 self-end"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const props = defineProps<{
  title: string
  content: string
  iconColor: string
}>()

const { title, content } = props

const emits = defineEmits<{
  (e: 'close'): void
}>()

const closeModal = () => {
  emits('close')
}
</script>
