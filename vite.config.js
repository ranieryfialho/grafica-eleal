import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: "",

  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/portfolio/*',
          dest: 'portfolio'
        },
        { src: 'public/fundo-hero.gif', dest: '' },
        { src: 'public/imagem-escolha.jpg', dest: '' },
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        entryFileNames: `assets/eleal-script.js`,
        assetFileNames: `assets/eleal-style.css`,
      },
    },
  },
})