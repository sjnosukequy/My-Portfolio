<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed, ref } from 'vue'
type availableRoute = 'about' | 'projects' | 'contacts'

const route = useRoute()
const activeRoute = ref('about')
const scrollTo = (id: availableRoute) => {
  if (route.path !== '/') {
    navigateTo(`/`)
    activeRoute.value = 'about'
  }
  else {
    const element = document.getElementById(id)
    if (element) {
      activeRoute.value = id
      element.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      })
    }
  }
}

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'About',
    active: activeRoute.value == 'about' && route.path == '/',
    onSelect: () => {
      scrollTo('about')
    },
  },
  {
    label: 'Projects',
    active: activeRoute.value == 'projects' && route.path == '/',
    onSelect: () => {
      scrollTo('projects')
    },
  },
  {
    label: 'Contact',
    active: activeRoute.value == 'contacts' && route.path == '/',
    onSelect: () => {
      scrollTo('contacts')
    },
  },
  {
    label: 'CV',
    href: '/CV_Vuong_Dinh_Quy.pdf',
    target: '_blank',
    rel: 'noopener',
    external: true,
  },
])
</script>

<template>
  <UHeader title="" class="border-0" mode="slideover">
    <UNavigationMenu :items="items">
      <!-- <template #list-trailing>
        <UColorModeButton />
      </template> -->
    </UNavigationMenu>

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
