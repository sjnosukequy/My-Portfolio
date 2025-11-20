<script setup lang="ts">
import { computed } from 'vue'
const colorMode = useColorMode()
const props = defineProps<{
  title: string
  description: string
  urlGithub?: string
  urlWeb?: string
  date: string
  image?: string
}>()

const isDarkText = computed(() => ({
  'text-gray-dark': colorMode.value === 'dark',
  'text-gray-white': colorMode.value === 'light',
}))

const isDarkBorder = computed(() => ({
  'border-[#3a3a3a]': colorMode.value === 'dark',
  'border-[#d9d9d9]': colorMode.value === 'light',
}))

const overlayBackground = computed(() => {
  return colorMode.value === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'
})
</script>

<template>
  <UCollapsible class="flex flex-col gap-5 cursor-pointer collapsible">
    <UTooltip :delay-duration="0" :text="props.title">
      <div class="flex flex-row gap-5 items-end text-lg">
        <span class="font-medium line-clamp-1 max-w-[60%] font-serif">{{ props.title }}</span>
        <div class="flex-1 border-t-2 border-dashed h-2.5" :class="isDarkBorder"></div>
        <span class="font-serif whitespace-nowrap" :class="isDarkText">{{ props.date }}</span>
      </div>
    </UTooltip>
    <template #content>
      <div class="flex flex-col gap-3 mb-7" :class="isDarkText">
        {{ props.description }}
        <div class="w-full flex flex-row">
          <ProjectButtons :urlGithub="props.urlGithub" :urlWeb="props.urlWeb" />
        </div>
      </div>
    </template>
  </UCollapsible>
</template>

<style scoped>
.collapsible {
  position: relative;
}
.collapsible::before {
  content: '';
  height: 48px;
  width: 0px;
  position: absolute;
  top: -10px;
  left: -10px;
  background-color: v-bind('overlayBackground');
  z-index: -1;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
}
.collapsible:hover::before,
.collapsible[data-state='open']::before {
  width: calc(100% + 20px);
}
</style>
