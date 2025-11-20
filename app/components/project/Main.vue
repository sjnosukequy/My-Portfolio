<script setup lang="ts">
import { ref } from 'vue'
import projectObj from '@/assets/data/projects.json' with { type: 'json' }

const dataList = ref(projectObj.projects)
</script>

<template>
  <div class="flex flex-col gap-6">
    <Carousel :images="dataList.map((item) => item.image).filter((image) => image.length > 0)" />
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
