import { NavigationOptions, NavigationTheme } from '~~/types'

export const useNavigationStore = defineStore('NAVIGATION', () => {
  const options = ref<NavigationOptions>({})
  
  const update = (value: NavigationOptions) => {
    options.value = value
  }

  return {
    options,
    update
  }
})
