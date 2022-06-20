module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "object-literal-sort-keys": false,
    "interface-name": false,
    "ordered-imports": false,
    "variable-name": false,
    "class-name": false,
    "member-ordering": false,
    "no-angle-bracket-type-assertion": false
  }
};
