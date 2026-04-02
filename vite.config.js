import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Config for 'npm run dev'
  server: {
    port: 5173,
    // Bind to all network interfaces so it escapes the Docker container
    host: "0.0.0.0",
  },
  // Config for 'npm run preview'
  preview: {
    port: 4173,
    // Bind to all network interfaces
    host: "0.0.0.0",
  },
});
