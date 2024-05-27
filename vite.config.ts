import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src"),
      atoms: path.resolve(__dirname, "./src/components/atoms"),
      pages: path.resolve(__dirname, "./src/pages"),
      molecules: path.resolve(__dirname, "./src/components/molecules"),
    },
  },
})
