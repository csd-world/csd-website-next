import { Themes } from './types'
import base from './base'
import fuji from './fuji'

/**
 * The default theme to load
 */
export const DEFAULT_THEME: string = 'base'

export const availableThemes = ['base', 'fuji'] as const

export const themes: Themes = {
  base,
  fuji,
}
