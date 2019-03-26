module.exports = {
  env: {
    node: true,
    es6: true
  },
  plugins: ['gridsome'],
  rules: {
    'gridsome/format-query-block': 'error'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  }
};