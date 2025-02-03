import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the Vite configuration
export default defineConfig({
  plugins: [react()], // Use the React plugin
  resolve: {
    alias: {
      '@': '/src', // Set up alias for src directory
    },
  },
  build: {
    sourcemap: true, // Enable source maps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react-bootstrap', 'react-router-dom', 'react-redux', '@reduxjs/toolkit'], // Split vendor libraries into a separate chunk
        },
      },
    },
  },
  server: {
    port: 3000, // Set the server port
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000', // Proxy API requests to backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite API paths
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Include React and React DOM in dependency optimization
  },
});
