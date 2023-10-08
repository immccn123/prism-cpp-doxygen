import terser from "@rollup/plugin-terser";

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
  plugins: [],
};
