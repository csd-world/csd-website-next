import { Theme } from './types'

const fuji: Theme = {
  colors: {
    primary: '#253d4b',
    backgroundPrimary: '#2F4753',
    negative: 'white',
    sectionBackground: '#2F4753',
    sectionPrimary: '#4e2bcc',
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
