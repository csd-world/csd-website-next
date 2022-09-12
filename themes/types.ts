export interface BackgroundAssets {
  [K: string]: {
    bgClass: string
    offset: number
  }
}

export interface Theme {
  colors: {
    [key: string]: string
  }
  backgroundAssets: {
    day: BackgroundAssets
    sunset?: BackgroundAssets
    night?: BackgroundAssets
  }
}

export interface Themes {
  [key: string]: Theme
}

export interface MappedTheme {
  [key: string]: string | null
}
