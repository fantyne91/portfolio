import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [
    vue(),
  
  ],

  base: '/', // Ruta relativa para servidores 
  server: {
    host: 'localhost',
    port: 3000,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  build: {
    assetsInlineLimit: 0, // Evita que Vite convierta imágenes pequeñas en base64
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|webp|svg|gif)$/.test(assetInfo.name)) {
            return 'assets/[name]-[hash][extname]' // Evita problemas de caché con nombres únicos
          }
          return 'assets/[name][extname]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
})
