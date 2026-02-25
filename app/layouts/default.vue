<template>
    <UPage>
        <HeaderCustom />
        <template #left>
            <UPageAside class="lg:flex flex-col h-full justify-end">
                <slot name="left" />
            </UPageAside>
        </template>
        <template #right>
            <UPageAside>
                <slot name="right" />
            </UPageAside>
        </template>
        <UPageBody class="mb-10">
            <slot />
        </UPageBody>
        <FooterCustom />
    </UPage>
</template>