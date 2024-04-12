const eslintConfig = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      files: ["**/*.test.js"],
      env: { jest: true },
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: { "jest/prefer-expect-assertions": "off" },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    strict: 2,
    indent: 0,
    "linebreak-style": 0,
    // other rules...
  },
};
