import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import viteCompression from "vite-plugin-compression";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://www.wujunyi.cn",
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
});
