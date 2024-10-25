import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePluginRobots } from 'vite-plugin-robots'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginRobots({
      userAgent: '*',
      allow: '/',
      disallow: '/private',
      sitemap: 'https://tuoitregiadinh.org.vn/',
    }),
  ],
})
