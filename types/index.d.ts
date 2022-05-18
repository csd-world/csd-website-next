import { PageMeta } from 'nuxt/dist/pages/runtime'

export type Maybe<T> = T | null | undefined

export type PageType = 'navigation'

export type CustomPageMeta = PageMeta | {
  type: PageType
  navigationClasses?: string
}