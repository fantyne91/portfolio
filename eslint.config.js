import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  pluginPrettier.configs.recommended, // Integrar Prettier
  configPrettier, // Desactivar reglas en conflicto con Prettier
];
