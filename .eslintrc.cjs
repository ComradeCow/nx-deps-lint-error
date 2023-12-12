module.exports = {
  root: true,
  plugins: ["@nx"],
  env: {
    es2024: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.json"],
      parser: "jsonc-eslint-parser",
    },
  ],
  rules: {
    "@nx/dependency-checks": ["error"],
  },
};
