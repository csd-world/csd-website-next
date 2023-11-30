import { PageMeta } from 'nuxt/dist/pages/runtime'

export interface ApiResponse<T> {
  data: T;
  pending: boolean;
  error: any;
  refresh: () => Promise<void>;
  status: number;
}

export type Maybe<T> = T | null | undefined

export type PageType = 'navigation'

export enum NavigationTheme {
  PRIMARY = 'primary',
  NEGATIVE = 'negative',
  SECTION_PRIMARY = 'section-primary'
}

export interface NavigationOptions {
  fixed?: boolean
  sticky?: boolean
  theme?: NavigationTheme
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
  experience: string
  direction: 'web' | 'game' | 'ai' | 'mobile' | ''
}
