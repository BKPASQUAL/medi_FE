// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Customize the port number
  },
  resolve: {
    alias: {
      '@components': '/src/components', // Create custom aliases for paths
    },
  },
})
