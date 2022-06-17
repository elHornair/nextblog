module.exports = {
    extends: [
        'standard',
        'next'
    // "prettier"// TODO: when this is activated, eslint doesn't autofix anymore - But I would love to have this :)
    ],
    rules: {
        semi: [1, 'always'],
        indent: ['error', 4]
    }
};
