import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  bundle: true,
  dts: true,
  outDir: "dist",
  format: ["esm", "cjs"],
  target: "node14",
});
