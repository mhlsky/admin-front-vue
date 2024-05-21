import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
export default [
  {
    languageOptions: {
      globals: globals.browser,
      //
      parserOptions: {
        "parser": tseslint.parser
      }
    },
    ignores: [],
  },
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
