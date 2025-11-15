import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    minify: false // Desactiva lightningcss
  },
  optimizeDeps: {
    exclude: ['lightningcss'] // Evita que esbuild lo analice
  }
})

