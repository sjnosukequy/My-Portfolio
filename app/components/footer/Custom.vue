<script setup lang="ts">
// import { useColorMode } from '@vueuse/core'
// const colorMode = useColorMode()
</script>

<template>
  <UContainer class="max-w-3xl" id="contacts">
    <div class="flex flex-row gap-2 items-end p-5">
      <div class="flex-1">
        <h3 class="font-semibold text-xl font-serif">Contact me at</h3>
        <div class="flex flex-row gap-3 mt-3">
          <UButton
            size="xl"
            class="p-0"
            icon="i-uil:github"
            target="_blank"
            color="neutral"
            variant="link"
            :square="true"
            to="https://github.com/sjnosukequy/"
          ></UButton>
          <UButton
            size="xl"
            class="p-0"
            target="_blank"
            :square="true"
            icon="i-mdi:linkedin"
            color="neutral"
            variant="link"
            to="https://www.linkedin.com/in/sjnosukequy/"
            :ui="{
              leadingIcon: 'stroke-2',
            }"
          ></UButton>
          <UButton
            size="xl"
            class="p-0"
            target="_blank"
            :square="true"
            icon="i-ant-design:mail-outlined"
            color="neutral"
            variant="link"
            to="mailto:vuongquy51@gmail.com"
            :ui="{
              leadingIcon: 'stroke-2',
            }"
          ></UButton>
        </div>
      </div>
      <IconFlowers height="100px" class="hidden lg:block"/>
    </div>
  </UContainer>
</template>
