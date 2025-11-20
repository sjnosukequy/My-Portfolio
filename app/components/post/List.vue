<script setup lang="ts">
import type { ContentCollectionItem } from '@nuxt/content';
import { ref, onMounted } from 'vue';
const posts = ref<ContentCollectionItem[]>([]);

onMounted(async () => {
    const response = await useListPosts();
    // console.log('Fetched posts:', response.value);
    const data = response.value.filter(post => post.path != "/posts/about");
    posts.value = data;
});
</script>

<template>
    <div class="flex flex-col gap-6">
        <PostItems v-for="(item, index) in posts" :key="index" :title="item.title" :description="item.description" :path="item.path" />
    </div>
</template>