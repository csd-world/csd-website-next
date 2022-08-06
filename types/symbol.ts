import { InjectionKey, ShallowRef } from 'vue'
import { Swiper as SwiperInstance } from 'swiper'
import { Maybe } from '.'

export const SwiperKey: InjectionKey<ShallowRef<Maybe<SwiperInstance>>> =
  Symbol('swiper')
