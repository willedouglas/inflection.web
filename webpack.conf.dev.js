const path = require('path');

const webpack = require('webpack');
const camelToKebabCase = require('camel-to-kebab');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.json');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: ({ chunk }) => project.scripts.dist.filename.dev.replace('[name]', camelToKebabCase(chunk.name)),
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new MiniCssExtractPlugin({
      filename: project.styles.dist.filename.dev,
    }),
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
};
