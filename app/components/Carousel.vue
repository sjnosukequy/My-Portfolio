<script setup lang="ts">
import { computed } from 'vue'
const colorMode = useColorMode()
const props = defineProps<{
  images: {
    index: number
    src: string
    title: string
  }[]
}>()

const isDark = computed(() => ({
  'border-gray-dark2': colorMode.value === 'dark',
  'border-gray-white2': colorMode.value === 'light',
}))

const visibleRef = ref(false);
const indexRef = ref(0);
const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

</script>

<template>
  <div>
    <UCarousel v-slot="{ item }" loop wheel-gestures :items="props.images" :ui="{ item: 'md:basis-1/2' }" :autoplay="{ delay: 2000 }">
      <img :src="item.src" class="rounded-md border-[1.5px] aspect-video object-cover object-left cursor-pointer" :class="isDark"  @click="() => showImg(item.index)"/>
    </UCarousel>
    <VueEasyLightbox :visible="visibleRef" :imgs="props.images" :index="indexRef" @hide="onHide" loop="true" move-disabled="true"/>
  </div>
</template>
