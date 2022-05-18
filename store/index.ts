import { defineStore } from 'pinia'

export const useSlideStore = defineStore({
  id: 'slide',
  state: () => ({
    activeIndex: 0
  }),
})
