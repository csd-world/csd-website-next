import { PageMeta } from 'nuxt/dist/pages/runtime'

export type Maybe<T> = T | null | undefined

export type PageType = 'navigation'

export interface NavigationOptions {
  fixed?: boolean
}

export type CustomPageMeta = PageMeta & {
  navigationOptions?: NavigationOptions
}
// | {
//   type: PageType
//   navigationClasses?: string
// }