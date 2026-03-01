import js from "@eslint/js";
import ts from "typescript-eslint";
import lit from "eslint-plugin-lit";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      lit,
    },
    rules: {
      ...lit.configs.recommended.rules,
    },
  },
  {
    ignores: ["dist", "node_modules"],
  },
);
