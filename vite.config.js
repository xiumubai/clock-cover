import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import requireTransform from 'vite-plugin-require-transform';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), requireTransform(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: generateModifyVars(),
        javascriptEnabled: true,
      },
    },
  },
})
