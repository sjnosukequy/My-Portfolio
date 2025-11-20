<script setup lang="ts">
const props = defineProps<{
  urlGithub?: string
  urlWeb?: string
}>()
</script>

<template>
  <div class="flex flex-row gap-2">
    <UButton
      v-if="props.urlGithub"
      icon="i-streamline-logos:github-logo-2-solid"
      size="lg"
      color="info"
      variant="soft"
      :to="props.urlGithub"
      target="_blank"
      :square="true"
      label="Project"
      class="p-3"
    />
    <UButton
      v-if="props.urlWeb"
      icon="i-streamline-plump:web"
      size="lg"
      color="success"
      variant="soft"
      :to="props.urlWeb"
      target="_blank"
      :square="true"
      label="Preview"
      class="p-3"
    />
  </div>
</template>
