import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@ui": path.resolve(__dirname, "src/shared/ui"),
            "@assets": path.resolve(__dirname, "src/assets/"),
        },
    },
    plugins: [react(), svgr()],
});
