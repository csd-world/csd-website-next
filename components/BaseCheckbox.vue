<template>
  <div class="flex items-center space-x-2">
    <label
      class="text-gray-700"
      :for="label"
      >{{ label }}</label
    >
    <div class="relative rounded">
      <input
        v-model="inputValue"
        :name="name"
        @blur="handleBlur"
        type="checkbox"
        class="absolute inset-0 w-4 h-4 opacity-0"
      />
      <div
        class="transition h-4 w-4 border-2 border-gray-300 rounded flex items-center justify-center"
      >
        <svg
          class="hidden fill-current w-2 h-2 text-blue-white pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            fill-rule="evenodd"
          >
            <g
              transform="translate(-9 -11)"
              fill="#ffffff"
              fill-rule="nonzero"
            >
              <path
                d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  label: string
  name: string
  modelValue: boolean
}>()

const { modelValue, name } = props

const { value: inputValue, handleBlur } = useField(name, undefined, {
  initialValue: modelValue,
  type: 'checkbox',
})
</script>

<style lang="postcss" scoped>
input:checked + div svg {
  @apply block;
}

input:checked + div {
  @apply bg-primary border-primary;
}
</style>
