import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {globalIgnores} from 'eslint/config'
// import simpleImportSort from 'eslint-plugin-simple-import-sort'
// import unusedImports from 'eslint-plugin-unused-imports'
// import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginReact from 'eslint-plugin-react'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      eslintPluginReact.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      quotes: ['error', 'double'],
      'no-console': ['error'],
      // 'simple-import-sort/imports': 'error',
      // 'simple-import-sort/exports': 'error',
      // 'unused-imports/no-unused-imports': 'error',
      // 'unused-imports/no-unused-vars': 'error',
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
      'no-unreachable': ['error'],
      'no-alert': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {props: 'never', children: 'never'},
      ],
      'padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: 'import', next: '*'},
        {blankLine: 'any', prev: 'import', next: 'import'},
        {blankLine: 'always', prev: 'return', next: '*'},
        {blankLine: 'always', prev: '*', next: 'export'},
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0,
        },
      ],
    },
  },
])
