<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import type { TocLink } from '@nuxt/content';
const props = defineProps<{
    links: TocLink[]
}>();

const active = ref<EventTarget | null>(null);
const prevActive = ref<EventTarget | null>(null);
function setActive(event: Event | CustomEvent) {
    active.value = (event as CustomEvent).detail?.originalEvent?.target || event.target;
    if (prevActive.value) {
        (prevActive.value as HTMLElement).classList.remove('text-primary');
    }
    (active.value as HTMLElement).classList.add('text-primary');
    prevActive.value = active.value;
}

const items = ref<NavigationMenuItem[]>([
    {
        label: 'On this page',
        type: 'label',
        class: 'text-md'
    },
])

onMounted(() => {
    // console.log(props.links)
    const data = props.links.map((link) => {
        const item: NavigationMenuItem = {
            label: link.text,
            to: `#${link.id}`,
            onSelect: setActive
        }
        if (link.children) {
            item.children = link.children.map((sublink) => ({
                label: sublink.text,
                to: `#${sublink.id}`,
                onSelect: setActive
            }))
        }
        return item;
    })
    items.value = [...items.value, ...data];
})

</script>

<template>
    <UNavigationMenu orientation="vertical" :items="items" />
</template>