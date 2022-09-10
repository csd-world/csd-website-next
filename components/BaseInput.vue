<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  label: string
  type: string
  name: string
  rules?: string
  modelValue: string
}>()

const { label, type, name, rules, modelValue } = toRefs(props)

const {
  errorMessage,
  value: inputValue,
  handleChange,
  handleBlur,
} = useField(name, rules, {
  initialValue: modelValue,
})
</script>

<template>
  <div class="flex flex-col">
    <label
      :class="{ required: rules.includes('required') }"
      class="text-gray-700 mb-2"
      :for="name"
      >{{ label }}</label
    >
    <input
      @mousewheel.prevent=""
      class="bg-gray-100 rounded-lg h-9 text-gray-700 outline-none border-2 border-gray-100 focus:border-primary px-3 text-sm"
      :value="inputValue"
      :type="type"
      :name="name"
      :id="name"
      @input="handleChange"
      @blur="handleBlur"
    />
    <BaseInputError
      v-if="errorMessage"
      :msg="errorMessage"
    />
  </div>
</template>
