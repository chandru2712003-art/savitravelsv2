import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      server: {
        entry: "src/server.ts",
      },
    }),
    react(),
  ],
  // @ts-ignore - nitro config is passed through by TanStack Start
  nitro: {
    preset: "vercel",
  },
});