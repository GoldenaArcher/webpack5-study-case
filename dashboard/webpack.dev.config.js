const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: { lion: './src/dashboard.js' },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist/'),
    // default for webpack5: publicPath: 'auto'
    // default for webpack4: publicPath: ''
    publicPath: 'http://localhost:9000',
    clean: true,
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'lion.html',
      writeToDisk: true, // by default is false
    },
    historyApiFallback: {
      index: 'dashboard.html',
    },
  },
  module: {
    rules: [
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      title: 'Dashboard',
    }),
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
        LionApp: 'LionApp@http://localhost:9002/remoteEntry.js',
      },
    }),
  ],
};
