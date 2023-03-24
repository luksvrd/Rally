module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  overrides: [
    {
      files: ["*.js"],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      extends: [
        "plugin:@graphql-eslint/schema-recommended",
        "plugin:@graphql-eslint/operations-recommended",
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
