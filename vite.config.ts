import { defineConfig } from 'vite';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';
import dts from 'vite-plugin-dts';

import vue from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        vue(),
        dts({
            outputDir: resolve(__dirname, 'dist', 'types'),
            include: ['src/**/*.ts', 'src/**/*.d.ts', 'src/**/*.tsx', 'src/**/*.vue'],
            exclude: ['src/vite-env.d.ts', 'src/main.ts', 'node_modules/**'],
            staticImport: true,
            insertTypesEntry: true,
            logDiagnostics: true,
            skipDiagnostics: false
        })
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
