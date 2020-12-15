const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const project = require('./project.json');

module.exports = {
  entry: {
    inflection: path.resolve(__dirname, project.scripts.source.inflection.entry),
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
      '@utils': path.resolve(__dirname, project.utils.source.entry),
      '@assets': path.resolve(__dirname, project.assets.source.files),
    },
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin(project.html.options),
    new CopyWebpackPlugin({
      patterns: [{
        from: project.assets.source.files,
        to: project.assets.dist.root,
        toType: 'template',
      }],
    }),
  ],
};
