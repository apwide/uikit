import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import css from 'rollup-plugin-css-only'
import renameExtensions from '@betit/rollup-plugin-rename-extensions'

const plugins = [
  peerDepsExternal(),
  css({ output: 'bundle.css' }),
  resolve({
    extensions: ['.js', '.json', '.vue']
  }),
  commonjs(),
  vue({
    css: false
  }),
  renameExtensions({
    include: ['**/*.vue'],
    mappings: { '.vue': '.vue.js' }
  }),

  json()
]

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'es',
        dir: 'dist'
      },
      {
        format: 'cjs',
        file: 'dist/index.cjs.js'
      }
    ],
    plugins: [
      ...plugins,
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        plugins: ['@babel/plugin-transform-runtime']
      })
    ],
    external: [/@babel\/runtime/]
  }
]
