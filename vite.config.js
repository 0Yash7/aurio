import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          gsap: ["gsap", "@gsap/react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
