import { PageMeta } from 'nuxt/dist/pages/runtime'

export type Maybe<T> = T | null | undefined

export type PageType = 'navigation'

export interface NavigationOptions {
  fixed?: boolean
  theme?: 'primary' | 'negative'
  bgColor?: `bg-${string}`
}

export interface LayoutOptions {
  bgColor?: `bg-${string}`
}

export type CustomPageMeta = PageMeta & {
  navigationOptions?: NavigationOptions
  layoutOptions?: LayoutOptions
}