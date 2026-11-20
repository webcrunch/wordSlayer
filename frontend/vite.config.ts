// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // "/" by default; the Docker build sets VITE_BASE_PATH to serve the game under a sub-path.
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss()],

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5002",
        changeOrigin: true,
        secure: false
      }
    }
  },

  build: {
    outDir: '../backend/wwwroot',
    emptyOutDir: true,
  }
});
