import { defineConfig } from "vite";
import { resolve } from "path";

import vue from "@vitejs/plugin-vue2";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      name: "bob",
      fileName: "bob-lib",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
