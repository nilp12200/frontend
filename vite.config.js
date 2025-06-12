import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

VITE_API_URL=https://backend-0dxg.onrender.com

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
      tailwindcss(),

  ],
      
})
