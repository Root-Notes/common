import * as path from "path";
// import typescript2 from "rollup-plugin-typescript2";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    // typescript2({
    //   check: false,
    //   include: ["src/**"],
    //   tsconfigOverride: {
    //     compilerOptions: {
    //       outDir: "dist",
    //       sourceMap: true,
    //       declaration: true,
    //       declarationMap: true,
    //     },
    //   },
    //   exclude: ["vite.config.tsx"],
    // }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/index.ts",
      name: "root-notes-common",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        // @ts-ignore
        main: path.resolve(__dirname, "src/index.ts"),
      },
      external: [
        "React",
        "@mantine/code-highlight",
        "@mantine/core",
        "@mantine/dates",
        "@mantine/dropzone",
        "@mantine/form",
        "@mantine/hooks",
        "@mantine/modals",
        "@mantine/notifications",
        "@mantine/spotlight",
        "@mantine/tiptap",
        "@tabler/icons-react",
        "@tiptap/extension-link",
        "@tiptap/react",
        "@tiptap/starter-kit",
        "dayjs",
        "react-icons",
        "i18next",
        "react-i18next",
        "lodash",
        "react",
        "react-dom",
      ],
      output: {
        exports: "named",
        globals: {
          react: "React",
        },
      },
    },
  },
  resolve: {
    alias: {
      // @ts-ignore
      "@": path.resolve(__dirname, "src"),
    },
  },
});
