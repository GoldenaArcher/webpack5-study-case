const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: { home: './src/index.js' },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'build/'),
    // default for webpack5: publicPath: 'auto'
    // default for webpack4: publicPath: ''
    publicPath: 'http://localhost:9001',
    clean: true,
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
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
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.s[a|c]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      template: 'src/page-template.hbs',
      title: 'Title from HBS',
      description: 'description loaded from template file',
      chunks: ['index'],
    }),
    new ModuleFederationPlugin({
      name: 'HelloWorldApp',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWoldButton':
          './src/components/hello-world-button/hello-world-button.js',
        './HelloWorldPage': './src/components/hello-world-page/hello-world.js',
      },
    }),
  ],
};
