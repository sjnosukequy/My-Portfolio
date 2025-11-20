<script setup lang="ts">
const props = defineProps<{
  dark?: string
  light?: string
  alt?: string
  class?: string
}>()
</script>

<template>
    <img :src="props.dark" class="hidden dark:block" :class="props.class" :alt="props.alt" />
    <img :src="props.light" class="dark:hidden" :class="props.class" :alt="props.alt" />
</template>