import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from 'vite-plugin-svgr'
import imageminPlugin from 'vite-plugin-imagemin';
import vike from 'vike/plugin' 

export default defineConfig({
  
  plugins: [react(),vike(), svgr(), imageminPlugin({
    gifsicle: { optimizationLevel: 7 },
    mozjpeg: { quality: 80 },
    pngquant: { quality: [0.6, 0.8] },
    webp: { quality: 80 },
}),],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

