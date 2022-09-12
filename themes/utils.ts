import { availableThemes, themes } from '.'
import Color from 'color'
import { Theme, MappedTheme } from './types'
import { Maybe } from '~~/types'

const lighten = (color: string, val: number) => Color(color).lighten(val).hex()

export const mapTheme: (theme: Theme) => MappedTheme = (theme: Theme) => {
  const variables = theme.colors
  return {
    '--color-primary': variables.primary || '',
    '--color-primary-lighter': variables.primaryLighter
      ? variables.primaryLighter
      : (variables.primary && lighten(variables.primary, 0.3)) || '',
    '--color-secondary': variables.secondary || '',
    '--color-positive': variables.positive || '',
    '--color-negative': variables.negative || '',
    '--color-text-primary': variables.textPrimary || '',
    '--background-primary': variables.backgroundPrimary || '',
    '--background-sec': variables.backgroundSecondary || '',
    '--color-section-background': variables.sectionBackground || '',
    '--color-section-primary': variables.sectionPrimary || '',
  }
}

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export function applyTheme(theme: string): void {
  const themeObject: MappedTheme = mapTheme(themes[theme])
  if (!themeObject) return
  const root = document.documentElement

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return
    }

    root.style.setProperty(property, themeObject[property])
  })
}

export function getThemeCSS(theme: string): string {
  const themeObject: MappedTheme = mapTheme(themes[theme])
  let css = '{'
  for (const variable in themeObject) {
    if (themeObject[variable]) {
      css += `${variable}: ${themeObject[variable]};`
    }
  }
  css += '}'
  return css
}

function getTimeRange(hour: number): 'day' | 'sunset' | 'night' {
  if (hour >= 7 && hour < 15) return 'day'
  else if (hour >= 15 && hour < 19) return 'sunset'
  else return 'night'
}

export function getBackgroundAssets(
  theme: string
): Maybe<Theme['backgroundAssets'][keyof Theme['backgroundAssets']]> {
  const themeObject = themes[theme]
  if (!themeObject) return
  return themeObject.backgroundAssets['day']
}

export function getRandomTheme() {
  const seed = Math.random()
  const index = Math.round(seed * (availableThemes.length - 1))
  return availableThemes[index]
}
