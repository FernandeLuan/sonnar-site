import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages publica este projeto no caminho /sonnar-site/.
// Se futuramente houver domínio próprio na raiz, altere base para '/'.
export default defineConfig({
  plugins: [react()],
  base: '/sonnar-site/',
})