import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
    strictPort: true, // Ensures Vite only uses the defined port
    allowedHosts: ["my-portfolio-using-react-ga3a.onrender.com"], // Allow your Render domain
    cors: true // Enable CORS for cross-origin requests
  }
});
