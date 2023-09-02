import { PageMeta } from 'nuxt/dist/pages/runtime'

export type Maybe<T> = T | null | undefined

export type PageType = 'navigation'

export interface NavigationOptions {
  fixed?: boolean
  sticky?: boolean
  theme?: 'primary' | 'negative'
  bgColor?: `${string}bg-${string}`
}

export interface LayoutOptions {
  bgColor?: `bg-${string}`
  withFooter?: boolean
}

export type CustomPageMeta = PageMeta & {
  navigationOptions?: NavigationOptions
  layoutOptions?: LayoutOptions
}

export interface FormModel {
  studentId: string
  name: string
  qq: string
  email: string
  hadExperience: boolean
  applyReason: string
  grade: number
  experience?: string
  direction?: 'web' | 'game' | 'ai' | 'mobile' | ''
}

export interface Attributes {
  title: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}
