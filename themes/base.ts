import { Theme } from './types'

const base: Theme = {
  colors: {
    primary: '#122B6D',
    backgroundPrimary: '#192B52',
    negative: 'white',
    sectionBackground: '#192B52',
    sectionPrimary: '#4e2bcc',
  },
  backgroundAssets: {
    day: {
      sky: {
        bgClass: 'bg-[url("assets/bg/mountain/day/sky.svg")]',
        offset: -2,
      },
      mountain: {
        bgClass: 'bg-[url("assets/bg/mountain/day/mountain.svg")]',
        offset: -1,
      },
      hill: {
        bgClass: 'bg-[url("assets/bg/mountain/day/hill.svg")]',
        offset: 0,
      },
      foreground: {
        bgClass: 'bg-[url("assets/bg/mountain/day/foreground.svg")]',
        offset: 2,
      },
    },
  },
}
export default base
