import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Ruta relativa para servidores locales como XAMPP
  server: {
    host: 'localhost',
    port: 3000,
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: true,
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js', // Alias para usar la versión que soporta la compilación en tiempo de ejecución
    },
  },
})
