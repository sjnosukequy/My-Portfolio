<script setup lang="ts">
const route = useRoute()
const emits = defineEmits(['setLinks']);
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const data = page.value?.body.toc?.links;
emits('setLinks', data);
// await new Promise(resolve => setTimeout(resolve, 5000))
console.log(page)
</script>

<template>
  <ContentRenderer :value="page" v-if="page" />
</template>
