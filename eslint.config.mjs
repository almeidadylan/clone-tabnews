import js from "@eslint/js";
import globals from "globals";
//import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import pluginJest from "eslint-plugin-jest";

export default defineConfig([
  {
    files: [
      "**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,'**/*.spec.js', '**/*.test.js'}",
    ],
    plugins: {
      js,
      react,
      jest: pluginJest,
    },
    extends: ["js/recommended"],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    ignores: [".next/**"],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
  //tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
]);
