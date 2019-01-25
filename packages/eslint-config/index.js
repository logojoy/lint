module.exports = {
    env: {
        node: true,
        es6: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'eol-last': ['error', 'always'],
        eqeqeq: ['error'],
        indent: ['error', 4],
        'jsx-quotes': ['error', 'prefer-single'],
        'keyword-spacing': ['error'],
        'no-tabs': ['error'],
        'no-trailing-spaces': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'prefer-const': ['error'],
        'prefer-template': ['error'],
        semi: ['error', 'always'],
        'space-before-blocks': ['error', 'always'],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single']
    }
};
