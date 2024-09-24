import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    // Configuration for all JavaScript files
    files: ["**/*.js"],
    languageOptions: {
      // Use CommonJS module syntax
      sourceType: "commonjs",
    },
  },
  {
    // Set global variables for browser environments
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Include recommended rules from the ESLint plugin for JavaScript
  pluginJs.configs.recommended,
];
