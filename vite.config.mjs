import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import aliases from './vite.aliases.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: aliases
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'uikit',
      formats: ['umd'],
      fileName: () => 'uikit.js'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: (assetInfo) => (assetInfo.name && assetInfo.name.endsWith('.css') ? 'bundle.css' : assetInfo.name)
      }
    }
  }
})
