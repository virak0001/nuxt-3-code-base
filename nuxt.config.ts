import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
      }
    ]
  ],
  vite: {
    plugins: [eslintPlugin()]
  }
})
