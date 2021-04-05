module.exports = {
  root: false,
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'unicorn', 'simple-import-sort'],
  extends: ['react-app'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/first': 'off',
    'import/no-default-export': 'off',
    'import/no-anonymous-default-export': 'off',
    'require-await': 'error',
    'no-async-promise-executor': 'error',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          [
            // Side effect imports.
            '^\\u0000',
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            '^@?\\w',
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything that does not start with a dot.
            '^[^.]',
            // Relative imports.
            // Anything that starts with a dot.
            '^\\.',
          ],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**.*tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          './tsconfig.eslint.json',
          './packages/*/tsconfig.json',
          './services/*/tsconfig.json',
          './app/tsconfig.json',
          './website/tsconfig.json',
          './scripts/tsconfig.json',
          './cypress/tsconfig.json',
          './examples/*/tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.graphql', '.mdx'],
      },
      plugins: ['@typescript-eslint', 'cypress', 'jest', 'react', 'import'],
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:cypress/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:mdx/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
      ],
      env: {
        es6: true,
        browser: true,
        commonjs: true,
        jest: true,
        node: true,
      },
      rules: {
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',
        'consistent-return': 'off',
        'import/prefer-default-export': 'off',
        'import/no-useless-path-segments': 'off',
        'no-param-reassign': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'warn',
        'react/display-name': 'off',
        'import/no-cycle': 'off',
        'no-multi-assign': 'off',
        'no-underscore-dangle': 'off',
        'no-nested-ternary': 'off',
        'import/imports-first': ['error', 'absolute-first'],
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
          },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        quotes: [
          2,
          'single',
          {
            avoidEscape: true,
          },
        ],
        semi: ['error', 'never'],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx', '.mdx', '.json'],
        },
        'import/resolver': {
          'babel-module': {},
          typescript: {},
        },
        react: {
          version: 'detect',
        },
      },
    },
  ],
}
