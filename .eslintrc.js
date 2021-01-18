module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier'
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
],
  rules: {
    "prettier/prettier": ["never"],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/state-in-constructor': 'off',
    'comma-dangle': ['error', 'never']
  }
};
