import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://cdn.jsdelivr.net/gh/hernandezleoncio-cyber/AC_advisor@cursor%2Fwp-embed-efb4/hosted/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
});
