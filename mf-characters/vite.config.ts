import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'mf-characters',
      filename: 'remoteEntry.js',
      exposes: {
        './CharactersPage': './src/pages/Characters',
      },
      shared: ['react', 'react-dom', '@tanstack/react-query'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
  },
  resolve: {
    alias: {
      '@shared-types': resolve(__dirname, '../shared-types'),
    },
  },
})