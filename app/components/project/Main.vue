<script setup lang="ts">
import { ref } from 'vue'
import projectObj from '@/assets/data/projects.json' with { type: 'json' }

const dataList = ref(projectObj.projects)
const imagesRef = ref(dataList.value.map((item, index) => ({
  index: index,
  src: item.image,
  title: item.title
})).filter((item) => item.src.length > 0))
</script>

<template>
  <div class="flex flex-col gap-6">
    <Carousel :images="imagesRef" />
    <ProjectItems
      v-for="item in dataList"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :date="item.date"
      :urlGithub="item.urlGithub"
      :urlWeb="item.urlWeb"
      :image="item.image"
    />
  </div>
</template>
