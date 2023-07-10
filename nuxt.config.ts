import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  dir: {
    pages: "routes"
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  }
})
