import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    minify: 'esbuild',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          // motion dahil - her component'te kullanıldığı için ayrı chunk verimsiz
          'react-vendor': ['react', 'react-dom', 'react-router', 'motion'],
          'icons': ['lucide-react'],
          'i18n': ['react-i18next', 'i18next'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router', 'motion/react', 'lucide-react', 'react-i18next'],
  },
  server: {
    compress: true,
  },
})
