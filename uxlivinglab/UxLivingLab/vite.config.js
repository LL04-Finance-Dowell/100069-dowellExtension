import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "manifest.json", dest: "" },
        { src: "src/assets/128.png", dest: "" },
        { src: "src/assets/48.png", dest: "" },
        { src: "src/assets/16.png", dest: "" },
      ],
    }),
  ],
});
