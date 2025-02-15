import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['https://my-portfolio-using-react-ga3a.onrender.com/'],
    port: 3000
  },
  build: {
    outDir: 'dist'
},
  preview: {
    port: 3000}});
