import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    // Configuration for all JavaScript files
    files: ["**/*.js"],
    languageOptions: {
      // Use CommonJS module syntax
      sourceType: "commonjs",
      // Set global variables for Node.js environment
      globals: {
        ...globals.node,
        ...globals.browser, // For browser-related global variables
      },
    },
  },
  {
    // Configuration specifically for test files
    files: ["tests/**/*.js"],
    languageOptions: {
      // Set global variables for Jest testing environment
      globals: {
        ...globals.jest,
      },
    },
  },
  // Include recommended rules from the ESLint plugin for JavaScript
  pluginJs.configs.recommended,
];
