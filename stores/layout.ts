import { LayoutOptions } from '~~/types'

export const useLayoutStore = defineStore('LAYOUT', () => {
  const options = ref<LayoutOptions>({})

  const update = (value: LayoutOptions) => {
    options.value = value
  }

  return {
    options,
    update,
  }
})
