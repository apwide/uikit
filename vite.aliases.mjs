import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  '@': path.resolve(__dirname, './src'),
  '@components': path.resolve(__dirname, './src/components')
}
