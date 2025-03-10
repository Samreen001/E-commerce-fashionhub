import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "linebreak-style": ["error", "unix"], // Ensure LF endings
      "react/react-in-jsx-scope": "off", // Useful for Next.js
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
