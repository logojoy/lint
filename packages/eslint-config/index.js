module.exports = {
    env: {
      node: true,
      mocha: true,
      es6: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 2018
    },
    rules: {
      'array-bracket-spacing': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      semi: ['error', 'always'],
      'space-before-blocks': ['error', 'always'],
      quotes: ['error', 'single']
    }
};
