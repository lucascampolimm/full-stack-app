module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
        singleQuote: true,
        semi: true,
        trailingComma: 'none',
        bracketSpacing: true,
        printWidth: 100
      }
    ],
    'no-console': 'warn'
  }
};
