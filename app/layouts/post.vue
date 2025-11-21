<template>
    <HeaderCustom />
    <UPage>
        <template #left>
            <UPageAside>
                <slot name="left" />
            </UPageAside>
        </template>
        <template #right>
            <UPageAside>
                <slot name="right" />
            </UPageAside>
        </template>
        <UPageBody class="px-4 sm:px-6">
            <slot />
        </UPageBody>
    </UPage>
    <FooterCustom />
</template>