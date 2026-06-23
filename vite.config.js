import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isGithubPages = mode === 'github'

  return {
    plugins: [react()],
    base: isGithubPages ? '/tristan-portfolio-site/' : '/',
  }
})
