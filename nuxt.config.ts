// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/scripts", "@nuxt/eslint", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
});
