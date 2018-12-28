const postcsspresetenv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcsspresetenv,
    autoprefixer,
    cssnano
  ]
};
