module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "vue/max-len": ["error", {
        "code": 300,
        "template": 300,
        "tabWidth": 2,
        "comments": 300,
        "ignorePattern": "",
        "ignoreComments": false,
        "ignoreTrailingComments": false,
        "ignoreUrls": false,
        "ignoreStrings": false,
        "ignoreTemplateLiterals": false,
        "ignoreRegExpLiterals": false,
        "ignoreHTMLAttributeValues": false,
        "ignoreHTMLTextContents": false,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
