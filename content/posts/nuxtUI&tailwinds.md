# Mastering Component Design with Nuxt UI

The combination of Nuxt UI and Tailwind CSS is the ultimate stack for shipping high-quality applications quickly. Nuxt UI provides the components, while Tailwind offers the utility classes to customize them precisely.

::card-group
  :::card{icon="i-lucide-palette" title="Beautiful by Default"}
  Start with a clean, modern design system that adapts to light and dark modes instantly.
  :::

  :::card{icon="i-lucide-bolt" title="Utility-First Speed"}
  Customize any component's look and feel with the speed and precision of Tailwind CSS classes.
  :::

  :::card{icon="i-lucide-accessibility" title="Accessibility Built-In"}
  All components are WAI-ARIA compliant, ensuring keyboard navigation and screen-reader support are handled for you.
  :::

  :::card{icon="i-lucide-blocks" title="Production Ready"}
  Benefit from 100+ battle-tested components that handle complex UI interactions and states out of the box.
  :::
::

## The Foundation: Nuxt UI Components

Nuxt UI offers over 100 components, eliminating the need to build fundamental elements from scratch. Let's look at the simple, unified API (Application Programming Interface).

### Component Props Example: The UButton

All Nuxt UI components use a consistent prop pattern for styling, which makes them easy to learn and modify. The `UButton` component is a perfect example:

::field-group
  :::field{name="variant" type="string" default="solid"}
  Controls the button's background style: `solid`, `outline`, `soft`, `ghost`, or `link`.
  :::

  :::field{name="color" type="string" default="primary"}
  Controls the color palette: `primary`, `red`, `green`, `blue`, etc.
  :::

  :::field{name="size" type="string" default="md"}
  Controls the size: `sm`, `md`, `lg`, or `xl`.
  :::
::

```vue
<template>
  <UButton color="green" variant="soft" size="lg">
    Submit Data
  </UButton>
  <UButton color="orange" variant="outline">
    Cancel
  </UButton>
</template>
```

## Advanced Customization with Tailwind

While the props cover common styles, Tailwind CSS allows for deep customization of any component by targeting specific CSS slots, making the UI infinitely adaptable.

::note{type="warning" title="Always Use the Official Theme Layer"}
Avoid overriding utility classes directly. Instead, use the integrated Nuxt UI Theme Layer to keep your customizations separate and maintainable. This preserves the original component's accessibility features.
::

### Theme Example: Changing a Card's Shadow

To customize the default shadow of a `UCard`, you don't edit the component code—you modify the theme configuration in your Nuxt configuration file.

This example code snippet shows how to target a component's class definition within the theme:

```typescript
// nuxt.config.ts

export default defineNuxtConfig({
  // ... other configs
  ui: {
    // Defines the default classes for the UCard component
    default: {
      card: {
        // Overrides the default shadow
        shadow: 'shadow-2xl hover:shadow-primary-400/50' 
      }
    }
  }
})
```

## Conclusion: Building with Confidence

Using Nuxt UI and Tailwind CSS means I can guarantee my applications are beautiful, responsive, and accessible from day one. It's a system that prioritizes developer speed without sacrificing production quality, allowing me to build robust interfaces with confidence.