module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  ignorePatterns: ['generated'],
  plugins: ['@typescript-eslint', 'react-hooks', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-shadow': 2,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    'react/prop-types': 0,
    '@typescript-eslint/unbound-method': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-constant-condition': ['error', { checkLoops: false }],
    'import/no-default-export': 2,
    'no-restricted-imports': ['error', 'aws-amplify', '@material-ui/core'],
    'import/no-restricted-paths': [
      'error',
      {
        basePath: '.',
        zones: [
          { target: './src/components', from: './src/css' },
          { target: './src/pages', from: './src/css' },
        ],
      },
    ],
  },
};
