import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    ignores: ['library/site-archive/', 'library/build/'],
  },
  {
    files: ['library/scripts/modules/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        $: 'readonly',
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      eqeqeq: ['error', 'smart'],
      curly: ['error', 'multi-line'],
      'no-unused-vars': ['error', { args: 'none' }],
      'no-object-constructor': 'error',
      'no-multi-str': 'error',
      'no-caller': 'error',
      'dot-notation': 'warn',
      'consistent-return': 'error',
      'new-cap': 'warn',
      'no-use-before-define': 'warn',

      '@stylistic/space-before-blocks': 'error',
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/wrap-regex': 'error',
    },
  },
];
