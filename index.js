module.exports = {
  extends: 'airbnb-base',
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    parser: 'babel-eslint',
  },
  env: {
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'no-throw-literal': 'off',
    'no-return-await': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': ['error', 'as-needed', { 'requireReturnForObjectLiteral': true }],
    'consistent-return': 'warn',
    'prefer-promise-reject-errors': 'warn',
  },
};
