import { Ref } from 'vue'
import lottie, { AnimationItem } from 'lottie-web'

export default function useSectionAnimation(
  importFn: () => Promise<{ default: any }>,
  containerRef: Ref<HTMLElement>,
  index: number
) {
  onMounted(() => {
    console.log('on mount', containerRef.value)
    importFn()
      .then((importData) => {
        const data = importData.default
        containerRef.value.innerHTML = ''
        return lottie.loadAnimation({
          container: containerRef.value,
          animationData: data,
          renderer: 'svg',
          autoplay: true,
        })
      })
      .catch((e) => {
        throw e
      })
  })
}
class AsyncLazy<T> {
  private promise: Promise<T> | undefined = undefined
  private _value: T | undefined = undefined
  get value() {
    return this._value
  }
  get loaded() {
    return this._value !== undefined
  }
  constructor(readonly fn: () => Promise<T>) {}
  public get() {
    if (!this.promise)
      this.promise = (async () => {
        this._value = await this.fn()
        return this._value!
      })()
    return this.promise
  }
}
