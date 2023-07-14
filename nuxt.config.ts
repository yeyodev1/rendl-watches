import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },
  vite: {
    plugins: [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
            @import '@fortawesome/fontawesome-free/scss/solid.scss';
            @import '@fortawesome/fontawesome-free/scss/regular.scss';
            @import '@fortawesome/fontawesome-free/scss/brands.scss';
            @import '@nabux-crush/crush-styles/nabuxInternalVariables';
            @import '@/styles/styles.scss';
          `
        }
      },
    },
  },
  // modules: [['@storyblok/nuxt', { accessToken: 'AhQR1WFGC3nEJEeDsjlDLAtt' }]],
})
