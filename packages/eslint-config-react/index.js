module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'react',
        'react-hooks'
    ],
    env: {
        browser: true,
        node: true
    },
    extends: ['plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: '16.8'
        }
    },
    rules: {
        'react/forbid-prop-types': ['error', {
            forbid: ['any'],
            checkContextTypes: true,
            checkChildContextTypes: true
        }],
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/jsx-indent': ['error', 4, {
            checkAttributes: true
        }],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-duplicate-props': ['error'],
        'react/self-closing-comp': ['error', {
            component: true,
            html: true
        }],

        'react-hooks/rules-of-hooks': 'error'
    }
};
