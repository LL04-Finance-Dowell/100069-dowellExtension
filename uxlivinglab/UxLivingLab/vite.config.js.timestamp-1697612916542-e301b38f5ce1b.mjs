// vite.config.js
import { defineConfig } from "file:///D:/upwork/100069-dowellExtension-V2.0/uxlivinglab/UxLivingLab/node_modules/vite/dist/node/index.js";
import react from "file:///D:/upwork/100069-dowellExtension-V2.0/uxlivinglab/UxLivingLab/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { viteStaticCopy } from "file:///D:/upwork/100069-dowellExtension-V2.0/uxlivinglab/UxLivingLab/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "manifest.json", dest: "" },
        { src: "src/assets/128.png", dest: "" },
        { src: "src/assets/48.png", dest: "" },
        { src: "src/assets/16.png", dest: "" }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx1cHdvcmtcXFxcMTAwMDY5LWRvd2VsbEV4dGVuc2lvbi1WMi4wXFxcXHV4bGl2aW5nbGFiXFxcXFV4TGl2aW5nTGFiXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx1cHdvcmtcXFxcMTAwMDY5LWRvd2VsbEV4dGVuc2lvbi1WMi4wXFxcXHV4bGl2aW5nbGFiXFxcXFV4TGl2aW5nTGFiXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi91cHdvcmsvMTAwMDY5LWRvd2VsbEV4dGVuc2lvbi1WMi4wL3V4bGl2aW5nbGFiL1V4TGl2aW5nTGFiL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdGF0aWMtY29weVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdml0ZVN0YXRpY0NvcHkoe1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7IHNyYzogXCJtYW5pZmVzdC5qc29uXCIsIGRlc3Q6IFwiXCIgfSxcbiAgICAgICAgeyBzcmM6IFwic3JjL2Fzc2V0cy8xMjgucG5nXCIsIGRlc3Q6IFwiXCIgfSxcbiAgICAgICAgeyBzcmM6IFwic3JjL2Fzc2V0cy80OC5wbmdcIiwgZGVzdDogXCJcIiB9LFxuICAgICAgICB7IHNyYzogXCJzcmMvYXNzZXRzLzE2LnBuZ1wiLCBkZXN0OiBcIlwiIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1YLFNBQVMsb0JBQW9CO0FBQ2haLE9BQU8sV0FBVztBQUNsQixTQUFTLHNCQUFzQjtBQUcvQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxFQUFFLEtBQUssaUJBQWlCLE1BQU0sR0FBRztBQUFBLFFBQ2pDLEVBQUUsS0FBSyxzQkFBc0IsTUFBTSxHQUFHO0FBQUEsUUFDdEMsRUFBRSxLQUFLLHFCQUFxQixNQUFNLEdBQUc7QUFBQSxRQUNyQyxFQUFFLEtBQUsscUJBQXFCLE1BQU0sR0FBRztBQUFBLE1BQ3ZDO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
