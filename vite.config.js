import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vitePluginRequire from 'vite-plugin-require'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    }),
    vitePluginRequire.default()
  ],
  resolve: {
    alias: {
      vue: '@vue/compat'
    }
  }
})
