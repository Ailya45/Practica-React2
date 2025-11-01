import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    strictPort: true,
    port: process.env.PORT || 3000,

    hmr: {
      port: process.env.PORT 
    },

    host: '0.0.0.0', 
    allowedHosts: [
      'practica-react2-1.onrender.com',
    ]

  }
})

