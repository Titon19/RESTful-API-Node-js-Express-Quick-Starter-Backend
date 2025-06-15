module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: ["**/dist/*", "**/node_modules/*", "**/public/*", "**/tsconfig.json/*"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "**/tsconfig.json/*",
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
}
