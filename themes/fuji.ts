import { Theme } from './types'
import base from './base'

const fuji: Theme = {
  colors: {
    ...base.colors,
  },
  backgroundAssets: {
    day: {
      background: {
        bgClass: 'bg-[url("assets/bg/fuji/day/background.svg")]',
        offset: -2,
      },
      far: {
        bgClass: 'bg-[url("assets/bg/fuji/day/far.svg")]',
        offset: -1,
      },
      mid: {
        bgClass: 'bg-[url("assets/bg/fuji/day/mid.svg")]',
        offset: 0,
      },
      foreground: {
        bgClass: 'bg-[url("assets/bg/fuji/day/foreground.svg")]',
        offset: 2,
      },
    },
  },
}
export default fuji
