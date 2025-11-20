<script setup lang="ts">
import { computed } from 'vue'
const colorMode = useColorMode()
const props = defineProps<{
  images: string[]
}>()

const isDark = computed(() => ({
  'border-gray-dark2': colorMode.value === 'dark',
  'border-gray-white2': colorMode.value === 'light',
}))
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    wheel-gestures
    :items="props.images"
    :ui="{ item: 'basis-1/3' }"
  >
    <img
      :src="item"
      class="rounded-md border-[1.5px] aspect-video object-cover object-left"
      :class="isDark"
    />
  </UCarousel>
</template>
