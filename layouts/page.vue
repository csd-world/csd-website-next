<script setup lang="ts">
import { useLayoutStore } from '~~/stores/layout';

const { options } = useLayoutStore()
const { bgColor } = toRefs(options)

</script>

<template>
  <div class="page-layout" :class="bgColor ? bgColor : ''">
    <Navigation />
    <div class="container mx-auto px-4 pb-8 flex flex-col">
      <slot />
     
      <Footer />
    </div>
   
  </div>
  
</template>
