import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Caminhos relativos para carregar os assets corretamente no GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
})