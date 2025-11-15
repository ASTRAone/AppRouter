import nextEslint from 'eslint-config-next';

export default [
  ...nextEslint,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];