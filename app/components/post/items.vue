<script setup lang="ts">
const colorMode = useColorMode()
const props = defineProps<{
    description: string
    title: string
    path: string
}>()

const isDarkBorder = computed(() => ({
    'border-[#3a3a3a]': colorMode.value === 'dark',
    'border-[#d9d9d9]': colorMode.value === 'light',
}))
const overlayBackground = computed(() => {
    return colorMode.value === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'
})
function createLink(title: string) {
    return '/posts/' + title.toLowerCase();
}
</script>

<template>
    <NuxtLink :to="props.path" class="text-inhert">
        <div class="flex flex-row gap-5 items-end text-lg cursor-pointer post-item">
            <span class="font-medium line-clamp-1 md:max-w-[70%] font-serif">{{ props.title }}</span>
            <div class="flex-1 border-t-2 border-dashed h-2.5 hidden md:block" :class="isDarkBorder"></div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.post-item {
    position: relative;
}

.post-item::before {
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

.post-item:hover::before {
    width: calc(100% + 20px);
}
</style>