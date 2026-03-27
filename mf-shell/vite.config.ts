import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

const remoteCharacters =
  process.env.FEDERATION_MF_CHARACTERS ??
  'http://localhost:3001/assets/remoteEntry.js'
const remoteCharacterDetail =
  process.env.FEDERATION_MF_CHARACTERDETAIL ??
  'http://localhost:3002/assets/remoteEntry.js'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    federation({
      name: 'mf-shell',
      filename: 'remoteEntry.js',
      exposes: {},
      remotes: {
        'mf-characters': remoteCharacters,
        'mf-characterdetail': remoteCharacterDetail,
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
      '@shared-types': resolve(__dirname, '../shared-types')
    },
  },
})
