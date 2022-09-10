<template>
  <div class="flex flex-col">
    <label
      :class="{ required: rules ? rules.includes('required') : false }"
      class="text-gray-700 mb-2"
      :for="name"
      >{{ label }}</label
    >
    <textarea
      :value="inputValue"
      :name="name"
      @input="handleChange"
      @blur="handleBlur"
      rows="5"
      class="bg-gray-100 rounded-lg outline-none border-2 border-gray-100 focus:border-primary text-sm text-gray-700 pl-2 pt-2"
    ></textarea>
    <BaseInputError
      v-if="errorMessage"
      :msg="errorMessage"
    />
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  label: string
  name: string
  rules?: string
  modelValue: string
}>()

const { label, name, rules, modelValue } = props

const {
  value: inputValue,
  handleBlur,
  handleChange,
  errorMessage,
} = useField(name, rules, {
  initialValue: modelValue,
})
</script>
