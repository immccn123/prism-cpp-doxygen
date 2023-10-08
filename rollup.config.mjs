import terser from "@rollup/plugin-terser";
import strip from "@rollup/plugin-strip";

export default {
  input: "src/main.js",
  output: [
    {
      file: "prism-cpp-doxygen.js",
      format: "iife",
    },
    {
      file: "prism-cpp-doxygen.min.js",
      format: "iife",
      plugins: [terser()],
    },
  ],
  plugins: [
    strip({
      labels: ["unittest"],
    }),
  ],
};
