import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@models": path.resolve(__dirname, "./src/models/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
    },
  },
});
