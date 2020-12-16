const path = require('path');
const aliases = require('./aliases');

const alias = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
  webpack: {
    alias,
  },
};
