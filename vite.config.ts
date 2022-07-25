import { defineConfig } from 'vite';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';

import vue from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        vue()
        // svgLoader()
    ],
    build: {
        outDir: resolve(__dirname, 'dist', 'lib'),
        lib: {
            entry: resolve(__dirname, 'src', 'index.ts'),
            name: 'uikit',
            fileName: 'uikit'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
