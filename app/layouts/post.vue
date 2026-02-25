<template>
    <UPage>
        <HeaderCustom />
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
        <FooterCustom />
    </UPage>
</template>