import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import aliases from './vite.aliases.mjs'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: aliases
  },
  test: {
    environment: 'jsdom',
    globals: true,
    clearMocks: true,
    css: false,
    setupFiles: ['./tests/setup.js'],
    include: ['tests/**/*.test.[jt]s?(x)']
  }
})
