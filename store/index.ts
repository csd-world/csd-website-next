import { defineStore } from 'pinia'

type NavigationStyle = 'primary' | 'negative'

export const useSlideStore = defineStore({
  id: 'slide',
  state: () => ({
    activeIndex: 0,
    navigationStyle: 'primary' as NavigationStyle,
  }),
  actions: {
    changeNavigationStyle(navigationStyle: NavigationStyle) {
      this.navigationStyle = navigationStyle
    },
  },
})
