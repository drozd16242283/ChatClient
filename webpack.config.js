const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false,
  watch: true,
  beforeEmit: true
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader']
      }
    ]
  },
  resolve: {
    alias: {
      Components: __dirname + '/src/Components/',
      Store: __dirname + '/src/store'
    },
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], cleanOptions),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: __dirname + '/public/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: '/dist'
  }
};
