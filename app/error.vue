<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <NuxtLayout>
    <UError :error="error" :ui="{
      statusCode: 'text-6xl font-bold',
      statusMessage: 'text-lg sm:text-xl',
      links: 'mt-4',
    }" :clear="{
      size: 'xl',
    }"/>
  </NuxtLayout>
</template>
