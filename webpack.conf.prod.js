const webpack = require('webpack');
const camelToKebabCase = require('camel-to-kebab');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const project = require('./project.json');

module.exports = {
  mode: 'production',
  devtool: '#source-map',
  output: {
    filename: ({ chunk }) => project.scripts.dist.filename.prod.replace('[name]', camelToKebabCase(chunk.name)),
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
