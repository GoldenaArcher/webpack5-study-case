const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: { lion: './src/lion.js' },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist/'),
    // default for webpack5: publicPath: 'auto'
    // default for webpack4: publicPath: ''
    publicPath: 'http://localhost:9002/',
    clean: true,
  },
  mode: 'development',
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
  devServer: {
    port: 9002,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'lion.html',
      writeToDisk: true, // by default is false
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        // either type or use
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1014, // default value
          },
        },
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.s[a|c]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'lion.html',
      template: 'src/page-template.hbs',
      title: 'Cute lion',
      description: 'Very cute lion cub',
      chunks: ['lion'],
    }),
    new ModuleFederationPlugin({
      name: 'LionApp',
      filename: 'remoteEntry.js',
      exposes: {
        './LionPage': './src/components/lion-page/lion-page.js',
      },
    }),
  ],
};
