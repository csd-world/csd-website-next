import { themes } from '.'
import Color from 'color'

const lighten = (color: string, val: number) => Color(color).lighten(val).hex()

export interface Theme {
  [key: string]: string
}

export interface Themes {
  [key: string]: Theme
}

export interface MappedTheme {
  [key: string]: string | null
}

export const mapTheme: (variables: Theme) => MappedTheme = (
  variables: Theme
) => {
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
