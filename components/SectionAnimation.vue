<script setup lang="ts">
import { watch, toRefs, onMounted } from 'vue'
import lottie, { AnimationItem } from 'lottie-web'
import { Maybe } from '~~/types'

const props = defineProps<{
  importFn: () => Promise<any>
  isActive: boolean
}>()

const { importFn } = props
const { isActive } = toRefs(props)

let isPlaying = false
let containerEl: Maybe<HTMLElement> = null
let lazyAnimation: Maybe<AsyncLazy<AnimationItem>> = null

watch(isActive, async () => {
  if (!lazyAnimation) return
  if (isActive.value) {
    ;(await lazyAnimation.get()).play()
    isPlaying = true
  } else if (!isActive.value && isPlaying) {
    ;(await lazyAnimation.get()).stop()
    isPlaying = false
  }
})

onMounted(() => {
  importFn()
  lazyAnimation = new AsyncLazy(() =>
    importFn()
      .then((importData) => {
        if (!containerEl) throw new Error('containerEl is null')
        const data = importData.default
        containerEl.innerHTML = ''
        const animation = lottie.loadAnimation({
          container: containerEl,
          animationData: data,
          renderer: 'svg',
          autoplay: false,
        })
        return animation
      })
      .catch((e) => {
        throw e
      })
  )
})

function bindRef(el: HTMLElement) {
  containerEl = el
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
</script>

<template>
  <slot :bindRef="bindRef" />
</template>
