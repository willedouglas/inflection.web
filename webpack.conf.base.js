const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const project = require('./project.json');

module.exports = {
  entry: {
    inflection: path.resolve(__dirname, project.scripts.source.inflection.entry),
  },
  output: {
    library: '[name]',
    libraryExport: 'default',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, project.scripts.dist.root),
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'postcss-loader',
        'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: project.images.dist.filename,
          context: project.images.source.context,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: project.fonts.dist.filename,
          context: project.fonts.source.context,
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, project.components.source.entry),
    },
  },
  plugins: [
    new HtmlWebpackPlugin(project.html.options),
    new MiniCssExtractPlugin({
      filename: project.styles.dist.filename.dev,
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: project.assets.source.files,
        to: project.assets.dist.root,
        toType: 'template',
      }],
    }),
  ],
};
