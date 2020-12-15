const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const project = require('./project.json');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, project.scripts.dist.root),
    filename: project.scripts.dist.filename.prod,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            warnings: false,
          },
          sourceMap: true,
        },
      }),
    ],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new MiniCssExtractPlugin({
      filename: project.styles.dist.filename.prod,
    }),
  ],
};
