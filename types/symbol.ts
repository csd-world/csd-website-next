import { InjectionKey, ShallowRef, Ref } from 'vue'
import { Swiper as SwiperInstance } from 'swiper'
import { Maybe } from '.'

export const SwiperKey: InjectionKey<ShallowRef<Maybe<SwiperInstance>>> =
  Symbol('swiper')

export const ThemeKey: InjectionKey<Ref<string>> = Symbol('swiper')
