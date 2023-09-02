import { useLayoutStore } from '~~/stores/layout'
import { CustomPageMeta } from '~~/types'

export default defineNuxtRouteMiddleware((to) => {
  const { update } = useLayoutStore()
  const meta = to.meta as CustomPageMeta
  if (meta.layoutOptions) {
    update(meta.layoutOptions)
  }
})
