import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: 0.0.0.0,
    port: process.env.PORT || 3000,  // Use Render's assigned port
    strictPort: true,
    cors: true
  },
  build: {
    outDir: "dist"
  },
  preview: {
    port: process.env.PORT || 3000,
    host: 0.0.0.0,
    cors: true
  }
});
