<script setup lang="ts">
import { computed } from 'vue'
const colorMode = useColorMode()

const isDark = computed(() => ({
  'text-gray-dark': colorMode.value === 'dark',
  'text-gray-white': colorMode.value === 'light',
  'border-[#ffffff12]': colorMode.value === 'dark',
  'border-[#0000000f]': colorMode.value === 'light',
}))
</script>

<template>
  <div class="blockquote border-l-2" :class="isDark">
    <slot> </slot>
  </div>
</template>

<style scoped>
.blockquote {
  padding-left: 1em;
}
</style>
