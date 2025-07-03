import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'  // 使用 node: 协议更规范

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 确保 Vue 运行时使用 ESM 版本
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 使用 :use 替代已弃用的 :import
        additionalData: `
          @use "@/styles/variables.scss" as *;
        `
      }
    }
  }
})
