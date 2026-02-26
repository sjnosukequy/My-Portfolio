<script setup lang="ts">
definePageMeta({
  layout: false
})

import { computed } from 'vue'
const colorMode = useColorMode()

const overlayBackground = computed(() => {
  return colorMode.value === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'
})
</script>

<template>
  <NuxtLayout name="default">
    <UContainer class="max-w-3xl min-h-screen">
      <div class="p-5">
        <ClientOnly>
          <div id="about">
            <div class="flex flex-row gap-7 items-end">
              <ColorImage dark="/img/avatar-dark.webp" light="/img/avatar-light.webp" alt="Logo" class="h-20 aspect-square rounded-full" />
              <div class="flex flex-col gap-1">
                <h2 class="font-semibold text-2xl">Vuong Dinh Quy</h2>
                <span class="font-normal text-gray-10">Just a developer who dreams big</span>
              </div>
            </div>
            <BlockQuote class="mt-5 text-lg leading-7">
              <span>
                I'm a developer with a strong foundation in web/mobile development and a keen eye for
                design, I strive to build applications that are not only look good but they also
                perform, scale, and deliver measurable results.
              </span>
              <br />
              <br />
              <span>In case you want to learn more
                <NuxtLink to="/posts/about" class="underline font-serif italic fun-text">about me?</NuxtLink>
              </span>
            </BlockQuote>
          </div>
          <div id="projects" class="mt-15">
            <h3 class="font-semibold text-xl font-mono">Projects</h3>
            <ProjectMain class="mt-5" />
          </div>
          <div id="posts" class="mt-15">
            <h3 class="font-semibold text-xl font-mono">Posts</h3>
            <PostList class="mt-5" />
          </div>
          <template #fallback>
            <!-- this will be rendered on server side -->
            <Loader class="mt-[150px]" />
          </template>
        </ClientOnly>
      </div>
    </UContainer>
    <template #left>
      <Socials containerClass="p-7 pb-0" />
    </template>
  </NuxtLayout>
</template>

<style scoped>
.fun-text {
  position: relative;
}

.fun-text::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: v-bind(overlayBackground);
  transition: all 0.3s ease-in-out;
  z-index: -1;
}

.fun-text:hover:before {
  width: 100%;
}
</style>
