import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Reglas recomendadas de ESLint (JavaScript)
  pluginJs.configs.recommended,
  // Reglas recomendadas de React (flat)
  pluginReact.configs.flat.recommended,
  {
    // Añadimos el plugin de seguridad
    plugins: {
      security: pluginSecurity,
    },
    // Extendemos las reglas recomendadas del plugin de seguridad
    rules: {
      ...pluginSecurity.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off'
    },
  },
];
