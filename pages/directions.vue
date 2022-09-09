<script
  setup
  lang="ts"
>
import { CustomPageMeta } from '~~/types'
import { emitter, navigationEvent } from '~~/utils/emitter';

definePageMeta({
  title: '方向',
  navigationOptions: {
    fixed: false
  }
} as CustomPageMeta)

onMounted(() => {
  emitter.emit(navigationEvent.changeTheme, 'negative')
})
</script>

<template>
  <h1>Directions Page</h1>
</template>
