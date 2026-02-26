// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/scripts", "@nuxt/eslint", "@nuxt/content", "nuxt-easy-lightbox"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Sjnosukequy - Vuong Dinh Quy", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.svg" }],
    },
  },
});
