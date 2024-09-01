import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
import mochaPlugin from 'eslint-plugin-mocha';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import cypressPlugin from 'eslint-plugin-cypress';

export default [
  pluginJs.configs.recommended,
  eslintPlugin.configs['flat/recommended'],
  nodePlugin.configs['flat/recommended-script'],
  mochaPlugin.configs.flat.recommended,
  {
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.browser,
        cy: 'readonly',
        Cypress: 'readonly',
      },
    },
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/**', 'dist/**'], // Certifique-se de que o arquivo e2e.ts não está sendo ignorado aqui
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      cypress: cypressPlugin,
    },
    rules: {
      'no-redeclare': 'off',
      'eslint-plugin/require-meta-docs-url': [
        'error',
        {
          pattern:
            'https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/{{name}}.md',
        },
      ],
      'eslint-plugin/require-meta-docs-description': 'error',
      'eslint-plugin/meta-property-ordering': 'error',
      'eslint-plugin/test-case-property-ordering': 'error',
      'n/no-extraneous-require': [
        'error',
        { allowModules: ['jest-config'] },
      ],
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-setup-in-describe': 'off',
    },
  },
];