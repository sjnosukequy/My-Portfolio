<script setup lang="ts">
import type { TocLink } from '@nuxt/content';
import { ref } from 'vue';
definePageMeta({
    middleware: ['post-check'],
    layout: false
})
const links = ref<TocLink[]>([]);
function setLinks(newLinks: TocLink[]) {
    links.value = newLinks;
}
</script>

<template>
    <NuxtLayout name="post">
        <Suspense timeout="0">
            <template #default>
                <PostRender :links="links" v-on:setLinks="setLinks"/>
            </template>
            <template #fallback>
                <Loader class="mt-[150px]" />
            </template>
        </Suspense>
        <template #left>
            hi
        </template>
    </NuxtLayout>
</template>
