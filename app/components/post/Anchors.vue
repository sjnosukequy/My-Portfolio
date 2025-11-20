<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import type { TocLink } from '@nuxt/content';
const props = defineProps<{
    links: TocLink[]
}>();

const items = ref<NavigationMenuItem[]>([
    {
      label: 'On this page',
      type: 'label'
    },
])

onMounted(() => {
    // console.log(props.links)
    const data = props.links.map((link) => {
        const item: NavigationMenuItem = {
            label: link.text,
            to: `#${link.id}`
        }
        if (link.children) {
            item.children = link.children.map((sublink) => ({
                label: sublink.text,
                to: `#${sublink.id}`
            }))
        }
        return item;
    })
    items.value = [...items.value, ...data];
})

</script>

<template>
    <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />
</template>