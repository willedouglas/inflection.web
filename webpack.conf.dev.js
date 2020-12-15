const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.json');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, project.scripts.dist.root),
    filename: project.scripts.dist.filename.dev,
    publicPath: '/',
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
    historyApiFallback: true,
    compress: true,
    port: 8080,
  },
};
