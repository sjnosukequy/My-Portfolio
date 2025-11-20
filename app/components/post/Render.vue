<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
// await new Promise(resolve => setTimeout(resolve, 5000))
console.log(page)
</script>

<template>
  <ContentRenderer :value="page" v-if="page" />
</template>
