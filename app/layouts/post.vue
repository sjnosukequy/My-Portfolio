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
        <UPageBody>
            <slot />
        </UPageBody>
    </UPage>
    <FooterCustom />
</template>