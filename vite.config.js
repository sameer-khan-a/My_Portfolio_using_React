import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allows access from any IP
    port: 3000,  // Ensure the correct port is used
    strictPort: true,  // Ensures Vite uses this port if available
    cors: true  // Enables cross-origin access
  },
  build: {
    outDir: "dist"
  },
  preview: {
    port: 3000,
    host: true,  // Allows external access during preview mode
    cors: true
  }
});
