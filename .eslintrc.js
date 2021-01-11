module.exports = {
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: ["airbnb-typescript/base", "plugin:prettier/recommended", "prettier/@typescript-eslint"],
  plugins: ["prettier"],
  rules: {
    "import/extensions": ["off"]
  }
};
