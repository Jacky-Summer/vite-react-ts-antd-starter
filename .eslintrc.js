module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
    ecmaVersion: 6,
  },
  plugins: ['react', 'standard', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      alias: [['@', './src']],
    },
  },
  rules: {
    semi: 0,
    indent: 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,

    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,

    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'implicit-arrow-linebreak': 0,
    'consistent-return': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,

    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
}
