'use strict';

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'ember'
    ],
    extends: [
        'eslint:recommended',
        'plugin:ember/recommended'
    ],
    env: {
        browser: true
    },
    rules: {
        indent: ['error', 4]
    },
    overrides: [
        {
            files: [
                '.eslintrc.js',
                '.template-lintrc.js',
                'ember-cli-build.js',
                'testem.js',
                'blueprints/*/index.js',
                'config/**/*.js',
                'lib/*/index.js',
                'server/**/*.js'
            ],
            parserOptions: {
                sourceType: 'script'
            },
            env: {
                browser: false,
                node: true
            },
            plugins: ['node'],
            extends: ['plugin:node/recommended'],
            rules: {
                'node/no-unpublished-require': 'off'
            }
        }
    ]
};
