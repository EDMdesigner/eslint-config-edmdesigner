module.exports = {
  extends: 'airbnb-base',
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    parser: 'babel-eslint',
  },
  env: {
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'no-throw-literal': 'off',
    'no-return-await': 'off',
    'consistent-return': 'warn',
    'arrow-body-style': ['error', 'as-needed', { 'requireReturnForObjectLiteral': true }],
  },
};
