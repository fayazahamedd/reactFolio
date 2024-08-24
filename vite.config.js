/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
// Define paths for easier imports
const pathResolve = dir => path.resolve(__dirname, dir);
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@component': pathResolve('./src/Components'),
      '@pages': pathResolve('./src/pages'),
    },
  },
  
  server: {
    port: 3210,
    open: true, // Open the default browser when the server starts
  },

  build: {
    // Disable source maps for production build
    sourcemap: false,
    // Set the target environment to ECMAScript 2018
    target: 'es2018',
    // Disable Brotli size display in the build summary
    brotliSize: false,
    // Set the warning limit for chunk sizes during build
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Define MIME types for JavaScript files with 'js' and 'jsx' extensions
        mimeTypes: {
          'application/javascript': ['js', 'jsx']
        },
        // Set the script type to 'module'
        scriptType: 'module',
      },
    },
  },
});